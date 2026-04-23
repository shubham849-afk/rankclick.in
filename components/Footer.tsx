import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 rounded-[2rem] bg-slate-950 px-6 py-10 text-sm text-slate-200 shadow-sm shadow-slate-900/20 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr_0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-2xl font-bold text-white">Rankclick</p>
          <p className="max-w-lg text-slate-300">
            SEO-friendly digital marketing, branding, and website growth services for businesses that want more traffic, leads, and revenue.
          </p>
          <div className="space-y-2 text-sm text-slate-400">
            <p>Email: shubham988.vns@gmail.com</p>
            <p>Phone: +91 72758 17731</p>
            <p>
              Address: Varanasi, Uttar Pradesh, India{" "}
              <Link
                href="https://share.google/R5DjnI9EDkSKXrAev"
                target="_blank"
                className="text-orange-400 hover:text-orange-300 transition"
                aria-label="View location on Google Maps"
              >
                📍 Map
              </Link>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Explore</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <Link href="/about" className="transition hover:text-white">
              About
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Services</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <Link href="/services" className="transition hover:text-white">
              SEO Optimization
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Google Ads / PPC
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Social Media Marketing
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Website Development
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Local SEO
            </Link>
            <Link href="/services" className="transition hover:text-white">
              Content Marketing
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">Start a project</p>
          <p className="mt-4 text-slate-300">
            Ready to grow your brand with smarter marketing, SEO, and paid campaigns? Let’s connect.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Contact us
          </Link>
        </div>
      </div>

      <p className="mt-10 border-t border-slate-800 pt-6 text-xs text-slate-500">
        © {year} Rankclick. Built for clickrank.in.
      </p>
    </footer>
  );
}
