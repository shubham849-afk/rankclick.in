import Link from "next/link";

export const metadata = {
  title: "Contact | Rankclick",
  description:
    "Contact Rankclick to start your digital marketing campaign, SEO strategy, or paid media growth plan.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* 1. Page Heading */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            We're here to help your business grow. Reach out today!
          </p>
        </div>
      </section>

      {/* 2. Contact Form & Details */}
      <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Contact Form */}
        <div className="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-orange-100">
          <h2 className="text-3xl font-semibold text-slate-950">Get Free Consultation</h2>
          <p className="mt-4 text-slate-600">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Your full name"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="block text-sm font-medium text-slate-700">
                Service Required
              </label>
              <select
                id="service"
                name="service"
                required
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-500"
              >
                <option value="">Select a service</option>
                <option value="seo">SEO (Search Engine Optimization)</option>
                <option value="ads">Google Ads / PPC</option>
                <option value="website">Website Design & Development</option>
                <option value="social">Social Media Marketing</option>
                <option value="content">Content Marketing</option>
                <option value="local-seo">Local SEO</option>
                <option value="branding">Digital Branding</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us about your goals and how we can help..."
                className="mt-2 w-full rounded-3xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-orange-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700 shadow-lg shadow-orange-300/50"
            >
              Get Free Consultation
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-10 shadow-lg shadow-orange-100">
            <h3 className="text-2xl font-semibold text-slate-950">Contact Details</h3>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📞
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Phone Number</p>
                  <Link
                    href="tel:+917275817731"
                    className="mt-1 block text-slate-600 hover:text-orange-600 transition"
                  >
                    +91 72758 17731
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📧
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Email Address</p>
                  <Link
                    href="mailto:shubham988.vns@gmail.com"
                    className="mt-1 block text-slate-600 hover:text-orange-600 transition"
                  >
                    shubham988.vns@gmail.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📍
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Office Address</p>
                  <p className="mt-1 text-slate-600">
                    Varanasi, Uttar Pradesh, India<br />
                    Serving businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="rounded-[2rem] border border-slate-200 bg-white px-8 py-8 shadow-lg shadow-orange-100">
            <h3 className="text-xl font-semibold text-slate-950">Business Hours</h3>
            <div className="mt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Monday - Saturday</span>
                <span className="font-medium text-slate-950">10 AM - 7 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Sunday</span>
                <span className="font-medium text-slate-950">Closed</span>
              </div>
            </div>
          </div>

          {/* WhatsApp Button */}
          <div className="rounded-[2rem] bg-green-50 border border-green-200 px-8 py-8 shadow-lg shadow-green-100">
            <div className="text-center">
              <p className="text-lg font-semibold text-green-800">Need instant help?</p>
              <p className="mt-2 text-green-700">Chat with us on WhatsApp for quick responses</p>
              <Link
                href="https://wa.me/917275817731?text=Hi%20Rankclick,%20I%20need%20help%20with%20digital%20marketing"
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
              >
                💬 Chat on WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Google Map Embed */}
      <section className="rounded-[2rem] overflow-hidden shadow-lg shadow-orange-100">
        <iframe
          src="https://www.google.com/maps/embed?mid=R5DjnI9EDkSKXrAev"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Rankclick Office Location"
        ></iframe>
      </section>

      {/* 7. Social Media Links */}
      <section className="rounded-[2rem] bg-slate-50 px-8 py-12 text-center shadow-lg shadow-orange-100">
        <h3 className="text-2xl font-semibold text-slate-950">Follow Us</h3>
        <p className="mt-4 text-slate-600">Stay connected for the latest marketing tips and insights</p>
        <div className="mt-8 flex justify-center gap-6">
          <Link
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition hover:bg-blue-700"
            aria-label="Facebook"
          >
            📘
          </Link>
          <Link
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white transition hover:bg-pink-700"
            aria-label="Instagram"
          >
            📷
          </Link>
          <Link
            href="#"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-white transition hover:bg-blue-800"
            aria-label="LinkedIn"
          >
            💼
          </Link>
        </div>
      </section>

      {/* 8. Call-To-Action */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-16 text-center text-white shadow-lg shadow-orange-300/50">
        <h3 className="text-3xl font-bold">Let's Grow Your Business Together</h3>
        <p className="mt-4 text-lg opacity-90">
          Ready to increase your leads, traffic, and sales? Let's create a winning digital marketing strategy.
        </p>
        <Link
          href="#"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:bg-orange-50"
        >
          Book Free Consultation
        </Link>
      </section>

      {/* 9. FAQ Section */}
      <section className="rounded-[2rem] bg-white px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-center text-3xl font-semibold text-slate-950">Frequently Asked Questions</h3>
          <div className="mt-12 space-y-8">
            <div className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-950">How soon will you respond?</h4>
              <p className="mt-3 text-slate-600">
                We typically respond within 24 hours during business days. For urgent inquiries, feel free to call us directly or message on WhatsApp.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-950">What services do you offer?</h4>
              <p className="mt-3 text-slate-600">
                We specialize in SEO, Google Ads, Social Media Marketing, Website Design & Development, Content Marketing, Local SEO, and Digital Branding for businesses in Varanasi and beyond.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-950">Do you provide free consultation?</h4>
              <p className="mt-3 text-slate-600">
                Yes! We offer a free initial consultation to understand your business goals and discuss how we can help you grow through digital marketing.
              </p>
            </div>

            <div className="border-b border-slate-200 pb-6">
              <h4 className="text-lg font-semibold text-slate-950">Do you work with businesses outside Varanasi?</h4>
              <p className="mt-3 text-slate-600">
                Absolutely! While we're based in Varanasi, we work with businesses across India and internationally, providing remote digital marketing services.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-950">What's your typical project timeline?</h4>
              <p className="mt-3 text-slate-600">
                Project timelines vary depending on the service. SEO campaigns typically show results in 3-6 months, while website development can be completed in 2-4 weeks. We'll provide a clear timeline during our consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
