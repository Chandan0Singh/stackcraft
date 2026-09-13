import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Target,
  Palette,
  Code2,
  Layers3,
  LayoutDashboard,
} from "lucide-react";
import "./case-study.scss";

export const metadata: Metadata = {
  title: "Odhira Boutique Case Study | E-commerce Website Development",
  description:
    "Explore how StackCraft Studio designed and developed Odhira Boutique&aposs e-commerce website with a polished shopping experience, structured product presentation, and responsive design.",
  keywords: [
    "Odhira Boutique case study",
    "Odhira Boutique website",
    "ecommerce website development",
    "beauty ecommerce website",
    "fashion ecommerce website",
    "online store development",
    "StackCraft Studio case studies",
  ],
  alternates: {
    canonical: "/case-studies/odhira-boutique",
  },
  openGraph: {
    title: "Odhira Boutique Case Study | StackCraft Studio",
    description:
      "A modern e-commerce experience designed and developed for Odhira Boutique.",
    url: "/case-studies/odhira-boutique",
    type: "article",
    images: [
      {
        url: "/mockups/odhira.webp",
        width: 1200,
        height: 800,
        alt: "Odhira Boutique e-commerce website",
      },
    ],
  },
};

const highlights = [
  {
    label: "Project",
    value: "Odhira Boutique",
  },
  {
    label: "Industry",
    value: "Beauty & E-commerce",
  },
  {
    label: "Services",
    value: "Web Design & Development",
  },
  {
    label: "Focus",
    value: "Online Shopping Experience",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We first focused on understanding the brand, its products, and how customers should move through the online shopping experience.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Product-focused content was organized into a clear website structure so visitors could browse, discover, and understand products more easily.",
  },
  {
    number: "03",
    title: "Design",
    text: "The visual direction was built around a polished boutique aesthetic while keeping the interface practical and easy to navigate.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The design was translated into a responsive e-commerce experience with reusable sections and a consistent visual system.",
  },
  {
    number: "05",
    title: "Refine",
    text: "The final experience was refined around usability, responsive behavior, content hierarchy, and a smoother path toward shopping.",
  },
];

const designPrinciples = [
  {
    icon: Palette,
    title: "Boutique Visual Direction",
    text: "A refined interface helps the brand feel more premium while keeping the products at the center of attention.",
  },
  {
    icon: ShoppingBag,
    title: "Product First",
    text: "The experience gives product discovery and presentation a central role throughout the website.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    text: "The interface is designed to remain usable and visually consistent across desktop, tablet, and mobile screens.",
  },
  {
    icon: Target,
    title: "Shopping Focused",
    text: "The layout is structured around helping visitors move naturally from discovery toward product interaction and purchase intent.",
  },
];

const developmentFeatures = [
  "Responsive e-commerce interface",
  "Structured product presentation",
  "Clear category and content hierarchy",
  "Mobile-friendly shopping experience",
  "Consistent visual language across pages",
  "Conversion-oriented user journey",
];

const results = [
  "A stronger digital presence for the boutique brand",
  "A cleaner and more structured shopping experience",
  "Improved product-focused content hierarchy",
  "A polished responsive interface across devices",
  "A clearer path from product discovery toward purchase intent",
];

const faq = [
  {
    question: "What did StackCraft Studio build for Odhira Boutique?",
    answer:
      "StackCraft Studio designed and developed the Odhira Boutique e-commerce website, focusing on visual presentation, product discovery, responsive design, and the overall online shopping experience.",
  },
  {
    question: "What industry is Odhira Boutique in?",
    answer:
      "Odhira Boutique is presented as a beauty and e-commerce project, with the website centered around online product presentation and shopping.",
  },
  {
    question: "Was the website designed for mobile users?",
    answer:
      "Yes. The case study is built around a responsive experience so the website remains usable and visually consistent across different screen sizes.",
  },
];

export default function OdhiraBoutiqueCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Odhira Boutique Case Study | E-commerce Website Development",
    description:
      "A case study of the e-commerce website designed and developed for Odhira Boutique by StackCraft Studio.",
    image: ["https://www.stackcraftstudio.com/mockups/odhira.webp"],
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
    mainEntityOfPage:
      "https://www.stackcraftstudio.com/case-studies/odhira-boutique",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <main className="caseStudyPage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Back */}
      <div className="caseStudyTopbar">
        <div className="container">
          <Link href="/#works" className="backLink">
            <ArrowLeft size={16} />
            <span>Back to Works</span>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="caseStudyHero">
        <div className="container">
          <div className="heroGrid">
            <div className="heroContent">
              <div className="eyebrow">
                <Sparkles size={16} />
                <span>Case Study / 03</span>
              </div>

              <p className="heroCategory">Beauty & E-commerce</p>

              <h1>Odhira Boutique</h1>

              <p className="heroDescription">
                A polished e-commerce experience designed and developed for
                Odhira Boutique, bringing product presentation, visual
                storytelling, and online shopping into one structured digital
                experience.
              </p>

              <div className="heroTags">
                <span>Web Design</span>
                <span>Web Development</span>
                <span>E-commerce</span>
                <span>Responsive</span>
              </div>

              <div className="heroActions">
                <a
                  href="https://odhiraboutique.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primaryButton"
                >
                  Visit Live Website
                  <ArrowUpRight size={18} />
                </a>

                <a href="#overview" className="secondaryButton">
                  Explore Case Study
                  <ChevronRight size={18} />
                </a>
              </div>
            </div>

            <div className="heroVisual">
              <div className="browserFrame">
                <div className="browserBar">
                  <div className="browserDots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="browserUrl">
                    odhiraboutique.com
                  </div>
                </div>

                <div className="browserImage">
                  <Image
                    src="/mockups/odhira.webp"
                    alt="Odhira Boutique e-commerce website"
                    fill
                    priority
                    sizes="(max-width: 900px) 100vw, 55vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="highlightsSection">
        <div className="container">
          <div className="highlightsGrid">
            {highlights.map((item) => (
              <div className="highlightCard" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="caseStudyBody" id="overview">
        <div className="container">
          <div className="contentGrid">
            {/* Sidebar */}
            <aside className="caseStudySidebar">
              <div className="sidebarInner">
                <p className="sidebarTitle">On this page</p>

                <nav>
                  <a href="#overview">01 Overview</a>
                  <a href="#client">02 Client</a>
                  <a href="#challenge">03 Challenge</a>
                  <a href="#approach">04 Approach</a>
                  <a href="#design">05 Design</a>
                  <a href="#development">06 Development</a>
                  <a href="#features">07 Features</a>
                  <a href="#result">08 Result</a>
                  <a href="#live">09 Live Website</a>
                </nav>
              </div>
            </aside>

            {/* Main */}
            <div className="caseStudyContent">
              {/* 01 */}
              <section className="caseSection">
                <div className="sectionNumber">01</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Project Overview</p>

                  <h2>
                    Turning a boutique brand into a more polished online
                    shopping experience.
                  </h2>

                  <p>
                    Odhira Boutique was developed as an e-commerce experience
                    with a strong focus on product presentation, visual appeal,
                    and a smoother customer journey.
                  </p>

                  <p>
                    Rather than treating the website as a simple collection of
                    pages, the experience was structured around the way an
                    online shopper discovers a product, explores its details,
                    builds confidence, and moves toward purchasing.
                  </p>

                  <div className="quoteCard">
                    <Sparkles size={20} />
                    <p>
                      The goal was simple: make the digital storefront feel
                      polished, easy to explore, and aligned with the boutique
                      identity.
                    </p>
                  </div>
                </div>
              </section>

              {/* 02 */}
              <section className="caseSection" id="client">
                <div className="sectionNumber">02</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Client / Industry</p>

                  <h2>
                    A boutique e-commerce experience where visual presentation
                    matters.
                  </h2>

                  <p>
                    Odhira Boutique falls into the beauty and e-commerce space,
                    where brand presentation and product discovery play a major
                    role in the customer&aposs online experience.
                  </p>

                  <div className="infoCards">
                    <div className="miniCard">
                      <ShoppingBag size={22} />
                      <h3>E-commerce</h3>
                      <p>
                        Built around product discovery and online shopping.
                      </p>
                    </div>

                    <div className="miniCard">
                      <Palette size={22} />
                      <h3>Boutique Feel</h3>
                      <p>
                        A refined visual direction designed to support the
                        brand.
                      </p>
                    </div>

                    <div className="miniCard">
                      <Smartphone size={22} />
                      <h3>Responsive</h3>
                      <p>
                        Designed for a consistent experience across screen
                        sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* 03 */}
              <section className="caseSection" id="challenge">
                <div className="sectionNumber">03</div>

                <div className="sectionContent">
                  <p className="sectionKicker">The Challenge</p>

                  <h2>
                    Creating an online storefront that looks premium without
                    getting in the way of shopping.
                  </h2>

                  <p>
                    E-commerce websites have to balance two things at the same
                    time: visual impact and usability. Too much visual noise
                    can make products harder to discover, while a purely
                    functional layout can make a boutique brand feel generic.
                  </p>

                  <p>
                    The challenge was therefore to create a more refined
                    experience while keeping navigation, product presentation,
                    and the customer journey straightforward.
                  </p>

                  <div className="challengeList">
                    <div>
                      <Check size={18} />
                      <span>Keep product discovery clear</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Build a stronger boutique identity</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Maintain a clean shopping journey</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Make the experience responsive</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 04 */}
              <section className="caseSection" id="approach">
                <div className="sectionNumber">04</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Our Approach</p>

                  <h2>From brand understanding to a complete storefront.</h2>

                  <p>
                    We followed a structured process to make sure the final
                    website balanced aesthetics, usability, and e-commerce
                    functionality.
                  </p>

                  <div className="approachList">
                    {approach.map((item) => (
                      <div className="approachItem" key={item.number}>
                        <div className="approachNumber">{item.number}</div>

                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 05 */}
              <section className="caseSection" id="design">
                <div className="sectionNumber">05</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Design</p>

                  <h2>
                    A clean visual system that keeps the products in focus.
                  </h2>

                  <p>
                    The design direction was intentionally focused on clarity.
                    Visual details support the boutique identity, while the
                    interface avoids unnecessary complexity around the shopping
                    journey.
                  </p>

                  <div className="designGrid">
                    {designPrinciples.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div className="designCard" key={item.title}>
                          <div className="iconBox">
                            <Icon size={21} />
                          </div>

                          <h3>{item.title}</h3>

                          <p>{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* 06 */}
              <section className="caseSection" id="development">
                <div className="sectionNumber">06</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Development</p>

                  <h2>
                    Building the interface around a practical shopping
                    experience.
                  </h2>

                  <p>
                    Once the visual direction was established, the website was
                    developed with a focus on responsiveness, reusable
                    components, content structure, and a consistent user
                    experience across the storefront.
                  </p>

                  <div className="developmentVisual">
                    <div className="developmentIcon">
                      <Code2 size={32} />
                    </div>

                    <div>
                      <p className="developmentLabel">Development Focus</p>
                      <h3>Performance, structure and usability</h3>
                      <p>
                        The implementation was shaped around a scalable
                        interface where product-focused sections could work
                        consistently across different screen sizes.
                      </p>
                    </div>
                  </div>

                  <div className="stackGrid">
                    <div className="stackItem">
                      <LayoutDashboard size={19} />
                      <span>Structured UI</span>
                    </div>

                    <div className="stackItem">
                      <Smartphone size={19} />
                      <span>Responsive Layout</span>
                    </div>

                    <div className="stackItem">
                      <Layers3 size={19} />
                      <span>Reusable Sections</span>
                    </div>

                    <div className="stackItem">
                      <ShoppingBag size={19} />
                      <span>E-commerce Focus</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 07 */}
              <section className="caseSection" id="features">
                <div className="sectionNumber">07</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Key Features</p>

                  <h2>
                    The important parts of the experience were designed around
                    how customers actually shop.
                  </h2>

                  <div className="featureList">
                    {developmentFeatures.map((feature) => (
                      <div className="featureItem" key={feature}>
                        <div className="featureCheck">
                          <Check size={16} />
                        </div>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 08 */}
              <section className="caseSection" id="result">
                <div className="sectionNumber">08</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Final Result</p>

                  <h2>
                    A more complete digital storefront for Odhira Boutique.
                  </h2>

                  <p>
                    The final result is a polished e-commerce website that
                    gives the boutique a stronger online presence while making
                    the shopping journey more structured and visually
                    engaging.
                  </p>

                  <div className="resultsList">
                    {results.map((result, index) => (
                      <div className="resultItem" key={result}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{result}</p>
                      </div>
                    ))}
                  </div>

                  <div className="honestyNote">
                    <strong>About the numbers</strong>
                    <p>
                      We have intentionally not added fabricated sales,
                      traffic, conversion, or revenue figures to this case
                      study. Quantitative results should only be published when
                      they can be verified from the actual project.
                    </p>
                  </div>
                </div>
              </section>

              {/* 09 */}
              <section className="caseSection liveSection" id="live">
                <div className="sectionNumber">09</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Live Website</p>

                  <h2>See the Odhira Boutique experience live.</h2>

                  <p>
                    Explore the live website to see the final storefront,
                    product presentation, and overall shopping experience.
                  </p>

                  <a
                    href="https://odhiraboutique.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liveButton"
                  >
                    Visit odhiraboutique.com
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faqSection">
        <div className="container">
          <div className="faqHeader">
            <p className="sectionKicker">FAQ</p>
            <h2>About the Odhira Boutique project.</h2>
          </div>

          <div className="faqList">
            {faq.map((item) => (
              <details key={item.question} className="faqItem">
                <summary>
                  <span>{item.question}</span>
                  <ChevronRight size={19} />
                </summary>

                <div className="faqAnswer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      <section className="nextProjectSection">
        <div className="container">
          <Link href="/case-studies/tourtrek" className="nextProject">
            <div>
              <span>Next Case Study</span>
              <strong>TourTrek</strong>
            </div>

            <ArrowUpRight size={28} />
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="caseStudyCta">
        <div className="container">
          <div className="ctaBox">
            <div>
              <p className="sectionKicker">Have a project in mind?</p>

              <h2>
                Let&apos;s build a digital experience that feels like your
                brand.
              </h2>
            </div>

            <Link href="/contact" className="primaryButton">
              Start a Project
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}