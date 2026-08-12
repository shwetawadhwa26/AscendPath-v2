"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { useEffect } from "react";

export function CSPostHogProvider({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // Initialize PostHog only on the client side
        if (typeof window !== "undefined") {
            posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
                api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
                person_profiles: "identified_only", // Captures anonymous drop-off data
                capture_pageview: true, // Automatically tracks when they switch pages!
            });
        }
    }, []);

    return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}