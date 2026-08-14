import Link from "next/link";
// import SplitApplyButton from "./SplitApplyButton";

const navigation = {
    social: [
        {
            name: "Facebook",
            href: "https://www.facebook.com/harryrewires",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Instagram",
            href: "https://www.instagram.com/harry_connects/",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/harryconnects/",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Email",
            href: "mailto:harindersales@gmail.com",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
            ),
        },
        {
            name: "YouTube",
            href: "https://www.youtube.com/@harryrewires",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    <path
                        fillRule="evenodd"
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: "Skool",
            href: "https://www.skool.com/ascend-path/about",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 54 24"
                    {...props}
                    className={props.className?.replace("size-6", "h-6 w-auto")}
                >
                    <text 
                        x="0" 
                        y="18" 
                        fontFamily="system-ui, -apple-system, sans-serif" 
                        fontWeight="800" 
                        fontSize="20" 
                        letterSpacing="-1"
                    >
                        skool
                    </text>
                </svg>
            ),
        },
    ],
    main: [
        { name: 'My Story', href: '/my-story' },
        { name: 'Sales Reps', href: '/sales-reps' },
        { name: 'Business Owners', href: '/business-owners' },
        { name: 'About', href: '/#about' },
    ],
    apply: [
        { name: 'For Business Owners', href: '/business-owners#audit' },
        { name: 'For Sales Reps', href: '/sales-reps#apply' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-espresso text-taupe transition-colors duration-300 border-t border-bone/10">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
                
                {/* Grid Layout:
                  lg:grid-cols-3 creates a 3-column layout on desktop.
                  Left column (brand + social) spans 1 column.
                  Right columns (links) sit side-by-side. 
                */}
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    
                    {/* LEFT COLUMN: Brand & Social */}
                    <div className="space-y-8 lg:col-span-1">
                        <span className="text-1xl font-bold text-bone tracking-widest uppercase">
                            THE ASCEND PATH
                        </span>
                        <p className="mt-1 text-sm/6 text-balance text-taupe font-medium">
                            My network becomes your network.
                        </p>
                        <div className="flex gap-x-6">
                            {navigation.social.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-taupe hover:text-clay transition-colors duration-200">
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon
                                        aria-hidden="true"
                                        className="size-6"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMNS: Navigation & Apply Lists */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:justify-end">
                        
                        {/* Navigation List */}
                        <div className="flex flex-col space-y-4 lg:ml-auto">
                            <h3 className="text-sm font-bold tracking-widest text-clay uppercase mb-2">
                                Navigation
                            </h3>
                            {navigation.main.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>

                        {/* Direct Apply List */}
                        <div className="flex flex-col space-y-4 lg:ml-auto">
                            <h3 className="text-sm font-bold tracking-widest text-clay uppercase mb-2">
                                Direct Apply
                            </h3>
                            {navigation.apply.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="mt-12 border-t border-taupe/20 pt-8 sm:mt-16 lg:mt-20">
                    <p className="text-sm/6 text-taupe font-medium">
                        &copy; 2025 The Ascend Path. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}






// import Link from "next/link";
// // import SplitApplyButton from "./SplitApplyButton";

// const navigation = {
//     social: [
//         {
//             name: "Facebook",
//             href: "https://www.facebook.com/harryrewires",
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     {...props}>
//                     <path
//                         fillRule="evenodd"
//                         d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             ),
//         },
//         {
//             name: "Instagram",
//             href: "https://www.instagram.com/harry_connects/",
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     {...props}>
//                     <path
//                         fillRule="evenodd"
//                         d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             ),
//         },
//         {
//             name: "LinkedIn",
//             href: "https://www.linkedin.com/in/harryconnects/", // Update with actual URL if different
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     {...props}>
//                     <path
//                         fillRule="evenodd"
//                         d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             ),
//         },

        
//         {
//             name: "Email",
//             href: "mailto:harindersales@gmail.com",
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     {...props}>
//                     <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
//                     <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
//                 </svg>
//             ),
//         },
//         {
//             name: "YouTube",
//             href: "https://www.youtube.com/@harryrewires", // Update with your actual YouTube URL
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                     {...props}>
//                     {/* Official YouTube Icon Path */}
//                     <path
//                         fillRule="evenodd"
//                         d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
//                         clipRule="evenodd"
//                     />
//                 </svg>
//             ),
//         },
//         {
//             name: "Skool",
//             href: "https://www.skool.com/ascend-path/about",
//             icon: (props: React.SVGProps<SVGSVGElement>) => (
//                 <svg
//                     fill="currentColor"
//                     viewBox="0 0 54 24"
//                     {...props}
//                     // This strips out the square constraint (size-6) so the wide logo doesn't get squashed!
//                     className={props.className?.replace("size-6", "h-6 w-auto")}
//                 >
//                     <text 
//                         x="0" 
//                         y="18" 
//                         fontFamily="system-ui, -apple-system, sans-serif" 
//                         fontWeight="800" 
//                         fontSize="20" 
//                         letterSpacing="-1"
//                     >
//                         skool
//                     </text>
//                 </svg>
//             ),
//         },
//     ],
// };

// export default function Footer() {
//     return (
//         <footer className="bg-espresso text-taupe transition-colors duration-300 border-t border-bone/10">
//             <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
//                 <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
//                     <div className="space-y-8">
//                         <span className="text-1xl font-bold text-bone tracking-widest uppercase">
//                             THE ASCEND PATH
//                         </span>
//                         <p className="mt-1 text-sm/6 text-balance text-taupe font-medium">
//                             My network becomes your network.
//                         </p>
//                         <div className="flex gap-x-6">
//                             {navigation.social.map((item) => (
//                                 <a
//                                     key={item.name}
//                                     href={item.href}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="text-taupe hover:text-clay transition-colors duration-200">
//                                     <span className="sr-only">{item.name}</span>
//                                     <item.icon
//                                         aria-hidden="true"
//                                         className="size-6"
//                                     />
//                                 </a>
//                             ))}
//                         </div>
//                     </div>
//                     <div className="flex flex-wrap gap-x-8 gap-y-4 lg:justify-end">
//                         <a
//                             href="/my-story"
//                             className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
//                             My Story
//                         </a>

//                         <a
//                             href="/sales-reps"
//                             className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
//                             Sales Reps
//                         </a>
//                         <a
//                             href="/business-owners"
//                             className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
//                             Business Owners
//                         </a>
// 						<Link
//                             href="/#about"
//                             className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
//                             About
//                         </Link>
//                     </div>
//                 </div>
//                 <div className="mt-12 border-t border-taupe/20 pt-8 sm:mt-16 lg:mt-20">
//                     <p className="text-sm/6 text-taupe font-medium">
//                         &copy; 2025 The Ascend Path. All rights reserved.
//                     </p>
//                 </div>
//             </div>
//         </footer>
//     );
// }






