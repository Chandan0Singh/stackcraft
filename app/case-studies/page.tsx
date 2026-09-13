import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Code2,
  Palette,
  Sparkles,
} from "lucide-react";
import "./case-studies.scss";

export const metadata: Metadata = {
  title: "Case Studies | Web Design & Development Projects | StackCraft Studio",
  description:
    "Explore real website design and development projects by StackCraft Studio across creative services, real estate, e-commerce, and travel.",
  keywords: [
    "StackCraft Studio case studies",
    "web development case studies",
    "website design case studies",
    "web design portfolio",
    "web development portfolio",
    "ecommerce website case study",
    "real estate website case study",
    "travel website case study",
  ],
  alternates: {
    canonical: "/case-studies",
  },
  openGraph: {
    title: "Case Studies | StackCraft Studio",
    description:
      "Explore real-world web design and development projects delivered by StackCraft Studio.",
    url: "/case-studies",
    type: "website",
  },
};

const caseStudies = [
  {
    number: "01",
    title: "Amazdraw",
    category: "Creative Services",
    industry: "2D Animation & Creative Services",
    description:
      "A modern digital experience for an animation and creative services studio, bringing its services, creative capabilities, and training offering into one structured website.",
    image: "/mockups/amazdraw.webp",
    href: "/case-studies/amazdraw",
    tags: ["Web Design", "Web Development", "Creative"],
  },
  {
    number: "02",
    title: "IS Properties",
    category: "Real Estate",
    industry: "Real Estate & Property Sales",
    description:
      "A professional real-estate website designed to present property information more clearly, strengthen the digital presence, and create a smoother path toward customer enquiries.",
    image: "/mockups/isproperties.webp",
    href: "/case-studies/is-properties",
    tags: ["Web Design", "Web Development", "Real Estate"],
  },
  {
    number: "03",
    title: "Odhira Boutique",
    category: "E-commerce",
    industry: "Beauty & E-commerce",
    description:
      "A polished e-commerce experience focused on product presentation, boutique-style visual direction, responsive design, and a smoother online shopping journey.",
    image: "/mockups/odhira.webp",
    href: "/case-studies/odhira-boutique",
    tags: ["E-commerce", "Web Design", "Responsive"],
  },
  {
    number: "04",
    title: "TourTrek",
    category: "Travel & Tourism",
    industry: "Travel & Tourism",
    description:
      "A modern travel-focused website designed to present destinations and travel experiences through a structured, engaging, and responsive digital experience.",
    image: "/mockups/tour.webp",
    href: "/case-studies/tourtrek",
    tags: ["Travel", "Web Design", "Web Development"],
  },
];

const services = [
  {
    icon: Palette,
    title: "Web Design",
    text: "Interfaces designed around brand, usability, hierarchy, and conversion.",
  },
  {
    icon: Code2,
    title: "Web Development",
    text: "Modern responsive websites built with scalable and maintainable technology.",
  },
  {
    icon: Sparkles,
    title: "Digital Experience",
    text: "Complete digital experiences shaped around how real users discover and interact with a business.",
  },
];

export default function CaseStudiesPage() {
  const projectSchemas = caseStudies.map((project) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${project.title} Case Study`,
    description: project.description,
    image: `https://www.stackcraftstudio.com${project.image}`,
    creator: {
      "@type": "Organization",
      name: "StackCraft Studio",
      url: "https://www.stackcraftstudio.com",
    },
    url: `https://www.stackcraftstudio.com${project.href}`,
  }));

  return (
    <main className="caseStudiesPage">
      {projectSchemas.map((schema) => (
        <script
          key={schema.url}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* HERO */}
      <section className="caseStudiesHero">
        <div className="heroGlow heroGlowOne" />
        <div className="heroGlow heroGlowTwo" />

        <div className="container">
          <Link href="/" className="backHome">
            <ChevronRight size={15} />
            Back to home
          </Link>

          <div className="heroContent">
            <div className="eyebrow">
              <Sparkles size={15} />
              <span>Selected Work</span>
            </div>

            <h1>
              Real projects.
              <br />
              <span>Real digital experiences.</span>
            </h1>

            <p>
              Explore the websites and digital experiences we&apos;ve designed
              and developed for businesses across creative services, real
              estate, e-commerce, and travel.
            </p>

            <div className="heroStats">
              <div>
                <strong>04</strong>
                <span>Featured Projects</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Industries</span>
              </div>

              <div>
                <strong>01</strong>
                <span>Digital Partner</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projectsSection">
        <div className="container">
          <div className="sectionHeader">
            <div>
              <p className="sectionKicker">Our Case Studies</p>

              <h2>
                From idea to
                <br />
                <span>finished experience.</span>
              </h2>
            </div>

            <p className="sectionIntro">
              Every project starts with a different business problem. The
              common goal is to turn that problem into a digital experience
              that looks right, works well, and makes sense for the people
              using it.
            </p>
          </div>

          <div className="projectsList">
            {caseStudies.map((project, index) => (
              <article
                className={`projectCard ${
                  index % 2 !== 0 ? "projectCardReverse" : ""
                }`}
                key={project.title}
              >
                <div className="projectVisual">
                  <Link href={project.href} className="projectImageLink">
                    <div className="projectImage">
                      <Image
                        src={project.image}
                        alt={`${project.title} ${project.industry} website`}
                        fill
                        sizes="(max-width: 900px) 100vw, 55vw"
                      />

                      <div className="imageOverlay">
                        <span>
                          View Case Study
                          <ArrowUpRight size={18} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="projectInfo">
                  <div className="projectTopLine">
                    <span className="projectNumber">{project.number}</span>
                    <span className="projectCategory">
                      {project.category}
                    </span>
                  </div>

                  <h3>{project.title}</h3>

                  <p className="industry">{project.industry}</p>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                  <div className="projectTags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    className="projectLink"
                  >
                    Read Case Study
                    <ArrowUpRight size={17} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="servicesSection">
        <div className="container">
          <div className="servicesHeader">
            <p className="sectionKicker">What We Do</p>

            <h2>
              We don&apos;t just
              <br />
              <span>build websites.</span>
            </h2>

            <p>
              We combine strategy, design, development, and digital thinking
              to create experiences that are built around the business.
            </p>
          </div>

          <div className="servicesGrid">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div className="serviceCard" key={service.title}>
                  <div className="serviceIcon">
                    <Icon size={21} />
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="processSection">
        <div className="container">
          <div className="processGrid">
            <div className="processIntro">
              <p className="sectionKicker">How We Work</p>

              <h2>
                Strategy first.
                <br />
                <span>Execution second.</span>
              </h2>

              <p>
                The best digital work doesn&apos;t start with colors or
                animations. It starts by understanding what the business
                needs the website to achieve.
              </p>
            </div>

            <div className="processList">
              <div className="processItem">
                <span>01</span>

                <div>
                  <h3>Understand</h3>
                  <p>
                    We understand the business, audience, positioning, and
                    goals before deciding what to build.
                  </p>
                </div>
              </div>

              <div className="processItem">
                <span>02</span>

                <div>
                  <h3>Structure</h3>
                  <p>
                    We organize information and user journeys so the experience
                    is easy to understand and navigate.
                  </p>
                </div>
              </div>

              <div className="processItem">
                <span>03</span>

                <div>
                  <h3>Design</h3>
                  <p>
                    We create a visual system that makes the business feel
                    distinctive without sacrificing usability.
                  </p>
                </div>
              </div>

              <div className="processItem">
                <span>04</span>

                <div>
                  <h3>Develop</h3>
                  <p>
                    We turn the approved design into a responsive and
                    technically solid digital experience.
                  </p>
                </div>
              </div>

              <div className="processItem">
                <span>05</span>

                <div>
                  <h3>Refine</h3>
                  <p>
                    We review the final experience and improve the details
                    that make the website feel finished.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="caseStudiesCta">
        <div className="container">
          <div className="ctaBox">
            <div className="ctaGlow" />

            <div className="ctaContent">
              <p className="sectionKicker">Start Your Project</p>

              <h2>
                Your project could be
                <br />
                <span>the next case study.</span>
              </h2>

              <p>
                Have a website, web app, e-commerce project, or digital
                experience in mind? Let&apos;s turn the idea into something
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