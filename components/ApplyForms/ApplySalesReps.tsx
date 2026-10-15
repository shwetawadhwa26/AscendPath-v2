"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ApplySalesReps() {
 const searchParams = useSearchParams();
    const baseSrc = "https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form/embed";
    
    // Initialize the iframe with the base URL
    const [iframeSrc, setIframeSrc] = useState(baseSrc);

    useEffect(() => {
        const paramsToTrack = [
            "utm_source", "utm_medium", "utm_campaign", 
            "utm_term", "utm_content", "meta_ad_id", "ref"
        ];
        
        // 1. Save params to sessionStorage only if they exist in the current URL
        paramsToTrack.forEach((param) => {
            const value = searchParams.get(param);
            if (value) {
                sessionStorage.setItem(param, value);
            }
        });

        // 2. Retrieve all saved params to build the query string for Aura
        const storedParams = new URLSearchParams();
        paramsToTrack.forEach((param) => {
            const savedValue = sessionStorage.getItem(param);
            if (savedValue) {
                storedParams.set(param, savedValue);
            }
        });

        // 3. Append the tags to the Aura iframe URL
        const queryString = storedParams.toString();
        if (queryString) {
            setIframeSrc(`${baseSrc}?${queryString}`);
        }
    }, [searchParams]);

    return (
        <div className="w-full flex justify-center">
            {/* 
                THE SANDBOX CARD:
                This creates the exact white card from your reference screenshot.
                It visually contains the form and looks incredibly premium.
            */}
            <div className="w-full max-w-1xl overflow-hidden">
                
                {/* 
                    THE IFRAME:
                    By using an iframe instead of the buggy aura.js script, 
                    we physically block Aura from hijacking your website's scroll wheel.
                */}
                <iframe
                    src={iframeSrc}
                    title="The Ascend Path - Application"
                    loading="lazy"
                    className="w-full h-[700px] border-none outline-none"
                />
                
            </div>
        </div>
    );

}


// "use client";

// export default function ApplySalesReps() {
//     return (
//         <div className="w-full flex justify-center">
//             {/* 
//                 THE SANDBOX CARD:
//                 This creates the exact white card from your reference screenshot.
//                 It visually contains the form and looks incredibly premium.
//             */}
//             <div className="w-full max-w-1xl overflow-hidden">
                
//                 {/* 
//                     THE IFRAME:
//                     By using an iframe instead of the buggy aura.js script, 
//                     we physically block Aura from hijacking your website's scroll wheel.
//                 */}
//                 <iframe
//                     src="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form/embed"
//                     title="The Ascend Path - Application"
//                     loading="lazy"
//                     className="w-full h-[700px] border-none outline-none"
//                 />
                
//             </div>
//         </div>
//     );
// }


