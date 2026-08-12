"use client";

import { clsx } from "clsx";

// 1. Tell TypeScript exactly what our AWS database data looks like
export interface Testimonial {
    id?: string;
    quote: string;
    tier?: string | null;
    name: string;
    title: string;
}

// --- REUSABLE ROW COMPONENT ---
function MarqueeRow({ items, reverse = false, duration = "40s" }: { items: Testimonial[], reverse?: boolean, duration?: string }) {
    // Duplicates items if there are too few, keeping the infinite loop seamless
    const baseItems = items.length < 4 ? [...items, ...items, ...items] : items;

    return (
        <div className="flex w-full py-4">
            <div 
                className={clsx(
                    "flex w-max gap-6 sm:gap-8 pr-6 sm:pr-8 marquee-track", 
                    reverse ? "animate-marquee-reverse" : "animate-marquee"
                )}
                style={{ animationDuration: duration }}
            >
                {/* Double render trick for the infinite seamless loop */}
                {[...baseItems, ...baseItems].map((testimonial, index) => (
                    <div
                        key={index}
                        className="group relative flex w-[300px] sm:w-[420px] shrink-0 flex-col justify-between rounded-3xl bg-white/60 p-8 shadow-xl shadow-black/5 ring-1 ring-taupe/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                    >
                        {/* Premium Decorative Quote Icon */}
                        <svg className="mb-6 h-8 w-8 text-clay" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>

                        <div>
                            <p className="mb-8 text-lg font-medium text-espresso leading-relaxed text-pretty">
                                "{testimonial.quote}"
                            </p>
                        </div>
                        
                        {/* Footer snaps to the bottom */}
                        <div className="mt-auto flex items-center justify-between gap-4 w-full pt-6 border-t border-taupe/10">
                            
                            <div className="flex flex-col">
                                <h4 className="font-bold text-espresso tracking-wide">
                                    {testimonial.name} 
                                </h4>
                                <span className="text-sm font-medium text-taupe mt-0.5">
                                    {testimonial.title}
                                </span>
                            </div>
                            
                            {/* Highlight Tag */}
                            {testimonial.tier && (
                                <div className="shrink-0 rounded-full bg-clay/10 px-3 py-1.5 text-xs font-bold tracking-widest text-clay uppercase ring-1 ring-[#B98A2F]/20">
                                    {testimonial.tier}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// --- MAIN WRAPPER COMPONENT ---
export default function TestimonialsMarquee({ testimonials = [] }: { testimonials?: Testimonial[] }) {
    if (!testimonials || testimonials.length === 0) return null;

    // Automatically split the database data into two distinct rows
    const half = Math.ceil(testimonials.length / 2);
    const row1 = testimonials.slice(0, half);
    const row2 = testimonials.slice(half);

    return (
        <div className="w-full py-4 transition-colors duration-300">
            {/* INLINE STYLES: Flawless CSS loop & hover logic */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 12px)); }
                }
                @keyframes marquee-reverse {
                    0% { transform: translateX(calc(-50% - 12px)); }
                    100% { transform: translateX(0); }
                }
                .animate-marquee {
                    animation: marquee linear infinite;
                }
                .animate-marquee-reverse {
                    animation: marquee-reverse linear infinite;
                }
                
                /* This is the magic bullet that forces the pause on hover */
                .marquee-track:hover {
                    animation-play-state: paused !important;
                }
            `}</style>

            <div className="flex flex-col gap-4 sm:gap-6 relative overflow-hidden px-4">
                {row1.length > 0 && <MarqueeRow items={row1} duration="55s" />}
                {row2.length > 0 && <MarqueeRow items={row2} duration="45s" reverse />}
            </div>
        </div>
    );
}















// "use client";

// import { clsx } from "clsx";

// // 1. Tell TypeScript exactly what our AWS database data looks like
// export interface Testimonial {
//     id?: string;
//     quote: string;
//     tier?: string | null; // This maps directly to your database schema!
//     name: string;
//     title: string;
// }

// // --- REUSABLE ROW COMPONENT ---
// function MarqueeRow({ items, reverse = false, duration = "40s" }: { items: Testimonial[], reverse?: boolean, duration?: string }) {
//     // Senior Tip: If you only have 2 or 3 testimonials in the database so far, 
//     // this duplicates them so the screen is always full and the CSS math doesn't break!
//     const baseItems = items.length < 4 ? [...items, ...items, ...items] : items;

//     return (
//         // FIX 1: Removed `overflow-hidden` here so it stops chopping off the top/bottom ring!
//         <div className="flex w-full py-1">
//             <div 
//                 className={clsx(
//                     "flex w-max gap-6 pr-6 marquee-track", 
//                     reverse ? "animate-marquee-reverse" : "animate-marquee"
//                 )}
//                 style={{ animationDuration: duration }}
//             >
//                 {/* Double render trick for the infinite seamless loop */}
//                 {[...baseItems, ...baseItems].map((testimonial, index) => (
//                     <div
//                         key={index}
//                         className="flex w-[350px] shrink-0 flex-col justify-between rounded-3xl bg-white/40 p-6 shadow-sm ring-1 ring-taupe/80 sm:w-[350px] min-h-[350px]"
//                     >
//                         <div>
//                             <p className="mb-4 text-lg font-medium text-espresso leading-snug text-pretty">
//                                 "{testimonial.quote}"
//                             </p>
//                         </div>
                        
//                         {/* FIX 2: Added Flexbox (justify-between) to snap the tag to the right */}
//                         <div className="mt-auto flex items-center justify-between gap-4 w-full pt-4 border-t border-taupe/10">
                            
//                             <h4 className="font-bold text-espresso truncate">
//                                 {testimonial.name} 
//                                 <span className="text-sm font-medium text-taupe ml-1">
//                                     ({testimonial.title})
//                                 </span>
//                             </h4>
                            
//                             {/* Only renders the pill if the client typed a Highlight Tag into the Admin dashboard */}
//                             {testimonial.tier && (
//                                 <div className="shrink-0 rounded-full bg-clay/10 px-3 py-1 text-xs font-bold tracking-wider text-clay uppercase">
//                                     {testimonial.tier}
//                                 </div>
//                             )}

//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// // --- MAIN WRAPPER COMPONENT ---
// export default function TestimonialsMarquee({ testimonials = [] }: { testimonials?: Testimonial[] }) {
//     if (!testimonials || testimonials.length === 0) return null;

//     // 2. Automatically split the database data into two distinct rows
//     const half = Math.ceil(testimonials.length / 2);
//     const row1 = testimonials.slice(0, half);
//     const row2 = testimonials.slice(half);

//     return (
//         <div className="w-full overflow-hidden py-4 transition-colors duration-300">
//             {/* INLINE STYLES: Your flawless CSS loop and hover logic! */}
//             <style>{`
//                 @keyframes marquee {
//                     0% { transform: translateX(0); }
//                     100% { transform: translateX(calc(-50% - 12px)); }
//                 }
//                 @keyframes marquee-reverse {
//                     0% { transform: translateX(calc(-50% - 12px)); }
//                     100% { transform: translateX(0); }
//                 }
//                 .animate-marquee {
//                     animation: marquee linear infinite;
//                 }
//                 .animate-marquee-reverse {
//                     animation: marquee-reverse linear infinite;
//                 }
//                 .marquee-track:hover {
//                     animation-play-state: paused !important;
//                 }
//             `}</style>

//             <div className="flex flex-col gap-6">
//                 {/* Top row scrolls left, bottom row scrolls right */}
//                 {row1.length > 0 && <MarqueeRow items={row1} duration="55s" />}
//                 {row2.length > 0 && <MarqueeRow items={row2} duration="45s" reverse />}
//             </div>
//         </div>
//     );
// }