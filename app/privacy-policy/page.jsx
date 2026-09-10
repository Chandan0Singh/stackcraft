"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegalPage from "../../components/LegalPage";

gsap.registerPlugin(SplitText, ScrollTrigger);

const PrivacyPolicy = () => {
  const pageRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleSplit = new SplitText(titleRef.current, {
        type: "chars",
      });

      // HERO TITLE
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
        const paragraph = section.querySelector("p");

        // Section reveal
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

        // Heading reveal
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

        // Paragraph reveal
        if (paragraph) {
          gsap.fromTo(
            paragraph,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              delay: 0.08,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 88%",
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
        <LegalPage title="Privacy Policy">
          <div ref={sectionsRef} className="legal-content">
            <div className="legal-section">
              <h2>1. Introduction</h2>
              <p>
                We respect your privacy and are committed to protecting the
                personal information you provide to us. This Privacy Policy
                explains how information may be collected, used, and protected
                when you use our website and services.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Information We Collect</h2>
              <p>
                Depending on how you interact with our website, we may collect
                information such as your name, email address, phone number,
                company information, project details, and other information
                that you voluntarily provide to us.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. Automatically Collected Information</h2>
              <p>
                We may automatically receive certain technical information,
                including browser type, device information, IP address,
                operating system, pages visited, and general usage information.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. How We Use Information</h2>
              <p>
                Information may be used to respond to enquiries, provide and
                improve our services, communicate with you, manage projects,
                maintain website security, and comply with applicable legal
                obligations.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Information Sharing</h2>
              <p>
                We do not sell your personal information. Information may be
                shared with trusted service providers when necessary to operate
                our website, deliver services, process payments, provide
                hosting, analytics, communication, or other essential
                functions.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Data Security</h2>
              <p>
                We take reasonable technical and organizational measures to
                protect information against unauthorized access, alteration,
                disclosure, or destruction. However, no internet-based system
                can be guaranteed to be completely secure.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites or
                services. We are not responsible for the privacy practices or
                content of those external websites.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Your Rights</h2>
              <p>
                Depending on applicable law, you may have rights relating to
                your personal information, including requesting access,
                correction, deletion, or restriction of certain processing.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy periodically. Changes will be
                published on this page along with the updated date.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or how your
                information is handled, please contact us through the contact
                details available on our website.
              </p>
            </div>
          </div>
        </LegalPage>
      </main>
    </ReactLenis>
  );
};

export default PrivacyPolicy;