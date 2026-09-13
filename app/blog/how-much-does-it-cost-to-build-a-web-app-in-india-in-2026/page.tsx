import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleCheck,
  Code2,
  Database,
  Globe2,
  Layers3,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import "./blog-post.scss";

export const metadata: Metadata = {
  title: "How Much Does It Cost to Build a Web App in India in 2026?",
  description:
    "Learn web app development cost in India in 2026. Compare basic web apps, business apps, SaaS platforms, marketplaces, AI web apps and enterprise applications by cost, timeline, features, technology and team.",
  keywords: [
    "web app development cost India",
    "web application development cost",
    "web app development company India",
    "custom web app development India",
    "cost to build web application",
    "web application development India",
    "SaaS development cost India",
    "AI web app development cost India",
    "custom software development India",
  ],
  alternates: {
    canonical:
      "https://www.stackcraftstudio.com/blog/how-much-does-it-cost-to-build-a-web-app-in-india-in-2026",
  },
  openGraph: {
    title: "How Much Does It Cost to Build a Web App in India in 2026?",
    description:
      "A practical breakdown of web app development costs in India across different product types, technologies, timelines and team sizes.",
    url: "https://www.stackcraftstudio.com/blog/how-much-does-it-cost-to-build-a-web-app-in-india-in-2026",
    siteName: "StackCraft Studio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web App Development Cost in India in 2026",
    description:
      "Compare web app development costs, timelines, features, tech stacks and teams in India.",
  },
};

const toc = [
  { id: "quick-answer", label: "Quick Answer" },
  { id: "cost-factors", label: "What Affects Cost?" },
  { id: "basic-web-app", label: "Basic Web App" },
  { id: "business-web-app", label: "Business Web App" },
  { id: "saas-platform", label: "SaaS Platform" },
  { id: "marketplace", label: "Marketplace" },
  { id: "ai-web-app", label: "AI-Powered Web App" },
  { id: "enterprise", label: "Enterprise Web App" },
  { id: "comparison", label: "Cost Comparison" },
  { id: "team", label: "Team Required" },
  { id: "technology", label: "Technology Stack" },
  { id: "india-vs-global", label: "India vs Global Costs" },
  { id: "mistakes", label: "Common Mistakes" },
  { id: "budget", label: "How to Reduce Cost" },
  { id: "faq", label: "FAQ" },
];

const faqs = [
  {
    question: "How much does it cost to build a web app in India?",
    answer:
      "The cost varies significantly by scope. A focused basic application may require a relatively small development budget, while SaaS platforms, marketplaces, AI applications and enterprise systems can require much larger investments. The feature set, design, integrations, security and team composition have a major effect on the final cost.",
  },
  {
    question: "Is web app development cheaper in India?",
    answer:
      "India can offer access to experienced engineering teams at competitive development rates, but the final project cost still depends on product complexity, team quality, communication, scope and engineering standards. Lower hourly rates do not automatically mean a lower total cost if the project requires significant rework.",
  },
  {
    question: "How long does it take to build a web application in India?",
    answer:
      "A basic application can potentially be delivered within several weeks, while more complex SaaS products, marketplaces, AI applications and enterprise platforms can require several months. Discovery, design, integrations, testing and deployment all affect the timeline.",
  },
  {
    question: "What is included in web app development cost?",
    answer:
      "Depending on the project, costs can include discovery, UX/UI design, frontend development, backend development, database architecture, authentication, integrations, testing, deployment, monitoring and post-launch support.",
  },
  {
    question: "How much does an AI web app cost in India?",
    answer:
      "AI web app cost depends on the AI workflow, model usage, integrations, RAG or knowledge systems, agentic functionality, UI, backend and infrastructure. A focused AI MVP can be much simpler than a production AI platform with multiple workflows and integrations.",
  },
  {
    question: "Should I hire freelancers or a web app development company?",
    answer:
      "For a small, clearly defined project, freelancers can be suitable. For products involving product strategy, UX, backend architecture, multiple integrations, AI, security or ongoing scaling, a dedicated development team can reduce coordination and execution risk.",
  },
  {
    question: "How do I get an accurate web app development estimate?",
    answer:
      "The most reliable approach is to define the target users, primary workflow, required features, integrations, design expectations, technical requirements and launch scope first. A development estimate based only on a product idea or feature count is usually too broad.",
  },
];

const costRows = [
  {
    type: "Basic Web App",
    cost: "₹2L – ₹6L+",
    timeline: "4–8 weeks",
    team: "1–3 people",
  },
  {
    type: "Business Web App",
    cost: "₹5L – ₹15L+",
    timeline: "6–12 weeks",
    team: "2–4 people",
  },
  {
    type: "SaaS Platform",
    cost: "₹10L – ₹30L+",
    timeline: "10–20 weeks",
    team: "3–6 people",
  },
  {
    type: "Marketplace",
    cost: "₹12L – ₹35L+",
    timeline: "12–24 weeks",
    team: "4–7 people",
  },
  {
    type: "AI-Powered Web App",
    cost: "₹8L – ₹30L+",
    timeline: "8–20 weeks",
    team: "3–6 people",
  },
  {
    type: "Enterprise Web App",
    cost: "₹25L – ₹1Cr+",
    timeline: "20–40+ weeks",
    team: "6–12+ people",
  },
];

const models = [
  {
    icon: BriefcaseBusiness,
    title: "Basic Web App",
    cost: "₹2L – ₹6L+",
    timeline: "4–8 weeks",
    description:
      "A focused application with authentication, forms, dashboards or straightforward CRUD workflows.",
    features: [
      "Authentication",
      "Dashboard",
      "Forms & CRUD",
      "Basic admin",
      "Responsive UI",
    ],
    tech: "Next.js / React + Node.js + PostgreSQL",
    team: "1–3 people",
  },
  {
    icon: BarChart3,
    title: "Business Web App",
    cost: "₹5L – ₹15L+",
    timeline: "6–12 weeks",
    description:
      "A more capable application built around business workflows, reporting, roles and integrations.",
    features: [
      "Role-based access",
      "Dashboards",
      "Reports",
      "API integrations",
      "Notifications",
    ],
    tech: "Next.js + TypeScript + Node.js + PostgreSQL",
    team: "2–4 people",
  },
  {
    icon: Layers3,
    title: "SaaS Platform",
    cost: "₹10L – ₹30L+",
    timeline: "10–20 weeks",
    description:
      "A multi-user software product with accounts, subscriptions, usage, product workflows and a scalable backend.",
    features: [
      "Multi-tenancy",
      "Subscriptions",
      "Usage limits",
      "Admin panel",
      "Analytics",
    ],
    tech: "Next.js + Backend APIs + PostgreSQL + Cloud",
    team: "3–6 people",
  },
  {
    icon: Store,
    title: "Marketplace",
    cost: "₹12L – ₹35L+",
    timeline: "12–24 weeks",
    description:
      "A two-sided product connecting buyers and sellers, providers and customers, or other participant groups.",
    features: [
      "Multiple user roles",
      "Listings",
      "Search & filters",
      "Payments",
      "Messaging",
    ],
    tech: "Next.js + Node.js + PostgreSQL + Payments",
    team: "4–7 people",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Web App",
    cost: "₹8L – ₹30L+",
    timeline: "8–20 weeks",
    description:
      "A web product where AI is part of the core workflow rather than a simple chatbot widget.",
    features: [
      "AI model integration",
      "Prompt workflows",
      "RAG / knowledge",
      "Usage controls",
      "AI evaluation",
    ],
    tech: "Next.js + APIs + PostgreSQL + AI services",
    team: "3–6 people",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Web App",
    cost: "₹25L – ₹1Cr+",
    timeline: "20–40+ weeks",
    description:
      "Large applications requiring advanced permissions, integrations, security, compliance and operational reliability.",
    features: [
      "Advanced permissions",
      "SSO",
      "Audit logs",
      "Enterprise integrations",
      "Observability",
    ],
    tech: "Modern web stack + cloud infrastructure",
    team: "6–12+ people",
  },
];

function JsonLd() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How Much Does It Cost to Build a Web App in India in 2026?",
    description:
      "A practical guide to web app development costs in India by product complexity, technology, timeline and team size.",
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
        "https://www.stackcraftstudio.com/blog/how-much-does-it-cost-to-build-a-web-app-in-india-in-2026",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
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

export default function WebAppCostIndiaPage() {
  return (
    <main className="web-app-cost-blog">
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
            Get an estimate
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
            <span>Web App Development Cost</span>
          </div>

          <div className="blog-hero-content">
            <div className="blog-eyebrow">
              <Sparkles size={14} />
              WEB APP DEVELOPMENT IN INDIA
            </div>

            <h1>
              How Much Does It Cost to Build a{" "}
              <span className="gradient-text">Web App in India</span> in 2026?
            </h1>

            <p className="blog-hero-description">
              A practical breakdown of web application development costs in
              India—from basic business apps and SaaS products to marketplaces,
              AI-powered applications and enterprise platforms.
            </p>

            <div className="blog-hero-meta">
              <span>Updated September 14, 2026</span>
              <span className="meta-dot" />
              <span>13 min read</span>
              <span className="meta-dot" />
              <span>Web Development</span>
            </div>

            <div className="blog-hero-actions">
              <a href="#quick-answer" className="primary-blog-button">
                See the cost breakdown
                <ArrowRight size={17} />
              </a>

              <Link href="/contact" className="secondary-blog-button">
                Get a project estimate
              </Link>
            </div>
          </div>

          <div className="hero-stats">
            <div>
              <strong>₹2L+</strong>
              <span>Focused web app projects</span>
            </div>

            <div>
              <strong>₹10L+</strong>
              <span>Complex SaaS products</span>
            </div>

            <div>
              <strong>₹25L+</strong>
              <span>Enterprise-scale systems</span>
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
              <Rocket size={20} />
            </div>

            <h3>Planning a web app?</h3>

            <p>
              Share your product idea and get a practical scope, architecture
              and development estimate.
            </p>

            <Link href="/contact">
              Talk to StackCraft
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
                Web app development in India can range from{" "}
                <span>₹2L to ₹1Cr+</span>, depending on the product.
              </h2>

              <p>
                A small CRUD application and an enterprise platform may both
                technically be “web apps,” but they have completely different
                requirements, teams, timelines and engineering costs.
              </p>

              <div className="quick-price-grid">
                <QuickPrice
                  label="Basic"
                  price="₹2L – ₹6L+"
                  text="Focused application"
                />
                <QuickPrice
                  label="Business"
                  price="₹5L – ₹15L+"
                  text="Workflow-driven product"
                />
                <QuickPrice
                  label="SaaS"
                  price="₹10L – ₹30L+"
                  text="Subscription platform"
                />
                <QuickPrice
                  label="Enterprise"
                  price="₹25L – ₹1Cr+"
                  text="Complex production system"
                />
              </div>
            </div>

            <p className="lead">
              The right question is not “What does a web app cost?” It is:
              <strong> “What kind of web application are you building, for
              whom, and how much complexity does it need?”</strong>
            </p>

            <p>
              The ranges in this article are planning ranges rather than a
              universal Indian market price or a fixed StackCraft quote.
            </p>
          </section>

          {/* COST FACTORS */}
          <section className="article-section" id="cost-factors">
            <SectionHeading
              number="01"
              icon={<GaugeIcon />}
              title="What Actually Determines Web App Development Cost?"
            />

            <p>
              Feature count is only one part of the equation. Architecture,
              integrations, permissions, UX complexity and operational
              requirements can change a project's cost significantly.
            </p>

            <div className="factor-grid">
              <Factor
                icon={<Users />}
                title="Users & roles"
                text="A single-user tool is simpler than a multi-tenant platform with admins, teams and granular permissions."
              />
              <Factor
                icon={<Workflow />}
                title="Workflows"
                text="Simple forms cost less than complex workflows with approvals, automation and business rules."
              />
              <Factor
                icon={<NetworkIcon />}
                title="Integrations"
                text="Payments, CRMs, communication tools, external APIs and enterprise systems add development complexity."
              />
              <Factor
                icon={<Sparkles />}
                title="AI functionality"
                text="AI models, RAG, agents, evaluation and usage controls can add another engineering layer."
              />
              <Factor
                icon={<ShieldCheck />}
                title="Security"
                text="SSO, audit trails, advanced authorization and compliance requirements increase scope."
              />
              <Factor
                icon={<GaugeIcon />}
                title="Scale"
                text="Expected traffic, reliability targets and infrastructure requirements affect architecture and cost."
              />
            </div>
          </section>

          {/* BASIC */}
          <section className="article-section product-section" id="basic-web-app">
            <ProductHeading
              number="02"
              icon={<BriefcaseBusiness size={19} />}
              title="Basic Web App"
              subtitle="₹2L – ₹6L+"
            />

            <p>
              A basic web application usually focuses on one primary workflow.
              It may include user authentication, forms, dashboards and
              database-backed CRUD functionality without significant
              third-party complexity.
            </p>

            <ProductCard product={models[0]} />
          </section>

          {/* BUSINESS */}
          <section className="article-section product-section" id="business-web-app">
            <ProductHeading
              number="03"
              icon={<BarChart3 size={19} />}
              title="Business Web App"
              subtitle="₹5L – ₹15L+"
            />

            <p>
              Business applications become more complex when the software is
              built around real operational workflows. Multiple user roles,
              reports, notifications and external integrations often become
              important.
            </p>

            <ProductCard product={models[1]} />
          </section>

          {/* SAAS */}
          <section className="article-section product-section" id="saas-platform">
            <ProductHeading
              number="04"
              icon={<Layers3 size={19} />}
              title="SaaS Platform"
              subtitle="₹10L – ₹30L+"
            />

            <p>
              SaaS products introduce another layer of complexity because the
              application must support multiple customers, subscriptions,
              billing, usage limits, account management and ongoing product
              growth.
            </p>

            <ProductCard product={models[2]} />

            <div className="callout purple">
              <div className="callout-icon">
                <Sparkles size={18} />
              </div>

              <div>
                <strong>SaaS cost is about more than screens.</strong>

                <p>
                  Multi-tenancy, billing, permissions, analytics and reliable
                  backend architecture often make SaaS development
                  substantially more complex than a normal business website.
                </p>
              </div>
            </div>
          </section>

          {/* MARKETPLACE */}
          <section className="article-section product-section" id="marketplace">
            <ProductHeading
              number="05"
              icon={<Store size={19} />}
              title="Marketplace"
              subtitle="₹12L – ₹35L+"
            />

            <p>
              Marketplaces usually have at least two sides of the product:
              buyers and sellers, customers and providers, employers and
              candidates, or similar groups.
            </p>

            <ProductCard product={models[3]} />

            <div className="marketplace-flow">
              <MarketplaceNode
                icon={<Users />}
                title="User"
                text="Search / discover"
              />

              <span>→</span>

              <MarketplaceNode
                icon={<Store />}
                title="Listing"
                text="Product / service"
              />

              <span>→</span>

              <MarketplaceNode
                icon={<Lock />}
                title="Transaction"
                text="Payment / booking"
              />

              <span>→</span>

              <MarketplaceNode
                icon={<Check />}
                title="Fulfilment"
                text="Complete workflow"
              />
            </div>
          </section>

          {/* AI */}
          <section className="article-section product-section" id="ai-web-app">
            <ProductHeading
              number="06"
              icon={<Sparkles size={19} />}
              title="AI-Powered Web App"
              subtitle="₹8L – ₹30L+"
            />

            <p>
              AI applications range from simple AI-assisted features to
              complete products built around AI workflows, private knowledge,
              automation or agentic behavior.
            </p>

            <ProductCard product={models[4]} />

            <div className="ai-cost-stack">
              <div>
                <BrainIcon />
                <strong>Model layer</strong>
                <span>LLMs, embeddings or other AI services</span>
              </div>

              <div>
                <Database size={19} />
                <strong>Knowledge layer</strong>
                <span>Documents, data, vector search and RAG</span>
              </div>

              <div>
                <Workflow size={19} />
                <strong>Workflow layer</strong>
                <span>Tools, APIs and AI automation</span>
              </div>

              <div>
                <GaugeIcon />
                <strong>Evaluation layer</strong>
                <span>Monitoring, testing and usage controls</span>
              </div>
            </div>

            <p>
              For a deeper AI product budget breakdown, read our{" "}
              <Link href="/blog/how-much-does-it-cost-to-build-an-ai-saas-app-in-2026">
                AI SaaS development cost guide
              </Link>
              .
            </p>
          </section>

          {/* ENTERPRISE */}
          <section className="article-section product-section" id="enterprise">
            <ProductHeading
              number="07"
              icon={<ShieldCheck size={19} />}
              title="Enterprise Web Application"
              subtitle="₹25L – ₹1Cr+"
            />

            <p>
              Enterprise projects are usually expensive because of
              organizational and operational complexity—not simply because
              there are more pages.
            </p>

            <ProductCard product={models[5]} />

            <div className="enterprise-grid">
              <EnterpriseItem
                icon={<Lock />}
                title="Advanced security"
                text="SSO, granular authorization, audit logs and secure data handling."
              />
              <EnterpriseItem
                icon={<NetworkIcon />}
                title="Integrations"
                text="ERP, CRM, internal APIs and enterprise systems."
              />
              <EnterpriseItem
                icon={<Server />}
                title="Infrastructure"
                text="Production environments, backups, observability and reliability."
              />
              <EnterpriseItem
                icon={<Users />}
                title="Teams"
                text="Multiple developers, QA, design, product and technical leadership."
              />
            </div>
          </section>

          {/* COMPARISON */}
          <section className="article-section" id="comparison">
            <SectionHeading
              number="08"
              icon={<BarChart3 size={19} />}
              title="Web App Development Cost Comparison"
            />

            <p>
              This table gives you a fast way to compare the six common
              categories before getting into project-specific requirements.
            </p>

            <div className="comparison-table-wrap">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Estimated cost</th>
                    <th>Timeline</th>
                    <th>Typical team</th>
                  </tr>
                </thead>

                <tbody>
                  {costRows.map((row) => (
                    <tr key={row.type}>
                      <td>{row.type}</td>
                      <td>{row.cost}</td>
                      <td>{row.timeline}</td>
                      <td>{row.team}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="callout warning">
              <div className="callout-icon">
                <ShieldCheck size={18} />
              </div>

              <div>
                <strong>
                  Treat these numbers as planning ranges, not quotations.
                </strong>

                <p>
                  Real project budgets depend on requirements, design quality,
                  integrations, engineering depth, timeline and post-launch
                  expectations.
                </p>
              </div>
            </div>
          </section>

          {/* TEAM */}
          <section className="article-section" id="team">
            <SectionHeading
              number="09"
              icon={<Users size={19} />}
              title="What Team Do You Need?"
            />

            <p>
              Team size should follow product complexity. More developers do
              not automatically mean faster delivery if the project is not
              well structured.
            </p>

            <div className="team-grid">
              <TeamCard
                title="Basic"
                size="1–3 people"
                roles={[
                  "Full-stack developer",
                  "Designer",
                  "Part-time QA",
                ]}
              />

              <TeamCard
                title="SaaS / Marketplace"
                size="3–6 people"
                roles={[
                  "Frontend developer",
                  "Backend developer",
                  "UI/UX designer",
                  "QA",
                  "Product / technical lead",
                ]}
              />

              <TeamCard
                title="Enterprise"
                size="6–12+ people"
                roles={[
                  "Frontend",
                  "Backend",
                  "UI/UX",
                  "QA",
                  "DevOps",
                  "Product",
                  "Engineering leadership",
                ]}
              />
            </div>
          </section>

          {/* TECHNOLOGY */}
          <section className="article-section" id="technology">
            <SectionHeading
              number="10"
              icon={<Code2 size={19} />}
              title="What Technology Should You Use?"
            />

            <p>
              The technology should fit the product rather than being selected
              because it is trendy. For many modern web products, a TypeScript
              based full-stack architecture can provide a strong balance of
              developer productivity and scalability.
            </p>

            <div className="technology-grid">
              <Tech
                icon={<Globe2 />}
                title="Frontend"
                value="Next.js / React"
                text="Fast, responsive product interfaces and SEO-friendly web experiences."
              />
              <Tech
                icon={<Server />}
                title="Backend"
                value="Node.js / APIs"
                text="Application logic, authentication, integrations and workflows."
              />
              <Tech
                icon={<Database />}
                title="Database"
                value="PostgreSQL"
                text="Reliable relational data storage for most business applications."
              />
              <Tech
                icon={<Sparkles />}
                title="AI"
                value="Model APIs / RAG"
                text="AI capabilities, knowledge retrieval and automation when required."
              />
              <Tech
                icon={<Lock />}
                title="Authentication"
                value="Session / OAuth / SSO"
                text="Authentication and permission systems appropriate to product complexity."
              />
              <Tech
                icon={<Rocket />}
                title="Infrastructure"
                value="Cloud platforms"
                text="Deploy, monitor, scale and maintain the application in production."
              />
            </div>
          </section>

          {/* INDIA */}
          <section className="article-section" id="india-vs-global">
            <SectionHeading
              number="11"
              icon={<Globe2 size={19} />}
              title="Why Do Companies Build Web Apps With Teams in India?"
            />

            <p>
              India is a major software engineering market with a large pool
              of developers, designers, QA professionals and technical
              specialists.
            </p>

            <div className="india-grid">
              <IndiaPoint
                title="Engineering talent"
                text="Access to developers across frontend, backend, cloud, AI and product engineering."
              />
              <IndiaPoint
                title="Flexible team models"
                text="Businesses can work with dedicated teams, specialists or compact product squads."
              />
              <IndiaPoint
                title="Cost efficiency"
                text="Development budgets can be competitive while still supporting high-quality engineering."
              />
              <IndiaPoint
                title="Product development"
                text="Modern teams can cover discovery, design, development, testing and ongoing iteration."
              />
            </div>

            <div className="callout purple">
              <div className="callout-icon">
                <Zap size={18} />
              </div>

              <div>
                <strong>
                  Don't choose a vendor based only on hourly rates.
                </strong>

                <p>
                  A cheap implementation that requires major rework can cost
                  more than a properly architected product delivered by an
                  experienced team.
                </p>
              </div>
            </div>
          </section>

          {/* MISTAKES */}
          <section className="article-section" id="mistakes">
            <SectionHeading
              number="!"
              icon={<X size={19} />}
              title="Common Web App Development Mistakes That Increase Cost"
            />

            <div className="mistake-grid">
              <Mistake
                number="01"
                title="Starting without a clear MVP"
                text="Undefined scope causes feature creep, redesign and unnecessary engineering."
              />
              <Mistake
                number="02"
                title="Choosing technology too early"
                text="The stack should follow the product requirements, not the other way around."
              />
              <Mistake
                number="03"
                title="Ignoring integrations"
                text="Third-party APIs, payment systems and external workflows can become major development work."
              />
              <Mistake
                number="04"
                title="Underestimating QA"
                text="Testing, bug fixing and regression work should be part of the original project scope."
              />
              <Mistake
                number="05"
                title="Building for scale too soon"
                text="Premature infrastructure complexity can increase cost before there is real product demand."
              />
              <Mistake
                number="06"
                title="No post-launch plan"
                text="Production products need monitoring, security updates, maintenance and iteration."
              />
            </div>
          </section>

          {/* BUDGET */}
          <section className="article-section" id="budget">
            <SectionHeading
              number="12"
              icon={<BarChart3 size={19} />}
              title="How to Reduce Web App Development Cost Without Cutting Quality"
            />

            <p>
              The best way to control budget is not to remove engineering
              fundamentals. It is to reduce unnecessary scope and sequence the
              product intelligently.
            </p>

            <div className="budget-list">
              <BudgetItem
                number="01"
                title="Build an MVP first"
                text="Validate the core workflow before investing in advanced features."
              />

              <BudgetItem
                number="02"
                title="Use proven technologies"
                text="Avoid unnecessary experimentation with infrastructure when established tools solve the problem."
              />

              <BudgetItem
                number="03"
                title="Prioritize integrations"
                text="Identify which integrations are genuinely required for launch."
              />

              <BudgetItem
                number="04"
                title="Design before development"
                text="Clear UX flows reduce redesign and engineering rework."
              />

              <BudgetItem
                number="05"
                title="Plan the architecture"
                text="Good architecture makes future features easier without forcing an enterprise stack on an early MVP."
              />
            </div>
          </section>

          {/* CHECKLIST */}
          <section className="article-section checklist-section">
            <SectionHeading
              number="✓"
              icon={<CircleCheck size={19} />}
              title="Before Asking a Development Company for a Quote"
            />

            <div className="big-checklist">
              {[
                "Define the target users",
                "Describe the main problem",
                "List the essential MVP features",
                "Map the primary user workflow",
                "Identify required integrations",
                "Decide whether payments are needed",
                "Decide whether AI is required",
                "Define user roles and permissions",
                "Estimate expected initial traffic",
                "Decide the launch timeline",
                "Prepare examples of products you like",
                "Separate launch features from future features",
              ].map((item) => (
                <div key={item}>
                  <Check size={15} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FINAL ANSWER */}
          <section className="article-section conclusion-section">
            <SectionHeading
              number="→"
              icon={<Rocket size={19} />}
              title="So, What Should You Budget?"
            />

            <p>
              For a focused web application, a budget in the lower range may be
              enough. Once your product introduces multiple user types,
              subscriptions, payments, integrations, complex workflows or AI,
              the budget usually moves upward.
            </p>

            <div className="budget-ladder">
              <BudgetLevel
                label="START"
                title="Basic Web App"
                price="₹2L – ₹6L+"
              />
              <BudgetLevel
                label="GROW"
                title="Business Web App"
                price="₹5L – ₹15L+"
              />
              <BudgetLevel
                label="SCALE"
                title="SaaS / Marketplace / AI"
                price="₹8L – ₹35L+"
              />
              <BudgetLevel
                label="ENTERPRISE"
                title="Large Production System"
                price="₹25L – ₹1Cr+"
              />
            </div>

            <p>
              The exact number should come after understanding the product
              rather than before it. A strong development partner should be
              able to explain not only <strong>what the project costs</strong>,
              but <strong>why it costs that amount</strong>.
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

          {/* CTA */}
          <section className="final-cta">
            <div className="final-cta-glow" />

            <div className="final-cta-icon">
              <Rocket size={24} />
            </div>

            <div className="final-cta-content">
              <span>CUSTOM WEB APP DEVELOPMENT INDIA</span>

              <h2>Have a web app idea?</h2>

              <p>
                Talk to StackCraft Studio about your product, MVP scope,
                architecture and development requirements.
              </p>
            </div>

            <Link href="/contact" className="final-cta-button">
              Get an estimate
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
            Custom websites, web apps, SaaS products and AI-powered solutions.
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

function ProductCard({
  product,
}: {
  product: {
    icon: React.ComponentType<{ size?: number }>;
    title: string;
    cost: string;
    timeline: string;
    description: string;
    features: string[];
    tech: string;
    team: string;
  };
}) {
  const Icon = product.icon;

  return (
    <div className="product-card">
      <div className="product-card-top">
        <div className="product-card-icon">
          <Icon size={20} />
        </div>

        <div>
          <span className="product-card-label">{product.title}</span>
          <h3>{product.cost}</h3>
        </div>
      </div>

      <p>{product.description}</p>

      <div className="product-meta">
        <div>
          <span>Timeline</span>
          <strong>{product.timeline}</strong>
        </div>

        <div>
          <span>Typical team</span>
          <strong>{product.team}</strong>
        </div>

        <div>
          <span>Technology</span>
          <strong>{product.tech}</strong>
        </div>
      </div>

      <div className="product-features">
        {product.features.map((feature) => (
          <div key={feature}>
            <Check size={14} />
            {feature}
          </div>
        ))}
      </div>
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

function Factor({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="factor-card">
      <div className="factor-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{text}</p>
    </div>
  );
}

function MarketplaceNode({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="marketplace-node">
      <div>{icon}</div>
      <strong>{title}</strong>
      <span>{text}</span>
    </div>
  );
}

function EnterpriseItem({
  icon,
  title,
  text,
}: {
  icon: ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="enterprise-item">
      <div className="enterprise-icon">{icon}</div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function TeamCard({
  title,
  size,
  roles,
}: {
  title: string;
  size: string;
  roles: string[];
}) {
  return (
    <div className="team-card">
      <span>{title}</span>
      <strong>{size}</strong>

      <div>
        {roles.map((role) => (
          <p key={role}>
            <Check size={13} />
            {role}
          </p>
        ))}
      </div>
    </div>
  );
}

function Tech({
  icon,
  title,
  value,
  text,
}: {
  icon: ReactNode;
  title: string;
  value: string;
  text: string;
}) {
  return (
    <div className="tech-card">
      <div className="tech-icon">{icon}</div>
      <span>{title}</span>
      <strong>{value}</strong>
      <p>{text}</p>
    </div>
  );
}

function IndiaPoint({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="india-point">
      <div>
        <Check size={15} />
      </div>

      <section>
        <h3>{title}</h3>
        <p>{text}</p>
      </section>
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

function BrainIcon() {
  return <Sparkles size={19} />;
}

function GaugeIcon() {
  return <Gauge size={19} />;
}

function NetworkIcon() {
  return <Network size={19} />;
}