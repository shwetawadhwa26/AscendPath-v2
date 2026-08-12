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
            href: "https://www.linkedin.com/in/harryconnects/", // Update with actual URL if different
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
            name: "Skool",
            href: "https://www.skool.com/ascend-path/about",
            icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    {...props}>
                    {/* Simplified geometric path representing the Skool logo (a stylized S/infinity shape) */}
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-12.5v9l7-4.5-7-4.5z" />
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
    ],
};

export default function Footer() {
    return (
        <footer className="bg-espresso text-taupe transition-colors duration-300 border-t border-bone/10">
            <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    <div className="space-y-8">
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
                    <div className="flex flex-wrap gap-x-8 gap-y-4 lg:justify-end">
                        <a
                            href="/my-story"
                            className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
                            My Story
                        </a>

                        <a
                            href="/sales-reps"
                            className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
                            Sales Reps
                        </a>
                        <a
                            href="/business-owners"
                            className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
                            Business Owners
                        </a>
						<Link
                            href="/#about"
                            className="text-sm/6 font-medium text-bone hover:text-clay transition-colors duration-200">
                            About
                        </Link>
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
// import SplitApplyButton from "./SplitApplyButton";

// const navigation = {
// 	social: [
// 		{
// 			name: "Facebook",
// 			href: "https://www.facebook.com/harryrewires",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path
// 						fillRule="evenodd"
// 						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// 						clipRule="evenodd"
// 					/>
// 				</svg>
// 			),
// 		},
// 		{
// 			name: "Instagram",
// 			href: "https://www.instagram.com/harry_connects/",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path
// 						fillRule="evenodd"
// 						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// 						clipRule="evenodd"
// 					/>
// 				</svg>
// 			),
// 		},
// 		// {
// 		// 	name: "WhatsApp",
// 		// 	href: "https://wa.me/17808840616",
// 		// 	icon: (props: React.SVGProps<SVGSVGElement>) => (
// 		// 		<svg
// 		// 			fill="currentColor"
// 		// 			viewBox="0 0 24 24"
// 		// 			{...props}>
// 		// 			<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
// 		// 		</svg>
// 		// 	),
// 		// },
// 		{
// 			name: "Skool",
// 			href: "https://www.skool.com/ascend-path/about",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
// 				</svg>
// 			),
// 		},
// 		{
// 			name: "Email",
// 			href: "mailto:harindersales@gmail.com",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
// 					<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
// 				</svg>
// 			),
// 		},
// 	],
// };

// export default function Footer() {
// 	return (
// 		<footer className="bg-espresso text-taupe transition-colors duration-300">
// 			<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
// 				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
// 					<div className="space-y-8">
// 						<span className="text-1xl font-bold text-bone">
// 							THE ASCEND PATH
// 						</span>
// 						<p className="mt-1 text-sm/6 text-balance text-taupe">
// 							My network becomes your network.
// 						</p>
// 						<div className="flex gap-x-6">
// 							{navigation.social.map((item) => (
// 								<a
// 									key={item.name}
// 									href={item.href}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="text-taupe hover:text-clay transition-colors">
// 									<span className="sr-only">{item.name}</span>
// 									<item.icon
// 										aria-hidden="true"
// 										className="size-6"
// 									/>
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 					<div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
					
// 						<a
// 							href="/my-story"
// 							className="text-sm/6 font-medium text-bone hover:text-clay transition-colors">
// 							My Story
// 						</a>
						
// 						 <a
// 							href="/sales-reps"
// 							className="text-sm/6 font-medium text-bone hover:text-clay transition-colors">
// 							Sales Reps
// 						</a>
// 						<a
// 							href="/business-owners"
// 							className="text-sm/6 font-medium text-bone hover:text-clay transition-colors">
// 							Business Owners
// 						</a>
// 						<Link
// 							href="/#about"
// 							className="-m-1.5 p-1.5 text-bone">
// 							<span className="sr-only">The Ascend Path</span>
// 							About
// 						</Link>

// 						{/* <span>
// 							<SplitApplyButton size="sm">Apply</SplitApplyButton>
// 						</span> */}
// 					</div>
// 				</div>
// 				<div className="mt-6 border-t border-taupe/30 pt-8 sm:mt-4 lg:mt-6">
// 					<p className="text-sm/6 text-taupe">
// 						&copy; 2025 The Ascend Path. All rights
// 						{/* &copy; {new Date().getFullYear()} The Ascend Path. All rights */}
// 						reserved.
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// const navigation = {
// 	social: [
// 		{
// 			name: "Facebook",
// 			href: "https://www.facebook.com/harryrewires",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path
// 						fillRule="evenodd"
// 						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
// 						clipRule="evenodd"
// 					/>
// 				</svg>
// 			),
// 		},
// 		{
// 			name: "Instagram",
// 			href: "https://www.instagram.com/harry_connects/",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path
// 						fillRule="evenodd"
// 						d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
// 						clipRule="evenodd"
// 					/>
// 				</svg>
// 			),
// 		},
// 		{
// 			name: "WhatsApp",
// 			href: "https://wa.me/17808840616",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
// 				</svg>
// 			),
// 		},
// 		{
// 			name: "Email",
// 			href: "mailto:harindersales@gmail.com",
// 			icon: (props: React.SVGProps<SVGSVGElement>) => (
// 				<svg
// 					fill="currentColor"
// 					viewBox="0 0 24 24"
// 					{...props}>
// 					<path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
// 					<path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
// 				</svg>
// 			),
// 		},
// 	],
// };

// export default function Footer() {
// 	return (
// 		<footer className="bg-white dark:bg-gray-900">
// 			<div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
// 				<div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
// 					<div className="space-y-8">
// 						<span className="text-2xl font-bold text-black dark:text-white">
// 							THE ASCEND PATH
// 						</span>
// 						<p className="text-sm/6 text-balance text-gray-600 dark:text-gray-400">
// 							Turning invisible talent into unstoppable momentum.
// 						</p>
// 						<div className="flex gap-x-6">
// 							{navigation.social.map((item) => (
// 								<a
// 									key={item.name}
// 									href={item.href}
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
// 									<span className="sr-only">{item.name}</span>
// 									<item.icon
// 										aria-hidden="true"
// 										className="size-6"
// 									/>
// 								</a>
// 							))}
// 						</div>
// 					</div>
// 					<div className="flex flex-wrap gap-x-6 gap-y-3 lg:justify-end">
// 						<a
// 							href="/about"
// 							className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
// 							About
// 						</a>
// 						<a
// 							href="/results"
// 							className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
// 							Results
// 						</a>
// 						<a
// 							href="/process"
// 							className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
// 							Process
// 						</a>
// 						<a
// 							href="https://app.iclosed.io/e/theascendpath/connection-call"
// 							className="text-sm/6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300">
// 							Apply
// 						</a>
// 					</div>
// 				</div>
// 				<div className="mt-6 border-t border-gray-900/10 pt-8 sm:mt-4 lg:mt-6 dark:border-white/10">
// 					<p className="text-sm/6 text-gray-600 dark:text-gray-400">
// 						&copy; {new Date().getFullYear()} The Ascend Path. All rights
// 						reserved.
// 					</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
