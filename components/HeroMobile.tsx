"use client";

import { useEffect, useRef, useState } from "react";

const CF_EMBED_URL =
	"https://customer-sp8u4ylw46bdo5vk.cloudflarestream.com/6bdad6a86cf3e4ba2782403dbadfc97b/iframe?autoplay=true&muted=true&controls=true&preload=auto";
const CF_SDK_URL = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

export default function HeroMobile() {
	const iframeRef = useRef<HTMLIFrameElement>(null);
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const playerRef = useRef<any>(null);
	const [showUnmute, setShowUnmute] = useState(true);

	useEffect(() => {
		const script = document.createElement("script");
		script.src = CF_SDK_URL;
		script.async = true;
		script.onload = () => {
			const iframe = iframeRef.current;
			if (!iframe) return;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			playerRef.current = (window as any).Stream(iframe);
		};
		document.head.appendChild(script);
		return () => { script.remove(); };
	}, []);

	const handleUnmuteClick = () => {
		if (playerRef.current) {
			playerRef.current.muted = false;
		}
		setShowUnmute(false);
	};

	return (
		<div className="transition-colors duration-300">
			<div className="relative isolate pt-14">
				
				{/* TOP BACKGROUND BLOB - Subtle Clay glow */}
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
								<div className="aspect-video rounded-md overflow-hidden bg-espresso relative shadow-2xl ring-1 ring-taupe/20">
									<iframe
										ref={iframeRef}
										src={CF_EMBED_URL}
										style={{ width: "100%", height: "100%", border: "none" }}
										allow="autoplay; fullscreen; picture-in-picture"
										allowFullScreen
									/>
									{showUnmute && (
										<div
											onClick={handleUnmuteClick}
											style={{
												position: "absolute",
												inset: 0,
												background: "rgba(36, 28, 22, 0.75)", /* Espresso overlay */
												display: "flex",
												flexDirection: "column",
												alignItems: "center",
												justifyContent: "center",
												gap: 16,
												cursor: "pointer",
												zIndex: 10,
											}}>
											<span style={{ fontSize: 32 }}>🔊</span>
											<p style={{ color: "#EDE6D8", fontWeight: 700, fontSize: 14, margin: 0, textAlign: "center", letterSpacing: "0.01em" }}>
												Your video is playing
											</p>
											<div className="bg-clay text-bone px-6 py-2 rounded-full font-bold text-sm tracking-wide shadow-lg hover:opacity-90 transition-opacity">
												Click to unmute
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* BOTTOM BACKGROUND BLOB - Subtle Clay glow */}
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




// "use client";

// import { useEffect, useRef, useState } from "react";

// const CF_EMBED_URL =
// 	"https://customer-sp8u4ylw46bdo5vk.cloudflarestream.com/6bdad6a86cf3e4ba2782403dbadfc97b/iframe?autoplay=true&muted=true&controls=true&preload=auto";
// const CF_SDK_URL = "https://embed.cloudflarestream.com/embed/sdk.latest.js";

// export default function HeroMobile() {
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
// 		<div className="bg-gray-900">
// 			<div className="relative isolate pt-14">
// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"
// 					/>
// 				</div>

// 				<div className="py-24 sm:py-32 lg:pb-40">
// 					<div className="mx-auto max-w-7xl px-6 lg:px-8">
// 						<div className="mx-auto max-w-2xl text-center">
// 							<h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
// 								You&apos;re talented but invisible. Let&apos;s fix that.
// 							</h1>
// 							<p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
// 								You're applying to hundreds of roles and hearing nothing back.
// 								We place sales reps into $5K–$10K/month opportunities in 45
// 								days.
// 							</p>
// 							<div className="mt-10 flex items-center justify-center gap-x-6">
// 								<a
// 									href="https://app.iclosed.io/e/theascendpath/connection-call"
// 									className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
// 									GET STARTED
// 								</a>
// 								<a
// 									href="#story"
// 									className="text-sm/6 font-semibold bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
// 									See My Story <span aria-hidden="true">→</span>
// 								</a>
// 							</div>
// 						</div>

// 						<div className="mt-16 flow-root sm:mt-24">
// 							<div className="-m-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
// 								<div className="aspect-video rounded-md overflow-hidden bg-black relative">
// 									<iframe
// 										ref={iframeRef}
// 										src={CF_EMBED_URL}
// 										style={{ width: "100%", height: "100%", border: "none" }}
// 										allow="autoplay; fullscreen; picture-in-picture"
// 										allowFullScreen
// 									/>
// 									{showUnmute && (
// 										<div
// 											onClick={handleUnmuteClick}
// 											style={{
// 												position: "absolute",
// 												inset: 0,
// 												background: "rgba(0, 0, 0, 0.55)",
// 												display: "flex",
// 												flexDirection: "column",
// 												alignItems: "center",
// 												justifyContent: "center",
// 												gap: 16,
// 												cursor: "pointer",
// 												zIndex: 10,
// 											}}>
// 											<span style={{ fontSize: 32 }}>🔊</span>
// 											<p style={{ color: "white", fontWeight: 700, fontSize: 14, margin: 0, textAlign: "center", letterSpacing: "0.01em" }}>
// 												Your video is playing
// 											</p>
// 											<div style={{
// 												background: "linear-gradient(135deg, #fff1be 0%, #ee87cb 50%, #b060ff 100%)",
// 												borderRadius: "9999px",
// 												padding: "10px 22px",
// 												fontWeight: 800,
// 												fontSize: 13,
// 												color: "#1a0030",
// 												letterSpacing: "0.02em",
// 												animation: "unmute-pulse 2s infinite",
// 												boxShadow: "0 4px 24px rgba(176, 96, 255, 0.5)",
// 											}}>
// 												Click to unmute
// 											</div>
// 										</div>
// 									)}
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-288.75"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
