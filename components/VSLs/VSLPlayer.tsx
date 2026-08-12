"use client";

import { useRef, useState } from "react";
import { Stream } from "@cloudflare/stream-react";
import { usePostHog } from "posthog-js/react";

interface VSLPlayerProps {
	videoId?: string;
	videoType?: "HOME" | "REPS" | "OWNERS" | "DQ_PAGE" | "THANKS_REP" | "THANKS_OWNERS";
}

export default function VSLPlayer({ 
	videoId = "6f2da4bf40995a935365919f3d00c304", 
	videoType = "HOME" 
}: VSLPlayerProps) {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const streamRef = useRef<any>(null);
	const [showUnmute, setShowUnmute] = useState(true);
	const posthog = usePostHog();
	
	const [hasStarted, setHasStarted] = useState(false);
	
	// FIX: Track fired milestones with a Ref so we don't trigger React re-renders!
	const milestonesFired = useRef<Set<number>>(new Set());

	const handleUnmuteClick = () => {
		if (streamRef.current) {
			streamRef.current.muted = false;
		}
		setShowUnmute(false);
		posthog.capture("vsl_unmuted", { video_type: videoType, video_id: videoId });
	};

	// FIX: Bulletproof milestone tracking directly attached to the Cloudflare player
	const handleTimeUpdate = () => {
		const player = streamRef.current;
		if (!player || !player.duration || !posthog) return;

		const percentage = (player.currentTime / player.duration) * 100;
		const milestones = [10, 25, 50, 75, 90];

		milestones.forEach((milestone) => {
			// If we passed the milestone AND haven't fired it yet...
			if (percentage >= milestone && !milestonesFired.current.has(milestone)) {
				posthog.capture("vsl_milestone_reached", {
					video_type: videoType,
					video_id: videoId,
					milestone: `${milestone}%`,
					current_time_seconds: Math.round(player.currentTime),
				});
				// Add it to our silent Ref tracker
				milestonesFired.current.add(milestone);
			}
		});
	};

	const handlePlay = () => {
		if (!hasStarted) {
			posthog.capture("vsl_started", { video_type: videoType, video_id: videoId });
			setHasStarted(true);
		} else {
			posthog.capture("vsl_resumed", { video_type: videoType, video_id: videoId });
		}
	};

	const handlePause = () => {
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

	return (
		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20">
			<Stream
				src={videoId}
				data-customer="customer-sp8u4ylw46bdo5vk"
				autoplay
				muted
				controls={!showUnmute}
				preload="auto"
				streamRef={streamRef}
				className="block w-full h-full border-none"
				
				// Standard Events
				onPlay={handlePlay}
				onPause={handlePause}
				onEnded={handleEnded}
				
				// FIX: Native time-tracking directly from Cloudflare
				onTimeUpdate={handleTimeUpdate}
			/>
			
			{showUnmute && (
				<div
					onClick={handleUnmuteClick}
					className="absolute inset-0 bg-espresso/75 flex flex-col items-center justify-center gap-4 cursor-pointer z-10 transition-opacity"
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
		</div>
	);
}




// "use client";

// import { useRef, useState } from "react";
// import { Stream } from "@cloudflare/stream-react";
// import { usePostHog } from "posthog-js/react"; // 1. Import PostHog

// interface VSLPlayerProps {
// 	// Allows you to pass different video IDs for the Reps, Owners, and Home pages!
// 	videoId?: string; 
// }

// export default function VSLPlayer({ videoId = "6f2da4bf40995a935365919f3d00c304" }: VSLPlayerProps) {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const streamRef = useRef<any>(null);
// 	const [showUnmute, setShowUnmute] = useState(true);
	
// 	// 2. Initialize the PostHog hook
// 	const posthog = usePostHog(); 

// 	const handleUnmuteClick = () => {
// 		if (streamRef.current) {
// 			// This natively talks directly to the Cloudflare player
// 			streamRef.current.muted = false;
// 		}
// 		setShowUnmute(false);
		
// 		// 3. Track the unmute action! (High-intent signal)
// 		posthog.capture("vsl_unmuted", { video_id: videoId });
// 	};

// 	return (
// 		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20">
// 			<Stream
// 				src={videoId}
// 				data-customer="customer-sp8u4ylw46bdo5vk"
// 				autoplay
// 				muted
// 				controls
// 				preload="auto"
// 				streamRef={streamRef}
// 				className="block w-full h-full border-none"
				
// 				// 4. Track standard Cloudflare playback events!
// 				onPlay={() => posthog.capture("vsl_played", { video_id: videoId })}
// 				onPause={() => posthog.capture("vsl_paused", { video_id: videoId })}
// 				onEnded={() => posthog.capture("vsl_completed", { video_id: videoId })}
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


// "use client";

// import { useRef, useState } from "react";
// import { Stream } from "@cloudflare/stream-react";

// interface VSLPlayerProps {
// 	// Allows you to pass different video IDs for the Reps, Owners, and Home pages!
// 	videoId?: string; 
// }

// export default function VSLPlayer({ videoId = "6f2da4bf40995a935365919f3d00c304" }: VSLPlayerProps) {
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const streamRef = useRef<any>(null);
// 	const [showUnmute, setShowUnmute] = useState(true);

// 	const handleUnmuteClick = () => {
// 		if (streamRef.current) {
// 			// This now natively talks directly to the Cloudflare player
// 			streamRef.current.muted = false;
// 		}
// 		setShowUnmute(false);
// 	};

// 	return (
// 		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20">
// 			<Stream
// 				src={videoId}
// 				data-customer="customer-sp8u4ylw46bdo5vk"
// 				autoplay
// 				muted
// 				controls
// 				preload="auto"
// 				streamRef={streamRef}
// 				className="block w-full h-full border-none"
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

// "use client";

// import { useEffect, useRef, useState } from "react";

// const CF_VIDEO_ID = "6f2da4bf40995a935365919f3d00c304";
// const CF_CUSTOMER = "customer-sp8u4ylw46bdo5vk";
// const CF_EMBED_URL = `https://${CF_CUSTOMER}.cloudflarestream.com/${CF_VIDEO_ID}/iframe?autoplay=true&muted=true&controls=true&preload=auto`;
// const CF_SDK_URL = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

// export default function VSLPlayer() {
// 	const iframeRef = useRef<HTMLIFrameElement>(null);
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const playerRef = useRef<any>(null);
// 	const [showUnmute, setShowUnmute] = useState(true);

// 	useEffect(() => {
// 		const script = document.createElement("script");
// 		script.src = CF_SDK_URL;
// 		script.async = true;
// 		script.onload = () => {
// 			const iframe = iframeRef.current;
// 			if (!iframe) return;
// 			// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 			playerRef.current = (window as any).Stream(iframe);
// 		};
// 		document.head.appendChild(script);
// 		return () => { script.remove(); };
// 	}, []);

// 	const handleUnmuteClick = () => {
// 		if (playerRef.current) {
// 			playerRef.current.muted = false;
// 		}
// 		setShowUnmute(false);
// 	};

// 	return (
// 		<div className="relative w-full aspect-video rounded-xl overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20">
// 			<iframe
// 				ref={iframeRef}
// 				src={CF_EMBED_URL}
// 				className="block w-full h-full border-none"
// 				allow="autoplay; fullscreen; picture-in-picture"
// 				allowFullScreen
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



// "use client";

// import { useEffect, useRef, useState, useCallback } from "react";
// import { useVSL } from "@/contexts/VSLContext";

// const CF_VIDEO_ID = "6bdad6a86cf3e4ba2782403dbadfc97b";
// const CF_CUSTOMER = "customer-sp8u4ylw46bdo5vk";
// const CF_EMBED_URL = `https://${CF_CUSTOMER}.cloudflarestream.com/${CF_VIDEO_ID}/iframe?autoplay=true&muted=true&controls=true&preload=auto`;
// const CF_SDK_URL = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

// const MINI_MARGIN = 20;
// const MINI_VIDEO_HEIGHT = 180;
// const MINI_HEADER_HEIGHT = 32;
// const MINI_TOTAL_HEIGHT = MINI_VIDEO_HEIGHT + MINI_HEADER_HEIGHT;

// function getMiniWidth() {
// 	return Math.min(320, window.innerWidth - MINI_MARGIN * 2);
// }

// function isMobileViewport() {
// 	return window.innerWidth < 700;
// }

// type Mode = "hidden" | "main" | "mini" | "dismissed";

// export default function VSLPlayer() {
// 	const { placeholderRef, placeholderVersion } = useVSL();

// 	const iframeRef = useRef<HTMLIFrameElement>(null);
// 	const videoWrapperRef = useRef<HTMLDivElement>(null);
// 	const headerRef = useRef<HTMLDivElement>(null);
// 	const modeRef = useRef<Mode>("hidden");
// 	const posRef = useRef({ x: 20, y: 20 });
// 	// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 	const playerRef = useRef<any>(null);

// 	const [mode, setMode] = useState<Mode>("hidden");
// 	const [pos, setPos] = useState({ x: 20, y: 20 });
// 	const [showUnmute, setShowUnmute] = useState(true);

// 	// Load CF Stream SDK so we can unmute via player API on user click
// 	useEffect(() => {
// 		const script = document.createElement("script");
// 		script.src = CF_SDK_URL;
// 		script.async = true;
// 		script.onload = () => {
// 			const iframe = iframeRef.current;
// 			if (!iframe) return;
// 			// eslint-disable-next-line @typescript-eslint/no-explicit-any
// 			playerRef.current = (window as any).Stream(iframe);
// 		};
// 		document.head.appendChild(script);
// 		return () => { script.remove(); };
// 	}, []);

// 	const handleUnmuteClick = () => {
// 		if (playerRef.current) {
// 			playerRef.current.muted = false;
// 		}
// 		setShowUnmute(false);
// 	};

// 	const isDragging = useRef(false);
// 	const dragStart = useRef({ mouseX: 0, mouseY: 0, posX: 0, posY: 0 });

// 	const updateVideoPosition = useCallback(() => {
// 		const placeholder = placeholderRef.current;
// 		const wrapper = videoWrapperRef.current;
// 		if (!placeholder || !wrapper) return;

// 		const rect = placeholder.getBoundingClientRect();
// 		const prev = wrapper.style.transition;
// 		wrapper.style.transition = "none";
// 		wrapper.style.left = `${rect.left}px`;
// 		wrapper.style.top = `${rect.top}px`;
// 		wrapper.style.bottom = "auto";
// 		wrapper.style.width = `${rect.width}px`;
// 		wrapper.style.height = `${rect.height}px`;
// 		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
// 		wrapper.offsetHeight;
// 		wrapper.style.transition = prev;
// 	}, [placeholderRef]);

// 	const applyMode = useCallback(
// 		(newMode: Mode, currentPos?: { x: number; y: number }) => {
// 			const wrapper = videoWrapperRef.current;
// 			const header = headerRef.current;
// 			if (!wrapper) return;

// 			if (newMode === "hidden" || newMode === "dismissed") {
// 				wrapper.style.opacity = "0";
// 				wrapper.style.pointerEvents = "none";
// 				if (header) header.style.display = "none";
// 				return;
// 			}

// 			if (newMode === "main") {
// 				updateVideoPosition();
// 				wrapper.style.opacity = "1";
// 				wrapper.style.pointerEvents = "auto";
// 				wrapper.style.borderRadius = "0.375rem";
// 				if (header) header.style.display = "none";
// 				return;
// 			}

// 			if (newMode === "mini") {
// 				const miniWidth = getMiniWidth();
// 				const p = currentPos ?? posRef.current;
// 				wrapper.style.width = `${miniWidth}px`;
// 				wrapper.style.height = `${MINI_TOTAL_HEIGHT}px`;
// 				wrapper.style.top = "auto";
// 				wrapper.style.bottom = `${p.y}px`;
// 				wrapper.style.left = `${p.x}px`;
// 				wrapper.style.opacity = "1";
// 				wrapper.style.pointerEvents = "auto";
// 				wrapper.style.borderRadius = "0.75rem";
// 				if (header) header.style.display = "flex";
// 			}
// 		},
// 		[updateVideoPosition],
// 	);

// 	// IntersectionObserver for main/mini/hidden mode switching
// 	useEffect(() => {
// 		const placeholder = placeholderRef.current;

// 		if (!placeholder) {
// 			modeRef.current = "hidden";
// 			setMode("hidden");
// 			applyMode("hidden");
// 			return;
// 		}

// 		const observer = new IntersectionObserver(
// 			([entry]) => {
// 				if (entry.isIntersecting) {
// 					if (isMobileViewport()) return;
// 					modeRef.current = "main";
// 					setMode("main");
// 					applyMode("main");
// 				} else if (entry.boundingClientRect.top > 0) {
// 					modeRef.current = "hidden";
// 					setMode("hidden");
// 					applyMode("hidden");
// 				} else {
// 					if (modeRef.current === "dismissed") return;
// 					if (isMobileViewport()) {
// 						modeRef.current = "hidden";
// 						setMode("hidden");
// 						applyMode("hidden");
// 					} else {
// 						modeRef.current = "mini";
// 						setMode("mini");
// 						applyMode("mini", posRef.current);
// 					}
// 				}
// 			},
// 			{ threshold: 0 },
// 		);

// 		observer.observe(placeholder);
// 		return () => observer.disconnect();
// 	// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [placeholderVersion, applyMode]);

// 	// Scroll + resize sync in main mode
// 	useEffect(() => {
// 		if (mode !== "main") return;

// 		const onScrollOrResize = () => {
// 			if (modeRef.current === "main") updateVideoPosition();
// 		};

// 		window.addEventListener("scroll", onScrollOrResize, { passive: true });
// 		window.addEventListener("resize", onScrollOrResize, { passive: true });
// 		updateVideoPosition();
// 		applyMode("main");

// 		return () => {
// 			window.removeEventListener("scroll", onScrollOrResize);
// 			window.removeEventListener("resize", onScrollOrResize);
// 		};
// 	}, [mode, updateVideoPosition, applyMode]);

// 	// Mini player position sync
// 	useEffect(() => {
// 		if (mode !== "mini") return;
// 		const wrapper = videoWrapperRef.current;
// 		if (!wrapper) return;
// 		wrapper.style.left = `${pos.x}px`;
// 		wrapper.style.bottom = `${pos.y}px`;
// 		posRef.current = pos;
// 	}, [pos, mode]);

// 	// Re-center mini player on resize
// 	useEffect(() => {
// 		if (mode !== "mini") return;
// 		const onResize = () => {
// 			if (modeRef.current !== "mini") return;
// 			const miniWidth = getMiniWidth();
// 			const wrapper = videoWrapperRef.current;
// 			if (!wrapper) return;
// 			wrapper.style.width = `${miniWidth}px`;
// 		};
// 		window.addEventListener("resize", onResize, { passive: true });
// 		return () => window.removeEventListener("resize", onResize);
// 	}, [mode]);

// 	// Global drag listeners
// 	useEffect(() => {
// 		const onMouseMove = (e: MouseEvent) => {
// 			if (!isDragging.current) return;
// 			const dx = e.clientX - dragStart.current.mouseX;
// 			const dy = e.clientY - dragStart.current.mouseY;
// 			const miniWidth = getMiniWidth();
// 			const newPos = {
// 				x: Math.max(0, Math.min(window.innerWidth - miniWidth, dragStart.current.posX + dx)),
// 				y: Math.max(0, Math.min(window.innerHeight - MINI_TOTAL_HEIGHT, dragStart.current.posY - dy)),
// 			};
// 			posRef.current = newPos;
// 			setPos(newPos);
// 		};
// 		const onMouseUp = () => { isDragging.current = false; };
// 		const onTouchMove = (e: TouchEvent) => {
// 			if (!isDragging.current) return;
// 			const touch = e.touches[0];
// 			const dx = touch.clientX - dragStart.current.mouseX;
// 			const dy = touch.clientY - dragStart.current.mouseY;
// 			const miniWidth = getMiniWidth();
// 			const newPos = {
// 				x: Math.max(0, Math.min(window.innerWidth - miniWidth, dragStart.current.posX + dx)),
// 				y: Math.max(0, Math.min(window.innerHeight - MINI_TOTAL_HEIGHT, dragStart.current.posY - dy)),
// 			};
// 			posRef.current = newPos;
// 			setPos(newPos);
// 		};
// 		const onTouchEnd = () => { isDragging.current = false; };

// 		window.addEventListener("mousemove", onMouseMove);
// 		window.addEventListener("mouseup", onMouseUp);
// 		window.addEventListener("touchmove", onTouchMove, { passive: true });
// 		window.addEventListener("touchend", onTouchEnd);
// 		return () => {
// 			window.removeEventListener("mousemove", onMouseMove);
// 			window.removeEventListener("mouseup", onMouseUp);
// 			window.removeEventListener("touchmove", onTouchMove);
// 			window.removeEventListener("touchend", onTouchEnd);
// 		};
// 	}, []);

// 	const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
// 		isDragging.current = true;
// 		const clientX = "touches" in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
// 		const clientY = "touches" in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
// 		dragStart.current = { mouseX: clientX, mouseY: clientY, posX: pos.x, posY: pos.y };
// 		e.preventDefault();
// 	};

// 	const handleDismiss = () => {
// 		modeRef.current = "dismissed";
// 		setMode("dismissed");
// 		applyMode("dismissed");
// 	};

// 	return (
// 		<div
// 			ref={videoWrapperRef}
// 			style={{
// 				position: "fixed",
// 				zIndex: 9999,
// 				opacity: 0,
// 				pointerEvents: "none",
// 				display: "flex",
// 				flexDirection: "column",
// 				overflow: "hidden",
// 				transition: "left 0.3s ease, top 0.3s ease, width 0.3s ease, height 0.3s ease, bottom 0.3s ease, opacity 0.2s ease",
// 				boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
// 			}}>
// 			{/* Drag handle — hidden in main mode, shown in mini mode */}
// 			<div
// 				ref={headerRef}
// 				onMouseDown={handleDragStart}
// 				onTouchStart={handleDragStart}
// 				style={{
// 					display: "none",
// 					flexShrink: 0,
// 					height: MINI_HEADER_HEIGHT,
// 					alignItems: "center",
// 					justifyContent: "space-between",
// 					padding: "0 12px",
// 					background: "#111827",
// 					cursor: "grab",
// 					userSelect: "none",
// 				}}>
// 				<span style={{ color: "white", fontSize: 12, fontWeight: 600, letterSpacing: "0.05em" }}>
// 					The Ascend Path
// 				</span>
// 				<button
// 					onClick={handleDismiss}
// 					style={{ color: "#9ca3af", background: "none", border: "none", fontSize: 20, lineHeight: 1, cursor: "pointer", padding: "0 2px" }}
// 					aria-label="Close mini player">
// 					×
// 				</button>
// 			</div>

// 			<div style={{ position: "relative", flex: 1, minHeight: 0 }}>
// 				<iframe
// 					ref={iframeRef}
// 					src={CF_EMBED_URL}
// 					style={{ display: "block", border: "none", width: "100%", height: "100%" }}
// 					allow="autoplay; fullscreen; picture-in-picture"
// 					allowFullScreen
// 				/>
// 				{showUnmute && (
// 					<div
// 						onClick={handleUnmuteClick}
// 						style={{
// 							position: "absolute",
// 							inset: 0,
// 							background: "rgba(0, 0, 0, 0.55)",
// 							display: "flex",
// 							flexDirection: "column",
// 							alignItems: "center",
// 							justifyContent: "center",
// 							gap: 16,
// 							cursor: "pointer",
// 							zIndex: 10,
// 						}}>
// 						<span style={{ fontSize: 48 }}>🔊</span>
// 						<p style={{ color: "white", fontWeight: 800, fontSize: 20, margin: 0, textAlign: "center", letterSpacing: "0.01em" }}>
// 							Your video is playing
// 						</p>
// 						<div style={{
// 							background: "linear-gradient(135deg, #fff1be 0%, #ee87cb 50%, #b060ff 100%)",
// 							borderRadius: "9999px",
// 							padding: "14px 32px",
// 							fontWeight: 800,
// 							fontSize: 17,
// 							color: "#1a0030",
// 							letterSpacing: "0.02em",
// 							animation: "unmute-pulse 2s infinite",
// 							boxShadow: "0 4px 24px rgba(176, 96, 255, 0.5)",
// 						}}>
// 							Click to unmute
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// }
