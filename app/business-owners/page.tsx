export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import ApplyBusinessOwners from "@/components/ApplyForms/ApplyBusinessOwners";
import TestimonialsMarquee from "@/components/Testimonials/TestimonialsMarquee";
import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
import prisma from "@/lib/prisma";
import { Testimonial } from "@prisma/client";
import { VSLProvider } from "@/contexts/VSLContext";
import Link from "next/link";
import BusinessOwnersFAQs from "@/components/FAQs/BusinessOwnersFAQs";

export default async function BusinessOwners() {
	// Fetch all testimonials for the Business Owners page
	const allTestimonials = await prisma.testimonial.findMany({
		where: { category: "OWNERS" },
		orderBy: { createdAt: "desc" },
	});

	const textReviews = allTestimonials.filter((t: Testimonial) => t.type === "TEXT");
	const videoReviews = allTestimonials.filter((t: Testimonial) => t.type === "VIDEO");

	return (
		<div className="bg-bone min-h-screen font-sans relative pb-20 sm:pb-0 selection:bg-clay selection:text-bone">
			<Navbar />

			<main className="pt-32 pb-0 sm:pt-40">
				
				{/* 1. HERO SECTION (business-owners_01.png) */}
				<section className="mx-auto max-w-6xl px-6 lg:px-8 text-center relative z-10">
					<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
						FOR BUSINESS OWNERS
					</p>
					<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-espresso leading-tight text-balance">
						Stop interviewing 40 people <br className="hidden sm:block" />
						<span className="text-clay">to find one real rep.</span>
					</h1>
					<p className="mt-8 text-lg sm:text-xl font-medium text-taupe max-w-4xl mx-auto text-pretty leading-relaxed">
						Tell me the role, the offer, and the OTE, and I'll send you reps I trained myself. They're in your business within <span className="text-espresso font-bold">7 to 14 days</span>, and if one doesn't perform, <span className="text-espresso font-bold">I replace them free</span>.
					</p>
					
					
				</section>

				{/* 2. VSL & MATCHMAKING QUOTE (business-owners_02.png) */}
				<section className="mt-16 sm:mt-24 mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
					<div className="rounded-2xl bg-espresso/5 p-2 ring-1 ring-espresso/10 lg:p-4 shadow-2xl shadow-black/10">
						<VSLProvider>                   
							<VSLPlayer videoType="OWNERS" videoId="394919176400fe5402e5da7b2a278037" />
						</VSLProvider>
					</div>
					<div className="mt-10 text-center max-w-4xl mx-auto">
						<p className="text-lg sm:text-xl font-medium text-espresso/80 text-pretty leading-relaxed">
							This is matchmaking, not recruiting. Every recruitment shop sends you resumes and makes YOU do the matching. That's why your last hires flamed out. I do the opposite.
						</p>
					</div>

					<div className="mt-16 flex flex-col items-center justify-center">
						<a 
							href="#audit"
							className="bg-clay text-bone px-10 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
						>
							Send me Reps
						</a>
						<p className="mt-5 text-sm font-bold text-taupe max-w mx-auto text-balance">
							Starts with a free 30-minute Offer Audit. I shortlist from 600+ placed reps and the ones I'm training now.
						</p>
					</div>
				</section>

				{/* 3. THE MATCH METHOD (business-owners_03.png & business-owners_04.png) */}
				<section className="mt-24 sm:mt-24 bg-espresso text-bone py-24 sm:py-32">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						
						{/* Intro Header */}
						<div className="max-w-3xl mb-16 sm:mb-24">
							<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
								THE MATCH METHOD
							</p>
							<h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-8">
								Hiring isn't a sourcing problem. <br className="hidden sm:block" />
								<span className="text-clay italic">It's a matching problem.</span>
							</h2>
							<p className="text-bone/70 text-lg leading-relaxed text-pretty max-w-2xl">
								A killer closer starves on a setter offer. A great DM setter bombs on agency discovery calls. Every rep you've lost was almost certainly a match problem dressed up as a talent problem. So the matching is the part I never outsource to you. Three steps.
							</p>
						</div>

						{/* 3-Column Steps Grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
							{/* Step 1 */}
							<div className="bg-bone/5 border border-bone/10 p-8 rounded-3xl hover:border-clay/50 transition-colors">
								<span className="inline-block text-clay text-sm font-bold uppercase tracking-widest mb-4">
									STEP 1 OFFER AUDIT
								</span>
								<h3 className="font-serif text-2xl font-bold text-bone mb-4">
									I learn your business
								</h3>
								<p className="text-bone/70 text-base leading-relaxed">
									30 minutes inside your offer, your buyer, your sales cycle, your numbers. If the spec is wrong, every rep is wrong. This is the step recruiters skip, and it's why their placements die.
								</p>
							</div>

							{/* Step 2 */}
							<div className="bg-bone/5 border border-bone/10 p-8 rounded-3xl hover:border-clay/50 transition-colors">
								<span className="inline-block text-clay text-sm font-bold uppercase tracking-widest mb-4">
									STEP 2 MATCH FROM THE POOL
								</span>
								<h3 className="font-serif text-2xl font-bold text-bone mb-4">
									I shortlist, you pick
								</h3>
								<p className="text-bone/70 text-base leading-relaxed">
									I don't post job ads. I match from a pool of reps I already know, with numbers I've already seen. That's why this takes 7 to 14 days instead of a hiring quarter.
								</p>
							</div>

							{/* Step 3 */}
							<div className="bg-bone/5 border border-bone/10 p-8 rounded-3xl hover:border-clay/50 transition-colors">
								<span className="inline-block text-clay text-sm font-bold uppercase tracking-widest mb-4">
									STEP 3 RAMP & REPLACE
								</span>
								<h3 className="font-serif text-2xl font-bold text-bone mb-4">
									I stay in the loop
								</h3>
								<p className="text-bone/70 text-base leading-relaxed">
									I track ramp with you for the first 30 days. Not producing by day 60? I replace them free. No interview rounds, no autopsy. Just the next match.
								</p>
							</div>
						</div>

					</div>
				</section>

{/* 4. THE CERTAINTY STACK (business-owners_05.png) */}
				<section className="bg-espresso text-bone pb-24 sm:pb-32 px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						
						{/* Gold Box with Pure Espresso Background & Left Alignment */}
						<div className="ring-1 ring-[#B98A2F]/50 bg-espresso rounded-3xl p-8 sm:p-12 lg:p-10">
							
							{/* Left Aligned Headers */}
							<div className="text-left mb-16">
								<p className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-4">
									WHY OWNERS COME BACK
								</p>
								<h3 className="font-serif text-4xl sm:text-5xl font-bold text-bone">
									The certainty stack.
								</h3>
							</div>

							{/* Single Column Vertical Stack (NOT a 2-col Grid) */}
							<div className="flex flex-col space-y-12">
								
								{/* Item 1 */}
								<div className="flex text-left w-full gap-6">
									<span className="block text-[#B98A2F] font-serif text-3xl sm:text-4xl font-bold mb-3">1.</span>
									
									<div>
										<strong className="block text-bone text-xl sm:text-2xl mb-2 tracking-wide">7 to 14 days. Max.</strong>
										<p className="text-bone/70 text-lg leading-relaxed max-w-2xl">Not a hiring quarter. You tell me the role, I send the shortlist.</p>
									</div>
								</div>

								{/* Item 2 */}
								<div className="flex text-left w-full gap-6">
									<span className="block text-[#B98A2F] font-serif text-3xl sm:text-4xl font-bold mb-3">2.</span>
									
									<div>
										<strong className="block text-bone text-xl sm:text-2xl mb-2 tracking-wide">I know these reps.</strong>
										<p className="text-bone/70 text-lg leading-relaxed max-w-2xl">I trained them. I've seen their calls, not just their resume.</p>
									</div>
								</div>

								{/* Item 3 */}
								<div className="flex text-left w-full gap-6">
									<span className="block text-[#B98A2F] font-serif text-3xl sm:text-4xl font-bold mb-3">3.</span>
																		<div>

									<strong className="block text-bone text-xl sm:text-2xl mb-2 tracking-wide">Free replacement.</strong>
									<p className="text-bone/70 text-lg leading-relaxed max-w-2xl">Not producing by day 60, I send you the next match. No invoice.</p>
								</div>
								</div>

								{/* Item 4 */}
								<div className="flex text-left w-full gap-6">
									
									<span className="block text-[#B98A2F] font-serif text-3xl sm:text-4xl font-bold mb-3">4.</span>
									<div>
									<strong className="block text-bone text-xl sm:text-2xl mb-2 tracking-wide">I only win when they perform.</strong>
									<p className="text-bone/70 text-lg leading-relaxed max-w-2xl">My pay is tied to their results. Same side of the table as you.</p>
																</div>

								</div>

							</div>
						</div>

						{/* Proof Line */}
						<div className="mt-24 sm:mt-32 text-center max-w-4xl mx-auto">
							<h4 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-clay leading-tight mb-8">
								"Do you know anyone good?"
							</h4>
							<p className="text-xl font-medium text-bone/80 text-balance leading-relaxed">
								I get that text every week. This network exists because owners are done sorting through 40 applicants for one real rep.
							</p>
						</div>
					</div>
				</section>

		<section>
				<div className="max-w-7xl pt-24 mx-auto px-6 lg:px-8">
									{/* FAQ SECTION */}
								<BusinessOwnersFAQs />
</div>
								</section>

				{/* 5. FORM & APPLICATION (business-owners_06.png) */}
				<section id="audit" className="py-16 sm:py-16 bg-bone">
					<div className="text-center max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid lg:grid-cols-1 gap-16">
							
							{/* Left Column: Form Intro & DQ Note */}
							<div>
								<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
									BOOK YOUR OFFER AUDIT
								</p>
								<h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight mb-8">
									Tell me what you need.
								</h2>
								<p className="text-lg text-taupe font-medium leading-relaxed mb-12 text-pretty">
									30 minutes. We look at your offer, your funnel, your numbers, and I tell you exactly what kind of rep moves the needle. Nothing to buy on the call. You only commit after you've met your matched rep.
								</p>

								{/* DQ Note Box */}
								<div className="bg-espresso/5 border border-espresso/10 p-6 rounded-2xl">
									<strong className="block text-clay text-sm uppercase tracking-widest mb-3">Honest note:</strong>
									<p className="text-espresso/80 text-sm font-medium leading-relaxed">
										If you're under $20K a month or the offer isn't dialed in yet, a rep won't fix it, they'll accelerate the mess. Fix the foundation first and come back. I mean that.
									</p>
								</div>
							</div>

							{/* Right Column: Aura Form Component */}
							<div className="w-full bg-white rounded-2xl shadow-xl ring-1 ring-taupe/10">
								<ApplyBusinessOwners />
							</div>

						</div>
					</div>
				</section>

				{/* 6. WALL OF RECEIPTS (Results) */}
				<section className="py-24 bg-bone overflow-hidden border-t border-taupe/10">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
						<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
							OWNERS I WORK WITH
						</p>
						<h2 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
							They stopped posting job ads.
						</h2>
					</div>

					{/* FIRST: THE MOVING TEXT MARQUEE */}
					{textReviews.length > 0 && (
						<div className="mb-16">
							<TestimonialsMarquee testimonials={textReviews} />
						</div>
					)}

					{/* SECOND: THE SCROLLING VIDEO CAROUSEL */}
					{videoReviews.length > 0 && (
						<div className="max-w-7xl mx-auto px-6 lg:px-8">
							<TestimonialsV3 testimonials={videoReviews} />
						</div>
					)}

					{/* EMPTY STATE FALLBACK */}
					{allTestimonials.length === 0 && (
						<p className="text-center text-taupe py-10">
							No recent results uploaded yet. Add them in the Admin dashboard!
						</p>
					)}
				</section>

			</main>

			<Footer />

			{/* GLOBAL STICKY MOBILE BAR (G-06) */}
			<div className="sm:hidden fixed bottom-0 left-0 w-full bg-bone/95 backdrop-blur-md border-t border-taupe/20 p-3 z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(43,29,20,0.1)]">
				<span className="text-sm font-bold text-espresso">A vetted rep in 7-14 days.</span>
				<a href="#audit" className="bg-clay text-bone px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide">
					Send me Reps
				</a>
			</div>
		</div>
	);
}








// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import VSLPlayer from "@/components/VSLs/VSLPlayer";
// import ApplyBusinessOwners from "@/components/ApplyForms/ApplyBusinessOwners";
// import TestimonialsMarquee from "@/components/Testimonials/TestimonialsMarquee";
// import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
// import prisma from "@/lib/prisma";
// import { VSLProvider } from "@/contexts/VSLContext";

// export default async function BusinessOwners() {
// 	const allTestimonials = await prisma.testimonial.findMany({
// 		where: { category: "OWNERS" },
// 		orderBy: { createdAt: "desc" },
// 	});

// 	const textReviews = allTestimonials.filter(t => t.type === "TEXT");
// 	const videoReviews = allTestimonials.filter(t => t.type === "VIDEO");

// 	return (
// 		<div className="transition-colors duration-300">
// 			<Navbar />
			
// 			<main className="pt-32 pb-16 sm:pt-40">
// 				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
// 					<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
// 						For Business <span className="text-clay">Owners</span>
// 					</h1>
// 					<p className="mt-8 text-lg font-medium text-taupe max-w-2xl mx-auto">
// 						Stop wasting time on unqualified reps. Watch the video below to see how we place proven, battle-tested closers directly into your business.
// 					</p>
					
// 					<VSLProvider>					
// 						<VSLPlayer videoType="OWNERS" videoId="18ef8b4452a0efe4ba019aa02a355d6b" />
// 					</VSLProvider>
// 				</div>
				
// 				<div className="mt-20">
// 					<ApplyBusinessOwners />

// 					{/* FIRST: THE MOVING TEXT MARQUEE */}
// 					{textReviews.length > 0 && (
// 						<section className="py-12 overflow-hidden">
// 							<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
// 								<h2 className="text-4xl font-bold text-espresso text-center">
// 									Recent Placements & Results
// 								</h2>
// 							</div>
// 							<TestimonialsMarquee testimonials={textReviews} />
// 						</section>
// 					)}

// 					{/* SECOND: THE SCROLLING VIDEO CAROUSEL */}
// 					{videoReviews.length > 0 && (
// 						<TestimonialsV3 testimonials={videoReviews} />
// 					)}

// 					{/* EMPTY STATE FALLBACK */}
// 					{allTestimonials.length === 0 && (
// 						<p className="text-center text-taupe py-10">
// 							No recent results uploaded yet. Add them in the Admin dashboard!
// 						</p>
// 					)}
// 				</div>
// 			</main>
 
// 			<Footer />
// 		</div>
// 	);
// }






// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
// import VSLPlayer from "@/components/VSLs/VSLPlayer";
// import ApplyBusinessOwners from "@/components/ApplyForms/ApplyBusinessOwners";
// import TestimonialsMarquee from "@/components/Testimonials/TestimonialsMarquee";
// import TestimonialVideoCard from "@/components/Testimonials/TestimonialVideoCard";
// import prisma from "@/lib/prisma";

// export default async function BusinessOwners() {
// 	// 1. Fetch real-time testimonials directly from AWS PostgreSQL!
// 	const allTestimonials = await prisma.testimonial.findMany({
// 		where: { category: "OWNERS" },
// 		orderBy: { createdAt: "desc" },
// 	});

// 	// Separate them into two arrays instantly on the server
// 	const textReviews = allTestimonials.filter(t => t.type === "TEXT");
// 	const videoReviews = allTestimonials.filter(t => t.type === "VIDEO");

// 	return (
// 		<div className="transition-colors duration-300">
// 			<Navbar />
			
// 			<main className="pt-32 pb-16 sm:pt-40">
// 				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
// 					<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
// 						For Business <span className="text-clay">Owners</span>
// 					</h1>
// 					<p className="mt-8 text-lg font-medium text-taupe max-w-2xl mx-auto">
// 						Stop wasting time on unqualified reps. Watch the video below to see how we place proven, battle-tested closers directly into your business.
// 					</p>
					
// 					{/* Clean, Inline Video Player */}
// 					<div className="mt-16 mx-auto max-w-4xl">
// 						<VSLPlayer />
// 					</div>
// 				</div>
// 				<div className="mt-20">
// 					{/* The Aura Application Form */}
// 					<ApplyBusinessOwners />

// 					{/* 2. The Dynamic AWS Database Testimonials */}
// 					<section className="py-12 overflow-hidden">
						
// 						{/* Main Section Header */}
// 						<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
// 							<h2 className="text-4xl font-bold text-espresso text-center">
// 								Recent Placements & Results
// 							</h2>
// 						</div>

// 						{/* FIRST: THE MOVING TEXT MARQUEE */}
// 						{/* It sits outside the max-w container so it can stretch edge-to-edge */}
// 						{textReviews.length > 0 && (
// 							<div className="mb-16">
// 								<TestimonialsMarquee testimonials={textReviews} />
// 							</div>
// 						)}

// 						{/* SECOND: THE VIDEO GRID */}
// 						{/* We re-open the max-w container here so the videos stay centered! */}
// 						{videoReviews.length > 0 && (
// 							<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16">
// 								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// 									{videoReviews.map((v) => (
// 										<TestimonialVideoCard
// 											key={v.id}
// 											name={v.name}
// 											title={v.title}
// 											quote={v.quote}
// 											videoUrl={v.videoUrl!}
// 										/>
// 									))}
// 								</div>
// 							</div>
// 						)}

// 						{/* EMPTY STATE FALLBACK */}
// 						{allTestimonials.length === 0 && (
// 							<p className="text-center text-taupe py-10">
// 								No recent results uploaded yet. Add them in the Admin dashboard!
// 							</p>
// 						)}
// 					</section>

// 					{/* 3. The hardcoded Video Testimonials (Wall of Love) */}
// 					{/* <TestimonialsV3 /> */}
// 				</div>
// 			</main>
 
// 			<Footer />
// 		</div>
// 	);
// }


// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
// import VSLPlayer from "@/components/VSLs/VSLPlayer";
// import ApplyBusinessOwners from "@/components/ApplyForms/ApplyBusinessOwners";

// export default function BusinessOwners() {
// 	return (
// 		<div className="transition-colors duration-300">
// 			<Navbar />
			
// 			<main className="pt-32 pb-16 sm:pt-40">
// 				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
// 					<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
// 						For Business <span className="text-clay">Owners</span>
// 					</h1>
// 					<p className="mt-8 text-lg font-medium text-taupe max-w-2xl mx-auto">
// 						Stop wasting time on unqualified reps. Watch the video below to see how we place proven, battle-tested closers directly into your business.
// 					</p>
					
// 					{/* Clean, Inline Video Player */}
// 					<div className="mt-16 mx-auto max-w-4xl">
// 						{/* <VSLPlayer videoId="YOUR_NEW_REPS_VIDEO_ID" /> */}
// 						<VSLPlayer/>
// 					</div>
// 				</div>
// 			<ApplyBusinessOwners/>

// 				<div className="mt-20">
// 					<TestimonialsV3 />
// 				</div>
// 			</main>
 
// 			<Footer />
// 		</div>
// 	);
// }