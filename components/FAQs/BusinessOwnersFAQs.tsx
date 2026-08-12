"use client";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "How is this different from a recruitment agency?",
        answer: "Agencies send you resumes and make you do the matching. I audit your offer first, match from a pool of reps I trained myself, and stay in the loop for the first 30 days. You never get handed a stack of strangers.",
    },
    {
        question: "How fast can I have someone in seat?",
        answer: "Within 7 to 14 days of the Offer Audit, and that's a maximum, not a target I sometimes hit.",
    },
    {
        question: "What if the rep doesn't work out?",
        answer: "If they're not producing by day 60, I replace them free. No interview rounds, no autopsy, just the next match from the pool.",
    },
    {
        question: "How do you get paid?",
        answer: "My pay is tied to the rep performing, so we're sitting on the same side of the table. The exact structure depends on the role, and we cover it on the audit.",
    },
    {
        question: "What niches do you place in?",
        answer: "Coaching, info products, agencies, SaaS, and 30+ niches beyond that. If you run a real offer with a real sales cycle, I almost certainly have reps who've sold something like it.",
    },
    {
        question: "I'm doing under $30K a month. Should I book?",
        answer: "Probably not yet. A rep isn't your bottleneck at that stage, and hiring one into an offer that isn't dialed in accelerates the mess instead of fixing it. Fix the foundation first and come back. I mean that.",
    }
];

export default function BusinessFAQ() {
    return (
        <div className="transition-colors duration-300">
            <div className="mx-auto max-w-7xl px-6 pb-12 sm:pb-32 lg:px-8 ">
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