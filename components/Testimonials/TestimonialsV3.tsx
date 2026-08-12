"use client";

import * as Headless from "@headlessui/react";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import { clsx } from "clsx";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import useMeasure from "react-use-measure";
import { Container } from "./Container";
import { Heading, Subheading } from "./Text";
import TestimonialVideoCard from "./TestimonialVideoCard";
import SplitApplyButton from "../SplitApplyButton";

// Define the shape of the data coming from your AWS Database
export interface VideoTestimonialData {
    id?: string;
    name: string;
    title: string;
    quote: string;
    videoUrl: string | null;
}

function CallToAction() {
    return (
        <div>
            <div className="mt-3">
                    <SplitApplyButton size="lg">GET STARTED</SplitApplyButton>
            </div>
        </div>
    );
}

// Accept the dynamic database data as a prop
export function TestimonialsV3({ testimonials = [] }: { testimonials: VideoTestimonialData[] }) {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const { scrollX } = useScroll({ container: scrollRef });
    const [setReferenceWindowRef, bounds] = useMeasure();
    const [activeIndex, setActiveIndex] = useState(0);
    const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    // Filter out any missing video links just in case
    const safeTestimonials = testimonials.filter(t => t.videoUrl);

    useMotionValueEvent(scrollX, "change", (x) => {
        if (!scrollRef.current || !scrollRef.current.children[0]) return;
        setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth));
    });

    function scrollTo(index: number) {
        if (!scrollRef.current || !scrollRef.current.children[0]) return;
        const gap = 32;
        const width = (scrollRef.current.children[0] as HTMLElement).offsetWidth;
        scrollRef.current.scrollTo({ left: (width + gap) * index, behavior: 'smooth' });
    }

    if (safeTestimonials.length === 0) return null;

    return (
        <div className="overflow-hidden py-24 sm:py-24 transition-colors duration-300">
            <Container>
                <div ref={setReferenceWindowRef}>
                    <Subheading>See Client Results</Subheading>
                    <Heading as="h3" className="mt-2">
                        Hear it from those who made it
                    </Heading>
                </div>
            </Container>
            <div
                ref={scrollRef}
                className={clsx([
                    "mt-16 flex gap-8 px-[var(--scroll-padding)]",
                    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                    "snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth",
                    "[--scroll-padding:max(1.5rem,calc((100vw-42rem)/2))] lg:[--scroll-padding:max(2rem,calc((100vw-80rem)/2))]",
                ])}>
                {safeTestimonials.map(
                    (t, testimonialIndex) => (
                        // Your custom Video Card, successfully wired into the carousel logic!
                        <TestimonialVideoCard
                            key={t.id || testimonialIndex}
                            name={t.name}
                            title={t.title}
                            quote={t.quote}
                            videoUrl={t.videoUrl!}
                            bounds={bounds}
                            scrollX={scrollX}
                            testimonialIndex={testimonialIndex}
                            playingVideoIndex={playingVideoIndex}
                            setPlayingVideoIndex={setPlayingVideoIndex}
                            hoveredIndex={hoveredIndex}
                            setHoveredIndex={setHoveredIndex}
                            onClick={() => scrollTo(testimonialIndex)}
                        />
                    ),
                )}
            </div>
            <Container className="mt-16">
                <div className="flex justify-between items-end">
                    <CallToAction />
                    <div className="hidden sm:flex sm:gap-2">
                        {safeTestimonials.map(({ name, id }, testimonialIndex) => (
                            <Headless.Button
                                key={id || testimonialIndex}
                                onClick={() => scrollTo(testimonialIndex)}
                                data-active={
                                    activeIndex === testimonialIndex ? true : undefined
                                }
                                aria-label={`Scroll to testimonial from ${name}`}
                                className={clsx(
                                    "size-2.5 rounded-full border border-transparent bg-taupe/30 transition-colors duration-300",
                                    "data-[active]:bg-clay hover:bg-clay/70",
                                    "forced-colors:data-[active]:bg-[Highlight] forced-colors:focus:outline-offset-4",
                                )}
                            />
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}