"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import { VSLProvider } from "@/contexts/VSLContext";
import BusinessFAQ from "@/components/FAQs/BusinessOwnersFAQs";

export default function ThankYouOwners() {
  // THE FRAME BUSTER: Breaks the page out of the Aura iframe
  useEffect(() => {
    // window.top can be null; guard and handle potential cross-origin access
    if (window.top && window.top !== window.self) {
      try {
        window.top.location.href = window.location.href;
      } catch (e) {
        // Fallback: if unable to access top (cross-origin), navigate current window
        window.self.location.href = window.location.href;
      }
    }
  }, []);

  return (
    <div className="min-h-screen text-espresso font-sans selection:bg-clay selection:text-espresso">
      <Navbar />

      <main className="pt-12 pb-0 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          {/* 1. HERO SECTION */}
          <p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
            OFFER AUDIT BOOKED
          </p>

          <h1 className="text-espresso font-serif ttext-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-balance leading-tight mb-4">
            Booked. I'll come <br className="hidden sm:block" />
            <span className="text-clay">with reps in mind.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-lg font-medium text-espresso/80 max-w-2xl mx-auto text-pretty leading-relaxed">
            Check your email for the <span className="text-clay font-bold">confirmation</span>. Watch the video below, and
            make sure you have these three things ready for our call:
          </p>

          {/* 2. RESTORED VSL PLAYER */}
          <div className="mt-10 sm:mt-12 mx-auto max-w-3xl relative z-10 pb-12">
             <div className="rounded-2xl bg-espresso/5 p-2 ring-1 ring-espresso/10 lg:p-4 shadow-2xl shadow-black/10">

            <VSLProvider>
              <VSLPlayer
                videoType="THANKS_OWNERS"
                videoId="872419c84a9dfa722ea56244f574388a"
              />
            </VSLProvider>
            </div>
          </div>

          {/* 3. THE CHECKLIST (Arrows instead of numbers) */}
          <div className="flex flex-col space-y-6 max-w-3xl mx-auto mb-20">
            <div className="">
          <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Make sure to Accept the invite.
                </strong>
					<img
						alt=""
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
                  Your offer and price point.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  What you sell, what it costs, who buys it.
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
                  Your lead flow.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  Roughly how many calls or conversations a rep would walk into
                  per week.
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
                  The OTE you have in mind.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  Base or no base, commission structure, ramp expectations.
                </p>
              </div>
            </div>

            {/* 4. CLOSING LINE */}
            <div className="pt-12 border-t border-espresso max-w-3xl mx-auto">
              <p className="text-lg sm:text-xl font-medium text-espresso/80 text-balance leading-relaxed">
                On the call I'll tell you exactly what kind of rep moves the
                needle in your business, and if it's not a fit, I'll tell you
                that too. Nothing to buy. You only commit after you've met your
                matched rep.
              </p>
            </div>
          </div>
		  				
        </div>


      </main>
		<div className="pt-16 mx-auto">
                    {/* FAQ SECTION */}
                          <BusinessFAQ />
          
                  </div>
      <Footer />
    </div>
  );
}
