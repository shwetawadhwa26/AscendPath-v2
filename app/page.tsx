
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import StorySection from "@/components/StorySection";
import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
import { VSLProvider } from "@/contexts/VSLContext";
import ApplySalesReps from "@/components/ApplyForms/ApplySalesReps";
import TestimonialsMarquee from "@/components/Testimonials/TestimonialsMarquee";
import prisma from "@/lib/prisma";
// import { Testimonial } from "@prisma/client";


export default async function Home() {
	const allTestimonials = await prisma.testimonial.findMany({
			orderBy: { createdAt: "desc" },
		});
	
const textReviews = allTestimonials.filter((t: any) => t.type === "TEXT");
const videoReviews = allTestimonials.filter((t: any) => t.type === "VIDEO");
	return (
		<>
			<VSLProvider>
				<Navbar />
				<Hero />
				{/* <StorySection /> */}
				<div className="mt-20">
									{/* <ApplySalesReps /> */}
									
									{/* FIRST: THE MOVING TEXT MARQUEE */}
									{textReviews.length > 0 && (
										 <section className="py-2 overflow-hidden">
										 	        {/* RECENT PLACEMENTS / RESULTS (H-19) */}
											<div className="bg-bone text-espresso py-24 overflow-hidden rounded-t-[3rem]">
											<div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
												<p className="text-sm font-bold tracking-widest text-clay uppercase mb-4">
												RECENT PLACEMENTS
												</p>
												<h2 className="font-serif text-4xl sm:text-5xl font-bold">
												People I've placed recently, not in 2021.
												</h2>

											</div>

											{/* {testimonials.length > 0 && <TestimonialsMarquee testimonials={testimonials} />} */}
											</div>
											<TestimonialsMarquee testimonials={textReviews} />
										 </section>

									)}
				
									{/* SECOND: THE SCROLLING VIDEO CAROUSEL */}
									{videoReviews.length > 0 && (
										<TestimonialsV3 testimonials={videoReviews} />
									)}
				
									{/* EMPTY STATE FALLBACK */}
									{allTestimonials.length === 0 && (
										<p className="text-center text-taupe py-10">
											No recent results uploaded yet. Add them in the Admin dashboard!
										</p>
									)}
								</div>
				<Footer />
				{/* <VSLPlayerWrapper /> */}
			</VSLProvider>
		</>
	);
}


// "use client";

// import Footer from "@/components/Footer";
// import dynamic from "next/dynamic";
// // const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
// import Hero from "@/components/Hero";
// import HomepageBentoGrid from "@/components/HomepageBentoGrid";
// import Navbar from "@/components/Navbar";
// import StorySection from "@/components/StorySection";
// import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
// import { VSLProvider } from "@/contexts/VSLContext";
// import Register from "./Register/page";
// const VSLPlayerWrapper = dynamic(() => import("@/components/VSLPlayerWrapper"), { ssr: false });

// export default function Home() {
// 	return (
// 		<>
// 			<VSLProvider>
				
// 				<Navbar />
// 				<Hero />
// 				<HomepageBentoGrid />
// 				<StorySection />
// 				<TestimonialsV3 />
// 				<Register />
// 				<Footer />
// 				<VSLPlayerWrapper />
// 			</VSLProvider>
// 		</>
// 	);
// }
