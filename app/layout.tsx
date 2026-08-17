import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { CSPostHogProvider } from "@/components/PostHogProvider"; 
import "./globals.css";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: {
    icon: "https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/3fcf1a87-adcc-4fcf-630f-c6f63e35cd00/public",
    apple: "https://imagedelivery.net/LtFu_2qdyYBevDjSRi4ZEg/3fcf1a87-adcc-4fcf-630f-c6f63e35cd00/public",
  },
  metadataBase: new URL('https://theascendpath.com'),
  title: {
    default: "The Ascend Path | From Invisible to Unstoppable",
    template: "%s | The Ascend Path"
  },
  description: "Turn your talent into $5-10K/month opportunities. Join ambitious sales reps and freelancers who went from invisible to unstoppable through genuine connections and proven frameworks.",
  keywords: ["sales coaching", "freelance success", "network building", "high-ticket sales", "sales training", "freelancer growth", "business connections", "sales mentorship"],
  authors: [{ name: "Harry" }],
  creator: "Harry",
  publisher: "The Ascend Path",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://theascendpath.com",
    siteName: "The Ascend Path",
    title: "The Ascend Path | From Invisible to Unstoppable",
    description: "Turn your talent into $5-10K/month opportunities through genuine connections and proven frameworks.",
    // NEW: This is what generates the massive link preview image!
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "The Ascend Path - From Invisible to Unstoppable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ascend Path | From Invisible to Unstoppable",
    description: "Turn your talent into $5-10K/month opportunities through genuine connections and proven frameworks.",
    // NEW: Ensures the image shows up on Twitter/X as well
    images: ["/og-image.jpg"], 
  },
  verification: {
    google: '',
  },
};
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//         <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />
//       </body>
//     </html>
//   );
// }


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bone text-espresso dark:bg-espresso dark:text-bone`}
      >
        {/* 2. Wrap your children in the PostHog Provider! */}
        <CSPostHogProvider>
            {children}
        </CSPostHogProvider>
        
        <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-bone text-espresso dark:bg-espresso dark:text-bone`}
//       >
//         {children}
//         <Script src="https://app.iclosed.io/assets/widget.js" strategy="lazyOnload" />
//       </body>
//     </html>
//   );
// }
