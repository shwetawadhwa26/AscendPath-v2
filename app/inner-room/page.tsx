"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import { VSLProvider } from "@/contexts/VSLContext";
import FAQ from "@/components/FAQ";

export default function ThankYouReps() {
  // THE FRAME BUSTER: Breaks the page out of the Aura iframe
  useEffect(() => {
    if (window.top !== window.self) {
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
            NOT READY FOR A CALL? START HERE
          </p>

          <h1 className="text-espresso font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-balance leading-tight mb-8">
            The placements happen <br className="hidden sm:block" />
            <span className="text-clay">inside a room. This one.</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium text-espresso/80 max-w-2xl mx-auto text-pretty leading-relaxed mb-16">
            The Inner Room is my community on Skool. Same four keys I use with placed reps,
weekly calls with me, and real placements happening in front of you. Train until you're placeable.
Then I place you
          </p>

		  <div className="mt-10 flex flex-col items-center justify-center">
						<a 
							href="https://www.skool.com/ascend-path/about"
                            target="_blank" rel="noopener noreferrer"
							className="bg-clay text-bone px-10 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
						>
							Join the Inner Room
						</a>
						<p className="mt-3 mb-10 text-sm font-bold text-taupe max-w mx-auto text-balance">
							Join $97/month
						</p>
					</div>

          {/* 2. VSL PLAYER */}
          <div className="rounded-2xl bg-bone/5 p-2 ring-1 ring-bone/10 lg:p-4 shadow-2xl shadow-black/50 mb-24">
            <VSLProvider>
              <VSLPlayer
                videoType="DQ_PAGE"
                videoId="396c4095ab0a0bbce52c1c2f525acca3"
              />
            </VSLProvider>
          </div>

          {/* 3. THE CHECKLIST (Arrows instead of numbers) */}
          <div className="flex flex-col space-y-6 max-w-3xl mx-auto mb-20">
            {/* Item 1 */}
            <div className="flex text-left w-full gap-6 items-start">
              <span className="text-[#B98A2F] text-2xl sm:text-3xl font-bold mt-0.5">
                &rarr;
              </span>
              <div>
                <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  The four keys, taught live.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  Presentation, conversation, pipeline, network. Weekly group calls, and
I'm in there daily.
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
                  Plug-and-play scripts.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  The DM templates and voice note frameworks I use.
Copy, send, watch what happens.
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
                  A simple daily system.
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  2 hours a day. Record your content,
					send your DMs, take your calls. No 14-tab dashboard.
                </p>
              </div>

			 

			   
            </div>

			   {/* Item 4 */}
            <div className="flex text-left w-full gap-6 items-start">
              <span className="text-[#B98A2F] text-2xl sm:text-3xl font-bold mt-0.5">
                &rarr;
              </span>
              <div>
                <strong className="block text-espresso text-xl sm:text-2xl mb-2 tracking-wide">
                  Reps getting placed in front of you. 
                </strong>
                <p className="text-espresso/70 text-lg leading-relaxed text-pretty">
                  The
					wins channel isn't motivation. It's evidence.
                </p>
              </div>
				</div>			

            {/* 4. CLOSING LINE */}
      		  <div className="mt-10 flex flex-col items-center justify-center">
						<a 
							href="https://www.skool.com/ascend-path/about"
              target="_blank" rel="noopener noreferrer"
							className="bg-clay text-bone px-10 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
						>
							Join the Inner Room
						</a>
						
					</div>
          </div>
        </div>
      </main>
      {/* FAQs Section
      <div className="bg-espresso">
        <FAQ />
      </div> */}
      <Footer />
    </div>
  );
}





// "use client";

// import { useEffect } from "react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

// export default function NotAFit() {
// 	// THE FRAME BUSTER: Breaks the page out of the Aura iframe
// 	useEffect(() => {
// 		if (window.top !== window.self) {
// 			window.top.location.href = window.location.href;
// 		}
// 	}, []);

// 	return (
// 		<div className="transition-colors duration-300">
// 			<Navbar />
			
// 			<main className="pt-32 pb-16 sm:pt-40 min-h-[80vh] flex flex-col justify-center">
// 				<div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
// 					<h1 className="text-4xl font-semibold tracking-tight sm:text-6xl text-espresso">
// 						Not quite <span className="text-clay">ready</span> yet.
// 					</h1>
// 					<p className="mt-6 text-lg font-medium text-taupe max-w-2xl mx-auto">
// 						Based on your answers, our placement program isn't the right fit for you at this exact moment. However, we don't want to leave you empty-handed. Watch this free training below on how to level up your skills.
// 					</p>
					
// 					{/* Properly Embedded YouTube Video */}
// 					<div className="mt-12 mx-auto max-w-4xl aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-taupe/20 bg-espresso">
// 						<iframe 
// 							className="w-full h-full border-0"
// 							src="https://www.youtube.com/embed/XxjQnkDdTns?si=r7kK0dKZb-Y4yP5N" 
// 							title="Free AscendPath Training" 
// 							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
// 							referrerPolicy="strict-origin-when-cross-origin" 
// 							allowFullScreen 
// 						/>
// 					</div>
// 				</div>
// 			</main>
 
// 			<Footer />
// 		</div>
// 	);
// }