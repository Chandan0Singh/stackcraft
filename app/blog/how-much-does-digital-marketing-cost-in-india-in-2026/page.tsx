import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  CircleCheck,
  Facebook,
  Gauge,
  Globe2,
  LineChart,
  Megaphone,
  MousePointerClick,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  WalletCards,
  Layers3,
  X,
  Zap,
} from "lucide-react";
import "./blog-post.scss";

export const metadata: Metadata = {
  title: "How Much Does Digital Marketing Cost in India in 2026?",
  description:
    "Learn digital marketing cost in India in 2026. Compare SEO, social media marketing, Google Ads, PPC, content marketing and full-service digital marketing packages.",
  keywords: [
    "digital marketing cost India",
    "digital marketing agency cost India",
    "digital marketing packages India",
    "digital marketing services cost",
    "SEO cost in India",
    "social media marketing cost India",
    "Google Ads management cost India",
    "PPC agency cost India",
    "digital marketing agency India",
    "online marketing cost India",
  ],
  alternates: {
    canonical:
      "https://www.stackcraftstudio.com/blog/how-much-does-digital-marketing-cost-in-india-in-2026",
  },
  openGraph: {
    title: "How Much Does Digital Marketing Cost in India in 2026?",
    description:
      "A practical guide to digital marketing pricing in India, including SEO, social media, Google Ads, content and full-service marketing.",
    url: "https://www.stackcraftstudio.com/blog/how-much-does-digital-marketing-cost-in-india-in-2026",
    siteName: "StackCraft Studio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Cost in India in 2026",
    description:
      "Compare digital marketing costs, services, timelines and marketing packages in India.",
  },
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "what-included", label: "What Is Included?" },
  { id: "seo", label: "SEO Cost" },
  { id: "social-media", label: "Social Media Cost" },
  { id: "google-ads", label: "Google Ads Cost" },
  { id: "content", label: "Content Marketing" },
  { id: "full-service", label: "Full Digital Marketing" },
  { id: "business-size", label: "Budget by Business Size" },
  { id: "comparison", label: "Channel Comparison" },
  { id: "timeline", label: "How Long Results Take" },
  { id: "agency", label: "Choosing an Agency" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "budget", label: "How to Control Costs" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "How much does digital marketing cost in India?",
    answer:
      "Digital marketing budgets vary by channel, scope and business goals. A focused service such as SEO or social media can often start in the tens of thousands of rupees per month, while full-service and performance-focused programs can require substantially larger monthly budgets.",
  },
  {
    question: "How much does SEO cost per month in India?",
    answer:
      "SEO pricing depends on competition, website size, content requirements, technical complexity and the amount of ongoing work. Planning budgets can range from a focused monthly SEO engagement to much larger programs for competitive industries and larger websites.",
  },
  {
    question: "How much does Google Ads management cost in India?",
    answer:
      "Google Ads has two separate costs: advertising spend paid to the ad platform and the fee charged by the marketing agency or specialist for strategy and management. These should be budgeted separately.",
  },
  {
    question: "How much should a small business spend on digital marketing?",
    answer:
      "There is no universal percentage or fixed number. A small business should first identify its most valuable acquisition channel and budget around a focused strategy rather than spreading a small budget across every platform.",
  },
  {
    question: "Is digital marketing worth it for a startup?",
    answer:
      "It can be, especially when the strategy is tied to a measurable business outcome such as qualified leads, sales, sign-ups or bookings. Startups generally benefit from focusing on one or two channels instead of trying to do everything at once.",
  },
  {
    question: "How long does digital marketing take to show results?",
    answer:
      "The timeline depends on the channel. Paid advertising can generate data and traffic quickly, while SEO and content marketing usually require a longer period of consistent work before meaningful organic growth becomes visible.",
  },
  {
    question: "Should I hire a digital marketing agency or freelancer?",
    answer:
      "A freelancer can be suitable for a narrowly defined task or small operation. An agency or multidisciplinary team can be more useful when you need strategy, content, SEO, advertising, creative work, analytics and ongoing optimization across multiple channels.",
  },
];

const channelRows = [
  {
    service: "SEO",
    range: "₹15K – ₹50K+/month",
    bestFor: "Organic traffic & search visibility",
    speed: "Slow → Medium",
  },
  {
    service: "Social Media Marketing",
    range: "₹15K – ₹60K+/month",
    bestFor: "Brand visibility & audience",
    speed: "Medium",
  },
  {
    service: "Google Ads Management",
    range: "₹10K – ₹40K+/month",
    bestFor: "High-intent paid traffic",
    speed: "Fast",
  },
  {
    service: "Content Marketing",
    range: "₹15K – ₹60K+/month",
    bestFor: "Authority & organic growth",
    speed: "Medium → Slow",
  },
  {
    service: "Full Digital Marketing",
    range: "₹30K – ₹1.5L+/month",
    bestFor: "Multi-channel growth",
    speed: "Mixed",
  },
  {
    service: "Performance Marketing",
    range: "₹50K – ₹2L+/month+",
    bestFor: "Lead / revenue-focused campaigns",
    speed: "Fast → Medium",
  },
];

const faqsForSchema = faqs.map((faq) => ({
  "@type": "Question",
  name: faq.question,
  acceptedAnswer: {
    "@type": "Answer",
    text: faq.answer,
  },
}));

function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does Digital Marketing Cost in India in 2026?",
    description:
      "A practical guide to digital marketing pricing in India by channel, business stage and marketing objective.",
    author: {
      "@type": "Organization",
      name: "StackCraft Studio",
    },
    publisher: {
      "@type": "Organization",
      name: "StackCraft Studio",
    },
    datePublished: "2026-09-14",
    dateModified: "2026-09-14",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://www.stackcraftstudio.com/blog/how-much-does-digital-marketing-cost-in-india-in-2026",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqsForSchema,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}

export default function DigitalMarketingCostIndiaPage() {
  return (
    <main className="digital-marketing-blog">
      <JsonLd />

      <div className="blog-background">
        <div className="blog-grid" />
        <div className="blog-glow blog-glow-one" />
        <div className="blog-glow blog-glow-two" />
      </div>

      {/* NAV */}
      <header className="blog-nav">
        <Link
          href="/"
          className="blog-logo"
          aria-label="StackCraft Studio home"
        >
          <span className="blog-logo-mark">
            <span />
            <span />
            <span />
          </span>

          <span>StackCraft</span>
        </Link>

        <nav className="blog-nav-links">
          <Link href="/services">Services</Link>
          <Link href="/blog">Blog</Link>

          <Link href="/contact" className="blog-nav-cta">
            Get a strategy
            <ArrowRight size={15} />
          </Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="blog-hero">
        <div className="blog-container">
          <div className="blog-breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/blog">Blog</Link>
            <ChevronRight size={13} />
            <span>Digital Marketing Cost</span>
          </div>

          <div className="blog-hero-content">
            <div className="blog-eyebrow">
              <Sparkles size={14} />
              DIGITAL MARKETING IN INDIA
            </div>

            <h1>
              How Much Does{" "}
              <span className="gradient-text">Digital Marketing</span> Cost in
              India in 2026?
            </h1>

            <p className="blog-hero-description">
              A practical pricing guide covering SEO, social media marketing,
              Google Ads, content, performance marketing and full-service
              digital marketing.
            </p>

            <div className="blog-hero-meta">
              <span>Updated September 14, 2026</span>
              <span className="meta-dot" />
              <span>14 min read</span>
              <span className="meta-dot" />
              <span>Digital Marketing</span>
            </div>

            <div className="blog-hero-actions">
              <a href="#quick-answer" className="primary-blog-button">
                See pricing
                <ArrowRight size={17} />
              </a>

              <Link href="/contact" className="secondary-blog-button">
                Talk to StackCraft
              </Link>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>SEO</strong>
              <span>Long-term organic growth</span>
            </div>

            <div>
              <strong>PPC</strong>
              <span>High-intent paid traffic</span>
            </div>

            <div>
              <strong>FULL</strong>
              <span>Multi-channel growth</span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="blog-layout blog-container">
        <aside className="blog-sidebar">
          <div className="toc-card">
            <div className="toc-title">In this guide</div>

            <nav>
              {toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  <span>{item.label}</span>
                  <ChevronRight size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebar-cta">
            <div className="sidebar-icon">
              <TrendingUp size={20} />
            </div>

            <h3>Need more qualified leads?</h3>

            <p>
              We combine websites, landing pages, SEO and digital marketing
              into one growth system.
            </p>

            <Link href="/contact">
              Build your strategy
              <ArrowRight size={15} />
            </Link>
          </div>
        </aside>

        <article className="blog-article">
          {/* QUICK ANSWER */}
          <section className="article-section" id="quick-answer">
            <div className="quick-answer">
              <div className="quick-answer-badge">
                <Zap size={14} />
                QUICK ANSWER
              </div>

              <h2>
                Digital marketing in India can range from{" "}
                <span>₹15K/month to ₹2L+/month</span>, depending on the
                services and growth target.
              </h2>

              <p>
                There is no single digital marketing package that makes sense
                for every business. SEO, social media, Google Ads and
                performance marketing solve different problems.
              </p>

              <div className="quick-price-grid">
                <QuickPrice
                  label="SEO"
                  price="₹15K – ₹50K+"
                  text="Monthly planning range"
                />

                <QuickPrice
                  label="Social"
                  price="₹15K – ₹60K+"
                  text="Monthly planning range"
                />

                <QuickPrice
                  label="Full Service"
                  price="₹30K – ₹1.5L+"
                  text="Multi-channel program"
                />

                <QuickPrice
                  label="Performance"
                  price="₹50K – ₹2L+"
                  text="Growth-focused program"
                />
              </div>
            </div>

            <p className="lead">
              The real question is not{" "}
              <strong>“How much does digital marketing cost?”</strong> It is
              <strong> “Which marketing channels can produce profitable
              growth for my business?”</strong>
            </p>

            <p>
              The ranges in this article are planning ranges. They are not
              universal market prices or fixed StackCraft packages.
            </p>
          </section>

          {/* WHAT INCLUDED */}
          <section className="article-section" id="what-included">
            <SectionHeading
              number="01"
              icon={<LayersIcon />}
              title="What Is Included in Digital Marketing?"
            />

            <p>
              “Digital marketing” is an umbrella term. An agency may offer one
              channel or combine several services into a complete acquisition
              system.
            </p>

            <div className="service-grid">
              <ServiceCard
                icon={<Search />}
                title="SEO"
                text="Improve organic search visibility, rankings and qualified traffic."
              />

              <ServiceCard
                icon={<Facebook />}
                title="Social Media"
                text="Build visibility, content consistency and audience engagement."
              />

              <ServiceCard
                icon={<MousePointerClick />}
                title="Google Ads"
                text="Capture high-intent searches with paid acquisition campaigns."
              />

              <ServiceCard
                icon={<Megaphone />}
                title="Content"
                text="Create useful content that builds authority and supports acquisition."
              />

              <ServiceCard
                icon={<LineChart />}
                title="Analytics"
                text="Measure traffic, leads, conversions, campaigns and user behavior."
              />

              <ServiceCard
                icon={<Target />}
                title="CRO"
                text="Improve landing pages and conversion paths to get more value from traffic."
              />
            </div>
          </section>

          {/* SEO */}
          <section className="article-section" id="seo">
            <ProductHeading
              number="02"
              icon={<Search size={19} />}
              title="SEO Cost in India"
              subtitle="₹15K – ₹50K+/month"
            />

            <p>
              SEO is usually a long-term channel. It involves improving the
              website, creating useful content, targeting search demand and
              building the site&apos;s authority over time.
            </p>

            <div className="marketing-card">
              <div className="marketing-card-top">
                <div className="marketing-icon">
                  <Search size={20} />
                </div>

                <div>
                  <span>MONTHLY SEO PROGRAM</span>
                  <strong>₹15K – ₹50K+/month</strong>
                </div>
              </div>

              <div className="marketing-columns">
                <MarketingColumn
                  title="Typical work"
                  items={[
                    "Keyword research",
                    "Technical SEO",
                    "On-page optimization",
                    "Content planning",
                    "Internal linking",
                    "Reporting",
                  ]}
                />

                <MarketingColumn
                  title="Cost increases with"
                  items={[
                    "Competitive keywords",
                    "Large websites",
                    "Content volume",
                    "Technical complexity",
                    "Authority-building work",
                    "International SEO",
                  ]}
                />
              </div>
            </div>

            <div className="callout purple">
              <div className="callout-icon">
                <Search size={18} />
              </div>

              <div>
                <strong>SEO is not usually a two-week strategy.</strong>

                <p>
                  Search visibility compounds through consistent technical,
                  content and authority work. Be cautious of agencies
                  promising guaranteed rankings in a very short period.
                </p>
              </div>
            </div>
          </section>

          {/* SOCIAL */}
          <section className="article-section" id="social-media">
            <ProductHeading
              number="03"
              icon={<Facebook size={19} />}
              title="Social Media Marketing Cost"
              subtitle="₹15K – ₹60K+/month"
            />

            <p>
              Social media pricing depends heavily on how much creative work
              the business expects. Strategy-only management and a package
              involving frequent reels, graphics, captions and community
              management are very different services.
            </p>

            <div className="social-levels">
              <SocialLevel
                label="BASIC"
                price="₹15K+"
                text="Strategy, scheduling and consistent content"
              />

              <SocialLevel
                label="GROWTH"
                price="₹30K+"
                text="Higher content volume, creative and analytics"
              />

              <SocialLevel
                label="FULL"
                price="₹60K+"
                text="Heavy creative production and active management"
              />
            </div>

            <div className="content-list">
              {[
                "Content strategy",
                "Post & reel planning",
                "Creative direction",
                "Captions and publishing",
                "Community management",
                "Performance reporting",
              ].map((item) => (
                <div key={item}>
                  <Check size={14} />
                  {item}
                </div>
              ))}
            </div>
          </section>

          {/* GOOGLE ADS */}
          <section className="article-section" id="google-ads">
            <ProductHeading
              number="04"
              icon={<MousePointerClick size={19} />}
              title="Google Ads Management Cost in India"
              subtitle="₹10K – ₹40K+/month"
            />

            <p>
              Paid search has an important distinction that businesses often
              miss: <strong>agency management fees and ad spend are different
              costs.</strong>
            </p>

            <div className="ads-equation">
              <div>
                <span>MANAGEMENT</span>
                <strong>₹25K</strong>
                <small>Agency / specialist fee</small>
              </div>

              <i>+</i>

              <div>
                <span>AD SPEND</span>
                <strong>₹75K</strong>
                <small>Paid to advertising platform</small>
              </div>

              <i>=</i>

              <div className="total">
                <span>TOTAL</span>
                <strong>₹1L</strong>
                <small>Monthly marketing budget</small>
              </div>
            </div>

            <div className="warning-card">
              <ShieldCheck size={18} />

              <div>
                <strong>Never confuse management fees with media spend.</strong>
                <p>
                  A low agency fee does not necessarily mean a low total
                  acquisition cost.
                </p>
              </div>
            </div>

            <div className="ads-work-grid">
              <AdItem title="Campaign strategy" />
              <AdItem title="Keyword research" />
              <AdItem title="Ad copy & testing" />
              <AdItem title="Conversion tracking" />
              <AdItem title="Bid / budget optimization" />
              <AdItem title="Performance reporting" />
            </div>
          </section>

          {/* CONTENT */}
          <section className="article-section" id="content">
            <ProductHeading
              number="05"
              icon={<Megaphone size={19} />}
              title="Content Marketing Cost"
              subtitle="₹15K – ₹60K+/month"
            />

            <p>
              Content marketing can include blog articles, landing pages,
              guides, social content, comparison pages and other assets built
              to attract and convert the right audience.
            </p>

            <div className="content-funnel">
              <ContentStage
                number="01"
                title="Research"
                text="Keywords, audience and search intent"
              />

              <span>→</span>

              <ContentStage
                number="02"
                title="Create"
                text="Articles, pages and visual content"
              />

              <span>→</span>

              <ContentStage
                number="03"
                title="Distribute"
                text="Search, social and campaigns"
              />

              <span>→</span>

              <ContentStage
                number="04"
                title="Convert"
                text="Leads, signups and sales"
              />
            </div>
          </section>

          {/* FULL SERVICE */}
          <section className="article-section" id="full-service">
            <ProductHeading
              number="06"
              icon={<TrendingUp size={19} />}
              title="Full Digital Marketing Package"
              subtitle="₹30K – ₹1.5L+/month"
            />

            <p>
              Full-service marketing combines multiple channels instead of
              relying on one tactic. The exact package depends on the business,
              funnel and growth goals.
            </p>

            <div className="full-service-card">
              <div className="full-service-header">
                <div className="full-service-icon">
                  <TrendingUp size={20} />
                </div>

                <div>
                  <span>EXAMPLE GROWTH SYSTEM</span>
                  <h3>SEO + Content + Ads + Social + CRO</h3>
                </div>
              </div>

              <div className="full-service-flow">
                <FlowPill icon={<Search />} text="SEO" />
                <span>+</span>
                <FlowPill icon={<Megaphone />} text="Content" />
                <span>+</span>
                <FlowPill icon={<MousePointerClick />} text="PPC" />
                <span>+</span>
                <FlowPill icon={<Facebook />} text="Social" />
                <span>+</span>
                <FlowPill icon={<Target />} text="CRO" />
              </div>

              <div className="full-service-features">
                {[
                  "Unified marketing strategy",
                  "Campaign planning",
                  "Landing page optimization",
                  "Search growth",
                  "Paid acquisition",
                  "Analytics & reporting",
                ].map((item) => (
                  <div key={item}>
                    <Check size={14} />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p>
              A full-service package can make sense when the business already
              has enough budget and operational capacity to manage multiple
              acquisition channels at once.
            </p>
          </section>

          {/* BUSINESS SIZE */}
          <section className="article-section" id="business-size">
            <ProductHeading
              number="07"
              icon={<Users size={19} />}
              title="How Much Should Different Businesses Spend?"
              subtitle="Choose by goal"
            />

            <div className="business-grid">
              <BusinessLevel
                title="Startup"
                budget="₹15K – ₹50K+/month"
                focus={[
                  "One primary acquisition channel",
                  "Landing page / website foundation",
                  "Content experiments",
                  "Conversion tracking",
                ]}
              />

              <BusinessLevel
                title="Small Business"
                budget="₹30K – ₹1L+/month"
                focus={[
                  "Local / national SEO",
                  "Social content",
                  "Lead generation",
                  "Google Ads",
                ]}
              />

              <BusinessLevel
                title="Growing Business"
                budget="₹75K – ₹2L+/month+"
                focus={[
                  "SEO + paid acquisition",
                  "Content engine",
                  "CRO",
                  "Remarketing",
                ]}
              />
            </div>

            <div className="callout warning">
              <div className="callout-icon">
                <Gauge size={18} />
              </div>

              <div>
                <strong>Do not spread a small budget across every channel.</strong>

                <p>
                  A focused strategy often outperforms a diluted “we do
                  everything” package when resources are limited.
                </p>
              </div>
            </div>
          </section>

          {/* COMPARISON */}
          <section className="article-section" id="comparison">
            <SectionHeading
              number="08"
              icon={<BarChart3 size={19} />}
              title="SEO vs Google Ads vs Social Media"
            />

            <p>
              Each marketing channel has a different role. The best channel
              depends on how quickly you need traffic, what your audience
              searches for and whether demand already exists.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Channel</th>
                    <th>Planning range</th>
                    <th>Best for</th>
                    <th>Typical speed</th>
                  </tr>
                </thead>

                <tbody>
                  {channelRows.map((row) => (
                    <tr key={row.service}>
                      <td>{row.service}</td>
                      <td>{row.range}</td>
                      <td>{row.bestFor}</td>
                      <td>{row.speed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* TIMELINE */}
          <section className="article-section" id="timeline">
            <ProductHeading
              number="09"
              icon={<Zap size={19} />}
              title="How Long Does Digital Marketing Take?"
              subtitle="Channel dependent"
            />

            <p>
              Marketing is not one activity with one universal timeline.
              Different channels produce different types of feedback and
              compound at different speeds.
            </p>

            <div className="timeline">
              <TimelineItem
                number="01"
                title="Paid Ads"
                duration="Days → Weeks"
                text="Campaign data and traffic can appear quickly, but efficient performance usually requires testing and optimization."
              />

              <TimelineItem
                number="02"
                title="Social Media"
                duration="Weeks → Months"
                text="Consistency, creative quality, audience response and distribution determine how quickly a channel develops."
              />

              <TimelineItem
                number="03"
                title="Content"
                duration="Months"
                text="Useful content compounds over time as it gains search visibility, links, shares and audience trust."
              />

              <TimelineItem
                number="04"
                title="SEO"
                duration="Months+"
                text="Organic growth usually requires sustained technical, content and authority work."
              />

              <TimelineItem
                number="05"
                title="CRO"
                duration="Ongoing"
                text="Conversion improvements depend on traffic volume, testing opportunities and the quality of the existing funnel."
              />
            </div>
          </section>

          {/* AGENCY */}
          <section className="article-section" id="agency">
            <ProductHeading
              number="10"
              icon={<ShieldCheck size={19} />}
              title="How to Choose a Digital Marketing Agency in India"
              subtitle="Look beyond price"
            />

            <p>
              Comparing agencies only by monthly package price can be
              misleading. A useful comparison looks at strategy, deliverables,
              measurement and who actually performs the work.
            </p>

            <div className="agency-checklist">
              <AgencyPoint
                title="Ask what is actually included"
                text="Understand the exact deliverables, content volume, campaigns, reporting and optimization work."
              />

              <AgencyPoint
                title="Ask how success is measured"
                text="Traffic is useful, but leads, qualified enquiries, sales and revenue may matter more."
              />

              <AgencyPoint
                title="Ask who works on your account"
                text="Understand whether strategy and execution are handled by specialists or passed between layers."
              />

              <AgencyPoint
                title="Separate ad spend from agency fees"
                text="This is especially important for Google Ads and other paid acquisition channels."
              />

              <AgencyPoint
                title="Avoid guaranteed ranking promises"
                text="No serious SEO strategy should depend on unrealistic guarantees."
              />

              <AgencyPoint
                title="Check the website and funnel"
                text="Marketing cannot compensate indefinitely for a weak landing page or poor conversion experience."
              />
            </div>
          </section>

          {/* WEBSITE + MARKETING */}
          <section className="article-section website-marketing-section">
            <ProductHeading
              number="11"
              icon={<Globe2 size={19} />}
              title="Why Your Website and Marketing Should Work Together"
              subtitle="The overlooked factor"
            />

            <p>
              Driving traffic to a weak website is an expensive way to create
              poor results. Your website, landing pages and marketing campaigns
              should be treated as one acquisition system.
            </p>

            <div className="growth-loop">
              <GrowthNode
                icon={<Megaphone />}
                title="Traffic"
                text="SEO / Ads / Social"
              />

              <span>→</span>

              <GrowthNode
                icon={<Globe2 />}
                title="Landing page"
                text="Clear offer + UX"
              />

              <span>→</span>

              <GrowthNode
                icon={<Target />}
                title="Conversion"
                text="Lead / signup / sale"
              />

              <span>→</span>

              <GrowthNode
                icon={<LineChart />}
                title="Optimization"
                text="Measure + improve"
              />
            </div>

            <div className="callout purple">
              <div className="callout-icon">
                <Sparkles size={18} />
              </div>

              <div>
                <strong>
                  This is where development + marketing becomes powerful.
                </strong>

                <p>
                  A company that can improve the website, landing pages,
                  tracking and marketing together can reduce the gap between
                  “getting traffic” and “generating business.”
                </p>
              </div>
            </div>
          </section>

          {/* MISTAKES */}
          <section className="article-section" id="mistakes">
            <SectionHeading
              number="!"
              icon={<X size={19} />}
              title="Digital Marketing Mistakes That Waste Budget"
            />

            <div className="mistake-grid">
              <Mistake
                number="01"
                title="Trying every channel"
                text="Spreading a limited budget across SEO, social, ads and content can leave every channel underfunded."
              />

              <Mistake
                number="02"
                title="Running ads without tracking"
                text="Without conversion tracking, it becomes difficult to know what is actually working."
              />

              <Mistake
                number="03"
                title="Sending traffic to weak landing pages"
                text="More clicks do not solve a poor offer, unclear messaging or weak conversion experience."
              />

              <Mistake
                number="04"
                title="Expecting instant SEO"
                text="Organic search growth usually requires consistent work over a meaningful period."
              />

              <Mistake
                number="05"
                title="Measuring vanity metrics"
                text="Followers and impressions can matter, but they should not replace business outcomes."
              />

              <Mistake
                number="06"
                title="Choosing only by lowest price"
                text="A cheaper package can become expensive if strategy, quality or execution is weak."
              />
            </div>
          </section>

          {/* BUDGET */}
          <section className="article-section" id="budget">
            <ProductHeading
              number="12"
              icon={<WalletCards size={19} />}
              title="How to Control Your Digital Marketing Cost"
              subtitle="Without killing growth"
            />

            <div className="budget-list">
              <BudgetItem
                number="01"
                title="Start with one high-value channel"
                text="Find the channel closest to your target customers and prove it before expanding."
              />

              <BudgetItem
                number="02"
                title="Build strong landing pages"
                text="Better conversion rates can increase the return from the traffic you already have."
              />

              <BudgetItem
                number="03"
                title="Track real business outcomes"
                text="Optimize for qualified leads, revenue or signups rather than activity alone."
              />

              <BudgetItem
                number="04"
                title="Repurpose high-performing content"
                text="One strong topic can become an article, social posts, short-form video and landing-page content."
              />

              <BudgetItem
                number="05"
                title="Scale what works"
                text="Increase budget only after you have evidence that the channel and offer are producing acceptable economics."
              />
            </div>
          </section>

          {/* CHECKLIST */}
          <section className="article-section checklist-section">
            <SectionHeading
              number="✓"
              icon={<CircleCheck size={19} />}
              title="Before Hiring a Digital Marketing Agency"
            />

            <div className="big-checklist">
              {[
                "Define your primary business goal",
                "Identify your target customer",
                "Know your average customer value",
                "Make sure your website is conversion-ready",
                "Decide your initial monthly budget",
                "Separate ad spend from management fees",
                "Ask for exact monthly deliverables",
                "Define how leads or sales will be tracked",
                "Agree on reporting expectations",
                "Set realistic timelines",
                "Start with a focused channel strategy",
                "Review results before scaling",
              ].map((item) => (
                <div key={item}>
                  <Check size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* CONCLUSION */}
          <section className="article-section conclusion-section">
            <SectionHeading
              number="→"
              icon={<TrendingUp size={19} />}
              title="So, How Much Should You Spend?"
            />

            <p>
              For many businesses, the right starting point is not the biggest
              possible marketing package. It is the smallest budget that gives
              you enough data to identify a promising acquisition channel.
            </p>

            <div className="budget-ladder">
              <BudgetLevel
                label="START"
                title="Focused channel"
                price="₹15K – ₹50K+"
              />

              <BudgetLevel
                label="GROW"
                title="Multi-channel"
                price="₹30K – ₹1L+"
              />

              <BudgetLevel
                label="SCALE"
                title="Growth marketing"
                price="₹75K – ₹2L+"
              />

              <BudgetLevel
                label="PERFORMANCE"
                title="Aggressive acquisition"
                price="₹1L – ₹2L+"
              />
            </div>

            <p>
              The exact budget should ultimately be connected to your business
              economics: customer value, conversion rate, sales cycle,
              acquisition cost and the amount of qualified demand available.
            </p>
          </section>

          {/* FAQ */}
          <section className="article-section faq-section" id="faq">
            <SectionHeading
              number="?"
              icon={<Sparkles size={19} />}
              title="Frequently Asked Questions"
            />

            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>
                    <span>{faq.question}</span>
                    <ChevronRight size={18} />
                  </summary>

                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* FINAL CTA */}
          <section className="final-cta">
            <div className="final-cta-glow" />

            <div className="final-cta-icon">
              <TrendingUp size={24} />
            </div>

            <div className="final-cta-content">
              <span>DIGITAL MARKETING + DEVELOPMENT</span>

              <h2>Ready to grow your business online?</h2>

              <p>
                Talk to StackCraft Studio about websites, landing pages, SEO,
                paid acquisition and digital marketing built around your actual
                business goals.
              </p>
            </div>

            <Link href="/contact" className="final-cta-button">
              Start a conversation
              <ArrowRight size={17} />
            </Link>
          </section>
        </article>
      </div>

      {/* FOOTER */}
      <footer className="blog-footer">
        <div className="blog-container footer-inner">
          <Link href="/" className="blog-logo">
            <span className="blog-logo-mark">
              <span />
              <span />
              <span />
            </span>

            <span>StackCraft</span>
          </Link>

          <p>
            Websites, web apps, AI solutions and digital marketing for growing
            businesses.
          </p>

          <div className="footer-links">
            <Link href="/services">Services</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <span className="copyright">© 2026 StackCraft Studio</span>
        </div>
      </footer>
    </main>
  );
}

/* ----------------------------------------
   COMPONENTS
----------------------------------------- */

function SectionHeading({
  number,
  icon,
  title,
}: {
  number: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading-top">
        <span className="section-number">{number}</span>
        <span className="section-icon">{icon}</span>
      </div>

      <h2>{title}</h2>
    </div>
  );
}

function ProductHeading({
  number,
  icon,
  title,
  subtitle,
}: {
  number: string;
  icon: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="product-heading">
      <div className="section-heading">
        <div className="section-heading-top">
          <span className="section-number">{number}</span>
          <span className="section-icon">{icon}</span>
        </div>

        <h2>{title}</h2>
      </div>

      <div className="product-price">{subtitle}</div>
    </div>
  );
}

function QuickPrice({
  label,
  price,
  text,
}: {
  label: string;
  price: string;
  text: string;
}) {
  return (
    <div className="quick-price">
      <span>{label}</span>
      <strong>{price}</strong>
      <small>{text}</small>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

function MarketingColumn({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="marketing-column">
      <span>{title}</span>

      {items.map((item) => (
        <div key={item}>
          <Check size={13} />
          {item}
        </div>
      ))}
    </div>
  );
}

function SocialLevel({
  label,
  price,
  text,
}: {
  label: string;
  price: string;
  text: string;
}) {
  return (
    <div className="social-level">
      <span>{label}</span>
      <strong>{price}</strong>
      <p>{text}</p>
    </div>
  );
}

function AdItem({ title }: { title: string }) {
  return (
    <div className="ad-item">
      <Check size={13} />
      {title}
    </div>
  );
}

function ContentStage({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="content-stage">
      <span>{number}</span>
      <strong>{title}</strong>
      <small>{text}</small>
    </div>
  );
}

function FlowPill({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flow-pill">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function BusinessLevel({
  title,
  budget,
  focus,
}: {
  title: string;
  budget: string;
  focus: string[];
}) {
  return (
    <div className="business-card">
      <span>{title}</span>
      <strong>{budget}</strong>

      <div>
        {focus.map((item) => (
          <p key={item}>
            <Check size={13} />
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

function TimelineItem({
  number,
  title,
  duration,
  text,
}: {
  number: string;
  title: string;
  duration: string;
  text: string;
}) {
  return (
    <div className="timeline-item">
      <div className="timeline-number">{number}</div>

      <div className="timeline-content">
        <div className="timeline-title">
          <h3>{title}</h3>
          <span>{duration}</span>
        </div>

        <p>{text}</p>
      </div>
    </div>
  );
}

function AgencyPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="agency-point">
      <div className="agency-check">
        <Check size={14} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function GrowthNode({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="growth-node">
      <div>{icon}</div>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function Mistake({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="mistake">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function BudgetItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="budget-item">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function BudgetLevel({
  label,
  title,
  price,
}: {
  label: string;
  title: string;
  price: string;
}) {
  return (
    <div className="budget-level">
      <span>{label}</span>
      <strong>{price}</strong>
      <p>{title}</p>
    </div>
  );
}

function LayersIcon() {
  return <Layers3 size={19} />;
}