'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";
import Image from "next/image";
import { usePostHog } from "posthog-js/react"; // Need this for the mobile menu tracking!

// 1. Import your new SplitApplyButton!
import SplitApplyButton from "./SplitApplyButton";

const navigation = [

	{ name: "My Story", href: "/my-story" },
    { name: "Sales Reps", href: "/sales-reps"},
	{ name: "Business Owners", href: "/business-owners"},
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const posthog = usePostHog();

    // Custom handler for the mobile menu links
    const handleMobileOptionClick = (userType: string) => {
        posthog.capture("navbar_split_clicked", { user_type: userType, device: "mobile" });
        setMobileMenuOpen(false);
    };

    return (
        <header className="absolute inset-x-0 top-0 z-50 transition-colors duration-300">
            <nav
                aria-label="Global"
                className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-4 border-b border-espresso shadow-l rounded-b-xl bg-bone backdrop-blur-lg transition-colors duration-300">
                <div className="flex lg:flex-1">
                    <Link className="flex items-center gap-2 -m-1.5 p-1.5"
                        href="/"
                        >
                        {/* <span className="text-espresso">The Ascend Path</span> */}
                        <Image
                            src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/3fcf1a87-adcc-4fcf-630f-c6f63e35cd00/public"
                            alt="The Ascend Path"
                            height={160}
                            width={160}
                            className="h-16 w-auto"
                        />
						<span className="text-Espresso text-1xl font-bold">The Ascend Path</span>
                    </Link>

                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-taupe hover:text-clay transition-colors">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon
                            aria-hidden="true"
                            className="size-6"
                        />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm/6 font-semibold text-espresso hover:text-clay transition-colors">
                            {item.name}
                        </a>
                    ))}
                </div>
                
                {/* 2. Swapped the generic link for your Split Button (Desktop) */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <SplitApplyButton size="sm">Let's Chat</SplitApplyButton>
                </div>
            </nav>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="lg:hidden">
                <div className="fixed inset-0 z-50" />
                <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bone p-6 sm:max-w-sm sm:ring-1 sm:ring-taupe/20 transition-colors duration-300">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="-m-1.5 p-1.5"
                            onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">The Ascend Path</span>
                            <span className="text-2xl font-bold text-espresso">
                                THE ASCEND PATH
                            </span>
                        </Link>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-taupe hover:text-clay transition-colors">
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon
                                aria-hidden="true"
                                className="size-6"
                            />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-taupe/20">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-espresso hover:bg-taupe/10 hover:text-clay transition-colors">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            
                            {/* 3. Updated Mobile Menu to explicitly show the two paths */}
                            <div className="py-6 space-y-3">
                                <h3 className="text-xs font-bold text-taupe uppercase tracking-widest px-1 mb-2">Let's Chat</h3>
                                <Link
                                    href="/sales-reps"
                                    onClick={() => handleMobileOptionClick("Sales Rep")}
                                    className="block rounded-xl bg-clay px-4 py-3 font-bold text-clay shadow-sm hover:bg-clay/10 transition-colors"
                                >
                                	<span className="text-bone">I am a Sales Rep</span>
                                </Link>
                                <Link
                                    href="/business-owners"
                                    onClick={() => handleMobileOptionClick("Business Owner")}
                                    className="block rounded-xl bg-espresso px-4 py-3 font-bold text-espresso shadow-sm hover:bg-espresso/10 transition-colors"
                                >
                                    <span className="text-bone">I am a Business Owner</span>
                                </Link>
                            </div>

                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}




// 'use client'

// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Link from "next/link";
// import Image from "next/image";

// const navigation = [
// 	// { name: "Results", href: "/results" },
// 	{ name: "Process", href: "/process" },
// 	{ name: "Sales Reps", href: "/sales-reps"},
// 	{ name: "Business Owners", href: "/business-owners"}
// ];

// export default function Navbar() {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// 	return (
// 		<header className="absolute inset-x-0 top-0 z-50 transition-colors duration-300">
// 			<nav
// 				aria-label="Global"
// 				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
// 				<div className="flex lg:flex-1">
// 					<Link
// 						href="/"
// 						className="-m-1.5 p-1.5">
// 						<span className="sr-only">The Ascend Path</span>
// 						<Image
// 							src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/3fcf1a87-adcc-4fcf-630f-c6f63e35cd00/public"
// 							// src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/5554ea98-3b99-4940-a904-b64673e13800/public"
// 							alt="The Ascend Path"
// 							height={160}
// 							width={160}
// 							className="h-16 w-auto"
// 						/>
// 					</Link>
// 				</div>
// 				<div className="flex lg:hidden">
// 					<button
// 						type="button"
// 						onClick={() => setMobileMenuOpen(true)}
// 						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-taupe hover:text-clay transition-colors">
// 						<span className="sr-only">Open main menu</span>
// 						<Bars3Icon
// 							aria-hidden="true"
// 							className="size-6"
// 						/>
// 					</button>
// 				</div>
// 				<div className="hidden lg:flex lg:gap-x-12">
// 					{navigation.map((item) => (
// 						<a
// 							key={item.name}
// 							href={item.href}
// 							className="text-sm/6 font-semibold text-espresso dark:text-espresso hover:text-clay transition-colors">
// 							{item.name}
// 						</a>
// 					))}
// 				</div>
// 				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
// 					<a
// 						href="/process"
// 						rel="noopener noreferrer"
// 						className="rounded-md bg-clay px-4 py-2 text-sm font-semibold text-bone shadow-md hover:opacity-90 transition-opacity">
// 						Apply Now
// 					</a>
// 				</div>
// 			</nav>
// 			<Dialog
// 				open={mobileMenuOpen}
// 				onClose={setMobileMenuOpen}
// 				className="lg:hidden">
// 				<div className="fixed inset-0 z-50" />
// 				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-bone dark:bg-espresso p-6 sm:max-w-sm sm:ring-1 sm:ring-taupe/20 transition-colors duration-300">
// 					<div className="flex items-center justify-between">
// 						<Link
// 							href="/"
// 							className="-m-1.5 p-1.5"
// 							onClick={() => setMobileMenuOpen(false)}>
// 							<span className="sr-only">The Ascend Path</span>
// 							<span className="text-2xl font-bold text-espresso dark:text-bone">
// 								THE ASCEND PATH
// 							</span>
// 						</Link>
// 						<button
// 							type="button"
// 							onClick={() => setMobileMenuOpen(false)}
// 							className="-m-2.5 rounded-md p-2.5 text-taupe hover:text-clay transition-colors">
// 							<span className="sr-only">Close menu</span>
// 							<XMarkIcon
// 								aria-hidden="true"
// 								className="size-6"
// 							/>
// 						</button>
// 					</div>
// 					<div className="mt-6 flow-root">
// 						<div className="-my-6 divide-y divide-taupe/20">
// 							<div className="space-y-2 py-6">
// 								{navigation.map((item) => (
// 									<a
// 										key={item.name}
// 										href={item.href}
// 										onClick={() => setMobileMenuOpen(false)}
// 										className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-espresso dark:text-bone hover:bg-taupe/10 hover:text-clay transition-colors">
// 										{item.name}
// 									</a>
// 								))}
// 							</div>
// 							<div className="py-6">
// 								<a
// 									href="/process"
// 									onClick={() => setMobileMenuOpen(false)}
// 									rel="noopener noreferrer"
// 									className="block rounded-md bg-clay px-3.5 py-2.5 text-center text-base font-semibold text-bone shadow-md hover:opacity-90 transition-opacity">
// 									Apply Now
									
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</DialogPanel>
// 			</Dialog>
// 		</header>
// 	);
// }
















// 'use client'


// import { useState } from 'react'
// import { Dialog, DialogPanel } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Link from "next/link";
// import Image from "next/image";

// const navigation = [
// 	{ name: "Results", href: "/results" },
// 	{ name: "Process", href: "/process" },
// 	{ name: "Register", href: "/Register" },
// ];

// export default function Navbar() {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// 	return (
// 		<header className="absolute inset-x-0 top-0 z-50">
// 			<nav
// 				aria-label="Global"
// 				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
// 				<div className="flex lg:flex-1">
// 					<Link
// 						href="/"
// 						className="-m-1.5 p-1.5">
// 						<span className="sr-only">The Ascend Path</span>
// 						<Image
// 							src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/5554ea98-3b99-4940-a904-b64673e13800/public"
// 							alt="The Ascend Path"
// 							height={160}
// 							width={160}
// 							className="h-16 w-auto"
// 						/>
// 					</Link>
// 				</div>
// 				<div className="flex lg:hidden">
// 					<button
// 						type="button"
// 						onClick={() => setMobileMenuOpen(true)}
// 						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200">
// 						<span className="sr-only">Open main menu</span>
// 						<Bars3Icon
// 							aria-hidden="true"
// 							className="size-6"
// 						/>
// 					</button>
// 				</div>
// 				<div className="hidden lg:flex lg:gap-x-12">
// 					{navigation.map((item) => (
// 						<a
// 							key={item.name}
// 							href={item.href}
// 							className="text-sm/6 font-semibold text-gray-900 dark:text-white">
// 							{item.name}
// 						</a>
// 					))}
// 				</div>
// 				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
// 					<a
// 						href="https://app.iclosed.io/e/theascendpath/connection-call"
// 						className="rounded-md bg-black px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
// 						Apply Now
// 					</a>
// 				</div>
// 			</nav>
// 			<Dialog
// 				open={mobileMenuOpen}
// 				onClose={setMobileMenuOpen}
// 				className="lg:hidden">
// 				<div className="fixed inset-0 z-50" />
// 				<DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
// 					<div className="flex items-center justify-between">
// 						<Link
// 							href="/"
// 							className="-m-1.5 p-1.5">
// 							<span className="sr-only">The Ascend Path</span>
// 							<span className="text-2xl font-bold text-black dark:text-white">
// 								THE ASCEND PATH
// 							</span>
// 						</Link>
// 						<button
// 							type="button"
// 							onClick={() => setMobileMenuOpen(false)}
// 							className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200">
// 							<span className="sr-only">Close menu</span>
// 							<XMarkIcon
// 								aria-hidden="true"
// 								className="size-6"
// 							/>
// 						</button>
// 					</div>
// 					<div className="mt-6 flow-root">
// 						<div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
// 							<div className="space-y-2 py-6">
// 								{navigation.map((item) => (
// 									<a
// 										key={item.name}
// 										href={item.href}
// 										className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5">
// 										{item.name}
// 									</a>
// 								))}
// 							</div>
// 							<div className="py-6">
// 								<a
// 									href="https://app.iclosed.io/e/theascendpath/connection-call"
// 									className="block rounded-md bg-black px-3.5 py-2.5 text-center text-base font-semibold text-white shadow-xs hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
// 									Apply Now
// 								</a>
// 							</div>
// 						</div>
// 					</div>
// 				</DialogPanel>
// 			</Dialog>
// 		</header>
// 	);
// }
