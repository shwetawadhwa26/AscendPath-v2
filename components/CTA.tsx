export default function CTA() {
	return (
		<div className="relative isolate overflow-hidden transition-colors duration-300">
			<div className="px-6 py-24 sm:py-32 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
						Ready to go from invisible to unstoppable?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-taupe">
						You've got the skills and work ethic. You just need the right
						connections and roadmap. Let's turn your talent into $5-10K/month
						opportunities in 45 days.
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
			</div>
		</div>
	);
}
