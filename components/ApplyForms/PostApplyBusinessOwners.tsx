"use client";

import Script from "next/script";

export default function PostApplyBusinessOwners() {
	return (
		// className="w-full transition-colors duration-300">
			
		<div >{/* Changed pt-0 pb-8 to py-16 sm:py-24 to give the form vertical breathing room */}
			<div className="w-full flex justify-center py-4 px-4 sm:px-10 sm:py-14">
				
				{/* Aura's official resizing script loaded the correct Next.js way */}
				{/* <Script src="https://app.aura-app.ai/aura-embed.js" strategy="lazyOnload" /> */}

				<iframe
					data-aura-embed
					src="https://app.aura-app.ai/the-ascend-path/1-1/embed?theme_preset=light"
					title="1-1 - Booking"
					loading="lazy"
					className="w-full max-w-7xl min-h-[650px]"
				/>
			</div>
		</div>
	);
}