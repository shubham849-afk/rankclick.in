export const metadata = {
  title: "Digital Branding Services | Brand Identity | Rankclick",
  description: "Complete digital branding solutions that create memorable brand experiences. Logo design, brand guidelines, visual identity, and messaging that makes your business unforgettable.",
};

export default function DigitalBrandingPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            🏷️ Digital Branding
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Build a Brand That Customers Love
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Complete digital branding solutions that create cohesive, memorable brand experiences across all touchpoints. From logo design to brand guidelines, we help you build a brand that resonates with your audience and drives loyalty.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start Brand Project
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

      {/* What is Digital Branding */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Why Strong Branding Matters in Digital Age</h2>
          <p className="mt-6 text-lg text-slate-600">
            In today's crowded digital marketplace, your brand is what sets you apart from the competition. A strong brand creates emotional connections with customers, builds trust, and influences purchasing decisions.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Digital branding extends your brand identity across all online channels—website, social media, email, and digital advertising—creating a consistent, memorable experience that customers recognize and trust.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🧠
              </div>
              <h3 className="font-semibold text-slate-950">Emotional Connection</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Create meaningful relationships that go beyond transactions to build loyalty.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                💎
              </div>
              <h3 className="font-semibold text-slate-950">Premium Perception</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Position your brand as a premium choice that customers are proud to support.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📈
              </div>
              <h3 className="font-semibold text-slate-950">Higher Value</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Strong brands command premium pricing and increase customer lifetime value.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Digital Branding Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Comprehensive branding solutions that cover every aspect of your brand identity and presence.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Logo Design</h3>
              <p className="mt-2 text-slate-600">
                Custom logo design that captures your brand essence and works across all mediums.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📋
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Brand Guidelines</h3>
              <p className="mt-2 text-slate-600">
                Comprehensive brand guidelines ensuring consistent application across all touchpoints.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🌈
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Visual Identity</h3>
              <p className="mt-2 text-slate-600">
                Color palettes, typography, iconography, and visual elements that define your brand.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                💬
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Brand Messaging</h3>
              <p className="mt-2 text-slate-600">
                Compelling brand voice, tone, and messaging that resonates with your target audience.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Digital Assets</h3>
              <p className="mt-2 text-slate-600">
                Social media graphics, website elements, and digital collateral for online presence.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Brand Refresh</h3>
              <p className="mt-2 text-slate-600">
                Modernize existing brands with updated visuals and messaging for current markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Elements */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Essential Brand Elements</h2>
            <p className="mt-4 text-lg text-slate-600">
              The building blocks that create a cohesive and memorable brand identity.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🔷
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Logo & Symbol</h3>
              <p className="mt-2 text-slate-600">
                The visual cornerstone that represents your brand instantly and memorably.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Color Palette</h3>
              <p className="mt-2 text-slate-600">
                Strategic color combinations that evoke emotions and reinforce brand recognition.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
                🔤
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Typography</h3>
              <p className="mt-2 text-slate-600">
                Font selections that communicate personality and ensure readability across mediums.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎭
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Brand Voice</h3>
              <p className="mt-2 text-slate-600">
                Consistent tone and language that builds trust and connects with your audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Branding Process</h2>
            <p className="mt-4 text-lg opacity-90">
              A collaborative approach that uncovers your brand's unique story and brings it to life.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Discovery & Research</h3>
              <p className="mt-2 opacity-90">
                Deep dive into your business, values, audience, and competitive landscape.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Strategy Development</h3>
              <p className="mt-2 opacity-90">
                Define brand positioning, personality, and key messaging pillars.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Design & Creation</h3>
              <p className="mt-2 opacity-90">
                Bring the brand to life with logo, colors, typography, and visual elements.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Implementation & Launch</h3>
              <p className="mt-2 opacity-90">
                Roll out the brand across all touchpoints with guidelines and training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Build a Brand That Stands Out?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's create a brand identity that captures your vision and resonates with your customers.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start Brand Project
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