"use client";

import { useState, useEffect, useRef } from "react";
import NativeLeadForm from "./NativeLeadForm";

// Tell TypeScript about the global Aura object so it doesn't throw errors
declare global {
    interface Window {
        AuraScheduler?: {
            init: (config: Record<string, unknown>) => void;
            destroy: (id: string) => void;
        };
    }
}

export default function ApplyBusinessOwners() {
    // React state to control the visibility of the backup form
    const [showBackup, setShowBackup] = useState(false);
    
    // Reference for the Aura JS inject
    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // If the backup form is showing, don't mount Aura
        if (showBackup || !target.current) return;

        const script = document.createElement("script");
        script.src = "https://app.aura-app.ai/embed/aura.js";
        script.async = true;
        
        script.onload = () => {
            window.AuraScheduler?.init({
                id: "aura-scheduler-owners", // Unique ID for Business Owners instance
                url: "https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form-copy", // Updated URL for Owners
                element: target.current!,
                mode: "inline",
                load: "lazy"
            });
        };
        
        document.head.appendChild(script);

        // Cleanup function to destroy the widget if the component unmounts
        return () => {
            window.AuraScheduler?.destroy("aura-scheduler-owners");
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, [showBackup]); // Re-run this effect if the backup toggle changes

    return (
        <div>
            <div className="w-full flex flex-col items-center justify-center gap-6">
                
                {/* 1. PRIMARY FORM: Aura Official JS Embed */}
                {!showBackup && (
                    <div className="w-full flex justify-center">
                        {/* The exact dimensions applied for the iframe previously */}
                        <div 
                            ref={target} 
                            className="w-full max-w-7xl min-h-[650px]"
                        />
                    </div>
                )}

                {/* 2. BACKUP FORM: Prominent Button Toggle */}
                <div className="p-2 flex flex-col items-center transition-all duration-500">
                    
                    {!showBackup ? (
                        <div className="text-center flex flex-col items-center">
                            <p className="text-espresso mb-6 text-base font-medium">
                                Having trouble submitting the above form?{" "}
                                <button 
                                    onClick={() => setShowBackup(true)}
                                    className="text-clay font-bold text-lg hover:underline transition-all"
                                >
                                    Click Here
                                </button>
                            </p>
                        </div>
                    ) : (
                        <div className="w-7xl mt-6 mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            {/* Corrected source to OWNERS */}
                            <NativeLeadForm source="OWNERS" />
                            <button
                                onClick={() => setShowBackup(false)}
                                className="mt-6 text-clay text-xs font-bold uppercase tracking-wider hover:text-espresso w-full text-center transition-colors"
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





