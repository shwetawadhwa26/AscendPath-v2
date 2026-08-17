"use client";

import { useEffect, useRef } from "react";
import { useVSL } from "@/contexts/VSLContext";

export default function HeroDesktop() {
	const { registerPlaceholder } = useVSL();
	const placeholderRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		registerPlaceholder(placeholderRef.current);
		return () => registerPlaceholder(null);
	}, [registerPlaceholder]);

	return (
		<div className="transition-colors duration-300">
			<div className="relative isolate pt-14">
				
				{/* TOP BACKGROUND BLOB - Converted from Pink/Purple to a subtle Clay glow */}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-clay opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
					/>
				</div>

				<div className="py-24 sm:py-32 lg:pb-40">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl text-center">
							<h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
								You&apos;re talented but invisible. Let&apos;s fix that.
							</h1>
							<p className="mt-8 text-lg font-medium text-pretty text-taupe sm:text-xl/8">
								You're applying to hundreds of roles and hearing nothing back.
								We place sales reps into $5K–$10K/month opportunities in 45
								days.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<a
									href="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form"
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-md bg-clay px-5 py-3 text-sm font-semibold text-bone shadow-md hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-opacity">
									GET STARTED
								</a>
								<a
									href="#story"
									className="text-sm/6 font-semibold hover:text-clay transition-colors">
									See My Story <span aria-hidden="true">→</span>
								</a>
							</div>
						</div>

						<div className="mt-16 flow-root sm:mt-24">
							<div className="-m-2 rounded-xl bg-taupe/10 p-2 ring-1 ring-taupe/20 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
								<div
									ref={placeholderRef}
									className="rounded-md overflow-hidden bg-espresso shadow-2xl ring-1 ring-taupe/20 aspect-video"
								/>
							</div>
						</div>
					</div>
				</div>

				

				{/* BOTTOM BACKGROUND BLOB - Converted from Pink/Purple to a subtle Clay glow */}
				<div
					aria-hidden="true"
					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
					<div
						style={{
							clipPath:
								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
						}}
						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-clay opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
					/>
				</div>

				
			</div>
		</div>
	);
}

