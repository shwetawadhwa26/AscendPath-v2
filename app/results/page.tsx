import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { TestimonialsV3 } from "@/components/Testimonials/TestimonialsV3";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Results & Testimonials",
	description: "See real results from ambitious sales reps and freelancers who went from $1-2K/month to $5-10K/month opportunities. Watch video testimonials and hear success stories from The Ascend Path community.",
};

export default function Results() {
	return (
		<div >
			<Navbar />

			<main className="pt-12 sm:pt-16">
				{/* Stats Section */}
				<Stats />

				{/* Testimonials Section */}
				<TestimonialsV3 />

				{/* CTA Section */}
				<div className="mt-32 sm:mt-40">
					<CTA />
				</div>
			</main>

			<Footer />
		</div>
	);
}
