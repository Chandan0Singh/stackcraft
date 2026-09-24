"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

type TeamMember = {
  name: string;
  title: string;
};

export const AboutPageSection = () => {
  // REFS
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const titleRef2 = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  const item1Ref = useRef<HTMLDivElement | null>(null);
  const item2Ref = useRef<HTMLDivElement | null>(null);
  const item3Ref = useRef<HTMLDivElement | null>(null);
  const item4Ref = useRef<HTMLDivElement | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: "Chandan Singh",
      title: "Founder & CEO",
    },
    {
      name: "Varsha Chauhan",
      title: "Social Media & Outreach",
    },
    {
      name: "Anshu Chaudhary",
      title: "Content & Social Media Manager",
    },
    {
      name: "Govind Rajawat",
      title: "COO & Design Lead",
    },
    {
      name: "Jay Negi",
      title: "Digital Marketing Specialist",
    },
    {
      name: "Bharat Khati",
      title: "Digital Marketing Specialist",
    },
  ];

  // INTRO / TEAM / WHY US ANIMATIONS
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        const titleSplit = new SplitText(titleRef.current, {
          type: "chars",
        });

        gsap.fromTo(
          titleSplit.chars,
          {
            willChange: "opacity, transform",
            filter: "blur(8px)",
            opacity: 0,
            yPercent: 50,
          },
          {
            delay: 0.2,
            opacity: 1,
            filter: "blur(0px)",
            yPercent: 0,
            stagger: 0.02,
            duration: 0.75,
            ease: "power1",
          },
        );
      }

      // Description animation
      gsap.to(descriptionRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.6,
      });

      // Divider animation
      gsap.fromTo(
        lineRef.current,
        {
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.5,
          delay: 0.5,
        },
      );

      // Why-us title animation
      if (titleRef2.current) {
        const titleSplit2 = new SplitText(titleRef2.current, {
          type: "words",
        });

        gsap.fromTo(
          titleSplit2.words,
          {
            willChange: "opacity",
            filter: "blur(8px)",
            opacity: 0,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.025,
            ease: "sine",
            scrollTrigger: {
              trigger: titleRef2.current,
              start: "top 95%",
              end: "bottom center",
              scrub: true,
            },
          },
        );
      }

      // Team member animations
      itemRefs.current.forEach((item, index) => {
        if (!item) return;

        gsap.fromTo(
          item,
          {
            yPercent: 100,
            opacity: 0,
            filter: "blur(8px)",
          },
          {
            yPercent: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.75,
            delay: index * 0.2,
            ease: "power3",
            scrollTrigger: {
              trigger: ".five-content",
              start: "top bottom",
            },
          },
        );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // STICKY SECTION
  useEffect(() => {
    const ctx = gsap.context(() => {
      const refs = [
        item1Ref,
        item2Ref,
        item3Ref,
        item4Ref,
      ];

      refs.forEach((ref, position) => {
        const element = ref.current;

        if (!element) return;

        const isLast = position === refs.length - 1;

        gsap.set(element, {
          willChange: "transform, filter",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: "center center",
            end: "350%",
            scrub: true,
          },
        });

        timeline
          .to(
            element,
            {
              ease: "none",
              startAt: {
                filter: "blur(0px)",
              },
              filter: isLast ? "blur(0px)" : "blur(3px)",
              scrollTrigger: {
                trigger: element,
                start: "center center",
                end: "+=100%",
                scrub: true,
              },
            },
            0,
          )
          .to(
            element,
            {
              ease: "none",
              scale: isLast ? 1 : 0.55,
              yPercent: isLast ? 0 : -45,
            },
            0,
          );
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />

                <h1
                  className="headline white"
                  ref={titleRef}
                >
                  Digital Solutions Built Around Your Business
                </h1>
              </div>

              <p
                className="description grey opacity-blur"
                ref={descriptionRef}
              >
                StackCraft Studio helps businesses build, improve, and grow through web development, AI solutions, digital marketing, and technology-driven strategies. Whether you need one solution or a combination of services, we work around your specific business requirements.
              </p>
            </div>

            <div
              className="about-divider"
              ref={lineRef}
            />
          </div>

          <section
            className="about-team"
            aria-labelledby="our-team-title"
          >
            <div className="about-team-container">
              <h2
                id="our-team-title"
                className="sr-only"
              >
                Our Team
              </h2>

              {teamMembers.map((member, index) => (
                <div
                  className="about-team-item"
                  key={index}
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                >
                  <p className="description white">
                    {member.name}
                  </p>

                  <p className="description white">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="about-divider" />

          <div className="about-whyus">
            <h2 className="description about-whyus-description grey">
              Why StackCraft Studio
            </h2>

            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
            >
              We don't believe every business needs the same solution. We understand your requirements first, then provide the right combination of technology, AI, marketing, and strategy — whether that's a single service or a complete digital solution.
            </p>
          </div>

          <div className="about-divider" />

          <div className="about-sticky-container">
            <div
              className="about-sticky-item"
              ref={item1Ref}
            >
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h2 className="headline white">
               
                    Web & App <br /> Development
                  </h2>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    Websites, e-commerce platforms, web applications, SaaS products, dashboards and custom digital solutions.
                  </p>
                </div>

                <span className="headline white">
                  (01)
                </span>
              </div>

              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <NextImage
                    src="/images/web-dev.png"
                    className="about-sticky-item-right-image"
                    alt="Web development and web application development"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div
              className="about-sticky-item"
              ref={item2Ref}
            >
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h2 className="headline white">
                    AI Solutions
                  </h2>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    AI integrations, AI-powered applications, chatbots, automation, AI agents and business-specific AI tools.
                  </p>
                </div>

                <span
                  className="headline white"
                  aria-label="Service 2"
                >
                  (02)
                </span>
              </div>

              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <NextImage
                    src="/images/e-com.png"
                    className="about-sticky-item-right-image"
                    alt="E-commerce website development"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div
              className="about-sticky-item"
              ref={item3Ref}
            >
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h2 className="headline white">
                    Digital Marketing
                  </h2>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    SEO, social media, performance marketing, content strategy, lead generation and conversion optimization.
                  </p>
                </div>

                <span
                  className="headline white"
                  aria-label="Service 3"
                >
                  (03)
                </span>
              </div>

              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <NextImage
                    src="/images/ai.png"
                    className="about-sticky-item-right-image"
                    alt="AI and generative AI solutions"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>

            <div
              className="about-sticky-item"
              ref={item4Ref}
            >
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h2 className="headline white">
                    Strategy <br /> & Research
                  </h2>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    Market research, competitor analysis, customer research, digital strategy, positioning and continuous optimization.
                  </p>
                </div>

                <span
                  className="headline white"
                  aria-label="Service 4"
                >
                  (04)
                </span>
              </div>

              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <NextImage
                    src="/images/Maintenance.png"
                    className="about-sticky-item-right-image"
                    alt="Website maintenance and technical support"
                    width={800}
                    height={800}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};