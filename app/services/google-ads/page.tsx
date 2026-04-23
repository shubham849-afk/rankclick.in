export const metadata = {
  title: "Google Ads Management | PPC Advertising | Rankclick",
  description: "Expert Google Ads management services. Maximize ROI with strategic PPC campaigns, keyword optimization, and conversion-focused advertising across search, display, and shopping.",
};

export default function GoogleAdsPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            📈 Google Ads Management
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Maximize ROI with Expert PPC Management
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Strategic Google Ads campaigns that drive qualified traffic, increase conversions, and deliver measurable ROI. From keyword research to bid optimization, we handle every aspect of your PPC success.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start PPC Campaign
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* What is Google Ads */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Why Google Ads Matters for Your Business</h2>
          <p className="mt-6 text-lg text-slate-600">
            Google Ads (formerly Google AdWords) is the most powerful advertising platform in the world, reaching over 90% of internet users. When someone searches for products or services related to your business, you have the opportunity to appear at the top of those search results.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Effective Google Ads management combines strategic keyword targeting, compelling ad copy, and continuous optimization to drive qualified traffic that converts into paying customers.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🎯
              </div>
              <h3 className="font-semibold text-slate-950">Immediate Results</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Start driving traffic and sales within hours of campaign launch.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📊
              </div>
              <h3 className="font-semibold text-slate-950">Precise Targeting</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Reach customers based on search intent, location, demographics, and interests.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                💰
              </div>
              <h3 className="font-semibold text-slate-950">Measurable ROI</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Track every click, conversion, and dollar spent with detailed analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Google Ads Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive PPC management across all Google Ads campaign types.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔍
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Search Campaigns</h3>
              <p className="mt-2 text-slate-600">
                Text ads that appear when people search for your keywords on Google and partner sites.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Display Campaigns</h3>
              <p className="mt-2 text-slate-600">
                Visual banner ads that appear across Google's display network of millions of websites.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🛒
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Shopping Campaigns</h3>
              <p className="mt-2 text-slate-600">
                Product listings with images, prices, and promotions for e-commerce businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ▶️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Video Campaigns</h3>
              <p className="mt-2 text-slate-600">
                Ads on YouTube and across Google's video partner sites for maximum reach.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📍
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Local Campaigns</h3>
              <p className="mt-2 text-slate-600">
                Location-based ads that drive foot traffic to physical business locations.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Remarketing</h3>
              <p className="mt-2 text-slate-600">
                Target previous website visitors with personalized ads to increase conversions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our PPC Management Process</h2>
            <p className="mt-4 text-lg text-slate-600">
              A systematic approach to Google Ads that maximizes performance and ROI.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Strategy & Research</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive keyword research, competitor analysis, and campaign strategy development.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Campaign Setup</h3>
              <p className="mt-2 text-slate-600">
                Professional account setup, ad creation, and initial optimization for maximum performance.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Optimization</h3>
              <p className="mt-2 text-slate-600">
                Continuous monitoring, A/B testing, bid adjustments, and performance optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Reporting & Scaling</h3>
              <p className="mt-2 text-slate-600">
                Detailed performance reports and strategic scaling to maximize ROI and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Why Choose Rankclick for Google Ads?</h2>
            <p className="mt-4 text-lg opacity-90">
              Certified Google Ads experts with a track record of delivering exceptional results.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Google Ads Certified</h3>
              <p className="mt-2 opacity-90">
                Certified professionals with extensive experience managing millions in ad spend.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Data-Driven Approach</h3>
              <p className="mt-2 opacity-90">
                Every decision backed by analytics, testing, and performance data.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Transparent Reporting</h3>
              <p className="mt-2 opacity-90">
                Real-time access to campaign performance and detailed monthly reports.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">ROI Focused</h3>
              <p className="mt-2 opacity-90">
                Strategies designed to maximize conversions and return on ad spend.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Continuous Optimization</h3>
              <p className="mt-2 opacity-90">
                Daily monitoring and weekly optimizations to improve campaign performance.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Proven Results</h3>
              <p className="mt-2 opacity-90">
                Average 300%+ ROI improvement for our clients across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Supercharge Your Advertising ROI?</h2>
        <p className="mt-4 text-lg opacity-90">
          Get a free Google Ads audit and discover how we can help you achieve better results with less spend.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Get Free Ads Audit
          </a>
          <a
            href="tel:+917275817731"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-lg font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Call +91 72758 17731
          </a>
        </div>
      </section>
    </main>
  );
}