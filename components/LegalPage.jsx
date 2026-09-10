"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

const LegalPage = ({ title, children }) => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const updatedRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // --------------------------------------------------
      // HEADER
      // --------------------------------------------------

      gsap.fromTo(
        eyebrowRef.current,
        {
          opacity: 0,
          y: 15,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          delay: 0.05,
          ease: "power2.out",
        },
      );

      const titleSplit = new SplitText(titleRef.current, {
        type: "chars",
      });

      gsap.fromTo(
        titleSplit.chars,
        {
          willChange: "opacity, transform",
          opacity: 0,
          filter: "blur(10px)",
          yPercent: 60,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          duration: 0.8,
          stagger: 0.025,
          delay: 0.15,
          ease: "power2.out",
        },
      );

      gsap.fromTo(
        updatedRef.current,
        {
          opacity: 0,
          y: 15,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.7,
          delay: 0.45,
          ease: "power2.out",
        },
      );

      // --------------------------------------------------
      // LEGAL CONTENT
      // --------------------------------------------------

      const sections = gsap.utils.toArray(
        ".legal-section",
        contentRef.current,
      );

      sections.forEach((section) => {
        const heading = section.querySelector("h2");
        const subheadings = section.querySelectorAll("h3");
        const paragraphs = section.querySelectorAll("p");

        // Section entrance
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 45,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );

        // Main section heading
        if (heading) {
          gsap.fromTo(
            heading,
            {
              opacity: 0,
              x: -25,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.65,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
                once: true,
              },
            },
          );
        }

        // Nested headings
        if (subheadings.length) {
          gsap.fromTo(
            subheadings,
            {
              opacity: 0,
              x: -18,
            },
            {
              opacity: 1,
              x: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 84%",
                once: true,
              },
            },
          );
        }

        // Paragraphs
        if (paragraphs.length) {
          gsap.fromTo(
            paragraphs,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.08,
              stagger: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 86%",
                once: true,
              },
            },
          );
        }
      });
    }, pageRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <ReactLenis root>
      <main ref={pageRef} className="legal-page">
        <div
          className="legal-background-gradient legal-gradient-one"
          aria-hidden="true"
        />

        <div
          className="legal-background-gradient legal-gradient-two"
          aria-hidden="true"
        />

        <div className="legal-container">
          <header className="legal-header">
            <p ref={eyebrowRef} className="legal-eyebrow">
              LEGAL
            </p>

            <h1 ref={titleRef} className="legal-title">
              {title}
            </h1>

            <p ref={updatedRef} className="legal-updated">
              Last updated: September 8, 2026
            </p>
          </header>

          <div ref={contentRef} className="legal-content">
            {children}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export default LegalPage;