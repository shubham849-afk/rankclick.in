import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Services | Rankclick",
  description:
    "Rankclick offers Digital Marketing Strategy, SEO, Web Development, Google Ads, Content Marketing, and more for ambitious businesses.",
};

const services = [
  {
    title: "Digital Marketing Strategy",
    description:
      "Build a strong, goal-driven marketing plan that combines search, social, and conversion strategy to grow your business.",
    icon: "🧭",
    href: "/services/digital-marketing-strategy",
  },
  {
    title: "Search Engine Optimisation",
    description:
      "Improve visibility on Google and other search engines with optimized content, technical SEO, and local search strategy.",
    icon: "🔎",
    href: "/services/seo",
  },
  {
    title: "Social Media Marketing",
    description:
      "Reach your audience with social campaigns that drive engagement, leads, and brand awareness across platforms.",
    icon: "📱",
    href: "/services/social-media-marketing",
  },
  {
    title: "Web Development",
    description:
      "Launch modern websites and web experiences that load fast, look polished, and convert visitors into customers.",
    icon: "💻",
    href: "/services/web-development",
  },
  {
    title: "Web Design",
    description:
      "Create professional, user-friendly websites with a modern brand identity and conversion-focused design.",
    icon: "🎨",
    href: "/services/web-design",
  },
  {
    title: "Mobile App Development",
    description:
      "Bring your app idea to life with mobile development that engages users and grows your audience.",
    icon: "📲",
    href: "/services/mobile-app-development",
  },
  {
    title: "Google Ads Management",
    description:
      "Run high-performing paid campaigns that generate leads and sales through search, display, and remarketing.",
    icon: "📈",
    href: "/services/google-ads",
  },
  {
    title: "Content Marketing",
    description:
      "Deliver useful, shareable content that builds authority, attracts traffic, and improves search rankings.",
    icon: "✍️",
    href: "/services/content-marketing",
  },
  {
    title: "Digital Branding",
    description:
      "Strengthen your brand with visual identity, messaging, and online positioning that makes your business memorable.",
    icon: "🏷️",
    href: "/services/digital-branding",
  },
  {
    title: "YouTube Promotion",
    description:
      "Grow your video presence with YouTube strategy, ads, and content planning that reaches the right viewers.",
    icon: "▶️",
    href: "/services/youtube-promotion",
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-12 pb-12">
      <section className="rounded-[2rem] bg-white px-6 py-10 shadow-lg shadow-orange-100 sm:px-10 sm:py-12">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Our Services</p>
        <h1 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">
          Digital marketing services that grow your business.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Rankclick offers the key digital services you need for traffic, conversions, branding, and long-term growth.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon, href }) => (
          <Link key={title} href={href} className="group">
            <ServiceCard title={title} description={description} icon={icon} />
          </Link>
        ))}
      </section>

      <section className="rounded-[2rem] border border-slate-200 bg-slate-50 px-6 py-10 shadow-sm shadow-slate-200 sm:px-10 sm:py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">Ready to scale?</p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-950">
              Let Rankclick build a service plan for your brand.
            </h2>
          </div>
          <p className="text-lg leading-8 text-slate-600">
            We deliver growth-focused marketing, web development, and creative campaigns that help your business win online.
          </p>
        </div>
      </section>
    </main>
  );
}
