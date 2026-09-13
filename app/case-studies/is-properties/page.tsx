import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Home,
  Layers3,
  MapPin,
  Monitor,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import "./case-study.scss";

export const metadata: Metadata = {
  title:
    "IS Properties Case Study | Real Estate Website Design & Development | StackCraft Studio",
  description:
    "Explore how StackCraft Studio designed and developed a modern real estate website for IS Properties, focused on property presentation, brand presence and a clearer digital experience.",
  keywords: [
    "IS Properties case study",
    "IS Properties website",
    "real estate website design",
    "real estate website development",
    "Gurugram real estate website",
    "property website development",
    "real estate web design India",
    "StackCraft Studio case study",
  ],
  alternates: {
    canonical:
      "https://www.stackcraftstudio.com/case-studies/is-properties",
  },
  openGraph: {
    title:
      "IS Properties Case Study | Real Estate Website Design & Development",
    description:
      "A real estate website design and development case study by StackCraft Studio.",
    url: "https://www.stackcraftstudio.com/case-studies/is-properties",
    siteName: "StackCraft Studio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IS Properties Case Study | StackCraft Studio",
    description:
      "Explore the design and development approach behind the IS Properties website.",
  },
};

const projectHighlights = [
  {
    icon: Monitor,
    label: "Project",
    value: "IS Properties",
  },
  {
    icon: Target,
    label: "Industry",
    value: "Real Estate",
  },
  {
    icon: Code2,
    label: "Service",
    value: "Web Design & Development",
  },
  {
    icon: MapPin,
    label: "Market",
    value: "Gurugram",
  },
];

const propertyExperience = [
  "Property presentation",
  "Real estate services",
  "Location-focused content",
  "Project information",
  "Enquiry journey",
  "Responsive experience",
];

const challenges = [
  {
    number: "01",
    title: "Real estate is visual",
    text: "Property websites need strong visual presentation while still making important information easy to understand and compare.",
  },
  {
    number: "02",
    title: "Build trust quickly",
    text: "The digital experience needs to make the business look professional and credible from the first interaction.",
  },
  {
    number: "03",
    title: "Organize property information",
    text: "Location, property information and business messaging need to be structured without overwhelming the visitor.",
  },
  {
    number: "04",
    title: "Create a clear enquiry path",
    text: "Visitors should be able to move naturally from browsing and understanding properties toward making an enquiry.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We first looked at the business, its real-estate positioning and the information potential customers would need.",
  },
  {
    number: "02",
    title: "Structure",
    text: "The website content and property-oriented information were organized into a clearer visitor journey.",
  },
  {
    number: "03",
    title: "Design",
    text: "We created a visual direction focused on property imagery, professional presentation and clear content hierarchy.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The design was translated into a responsive website experience with structured sections and interaction points.",
  },
  {
    number: "05",
    title: "Refine",
    text: "The final interface was refined around readability, consistency, responsive behavior and enquiry-oriented actions.",
  },
];

const designPrinciples = [
  {
    icon: Building2,
    number: "01",
    title: "Property First",
    text: "The interface gives visual property content enough space to make listings and real-estate information easier to explore.",
  },
  {
    icon: Layers3,
    number: "02",
    title: "Clear Hierarchy",
    text: "Information is separated into focused sections so visitors can understand the business without unnecessary friction.",
  },
  {
    icon: Palette,
    number: "03",
    title: "Professional Visuals",
    text: "The design direction focuses on creating a polished digital identity suitable for the real-estate industry.",
  },
  {
    icon: Target,
    number: "04",
    title: "Conversion Focus",
    text: "The experience is structured to move users toward the next useful action instead of leaving them without direction.",
  },
];

const keyFeatures = [
  {
    icon: Building2,
    title: "Real Estate Presentation",
    text: "A structured interface for presenting the real-estate business and its property-oriented offering.",
  },
  {
    icon: MapPin,
    title: "Location Context",
    text: "Location and market information can be surfaced as part of the overall property discovery experience.",
  },
  {
    icon: Layers3,
    title: "Structured Content",
    text: "Important property and business information is organized into digestible sections.",
  },
  {
    icon: Target,
    title: "Enquiry-Oriented Journey",
    text: "The site is designed to help visitors move from discovery toward contacting the business.",
  },
  {
    icon: Monitor,
    title: "Responsive Experience",
    text: "The website layout is designed to adapt across desktop and smaller-screen experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Brand Presence",
    text: "The overall experience creates a more polished digital touchpoint for a property business.",
  },
];

const outcomes = [
  "A stronger digital presentation for IS Properties",
  "A clearer real-estate focused information hierarchy",
  "A more professional online brand experience",
  "A structured property discovery and enquiry journey",
  "A responsive website suitable for modern visitors",
];

const toc = [
  { id: "overview", label: "Project Overview" },
  { id: "client-industry", label: "Client / Industry" },
  { id: "challenge", label: "Challenge" },
  { id: "approach", label: "Our Approach" },
  { id: "design", label: "Design" },
  { id: "development", label: "Development" },
  { id: "features", label: "Key Features" },
  { id: "result", label: "Final Result" },
  { id: "live-website", label: "Live Website" },
];

function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "IS Properties Case Study | Real Estate Website Design & Development",
    description:
      "A real estate website design and development case study for IS Properties by StackCraft Studio.",
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
        "https://www.stackcraftstudio.com/case-studies/is-properties",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

export default function ISPropertiesCaseStudyPage() {
  return (
    <main className="isproperties-case-study">
      <JsonLd />

      <div className="case-study-background">
        <div className="case-study-grid" />
        <div className="case-study-glow case-study-glow-one" />
        <div className="case-study-glow case-study-glow-two" />
      </div>

      {/* HERO */}
      <section className="case-study-hero">
        <div className="case-study-container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={13} />
            <Link href="/case-studies">Case Studies</Link>
            <ChevronRight size={13} />
            <span>IS Properties</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <Zap size={13} />
                WEB DESIGN & DEVELOPMENT
              </div>

              <h1>
                IS Properties
                <span>Real Estate & Property Sales</span>
              </h1>

              <p>
                A professional digital experience designed and developed for
                IS Properties, with a focus on real-estate presentation,
                property discovery and a clearer path toward customer
                enquiries.
              </p>

              <div className="hero-actions">
                <a
                  href="https://www.isproperties.in/?i=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button"
                >
                  Visit live website
                  <ExternalLink size={15} />
                </a>

                <Link href="/contact" className="secondary-button">
                  Build something similar
                  <ArrowRight size={15} />
                </Link>
              </div>

              <div className="hero-tags">
                <span>Web Design</span>
                <span>Web Development</span>
                <span>Real Estate</span>
                <span>Gurugram</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-visual-frame">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <i />
                    <i />
                    <i />
                  </div>

                  <div className="browser-url">
                    isproperties.in
                  </div>

                  <div className="browser-action">
                    <ArrowUpRight size={13} />
                  </div>
                </div>

                <div className="hero-image-wrap">
                  <Image
                    src="/mockups/isproperties.webp"
                    alt="IS Properties real estate website designed and developed by StackCraft Studio"
                    width={1000}
                    height={750}
                    priority
                    className="hero-image"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="project-highlights">
            {projectHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div className="project-highlight" key={item.label}>
                  <div className="highlight-icon">
                    <Icon size={16} />
                  </div>

                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <div className="case-study-container content-layout">
        <aside className="case-study-sidebar">
          <div className="toc">
            <span>CASE STUDY</span>

            <nav>
              {toc.map((item) => (
                <a href={`#${item.id}`} key={item.id}>
                  {item.label}
                  <ChevronRight size={13} />
                </a>
              ))}
            </nav>
          </div>

          <div className="sidebar-card">
            <div className="sidebar-card-icon">
              <Building2 size={17} />
            </div>

            <strong>Need a real estate website?</strong>

            <p>
              We design and develop property websites focused on presentation,
              trust and customer enquiries.
            </p>

            <Link href="/contact">
              Start your project
              <ArrowRight size={13} />
            </Link>
          </div>
        </aside>

        <article className="case-study-article">
          {/* 01 */}
          <section id="overview" className="case-section">
            <SectionHeading
              number="01"
              title="Project Overview"
              icon={<Monitor size={18} />}
            />

            <div className="section-intro">
              <p>
                IS Properties is a real-estate focused business serving the
                property market in Gurugram. StackCraft Studio designed and
                developed a dedicated website to give the business a stronger
                online presence and a more structured property-focused
                experience.
              </p>

              <p>
                The project centered on creating a professional interface where
                visitors can understand the business, explore property-related
                information and move toward making an enquiry.
              </p>
            </div>

            <div className="overview-banner">
              <div>
                <span>PROJECT TYPE</span>
                <strong>Real Estate Website</strong>
              </div>

              <div>
                <span>PRIMARY GOAL</span>
                <strong>Presentation + Enquiries</strong>
              </div>

              <div>
                <span>CORE MARKET</span>
                <strong>Gurugram</strong>
              </div>
            </div>
          </section>

          {/* 02 */}
          <section id="client-industry" className="case-section">
            <SectionHeading
              number="02"
              title="Client / Industry"
              icon={<Building2 size={18} />}
            />

            <p>
              The project sits within the real-estate and property-sales
              industry, where trust, visual presentation, location context and
              easy access to property information are important parts of the
              digital experience.
            </p>

            <div className="industry-box">
              <div className="industry-box-heading">
                <div className="industry-icon">
                  <Home size={19} />
                </div>

                <div>
                  <span>INDUSTRY</span>
                  <h3>Real Estate & Property Sales</h3>
                </div>
              </div>

              <div className="service-pills">
                {propertyExperience.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </section>

          {/* 03 */}
          <section id="challenge" className="case-section">
            <SectionHeading
              number="03"
              title="Challenge"
              icon={<Search size={18} />}
            />

            <p>
              Real-estate websites have to balance strong visuals with
              practical information. A polished design alone is not enough if
              visitors cannot quickly understand the business, properties or
              next action.
            </p>

            <div className="challenge-grid">
              {challenges.map((challenge) => (
                <div className="challenge-card" key={challenge.number}>
                  <span>{challenge.number}</span>

                  <div>
                    <h3>{challenge.title}</h3>
                    <p>{challenge.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="insight-box">
              <Sparkles size={18} />

              <div>
                <strong>
                  The goal was to make the property experience feel clear,
                  professional and trustworthy.
                </strong>

                <p>
                  The website needed to act as a digital first impression for
                  the business while also giving potential customers a
                  straightforward path toward further enquiry.
                </p>
              </div>
            </div>
          </section>

          {/* 04 */}
          <section id="approach" className="case-section">
            <SectionHeading
              number="04"
              title="Our Approach"
              icon={<Workflow size={18} />}
            />

            <p>
              We approached the project by combining real-estate information
              architecture with visual presentation and conversion-oriented
              interaction.
            </p>

            <div className="process-list">
              {process.map((item) => (
                <div className="process-item" key={item.number}>
                  <div className="process-number">{item.number}</div>

                  <div className="process-line">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 05 */}
          <section id="design" className="case-section">
            <SectionHeading
              number="05"
              title="Design"
              icon={<Palette size={18} />}
            />

            <p>
              The design direction focused on creating a polished real-estate
              presence while keeping property and business information easy to
              scan.
            </p>

            <div className="design-grid">
              {designPrinciples.map((item) => {
                const Icon = item.icon;

                return (
                  <div className="design-card" key={item.number}>
                    <div className="design-card-top">
                      <div className="design-card-icon">
                        <Icon size={17} />
                      </div>

                      <span>{item.number}</span>
                    </div>

                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="showcase-card">
              <div className="showcase-image-wrap">
                <Image
                  src="/mockups/isproperties.webp"
                  alt="IS Properties website showcase"
                  width={1100}
                  height={800}
                  className="showcase-image"
                  loading="lazy"
                />
              </div>

              <div className="showcase-caption">
                <span>PROJECT SHOWCASE</span>

                <strong>
                  A property-focused digital experience for IS Properties
                </strong>
              </div>
            </div>
          </section>

          {/* 06 */}
          <section id="development" className="case-section">
            <SectionHeading
              number="06"
              title="Development"
              icon={<Code2 size={18} />}
            />

            <p>
              The development phase translated the real-estate design direction
              into a responsive website experience built around clear content
              structure and practical visitor actions.
            </p>

            <div className="development-grid">
              <DevelopmentCard
                title="Responsive Development"
                text="The interface was built to adapt across desktop, tablet and mobile screen sizes."
              />

              <DevelopmentCard
                title="Structured Information"
                text="Business and property content was organized into sections that support easier visitor scanning."
              />

              <DevelopmentCard
                title="Visual Content"
                text="Property-oriented imagery is given enough prominence to support the real-estate buying journey."
              />

              <DevelopmentCard
                title="Enquiry Journey"
                text="The website experience is structured around helping interested visitors move toward contact and enquiry."
              />
            </div>

            <div className="tech-strip">
              <div className="tech-strip-label">DEVELOPMENT FOCUS</div>

              <div className="tech-pills">
                <span>Responsive UI</span>
                <span>Real Estate UX</span>
                <span>Property Presentation</span>
                <span>Structured Content</span>
                <span>Enquiry Flow</span>
              </div>
            </div>
          </section>

          {/* 07 */}
          <section id="features" className="case-section">
            <SectionHeading
              number="07"
              title="Key Features"
              icon={<Layers3 size={18} />}
            />

            <div className="feature-grid">
              {keyFeatures.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div className="feature-card" key={feature.title}>
                    <div className="feature-icon">
                      <Icon size={18} />
                    </div>

                    <h3>{feature.title}</h3>

                    <p>{feature.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="feature-checklist">
              <div className="feature-checklist-title">
                <Check size={16} />
                <span>Project focus</span>
              </div>

              <div className="feature-checks">
                <div>
                  <Check size={13} />
                  Property presentation
                </div>

                <div>
                  <Check size={13} />
                  Business credibility
                </div>

                <div>
                  <Check size={13} />
                  Location context
                </div>

                <div>
                  <Check size={13} />
                  Visitor discovery
                </div>

                <div>
                  <Check size={13} />
                  Responsive experience
                </div>

                <div>
                  <Check size={13} />
                  Enquiry journey
                </div>
              </div>
            </div>
          </section>

          {/* 08 */}
          <section id="result" className="case-section">
            <SectionHeading
              number="08"
              title="Final Result"
              icon={<Rocket size={18} />}
            />

            <p>
              The completed website gives IS Properties a more structured
              digital touchpoint for presenting its real-estate business and
              helping prospective customers move through the property
              discovery journey.
            </p>

            <div className="result-layout">
              <div className="result-main">
                <div className="result-badge">
                  <Sparkles size={13} />
                  FINAL OUTCOME
                </div>

                <h3>
                  A professional digital experience built for real estate.
                </h3>

                <p>
                  The project combines property-focused visual presentation
                  with a clearer information hierarchy and enquiry-oriented
                  user journey.
                </p>

                <div className="outcome-list">
                  {outcomes.map((outcome) => (
                    <div key={outcome}>
                      <Check size={14} />
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="result-side">
                <div>
                  <span>BUSINESS</span>
                  <strong>IS Properties</strong>
                </div>

                <div>
                  <span>SECTOR</span>
                  <strong>Real Estate</strong>
                </div>

                <div>
                  <span>MARKET</span>
                  <strong>Gurugram</strong>
                </div>
              </div>
            </div>

            <div className="honesty-note">
              <Zap size={17} />

              <p>
                This case study focuses on the website design, development and
                user experience delivered by StackCraft Studio. No fabricated
                traffic, lead, sales or revenue metrics have been attributed
                to the project.
              </p>
            </div>
          </section>

          {/* 09 */}
          <section id="live-website" className="case-section live-section">
            <SectionHeading
              number="09"
              title="Live Website"
              icon={<ExternalLink size={18} />}
            />

            <div className="live-card">
              <div className="live-card-visual">
                <Image
                  src="/mockups/isproperties.webp"
                  alt="IS Properties live website preview"
                  width={900}
                  height={650}
                  className="live-image"
                  loading="lazy"
                />
              </div>

              <div className="live-card-content">
                <span>VISIT THE PROJECT</span>

                <h3>isproperties.in</h3>

                <p>
                  Explore the live IS Properties website and see the final
                  real-estate experience in action.
                </p>

                <a
                  href="https://www.isproperties.in/?i=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-button"
                >
                  Open live website
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </section>

          {/* NEXT */}
          <section className="next-project">
            <div>
              <span>NEXT CASE STUDY</span>
              <h2>Explore more StackCraft projects.</h2>
            </div>

            <Link href="/case-studies">
              View all case studies
              <ArrowRight size={16} />
            </Link>
          </section>
        </article>
      </div>
    </main>
  );
}

/* ----------------------------------------
   COMPONENTS
----------------------------------------- */

function SectionHeading({
  number,
  title,
  icon,
}: {
  number: string;
  title: string;
  icon: ReactNode;
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

function DevelopmentCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="development-card">
      <div className="development-card-check">
        <Check size={14} />
      </div>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}