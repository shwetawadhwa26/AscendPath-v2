import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import VSLPlayer from "@/components/VSLs/VSLPlayer";
import type { Metadata } from "next";

// MS-11: Meta
export const metadata: Metadata = {
    title: "My Story | The Ascend Path",
    description: "From $5.50 in a Canadian bank account to 600+ sales reps placed. The real story behind The Ascend Path.",
};

export default function MyStory() {
    return (
        <div className="bg-bone min-h-screen font-sans selection:bg-clay selection:text-espresso text-espresso">
            <Navbar />

            <main className="pt-32 pb-0 sm:pt-40">
                
                {/* MS-01: HERO SECTION */}
                <header className="max-w-6xl mx-auto px-6 lg:px-8 text-center mb-16 sm:mb-20">
                    <ScrollReveal>
                        <p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
                            MY STORY
                        </p>
                        <h1 className="font-serif text-5xl sm:text-6xl md:text-6xl font-bold tracking-tight leading-none text-balance mb-8">
                            From $5.50 in the bank <br className="hidden sm:block" />
                            <span className="text-clay">to 600+ reps placed.</span>
                        </h1>
                        <p className="text-lg sm:text-xl font-medium text-espresso/70 max-w-3xl mx-auto text-pretty leading-relaxed">
                            This is the long version. The short one is on the home page, and the full thing is in the video below.
                        </p>
                    </ScrollReveal>
                </header>

                {/* MS-02: VIDEO */}
                <section className="relative z-10 pb-16 sm:pb-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="rounded-[2rem] bg-espresso/5 p-2 ring-1 ring-espresso/10 lg:p-4 shadow-2xl shadow-black/10">
                            <VSLPlayer videoType="HOME" />
                        </div>
                    </div>
                </section>

                {/* THE STORY CHAPTERS (Premium Editorial Split-Screen UI) */}
                <article className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* MS-03: Chapter 1 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            01
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 1</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            Leaving everything.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        I grew up in a small village in Punjab. My father served in the Indian Army his whole working life, and in a family like mine success had a script: get the safe job, save your money, retire with a pension. I couldn't make myself want that life, and I didn't know how to tell my parents, because I didn't fully understand it myself. So I did what a lot of kids from my country do when they can't fit the script. I changed the country. I left my parents, my grandparents, and the language I spoke without thinking, and I got on a plane to Canada as a teenager, alone.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* MS-04: Chapter 2 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            02
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 2</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            The bottom.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        The dream lasted about a week. I stacked shelves at Walmart for fifteen bucks an hour, and then I worked nights as a security guard, and one of those nights a man pulled a knife on me for asking him to leave the property. I called my parents the next morning and told them everything was fine, because I couldn't handle them hearing my voice and knowing it wasn't. At my lowest point I had five dollars and fifty cents in my bank account. I remember standing at a frozen bus stop at 2am thinking, I left everything for this?
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* MS-05: Chapter 3 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            03
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 3</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            One more month.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        I knew sales was the way out, so I found a door-to-door solar job and knocked 200 to 400 doors a day. My first month I closed nothing. My mom saw my face on a Zoom call and begged me to come home, and the honest truth is the numbers said she was right. I asked her to give me one more month, and that sentence changed my whole life. The next month I closed five deals. By month four it was thirty, and I finished that summer as the #1 rep out of a hundred, with over $500K in solar sales. My biggest month was twelve grand, and I celebrated it alone in my apartment with day-old rice, because nobody around me would have understood what that number meant.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* MS-06: Chapter 4 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            04
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 4</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            The wall.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        Then I tried to move into online sales, and everything that worked at the door stopped working. I sent 15 to 25 applications a day and recorded thousands of Looms, and half of them I deleted before sending because I heard my own accent and lost my nerve. The rejections that came back all had the same line in them: we're looking for native English speakers. That's when I learned the lesson this whole business is built on. You can be the hardest worker in the room and still lose, if you're in the wrong room.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* MS-07: Chapter 5 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            05
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 5</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            The shift.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        I paid a mentor $3,000 I didn't have, on a credit card, with my hands shaking over the keyboard. And he told me the thing that rewired my brain: stop trying to be the best applicant, because you'll always lose that game. Stop applying and start connecting. So I stopped applying completely. I spent my days having real conversations with real business owners, not pitching anyone, just being useful, and fifty relationships turned into a hundred, then two hundred plus. Opportunities started chasing me instead of the other way around, and by 21 I'd generated over $1.5 million in sales.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                    {/* MS-08: Chapter 6 */}
                    <section className="relative py-12 sm:py-12 border-t border-espresso/10">
                        <div className="absolute top-10 right-10 text-[12rem] md:text-[18rem] font-serif font-bold text-espresso/[0.03] select-none pointer-events-none leading-none tracking-tighter">
                            06
                        </div>
                        <div className="grid md:grid-cols-12 gap-12 relative z-10">
                            <div className="md:col-span-5 lg:col-span-4">
                                <ScrollReveal>
                                    <div className="sticky top-32">
                                        <span className="text-sm font-bold tracking-widest text-[#B98A2F] uppercase mb-3 block">Chapter 6</span>
                                        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-espresso leading-tight">
                                            What it became.
                                        </h2>
                                    </div>
                                </ScrollReveal>
                            </div>
                            <div className="md:col-span-7 lg:col-span-8 space-y-8 text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty pt-2">
                                <ScrollReveal>
                                    <p className="first-letter:text-7xl first-letter:font-serif first-letter:text-clay first-letter:mr-3 first-letter:float-left first-letter:leading-none">
                                        Somewhere along the way, owners started asking me the same question every week: do you know anyone good? That question turned into The Ascend Path. I've placed over 600 reps so far, we'll cross 1,000 this year, and the whole business still runs on the thing I learned the hard way: the gap between $1K months and $10K months isn't more training. It's knowing the right 20 people.
                                    </p>
                                </ScrollReveal>
                            </div>
                        </div>
                    </section>

                </article>

                {/* MS-09 & MS-10: HOW IT WORKS NOW + SHORT CARDS */}
                <section className="mt-16 sm:mt-12 pt-12 sm:pt-12 rounded-t-[4rem]">
                    <div className="max-w-6xl mx-auto px-6 lg:px-8">
 						<ScrollReveal>
 							<div className="text-center mb-16 max-w-3xl mx-auto">
 								<h2 className="font-serif text-4xl sm:text-5xl font-bold text-espresso mb-6">
 									How this works today.
 								</h2>
 								<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
 									Two doors, same network. If you're a rep, I train you on the four keys of the Inner Room Method until an owner wants you, then I put you in the room, and most reps are placed and earning inside 30 to 45 days. If you're an owner, the Match Method starts with a 30-minute Offer Audit, I match you from a pool of reps I trained myself, and you have someone in seat within 7 to 14 days.
 								</p>
 							</div>

 							{/* Short Cards with MS-10 Door Buttons */}
 							<div className="grid sm:grid-cols-2 gap-6 mb-24">
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
 										className="bg-espresso border-2 text-bone px-4 py-4 rounded-xl font-bold tracking-wide hover:bg-espresso/90 transition-all w-full mt-auto"
 									>
 										I'm Hiring. Send me Reps
 									</Link>
 								</div>
 							</div>
 						</ScrollReveal>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}






// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Link from "next/link";
// import ScrollReveal from "@/components/ScrollReveal";
// import VSLPlayer from "@/components/VSLs/VSLPlayer";
// import type { Metadata } from "next";

// // MS-11: Meta
// export const metadata: Metadata = {
// 	title: "My Story | The Ascend Path",
// 	description: "From $5.50 in a Canadian bank account to 600+ sales reps placed. The real story behind The Ascend Path.",
// };

// export default function MyStory() {
// 	return (
// 		<div className="bg-bone min-h-screen font-sans selection:bg-clay selection:text-espresso text-espresso">
// 			<Navbar />

// 			<main className="pt-32 pb-0 sm:pt-48">
				
// 				{/* MS-01: HERO SECTION */}
// 				<header className="max-w-4xl mx-auto px-6 lg:px-8 text-center mb-16 sm:mb-20">
// 					<ScrollReveal>
// 						<p className="text-sm font-bold tracking-widest text-clay uppercase mb-6">
// 							MY STORY
// 						</p>
// 						<h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight text-balance mb-8">
// 							From $5.50 in the bank <br className="hidden sm:block" />
// 							<span className="text-clay italic">to 600+ reps placed.</span>
// 						</h1>
// 						<p className="text-lg sm:text-xl font-medium text-espresso/80 max-w-2xl mx-auto text-pretty leading-relaxed">
// 							This is the long version. The short one is on the home page, and the full thing is in the video below.
// 						</p>
// 					</ScrollReveal>
// 				</header>

// 				{/* MS-02: VIDEO */}
// 				<section className="relative z-10 pb-16 sm:pb-24">
// 					<div className="max-w-7xl mx-auto px-6 lg:px-8">
// 						<div className="rounded-2xl bg-espresso/5 p-2 ring-1 ring-espresso/10 lg:p-4 shadow-2xl shadow-black/50">
// 							<VSLPlayer videoType="HOME" />
// 						</div>
// 					</div>
// 				</section>

// 				{/* THE STORY CHAPTERS (Flowing Paragraphs) */}
// 				<article className="max-w-6xl mx-auto px-6 lg:px-8 space-y-20 sm:space-y-12">
					
// 					{/* MS-03: Chapter 1 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								Leaving everything.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								I grew up in a small village in Punjab. My father served in the Indian Army his whole working life, and in a family like mine success had a script: get the safe job, save your money, retire with a pension. I couldn't make myself want that life, and I didn't know how to tell my parents, because I didn't fully understand it myself. So I did what a lot of kids from my country do when they can't fit the script. I changed the country. I left my parents, my grandparents, and the language I spoke without thinking, and I got on a plane to Canada as a teenager, alone.
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 					{/* MS-04: Chapter 2 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								The bottom.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								The dream lasted about a week. I stacked shelves at Walmart for fifteen bucks an hour, and then I worked nights as a security guard, and one of those nights a man pulled a knife on me for asking him to leave the property. I called my parents the next morning and told them everything was fine, because I couldn't handle them hearing my voice and knowing it wasn't. At my lowest point I had five dollars and fifty cents in my bank account. I remember standing at a frozen bus stop at 2am thinking, I left everything for this?
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 					{/* MS-05: Chapter 3 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								One more month.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								I knew sales was the way out, so I found a door-to-door solar job and knocked 200 to 400 doors a day. My first month I closed nothing. My mom saw my face on a Zoom call and begged me to come home, and the honest truth is the numbers said she was right. I asked her to give me one more month, and that sentence changed my whole life. The next month I closed five deals. By month four it was thirty, and I finished that summer as the #1 rep out of a hundred, with over $500K in solar sales. My biggest month was twelve grand, and I celebrated it alone in my apartment with day-old rice, because nobody around me would have understood what that number meant.
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 					{/* MS-06: Chapter 4 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								The wall.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								Then I tried to move into online sales, and everything that worked at the door stopped working. I sent 15 to 25 applications a day and recorded thousands of Looms, and half of them I deleted before sending because I heard my own accent and lost my nerve. The rejections that came back all had the same line in them: we're looking for native English speakers. That's when I learned the lesson this whole business is built on. You can be the hardest worker in the room and still lose, if you're in the wrong room.
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 					{/* MS-07: Chapter 5 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								The shift.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								I paid a mentor $3,000 I didn't have, on a credit card, with my hands shaking over the keyboard. And he told me the thing that rewired my brain: stop trying to be the best applicant, because you'll always lose that game. Stop applying and start connecting. So I stopped applying completely. I spent my days having real conversations with real business owners, not pitching anyone, just being useful, and fifty relationships turned into a hundred, then two hundred plus. Opportunities started chasing me instead of the other way around, and by 21 I'd generated over $1.5 million in sales.
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 					{/* MS-08: Chapter 6 */}
// 					<section>
// 						<ScrollReveal>
// 							<h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#B98A2F] mb-6">
// 								What it became.
// 							</h2>
// 							<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 								Somewhere along the way, owners started asking me the same question every week: do you know anyone good? That question turned into The Ascend Path. I've placed over 600 reps so far, we'll cross 1,000 this year, and the whole business still runs on the thing I learned the hard way: the gap between $1K months and $10K months isn't more training. It's knowing the right 20 people.
// 							</p>
// 						</ScrollReveal>
// 					</section>

// 				</article>

// 				{/* MS-09 & MS-10: HOW IT WORKS NOW + SHORT CARDS + PROOF STRIP */}
// 				<section className="mt-32 pt-24 sm:pt-16 border-t border-espresso/10">
// 					<div className="max-w-5xl mx-auto px-6 lg:px-8">
// 						<ScrollReveal>
// 							<div className="text-center mb-16 max-w-3xl mx-auto">
// 								<h2 className="font-serif text-4xl sm:text-5xl font-bold text-espresso mb-6">
// 									How this works today.
// 								</h2>
// 								<p className="text-lg sm:text-xl text-espresso/80 font-medium leading-relaxed text-pretty">
// 									Two doors, same network. If you're a rep, I train you on the four keys of the Inner Room Method until an owner wants you, then I put you in the room, and most reps are placed and earning inside 30 to 45 days. If you're an owner, the Match Method starts with a 30-minute Offer Audit, I match you from a pool of reps I trained myself, and you have someone in seat within 7 to 14 days.
// 								</p>
// 							</div>

// 							{/* Short Cards with MS-10 Door Buttons */}
// 							<div className="grid sm:grid-cols-2 gap-6 mb-24">
// 								<div className="bg-espresso/5 border border-espresso/10 p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center">
// 									<h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Reps</h3>
// 									<Link 
// 										href="/sales-reps"
// 										className="bg-clay text-bone px-8 py-4 rounded-xl font-bold tracking-wide shadow-xl hover:bg-clay/90 transition-all w-full mt-auto"
// 									>
// 										I'm a Rep. Place me
// 									</Link>
// 								</div>

// 								<div className="bg-espresso/5 border border-espresso/10 p-8 sm:p-10 rounded-3xl flex flex-col items-center text-center">
// 									<h3 className="font-serif text-3xl font-bold text-espresso mb-6">For Owners</h3>
// 									<Link 
// 										href="/business-owners"
// 										className="bg-espresso border-2 text-bone px-8 py-4 rounded-xl font-bold tracking-wide hover:bg-espresso/90 transition-all w-full mt-auto"
// 									>
// 										I'm Hiring. Send me Reps
// 									</Link>
// 								</div>
// 							</div>
// 						</ScrollReveal>
// 					</div>

// 					{/* MS-10: Proof Strip from Home Page */}
// 					{/* <div className="border-y border-espresso/90 py-10 relative z-10">
// 						<div className="max-w-7xl mx-auto px-6 lg:px-8">
// 							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-espresso/90">
// 								<div className="flex flex-col items-center justify-center">
// 									<span className="text-3xl md:text-4xl font-serif font-bold text-[#B98A2F] mb-2">600+</span>
// 									<span className="text-sm font-bold text-espresso/80 uppercase tracking-wider">reps placed</span>
// 								</div>
// 								<div className="flex flex-col items-center justify-center">
// 									<span className="text-3xl md:text-4xl font-serif font-bold text-[#B98A2F] mb-2">$1.5M+</span>
// 									<span className="text-sm font-bold text-espresso/80 uppercase tracking-wider text-balance">in sales generated</span>
// 								</div>
// 								<div className="flex flex-col items-center justify-center">
// 									<span className="text-3xl md:text-4xl font-serif font-bold text-[#B98A2F] mb-2">200+</span>
// 									<span className="text-sm font-bold text-espresso/80 uppercase tracking-wider text-balance">owners in my phone</span>
// 								</div>
// 								<div className="flex flex-col items-center justify-center">
// 									<span className="text-3xl md:text-4xl font-serif font-bold text-[#B98A2F] mb-2">30+</span>
// 									<span className="text-sm font-bold text-espresso/80 uppercase tracking-wider">niches hiring</span>
// 								</div>
// 							</div>
// 							<p className="text-center text-xs text-espresso/50 mt-8">
// 								* We'll cross 1,000 placements this year.
// 							</p>
// 						</div>
// 					</div> */}
// 				</section>

// 			</main>

// 			<Footer />
// 		</div>
// 	);
// }






// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import HomepageBentoGrid from "@/components/HomepageBentoGrid";
// import ProcessFeatures from "@/components/ProcessFeatures";
// import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
// import type { Metadata } from "next";


// export const metadata: Metadata = {
// 	title: "The 45-Day Framework",
// 	description: "Learn our proven system that transforms talented but overlooked sales reps into connected professionals who book 10-20 owner meetings in 45 days. Battle-tested framework for real results.",
// };

// export default function Process() {
// 	return (
// 		<div>
// 			<Navbar />

// 			<main>
// 				{/* Bento Grid - Why This Works */}
// 				<HomepageBentoGrid />

// 				{/* Process Features - 45-Day Framework */}
// 				<ProcessFeatures />

// 				{/* FAQ Section */}
// 				<FAQ />

// 				{/* CTA Section */}
// 				<div>
// 					<CTA />
// 				</div>
// 			</main>

// 			<Footer />
// 		</div>
// 	);
// }
