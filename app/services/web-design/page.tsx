export const metadata = {
  title: "Web Design Services | UI/UX Design | Rankclick",
  description: "Professional web design services that create beautiful, user-friendly websites. Custom UI/UX design, responsive layouts, and conversion-focused interfaces that engage visitors and drive results.",
};

export default function WebDesignPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            🎨 Web Design
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Beautiful Websites That Convert Visitors
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Professional web design that combines stunning visuals with user-friendly interfaces. Our conversion-focused designs create memorable experiences that turn visitors into customers and drive business growth.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start Design Project
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

      {/* What is Web Design */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Why Professional Web Design Matters</h2>
          <p className="mt-6 text-lg text-slate-600">
            Your website is often the first impression customers have of your business. Great web design goes beyond aesthetics—it's about creating intuitive, engaging experiences that guide visitors toward your business goals.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Effective web design combines visual appeal with usability, accessibility, and conversion optimization to create websites that not only look great but also perform exceptionally well.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                👥
              </div>
              <h3 className="font-semibold text-slate-950">User Experience</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Intuitive navigation and user-friendly interfaces that keep visitors engaged.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📱
              </div>
              <h3 className="font-semibold text-slate-950">Mobile Responsive</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Perfect display and functionality across all devices and screen sizes.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                🎯
              </div>
              <h3 className="font-semibold text-slate-950">Conversion Focused</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Strategic design elements that guide visitors toward desired actions.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Web Design Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Complete design solutions for websites that look great and perform even better.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">UI/UX Design</h3>
              <p className="mt-2 text-slate-600">
                User interface and experience design that creates intuitive, enjoyable interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Responsive Design</h3>
              <p className="mt-2 text-slate-600">
                Mobile-first designs that adapt seamlessly across all devices and screen sizes.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎯
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Conversion Optimization</h3>
              <p className="mt-2 text-slate-600">
                Design elements and layouts optimized to increase conversions and achieve goals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🚀
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Performance Design</h3>
              <p className="mt-2 text-slate-600">
                Fast-loading designs with optimized images and efficient code structures.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ♿
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Accessibility Design</h3>
              <p className="mt-2 text-slate-600">
                Inclusive design practices that make websites usable for everyone.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Redesign Services</h3>
              <p className="mt-2 text-slate-600">
                Modernize existing websites with updated designs and improved user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Design Process</h2>
            <p className="mt-4 text-lg text-slate-600">
              A collaborative, user-centered approach that delivers exceptional results.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                1
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Discovery & Research</h3>
              <p className="mt-2 text-slate-600">
                Understand your business goals, target audience, and user needs through research.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                2
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Wireframing & Planning</h3>
              <p className="mt-2 text-slate-600">
                Create wireframes and user flows that outline the website structure and navigation.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                3
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Visual Design</h3>
              <p className="mt-2 text-slate-600">
                Develop high-fidelity designs with colors, typography, and visual elements.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-600 text-2xl text-white">
                4
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Testing & Refinement</h3>
              <p className="mt-2 text-slate-600">
                Test designs with users and refine based on feedback and performance data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Design Principles We Follow</h2>
            <p className="mt-4 text-lg opacity-90">
              Timeless design principles that create websites people love to use.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">User-Centered Design</h3>
              <p className="mt-2 opacity-90">
                Every design decision starts with understanding and prioritizing user needs.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Visual Hierarchy</h3>
              <p className="mt-2 opacity-90">
                Clear information architecture that guides users to important content and actions.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Consistency</h3>
              <p className="mt-2 opacity-90">
                Uniform design patterns and elements that create familiarity and trust.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Accessibility</h3>
              <p className="mt-2 opacity-90">
                Inclusive design that works for users of all abilities and assistive technologies.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Performance</h3>
              <p className="mt-2 opacity-90">
                Fast-loading designs that provide excellent user experience across all devices.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-semibold">Scalability</h3>
              <p className="mt-2 opacity-90">
                Designs that grow with your business and adapt to future needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Create a Website That Converts?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's design a website that not only looks beautiful but also drives real business results.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start Design Project
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