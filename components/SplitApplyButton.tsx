"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePostHog } from "posthog-js/react";

// 1. Add `children?: React.ReactNode` to your props interface
interface SplitButtonProps {
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode; 
  inFooter?: boolean; // Optional prop to indicate if the button is in the footer
}

export default function SplitApplyButton({ size = "sm", children, inFooter }: SplitButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const posthog = usePostHog();

  // Safety feature: Close the dropdown if the user clicks anywhere outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }

    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleOptionClick = (userType: string) => {
    posthog.capture("homepage_split_clicked", { user_type: userType });
    setIsOpen(false);
  };

  // Dynamically adjust padding and text size based on the prop!
  const isSmall = size === "sm";

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      
      {/* 1. The Main CTA Button (Now Resizes dynamically!) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-clay text-bone rounded-xl font-bold transition-all flex items-center shadow-md hover:opacity-90 ${
          isSmall ? "px-4 py-2 text-sm gap-2" : "px-8 py-4 text-lg gap-3"
        }`}
      >
        <span>
            {/* 2. Fallback to "Apply Now" if no children are passed, otherwise show what you typed! */}
            {children || "Apply Now"} 
        </span>
        <svg
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""} ${isSmall ? "w-4 h-4" : "w-5 h-5"}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* 2. The Pop-out Menu (Also scales down slightly for the navbar) */}
      {isOpen && (
        <div className={`absolute flex text-sm gap-3 text-center top-full mt-2 bg-white/50 rounded-2xl shadow-2xl ring-1 ring-taupe/20 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 ${
          isSmall ? "right-0 w-80" : "left-1/2 -translate-x-1/2 w-64"
        }`}>
          
          <Link
            href="/sales-reps"
            onClick={() => handleOptionClick("Sales Rep")}
            className={`block w-full bg-clay hover:bg-clay/90 rounded-xl transition-colors group ${isSmall ? "px-3 py-2" : "px-4 py-3"}`}
          >
            <div className="font-bold text-bone group-hover:text-bone transition-colors">
              Sales Reps?
            </div>
            {/* {!isSmall && (
              <div className="text-xs text-taupe mt-0.5">Looking to join the network</div>
            )} */}
          </Link>
          
          {/* <div className="h-px w-full bg-taupe/10 my-1"></div> */}

          <Link
            href="/business-owners"
            onClick={() => handleOptionClick("Business Owner")}
            className={`block w-full bg-espresso hover:bg-espresso/90 rounded-xl transition-colors group ${isSmall ? "px-3 py-2" : "px-4 py-3"}`}
          >
            <div className="font-bold text-bone group-hover:text-bone transition-colors">
              Business Owner?
            </div>
            {/* {!isSmall && (
               <div className="text-xs text-taupe mt-0.5">Looking to hire top talent</div>
            )} */}
          </Link>

        </div>
      )}
    </div>
  );
}