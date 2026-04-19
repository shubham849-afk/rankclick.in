import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const headerServices = [
  { title: "Digital Marketing Strategy", href: "/services/digital-marketing-strategy" },
  { title: "Search Engine Optimisation", href: "/services/seo" },
  { title: "Social Media Marketing", href: "/services/social-media-marketing" },
  { title: "Web Development", href: "/services/web-development" },
  { title: "Web Design", href: "/services/web-design" },
  { title: "Mobile App Development", href: "/services/mobile-app-development" },
  { title: "Google Ads Management", href: "/services/google-ads" },
  { title: "Content Marketing", href: "/services/content-marketing" },
  { title: "Digital Branding", href: "/services/digital-branding" },
  { title: "YouTube Promotion", href: "/services/youtube-promotion" },
];

export const metadata: Metadata = {
  title: "Rankclick | Digital Marketing Agency",
  description:
    "Rankclick delivers SEO-friendly digital marketing, PPC campaigns, and creative growth strategies for ambitious businesses.",
  keywords: ["digital marketing", "SEO", "PPC", "content marketing", "brand growth", "Rankclick"],
  openGraph: {
    title: "Rankclick | Digital Marketing Agency",
    description:
      "Creative and performance-driven digital marketing solutions for brands that want to grow online.",
    url: "https://clickrank.in",
    siteName: "Rankclick",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#fffaf2] text-slate-950">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 py-4 sm:px-8">
          <header className="mb-10 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-slate-200 bg-white px-6 py-5 shadow-lg shadow-slate-200/50 sm:px-8">
            <Link href="/" className="text-2xl font-extrabold tracking-tight text-slate-950">
              <span className="text-orange-600">Rank</span>click
            </Link>
            <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 sm:gap-6">
              <Link href="/" className="transition hover:text-slate-950">
                Home
              </Link>
              <div className="relative group">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 transition hover:text-slate-950"
                >
                  Services
                  <span className="text-xs text-orange-500">▾</span>
                </Link>

                <div className="absolute left-0 top-full z-50 mt-3 hidden w-72 rounded-[1.75rem] border border-slate-200 bg-white p-4 shadow-[0_20px_60px_rgba(15,23,42,0.12)] group-hover:block">
                  <div className="grid gap-2">
                    {headerServices.map((service) => (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="block rounded-3xl px-4 py-3 text-sm text-slate-700 transition hover:bg-orange-50 hover:text-orange-600"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/about" className="transition hover:text-slate-950">
                About
              </Link>
              <Link href="/blog" className="transition hover:text-slate-950">
                Blog
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-orange-300/50 transition hover:bg-orange-600"
              >
                Contact
              </Link>
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
