export const dynamic = "force-dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import ApplySalesReps from "@/components/ApplyForms/ApplySalesReps";
import TestimonialsMarquee from "@/components/Testimonials/TestimonialsMarquee";
import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
import prisma from "@/lib/prisma";
import type { Testimonial } from "@prisma/client";
import { VSLProvider } from "@/contexts/VSLContext";
import SalesFAQ from "@/components/FAQs/SalesRepsFAQs";

export default async function SalesReps() {
	const allTestimonials = await prisma.testimonial.findMany({
		where: { category: "REPS" },
		orderBy: { createdAt: "desc" },
	});

	const textReviews = allTestimonials.filter((t: Testimonial) => t.type === "TEXT");
	const videoReviews = allTestimonials.filter((t: Testimonial) => t.type === "VIDEO");

	return (
		<div className="bg-bone min-h-screen font-sans relative pb-20 sm:pb-0 selection:bg-clay selection:text-bone">
			<Navbar />

			<main className="pt-32 pb-0 sm:pt-40">
				
				{/* 1. HERO SECTION (R-01 / sales-reps_01.png) */}
				<section className="mx-auto max-w-7xl px-6 lg:px-8 text-center item-center relative z-10">
					<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
						FOR SALES REPS
					</p>
					<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-espresso leading-tight text-balance">
						You don't need another course. <br className="hidden sm:block" />
						<span className="text-clay">You need someone who picks up when owners call.</span>
					</h1>
					<p className="mt-8 text-lg sm:text-xl font-medium text-taupe max-w-3xl mx-auto text-pretty leading-relaxed">
						I train you until an owner wants you, then I put you in the room. Most reps are placed and earning inside <span className="font-bold text-espresso">30 to 45 days</span>, and the goal is <span className="font-bold text-espresso">$5K a month or more</span>.
					</p>
					

					{/* VSL added */}
					<div className="mt-16 max-w-7xl mx-auto relative z-10">
						
						{/* VSL Player */}
						<div className="max-w-7xl mx-auto rounded-2xl bg-bone p-2 ring-1 ring-espresso/10 lg:p-4 shadow-2xl shadow-black/50 mb-24 sm:mb-32">
							<VSLProvider>                   
								<VSLPlayer videoType="REPS" videoId="18ef8b4452a0efe4ba019aa02a355d6b" />
							</VSLProvider>
						</div>

						{/* Short Cards with MS-10 Door Buttons */}
						<div>
 									<a 
										href="#apply"
										className="bg-clay text-bone px-16 py-6 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
									>
										Place me
									</a>
									<p className="mt-8 text-sm font-bold text-taupe max-w mx-auto text-balance">
							Let’s have a chat and see if I can help.
						</p>
						</div>
					</div>


					
					
				</section>

				

				{/* 3. VSL & THE INNER ROOM METHOD (R-04 to R-11 / sales-reps_03 to 05) */}
				<section className="mt-24 sm:mt-24 bg-espresso text-bone py-24 sm:py-24 relative overflow-hidden">
					
				{/* </section> */}
				{/* 2. DOOR CARDS (R-02 & R-03 / sales-reps_02.png) */}
				<section className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 sm:mt-8">
					<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
						
						{/* Card 1 */}
						<div className="bg-espresso text-bone p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black flex flex-col h-full">
							<span className="inline-block text-clay text-sm font-bold uppercase tracking-widest mb-4">
								NEVER SOLD ANYTHING?
							</span>
							<h3 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance">
								That's less of a problem than you think.
							</h3>
							<p className="text-bone text-lg leading-relaxed text-pretty">
								I've trained people from zero and placed them, and some of them out-earn the experienced guys now. You bring 2 focused hours a day and show up to every call, and I bring the training and the intros. That's the deal.
							</p>
						</div>

						{/* Card 2 */}
						<div className="bg-espresso text-bone p-8 sm:p-12 rounded-3xl shadow-2xl shadow-black flex flex-col h-full">
							<span className="inline-block text-clay text-sm font-bold uppercase tracking-widest mb-4">
								SELLING, BUT STUCK AT $1K-$2K?
							</span>
							<h3 className="font-serif text-3xl sm:text-4xl font-bold mb-6 text-balance">
								You don't have a skill problem. You have a room problem.
							</h3>
							<p className="text-bone text-lg leading-relaxed text-pretty">
								The offers you want never hit job boards. They get filled by a text between owners before the public ever hears about them. We fix how you show up, then I send that text about you.
							</p>
						</div>

					</div>
				</section>

{/* 3. VSL & THE INNER ROOM METHOD */}
                {/* <section className="mt-8 sm:mt-8 bg-espresso text-bone py-24 sm:py-32 relative overflow-hidden"> */}
                    <div className=" max-w-9xl mx-auto mt-24 px-6 lg:px-16 relative z-10">

                        {/* Method Intro */}
                        <div className="max-w-9xl mb-16 sm:mb-24 mx-auto text-left">
                            <p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
                                THE INNER ROOM METHOD
                            </p>
                            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance mb-8">
                                9 out of 10 of the best sales jobs <br className="hidden sm:block" />
                                <span className="text-clay italic">never get posted.</span>
                            </h2>
                            <p className="text-bone/70 sm:text-xl leading-relaxed text-pretty">
                                They get filled inside private rooms, between owners who already know each other. If all you've been doing is applying and DMing, you've been fishing in the only pond everyone can see. The Inner Room Method is how I get you into the other one. Four keys.
                            </p>
                        </div>

                        {/* The 4 Keys Grid (Perfect 2x2 Layout) */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-8">
                            
                            {/* Key 1 */}
                            <div className="bg-bone/5 border border-bone/10 p-8 sm:p-10 rounded-3xl hover:bg-bone/10 transition-colors flex flex-col h-full">
                                <span className="block text-clay text-sm font-bold uppercase tracking-widest mb-3">
                                    KEY 1 &bull; PRESENTATION
                                </span>
                                <h3 className="font-serif text-3xl font-bold text-bone mb-4">
                                    Be seen
                                </h3>
                                <p className="text-bone/70 text-lg leading-relaxed">
                                    Owners decide who you are before they ever reply. Intro video, profile, story, proof. We rebuild all of it so they stop scrolling past you.
                                </p>
                            </div>

                            {/* Key 2 */}
                            <div className="bg-bone/5 border border-bone/10 p-8 sm:p-10 rounded-3xl hover:bg-bone/10 transition-colors flex flex-col h-full">
                                <span className="block text-clay text-sm font-bold uppercase tracking-widest mb-3">
                                    KEY 2 &bull; CONVERSATION
                                </span>
                                <h3 className="font-serif text-3xl font-bold text-bone mb-4">
                                    Be heard
                                </h3>
                                <p className="text-bone/70 text-lg leading-relaxed">
                                    No dead scripts. Voice notes, real questions, rapport in 60 seconds. The exact playbook I still use every day.
                                </p>
                            </div>

                            {/* Key 3 */}
                            <div className="bg-bone/5 border border-bone/10 p-8 sm:p-10 rounded-3xl hover:bg-bone/10 transition-colors flex flex-col h-full">
                                <span className="block text-clay text-sm font-bold uppercase tracking-widest mb-3">
                                    KEY 3 &bull; PIPELINE
                                </span>
                                <h3 className="font-serif text-3xl font-bold text-bone mb-4">
                                    Be consistent
                                </h3>
                                <p className="text-bone/70 text-lg leading-relaxed">
                                    A simple 2-hour daily system, 20+ owner conversations a day. Work that compounds instead of evaporating.
                                </p>
                            </div>

                            {/* Key 4 (Gold Accent) */}
                            <div className="bg-[#B98A2F]/5 border border-[#B98A2F]/50 p-8 sm:p-10 rounded-3xl ring-1 ring-[#B98A2F]/20 relative overflow-hidden flex flex-col h-full">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-[#B98A2F]/10 blur-3xl rounded-full pointer-events-none" />
                                
                                <span className="block text-[#B98A2F] text-sm font-bold uppercase tracking-widest mb-3 relative z-10">
                                    KEY 4 &bull; NETWORK THE MASTER KEY
                                </span>
                                <h3 className="font-serif text-3xl font-bold text-bone mb-4 relative z-10">
                                    Be introduced
                                </h3>
                                <p className="text-bone/70 text-lg leading-relaxed relative z-10">
                                    200+ owners who take my call because they know I vet. The first three keys you could build alone if you had years to spare. This one I hand you on day one.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

				{/* 4. THE PROCESS (R-12 / sales-reps_06.png) */}
				<section className="py-24 sm:py-32 bg-bone border-b border-taupe/10">
					<div className="max-w-7xl mx-auto px-6">
						<div className="text-left mb-16 sm:mb-20">
							<p className="text-sm font-bold tracking-widest text-clay uppercase mb-4">
								THE PROCESS
							</p>
							<h2 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
								What actually happens after you apply.
							</h2>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
							
							<div className="flex flex-col text-left shadow-2xl shadow-black p-8 sm:p-10 rounded-3xl bg-bone/5">
								<span className="text-clay font-serif text-1xl font-bold mb-4">Step 1</span>
								<strong className="block text-espresso text-3xl mb-3">Apply</strong>
								<p className="text-taupe leading-relaxed">Takes 2 minutes, and I reply within 24 hours.</p>
							</div>

							<div className="flex flex-col text-left shadow-2xl shadow-black p-8 sm:p-10 rounded-3xl bg-bone/5">
								<span className="text-clay font-serif text-1xl font-bold mb-4">Step 2</span>
								<strong className="block text-espresso text-3xl mb-3">Fit call</strong>
								<p className="text-taupe leading-relaxed">I tell you straight whether you're ready to place now or we train first. No sugarcoating either way.</p>
							</div>

							<div className="flex flex-col text-left shadow-2xl shadow-black p-8 sm:p-10 rounded-3xl bg-bone/5">
								<span className="text-clay font-serif text-1xl font-bold mb-4">Step 3</span>
								<strong className="block text-espresso text-3xl mb-3">Build</strong>
								<p className="text-taupe leading-relaxed">The four keys, applied to you, and I start making intros while we work.</p>
							</div>

							<div className="flex flex-col text-left shadow-2xl shadow-black p-8 sm:p-10 rounded-3xl bg-bone/5">
								<span className="text-clay font-serif text-1xl font-bold mb-4">Step 4</span>
								<strong className="block text-espresso text-3xl mb-3">Placed</strong>
								<p className="text-taupe leading-relaxed">Most reps are earning inside 30 to 45 days.</p>
							</div>

						</div>
					</div>
				</section>

				{/* 5. FORM & STRAIGHT TALK (R-13 & R-14 / sales-reps_07.png) */}
				<section id="apply" className="py-16 sm:py-12 bg-bone">
					<div className="max-w-7xl mx-auto px-6 lg:px-8">
						<div className="grid lg:grid-cols-1 gap-16">
							
							{/* Left Column: Straight Talk */}
							<div className="text-center">
								<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
									BEFORE YOU APPLY
								</p>
								<h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-espresso leading-tight mb-8">
									Read this first.
								</h1>
								<p className="text-lg text-taupe font-medium leading-relaxed mb-6 text-pretty">
									I work with people who want $5K a month or more from sales and will do the work. Experience helps. It isn't required, I've trained people from zero.
								</p>
								<p className="text-lg text-espresso font-semibold leading-relaxed mb-12 text-pretty">
									Two things end it instantly: wanting a shortcut, and ghosting a booked call. No-shows are removed from my network permanently. Owners trust me because of that.
								</p>
							</div>

							{/* Right Column: Aura Form Component */}
							<div className="w-full bg-espresso/5 rounded-2xl shadow-xl ring-1 ring-taupe/10">
								<ApplySalesReps />
							</div>

							

						</div>
					</div>
				</section>
				<section>

				<div className="pt-16 mx-auto">
					{/* FAQ SECTION */}
                <SalesFAQ />

				</div>

				</section>

				{/* 6. WALL OF RECEIPTS (R-15 / sales-reps_08.png) */}
				<section className="py-24 bg-bone overflow-hidden border-t border-taupe/10">
					<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 text-center">
						<p className="text-lg font-bold tracking-widest text-clay uppercase mb-6">
							ASK THEM, NOT ME
						</p>
						<h2 className="font-serif text-4xl sm:text-5xl font-bold text-espresso">
							Reps I've placed.
						</h2>
					</div>

					{textReviews.length > 0 && (
						<div className="mb-16">
							<TestimonialsMarquee testimonials={textReviews} />
						</div>
					)}

					{videoReviews.length > 0 && (
						<div className="max-w-7xl mx-auto px-6 lg:px-8">
							<TestimonialsV3 testimonials={videoReviews} />
						</div>
					)}

					{allTestimonials.length === 0 && (
						<p className="text-center text-taupe py-10">
							No recent results uploaded yet. Add them in the Admin dashboard!
						</p>
					)}
				</section>

			</main>
			

			<Footer />

			{/* GLOBAL STICKY MOBILE BAR (G-05) */}
			<div className="sm:hidden fixed bottom-0 left-0 w-full bg-bone/95 backdrop-blur-md border-t border-taupe/20 p-3 z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(43,29,20,0.1)]">
				<span className="text-sm font-bold text-espresso">600+ reps placed. You next?</span>
				<a href="#apply" className="bg-clay text-bone px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide">
					Place me
				</a>
			</div>
		</div>
	);
}















