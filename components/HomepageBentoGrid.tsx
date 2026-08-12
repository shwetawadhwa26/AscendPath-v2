export default function HomepageBentoGrid() {
	return (
		<div className="py-24 sm:py-32 transition-colors duration-300">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<h2 className="text-base/7 font-bold uppercase tracking-wider text-clay">
					Why This Works
				</h2>
				<p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
					From invisible to unstoppable
				</p>
				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
					{/* Card 1 */}
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-taupe/5 shadow-sm ring-1 ring-taupe/20 max-lg:rounded-t-4xl lg:rounded-tl-4xl transition-colors">
							<img
								alt="Professional networking and business connections"
								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/4cf1b847-4fe6-4455-a942-7e9268f14a00/public"
								className="h-80 w-full object-cover object-left"
							/>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-clay uppercase tracking-wide">
									Network Access
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight">
									Get introduced to the right people
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-taupe">
									Skip the cold outreach. Get warm introductions to
									decision-makers who are already looking for someone like you.
									My network becomes your network.
								</p>
							</div>
						</div>
					</div>

					{/* Card 2 */}
					<div className="flex p-px lg:col-span-2">
						<div className="w-full overflow-hidden rounded-lg bg-taupe/5 shadow-sm ring-1 ring-taupe/20 lg:rounded-tr-4xl transition-colors">
							<img
								alt="Business meeting and conversation"
								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/35a7bac2-9ca5-4e58-9a00-644950e47a00/public"
								className="h-80 w-full object-cover"
							/>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-clay uppercase tracking-wide">
									Real Conversations
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight">
									Talk to owners, not gatekeepers
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-taupe">
									Book meetings with people who can say yes. No more wasting
									time on tire-kickers or prospects who ghost you.
								</p>
							</div>
						</div>
					</div>

					{/* Card 3 */}
					<div className="flex p-px lg:col-span-2">
						<div className="w-full overflow-hidden rounded-lg bg-taupe/5 shadow-sm ring-1 ring-taupe/20 lg:rounded-bl-4xl transition-colors">
							<img
								alt="Business growth and success"
								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/da853d0c-a9a5-47c8-4abb-f6da6b7dc600/public"
								className="h-80 w-full object-cover"
							/>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-clay uppercase tracking-wide">
									Proven System
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight">
									Built from $1.5M+ in sales
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-taupe">
									Not theory. This is the exact framework I used to go from
									door-to-door to closing high-ticket deals consistently.
								</p>
							</div>
						</div>
					</div>

					{/* Card 4 */}
					<div className="flex p-px lg:col-span-4">
						<div className="w-full overflow-hidden rounded-lg bg-taupe/5 shadow-sm ring-1 ring-taupe/20 max-lg:rounded-b-4xl lg:rounded-br-4xl transition-colors">
							<img
								alt="Team collaboration and momentum"
								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/a881ef14-3766-4423-f0b0-063d97a33c00/public"
								className="h-80 w-full object-cover object-left"
							/>
							<div className="p-10">
								<h3 className="text-sm/4 font-semibold text-clay uppercase tracking-wide">
									Momentum
								</h3>
								<p className="mt-2 text-lg font-medium tracking-tight">
									45 days to transform your pipeline
								</p>
								<p className="mt-2 max-w-lg text-sm/6 text-taupe">
									Fast results matter. Within 45 days, you'll have a pipeline
									full of qualified meetings. No more hoping for deals to close,
									you'll be choosing between opportunities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


// export default function HomepageBentoGrid() {
// 	return (
// 		<div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
// 			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
// 				<h2 className="text-base/7 font-semibold text-black dark:text-gray-300">
// 					<span className="text-pink-600 dark:text-pink-400">
// 						Why This Works
// 					</span>
// 				</h2>
// 				<p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
// 					From invisible to unstoppable
// 				</p>
// 				<div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
// 					<div className="flex p-px lg:col-span-4">
// 						<div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
// 							<img
// 								alt="Professional networking and business connections"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/4cf1b847-4fe6-4455-a942-7e9268f14a00/public"
// 								className="h-80 w-full object-cover object-left dark:hidden"
// 							/>
// 							<img
// 								alt="Professional networking and business connections"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/4cf1b847-4fe6-4455-a942-7e9268f14a00/public"
// 								className="h-80 w-full object-cover object-left not-dark:hidden"
// 							/>
// 							<div className="p-10">
// 								<h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
// 									Network Access
// 								</h3>
// 								<p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
// 									Get introduced to the right people
// 								</p>
// 								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
// 									Skip the cold outreach. Get warm introductions to
// 									decision-makers who are already looking for someone like you.
// 									My network becomes your network.
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex p-px lg:col-span-2">
// 						<div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
// 							{/* 35a7bac2-9ca5-4e58-9a00-644950e47a00 */}
// 							<img
// 								alt="Business meeting and conversation"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/35a7bac2-9ca5-4e58-9a00-644950e47a00/public"
// 								className="h-80 w-full object-cover dark:hidden"
// 							/>
// 							<img
// 								alt="Business meeting and conversation"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/35a7bac2-9ca5-4e58-9a00-644950e47a00/public"
// 								className="h-80 w-full object-cover not-dark:hidden"
// 							/>
// 							<div className="p-10">
// 								<h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
// 									Real Conversations
// 								</h3>
// 								<p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
// 									Talk to owners, not gatekeepers
// 								</p>
// 								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
// 									Book meetings with people who can say yes. No more wasting
// 									time on tire-kickers or prospects who ghost you.
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex p-px lg:col-span-2">
// 						<div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
// 							<img
// 								alt="Business growth and success"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/da853d0c-a9a5-47c8-4abb-f6da6b7dc600/public"
// 								className="h-80 w-full object-cover dark:hidden"
// 							/>
// 							<img
// 								alt="Business growth and success"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/da853d0c-a9a5-47c8-4abb-f6da6b7dc600/public"
// 								className="h-80 w-full object-cover not-dark:hidden"
// 							/>
// 							<div className="p-10">
// 								<h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
// 									Proven System
// 								</h3>
// 								<p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
// 									Built from $1.5M+ in sales
// 								</p>
// 								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
// 									Not theory. This is the exact framework I used to go from
// 									door-to-door to closing high-ticket deals consistently.
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 					<div className="flex p-px lg:col-span-4">
// 						<div className="w-full overflow-hidden rounded-lg bg-white shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:bg-gray-800 dark:shadow-none dark:outline-white/15">
// 							{/* a881ef14-3766-4423-f0b0-063d97a33c00 */}
// 							<img
// 								alt="Team collaboration and momentum"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/a881ef14-3766-4423-f0b0-063d97a33c00/public"
// 								className="h-80 w-full object-cover object-left dark:hidden"
// 							/>
// 							<img
// 								alt="Team collaboration and momentum"
// 								src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/a881ef14-3766-4423-f0b0-063d97a33c00/public"
// 								className="h-80 w-full object-cover object-left not-dark:hidden"
// 							/>
// 							<div className="p-10">
// 								<h3 className="text-sm/4 font-semibold text-gray-500 dark:text-gray-400">
// 									Momentum
// 								</h3>
// 								<p className="mt-2 text-lg font-medium tracking-tight text-gray-900 dark:text-white">
// 									45 days to transform your pipeline
// 								</p>
// 								<p className="mt-2 max-w-lg text-sm/6 text-gray-600 dark:text-gray-400">
// 									Fast results matter. Within 45 days, you'll have a pipeline
// 									full of qualified meetings. No more hoping for deals to close,
// 									you'll be choosing between opportunities.
// 								</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
