import {
	UserGroupIcon,
	BriefcaseIcon,
	TrophyIcon,
} from "@heroicons/react/20/solid";

export default function StorySection() {
	return (
		<div
			id="story"
			className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 transition-colors duration-300">
			
			{/* Subtle Background Grid using Taupe */}
			<div className="bg-espresso absolute inset-0 -z-10 overflow-hidden">
				<svg
					aria-hidden="true"
					className="absolute bottom-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(24rem_24rem_at_center,white,transparent)] stroke-taupe/20">
					<defs>
						<pattern
							x="50%"
							y={-1}
							id="e813992c-7d03-4cc4-a2bd-151760b470a0"
							width={200}
							height={200}
							patternUnits="userSpaceOnUse">
							<path
								d="M100 200V.5M.5 .5H200"
								fill="none"
							/>
						</pattern>
					</defs>
					<svg
						x="50%"
						y={-1}
						className="overflow-visible fill-taupe/5">
						<path
							d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
							strokeWidth={0}
						/>
					</svg>
					<rect
						fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
						width="100%"
						height="100%"
						strokeWidth={0}
					/>
				</svg>
			</div>

			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
				
				{/* Top Header Text */}
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<h1 className="text-clay text-4xl font-semibold tracking-tight text-pretty sm:text-5xl">
								Skills don't get you opportunities. Access does.
							</h1>
							<p className="mt-6 text-xl/8 text-bone">
								When I moved to Canada, I had nothing. Broken English. Zero
								connections. Worked at Walmart, then security, then door-to-door
								sales.
							</p>
						</div>
					</div>
				</div>

				{/* The Sticky Image */}
				<div className="lg:-mt-12 lg:-ml-12 lg:p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
					<img
						alt="Harry's journey from struggle to success"
						src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/a4a1134b-515c-45ab-88ad-cce0353e0000/public"
						className="w-full lg:w-216 h-64 lg:h-287.5 object-cover object-top rounded-xl bg-taupe/5 shadow-xl ring-1 ring-taupe/20"
					/>
				</div>

				{/* The Story Content */}
				<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
					<div className="lg:pr-4">
						<div className="max-w-xl text-base/7 text-bone lg:max-w-lg">
							<p>
								Worked my ass off. 15-hour days in the rain and cold. Got
								rejected over and over. People laughed at my accent. Slammed
								doors in my face. For months, made almost nothing. Not because
								of lack of skill. Because of lack of network.
							</p>
							<ul
								role="list"
								className="mt-8 space-y-8 text-taupe">
								<li className="flex gap-x-3">
									<TrophyIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-clay"
									/>
									<span className="text-bone">
										<strong className="font-semibold text-inherit">
											You know this feeling, don't you?
										</strong>{" "}
										Working harder than everyone around you but getting nowhere.
										Watching people with half your talent get better
										opportunities because they "know someone." It's not fair.
										But it's reality.
									</span>
								</li>
								<li className="flex gap-x-3">
									<UserGroupIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-clay"
									/>
									<span className="text-bone">
										<strong className="font-semibold text-inherit">
											Then something shifted.
										</strong>{" "}
										Met one person. Then another. People who gave me a shot.
										People who opened doors I didn't know existed. Same skills.
										Same work ethic. Different network.
									</span>
								</li>
								<li className="flex gap-x-3">
									<BriefcaseIcon
										aria-hidden="true"
										className="mt-1 size-5 flex-none text-clay"
									/>
									<span>
										<strong className="font-semibold text-inherit">
											<span className="text-clay">
												Generated over $1.5M
											</span>
										</strong>{" "}
										<span className="text-bone">
										in sales across multiple companies. Went from struggling to
										make rent to becoming the #1 rep. Then did it again. Then
										again. Not from becoming 10x better. From understanding what
										actually moves the needle: The gap between $1K-$2K months and
										$5K-$10K months isn't more training. It's knowing the right
										20 people.
										</span>
									</span>
								</li>
							</ul>
							<p className="mt-8">
								Now? Founders call when they're looking for setters or
								freelancers. Setters call when they need better offers. People
								ask "do you know anyone good?" before they post opportunities
								publicly. That's what this is, access to relationships that took
								years to build, so you don't start from zero like I did.
							</p>
							<h2 className="mt-16 text-2xl font-bold tracking-tight text-inherit">
								You've already put in the hard work. You've already proved you
								can do this.
							</h2>
							<p className="mt-6">You just need someone to open the doors.</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}


