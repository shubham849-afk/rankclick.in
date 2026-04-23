export const metadata = {
  title: "Mobile App Development | iOS & Android Apps | Rankclick",
  description: "Custom mobile app development for iOS and Android. Native and cross-platform apps that engage users, drive growth, and deliver exceptional mobile experiences for your business.",
};

export default function MobileAppDevelopmentPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            📲 Mobile App Development
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Apps That Engage Users and Drive Growth
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Custom mobile app development for iOS and Android platforms. We create native and cross-platform apps that deliver exceptional user experiences, increase engagement, and help your business grow in the mobile-first world.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start App Project
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

      {/* What is Mobile App Development */}
      <section className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-slate-950">Why Mobile Apps Matter for Business Growth</h2>
          <p className="mt-6 text-lg text-slate-600">
            In a mobile-first world, having a well-designed app is crucial for business success. Mobile apps provide direct access to your customers, enable personalized experiences, and create new revenue streams through in-app purchases and subscriptions.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Our mobile app development combines cutting-edge technology with user-centered design to create apps that not only look great but also drive engagement, retention, and business growth.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📱
              </div>
              <h3 className="font-semibold text-slate-950">Direct Customer Access</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Instant access to your customers through push notifications and personalized experiences.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                💰
              </div>
              <h3 className="font-semibold text-slate-950">New Revenue Streams</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Generate additional income through in-app purchases, subscriptions, and premium features.
            </p>
          </div>
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                📊
              </div>
              <h3 className="font-semibold text-slate-950">Better Engagement</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Higher user engagement and retention compared to mobile websites.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Mobile App Development Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Complete mobile app solutions for iOS, Android, and cross-platform development.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🍎
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">iOS App Development</h3>
              <p className="mt-2 text-slate-600">
                Native iOS apps built with Swift and SwiftUI for optimal performance on iPhones and iPads.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🤖
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Android App Development</h3>
              <p className="mt-2 text-slate-600">
                Native Android apps using Kotlin and Java for seamless experiences on Android devices.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Cross-Platform Apps</h3>
              <p className="mt-2 text-slate-600">
                Single codebase apps using React Native or Flutter that work on both iOS and Android.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎨
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">UI/UX Design</h3>
              <p className="mt-2 text-slate-600">
                Intuitive user interfaces and experiences designed specifically for mobile devices.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                ☁️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Backend Development</h3>
              <p className="mt-2 text-slate-600">
                Scalable backend services, APIs, and databases to power your mobile applications.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🚀
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">App Store Optimization</h3>
              <p className="mt-2 text-slate-600">
                ASO strategies to improve app visibility and downloads in app stores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Types */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Types of Apps We Build</h2>
            <p className="mt-4 text-lg text-slate-600">
              Solutions for every business need and user requirement.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                🛒
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">E-commerce Apps</h3>
              <p className="mt-2 text-slate-600">
                Mobile shopping experiences with secure payments and inventory management.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Social Apps</h3>
              <p className="mt-2 text-slate-600">
                Community platforms with messaging, profiles, and interactive features.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
                📊
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Business Apps</h3>
              <p className="mt-2 text-slate-600">
                Productivity tools, CRM systems, and internal business applications.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🎮
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Gaming Apps</h3>
              <p className="mt-2 text-slate-600">
                Engaging mobile games with monetization strategies and social features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our App Development Process</h2>
            <p className="mt-4 text-lg opacity-90">
              A proven methodology that ensures quality apps delivered on time and within budget.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Discovery & Planning</h3>
              <p className="mt-2 opacity-90">
                Requirements gathering, market research, and technical architecture planning.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Design & Prototyping</h3>
              <p className="mt-2 opacity-90">
                UI/UX design, wireframes, and interactive prototypes for user validation.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Development</h3>
              <p className="mt-2 opacity-90">
                Clean code development with regular testing and quality assurance throughout.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Launch & Support</h3>
              <p className="mt-2 opacity-90">
                App store submission, user testing, and ongoing maintenance and updates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Bring Your App Idea to Life?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's discuss your mobile app vision and create an app that engages users and grows your business.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start App Project
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