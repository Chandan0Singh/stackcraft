"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegalPage from "../../components/LegalPage";

gsap.registerPlugin(SplitText, ScrollTrigger);

const CookiePolicy = () => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // HERO TITLE
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

      // LEGAL SECTIONS
      const sections = gsap.utils.toArray(
        ".legal-section",
        sectionsRef.current,
      );

      sections.forEach((section) => {
        const heading = section.querySelector("h2");
        const subheadings = section.querySelectorAll("h3");
        const paragraphs = section.querySelectorAll("p");

        // Main section reveal
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

        // Main heading
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
                start: "top 82%",
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
        <LegalPage title="Cookie Policy">
          <div ref={sectionsRef} className="legal-content">
            <div className="legal-section">
              <h2>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files stored on your device when you
                visit a website. They help websites remember information about
                your visit and improve functionality and user experience.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. How We Use Cookies</h2>
              <p>
                We may use cookies and similar technologies to remember
                preferences, understand how visitors use our website, maintain
                security, and improve website performance.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Types of Cookies</h2>

              <h3>Essential Cookies</h3>
              <p>
                These cookies may be necessary for basic website functionality
                and security. They generally cannot be disabled through the
                website.
              </p>

              <h3>Preference Cookies</h3>
              <p>
                These cookies help remember choices and preferences so that
                your experience can be more convenient.
              </p>

              <h3>Analytics Cookies</h3>
              <p>
                These cookies may help us understand website traffic and usage
                patterns so that we can improve our website and services.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Third-Party Cookies</h2>
              <p>
                Some third-party services integrated into our website may place
                their own cookies. These services may include analytics,
                embedded content, communication tools, or other technologies.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Managing Cookies</h2>
              <p>
                Most modern browsers allow you to view, block, delete, or
                manage cookies through their settings. Disabling certain
                cookies may affect the functionality of some parts of the
                website.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Changes to This Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time to reflect
                changes in our website, technologies, or legal requirements.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Contact</h2>
              <p>
                If you have questions about our use of cookies, please contact
                us through the contact information provided on our website.
              </p>
            </div>
          </div>
        </LegalPage>
      </main>
    </ReactLenis>
  );
};

export default CookiePolicy;