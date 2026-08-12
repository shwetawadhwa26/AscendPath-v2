"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "Is this a course?",
        answer: "No. There's no course to drag through alone. We get on calls, I look at your stuff, I tell you what's broken, and I plug you into rooms. The training exists to make you placeable, and the placement is the point.",
    },
    {
        question: "I've never sold anything. Can I actually do this?",
        answer: "Yes, if you're coachable and you'll do the work. I've trained people from zero and placed them, and some of them out-earn the experienced guys now. What I can't fix is someone who wants a shortcut.",
    },
    {
        question: "How fast will I get placed?",
        answer: "Most reps are placed and earning inside 30 to 45 days. If you need training first it can take longer, and I'll tell you that on the fit call instead of surprising you with it later.",
    },
    {
        question: "What do the roles pay?",
        answer: "Setters in my network usually land between $3K and $6K a month, and closers go from $6K to $12K and beyond. The goal I hold everyone to is $5K a month or more. Your results depend on your effort and the role you take.",
    },
    {
        question: "What does it cost?",
        answer: "We talk numbers on the call, once we both know it's a fit. What I'll say here is that staying stuck at $1,500 a month is costing you more every single month than working with me does.",
    },
    {
        question: "What if I don't get placed?",
        answer: "Then I keep working with you until you are, at no extra cost. That's not a refund policy, it's me staying in the fight with you. The only people this doesn't work for are the ones who stop showing up.",
    },
    {
        question: "Why are you so strict about no-shows?",
        answer: "Because owners take my intros seriously, and that only works if every rep I send shows up. One no-show damages every rep who comes after them, so it's one strike and you're out. Harsh, but it's the reason the network works.",
    }
];

export default function SalesFAQ() {
    return (
        <div className="transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-16 lg:px-8">
                    <div className="mx-auto max-w-6xl">
                        <p className="text-lg text-center font-bold tracking-widest text-clay uppercase mb-4">
                            FAQ
                        </p>
                        <h2 className="text-4xl text-center font-serif font-bold tracking-tight sm:text-5xl text-espresso">
                            Questions I get every week.
                        </h2>
                        
                        <dl className="mt-16 px-10 py-10 divide-y divide-taupe/20">
                            {faqs.map((faq) => (
                                <Disclosure
                                    key={faq.question}
                                    as="div"
                                    className="py-6 first:pt-0 last:pb-0"
                                >
                                    <dt>
                                        <DisclosureButton className="group flex w-full items-start justify-between text-left hover:text-clay transition-colors focus:outline-none">
                                            <span className="text-lg sm:text-xl font-bold text-espresso group-hover:text-clay transition-colors">
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
                                        className="mt-4 pr-12 transition-all duration-300 ease-in-out"
                                    >
                                        <p className="text-lg text-taupe font-medium leading-relaxed">
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






// "use client";

// import {
//     Disclosure,
//     DisclosureButton,
//     DisclosurePanel,
// } from "@headlessui/react";
// import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

// const faqs = [
//     {
//         question: "Do I need sales experience to apply?",
//         answer: "No. Experience helps, but hunger and coachability matter more. I've trained people from zero who now out-earn reps with five years on their resume. If you're willing to put in the reps, the Inner Room Method works.",
//     },
//     {
//         question: "How much does it cost?",
//         answer: "Applying and taking the Fit Call is 100% free. If you are accepted into the Inner Room to be trained and placed, there is an investment, which we discuss openly on the call. I don't hide the price, but I also don't take your money unless I know I can place you.",
//     },
//     {
//         question: "Is this full-time or part-time?",
//         answer: "The goal is full-time, high-ticket closing. Some reps start part-time while they transition, but the business owners in my network are looking for hungry killers who want to make this their career, not a side hustle.",
//     },
//     {
//         question: "What kind of offers will I be selling?",
//         answer: "B2B consulting, high-ticket coaching, marketing agencies, and software. I only partner with owners who have proven offers, real lead flow, and margins that support $5K-$10K/month commissions for my reps.",
//     },
//     {
//         question: "What happens if I don't get placed?",
//         answer: "I don't stop until you are. You stay in the Inner Room, you keep getting my direct feedback on your tape, and you keep getting access to the owner pipeline until you land your seat. My reputation is built on placements, not just training.",
//     },
// ];

// export default function SalesFAQ() {
//     return (
//         <div className="transition-colors duration-300">
//             <div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-32 lg:px-8 border-b border-taupe/10 border-t ">
//                     <div className="mx-auto max-w-6xl">
//                         <p className="text-lg text-center font-bold tracking-widest text-clay uppercase mb-4">
//                             FAQ
//                         </p>
//                         <h2 className="text-4xl text-center font-serif font-bold tracking-tight sm:text-5xl text-espresso">
//                             Questions I get every week.
//                         </h2>
                        
//                         <dl className="mt-16 px-10 py-10 divide-y divide-taupe/20 shadow-2xl shadow-black rounded-4xl bg-bone/90">
//                             {faqs.map((faq) => (
//                                 <Disclosure
//                                     key={faq.question}
//                                     as="div"
//                                     className="py-6 first:pt-0 last:pb-0"
//                                 >
//                                     <dt>
//                                         <DisclosureButton className="group flex w-full items-start justify-between text-left hover:text-clay transition-colors focus:outline-none">
//                                             <span className="text-lg sm:text-xl font-bold text-espresso group-hover:text-clay transition-colors">
//                                                 {faq.question}
//                                             </span>
//                                             <span className="ml-6 flex h-7 items-center">
//                                                 <PlusIcon
//                                                     aria-hidden="true"
//                                                     className="size-6 text-taupe group-hover:text-clay transition-colors group-data-open:hidden"
//                                                 />
//                                                 <MinusIcon
//                                                     aria-hidden="true"
//                                                     className="size-6 text-clay group-not-data-open:hidden"
//                                                 />
//                                             </span>
//                                         </DisclosureButton>
//                                     </dt>
//                                     <DisclosurePanel
//                                         as="dd"
//                                         className="mt-4 pr-12 transition-all duration-300 ease-in-out"
//                                     >
//                                         <p className="text-lg text-taupe font-medium leading-relaxed">
//                                             {faq.answer}
//                                         </p>
//                                     </DisclosurePanel>
//                                 </Disclosure>
//                             ))}
//                         </dl>
//                     </div>
//             </div>
//         </div>
//     );
// }