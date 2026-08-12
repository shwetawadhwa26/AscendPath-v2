export default function Stats() {
	return (
		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 transition-colors duration-300">
			<div className="mx-auto max-w-2xl lg:mx-0">
				<h2 className="text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
					Results that speak{" "}
					<span className="text-clay">
						louder than words
					</span>
				</h2>
				<p className="mt-6 text-base/7 text-taupe">
					Numbers don't lie. These aren't projections or estimates. These are
					documented results from real execution, proving that work beats talent
					every single time.
				</p>
			</div>
			<div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
				
				{/* Card 1 */}
				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-taupe/10 p-8 ring-1 ring-taupe/20 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start transition-colors">
					<p className="flex-none text-3xl font-bold tracking-tight text-clay">
						$1.5M+
					</p>
					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
						<p className="text-lg font-semibold tracking-tight">
							Total Sales Generated
						</p>
						<p className="mt-2 text-base/7 text-taupe">
							Across multiple companies and industries. Every dollar earned
							through genuine connections and relentless execution.
						</p>
					</div>
				</div>

				{/* Card 2 */}
				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-taupe/20 p-8 ring-1 ring-taupe/20 shadow-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 transition-colors">
					<p className="flex-none text-3xl font-bold tracking-tight text-clay">
						#1 Rep
					</p>
					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
						<p className="text-lg font-semibold tracking-tight text-espresso">
							From one sale to top performer
						</p>
						<p className="mt-2 text-base/7 text-taupe">
							Started with broken English and zero experience. Became the #1
							sales rep through 15-hour days and pure grit.
						</p>
					</div>
				</div>

				{/* Card 3 */}
				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-taupe/40 p-8 ring-1 ring-taupe/20 shadow-xl sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 transition-colors">
					<p className="flex-none text-3xl font-bold tracking-tight text-clay">
						45 Days
					</p>
					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
						<p className="text-lg font-semibold tracking-tight text-espresso">
							To transform invisible to unstoppable
						</p>
						<p className="mt-2 text-base/7 text-taupe">
							You're applying to hundreds of roles and hearing nothing back. We
							place sales reps into $5K–$10K/month opportunities in 45 days.
						</p>
					</div>
				</div>

			</div>
		</div>
	);
}

// export default function Stats() {
// 	return (
// 		<div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
// 			<div className="mx-auto max-w-2xl lg:mx-0">
// 				<h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
// 					Results that speak{" "}
// 					<span className="bg-linear-to-r from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] bg-clip-text text-transparent">
// 						louder than words
// 					</span>
// 				</h2>
// 				<p className="mt-6 text-base/7 text-gray-600 dark:text-gray-300">
// 					Numbers don't lie. These aren't projections or estimates. These are
// 					documented results from real execution, proving that work beats talent
// 					every single time.
// 				</p>
// 			</div>
// 			<div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
// 				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start dark:bg-white/5 dark:inset-ring dark:inset-ring-white/10">
// 					<p className="flex-none text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
// 						$1.5M+
// 					</p>
// 					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
// 						<p className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
// 							Total Sales Generated
// 						</p>
// 						<p className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">
// 							Across multiple companies and industries. Every dollar earned
// 							through genuine connections and relentless execution.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44 dark:bg-gray-700 dark:inset-ring dark:inset-ring-white/10">
// 					<p className="flex-none text-3xl font-bold tracking-tight text-white">
// 						#1 Rep
// 					</p>
// 					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
// 						<p className="text-lg font-semibold tracking-tight text-white">
// 							From one sale to top performer
// 						</p>
// 						<p className="mt-2 text-base/7 text-gray-400 dark:text-gray-300">
// 							Started with broken English and zero experience. Became the #1
// 							sales rep through 15-hour days and pure grit.
// 						</p>
// 					</div>
// 				</div>
// 				<div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28 dark:bg-gray-800 dark:inset-ring dark:inset-ring-white/10">
// 					<p className="flex-none text-3xl font-bold tracking-tight text-white">
// 						45 Days
// 					</p>
// 					<div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
// 						<p className="text-lg font-semibold tracking-tight text-white">
// 							To transform invisible to unstoppable
// 						</p>
// 						<p className="mt-2 text-base/7 text-gray-400 dark:text-gray-300">
// 							You're applying to hundreds of roles and hearing nothing back. We
// 							place sales reps into $5K–$10K/month opportunities in 45 days.
// 						</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
