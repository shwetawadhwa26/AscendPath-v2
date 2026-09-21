"use client";

export default function ApplySalesReps() {
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
                    src="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form/embed"
                    title="The Ascend Path - Application"
                    loading="lazy"
                    className="w-full h-[700px] border-none outline-none"
                />
                
            </div>
        </div>
    );
}









// "use client";

// import { useEffect, useRef } from "react";

// // Tell TypeScript about the global Aura object so it doesn't throw errors
// declare global {
//     interface Window {
//         AuraScheduler?: {
//             init: (config: Record<string, unknown>) => void;
//             destroy: (id: string) => void;
//         };
//     }
// }

// export default function ApplySalesReps() {
//     const target = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         if (!target.current) return;

//         const script = document.createElement("script");
//         script.src = "https://app.aura-app.ai/embed/aura.js";
//         script.async = true;

//         script.onload = () => {
//             window.AuraScheduler?.init({
//                 id: "aura-scheduler-reps",
//                 url: "https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form",
//                 element: target.current!,
//                 mode: "inline",
//                 load: "lazy"
//             });
//         };

//         document.head.appendChild(script);

//         return () => {
//             window.AuraScheduler?.destroy("aura-scheduler-reps");
//             if (document.head.contains(script)) {
//                 document.head.removeChild(script);
//             }
//         };
//     }, []);

//     return (
//         <div className="w-full flex justify-center py-4">
//             {/* 
//                 THE FIX: I completely deleted the 'min-h-[650px]' class. 
//                 By using 'h-auto', the container will shrink-wrap exactly to the form's true height. 
//                 No more invisible dead-zones underneath eating your mouse scrolls!
//             */}
//             <div
//                 ref={target}
//                 className="w-full max-w-2xl h-auto"
//             />
//         </div>
//     );
// }






// "use client";

// import { useState, useEffect, useRef } from "react";
// import NativeLeadForm from "./NativeLeadForm";

// // Tell TypeScript about the global Aura object so it doesn't throw errors
// declare global {
//     interface Window {
//         AuraScheduler?: {
//             init: (config: Record<string, unknown>) => void;
//             destroy: (id: string) => void;
//         };
//     }
// }

// export default function ApplySalesReps() {
//     // React state to control the visibility of the backup form
//     const [showBackup, setShowBackup] = useState(false);
    
//     // Reference for the Aura JS inject
//     const target = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         // If the backup form is showing, don't mount Aura
//         if (showBackup || !target.current) return;

//         const script = document.createElement("script");
//         script.src = "https://app.aura-app.ai/embed/aura.js";
//         script.async = true;
        
//         script.onload = () => {
//             window.AuraScheduler?.init({
//                 id: "aura-scheduler-reps", // Unique ID for Sales Reps instance
//                 url: "https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form", // Updated URL for Reps
//                 element: target.current!,
//                 mode: "inline",
//                 load: "lazy"
//             });
//         };
        
//         document.head.appendChild(script);

//         // Cleanup function to destroy the widget if the component unmounts
//         return () => {
//             window.AuraScheduler?.destroy("aura-scheduler-reps");
//             if (document.head.contains(script)) {
//                 document.head.removeChild(script);
//             }
//         };
//     }, [showBackup]); // Re-run this effect if the backup toggle changes

//     return (
//         <div>
//             <div className="w-full flex flex-col items-center justify-center">
                
// {/* 2. BACKUP FORM: Prominent Button Toggle */}
//                 <div className="p-2 max-w-7xl flex flex-col items-center transition-all duration-500">
                    
//                     {!showBackup ? (
//                         <div className="text-center flex flex-col items-center">
//                             <p className="text-espresso mb-1 text-base font-medium">
//                                 Having trouble submitting the form?{" "}
//                                 <button 
//                                     onClick={() => setShowBackup(true)}
//                                     className="text-clay font-bold text-lg hover:underline transition-all"
//                                 >
//                                     Click Here
//                                 </button>
//                             </p>
//                         </div>
//                     ) : (
//                         <div className="w-7xl mt-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
//                             {/* Updated source to REPS */}
//                             <NativeLeadForm source="REPS" />
//                             <button
//                                 onClick={() => setShowBackup(false)}
//                                 className="mt-6 text-clay text-xs font-bold uppercase tracking-wider hover:text-espresso w-full text-center transition-colors"
//                             >
//                                 Close
//                             </button>
//                         </div>
//                     )}

//                 </div>
                
//                 {/* 1. PRIMARY FORM: Aura Official JS Embed */}
//                 {!showBackup && (
//                     <div className="w-full flex justify-center">
//                         {/* The exact dimensions applied for the iframe previously */}
//                         <div 
//                             ref={target} 
//                             className="w-full"
//                         />
//                     </div>
//                 )}

                
//             </div>
//         </div>
//     );
// }





