export const metadata = {
  title: "Digital Marketing Strategy | Rankclick",
  description: "Build a comprehensive digital marketing strategy that drives growth. We create goal-driven plans combining SEO, social media, PPC, and conversion optimization for measurable results.",
};

export default function DigitalMarketingStrategyPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            🧭 Digital Marketing Strategy
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Strategic Digital Marketing That Drives Real Growth
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            We create comprehensive, goal-driven marketing strategies that combine SEO, social media, PPC, and conversion optimization to deliver measurable business results.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Get Strategy Consultation
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

      {/* What We Do */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">What is Digital Marketing Strategy?</h2>
          <p className="mt-6 text-lg text-slate-600">
            A digital marketing strategy is a comprehensive plan that outlines how your business will use digital channels to achieve specific marketing goals. It combines various tactics like SEO, social media, PPC advertising, content marketing, and email marketing into a cohesive approach that drives traffic, leads, and sales.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            At Rankclick, we don't just implement tactics—we build strategic frameworks that align with your business objectives and deliver sustainable growth.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🎯
              </div>
              <h3 className="font-semibold text-slate-950">Goal-Oriented Approach</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Every strategy starts with clear, measurable objectives aligned with your business goals.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📊
              </div>
              <h3 className="font-semibold text-slate-950">Data-Driven Decisions</h3>
            </div>
            <p className="mt-3 text-slate-600">
              We use analytics and market research to inform every strategic decision we make.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🔄
              </div>
              <h3 className="font-semibold text-slate-950">Integrated Channels</h3>
            </div>
            <p className="mt-3 text-slate-600">
              All digital channels work together seamlessly for maximum impact and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Benefits of a Strategic Approach</h2>
            <p className="mt-4 text-lg text-slate-600">
              A well-crafted digital marketing strategy delivers measurable results across all business metrics.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📈
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Increased Revenue</h3>
              <p className="mt-2 text-slate-600">
                Strategic marketing drives qualified traffic that converts into paying customers.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Better Targeting</h3>
              <p className="mt-2 text-slate-600">
                Reach the right audience at the right time with precision targeting strategies.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                💰
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Cost Efficiency</h3>
              <p className="mt-2 text-slate-600">
                Maximize ROI by focusing resources on high-impact marketing channels.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🏆
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Competitive Advantage</h3>
              <p className="mt-2 text-slate-600">
                Stay ahead of competitors with innovative strategies and market insights.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Measurable Results</h3>
              <p className="mt-2 text-slate-600">
                Track performance with clear KPIs and analytics to prove marketing ROI.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🚀
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Scalable Growth</h3>
              <p className="mt-2 text-slate-600">
                Build systems that grow with your business and adapt to market changes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Strategic Process</h2>
            <p className="mt-4 text-lg text-slate-600">
              We follow a proven methodology to develop and implement effective digital marketing strategies.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Discovery & Analysis</h3>
              <p className="mt-2 text-slate-600">
                Deep dive into your business, market, competitors, and current marketing efforts.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Strategy Development</h3>
              <p className="mt-2 text-slate-600">
                Create a comprehensive plan with clear objectives, target audience, and channel strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Implementation</h3>
              <p className="mt-2 text-slate-600">
                Execute the strategy across all chosen channels with proper tracking and optimization.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Monitoring & Optimization</h3>
              <p className="mt-2 text-slate-600">
                Continuously track performance and optimize campaigns for maximum results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">What's Included in Our Strategy</h2>
            <p className="mt-4 text-lg opacity-90">
              A complete digital marketing strategy covers all essential channels and tactics.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">SEO Strategy</h3>
              <p className="mt-2 opacity-90">
                Technical SEO, content optimization, and local search strategies.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Social Media Strategy</h3>
              <p className="mt-2 opacity-90">
                Platform selection, content calendar, and community management plans.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">PPC Campaign Strategy</h3>
              <p className="mt-2 opacity-90">
                Google Ads, Facebook Ads, and other paid advertising campaigns.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Content Marketing</h3>
              <p className="mt-2 opacity-90">
                Blog posts, videos, infographics, and content distribution strategy.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Email Marketing</h3>
              <p className="mt-2 opacity-90">
                Lead nurturing, automation, and conversion-focused email campaigns.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Analytics & Reporting</h3>
              <p className="mt-2 opacity-90">
                Comprehensive tracking, reporting, and ROI measurement systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Build Your Digital Marketing Strategy?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's create a comprehensive plan that drives real growth for your business. Get started with a free strategy consultation.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Get Free Consultation
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