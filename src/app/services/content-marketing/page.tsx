export const metadata = {
  title: "Content Marketing Services | Rankclick",
  description: "Strategic content marketing that builds authority and drives organic growth. Blog posts, articles, videos, and content strategies that attract, engage, and convert your audience.",
};

export default function ContentMarketingPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            ✍️ Content Marketing
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Content That Attracts, Engages, and Converts
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Strategic content marketing that positions your brand as an industry authority. From blog posts and articles to videos and infographics, we create valuable content that drives organic traffic and builds lasting customer relationships.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start Content Strategy
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

      {/* What is Content Marketing */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Why Content Marketing Drives Growth</h2>
          <p className="mt-6 text-lg text-slate-600">
            Content marketing is about creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience—and ultimately, to drive profitable customer action.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Unlike traditional advertising, content marketing builds trust, establishes authority, and creates long-term relationships with your customers. It's the foundation of inbound marketing and SEO success.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🎯
              </div>
              <h3 className="font-semibold text-slate-950">Targeted Reach</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Attract qualified prospects who are actively seeking solutions to their problems.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🏆
              </div>
              <h3 className="font-semibold text-slate-950">Build Authority</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Position your brand as a thought leader and trusted resource in your industry.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📈
              </div>
              <h3 className="font-semibold text-slate-950">Long-term Results</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Content continues to attract traffic and generate leads months and years after publication.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Content Marketing Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive content creation and strategy services for every stage of the customer journey.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📝
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Blog Writing</h3>
              <p className="mt-2 text-slate-600">
                SEO-optimized blog posts, articles, and thought leadership content that drives organic traffic.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📧
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Email Marketing</h3>
              <p className="mt-2 text-slate-600">
                Compelling email sequences, newsletters, and automated campaigns that nurture leads.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ▶️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Video Content</h3>
              <p className="mt-2 text-slate-600">
                Educational videos, product demos, and explainer videos for YouTube and social media.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Infographics</h3>
              <p className="mt-2 text-slate-600">
                Visual content that simplifies complex information and increases shareability.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎙️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Podcasts</h3>
              <p className="mt-2 text-slate-600">
                Audio content creation and distribution to reach audiences on-the-go.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📈
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Content Strategy</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive content planning, editorial calendars, and distribution strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Content Types We Create</h2>
            <p className="mt-4 text-lg text-slate-600">
              Diverse content formats to engage different audience segments and maximize reach.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                📄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Articles & Guides</h3>
              <p className="mt-2 text-slate-600">
                In-depth guides, how-to articles, and educational content that establishes expertise.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                📰
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">News & Updates</h3>
              <p className="mt-2 text-slate-600">
                Industry news, company updates, and timely content that keeps audiences engaged.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
                ❓
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">FAQs & Resources</h3>
              <p className="mt-2 text-slate-600">
                Frequently asked questions, resource libraries, and helpful tools for your audience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📈
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Case Studies</h3>
              <p className="mt-2 text-slate-600">
                Success stories, client results, and proof of concept that builds credibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Content Marketing Process</h2>
            <p className="mt-4 text-lg opacity-90">
              A systematic approach that ensures your content delivers results and drives business growth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Research & Strategy</h3>
              <p className="mt-2 opacity-90">
                Audience analysis, keyword research, and content strategy development.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Content Creation</h3>
              <p className="mt-2 opacity-90">
                Writing, design, and production of high-quality, engaging content.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Distribution & Promotion</h3>
              <p className="mt-2 opacity-90">
                Strategic publishing and promotion across multiple channels and platforms.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Analysis & Optimization</h3>
              <p className="mt-2 opacity-90">
                Performance tracking, audience insights, and content optimization for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Create Content That Converts?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's develop a content marketing strategy that attracts your ideal customers and drives sustainable growth.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start Content Strategy
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