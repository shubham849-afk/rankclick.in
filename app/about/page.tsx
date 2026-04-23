import Link from "next/link";

export const metadata = {
  title: "About | Rankclick",
  description:
    "Learn about Rankclick, a results-driven digital marketing agency helping Varanasi businesses grow online with proven SEO, PPC, and social media strategies.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* 1. Heading + Intro */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            We are a results-driven digital marketing agency helping businesses grow online with proven strategies.
          </p>
        </div>
      </section>

      {/* 2. Your Story */}
      <section className="rounded-[2rem] bg-white px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-950 text-center">Our Story</h2>
          <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600">
            <p>
              Rankclick started with a simple observation: many local businesses in Varanasi were struggling to compete online despite having great products and services.
            </p>
            <p>
              We saw that traditional marketing methods weren't enough in today's digital world. Businesses needed smart, affordable digital strategies to reach customers who were searching online.
            </p>
            <p>
              That's why we started Rankclick - to bridge the gap between local businesses and digital success. We combine our deep understanding of the Varanasi market with proven digital marketing techniques to help businesses grow their online presence and attract more customers.
            </p>
            <p>
              Today, we're proud to have helped over 100 local businesses increase their visibility, generate more leads, and grow their revenue through strategic digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-slate-200 bg-orange-50 px-8 py-12 shadow-lg shadow-orange-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white">
              🎯
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">Our Mission</h3>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            To help local businesses in Varanasi and across India grow through smart, affordable digital marketing strategies that deliver real results.
          </p>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 px-8 py-12 shadow-lg shadow-orange-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white">
              🔭
            </div>
            <h3 className="text-2xl font-semibold text-slate-950">Our Vision</h3>
          </div>
          <p className="text-lg leading-8 text-slate-700">
            To become the most trusted digital marketing partner for businesses across India, empowering them to thrive in the digital economy.
          </p>
        </div>
      </section>

      {/* 4. What You Do */}
      <section className="rounded-[2rem] bg-white px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-950 text-center">What We Do</h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            We specialize in comprehensive digital marketing solutions tailored for Indian businesses
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  🔍
                </div>
                <h4 className="text-lg font-semibold text-slate-950">SEO</h4>
              </div>
              <p className="text-slate-600">
                Optimize your website to rank higher on Google and attract organic traffic from potential customers.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📱
                </div>
                <h4 className="text-lg font-semibold text-slate-950">Social Media Marketing</h4>
              </div>
              <p className="text-slate-600">
                Build brand awareness and engage with customers on Facebook, Instagram, and other social platforms.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📊
                </div>
                <h4 className="text-lg font-semibold text-slate-950">Google Ads</h4>
              </div>
              <p className="text-slate-600">
                Run targeted pay-per-click campaigns to get immediate leads and sales from interested customers.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  💻
                </div>
                <h4 className="text-lg font-semibold text-slate-950">Website Development</h4>
              </div>
              <p className="text-slate-600">
                Create modern, mobile-friendly websites that convert visitors into customers.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📍
                </div>
                <h4 className="text-lg font-semibold text-slate-950">Local SEO</h4>
              </div>
              <p className="text-slate-600">
                Optimize your Google My Business and local search presence to attract nearby customers.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  📝
                </div>
                <h4 className="text-lg font-semibold text-slate-950">Content Marketing</h4>
              </div>
              <p className="text-slate-600">
                Create valuable content that establishes your expertise and attracts potential customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="rounded-[2rem] bg-slate-50 px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-950 text-center">Why Choose Us</h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            What sets Rankclick apart from other digital marketing agencies
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  📈
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Result-Oriented Work</h4>
              <p className="text-slate-600">
                We focus on measurable outcomes - more traffic, leads, and sales for your business.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  💰
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Affordable Pricing</h4>
              <p className="text-slate-600">
                Quality digital marketing shouldn't be expensive. We offer competitive rates for Indian businesses.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  👥
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Experienced Team</h4>
              <p className="text-slate-600">
                Our team has 3+ years of experience in digital marketing and understands the Indian market.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  ⚡
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Fast Support</h4>
              <p className="text-slate-600">
                Quick response times and dedicated account management for all our clients.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  🎯
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Custom Strategy</h4>
              <p className="text-slate-600">
                Every business is unique. We create tailored strategies based on your specific goals and budget.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 text-xl">
                  📍
                </div>
              </div>
              <h4 className="text-lg font-semibold text-slate-950 mb-3">Local Expertise</h4>
              <p className="text-slate-600">
                Deep understanding of the Varanasi and Indian market, with local SEO and cultural insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Achievements / Stats */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-16 text-center text-white shadow-lg shadow-orange-300/50">
        <h2 className="text-3xl font-bold mb-12">Our Achievements</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-2">
            <p className="text-4xl font-bold">100+</p>
            <p className="text-lg opacity-90">Clients Served</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">300+</p>
            <p className="text-lg opacity-90">Projects Completed</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">3+</p>
            <p className="text-lg opacity-90">Years Experience</p>
          </div>
          <div className="space-y-2">
            <p className="text-4xl font-bold">90%</p>
            <p className="text-lg opacity-90">Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* 7. Team Section */}
      <section className="rounded-[2rem] bg-white px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-950 text-center">Meet Our Team</h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            The passionate professionals behind Rankclick's success
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-4xl mb-4">
                👨‍💼
              </div>
              <h4 className="text-lg font-semibold text-slate-950">Shubham</h4>
              <p className="text-orange-600 font-medium">Founder & CEO</p>
              <p className="mt-2 text-slate-600">
                Digital marketing strategist with 3+ years of experience helping businesses grow online.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-4xl mb-4">
                👩‍💻
              </div>
              <h4 className="text-lg font-semibold text-slate-950">Marketing Team</h4>
              <p className="text-orange-600 font-medium">Digital Marketing Experts</p>
              <p className="mt-2 text-slate-600">
                Skilled professionals handling SEO, PPC campaigns, and social media management.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-32 w-32 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-4xl mb-4">
                🎨
              </div>
              <h4 className="text-lg font-semibold text-slate-950">Design Team</h4>
              <p className="text-orange-600 font-medium">Creative Designers</p>
              <p className="mt-2 text-slate-600">
                Talented designers creating stunning websites and marketing materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Client Testimonials */}
      <section className="rounded-[2rem] bg-slate-50 px-8 py-12 shadow-lg shadow-orange-100">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-semibold text-slate-950 text-center">What Our Clients Say</h2>
          <p className="mt-4 text-center text-lg text-slate-600">
            Real feedback from businesses we've helped grow
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Rankclick transformed our online presence completely. Our website traffic increased by 300% and we're getting more leads than ever before."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  🏪
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Rajesh Kumar</p>
                  <p className="text-sm text-slate-600">Fashion Store Owner</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "The team at Rankclick really understands local SEO. Our Google My Business ranking improved significantly and we're getting more local customers."
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  🍽️
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Priya Singh</p>
                  <p className="text-sm text-slate-600">Restaurant Owner</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm shadow-slate-200">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400">⭐</span>
                ))}
              </div>
              <p className="text-slate-600 mb-4">
                "Affordable pricing and excellent results. Our ROI from Google Ads campaigns has been outstanding. Highly recommend Rankclick!"
              </p>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center">
                  🏥
                </div>
                <div>
                  <p className="font-semibold text-slate-950">Dr. Amit Sharma</p>
                  <p className="text-sm text-slate-600">Medical Practice</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call-To-Action */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-16 text-center text-white shadow-lg shadow-orange-300/50">
        <h2 className="text-3xl font-bold">Let's Grow Your Business Together</h2>
        <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
          Ready to take your business to the next level? Let's discuss how we can help you achieve your digital marketing goals.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:bg-orange-50 shadow-lg shadow-orange-300/50"
          >
            Get Free Consultation
          </Link>
          <Link
            href="https://wa.me/917275817731?text=Hi%20Rankclick,%20I%20want%20to%20know%20more%20about%20your%20services"
            target="_blank"
            className="inline-flex items-center gap-2 justify-center rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10"
          >
            💬 Chat on WhatsApp
          </Link>
        </div>
      </section>
    </main>
  );
}
