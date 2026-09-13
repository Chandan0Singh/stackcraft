import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  MapPin,
  Smartphone,
  Sparkles,
  Target,
  Palette,
  Code2,
  LayoutDashboard,
  Route,
  Globe2,
} from "lucide-react";
import "./case-study.scss";

export const metadata: Metadata = {
  title: "TourTrek Case Study | Travel & Tourism Website",
  description:
    "Explore how StackCraft Studio designed and developed TourTrek's travel and tourism website with a clear destination-focused experience, responsive design, and enquiry-oriented user journey.",
  keywords: [
    "TourTrek case study",
    "TourTrek website",
    "travel website development",
    "tourism website development",
    "travel agency website",
    "tour operator website",
    "tourism web design",
    "StackCraft Studio case studies",
  ],
  alternates: {
    canonical: "/case-studies/tourtrek",
  },
  openGraph: {
    title: "TourTrek Case Study | StackCraft Studio",
    description:
      "A modern travel and tourism website designed and developed for TourTrek.",
    url: "/case-studies/tourtrek",
    type: "article",
    images: [
      {
        url: "/mockups/tour.webp",
        width: 1200,
        height: 800,
        alt: "TourTrek travel and tourism website",
      },
    ],
  },
};

const highlights = [
  {
    label: "Project",
    value: "TourTrek",
  },
  {
    label: "Industry",
    value: "Travel & Tourism",
  },
  {
    label: "Services",
    value: "Web Design & Development",
  },
  {
    label: "Focus",
    value: "Travel Discovery & Enquiries",
  },
];

const approach = [
  {
    number: "01",
    title: "Understand",
    text: "We focused on understanding the travel offering, the type of traveller the website needs to serve, and what information visitors need before making an enquiry.",
  },
  {
    number: "02",
    title: "Structure",
    text: "Travel content was organized into a clear information hierarchy so users could discover destinations, experiences, and relevant trip information more naturally.",
  },
  {
    number: "03",
    title: "Design",
    text: "The visual direction was built around exploration, movement, and destination-led storytelling while keeping the interface easy to navigate.",
  },
  {
    number: "04",
    title: "Develop",
    text: "The approved design was transformed into a responsive website with structured sections, reusable components, and a consistent experience across devices.",
  },
  {
    number: "05",
    title: "Refine",
    text: "The final experience was refined around readability, responsive behaviour, content hierarchy, and a clearer path from travel discovery to enquiry.",
  },
];

const designPrinciples = [
  {
    icon: Globe2,
    title: "Destination First",
    text: "The experience gives travel destinations and experiences the visual priority needed to capture attention and encourage exploration.",
  },
  {
    icon: Route,
    title: "Clear Journey",
    text: "Information is organized to help visitors move from discovering a trip toward understanding it and taking the next step.",
  },
  {
    icon: Smartphone,
    title: "Responsive Experience",
    text: "The website is designed to remain usable and visually consistent across desktop, tablet, and mobile devices.",
  },
  {
    icon: Target,
    title: "Enquiry Focused",
    text: "Calls to action and content hierarchy support visitors who are ready to learn more or enquire about a travel experience.",
  },
];

const developmentFeatures = [
  "Destination-focused content structure",
  "Responsive travel website interface",
  "Clear information hierarchy",
  "Travel package / experience presentation",
  "Mobile-friendly browsing experience",
  "Enquiry-oriented user journey",
];

const results = [
  "A stronger digital presence for the TourTrek brand",
  "A more structured way to present travel offerings",
  "Improved destination and experience discovery",
  "A responsive experience across screen sizes",
  "A clearer path from travel inspiration toward enquiry",
];

const faq = [
  {
    question: "What did StackCraft Studio build for TourTrek?",
    answer:
      "StackCraft Studio designed and developed TourTrek's travel and tourism website, focusing on destination presentation, information structure, responsive design, and a clearer enquiry journey.",
  },
  {
    question: "What industry is TourTrek in?",
    answer:
      "TourTrek is positioned as a travel and tourism project, with the website built around presenting travel experiences and helping visitors explore available options.",
  },
  {
    question: "Was the TourTrek website designed for mobile users?",
    answer:
      "Yes. The experience was designed with responsive behaviour in mind so visitors can browse travel content comfortably across desktop, tablet, and mobile screens.",
  },
];

export default function TourTrekCaseStudy() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "TourTrek Case Study | Travel & Tourism Website",
    description:
      "A case study of the travel and tourism website designed and developed for TourTrek by StackCraft Studio.",
    image: ["https://www.stackcraftstudio.com/mockups/tour.webp"],
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
      "https://www.stackcraftstudio.com/case-studies/tourtrek",
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
                <span>Case Study / 04</span>
              </div>

              <p className="heroCategory">Travel & Tourism</p>

              <h1>TourTrek</h1>

              <p className="heroDescription">
                A modern travel-focused digital experience designed and
                developed for TourTrek, bringing destinations, travel
                experiences, and customer enquiries together in one structured
                website.
              </p>

              <div className="heroTags">
                <span>Web Design</span>
                <span>Web Development</span>
                <span>Travel</span>
                <span>Tourism</span>
                <span>Responsive</span>
              </div>

              <div className="heroActions">
                <a
                  href="https://tourtrek-red.vercel.app/"
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
                    tourtrek-red.vercel.app
                  </div>
                </div>

                <div className="browserImage">
                  <Image
                    src="/mockups/tour.webp"
                    alt="TourTrek travel and tourism website"
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
                    Turning travel information into a more engaging digital
                    journey.
                  </h2>

                  <p>
                    TourTrek was designed and developed as a travel and tourism
                    website focused on helping visitors discover travel
                    experiences through a visually engaging and structured
                    online experience.
                  </p>

                  <p>
                    The website needed to do more than simply display travel
                    information. It needed to create interest, make important
                    details easy to understand, and guide visitors naturally
                    toward the next step.
                  </p>

                  <div className="quoteCard">
                    <Sparkles size={20} />

                    <p>
                      The goal was to make the experience feel like the
                      beginning of a journey rather than just another business
                      website.
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
                    A travel experience where discovery and presentation go
                    hand in hand.
                  </h2>

                  <p>
                    TourTrek sits within the travel and tourism space, where
                    users typically need inspiration first and practical
                    information second.
                  </p>

                  <p>
                    The website was therefore approached as a discovery
                    experience — using strong visual presentation and clear
                    content structure to help visitors understand the travel
                    offering.
                  </p>

                  <div className="infoCards">
                    <div className="miniCard">
                      <Globe2 size={22} />

                      <h3>Travel Discovery</h3>

                      <p>
                        Help visitors explore destinations and travel
                        experiences.
                      </p>
                    </div>

                    <div className="miniCard">
                      <MapPin size={22} />

                      <h3>Destination Focus</h3>

                      <p>
                        Present travel information in a more visual,
                        structured way.
                      </p>
                    </div>

                    <div className="miniCard">
                      <Compass size={22} />

                      <h3>Journey Driven</h3>

                      <p>
                        Guide visitors toward learning more and making an
                        enquiry.
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
                    Making travel content exciting without sacrificing clarity.
                  </h2>

                  <p>
                    Travel websites need to create an emotional connection
                    while still communicating practical information. Visitors
                    want to imagine the experience, but they also need enough
                    clarity to understand what is being offered.
                  </p>

                  <p>
                    The challenge was to balance visual storytelling with a
                    straightforward interface that made the website easy to
                    explore.
                  </p>

                  <div className="challengeList">
                    <div>
                      <Check size={18} />
                      <span>Make destinations visually engaging</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Keep travel information easy to scan</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Create a clear browsing experience</span>
                    </div>

                    <div>
                      <Check size={18} />
                      <span>Guide users toward enquiries</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* 04 */}
              <section className="caseSection" id="approach">
                <div className="sectionNumber">04</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Our Approach</p>

                  <h2>
                    Building the experience around how people plan travel
                    online.
                  </h2>

                  <p>
                    The website was developed around a simple flow: attract
                    attention, encourage exploration, provide enough context,
                    and make the next action easy to understand.
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
                    A visual-first interface built around exploration.
                  </h2>

                  <p>
                    The design direction gives destinations and travel
                    experiences the space they need to create interest, while
                    supporting those visuals with clear typography,
                    information hierarchy, and intuitive navigation.
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
                    Converting the travel concept into a responsive digital
                    experience.
                  </h2>

                  <p>
                    The final interface was developed with a focus on
                    responsive behaviour, structured content, reusable
                    sections, and smooth interaction between travel discovery
                    and enquiry-focused content.
                  </p>

                  <div className="developmentVisual">
                    <div className="developmentIcon">
                      <Code2 size={32} />
                    </div>

                    <div>
                      <p className="developmentLabel">
                        Development Focus
                      </p>

                      <h3>
                        Structure, responsiveness and usability
                      </h3>

                      <p>
                        The implementation was shaped around a flexible
                        interface that could present travel content clearly
                        across different screen sizes.
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
                      <Route size={19} />
                      <span>Travel Journey</span>
                    </div>

                    <div className="stackItem">
                      <MapPin size={19} />
                      <span>Destination Content</span>
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
                    The core experience was designed around travel discovery
                    and decision-making.
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
                    A more engaging digital starting point for the TourTrek
                    journey.
                  </h2>

                  <p>
                    The final website gives TourTrek a more structured digital
                    presence for presenting travel experiences while creating a
                    clearer experience for visitors exploring their next trip.
                  </p>

                  <div className="resultsList">
                    {results.map((result, index) => (
                      <div className="resultItem" key={result}>
                        <span>
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <p>{result}</p>
                      </div>
                    ))}
                  </div>

                  <div className="honestyNote">
                    <strong>About the numbers</strong>

                    <p>
                      We have intentionally not added fabricated booking,
                      traffic, conversion, lead, or revenue figures to this
                      case study. Quantitative results should only be published
                      when they can be verified from the actual project.
                    </p>
                  </div>
                </div>
              </section>

              {/* 09 */}
              <section className="caseSection liveSection" id="live">
                <div className="sectionNumber">09</div>

                <div className="sectionContent">
                  <p className="sectionKicker">Live Website</p>

                  <h2>
                    Explore the TourTrek travel experience.
                  </h2>

                  <p>
                    Visit the live website to explore the final interface,
                    travel presentation, and overall user experience.
                  </p>

                  <a
                    href="https://tourtrek-red.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="liveButton"
                  >
                    Visit TourTrek
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

            <h2>About the TourTrek project.</h2>
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
          <Link
            href="/case-studies/amazdraw"
            className="nextProject"
          >
            <div>
              <span>Next Case Study</span>
              <strong>Amazdraw</strong>
            </div>

            <ArrowUpRight size={28} />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="caseStudyCta">
        <div className="container">
          <div className="ctaBox">
            <div>
              <p className="sectionKicker">
                Have a project in mind?
              </p>

              <h2>
                Let&apos;s build a digital experience people remember.
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