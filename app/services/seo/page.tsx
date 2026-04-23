export const metadata = {
  title: "SEO Services | Search Engine Optimization | Rankclick",
  description: "Professional SEO services to improve your search rankings and drive organic traffic. Technical SEO, content optimization, local SEO, and link building for sustainable growth.",
};

export default function SEOPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            🔎 SEO Services
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Dominate Search Results with Expert SEO
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Boost your organic rankings, drive qualified traffic, and increase conversions with our comprehensive SEO strategies that deliver long-term results.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Get SEO Audit
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

      {/* What is SEO */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">What is Search Engine Optimization?</h2>
          <p className="mt-6 text-lg text-slate-600">
            SEO (Search Engine Optimization) is the practice of optimizing your website to rank higher in search engine results pages (SERPs). When people search for products or services related to your business, you want to appear at the top of those results.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Effective SEO combines technical optimization, quality content, and strategic link building to improve visibility and drive organic traffic that converts into customers.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📈
              </div>
              <h3 className="font-semibold text-slate-950">Higher Rankings</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Appear on the first page of Google for relevant search terms in your industry.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                👥
              </div>
              <h3 className="font-semibold text-slate-950">Qualified Traffic</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Attract visitors who are actively looking for your products or services.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                💰
              </div>
              <h3 className="font-semibold text-slate-950">Cost Effective</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Organic traffic has a much lower cost per acquisition than paid advertising.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our SEO Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive SEO solutions that cover all aspects of search engine optimization.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔧
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Technical SEO</h3>
              <p className="mt-2 text-slate-600">
                Site speed optimization, mobile-friendliness, schema markup, and crawlability improvements.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ✍️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Content Optimization</h3>
              <p className="mt-2 text-slate-600">
                Keyword research, on-page optimization, and content creation that ranks and converts.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔗
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Link Building</h3>
              <p className="mt-2 text-slate-600">
                High-quality backlink acquisition and internal linking strategies for domain authority.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📍
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Local SEO</h3>
              <p className="mt-2 text-slate-600">
                Google My Business optimization and local search visibility for brick-and-mortar businesses.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">SEO Analytics</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive reporting, rank tracking, and ROI measurement for SEO campaigns.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">E-commerce SEO</h3>
              <p className="mt-2 text-slate-600">
                Product page optimization, category SEO, and conversion-focused search strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Process */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our SEO Process</h2>
            <p className="mt-4 text-lg text-slate-600">
              A systematic approach to SEO that delivers consistent results and continuous improvement.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">SEO Audit</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive analysis of your current SEO status, technical issues, and opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Keyword Research</h3>
              <p className="mt-2 text-slate-600">
                Identify high-value keywords with search volume, competition analysis, and ranking potential.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Implementation</h3>
              <p className="mt-2 text-slate-600">
                Execute SEO recommendations with on-page optimization, technical fixes, and content creation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Monitoring & Reporting</h3>
              <p className="mt-2 text-slate-600">
                Track rankings, traffic, and conversions with monthly reports and optimization recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Why Choose Rankclick for SEO?</h2>
            <p className="mt-4 text-lg opacity-90">
              Proven results and white-hat SEO strategies that deliver sustainable growth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">White-Hat SEO</h3>
              <p className="mt-2 opacity-90">
                Ethical SEO practices that comply with Google guidelines and deliver long-term results.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Data-Driven Approach</h3>
              <p className="mt-2 opacity-90">
                Every decision backed by analytics, keyword research, and performance data.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Transparent Reporting</h3>
              <p className="mt-2 opacity-90">
                Clear, detailed reports showing rankings, traffic growth, and ROI metrics.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Local SEO Expertise</h3>
              <p className="mt-2 opacity-90">
                Specialized knowledge of local search algorithms and Google My Business optimization.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Technical Proficiency</h3>
              <p className="mt-2 opacity-90">
                Advanced technical SEO skills for complex websites and enterprise-level projects.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Proven Track Record</h3>
              <p className="mt-2 opacity-90">
                Hundreds of successful SEO campaigns with measurable results and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Improve Your Search Rankings?</h2>
        <p className="mt-4 text-lg opacity-90">
          Get a free SEO audit and discover how we can help your website rank higher and attract more customers.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Get Free SEO Audit
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