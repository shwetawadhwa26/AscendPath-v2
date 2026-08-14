"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import { VSLProvider } from "@/contexts/VSLContext";
import FAQ from "@/components/FAQ";
import SalesFAQ from "@/components/FAQs/SalesRepsFAQs";

export default function ThankYouReps() {
  // THE FRAME BUSTER: Breaks the page out of the Aura iframe
  useEffect(() => {
    if (window.top !== window.self && window.top) {
      window.top.location.href = window.location.href;
    }
  }, []);

  return (
    <div className="bg-bone min-h-screen text-espresso font-sans selection:bg-clay selection:text-espresso">
      <Navbar />

      <main className="pt-32 pb-24 sm:pt-48 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          {/* 1. HERO SECTION */}
          <p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
            APPLICATION RECEIVED
          </p>

          <h1 className="text-espresso font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight mb-8">
            Got it. I'll review it <br className="hidden sm:block" />
            <span className="text-clay">within 24 hours.</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-espresso/80 max-w-2xl mx-auto text-pretty leading-relaxed mb-16">
            Check your email for the <span className="text-clay font-bold">confirmation</span>. Watch the video below for
            your exact next steps, and keep the rules in mind.
          </p>

          {/* 2. VSL PLAYER */}
          <div className="rounded-2xl bg-bone/5 p-2 ring-1 ring-bone/10 lg:p-4 shadow-2xl shadow-black/50 mb-24">
            <VSLProvider>
              <VSLPlayer
                videoType="THANKS_REP"
                videoId="ebbf2bb479fc72863a9fe5f6cc0ecac4"
              />
            </VSLProvider>
          </div>

          {/* 3. THE CHECKLIST (Arrows instead of numbers) */}
          <div className="flex flex-col space-y-6 max-w-3xl mx-auto mb-20">
            {/* The Sticky Image */}
				<div className="">
          <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Make sure to Accept the invite.
                </strong>
					<img
						alt="Harry's journey from struggle to success"
						src="https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/2e23ecd0-ff7c-4974-9a3d-aad9db25d400/public"
						//className="w-full lg:w-216 h-64 lg:h-287.5 object-cover object-top rounded-xl bg-taupe/5 shadow-xl ring-1 ring-taupe/20"
					/>
				</div>
            {/* Item 1 */}
            <div className="flex text-left w-full gap-6 items-start">
              
              <span className="text-[#B98A2F] text-2xl sm:text-3xl font-bold mt-0.5">
                &rarr;
              </span>
              <div>
                <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Watch your inbox.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  If it's a fit, I'll send you a private link to book your
                  1-on-1 Fit Call.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex text-left w-full gap-6 items-start">
              <span className="text-[#B98A2F] text-2xl sm:text-3xl font-bold mt-0.5">
                &rarr;
              </span>
              <div>
                <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Be ready for straight talk.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  On the call, I'll tell you instantly if you are ready to be
                  placed now, or if we need to train first. No sugarcoating.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex text-left w-full gap-6 items-start">
              <span className="text-[#B98A2F] text-2xl sm:text-3xl font-bold mt-0.5">
                &rarr;
              </span>
              <div>
                <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Do not ghost.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  If you book a call and no-show, you are permanently removed
                  from my network. Owners trust me because I vet hard.
                </p>
              </div>
            </div>

            {/* 4. CLOSING LINE */}
            <div className="pt-12 border-t border-espresso max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl font-medium text-espresso/80 text-balance leading-relaxed">
                While you wait: The Inner Room is where my reps train, share
                wins, and watch placements happen live. You'll be inside it
                anyway if we work together. <a className="text-clay font-bold" href="/inner-room">
                  Have a look →
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
              <div className="pt-16 mx-auto">
                {/* FAQ SECTION */}
                      <SalesFAQ />
      
              </div>
      <Footer />
    </div>
  );
}

// "use client";

// import { useEffect } from "react";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import VSLPlayer from "@/components/VSLs/VSLPlayer";
// import FAQ from "@/components/FAQ";
// import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
// import PostApplySalesReps from "@/components/ApplyForms/PostApplySalesReps";

// export default function ThankYouReps() {

//             // THE FRAME BUSTER: Breaks the page out of the Aura iframe
//             useEffect(() => {
//                 if (window.top !== window.self) {
//                     window.top.location.href = window.location.href;
//                 }
//             }, []);

// 	return (
// 		<div className="transition-colors duration-300">
// 			<Navbar />

// 			<main className="pt-32 pb-16 sm:pt-40">
// 				<div className="mx-auto max-w-8xl px-6 lg:px-8 text-center">
// 					<h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
// 						Application <span className="text-clay">Received</span>
// 					</h1>
// 					<p className="mt-8 text-lg font-medium text-taupe max-w-2xl mx-auto">
// 						Thank you for taking the first step towards your next $5-10K/month role. Watch the video below for your exact next steps, and review our FAQs while you wait to hear back from our placement team.
// 					</p>

// 					{/* Reps Thank You Video Player */}
// 					<div className="mt-16 mx-auto max-w-4xl">
// 						<VSLPlayer videoType="THANKS_REP" videoId="ebbf2bb479fc72863a9fe5f6cc0ecac4" />
// 					</div>

// 					<PostApplySalesReps/>
// 				</div>

// 				{/* FAQs Section */}
// 				<div className="mt-5">
// 					<FAQ />
// 				</div>

// 				{/* Additional Testimonials */}
// 				<div className="mt-8">
// 					<TestimonialsV3 />
// 				</div>
// 			</main>

// 			<Footer />
// 		</div>
// 	);
// }
