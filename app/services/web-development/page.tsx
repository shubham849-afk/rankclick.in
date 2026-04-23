export const metadata = {
  title: "Web Development Services | Rankclick",
  description: "Professional web development services using modern technologies. Custom websites, e-commerce platforms, web applications, and CMS solutions that drive results.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* Hero Section */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-800">
            💻 Web Development
          </div>
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Modern Websites That Drive Results
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Custom web development solutions using cutting-edge technologies. From responsive websites to complex web applications, we build digital experiences that convert visitors into customers.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
            >
              Start Your Project
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
          <h2 className="text-3xl font-semibold text-slate-950">Why Professional Web Development Matters</h2>
          <p className="mt-6 text-lg text-slate-600">
            Your website is often the first impression customers have of your business. A professionally developed website not only looks great but also performs exceptionally, loads quickly, and converts visitors into paying customers.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            We use modern development practices and technologies to create websites that are fast, secure, scalable, and optimized for all devices.
          </p>
        </div>
        <div className="space-y-6">
          <div className="rounded-[1rem] border border-slate-200 bg-slate-50 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                ⚡
              </div>
              <h3 className="font-semibold text-slate-950">Lightning Fast</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Optimized performance that keeps visitors engaged and improves search rankings.
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
                🔒
              </div>
              <h3 className="font-semibold text-slate-950">Secure & Reliable</h3>
            </div>
            <p className="mt-3 text-slate-600">
              Built with security best practices and reliable hosting infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="benefits" className="rounded-[2rem] bg-slate-50 px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Our Web Development Services</h2>
            <p className="mt-4 text-lg text-slate-600">
              Complete web development solutions for businesses of all sizes and industries.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🌐
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Custom Websites</h3>
              <p className="mt-2 text-slate-600">
                Tailored websites built from scratch to meet your specific business requirements and goals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🛒
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">E-commerce Development</h3>
              <p className="mt-2 text-slate-600">
                Full-featured online stores with payment processing, inventory management, and customer portals.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                📱
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Web Applications</h3>
              <p className="mt-2 text-slate-600">
                Interactive web apps with user authentication, databases, and complex functionality.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔧
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">CMS Development</h3>
              <p className="mt-2 text-slate-600">
                Custom content management systems or implementations of popular platforms like WordPress.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🚀
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Performance Optimization</h3>
              <p className="mt-2 text-slate-600">
                Speed optimization, caching, and performance improvements for existing websites.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-2xl">
                🔄
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Website Maintenance</h3>
              <p className="mt-2 text-slate-600">
                Ongoing support, updates, security patches, and performance monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="rounded-[2rem] bg-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">Technologies We Use</h2>
            <p className="mt-4 text-lg text-slate-600">
              Modern tech stack for scalable, secure, and high-performance websites.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl">
                ⚛️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">React & Next.js</h3>
              <p className="mt-2 text-slate-600">
                Modern JavaScript frameworks for fast, interactive user experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl">
                🟢
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Node.js</h3>
              <p className="mt-2 text-slate-600">
                Server-side JavaScript for scalable backend applications and APIs.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-200 text-2xl">
                🗄️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Databases</h3>
              <p className="mt-2 text-slate-600">
                MongoDB, PostgreSQL, and MySQL for robust data management.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 text-2xl">
                ☁️
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-950">Cloud Hosting</h3>
              <p className="mt-2 text-slate-600">
                AWS, Vercel, and other cloud platforms for reliable hosting solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="rounded-[2rem] bg-gradient-to-r from-orange-600 to-orange-700 px-6 py-16 text-white shadow-lg shadow-orange-300/50 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our Development Process</h2>
            <p className="mt-4 text-lg opacity-90">
              A proven methodology that ensures quality, transparency, and successful project delivery.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Discovery & Planning</h3>
              <p className="mt-2 opacity-90">
                Requirements gathering, project scoping, and technical architecture planning.
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
                Clean code development with regular testing and quality assurance checks.
              </p>
            </div>
            <div className="rounded-[1rem] bg-white/10 p-6 backdrop-blur-sm text-center">
              <h3 className="text-xl font-semibold">Launch & Support</h3>
              <p className="mt-2 opacity-90">
                Deployment, testing, training, and ongoing maintenance and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="rounded-[2rem] bg-slate-950 px-6 py-16 text-center text-white shadow-lg shadow-slate-900/20 sm:px-10">
        <h2 className="text-3xl font-semibold">Ready to Build Your Dream Website?</h2>
        <p className="mt-4 text-lg opacity-90">
          Let's discuss your project requirements and create a website that drives real business results.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700"
          >
            Start Your Project
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