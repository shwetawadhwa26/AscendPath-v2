"use client";

import { useEffect, useRef } from "react";

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
    const target = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!target.current) return;

        const script = document.createElement("script");
        script.src = "https://app.aura-app.ai/embed/aura.js";
        script.async = true;

        script.onload = () => {
            window.AuraScheduler?.init({
                id: "aura-scheduler-owners",
                url: "https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form-copy",
                element: target.current!,
                mode: "inline",
                load: "lazy"
            });
        };

        document.head.appendChild(script);

        return () => {
            window.AuraScheduler?.destroy("aura-scheduler-owners");
            if (document.head.contains(script)) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="w-full flex justify-center">
            {/* 
                max-w-2xl keeps the invisible iframe edges tight to fix the scroll bug.
                Reduced padding ensures it doesn't look overly spacious.
            */}
            <div
                ref={target}
                className="w-full max-w-2xl min-h-[650px]"
            />
        </div>
    );
}








