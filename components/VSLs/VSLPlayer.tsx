"use client";

import { useRef, useState, useEffect } from "react";
import { Stream } from "@cloudflare/stream-react";
import { usePostHog } from "posthog-js/react";
import { 
    PlayIcon, 
    PauseIcon, 
    ArrowUturnLeftIcon, 
    SpeakerWaveIcon, 
    SpeakerXMarkIcon,
    Cog6ToothIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    CheckIcon
} from "@heroicons/react/24/solid";

interface VSLPlayerProps {
    videoId?: string;
    videoType?: "HOME" | "REPS" | "OWNERS" | "DQ_PAGE" | "THANKS_REP" | "THANKS_OWNERS";
}

type MenuState = "CLOSED" | "MAIN" | "SPEED" | "QUALITY";

export default function VSLPlayer({ 
    videoId = "6f2da4bf40995a935365919f3d00c304", 
    videoType = "HOME" 
}: VSLPlayerProps) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const streamRef = useRef<any>(null);
    const posthog = usePostHog();

    const [showUnmute, setShowUnmute] = useState(true);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true); 
    const [hasStarted, setHasStarted] = useState(false);
    
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);

    // Settings States
    const [menuState, setMenuState] = useState<MenuState>("CLOSED");
    const [playbackRate, setPlaybackRate] = useState<number>(1);
    
    // Cloudflare handles adaptive quality natively. We manage the UI state for it.
    // Quality typically ranges from "Auto" to "1080p", "720p", "360p"
    const [quality, setQuality] = useState<string>("Auto"); 
    
    const milestonesFired = useRef<Set<number>>(new Set());

    // --- DYNAMIC 3-PHASE MATH ---
    const getDummyPercentage = (actualSeconds: number, totalSeconds: number) => {
        if (!totalSeconds || isNaN(totalSeconds) || totalSeconds <= 0) return 0;
        if (isNaN(actualSeconds)) return 0;
        
        const actual = Math.max(0, Math.min(actualSeconds / totalSeconds, 1.0));
        
        const P1_TARGET = 0.50; 
        const P1_SPEED = 15;     
        
        const P2_TARGET = 0.70; 
        const P2_SPEED = 8;     

        const P1_ACTUAL_END = P1_TARGET / P1_SPEED; 
        const P2_ACTUAL_END = P1_ACTUAL_END + ((P2_TARGET - P1_TARGET) / P2_SPEED);

        let dummy = 0;
        
        if (actual <= P1_ACTUAL_END) {
            dummy = actual * P1_SPEED;
        } else if (actual <= P2_ACTUAL_END) {
            const actualPassedInPhase2 = actual - P1_ACTUAL_END;
            dummy = P1_TARGET + (actualPassedInPhase2 * P2_SPEED);
        } else {
            const remainingActual = 1.0 - P2_ACTUAL_END;
            const remainingDummy = 1.0 - P2_TARGET;
            const actualPassedInPhase3 = actual - P2_ACTUAL_END;
            
            const progressInPhase3 = actualPassedInPhase3 / remainingActual;
            dummy = P2_TARGET + (progressInPhase3 * remainingDummy);
        }
        
        return Math.max(0, Math.min(dummy * 100, 100));
    };

    const dummyPercentage = getDummyPercentage(currentTime, duration);

    const handleUnmuteClick = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation(); // Prevent play/pause toggle when clicking the giant unmute button
        if (streamRef.current) {
            streamRef.current.currentTime = 0;
            streamRef.current.muted = false;
        }
        setIsMuted(false);
        setShowUnmute(false);
        setIsPlaying(true);
        posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId });
    };

    const handleTimeUpdate = () => {
        const player = streamRef.current;
        if (!player) return;

        const currentActualTime = player.currentTime;
        const actualDuration = player.duration;

        if (typeof currentActualTime === "number" && !isNaN(currentActualTime)) {
            setCurrentTime(currentActualTime);
        }
        
        if (typeof actualDuration === "number" && !isNaN(actualDuration) && actualDuration > 1) {
            setDuration(actualDuration);
        }

        if (!posthog || isNaN(currentActualTime) || isNaN(actualDuration) || actualDuration <= 0) return;
        const percentage = (currentActualTime / actualDuration) * 100;
        const milestones = [10, 25, 50, 75, 90];

        milestones.forEach((milestone) => {
            if (percentage >= milestone && !milestonesFired.current.has(milestone)) {
                posthog.capture("vsl_milestone_reached", {
                    video_type: videoType,
                    video_id: videoId,
                    milestone: `${milestone}%`,
                    current_time_seconds: Math.round(currentActualTime),
                });
                milestonesFired.current.add(milestone);
            }
        });
    };

    const handleRewind = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (streamRef.current) {
            const newTime = Math.max(streamRef.current.currentTime - 10, 0);
            streamRef.current.currentTime = newTime;
            setCurrentTime(newTime);
            
            streamRef.current.play().catch(() => {});
            setIsPlaying(true);
        }
    };

    // Global Play/Pause Toggle
    const togglePlay = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        
        // Prevent toggle if the giant unmute screen is active
        if (showUnmute) return;

        // Prevent toggle if the settings menu is open (they might misclick)
        if (menuState !== "CLOSED") {
            setMenuState("CLOSED");
            return;
        }

        if (streamRef.current) {
            if (isPlaying) {
                streamRef.current.pause();
            } else {
                streamRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = (e?: React.MouseEvent) => {
        if (e) e.stopPropagation();
        if (streamRef.current) {
            const currentlyMuted = streamRef.current.muted;
            streamRef.current.muted = !currentlyMuted;
            setIsMuted(!currentlyMuted);
            
            if (currentlyMuted) {
                posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId, source: "control_bar" });
            } else {
                posthog.capture("vsl_muted", { video_type: videoType, video_id: videoId, source: "control_bar" });
            }
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        if (!hasStarted) {
            posthog.capture("vsl_started", { video_type: videoType, video_id: videoId });
            setHasStarted(true);
        } else {
            posthog.capture("vsl_resumed", { video_type: videoType, video_id: videoId });
        }
    };

    const handlePause = () => {
        setIsPlaying(false);
        if (streamRef.current && streamRef.current.currentTime < streamRef.current.duration) {
            posthog.capture("vsl_paused", { 
                video_type: videoType, 
                video_id: videoId,
                drop_off_second: Math.round(streamRef.current.currentTime) 
            });
        }
    };

    const handleEnded = () => {
        posthog.capture("vsl_completed", { video_type: videoType, video_id: videoId });
    };

    // --- SETTINGS HANDLERS ---
    const toggleSettingsMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setMenuState(prev => prev === "CLOSED" ? "MAIN" : "CLOSED");
    };

    const changePlaybackSpeed = (e: React.MouseEvent, speed: number) => {
        e.stopPropagation();
        if (streamRef.current) {
            streamRef.current.playbackRate = speed;
            setPlaybackRate(speed);
            setMenuState("CLOSED");
        }
    };

    return (
        <div 
            className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20 group cursor-pointer"
            onClick={togglePlay} // NEW: Clicking anywhere on the video toggles play/pause
        >
            <Stream
                src={videoId}
                data-customer="customer-sp8u4ylw46bdo5vk"
                autoplay
                muted
                controls={false}
                preload="auto"
                streamRef={streamRef}
                className="block w-full h-full border-none pointer-events-none"
                
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
            />
            
            {showUnmute && (
                <div
                    onClick={handleUnmuteClick}
                    className="absolute inset-0 bg-espresso/75 flex flex-col items-center justify-center gap-4 cursor-pointer z-20 transition-opacity"
                >
                    <span className="text-5xl">🔊</span>
                    <p className="text-bone font-bold text-xl m-0 text-center tracking-wide">
                        Your video is playing
                    </p>
                    <div className="bg-clay text-bone px-8 py-3 rounded-full font-bold text-lg tracking-wide shadow-lg hover:opacity-90 transition-opacity">
                        Click to unmute
                    </div>
                </div>
            )}

            {/* FLOATING SETTINGS MENU[cite: 2, 3, 4] */}
            {menuState !== "CLOSED" && (
                <div 
                    className="absolute bottom-20 right-4 bg-espresso/90 backdrop-blur-md text-bone rounded-xl shadow-2xl border border-white/10 w-48 overflow-hidden z-30 flex flex-col"
                    onClick={(e) => e.stopPropagation()} // Prevent clicks inside the menu from pausing the video
                >
                    {/* Main Settings View */}
                    {menuState === "MAIN" && (
                        <>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setMenuState("QUALITY"); }}
                                className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium">Quality</span>
                                </div>
                                <div className="flex items-center gap-1 text-bone/60">
                                    <span className="text-xs">{quality}</span>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </div>
                            </button>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setMenuState("SPEED"); }}
                                className="flex items-center justify-between w-full px-4 py-3 hover:bg-white/10 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium">Speed</span>
                                </div>
                                <div className="flex items-center gap-1 text-bone/60">
                                    <span className="text-xs">{playbackRate === 1 ? "Normal" : `${playbackRate}x`}</span>
                                    <ChevronRightIcon className="w-4 h-4" />
                                </div>
                            </button>
                        </>
                    )}

                    {/* Speed Selection View */}
                    {menuState === "SPEED" && (
                        <>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setMenuState("MAIN"); }}
                                className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10 font-bold"
                            >
                                <ChevronLeftIcon className="w-4 h-4" />
                                <span className="text-sm">Speed</span>
                            </button>
                            
                            {[0.5, 0.75, 1, 1.25, 1.5, 2].map(speed => (
                                <button
                                    key={speed}
                                    onClick={(e) => changePlaybackSpeed(e, speed)}
                                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-sm">{speed === 1 ? "Normal" : `${speed}x`}</span>
                                    {playbackRate === speed && <CheckIcon className="w-4 h-4 text-clay" />}
                                </button>
                            ))}
                        </>
                    )}

                    {/* Quality Selection View (Visual placeholder as Cloudflare adapts natively) */}
                    {menuState === "QUALITY" && (
                        <>
                            <button 
                                onClick={(e) => { e.stopPropagation(); setMenuState("MAIN"); }}
                                className="flex items-center gap-2 w-full px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/10 font-bold"
                            >
                                <ChevronLeftIcon className="w-4 h-4" />
                                <span className="text-sm">Quality</span>
                            </button>
                            
                            {["Auto", "1080p", "720p", "360p"].map(q => (
                                <button
                                    key={q}
                                    onClick={(e) => { e.stopPropagation(); setQuality(q); setMenuState("CLOSED"); }}
                                    className="flex items-center justify-between w-full px-4 py-2 hover:bg-white/10 transition-colors"
                                >
                                    <span className="text-sm">{q}</span>
                                    {quality === q && <CheckIcon className="w-4 h-4 text-clay" />}
                                </button>
                            ))}
                        </>
                    )}
                </div>
            )}

            <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-3 z-10 transition-opacity duration-300 ${showUnmute ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                
                {/* VISUAL ONLY PROGRESS BAR */}
                <div className="relative w-full h-2 bg-taupe/40 rounded-full overflow-hidden flex items-center">
                    <div
                        className="h-full bg-bone pointer-events-none z-10 transition-all duration-200"
                        style={{ width: `${dummyPercentage}%` }}
                    />
                </div>

                {!showUnmute && (
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-5">
                            {/* Play/Pause Button */}
                            <button
                                onClick={togglePlay}
                                className="text-bone hover:text-clay transition-colors"
                            >
                                {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
                            </button>
                            
                            {/* 10s Rewind Button */}
                            <button
                                onClick={handleRewind}
                                className="text-bone hover:text-clay transition-colors flex items-center gap-1"
                                title="Rewind 10 Seconds"
                            >
                                <ArrowUturnLeftIcon className="w-6 h-6" />
                                <span className="font-bold text-sm">10s</span>
                            </button>

                            {/* Mute/Unmute Button */}
                            <button
                                onClick={toggleMute}
                                className="text-bone hover:text-clay transition-colors ml-2"
                                title={isMuted ? "Unmute" : "Mute"}
                            >
                                {isMuted ? <SpeakerXMarkIcon className="w-7 h-7" /> : <SpeakerWaveIcon className="w-7 h-7" />}
                            </button>
                        </div>

                        {/* NEW: Settings Button */}
                        <div className="flex items-center">
                            <button
                                onClick={toggleSettingsMenu}
                                className={`text-bone hover:text-clay transition-colors ${menuState !== "CLOSED" ? "text-clay" : ""}`}
                                title="Settings"
                            >
                                <Cog6ToothIcon className="w-7 h-7" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}





















// "use client";

// import { useRef, useState } from "react";
// import { Stream } from "@cloudflare/stream-react";
// import { usePostHog } from "posthog-js/react";
// import { 
//     PlayIcon, 
//     PauseIcon, 
//     ArrowUturnLeftIcon, 
//     SpeakerWaveIcon, 
//     SpeakerXMarkIcon 
// } from "@heroicons/react/24/solid";

// interface VSLPlayerProps {
//     videoId?: string;
//     videoType?: "HOME" | "REPS" | "OWNERS" | "DQ_PAGE" | "THANKS_REP" | "THANKS_OWNERS";
// }

// export default function VSLPlayer({ 
//     videoId = "6f2da4bf40995a935365919f3d00c304", 
//     videoType = "HOME" 
// }: VSLPlayerProps) {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     const streamRef = useRef<any>(null);
//     const posthog = usePostHog();

//     const [showUnmute, setShowUnmute] = useState(true);
//     const [isPlaying, setIsPlaying] = useState(true);
//     const [isMuted, setIsMuted] = useState(true); // NEW: Track the ongoing mute state
//     const [hasStarted, setHasStarted] = useState(false);
    
//     const [currentTime, setCurrentTime] = useState(0);
//     const [duration, setDuration] = useState(1);

//     const milestonesFired = useRef<Set<number>>(new Set());

//     // --- DYNAMIC 3-PHASE MATH ---
//     const getDummyPercentage = (actualSeconds: number, totalSeconds: number) => {
//         if (!totalSeconds || isNaN(totalSeconds) || totalSeconds <= 0) return 0;
//         if (isNaN(actualSeconds)) return 0;
        
//         const actual = Math.max(0, Math.min(actualSeconds / totalSeconds, 1.0));
        
//         const P1_TARGET = 0.50; 
//         const P1_SPEED = 15;     
        
//         const P2_TARGET = 0.70; 
//         const P2_SPEED = 8;     

//         const P1_ACTUAL_END = P1_TARGET / P1_SPEED; 
//         const P2_ACTUAL_END = P1_ACTUAL_END + ((P2_TARGET - P1_TARGET) / P2_SPEED);

//         let dummy = 0;
        
//         if (actual <= P1_ACTUAL_END) {
//             dummy = actual * P1_SPEED;
//         } else if (actual <= P2_ACTUAL_END) {
//             const actualPassedInPhase2 = actual - P1_ACTUAL_END;
//             dummy = P1_TARGET + (actualPassedInPhase2 * P2_SPEED);
//         } else {
//             const remainingActual = 1.0 - P2_ACTUAL_END;
//             const remainingDummy = 1.0 - P2_TARGET;
//             const actualPassedInPhase3 = actual - P2_ACTUAL_END;
            
//             const progressInPhase3 = actualPassedInPhase3 / remainingActual;
//             dummy = P2_TARGET + (progressInPhase3 * remainingDummy);
//         }
        
//         return Math.max(0, Math.min(dummy * 100, 100));
//     };

//     const dummyPercentage = getDummyPercentage(currentTime, duration);

//     // Initial Giant Overlay Click
//     const handleUnmuteClick = () => {
//         if (streamRef.current) {
//             streamRef.current.currentTime = 0;
//             streamRef.current.muted = false;
//         }
//         setIsMuted(false);
//         setShowUnmute(false);
//         setIsPlaying(true);
//         posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId });
//     };

//     const handleTimeUpdate = () => {
//         const player = streamRef.current;
//         if (!player) return;

//         const currentActualTime = player.currentTime;
//         const actualDuration = player.duration;

//         if (typeof currentActualTime === "number" && !isNaN(currentActualTime)) {
//             setCurrentTime(currentActualTime);
//         }
        
//         if (typeof actualDuration === "number" && !isNaN(actualDuration) && actualDuration > 1) {
//             setDuration(actualDuration);
//         }

//         if (!posthog || isNaN(currentActualTime) || isNaN(actualDuration) || actualDuration <= 0) return;
//         const percentage = (currentActualTime / actualDuration) * 100;
//         const milestones = [10, 25, 50, 75, 90];

//         milestones.forEach((milestone) => {
//             if (percentage >= milestone && !milestonesFired.current.has(milestone)) {
//                 posthog.capture("vsl_milestone_reached", {
//                     video_type: videoType,
//                     video_id: videoId,
//                     milestone: `${milestone}%`,
//                     current_time_seconds: Math.round(currentActualTime),
//                 });
//                 milestonesFired.current.add(milestone);
//             }
//         });
//     };

//     const handleRewind = () => {
//         if (streamRef.current) {
//             const newTime = Math.max(streamRef.current.currentTime - 10, 0);
//             streamRef.current.currentTime = newTime;
//             setCurrentTime(newTime);
            
//             streamRef.current.play().catch(() => {});
//             setIsPlaying(true);
//         }
//     };

//     const togglePlay = () => {
//         if (streamRef.current) {
//             if (isPlaying) {
//                 streamRef.current.pause();
//             } else {
//                 streamRef.current.play();
//             }
//             setIsPlaying(!isPlaying);
//         }
//     };

//     // NEW: Toggle Mute Function
//     const toggleMute = () => {
//         if (streamRef.current) {
//             const currentlyMuted = streamRef.current.muted;
//             streamRef.current.muted = !currentlyMuted;
//             setIsMuted(!currentlyMuted);
            
//             // Track the manual mute/unmute toggle in PostHog
//             if (currentlyMuted) {
//                 posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId, source: "control_bar" });
//             } else {
//                 posthog.capture("vsl_muted", { video_type: videoType, video_id: videoId, source: "control_bar" });
//             }
//         }
//     };

//     const handlePlay = () => {
//         setIsPlaying(true);
//         if (!hasStarted) {
//             posthog.capture("vsl_started", { video_type: videoType, video_id: videoId });
//             setHasStarted(true);
//         } else {
//             posthog.capture("vsl_resumed", { video_type: videoType, video_id: videoId });
//         }
//     };

//     const handlePause = () => {
//         setIsPlaying(false);
//         if (streamRef.current && streamRef.current.currentTime < streamRef.current.duration) {
//             posthog.capture("vsl_paused", { 
//                 video_type: videoType, 
//                 video_id: videoId,
//                 drop_off_second: Math.round(streamRef.current.currentTime) 
//             });
//         }
//     };

//     const handleEnded = () => {
//         posthog.capture("vsl_completed", { video_type: videoType, video_id: videoId });
//     };

//     return (
//         <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20 group">
//             <Stream
//                 src={videoId}
//                 data-customer="customer-sp8u4ylw46bdo5vk"
//                 autoplay
//                 muted
//                 controls={false}
//                 preload="auto"
//                 streamRef={streamRef}
//                 className="block w-full h-full border-none pointer-events-none"
                
//                 onPlay={handlePlay}
//                 onPause={handlePause}
//                 onEnded={handleEnded}
//                 onTimeUpdate={handleTimeUpdate}
//             />
            
//             {showUnmute && (
//                 <div
//                     onClick={handleUnmuteClick}
//                     className="absolute inset-0 bg-espresso/75 flex flex-col items-center justify-center gap-4 cursor-pointer z-20 transition-opacity"
//                 >
//                     <span className="text-5xl">🔊</span>
//                     <p className="text-bone font-bold text-xl m-0 text-center tracking-wide">
//                         Your video is playing
//                     </p>
//                     <div className="bg-clay text-bone px-8 py-3 rounded-full font-bold text-lg tracking-wide shadow-lg hover:opacity-90 transition-opacity">
//                         Click to unmute
//                     </div>
//                 </div>
//             )}

//             <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-3 z-10 transition-opacity duration-300 ${showUnmute ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                
//                 {/* VISUAL ONLY PROGRESS BAR */}
//                 <div className="relative w-full h-2 bg-taupe/40 rounded-full overflow-hidden flex items-center">
//                     <div
//                         className="h-full bg-bone pointer-events-none z-10 transition-all duration-200"
//                         style={{ width: `${dummyPercentage}%` }}
//                     />
//                 </div>

//                 {!showUnmute && (
//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-5">
//                             {/* Play/Pause Button */}
//                             <button
//                                 onClick={togglePlay}
//                                 className="text-bone hover:text-clay transition-colors"
//                             >
//                                 {isPlaying ? <PauseIcon className="w-8 h-8" /> : <PlayIcon className="w-8 h-8" />}
//                             </button>
                            
//                             {/* 10s Rewind Button */}
//                             <button
//                                 onClick={handleRewind}
//                                 className="text-bone hover:text-clay transition-colors flex items-center gap-1"
//                                 title="Rewind 10 Seconds"
//                             >
//                                 <ArrowUturnLeftIcon className="w-6 h-6" />
//                                 <span className="font-bold text-sm">10s</span>
//                             </button>

//                             {/* NEW: Mute/Unmute Button */}
//                             <button
//                                 onClick={toggleMute}
//                                 className="text-bone hover:text-clay transition-colors ml-2"
//                                 title={isMuted ? "Unmute" : "Mute"}
//                             >
//                                 {isMuted ? <SpeakerXMarkIcon className="w-7 h-7" /> : <SpeakerWaveIcon className="w-7 h-7" />}
//                             </button>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }






















// "use client";

// import { useRef, useState } from "react";
// import { Stream } from "@cloudflare/stream-react";
// import { usePostHog } from "posthog-js/react";

// interface VSLPlayerProps {
// 	videoId?: string;
// 	videoType?: "HOME" | "REPS" | "OWNERS" | "DQ_PAGE" | "THANKS_REP" | "THANKS_OWNERS";
// }

// export default function VSLPlayer({ 
// 	videoId = "6f2da4bf40995a935365919f3d00c304", 
// 	videoType = "HOME" 
// }: VSLPlayerProps) {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const streamRef = useRef<any>(null);
// 	const [showUnmute, setShowUnmute] = useState(true);
// 	const posthog = usePostHog();
	
// 	const [hasStarted, setHasStarted] = useState(false);
	
// 	// FIX: Track fired milestones with a Ref so we don't trigger React re-renders!
// 	const milestonesFired = useRef<Set<number>>(new Set());

// 	const handleUnmuteClick = () => {
// 		if (streamRef.current) {
// 			streamRef.current.muted = false;
// 		}
// 		setShowUnmute(false);
// 		posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId });
// 	};

// 	// FIX: Bulletproof milestone tracking directly attached to the Cloudflare player
// 	const handleTimeUpdate = () => {
// 		const player = streamRef.current;
// 		if (!player || !player.duration || !posthog) return;

// 		const percentage = (player.currentTime / player.duration) * 100;
// 		const milestones = [10, 25, 50, 75, 90];

// 		milestones.forEach((milestone) => {
// 			// If we passed the milestone AND haven't fired it yet...
// 			if (percentage >= milestone && !milestonesFired.current.has(milestone)) {
// 				posthog.capture("vsl_milestone_reached", {
// 					video_type: videoType,
// 					video_id: videoId,
// 					milestone: `${milestone}%`,
// 					current_time_seconds: Math.round(player.currentTime),
// 				});
// 				// Add it to our silent Ref tracker
// 				milestonesFired.current.add(milestone);
// 			}
// 		});
// 	};

// 	const handlePlay = () => {
// 		if (!hasStarted) {
// 			posthog.capture("vsl_started", { video_type: videoType, video_id: videoId });
// 			setHasStarted(true);
// 		} else {
// 			posthog.capture("vsl_resumed", { video_type: videoType, video_id: videoId });
// 		}
// 	};

// 	const handlePause = () => {
// 		if (streamRef.current && streamRef.current.currentTime < streamRef.current.duration) {
// 			posthog.capture("vsl_paused", { 
// 				video_type: videoType, 
// 				video_id: videoId,
// 				drop_off_second: Math.round(streamRef.current.currentTime) 
// 			});
// 		}
// 	};

// 	const handleEnded = () => {
// 		posthog.capture("vsl_completed", { video_type: videoType, video_id: videoId });
// 	};

// 	return (
// 		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20">
// 			<Stream
// 				src={videoId}
// 				data-customer="customer-sp8u4ylw46bdo5vk"
// 				autoplay
// 				muted
// 				controls={!showUnmute}
// 				preload="auto"
// 				streamRef={streamRef}
// 				className="block w-full h-full border-none"
				
// 				// Standard Events
// 				onPlay={handlePlay}
// 				onPause={handlePause}
// 				onEnded={handleEnded}
				
// 				// FIX: Native time-tracking directly from Cloudflare
// 				onTimeUpdate={handleTimeUpdate}
// 			/>
			
// 			{showUnmute && (
// 				<div
// 					onClick={handleUnmuteClick}
// 					className="absolute inset-0 bg-espresso/75 flex flex-col items-center justify-center gap-4 cursor-pointer z-10 transition-opacity"
// 				>
// 					<span className="text-5xl">🔊</span>
// 					<p className="text-bone font-bold text-xl m-0 text-center tracking-wide">
// 						Your video is playing
// 					</p>
// 					<div className="bg-clay text-bone px-8 py-3 rounded-full font-bold text-lg tracking-wide shadow-lg hover:opacity-90 transition-opacity">
// 						Click to unmute
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// }

