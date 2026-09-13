import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Clock3,
  Search,
  Sparkles,
} from "lucide-react";
import "./blog.scss";

export const metadata: Metadata = {
  title: "Blog | AI, Web Development & Digital Marketing | StackCraft Studio",
  description:
    "Read practical guides on AI development, SaaS products, web app development, SEO, digital marketing, and technology costs in India.",
  keywords: [
    "AI development blog",
    "web development blog",
    "digital marketing blog",
    "AI SaaS development",
    "web app development India",
    "digital marketing India",
    "SEO blog India",
    "StackCraft Studio blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "StackCraft Studio Blog",
    description:
      "Practical insights on AI, web development, SaaS, SEO, and digital marketing.",
    url: "/blog",
    type: "website",
  },
};

const featuredPost = {
  title: "How Much Does It Cost to Build an AI SaaS App in 2026?",
  description:
    "A practical breakdown of AI SaaS development costs, from MVPs and custom AI features to infrastructure, integrations, maintenance, and scaling.",
  category: "AI & SaaS",
  date: "2026",
  readTime: "10 min read",
  href: "/blog/ai-saas-app-development-cost-2026",
  image: "/blog/ai-saas-cost.webp",
};

const posts = [
  {
    title: "How to Build an AI Web App in 2026: Complete Guide From Idea to Launch",
    description:
      "Learn how to take an AI web app from idea and validation through UX, development, AI integration, deployment, and scaling.",
    category: "AI Development",
    readTime: "12 min read",
    href: "/blog/how-to-build-ai-web-app-2026",
    image: "/blog/ai-web-app.webp",
  },
  {
    title: "AI Agent vs AI Chatbot: What Should Your Business Build in 2026?",
    description:
      "Understand the difference between AI agents and AI chatbots, where each works best, and which option makes sense for your business.",
    category: "AI Strategy",
    readTime: "8 min read",
    href: "/blog/ai-agent-vs-ai-chatbot-2026",
    image: "/blog/ai-agent-chatbot.webp",
  },
  {
    title: "How Much Does It Cost to Build a Web App in India in 2026?",
    description:
      "Understand web application development costs in India, including MVPs, custom web apps, SaaS platforms, integrations, and maintenance.",
    category: "Web Development",
    readTime: "10 min read",
    href: "/blog/web-app-development-cost-india-2026",
    image: "/blog/web-app-cost.webp",
  },
  {
    title: "How Much Does Digital Marketing Cost in India in 2026?",
    description:
      "A practical guide to SEO, social media marketing, Google Ads, PPC management, full-service digital marketing, and monthly agency costs.",
    category: "Digital Marketing",
    readTime: "11 min read",
    href: "/blog/digital-marketing-cost-india-2026",
    image: "/blog/digital-marketing-cost.webp",
  },
];

const categories = [
  "All",
  "AI",
  "Web Development",
  "Digital Marketing",
  "Business",
];

export default function BlogPage() {
  const blogSchemas = [
    featuredPost,
    ...posts,
  ].map((post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: `https://www.stackcraftstudio.com${post.image}`,
    author: {
      "@type": "Organization",
      name: "StackCraft Studio",
      url: "https://www.stackcraftstudio.com",
    },
    publisher: {
      "@type": "Organization",
      name: "StackCraft Studio",
      url: "https://www.stackcraftstudio.com",
    },
    mainEntityOfPage: `https://www.stackcraftstudio.com${post.href}`,
  }));

  return (
    <main className="blogPage">
      {blogSchemas.map((schema) => (
        <script
          key={schema.mainEntityOfPage}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* HERO */}
      <section className="blogHero">
        <div className="heroOrb heroOrbOne" />
        <div className="heroOrb heroOrbTwo" />

        <div className="container">
          <Link href="/" className="backHome">
            <ChevronRight size={15} />
            Back to home
          </Link>

          <div className="heroContent">
            <div className="eyebrow">
              <Sparkles size={15} />
              <span>StackCraft Journal</span>
            </div>

            <h1>
              Ideas worth
              <br />
              <span>building on.</span>
            </h1>

            <p>
              Practical guides, technology insights, cost breakdowns, and
              digital strategy for businesses building their next website,
              web app, AI product, or online growth system.
            </p>
          </div>

          <div className="categoryBar">
            <div className="categoryList">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={index === 0 ? "active" : ""}
                  type="button"
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="searchBox">
              <Search size={16} />
              <span>Search articles</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="featuredSection">
        <div className="container">
          <div className="sectionLabel">Featured Article</div>

          <article className="featuredCard">
            <Link
              href={featuredPost.href}
              className="featuredVisual"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 55vw"
              />

              <div className="featuredOverlay">
                <span>
                  Read Article
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="featuredNumber">01</div>
            </Link>

            <div className="featuredContent">
              <div className="postMeta">
                <span>{featuredPost.category}</span>
                <i />
                <span>{featuredPost.readTime}</span>
              </div>

              <h2>{featuredPost.title}</h2>

              <p>{featuredPost.description}</p>

              <div className="postFooter">
                <span>{featuredPost.date}</span>

                <Link href={featuredPost.href}>
                  Read Article
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="articlesSection">
        <div className="container">
          <div className="articlesHeader">
            <div>
              <p className="sectionKicker">Latest Articles</p>

              <h2>
                Learn.
                <br />
                <span>Build better.</span>
              </h2>
            </div>

            <p>
              No fluff, no recycled generic advice. These articles are built
              around the questions businesses actually ask before investing
              in digital products and marketing.
            </p>
          </div>

          <div className="articlesGrid">
            {posts.map((post, index) => (
              <article className="articleCard" key={post.title}>
                <Link href={post.href} className="articleImage">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />

                  <div className="articleImageOverlay">
                    <ArrowUpRight size={20} />
                  </div>

                  <span className="articleIndex">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </Link>

                <div className="articleContent">
                  <div className="postMeta">
                    <span>{post.category}</span>
                    <i />
                    <span>{post.readTime}</span>
                  </div>

                  <h3>
                    <Link href={post.href}>{post.title}</Link>
                  </h3>

                  <p>{post.description}</p>

                  <Link
                    href={post.href}
                    className="readMore"
                  >
                    Read article
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="topicsSection">
        <div className="container">
          <div className="topicsHeader">
            <p className="sectionKicker">What We Write About</p>

            <h2>
              Built around the
              <br />
              <span>questions that matter.</span>
            </h2>
          </div>

          <div className="topicsGrid">
            <div className="topicItem">
              <span>01</span>
              <h3>AI & SaaS</h3>
              <p>
                AI products, SaaS development, AI agents, automation, APIs,
                integrations, and practical AI strategy.
              </p>
            </div>

            <div className="topicItem">
              <span>02</span>
              <h3>Web Development</h3>
              <p>
                Website development, web apps, technology choices, costs,
                architecture, performance, and scaling.
              </p>
            </div>

            <div className="topicItem">
              <span>03</span>
              <h3>Digital Marketing</h3>
              <p>
                SEO, paid advertising, social media, content strategy, and
                building a stronger online presence.
              </p>
            </div>

            <div className="topicItem">
              <span>04</span>
              <h3>Business & Strategy</h3>
              <p>
                Digital product decisions, technology budgets, growth
                strategy, and choosing the right approach for a business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="blogCtaSection">
        <div className="container">
          <div className="blogCta">
            <div className="ctaGlow" />

            <div className="ctaContent">
              <p className="sectionKicker">Build Something Better</p>

              <h2>
                Reading is useful.
                <br />
                <span>Building is better.</span>
              </h2>

              <p>
                Got an idea for a website, web app, AI product, or digital
                growth strategy? Let&apos;s turn the idea into something
                real.
              </p>
            </div>

            <Link href="/contact" className="ctaButton">
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}