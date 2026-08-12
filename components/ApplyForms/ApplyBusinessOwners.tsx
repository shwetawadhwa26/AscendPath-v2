"use client";

import { useState } from "react";
import NativeLeadForm from "./NativeLeadForm";

export default function ApplyBusinessOwners() {
    // React state to control the visibility of the backup form
    const [showBackup, setShowBackup] = useState(false);

    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                
                {/* 1. PRIMARY FORM: Aura Embed */}
                <div className="w-full max-w-7xl">
                    <iframe
                        data-aura-embed
                        src="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form-copy-2/embed?theme_preset=light"
                        title="Test_Form The Ascend Path - Booking"
                        loading="lazy"
                        className="w-full max-w-7xl min-h-[650px]"
                    />
                </div>

                {/* 2. BACKUP FORM: Prominent Button Toggle */}
                <div className="p-2 max-w-3xl flex flex-col items-center transition-all duration-500">
                    
                    {!showBackup ? (
                        <div className="text-center flex flex-col items-center">
							<p className="text-taupe mb-6 text-base font-medium">
								Having trouble submitting the above form? <span className="text-clay font-bold text-lg" onClick={() => setShowBackup(true)}>Click Here</span>
							</p>
                        </div>
                    ) : (
                        <div className="w-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <NativeLeadForm source="OWNERS" />
                            <button
                                onClick={() => setShowBackup(false)}
                                className="mt-6 text-taupe text-xs font-bold uppercase tracking-wider hover:text-espresso w-full text-center transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}


// "use client";

// import Script from "next/script";

// export default function ApplyBusinessOwners() {
// 	return (
// 		// className="w-full transition-colors duration-300">
			
// 		<div >{/* Changed pt-0 pb-8 to py-16 sm:py-24 to give the form vertical breathing room */}
// 			<div className="w-full flex justify-center py-4 px-4 sm:px-10 sm:py-14">
				
// 				{/* Aura's official resizing script loaded the correct Next.js way */}
// 				{/* <Script src="https://app.aura-app.ai/aura-embed.js" strategy="lazyOnload" /> */}

// 				<iframe
// 					data-aura-embed
// 					src="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form-copy-2/embed?theme_preset=light"
// 					title="Test_Form The Ascend Path - Booking"
// 					loading="lazy"
// 					className="w-full max-w-7xl min-h-[650px]"
// 				/>
// 			</div>
// 		</div>
// 	);
// }