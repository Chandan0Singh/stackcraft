import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  ExternalLink,
  Layers3,
  Monitor,
  Palette,
  Rocket,
  Search,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import "./case-study.scss";

export const metadata: Metadata = {
  title: "Amazdraw Case Study | Web Design & Development | StackCraft Studio",
  description:
    "Explore how StackCraft Studio designed and developed a modern website for Amazdraw, an animation and creative services studio serving clients across animation, visual effects, motion design, illustration and training.",
  keywords: [
    "Amazdraw case study",
    "Amazdraw website",
    "web design Amazdraw",
    "web development case study",
    "animation studio website",
    "creative agency website",
    "StackCraft Studio case study",
  ],
  alternates: {
    canonical:
      "https://www.stackcraftstudio.com/case-studies/amazdraw",
  },
  openGraph: {
    title: "Amazdraw Case Study | StackCraft Studio",
    description:
      "A web design and development case study for Amazdraw, an animation and creative services brand.",
    url: "https://www.stackcraftstudio.com/case-studies/amazdraw",
    siteName: "StackCraft Studio",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amazdraw Case Study | StackCraft Studio",
    description:
      "Explore the design and development approach behind the Amazdraw website.",
  },
};

const projectHighlights = [
  {
    icon: Monitor,
    label: "Project",
    value: "Amazdraw",
  },
  {
    icon: Target,
    label: "Industry",
    value: "Animation & Creative",
  },
  {
    icon: Code2,
    label: "Service",
    value: "Web Design & Development",
  },
  {
    icon: Sparkles,
    label: "Location",
    value: "Delhi NCR",
  },
];

const services = [
  "2D Animation",
  "Character Animation",
  "Character Design",
  "Explainer Videos",
  "Whiteboard Videos",
  "Product Ads",
  "Motion Design",
  "Illustrations",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We first mapped the different parts of the Amazdraw business and the audiences the website needed to serve.",
  },
  {
    number: "02",
    title: "Structure",
    text: "The information architecture was organized around the brand, services, training offering, supporting content and contact paths.",
  },
  {
    number: "03",
    title: "Design",
    text: "The visual direction was built to feel creative and animation-focused while keeping the experience easy to navigate.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The approved experience was translated into a responsive production website with structured content and interactive elements.",
  },
  {
    number: "05",
    title: "Refine",
    text: "The final experience was refined around clarity, content hierarchy, usability and the different actions visitors may want to take.",
  },
];

const keyFeatures = [
  {
    icon: Layers3,
    title: "Structured Service Presentation",
    text: "The website makes Amazdraw&aposs broad animation and creative capabilities easier to discover.",
  },
  {
    icon: Users,
    title: "Multi-Audience Experience",
    text: "The experience supports both prospective clients and visitors interested in animation training.",
  },
  {
    icon: Palette,
    title: "Creative Visual Direction",
    text: "The design language reflects the creative nature of animation, illustration, motion and visual storytelling.",
  },
  {
    icon: Workflow,
    title: "Clear User Journey",
    text: "Content is organized so visitors can move from discovery to services, training or contact actions.",
  },
  {
    icon: Monitor,
    title: "Responsive Interface",
    text: "The experience is structured for users across desktop and smaller screens.",
  },
  {
    icon: Rocket,
    title: "Conversion-Oriented Sections",
    text: "Contact and registration paths help turn website visits into enquiries and next-step actions.",
  },
];

const outcomes = [
  "A clearer digital representation of the Amazdraw brand",
  "Better organization of animation and creative service offerings",
  "A stronger visual presentation for a creative-led business",
  "A clearer separation between service and training audiences",
  "More structured paths toward contact and enquiry actions",
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
      "Amazdraw Case Study | Web Design & Development | StackCraft Studio",
    description:
      "A web design and development case study for Amazdraw, an animation and creative services studio.",
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
        "https://www.stackcraftstudio.com/case-studies/amazdraw",
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

export default function AmazdrawCaseStudyPage() {
  return (
    <main className="amazdraw-case-study">
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
            <span>Amazdraw</span>
          </div>

          <div className="hero-layout">
            <div className="hero-copy">
              <div className="eyebrow">
                <Zap size={13} />
                WEB DESIGN & DEVELOPMENT
              </div>

              <h1>
                Amazdraw
                <span>
                  Animation & Creative Services
                </span>
              </h1>

              <p>
                A modern digital experience designed and developed for
                Amazdraw, bringing its animation services, creative
                capabilities and training offering into one structured online
                presence.
              </p>

              <div className="hero-actions">
                <a
                  href="https://amazdraw.com/"
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
                <span>Creative Industry</span>
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
                    amazdraw.com
                  </div>

                  <div className="browser-action">
                    <ArrowUpRight size={13} />
                  </div>
                </div>

                <div className="hero-image-wrap">
                  <Image
                    src="/mockups/amazdraw.webp"
                    alt="Amazdraw website designed and developed by StackCraft Studio"
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
              <Sparkles size={17} />
            </div>

            <strong>Like this project?</strong>

            <p>
              We design and develop websites and digital products for
              businesses that want a stronger online presence.
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
                Amazdraw is an animation and creative services brand offering
                animation, visual effects, motion design, illustrations,
                storyboarding and related creative services. The business also
                operates training programs for people looking to develop
                skills in animation and related disciplines.
              </p>

              <p>
                StackCraft Studio designed and developed a dedicated website
                to bring these different parts of the business together in a
                single, clearer digital experience.
              </p>
            </div>

            <div className="overview-banner">
              <div>
                <span>PROJECT TYPE</span>
                <strong>Business Website</strong>
              </div>

              <div>
                <span>PRIMARY GOAL</span>
                <strong>Digital Presence + Enquiries</strong>
              </div>

              <div>
                <span>CORE FOCUS</span>
                <strong>Creative Services</strong>
              </div>
            </div>
          </section>

          {/* 02 */}
          <section id="client-industry" className="case-section">
            <SectionHeading
              number="02"
              title="Client / Industry"
              icon={<Target size={18} />}
            />

            <p>
              Amazdraw operates in the animation and creative-services space,
              with its online presence covering both client-facing creative
              work and animation education.
            </p>

            <div className="industry-box">
              <div className="industry-box-heading">
                <div className="industry-icon">
                  <Palette size={19} />
                </div>

                <div>
                  <span>INDUSTRY</span>
                  <h3>Animation & Creative Services</h3>
                </div>
              </div>

              <div className="service-pills">
                {services.map((service) => (
                  <span key={service}>{service}</span>
                ))}
              </div>
            </div>

            <p>
              The live Amazdraw website describes the brand as an animation
              studio and creative business and highlights services such as
              character animation, character design, explainer videos,
              whiteboard videos and product advertisements.
            </p>
          </section>

          {/* 03 */}
          <section id="challenge" className="case-section">
            <SectionHeading
              number="03"
              title="Challenge"
              icon={<Search size={18} />}
            />

            <p>
              The main product challenge was not simply putting information
              online. The website needed to communicate a broad creative
              offering without making the visitor journey feel fragmented.
            </p>

            <div className="challenge-grid">
              <Challenge
                number="01"
                title="Broad service offering"
                text="Animation, visual effects, motion design, illustrations and other creative capabilities needed to fit into one clear experience."
              />

              <Challenge
                number="02"
                title="Different audiences"
                text="The website needed to accommodate both potential service clients and visitors interested in animation training."
              />

              <Challenge
                number="03"
                title="Creative positioning"
                text="The digital experience needed to feel creative enough for an animation brand while remaining practical and easy to navigate."
              />

              <Challenge
                number="04"
                title="Clear next steps"
                text="Visitors needed understandable paths toward services, training information and contact actions."
              />
            </div>

            <div className="insight-box">
              <Sparkles size={18} />

              <div>
                <strong>The goal was clarity without losing personality.</strong>

                <p>
                  For a creative business, the website itself is part of the
                  brand experience. The design needed to communicate that
                  creativity while still functioning as a business website.
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
              We approached the project as a combination of information
              architecture, visual communication and practical conversion
              design.
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
              The design direction was built around the visual language of
              animation and creative production while keeping information
              structured enough for a business audience.
            </p>

            <div className="design-grid">
              <DesignCard
                icon={<Sparkles />}
                number="01"
                title="Creative First"
                text="Visual presentation plays an important role in communicating a studio whose work is inherently visual."
              />

              <DesignCard
                icon={<Layers3 />}
                number="02"
                title="Strong Hierarchy"
                text="Sections were organized around the things visitors are most likely to want to understand first."
              />

              <DesignCard
                icon={<Monitor />}
                number="03"
                title="Modern Interface"
                text="The interface uses spacious layouts, visual blocks and clear typography to avoid a dated corporate feel."
              />

              <DesignCard
                icon={<Target />}
                number="04"
                title="Action-Oriented"
                text="Contact and registration opportunities are positioned as part of the overall experience rather than hidden afterthoughts."
              />
            </div>

            <div className="showcase-card">
              <div className="showcase-image-wrap">
                <Image
                  src="/mockups/amazdraw.webp"
                  alt="Amazdraw website showcase"
                  width={1100}
                  height={800}
                  className="showcase-image"
                  loading="lazy"
                />
              </div>

              <div className="showcase-caption">
                <span>PROJECT SHOWCASE</span>
                <strong>A visual-first digital experience for Amazdraw</strong>
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
              The development phase focused on converting the approved
              direction into a responsive, usable website with structured
              service content, training information and clear contact flows.
            </p>

            <div className="development-grid">
              <DevelopmentCard
                title="Responsive Development"
                text="Layouts were developed to work across desktop, tablet and mobile experiences."
              />

              <DevelopmentCard
                title="Content Structure"
                text="Service and business information were organized into distinct sections for easier discovery."
              />

              <DevelopmentCard
                title="Interactive Elements"
                text="Interactive and visual components help keep the experience aligned with a creative industry."
              />

              <DevelopmentCard
                title="Contact & Registration"
                text="Business enquiries and training-related actions are supported through dedicated interaction paths."
              />
            </div>

            <div className="tech-strip">
              <div className="tech-strip-label">DEVELOPMENT FOCUS</div>

              <div className="tech-pills">
                <span>Responsive UI</span>
                <span>Modern Web Design</span>
                <span>Structured Content</span>
                <span>Interactive Sections</span>
                <span>Conversion Paths</span>
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
                  Service discovery
                </div>
                <div>
                  <Check size={13} />
                  Brand presentation
                </div>
                <div>
                  <Check size={13} />
                  Training visibility
                </div>
                <div>
                  <Check size={13} />
                  Contact conversion
                </div>
                <div>
                  <Check size={13} />
                  Responsive experience
                </div>
                <div>
                  <Check size={13} />
                  Creative storytelling
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
              The finished website brings Amazdraw&aposs creative services,
              animation capabilities and training offering into a more unified
              online experience.
            </p>

            <div className="result-layout">
              <div className="result-main">
                <div className="result-badge">
                  <Sparkles size={13} />
                  FINAL OUTCOME
                </div>

                <h3>
                  A stronger digital foundation for a creative brand.
                </h3>

                <p>
                  Rather than treating the site as a simple company brochure,
                  the project was structured around discovery, service
                  communication, visual presentation and clear next actions.
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
                  <strong>Amazdraw</strong>
                </div>

                <div>
                  <span>SECTOR</span>
                  <strong>Animation & Creative</strong>
                </div>

                <div>
                  <span>DELIVERED BY</span>
                  <strong>StackCraft Studio</strong>
                </div>
              </div>
            </div>

            <div className="honesty-note">
              <Zap size={17} />

              <p>
                This case study focuses on the project scope, design and
                development outcome. No fabricated traffic, lead or revenue
                metrics have been attributed to this website.
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
                  src="/mockups/amazdraw.webp"
                  alt="Amazdraw live website preview"
                  width={900}
                  height={650}
                  className="live-image"
                  loading="lazy"
                />
              </div>

              <div className="live-card-content">
                <span>VISIT THE PROJECT</span>

                <h3>amazdraw.com</h3>

                <p>
                  Explore the live Amazdraw website and see the final digital
                  experience in action.
                </p>

                <a
                  href="https://amazdraw.com/"
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

          {/* NEXT PROJECT */}
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

function Challenge({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="challenge-card">
      <span>{number}</span>

      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function DesignCard({
  icon,
  number,
  title,
  text,
}: {
  icon: ReactNode;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="design-card">
      <div className="design-card-top">
        <div className="design-card-icon">{icon}</div>
        <span>{number}</span>
      </div>

      <h3>{title}</h3>
      <p>{text}</p>
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