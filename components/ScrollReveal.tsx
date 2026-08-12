"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
	const [isVisible, setIsVisible] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				// If it enters the screen, animate it IN
				if (entry.isIntersecting) {
					setIsVisible(true);
				} else {
					// If it leaves the screen, reset it so it can animate again!
					setIsVisible(false);
				}
			},
			{ 
				threshold: 0.1, 
				// Triggers exactly when it crosses into the bottom 10% of the screen
				rootMargin: "0px 0px -10% 0px" 
			} 
		);

		if (ref.current) observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`transition-all duration-700 ${
				isVisible 
					? "opacity-100 translate-y-0 scale-100 blur-none ease-[cubic-bezier(0.34,1.56,0.64,1)]" 
					: "opacity-0 translate-y-16 scale-90 blur-md ease-in"
			}`}
		>
			{children}
		</div>
	);
}