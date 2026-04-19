import Link from "next/link";

const services = [
  {
    title: "SEO (Search Engine Optimization)",
    description: "Rank higher on Google and attract customers actively searching for your services. Local and national SEO strategies that drive organic traffic.",
    icon: "🔍",
  },
  {
    title: "Social Media Marketing",
    description: "Build strong presence on Facebook, Instagram, YouTube, and LinkedIn. Engage customers, increase followers, and drive conversions through social campaigns.",
    icon: "📱",
  },
  {
    title: "Google Ads / PPC",
    description: "Get immediate results with performance-driven Google Ads campaigns. Pay only for qualified clicks and leads. Expert bid management and optimization.",
    icon: "📊",
  },
  {
    title: "Website Design & Development",
    description: "Professional, fast-loading, mobile-responsive websites that convert visitors into customers. Custom design with SEO-friendly code structure.",
    icon: "💻",
  },
  {
    title: "Local SEO / GMB Optimization",
    description: "Dominate local search results and Google Maps. Get more foot traffic and local customers with optimized Google Business Profile and local citations.",
    icon: "📍",
  },
  {
    title: "Content Marketing",
    description: "Create valuable blog posts, videos, and content that attract and educate your audience. Establish authority and build trust in your industry.",
    icon: "📝",
  },
];

const successStories = [
  {
    name: "E-Commerce Store",
    category: "Fashion & Apparel",
    icon: "📦",
    metric: "340%",
    label: "sales growth in 6 months",
    description: "Google Ads + SEO optimization brought 2,400+ new customers with 18% conversion rate.",
    testimonial: "Rankclick understood our target market perfectly. Our ROI went from 2x to 8x."
  },
  {
    name: "Real Estate Agency",
    category: "Property Sales",
    icon: "🏠",
    metric: "156",
    label: "qualified leads per month",
    description: "SEO strategy increased property inquiry calls by 280% with geo-targeted local optimization.",
    testimonial: "They delivered results faster than we expected. Our sales team loves the quality leads."
  },
  {
    name: "Restaurant Chain",
    category: "Food & Hospitality",
    icon: "🍽️",
    metric: "520%",
    label: "online orders growth",
    description: "Social media + local SEO strategy made them the #1 rated restaurant in Varanasi.",
    testimonial: "Best investment we made. Their social media strategy built our brand awareness massively."
  },
  {
    name: "Digital Marketing Agency",
    category: "B2B Services",
    icon: "💼",
    metric: "89",
    label: "high-value clients acquired",
    description: "Content marketing + LinkedIn strategy positioned them as industry leaders with 45% contract value increase.",
    testimonial: "They positioned us perfectly. Now we're getting premium clients without competing on price."
  },
  {
    name: "Education Institute",
    category: "Coaching Academy",
    icon: "📚",
    metric: "450+",
    label: "student enrollments",
    description: "YouTube + Google Ads strategy made them the most searched coaching institute with 65% enrollment boost.",
    testimonial: "Their YouTube strategy changed our student acquisition game completely."
  },
  {
    name: "Medical Clinic",
    category: "Healthcare Services",
    icon: "🩺",
    metric: "280%",
    label: "appointment bookings",
    description: "Local SEO + reputation management increased patient bookings with 92% online source attribution.",
    testimonial: "Trustworthy team. They're transparent and deliver measurable healthcare patient growth."
  },
];

const processSteps = [
  {
    step: "1",
    title: "Analysis",
    description: "Deep dive into your business, competitors, market, and goals. We analyze data and identify opportunities.",
  },
  {
    step: "2",
    title: "Strategy",
    description: "Create a custom digital marketing roadmap tailored to your business. Clear action plan with timelines and KPIs.",
  },
  {
    step: "3",
    title: "Execution",
    description: "Implement campaigns across SEO, ads, social media, and content. Monitoring and daily optimization for best results.",
  },
  {
    step: "4",
    title: "Results",
    description: "Monthly reports showing traffic, leads, sales, and ROI. Continuous improvement and strategy refinement.",
  },
];

export default function Home() {
  return (
    <main className="pb-24">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-[#fff7ef] py-20 sm:py-28 min-h-screen">
        <div className="absolute inset-x-0 top-0 h-60 bg-orange-200/30 blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex rounded-full bg-orange-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-orange-600">
                Digital marketing agency
              </span>
              <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                Grow Your Business with Result-Driven Digital Marketing
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                SEO | Social Media | Google Ads | Website Development | Local SEO | Content Marketing
              </p>
              <p className="max-w-3xl text-base leading-8 text-slate-600">
                Rankclick helps Varanasi businesses attract more customers, generate quality leads, and increase revenue with proven digital marketing strategies.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-700 shadow-lg shadow-orange-300/50"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="tel:+917275817731"
                  className="inline-flex items-center justify-center rounded-full border border-orange-200 bg-white px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-orange-50"
                >
                  📞 Call Now
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-semibold text-slate-950">150+</p>
                  <p className="mt-2 text-sm text-slate-500">Successful campaigns</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-semibold text-slate-950">28%</p>
                  <p className="mt-2 text-sm text-slate-500">Avg. conversion lift</p>
                </div>
                <div className="rounded-3xl bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="text-3xl font-semibold text-slate-950">5x</p>
                  <p className="mt-2 text-sm text-slate-500">ROI growth</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-orange-200/30">
              <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Most requested services</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-3xl bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-950">SEO Strategy</p>
                  <p className="mt-2 text-sm text-slate-600">Rank higher for local search and attract ready-to-buy customers.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-950">Google Ads</p>
                  <p className="mt-2 text-sm text-slate-600">Get more leads fast with performance-driven PPC campaigns.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 px-5 py-4">
                  <p className="font-semibold text-slate-950">Social Media</p>
                  <p className="mt-2 text-sm text-slate-600">Build brand awareness across Facebook, Instagram and YouTube.</p>
                </div>
              </div>
              <div className="mt-8 rounded-[1.75rem] bg-orange-50 p-6 text-slate-950">
                <p className="text-sm uppercase tracking-[0.28em] text-orange-600">Ready to grow?</p>
                <p className="mt-3 text-lg font-semibold">Book Your Free Strategy Call Today</p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700"
                >
                  Start Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="mt-16 rounded-[2rem] bg-white px-6 py-14 shadow-lg shadow-orange-100 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Our Services</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Complete Digital Marketing Solutions for Varanasi Businesses</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                From SEO to social media, we offer comprehensive digital marketing services designed to help your business grow and compete online.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-orange-50/50 to-white p-6 shadow-sm shadow-slate-200 hover:shadow-md transition">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg font-semibold text-slate-950">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-700"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ABOUT US */}
      <section className="mt-16 rounded-[2rem] bg-slate-50 px-6 py-14 shadow-sm shadow-slate-200 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">About Rankclick</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
                We Grow Varanasi Brands with Smarter Digital Marketing
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Rankclick is a local digital marketing agency helping Varanasi businesses attract more customers, increase visibility, and improve online sales. With 5+ years of experience and 150+ successful campaigns, we deliver measurable results for small businesses, e-commerce stores, service providers, and agencies.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 max-w-2xl">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                <p className="text-lg font-semibold text-slate-950">5+ Years Experience</p>
                <p className="mt-3 text-sm text-slate-600">Proven track record of delivering digital marketing success for local Varanasi businesses.</p>
              </div>
              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                <p className="text-lg font-semibold text-slate-950">Local Market Expert</p>
                <p className="mt-3 text-sm text-slate-600">We understand Varanasi's unique market dynamics, customer behavior, and competition.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="mt-16 rounded-[2rem] bg-white px-6 py-14 shadow-lg shadow-orange-100/40 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Why Choose Rankclick</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Why Varanasi Businesses Trust Us</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🧠</span>
                  <div>
                    <p className="font-semibold text-slate-950">Experienced Team</p>
                    <p className="mt-2 text-sm text-slate-600">Expert digital marketers with years of experience across all channels.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📈</span>
                  <div>
                    <p className="font-semibold text-slate-950">Proven Results</p>
                    <p className="mt-2 text-sm text-slate-600">150+ campaigns with 5x average ROI growth and measurable business impact.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">💰</span>
                  <div>
                    <p className="font-semibold text-slate-950">Affordable Pricing</p>
                    <p className="mt-2 text-sm text-slate-600">Transparent pricing with no hidden fees. Custom packages for all budgets.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">⏰</span>
                  <div>
                    <p className="font-semibold text-slate-950">24/7 Support</p>
                    <p className="mt-2 text-sm text-slate-600">Always available to answer questions and provide campaign updates.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <p className="font-semibold text-slate-950">Custom Strategy</p>
                    <p className="mt-2 text-sm text-slate-600">Personalized marketing plans tailored to your specific business goals and budget.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.75rem] border border-orange-200 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">📋</span>
                  <div>
                    <p className="font-semibold text-slate-950">Transparent Reporting</p>
                    <p className="mt-2 text-sm text-slate-600">Monthly detailed reports showing traffic, leads, conversions, and ROI.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO / CASE STUDIES */}
      <section className="mt-16 rounded-[2rem] bg-white px-6 py-14 shadow-lg shadow-orange-100/40 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Portfolio & Case Studies</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Real Results from Varanasi Businesses We've Grown</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                See how local brands increased leads, revenue, and market visibility through our proven digital marketing strategies.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {successStories.map((story, index) => (
                <div key={index} className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-orange-50 to-white p-6 shadow-sm shadow-slate-200">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-lg font-semibold text-slate-950">{story.name}</p>
                      <p className="mt-1 text-sm text-slate-600">{story.category}</p>
                    </div>
                    <span className="text-2xl">{story.icon}</span>
                  </div>
                  <div className="mt-4 space-y-2 border-t border-slate-200 pt-4">
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-bold text-orange-600">{story.metric}</p>
                      <p className="text-sm text-slate-600">{story.label}</p>
                    </div>
                    <p className="text-sm text-slate-600">{story.description}</p>
                  </div>
                  <p className="mt-4 text-xs italic text-slate-500">"{story.testimonial}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLIENT TESTIMONIALS */}
      <section className="mt-16 rounded-[2rem] bg-slate-50 px-6 py-14 shadow-sm shadow-slate-200 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Client Testimonials</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">What Our Clients Say About Us</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                <p className="text-lg text-slate-700">"Rankclick understood our target market perfectly. Our ROI went from 2x to 8x."</p>
                <p className="mt-4 font-semibold text-slate-950">E-Commerce Store Owner</p>
                <p className="text-sm text-slate-600">Fashion & Apparel Business</p>
              </div>

              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                <p className="text-lg text-slate-700">"They delivered results faster than we expected. Our sales team loves the quality leads."</p>
                <p className="mt-4 font-semibold text-slate-950">Real Estate Broker</p>
                <p className="text-sm text-slate-600">Property Sales Agency</p>
              </div>

              <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                <p className="text-lg text-slate-700">"Best investment we made. Their social media strategy built our brand awareness massively."</p>
                <p className="mt-4 font-semibold text-slate-950">Restaurant Manager</p>
                <p className="text-sm text-slate-600">Food & Hospitality Business</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESULTS / STATS SECTION */}
      <section className="mt-16 rounded-[2rem] bg-slate-950 px-6 py-16 text-white sm:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-300">Our Impact</p>
            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">Results That Speak for Themselves</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400">100+</p>
              <p className="mt-3 text-slate-300">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400">500+</p>
              <p className="mt-3 text-slate-300">Projects Completed</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400">1M+</p>
              <p className="mt-3 text-slate-300">Traffic Generated</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-orange-400">5+</p>
              <p className="mt-3 text-slate-300">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PROCESS SECTION */}
      <section className="mt-16 rounded-[2rem] bg-white px-6 py-14 shadow-lg shadow-orange-100 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">How We Work</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Our 4-Step Digital Marketing Process</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                We follow a proven process to deliver results for your business.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item, index) => (
                <div key={index} className="rounded-[1.75rem] border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION */}
      <section className="mt-16 rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-500 px-6 py-14 text-white shadow-lg shadow-orange-300/40 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold sm:text-5xl">Ready to Grow Your Business?</h2>
          <p className="mt-5 text-lg leading-8 text-orange-100">
            Stop wasting money on ineffective marketing. Let us show you how to reach more customers, generate quality leads, and grow your Varanasi business profitably.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-orange-600 transition hover:bg-orange-50"
            >
              Book Free Consultation
            </Link>
            <Link
              href="https://wa.me/917275817731"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10"
            >
              💬 Message on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* 10. CONTACT SECTION */}
      <section className="mt-16 rounded-[2rem] bg-slate-50 px-6 py-14 shadow-sm shadow-slate-200 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Get in Touch</p>
                <h2 className="mt-4 text-3xl font-semibold text-slate-950 sm:text-4xl">Contact Rankclick</h2>
                <p className="mt-3 text-slate-600">Have questions? We're here to help. Reach out to us through any of these channels.</p>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="font-semibold text-slate-950">📧 Email</p>
                  <p className="mt-2 text-slate-600">shubham988.vns@gmail.com</p>
                </div>
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="font-semibold text-slate-950">📞 Phone</p>
                  <p className="mt-2 text-slate-600">+91 72758 17731</p>
                  <Link href="tel:+917275817731" className="mt-3 inline-flex items-center gap-2 text-orange-600 hover:text-orange-700">
                    📞 Call Now
                  </Link>
                </div>
                <div className="rounded-[1.75rem] bg-white p-6 shadow-sm shadow-slate-200">
                  <p className="font-semibold text-slate-950">💬 WhatsApp</p>
                  <p className="mt-2 text-slate-600">Chat with us on WhatsApp for quick responses</p>
                  <Link href="https://wa.me/917275817731" target="_blank" className="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-700">
                    💬 Open WhatsApp
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white px-8 py-10 shadow-lg shadow-orange-100">
              <h3 className="text-3xl font-semibold text-slate-950">Get Free Consultation</h3>
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
          </div>
        </div>
      </section>

      {/* 11. BLOG / INSIGHTS (Optional - Can be added later) */}
      <section className="mt-16 rounded-[2rem] bg-white px-6 py-14 shadow-lg shadow-orange-100 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="space-y-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Blog & Insights</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Latest Marketing Tips & Insights</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                Stay updated with the latest digital marketing trends, SEO tips, and strategies to grow your business.
              </p>
            </div>

            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-base font-semibold text-white transition hover:bg-orange-700"
              >
                Read Our Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
