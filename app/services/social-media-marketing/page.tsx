export const metadata = {
  title: "Social Media Marketing | Rankclick",
  description: "Grow your brand with strategic social media marketing. We create engaging content, run targeted campaigns, and build communities that drive leads and sales across all platforms.",
};

export default function SocialMediaMarketingPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            📱 Social Media Marketing
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Build Your Brand and Grow Your Audience
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Strategic social media marketing that engages your audience, builds brand loyalty, and drives measurable business results across all platforms.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start Social Strategy
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
          <h2 className="text-3xl font-semibold text-slate-950">Why Social Media Marketing Matters</h2>
          <p className="mt-6 text-lg text-slate-600">
            Social media is where your customers spend their time. With billions of active users across platforms like Facebook, Instagram, LinkedIn, and TikTok, social media offers unparalleled opportunities to connect with your audience, build brand awareness, and drive sales.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Effective social media marketing goes beyond posting content—it involves strategic planning, community building, and data-driven optimization to achieve your business goals.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                👥
              </div>
              <h3 className="font-semibold text-slate-950">Audience Engagement</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Build meaningful relationships with your customers through authentic interactions.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📈
              </div>
              <h3 className="font-semibold text-slate-950">Brand Awareness</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Increase visibility and recognition for your brand across social platforms.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🎯
              </div>
              <h3 className="font-semibold text-slate-950">Targeted Reach</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Reach specific demographics and interests with precise targeting options.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Social Media Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Complete social media marketing solutions for businesses of all sizes.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📝
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Content Strategy</h3>
              <p className="mt-2 text-slate-600">
                Develop engaging content calendars, themes, and posting schedules that resonate with your audience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📸
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Content Creation</h3>
              <p className="mt-2 text-slate-600">
                Professional graphics, videos, and copy that capture attention and drive engagement.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Community Management</h3>
              <p className="mt-2 text-slate-600">
                Monitor conversations, respond to comments, and build relationships with your followers.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📈
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Paid Advertising</h3>
              <p className="mt-2 text-slate-600">
                Targeted social media ads on Facebook, Instagram, LinkedIn, and other platforms.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Analytics & Reporting</h3>
              <p className="mt-2 text-slate-600">
                Track performance metrics, ROI, and audience insights to optimize your strategy.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Influencer Marketing</h3>
              <p className="mt-2 text-slate-600">
                Partner with influencers to expand your reach and build credibility in your niche.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Work With */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Platforms We Master</h2>
            <p className="mt-4 text-lg text-slate-600">
              We optimize your presence across all major social media platforms.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                📘
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Facebook</h3>
              <p className="mt-2 text-slate-600">
                Business pages, groups, events, and targeted advertising campaigns.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-100 text-2xl">
                📷
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Instagram</h3>
              <p className="mt-2 text-slate-600">
                Stories, Reels, IGTV, and shoppable posts for visual storytelling.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 text-2xl">
                💼
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">LinkedIn</h3>
              <p className="mt-2 text-slate-600">
                B2B marketing, thought leadership, and professional networking.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-black text-2xl text-white">
                ▶️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">TikTok</h3>
              <p className="mt-2 text-slate-600">
                Viral content creation and trending challenges for younger audiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Social Media Process</h2>
            <p className="mt-4 text-lg opacity-90">
              A systematic approach to social media marketing that delivers consistent growth.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Strategy Development</h3>
              <p className="mt-2 opacity-90">
                Define goals, identify target audience, and choose the right platforms for your business.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Content Planning</h3>
              <p className="mt-2 opacity-90">
                Create a content calendar with themes, posting schedules, and engagement strategies.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Content Creation</h3>
              <p className="mt-2 opacity-90">
                Design and produce high-quality content that resonates with your target audience.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Growth & Optimization</h3>
              <p className="mt-2 opacity-90">
                Monitor performance, analyze results, and optimize strategies for better results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Grow Your Social Media Presence?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's create a social media strategy that engages your audience and drives real business results.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start Social Strategy
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