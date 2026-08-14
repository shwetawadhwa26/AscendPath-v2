import Link from "next/link";
import SplitApplyButton from "./SplitApplyButton";
import InlineVSLPlayer from "./VSLs/VSLPlayer";
import VSLPlayer from "./VSLs/VSLPlayer";
import ScrollReveal from "./ScrollReveal";

export default function Hero() 
{
  return (
    <div className="transition-colors duration-300">
      <div className="relative isolate pt-14">
        {/* HERO SECTION (H-01 to H-06) */}
        <section className="relative pt-24 pb-12 sm:pt-24 sm:pb-12 px-6 lg:px-8 text-center">
          <div className="relative z-10 max-w-8xl mx-auto">
            {/* H-02 Eyebrow */}
            <p className="text-sm font-bold tracking-widest text-clay uppercase mb-5">
              THE ASCEND PATH
            </p>

            {/* H-03 H1 */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-balance text-espresso leading-tight">
              Owners text me when they need sales reps. <br />
              <span className="text-clay">
                Reps text me when they need work.
              </span>
            </h1>

            {/* H-04 Sub */}
            <p className="mt-8 text-lg sm:text-xl text-espresso/80 max-w-2xl mx-auto text-pretty leading-relaxed">
              I'm Harry. I started out stacking shelves at Walmart with broken
              English and{" "}
              <strong className="text-espresso font-bold">$5.50</strong> in the
              bank, and by 21 I'd generated over{" "}
              <strong className="text-espresso font-bold">$1.5 million</strong>{" "}
              in sales. Now I train reps and place them with business owners I
              actually know.{" "}
              <strong className="text-espresso font-bold">600+</strong> placed
              so far.
            </p>

            {/* H-05 Doors */}
                            {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                    href="/sales-reps"
                    className="bg-clay text-bone px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 transition-all w-full sm:w-auto"
                    >
                    I'm a Rep. Place me &rarr;
                    </Link>
                    <Link
                    href="/business-owners"
                    className="bg-espresso text-bone px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-espresso/90 transition-all w-full sm:w-auto"
                    >
                    I'm Hiring. Send me Reps &rarr;
                    </Link>
                </div> */}

          </div>
        </section>

        

        {/* VIDEO (H-08) */}
        <section className="relative z-10 pt-6 sm:pt-6 pb-8 mb-8
        ">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="rounded-2xl bg-bone/5 p-2 ring-1 ring-bone/10 lg:p-4 shadow-2xl shadow-black/50">
              <VSLPlayer videoType="HOME" />
            </div>
          </div>
          <div className="max-w-3xl mx-auto mt-16 text-center">
          {/* Short Cards with MS-10 Door Buttons */}
                              <div className="mt-10 max-w-3xl grid sm:grid-cols-2 gap-2 flex flex-col items-center justify-center mx-auto">
                                <div className="bg-espresso/5 border border-espresso/10 p-4 sm:p-4 rounded-3xl flex flex-col items-center text-center">
                                  {/* <h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Reps</h3> */}
                                  <Link 
                                    href="/sales-reps"
                                    className="bg-clay text-bone px-4 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 transition-all w-full mt-auto"
                                  >
                                    I'm a Rep. Place me
                                  </Link>
                                </div>
                
                                <div className="bg-espresso/5 border border-espresso/10 p-4 sm:p-4 rounded-3xl flex flex-col items-center text-center">
                                  {/* <h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Owners</h3> */}
                                  <Link 
                                    href="/business-owners"
                                    className="bg-espresso text-bone px-4 py-4 rounded-xl font-bold tracking-wide hover:bg-espresso/90 transition-all w-full mt-auto"
                                  >
                                    I'm Hiring. Send me Reps
                                  </Link>
                                </div>
                              </div>

            {/* H-06 Under doors */}
            <p className="mt-6 text-sm font-medium text-espresso/60">
              Pick your door. Takes 2 minutes either way.
            </p>
            </div>
        </section>

{/* PROOF STRIP (H-07) */}
        <section className="relative z-10 border-y border-bone py-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-bone/10">
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">
                  600<span className="text-[#B98A2F]">+</span>
                </span>
                <span className="text-sm font-bold text-espresso/80 uppercase tracking-wider">
                  reps placed
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">
                  $1.5M<span className="text-[#B98A2F]">+</span>
                </span>
                <span className="text-sm font-bold text-espresso/80 uppercase tracking-wider text-balance">
                  in sales generated
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">
                  200<span className="text-[#B98A2F]">+</span>
                </span>
                <span className="text-sm font-bold text-espresso/80 uppercase tracking-wider text-balance">
                  owners in my phone
                </span>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className="text-3xl md:text-4xl font-serif font-bold text-espresso mb-2">
                  30<span className="text-[#B98A2F]">+</span>
                </span>
                <span className="text-sm font-bold text-espresso/80 uppercase tracking-wider">
                  niches hiring
                </span>
              </div>
            </div>
            <p className="text-center text-s text-espresso/50 mt-8">
              We'll cross 1,000 placements this year.
            </p>
          </div>
        </section>

        
        <section id="about" className="relative z-10 py-16 sm:py-24 bg-espresso overflow-hidden">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            {/* Eyebrow + H2 */}
            <div className="mb-16">
              <p className="text-sm font-bold tracking-widest text-clay uppercase mb-4">
                MY STORY
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-bone">
                How I got here.
              </h2>
            </div>

            {/* Timeline List with Gold Dots & SCROLL ANIMATIONS */}
            <div className="relative max-w-3xl border-l border-[#B98A2F]/30 ml-3 pl-8 space-y-12">
              
              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    I landed in Canada as a teenager with broken English and no
                    contacts. My first job was stacking shelves at Walmart for
                    fifteen bucks an hour, and after that I worked nights as a
                    security guard. One of those nights a guy pulled a knife on me,
                    and the next morning I told my parents everything was fine,
                    because I couldn't handle them knowing it wasn't.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    I knew I wanted to build something one day, and everything I
                    read said sales was the foundation. So I googled "sales jobs no
                    experience needed" and ended up in door-to-door solar, knocking
                    200 to 400 doors a day. Most people heard my accent and shut the
                    door before I got through my first sentence.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    My first month I closed nothing, and my bank account was down to
                    five dollars and fifty cents. My mom saw my face on a Zoom call
                    and told me to come home, and the honest truth is the numbers
                    said she was right. I asked her to give me one more month.
                    That's still the most important sentence I've ever said.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    The next month I closed five deals. By month four it was thirty,
                    and I finished that summer as the #1 rep out of a hundred, with
                    over $500K in solar sales. My biggest month was twelve grand,
                    and I celebrated it alone in my apartment eating day-old rice,
                    because nobody around me would have understood what that number
                    meant.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    Then I tried to move into online sales and got humbled all over
                    again. I recorded thousands of Looms, and half of them I deleted
                    before sending because I heard my own accent and lost my nerve.
                    The rejections that did come back all had the same line in them:
                    "we're looking for native English speakers."
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    Eventually I paid a mentor $3,000 I didn't really have, and he
                    told me the thing that changed everything: stop trying to be the
                    best applicant, because you'll always lose that game. Stop
                    applying and start connecting.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    So that's what I did. No pitching, just real conversations with
                    real business owners, every day, for months. Fifty relationships
                    turned into a hundred, then 200+, and at some point
                    opportunities started coming to me instead of me chasing them.
                    By 21 I'd generated over $1.5 million in sales.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#B98A2F] ring-4 ring-espresso" />
                  <p className="text-lg text-bone/80 leading-relaxed text-pretty">
                    And then owners started asking me the same question, over and
                    over: "do you know anyone good?" That question turned into this
                    business. I've placed over 600 reps so far, and we'll cross
                    1,000 this year.
                  </p>
                </div>
              </ScrollReveal>

            </div>
          </div>

          {/* KICKER & DOORS (H-18) */}
          <section className="pt-32 pb-8 px-6 text-center">
            <ScrollReveal>
                <div className="max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl font-bold text-bone leading-relaxed text-pretty">
                    I went from begging for a chance to being the guy who gives
                    them. If you've been doing the work and nothing's clicking,
                    you're probably not the problem. You just don't know the right
                    people yet.
                    <span className="text-clay">&nbsp;I do.</span>
                </p>

                {/* <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                    href="/sales-reps"
                    className="bg-clay text-bone px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 transition-all w-full sm:w-auto"
                    >
                    I'm a Rep. Place me &rarr;
                    </Link>
                    <Link
                    href="/business-owners"
                    className="bg-bone text-espresso px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-bone/90 transition-all w-full sm:w-auto"
                    >
                    I'm Hiring. Send me Reps &rarr;
                    </Link>
                </div> */}

                {/* Short Cards with MS-10 Door Buttons */}
                              <div className="mt-5 grid sm:grid-cols-2 gap-2">
                                <div className="bg-espresso/5 border border-espresso/10 p-4 sm:p-4 rounded-3xl flex flex-col items-center text-center">
                                  {/* <h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Reps</h3> */}
                                  <Link 
                                    href="/sales-reps"
                                    className="bg-clay text-bone px-4 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 transition-all w-full mt-auto"
                                  >
                                    I'm a Rep. Place me
                                  </Link>
                                </div>
                
                                <div className="bg-espresso/5 border border-espresso/10 p-4 sm:p-4 rounded-3xl flex flex-col items-center text-center">
                                  {/* <h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Owners</h3> */}
                                  <Link 
                                    href="/business-owners"
                                    className="bg-bone text-espresso px-4 py-4 rounded-xl font-bold tracking-wide hover:bg-bone/90 transition-all w-full mt-auto"
                                  >
                                    I'm Hiring. Send me Reps
                                  </Link>
                                </div>
                              </div>
                </div>
            </ScrollReveal>
          </section>
        </section>

        {/* GLOBAL STICKY MOBILE BAR (G-05) */}
        {/* <div className="sm:hidden fixed bottom-0 left-0 w-full bg-bone/95 backdrop-blur-md border-t border-taupe/20 p-3 z-50 flex justify-between items-center shadow-[0_-10px_40px_rgba(43,29,20,0.1)]">
					<span className="text-sm font-bold text-espresso">600+ reps placed. You next?</span>
					<Link href="/sales-reps" className="bg-clay text-bone px-5 py-2.5 rounded-lg font-bold text-sm tracking-wide">
						place me
					</Link>
				</div> */}
      </div>
    </div>
 

)}


// import SplitApplyButton from "./SplitApplyButton";
// import InlineVSLPlayer from "./VSLs/VSLPlayer";

// export default function Hero() {
// 	return (
// 		<div className="transition-colors duration-300">
// 			<div className="relative isolate pt-14">

// 				{/* TOP BACKGROUND BLOB - Subtle Clay glow */}
// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-clay opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
// 					/>
// 				</div>

// 				<div className="py-24 sm:py-32 lg:pb-40">
// 					<div className="mx-auto max-w-7xl px-6 lg:px-8">
// 						<div className="mx-auto max-w-2xl text-center">
// 							<h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
// 								You&apos;re talented but invisible. Let&apos;s fix that.
// 							</h1>
// 							<p className="mt-8 text-lg font-medium text-pretty text-taupe sm:text-xl/8">
// 								You're applying to hundreds of roles and hearing nothing back.
// 								We place sales reps into $5K–$10K/month opportunities in 45
// 								days.
// 							</p>
// 							<div className="mt-10 flex items-center justify-center gap-x-6">

//                                 {/* Updated to size LG and dynamically passing the text */}
// 								<SplitApplyButton size="sm">GET STARTED</SplitApplyButton>

// 								<a
// 									href="#story"
// 									className="text-sm/6 font-semibold hover:text-clay transition-colors">
// 									See My Story <span aria-hidden="true">→</span>
// 								</a>
// 							</div>
// 						</div>

// 						{/* CLEAN, UNIFIED INLINE VIDEO PLAYER */}
// 						<div className="mt-16 flow-root sm:mt-24">
// 							<div className="-m-2 rounded-xl bg-taupe/10 p-2 ring-1 ring-taupe/20 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
// 								<InlineVSLPlayer videoType="HOME" videoId="ebbf2bb479fc72863a9fe5f6cc0ecac4"/>
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* BOTTOM BACKGROUND BLOB - Subtle Clay glow */}
// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-clay opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// import SplitApplyButton from "./SplitApplyButton";
// import InlineVSLPlayer from "./VSLs/VSLPlayer";

// export default function Hero() {
// 	return (
// 		<div className="transition-colors duration-300">
// 			<div className="relative isolate pt-14">

// 				{/* TOP BACKGROUND BLOB - Subtle Clay glow */}
// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-clay opacity-10 sm:left-[calc(50%-30rem)] sm:w-288.75"
// 					/>
// 				</div>

// 				<div className="py-24 sm:py-32 lg:pb-40">
// 					<div className="mx-auto max-w-7xl px-6 lg:px-8">
// 						<div className="mx-auto max-w-2xl text-center">
// 							<h1 className="text-5xl font-semibold tracking-tight text-balance sm:text-7xl">
// 								You&apos;re talented but invisible. Let&apos;s fix that.
// 							</h1>
// 							<p className="mt-8 text-lg font-medium text-pretty text-taupe sm:text-xl/8">
// 								You're applying to hundreds of roles and hearing nothing back.
// 								We place sales reps into $5K–$10K/month opportunities in 45
// 								days.
// 							</p>
// 							<div className="mt-10 flex items-center justify-center gap-x-6">
// 								{/* <a
// 									href="https://app.aura-app.ai/the-ascend-path/ascend-path-intake-form"
// 									target="_blank"
// 									rel="noopener noreferrer"
// 									className="rounded-md bg-clay px-5 py-3 text-sm font-semibold text-bone shadow-md hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 transition-opacity">
// 									GET STARTED
// 								</a> */}
// 								<SplitApplyButton size="sm"> GET STARTED</SplitApplyButton>

// 								<a
// 									href="#story"
// 									className="text-sm/6 font-semibold hover:text-clay transition-colors">
// 									See My Story <span aria-hidden="true">→</span>
// 								</a>
// 							</div>
// 						</div>

// 						{/* CLEAN, UNIFIED INLINE VIDEO PLAYER */}
// 						<div className="mt-16 flow-root sm:mt-24">
// 							<div className="-m-2 rounded-xl bg-taupe/10 p-2 ring-1 ring-taupe/20 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
// 								<InlineVSLPlayer />
// 							</div>
// 						</div>
// 					</div>
// 				</div>

// 				{/* BOTTOM BACKGROUND BLOB - Subtle Clay glow */}
// 				<div
// 					aria-hidden="true"
// 					className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
// 					<div
// 						style={{
// 							clipPath:
// 								"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
// 						}}
// 						className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-clay opacity-10 sm:left-[calc(50%+36rem)] sm:w-288.75"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// import HeroDesktop from "@/components/HeroDesktop";
// import HeroMobile from "@/components/HeroMobile";

// export default function Hero() {
// 	return (
// 		<>
// 			<div className="vsl:hidden">
// 				<HeroMobile />
// 			</div>
// 			<div className="hidden vsl:block">
// 				<HeroDesktop />
// 			</div>
// 		</>
// 	);
// }
