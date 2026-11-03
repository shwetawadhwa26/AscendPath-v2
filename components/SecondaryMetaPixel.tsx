"use client";

import { useEffect } from "react";

export default function SecondaryMetaPixel({ pixelId }: { pixelId: string }) {
    useEffect(() => {
        // Wait briefly to ensure the global Pixel in layout.tsx has finished loading
        const timer = setTimeout(() => {
            if (typeof window !== "undefined" && window.fbq) {
                // Initialize the specific Business Owners pixel
                window.fbq('init', pixelId);
                // Fire the PageView specifically for this new pixel
                window.fbq('track', 'PageView');
                console.log(`✅ Secondary Pixel Fired: ${pixelId}`);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [pixelId]);

    return null;
}