"use client";

import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import {
    MotionValue,
    motion,
    useMotionValueEvent,
    useSpring,
    type HTMLMotionProps,
} from "framer-motion";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import type { RectReadOnly } from "react-use-measure";

interface VideoTestimonialProps extends HTMLMotionProps<"div"> {
    name: string;
    title: string;
    quote?: string;
    videoUrl: string;
    // The strict props required for the Framer Motion scroll fading
    bounds: RectReadOnly;
    scrollX: MotionValue<number>;
    testimonialIndex: number;
    playingVideoIndex: number | null;
    setPlayingVideoIndex: (index: number | null) => void;
    hoveredIndex: number | null;
    setHoveredIndex: (index: number | null) => void;
}

export default function TestimonialVideoCard({
    name,
    title,
    quote,
    videoUrl,
    bounds,
    scrollX,
    testimonialIndex,
    playingVideoIndex,
    setPlayingVideoIndex,
    hoveredIndex,
    setHoveredIndex,
    ...props
}: VideoTestimonialProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [hasEnded, setHasEnded] = useState(false);
    
    const isPlaying = playingVideoIndex === testimonialIndex;
    const isHovered = hoveredIndex === testimonialIndex;

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setPlayingVideoIndex(null);
            } else {
                videoRef.current.play();
                setPlayingVideoIndex(testimonialIndex);
                setHasEnded(false);
            }
        }
    };

    // --- FRAMER MOTION SCROLL MATH ---
    const computeOpacity = useCallback(() => {
        const element = ref.current;
        if (!element || bounds.width === 0) return 1;

        const rect = element.getBoundingClientRect();

        if (rect.left < bounds.left) {
            const diff = bounds.left - rect.left;
            const percent = diff / rect.width;
            return Math.max(0.5, 1 - percent);
        } else if (rect.right > bounds.right) {
            const diff = rect.right - bounds.right;
            const percent = diff / rect.width;
            return Math.max(0.5, 1 - percent);
        } else {
            return 1;
        }
    }, [ref, bounds.width, bounds.left, bounds.right]);

    const opacity = useSpring(computeOpacity(), {
        stiffness: 154,
        damping: 23,
    });

    useLayoutEffect(() => {
        opacity.set(computeOpacity());
    }, [computeOpacity, opacity]);

    useMotionValueEvent(scrollX, "change", () => {
        opacity.set(computeOpacity());
    });
    // ---------------------------------

    return (
        <motion.div
            ref={ref}
            style={{ opacity }}
            {...props}
            onMouseEnter={() => setHoveredIndex(testimonialIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
            // Updated to use the 4/5 aspect ratio while maintaining the snap-scrolling classes
            className="relative flex aspect-[4/5] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-2xl shadow-lg sm:w-96 group cursor-pointer bg-espresso"
        >
            {/* The Native HTML5 Video Player */}
            <video
                ref={videoRef}
                className="absolute inset-x-0 top-0 aspect-square w-full object-cover h-full opacity-80 transition-opacity duration-500 group-hover:opacity-100"
                preload="metadata"
                playsInline
                controlsList="nodownload"
                onPlay={() => {
                    setPlayingVideoIndex(testimonialIndex);
                    setHasEnded(false);
                }}
                onPause={() => setPlayingVideoIndex(null)}
                onEnded={() => {
                    setPlayingVideoIndex(null);
                    setHasEnded(true);
                }}
            >
                <source src={`${videoUrl}#t=0.1`} type="video/mp4" />
                <source src={`${videoUrl}#t=0.1`} type="video/quicktime" />
            </video>
            
            {/* Heavy Gradient Overlay for Text Readability */}
            <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/40 to-transparent pointer-events-none opacity-95"
            />

            {/* Center Play Button Overlay - Glassmorphism Style */}
            <motion.button
                onClick={togglePlay}
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                    opacity: playingVideoIndex === null || isHovered || hasEnded ? 1 : 0,
                    scale: playingVideoIndex === null || isHovered || hasEnded ? 1 : 0.8,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute left-1/2 top-[45%] z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-110"
                style={{
                    pointerEvents:
                        playingVideoIndex === null || isHovered || hasEnded
                            ? "auto"
                            : "none",
                }}
                aria-label={isPlaying ? "Pause video" : "Play video"}
            >
                {isPlaying ? (
                    <PauseIcon className="h-7 w-7 text-bone transition-colors" />
                ) : (
                    <PlayIcon className="ml-0.5 h-7 w-7 text-bone transition-colors opacity-90" />
                )}
            </motion.button>

            {/* Bottom Text Overlay */}
            <div className="relative p-6 sm:p-8 pointer-events-none flex flex-col justify-end z-20">
                {/* The Main Quote */}
                {quote && (
                    <p className="text-bone font-medium mb-5 text-lg sm:text-xl leading-snug text-pretty">
                        "{quote}"
                    </p>
                )}

                {/* The Subtle Divider Line */}
                <div className="w-full h-px bg-taupe/30 mb-4" />

                {/* Author Details & Clay Accent */}
                <div className="text-bone text-sm sm:text-base font-medium mb-1">{name}</div>
                <div className="font-bold text-clay text-xs tracking-widest uppercase">
                    {title}
                </div>
            </div>
        </motion.div>
    );
}