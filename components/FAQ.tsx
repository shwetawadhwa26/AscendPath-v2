import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
	{
		question: "Who is this actually for?",
		answer:
			"Look, if you're brand new, this isn't it. Come back in 6 months. This is for you if you've been at it 4-5+ months, whether you're a closer, setter, freelancer, or running your own thing, and you're making $800-$2K/month but feel stuck. You know you're skilled. You deliver results. But nobody knows you exist. You're tired of low-paying gigs, cold pitching into the void, refreshing Upwork, or watching people with half your talent get better opportunities because they \"know someone.\" If that's you, and you're ready to stop chasing and start building real relationships with decision-makers, this is for you.",
	},
	{
		question: "Do I need to be in sales or can I be a freelancer/solopreneur?",
		answer:
			"You need experience, but it doesn't have to be sales. If you're a freelancer, agency owner, consultant, or running your own thing and you've been doing it for at least 4-5 months, you're in. What matters is that you already know how to deliver results. You're skilled at what you do. This program isn't about teaching you your craft, it's about positioning you, connecting you with the right people, and scaling you from $800-$2K/month to $5K-$10K/month. If you're still figuring out your skill, you're not ready. Go get some reps in, then come back. I'm not here to babysit. I'm here to turn skilled but invisible people into connected, in-demand professionals.",
	},
	{
		question: "I don't have any connections. Will this still work?",
		answer:
			"That's exactly why you're here. I didn't have connections either. I had to build them from scratch. Here's the truth: you don't need connections to start. You need a system to build them. I'm going to teach you how to DM without sounding desperate, how to turn strangers into relationships, how to position yourself so people want to work with you or introduce you to opportunities. And while you're learning? You're leveraging my network. By the time we're done, you won't need me anymore. You'll be the person people come to.",
	},
	{
		question: "Is this just another sales course?",
		answer:
			"No. Courses give you content and disappear. This is live coaching. Twice a week, we're on calls together. I'm reviewing your messages, auditing your profile, checking your pipeline. You're getting my time, my network, my systems, the exact ones I used to go from nobody to someone everyone knows. If you want videos you can watch at 2x speed and never implement, go buy a course. If you want someone in the trenches with you, this is it.",
	},
	{
		question: "Why you? What makes you different?",
		answer:
			"I'm not a coach who did it once five years ago and now sells courses about it. I'm 21. I generated over $1.5M in sales. I know founders, agency owners, closers, setters, hiring managers across the industry. When you join, you're not just learning from me, you're getting access to my network. Real introductions. Real relationships with people who need what you do. Most coaches sell you videos. I'm selling you access to people who can actually change your income. And honestly? I've been where you are. I moved here with broken English, worked at Walmart, did security jobs, felt invisible. Then I figured out how to build relationships instead of chasing applications and job boards. That's what I'm teaching you.",
	},
	{
		question: "What's the guarantee? What if this doesn't work?",
		answer:
			"You get 10-20 qualified owner meetings in 60-90 days. If you don't? I don't disappear. I keep coaching you for free until you do. Simple as that. I'm not here to take your money and run. If you show up and do the work, you'll get meetings. And if something goes wrong, I'm staying until we fix it.",
	},
];

export default function FAQ() {
	return (
		<div className="text-transition-colors duration-300">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-caly">
						Frequently asked questions
					</h2>
					<dl className="mt-16 divide-y divide-taupe/20">
						{faqs.map((faq) => (
							<Disclosure
								key={faq.question}
								as="div"
								className="py-6 first:pt-0 last:pb-0">
								<dt>
									<DisclosureButton className="group flex w-full items-start justify-between text-left hover:text-clay transition-colors">
										<span className="text-base/7 font-semibold">
											{faq.question}
										</span>
										<span className="ml-6 flex h-7 items-center">
											<PlusIcon
												aria-hidden="true"
												className="size-6 text-taupe group-hover:text-clay transition-colors group-data-open:hidden"
											/>
											<MinusIcon
												aria-hidden="true"
												className="size-6 text-clay group-not-data-open:hidden"
											/>
										</span>
									</DisclosureButton>
								</dt>
								<DisclosurePanel
									as="dd"
									className="mt-2 pr-12">
									<p className="text-base/7 text-taupe">
										{faq.answer}
									</p>
								</DisclosurePanel>
							</Disclosure>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}


// import {
// 	Disclosure,
// 	DisclosureButton,
// 	DisclosurePanel,
// } from "@headlessui/react";
// import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

// const faqs = [
// 	{
// 		question: "Who is this actually for?",
// 		answer:
// 			"Look, if you're brand new, this isn't it. Come back in 6 months. This is for you if you've been at it 4-5+ months, whether you're a closer, setter, freelancer, or running your own thing, and you're making $800-$2K/month but feel stuck. You know you're skilled. You deliver results. But nobody knows you exist. You're tired of low-paying gigs, cold pitching into the void, refreshing Upwork, or watching people with half your talent get better opportunities because they \"know someone.\" If that's you, and you're ready to stop chasing and start building real relationships with decision-makers, this is for you.",
// 	},
// 	{
// 		question: "Do I need to be in sales or can I be a freelancer/solopreneur?",
// 		answer:
// 			"You need experience, but it doesn't have to be sales. If you're a freelancer, agency owner, consultant, or running your own thing and you've been doing it for at least 4-5 months, you're in. What matters is that you already know how to deliver results. You're skilled at what you do. This program isn't about teaching you your craft, it's about positioning you, connecting you with the right people, and scaling you from $800-$2K/month to $5K-$10K/month. If you're still figuring out your skill, you're not ready. Go get some reps in, then come back. I'm not here to babysit. I'm here to turn skilled but invisible people into connected, in-demand professionals.",
// 	},
// 	{
// 		question: "I don't have any connections. Will this still work?",
// 		answer:
// 			"That's exactly why you're here. I didn't have connections either. I had to build them from scratch. Here's the truth: you don't need connections to start. You need a system to build them. I'm going to teach you how to DM without sounding desperate, how to turn strangers into relationships, how to position yourself so people want to work with you or introduce you to opportunities. And while you're learning? You're leveraging my network. By the time we're done, you won't need me anymore. You'll be the person people come to.",
// 	},
// 	{
// 		question: "Is this just another sales course?",
// 		answer:
// 			"No. Courses give you content and disappear. This is live coaching. Twice a week, we're on calls together. I'm reviewing your messages, auditing your profile, checking your pipeline. You're getting my time, my network, my systems, the exact ones I used to go from nobody to someone everyone knows. If you want videos you can watch at 2x speed and never implement, go buy a course. If you want someone in the trenches with you, this is it.",
// 	},
// 	{
// 		question: "Why you? What makes you different?",
// 		answer:
// 			"I'm not a coach who did it once five years ago and now sells courses about it. I'm 21. I generated over $1.5M in sales. I know founders, agency owners, closers, setters, hiring managers across the industry. When you join, you're not just learning from me, you're getting access to my network. Real introductions. Real relationships with people who need what you do. Most coaches sell you videos. I'm selling you access to people who can actually change your income. And honestly? I've been where you are. I moved here with broken English, worked at Walmart, did security jobs, felt invisible. Then I figured out how to build relationships instead of chasing applications and job boards. That's what I'm teaching you.",
// 	},
// 	{
// 		question: "What's the guarantee? What if this doesn't work?",
// 		answer:
// 			"You get 10-20 qualified owner meetings in 60-90 days. If you don't? I don't disappear. I keep coaching you for free until you do. Simple as that. I'm not here to take your money and run. If you show up and do the work, you'll get meetings. And if something goes wrong, I'm staying until we fix it.",
// 	},
// ];

// export default function FAQ() {
// 	return (
// 		<div className="bg-white dark:bg-gray-900">
// 			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
// 				<div className="mx-auto max-w-4xl">
// 					<h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
// 						Frequently asked questions
// 					</h2>
// 					<dl className="mt-16 divide-y divide-gray-900/10 dark:divide-white/10">
// 						{faqs.map((faq) => (
// 							<Disclosure
// 								key={faq.question}
// 								as="div"
// 								className="py-6 first:pt-0 last:pb-0">
// 								<dt>
// 									<DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
// 										<span className="text-base/7 font-semibold">
// 											{faq.question}
// 										</span>
// 										<span className="ml-6 flex h-7 items-center">
// 											<PlusIcon
// 												aria-hidden="true"
// 												className="size-6 group-data-open:hidden"
// 											/>
// 											<MinusIcon
// 												aria-hidden="true"
// 												className="size-6 group-not-data-open:hidden"
// 											/>
// 										</span>
// 									</DisclosureButton>
// 								</dt>
// 								<DisclosurePanel
// 									as="dd"
// 									className="mt-2 pr-12">
// 									<p className="text-base/7 text-gray-600 dark:text-gray-400">
// 										{faq.answer}
// 									</p>
// 								</DisclosurePanel>
// 							</Disclosure>
// 						))}
// 					</dl>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
