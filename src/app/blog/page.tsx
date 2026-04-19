import Link from "next/link";

export const metadata = {
  title: "Blog | Rankclick - Digital Marketing Insights",
  description:
    "Latest tips, strategies, and insights to grow your business online. SEO, PPC, social media, and digital marketing tips for Varanasi businesses.",
};

const featuredPosts = [
  {
    id: 1,
    title: "Best Digital Marketing Agency in Varanasi: Complete Guide 2026",
    excerpt: "Discover why Rankclick is the top-rated digital marketing agency in Varanasi. Learn about our proven strategies, client success stories, and how we help local businesses dominate online.",
    image: "📊",
    author: "Shubham",
    date: "April 19, 2026",
    category: "Local SEO",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: 2,
    title: "How Local SEO Helps Small Businesses in Varanasi Grow by 300%",
    excerpt: "Local SEO isn't just about Google Maps. Learn the complete strategy that helped our Varanasi clients increase leads by 300% through local search optimization.",
    image: "📍",
    author: "Shubham",
    date: "April 15, 2026",
    category: "SEO",
    readTime: "6 min read",
    featured: true,
  },
];

const blogPosts = [
  {
    id: 3,
    title: "Google My Business Optimization Guide for Varanasi Businesses",
    excerpt: "Complete step-by-step guide to optimize your Google My Business listing. Learn how to get more local customers through better GMB rankings and reviews.",
    image: "🏪",
    author: "Marketing Team",
    date: "April 12, 2026",
    category: "Local SEO",
    readTime: "5 min read",
  },
  {
    id: 4,
    title: "SEO Tips for Restaurants in Varanasi: Increase Online Orders",
    excerpt: "Restaurants in Varanasi are missing out on online orders. Learn proven SEO strategies that can increase your restaurant's online visibility and customer orders.",
    image: "🍽️",
    author: "Shubham",
    date: "April 10, 2026",
    category: "SEO",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "How to Generate Leads with Facebook Ads in 2026",
    excerpt: "Facebook Ads are more powerful than ever. Learn the latest strategies to create high-converting Facebook ad campaigns that generate quality leads for your business.",
    image: "📱",
    author: "Marketing Team",
    date: "April 8, 2026",
    category: "Social Media Marketing",
    readTime: "6 min read",
  },
  {
    id: 6,
    title: "Website Development Trends That Convert Visitors to Customers",
    excerpt: "Modern websites need more than just good design. Learn the latest web development trends that actually convert visitors into paying customers.",
    image: "💻",
    author: "Design Team",
    date: "April 5, 2026",
    category: "Website Development",
    readTime: "8 min read",
  },
  {
    id: 7,
    title: "Google Ads Strategy for Small Businesses: Maximum ROI",
    excerpt: "Stop wasting money on Google Ads. Learn the proven strategy that delivers maximum ROI for small businesses with limited advertising budgets.",
    image: "📈",
    author: "Shubham",
    date: "April 3, 2026",
    category: "Google Ads",
    readTime: "9 min read",
  },
  {
    id: 8,
    title: "Social Media Marketing for Local Businesses: Real Results",
    excerpt: "Social media isn't just about posting content. Learn how to create a social media strategy that actually drives sales and builds customer loyalty.",
    image: "📷",
    author: "Marketing Team",
    date: "April 1, 2026",
    category: "Social Media Marketing",
    readTime: "6 min read",
  },
];

const categories = [
  { name: "SEO", count: 12, slug: "seo" },
  { name: "Social Media Marketing", count: 8, slug: "social-media" },
  { name: "Google Ads", count: 6, slug: "google-ads" },
  { name: "Website Development", count: 5, slug: "website-development" },
  { name: "Local SEO", count: 7, slug: "local-seo" },
  { name: "Content Marketing", count: 4, slug: "content-marketing" },
];

const recentPosts = [
  { title: "Best Digital Marketing Agency in Varanasi", date: "April 19, 2026" },
  { title: "How Local SEO Helps Small Businesses", date: "April 15, 2026" },
  { title: "Google My Business Optimization Guide", date: "April 12, 2026" },
  { title: "SEO Tips for Restaurants in Varanasi", date: "April 10, 2026" },
  { title: "Facebook Ads Lead Generation", date: "April 8, 2026" },
];

const popularPosts = [
  { title: "Complete SEO Guide for Beginners", views: "2.3K" },
  { title: "Google Ads vs Facebook Ads: Which is Better?", views: "1.8K" },
  { title: "Local SEO Ranking Factors 2026", views: "1.5K" },
  { title: "Social Media Strategy for Small Business", views: "1.2K" },
  { title: "Website Speed Optimization Tips", views: "980" },
];

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-7xl space-y-16 pb-16">
      {/* 1. Page Heading + Intro */}
      <section className="rounded-[2rem] bg-gradient-to-br from-orange-50 to-white px-6 py-16 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-slate-950 sm:text-6xl">
            Digital Marketing Insights
          </h1>
          <p className="mt-6 text-xl text-slate-600">
            Latest tips, strategies, and insights to grow your business online.
          </p>
        </div>
      </section>

      {/* 4. Search Bar */}
      <section className="rounded-[2rem] bg-white px-6 py-8 shadow-lg shadow-orange-100 sm:px-10">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-full border border-slate-300 bg-slate-50 px-6 py-4 text-slate-950 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
            />
            <button className="absolute right-2 top-2 rounded-full bg-orange-600 p-2 text-white transition hover:bg-orange-700">
              🔍
            </button>
          </div>
        </div>
      </section>

      {/* 3. Categories / Filters */}
      <section className="rounded-[2rem] bg-slate-50 px-6 py-8 shadow-lg shadow-orange-100 sm:px-10">
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-orange-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-700">
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category.slug}
              className="rounded-full border border-slate-300 bg-white px-6 py-2 text-sm font-medium text-slate-700 transition hover:border-orange-500 hover:bg-orange-50"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
        {/* Main Content */}
        <div className="space-y-12">
          {/* 5. Featured / Popular Posts */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-950 mb-8">Featured Articles</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group rounded-[2rem] border border-slate-200 bg-white shadow-lg shadow-orange-100 overflow-hidden transition hover:shadow-xl hover:shadow-orange-200">
                  <div className="aspect-video bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-6xl">
                    {post.image}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-orange-600 font-medium">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-950 mb-3 group-hover:text-orange-600 transition">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 mb-4 leading-7">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center text-sm font-semibold text-orange-600">
                          {post.author[0]}
                        </div>
                        <span className="text-sm text-slate-600">By {post.author}</span>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-700"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 2. Blog Listing Section */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-950 mb-8">Latest Articles</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-1">
              {blogPosts.map((post) => (
                <article key={post.id} className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200 transition hover:shadow-md hover:border-orange-200">
                  <div className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center text-2xl">
                        {post.image}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-2">
                        <span className="rounded-full bg-orange-100 px-2 py-1 text-orange-600 font-medium text-xs">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950 mb-2 group-hover:text-orange-600 transition line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-6 w-6 rounded-full bg-orange-100 flex items-center justify-center text-xs font-semibold text-orange-600">
                            {post.author[0]}
                          </div>
                          <span className="text-sm text-slate-600">By {post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.id}`}
                          className="text-orange-600 font-medium text-sm hover:text-orange-700 transition"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 9. Pagination / Load More */}
          <section className="text-center">
            <button className="rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-700 shadow-lg shadow-orange-300/50">
              Load More Articles
            </button>
          </section>
        </div>

        {/* 6. Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-orange-100">
            <h3 className="text-lg font-semibold text-slate-950 mb-4">Categories</h3>
            <div className="space-y-3">
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/blog/category/${category.slug}`}
                  className="flex items-center justify-between text-slate-600 hover:text-orange-600 transition"
                >
                  <span>{category.name}</span>
                  <span className="text-sm bg-slate-100 px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Posts */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-orange-100">
            <h3 className="text-lg font-semibold text-slate-950 mb-4">Recent Posts</h3>
            <div className="space-y-4">
              {recentPosts.map((post, index) => (
                <div key={index} className="border-b border-slate-100 pb-3 last:border-b-0">
                  <Link
                    href="#"
                    className="text-slate-700 hover:text-orange-600 transition line-clamp-2 text-sm"
                  >
                    {post.title}
                  </Link>
                  <p className="text-xs text-slate-500 mt-1">{post.date}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Posts */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg shadow-orange-100">
            <h3 className="text-lg font-semibold text-slate-950 mb-4">Popular Posts</h3>
            <div className="space-y-4">
              {popularPosts.map((post, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-xs font-semibold text-orange-600">
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href="#"
                      className="text-slate-700 hover:text-orange-600 transition line-clamp-2 text-sm"
                    >
                      {post.title}
                    </Link>
                    <p className="text-xs text-slate-500 mt-1">{post.views} views</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 10. Newsletter Signup */}
          <div className="rounded-[2rem] bg-gradient-to-br from-orange-600 to-orange-700 p-6 text-white shadow-lg shadow-orange-300/50">
            <h3 className="text-lg font-semibold mb-2">Subscribe for Latest Marketing Tips</h3>
            <p className="text-orange-100 text-sm mb-4">
              Get weekly digital marketing insights delivered to your inbox.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full px-4 py-2 text-slate-950 outline-none"
              />
              <button className="w-full rounded-full bg-white px-6 py-2 text-orange-600 font-semibold transition hover:bg-orange-50">
                Subscribe Now
              </button>
            </div>
          </div>

          {/* 7. Call-To-Action */}
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-lg shadow-orange-100 text-center">
            <h3 className="text-lg font-semibold text-slate-950 mb-2">Need Help with Digital Marketing?</h3>
            <p className="text-slate-600 text-sm mb-4">
              Get expert advice tailored to your business goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-700 w-full"
            >
              Get Free Consultation
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
