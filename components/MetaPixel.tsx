"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

// Define the global fbq function for TypeScript securely
declare global {
    interface Window {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        fbq: any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _fbq: any;
    }
}

function PixelEvents() {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== "undefined") {
            // 1. Capture the ref from the URL if it exists
            const urlRef = searchParams.get("ref");
            if (urlRef) {
                sessionStorage.setItem("ref", urlRef);
            }

            // 2. Retrieve the active ref from storage
            const activeRef = sessionStorage.getItem("ref");

            // 3. Fire the events safely
            if (window.fbq) {
                // Adding a tiny delay to allow Next.js routing to settle
                setTimeout(() => {
                    // Fire standard PageView for Meta's baseline tracking (required by client)
                    window.fbq("track", "PageView");

                    // Fire a Custom Event strictly for the ref tracking to bypass the Pixel Helper SPA bug
                    if (activeRef) {
                        window.fbq("trackCustom", "Affiliate_Page_View", { ref_user: activeRef });
                        console.log("✅ Affiliate Event Fired:", pathname, { ref_user: activeRef });
                    }
                }, 150);
            }
        }
    }, [pathname, searchParams]);

    return null;
}

export default function MetaPixel({ pixelId }: { pixelId: string }) {
    return (
        <>
            <Script
                id="meta-pixel"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        
                        // Disable Meta's automatic SPA routing so it doesn't strip custom parameters
                        fbq('set', 'autoConfig', false, '${pixelId}');
                        fbq('init', '${pixelId}');
                    `,
                }}
            />
            <Suspense fallback={null}>
                <PixelEvents />
            </Suspense>
        </>
    );
}