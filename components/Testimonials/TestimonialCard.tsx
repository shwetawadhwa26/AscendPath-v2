// import { StarIcon } from "@heroicons/react/20/solid";
// import { clsx } from "clsx";

// // These props map perfectly to your Prisma Testimonial model!
// interface TestimonialCardProps {
//   name: string;
//   title: string;
//   quote: string;
//   tier?: string | null; // e.g., "$68K YTD (VS $0 PRIOR YEAR)"
//   className?: string;
// }

// export default function TestimonialCard({
//   name,
//   title,
//   quote,
//   tier,
//   className,
// }: TestimonialCardProps) {
//   return (
//     <div
//       className={clsx(
//         className,
//         // The card background is forced white for that clean, premium contrast 
//         // with a subtle taupe border and shadow.
//         "flex flex-col h-full rounded-3xl p-8 shadow-sm ring-1 ring-taupe/20 width-200px"
//       )}
//     >
//       {/* 5-Star Rating (Using the Clay accent color) */}
//       {/* <div className="flex gap-1 mb-6">
//         {[...Array(5)].map((_, i) => (
//           <StarIcon key={i} className="h-6 w-6 text-clay" aria-hidden="true" />
//         ))}
//       </div> */}

//       {/* The Main Quote (@db.Text in our schema) */}
//       <p className="text-xl md:text-2xl font-medium text-espresso mb-8 leading-snug text-pretty">
//         "{quote}"
//       </p>

//       {/* Bottom Section (Pushed to the bottom evenly using mt-auto) */}
//       <div className="mt-auto pt-6 border-t border-taupe/20">
        
//         {/* The Highlight Tag (Only renders if 'tier' data exists) */}
//         {tier && (
//           <div className="inline-block bg-clay/10 text-clay font-bold text-sm tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
//             {tier}
//           </div>
//         )}

//         {/* Author Info */}
//         <div>
//           <div className="font-bold text-espresso text-lg">{name}</div>
//           <div className="text-taupe text-sm">{title}</div>
//         </div>
//       </div>
//     </div>
//   );
// }