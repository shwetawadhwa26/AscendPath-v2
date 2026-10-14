"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function AuraEmbed({ baseSrc }: { baseSrc: string }) {
    const searchParams = useSearchParams();
    const [iframeSrc, setIframeSrc] = useState(baseSrc);

    useEffect(() => {
        const paramsToTrack = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "ref"];
        
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
            const separator = baseSrc.includes("?") ? "&" : "?";
            setIframeSrc(`${baseSrc}${separator}${queryString}`);
        }
    }, [searchParams, baseSrc]);

    return (
        <iframe
            src={iframeSrc}
            width="100%"
            height="850px" // Adjust height to match your current layout
            frameBorder="0"
            className="w-full rounded-lg"
        />
    );
}