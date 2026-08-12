import {
	UserGroupIcon,
	ChatBubbleLeftRightIcon,
	RocketLaunchIcon,
	TrophyIcon,
} from "@heroicons/react/20/solid";

const features = [
	{
		name: "Step 1: We Fix How You Look",
		description:
			"Before introducing you to anyone, we make sure you're positioned as someone worth knowing. Clean profile, clear story, credible brand.",
		icon: UserGroupIcon,
	},
	{
		name: "Step 2: I Activate My Network",
		description:
			"I make warm introductions to founders and hiring managers actively looking for people like you. These are people who already trust me, so when I vouch for you, they take the meeting.",
		icon: ChatBubbleLeftRightIcon,
	},
	{
		name: "Step 3: You Turn Meetings Into Opportunities",
		description: `You're applying to hundreds of roles and hearing nothing back. We place sales reps into $5K–$10K/month opportunities in 45 days.`,
		icon: RocketLaunchIcon,
	},
];

export default function ProcessFeatures() {
	return (
		<div className="py-24 sm:py-32 transition-colors duration-300">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="text-base/7 font-bold uppercase tracking-wider text-clay">
						The 45-Day Framework
					</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty sm:text-5xl lg:text-balance">
						From invisible to booking 10-20 owner meetings
					</p>
					<p className="mt-6 text-lg/8 text-taupe">
						This isn't theory. It's a battle-tested system that transforms
						talented but overlooked reps into connected professionals who choose
						between multiple $5-10K/month opportunities.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{features.map((feature) => (
							<div
								key={feature.name}
								className="flex flex-col">
								<dt className="flex items-center gap-x-3 text-base/7 font-semibold">
									<feature.icon
										aria-hidden="true"
										className="size-5 flex-none text-clay"
									/>
									{feature.name}
								</dt>
								<dd className="mt-4 flex flex-auto flex-col text-base/7 text-taupe">
									<p className="flex-auto">{feature.description}</p>
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}

// import {
// 	UserGroupIcon,
// 	ChatBubbleLeftRightIcon,
// 	RocketLaunchIcon,
// 	TrophyIcon,
// } from "@heroicons/react/20/solid";

// const features = [
// 	{
// 		name: "Step 1: We Fix How You Look",
// 		description:
// 			"Before introducing you to anyone, we make sure you're positioned as someone worth knowing. Clean profile, clear story, credible brand.",
// 		icon: UserGroupIcon,
// 	},
// 	{
// 		name: "Step 2: I Activate My Network",
// 		description:
// 			"I make warm introductions to founders and hiring managers actively looking for people like you. These are people who already trust me, so when I vouch for you, they take the meeting.",
// 		icon: ChatBubbleLeftRightIcon,
// 	},
// 	{
// 		name: "Step 3: You Turn Meetings Into Opportunities",
// 		description: `You're applying to hundreds of roles and hearing nothing back. We place sales reps into $5K–$10K/month opportunities in 45 days.`,
// 		icon: RocketLaunchIcon,
// 	},
// ];

// export default function ProcessFeatures() {
// 	return (
// 		<div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
// 			<div className="mx-auto max-w-7xl px-6 lg:px-8">
// 				<div className="mx-auto max-w-2xl lg:text-center">
// 					<h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
// 						<span className="text-pink-600 dark:text-pink-400">The 45-Day Framework</span>
// 					</h2>
// 					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
// 						From invisible to booking 10-20 owner meetings
// 					</p>
// 					<p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
// 						This isn't theory. It's a battle-tested system that transforms
// 						talented but overlooked reps into connected professionals who choose
// 						between multiple $5-10K/month opportunities.
// 					</p>
// 				</div>
// 				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
// 					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
// 						{features.map((feature) => (
// 							<div
// 								key={feature.name}
// 								className="flex flex-col">
// 								<dt className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900 dark:text-white">
// 									<feature.icon
// 										aria-hidden="true"
// 										className="size-5 flex-none text-gray-900 dark:text-white"
// 									/>
// 									{feature.name}
// 								</dt>
// 								<dd className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
// 									<p className="flex-auto">{feature.description}</p>
// 								</dd>
// 							</div>
// 						))}
// 					</dl>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
