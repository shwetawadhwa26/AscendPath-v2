"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";

// Define the global fbq function for TypeScript
declare global {
    interface Window {
        fbq: (...args: unknown[]) => void;
        _fbq: unknown;
    }
}

function PixelEvents({ pixelId }: { pixelId: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== "undefined" && window.fbq) {
            // 1. Capture the ref from the URL if it exists
            const urlRef = searchParams.get("ref");
            if (urlRef) {
                sessionStorage.setItem("ref", urlRef);
            }

            // 2. Retrieve the active ref (either from current URL or previous storage)
            const activeRef = urlRef || sessionStorage.getItem("ref");

            // 3. Fire the PageView event and attach the ref parameter if it exists
            window.fbq("track", "PageView", activeRef ? { ref_user: activeRef } : {});
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
                        
                        // Disable Meta's automatic SPA routing so it doesn't strip our custom parameters
                        fbq('set', 'autoConfig', false, '${pixelId}');
                        fbq('init', '${pixelId}');
                    `,
                }}
            />
            <Suspense fallback={null}>
                <PixelEvents pixelId={pixelId} />
            </Suspense>
        </>
    );
}