"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LegalPage from "../../components/LegalPage";

gsap.registerPlugin(SplitText, ScrollTrigger);

const Terms = () => {
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
      const sections = gsap.utils.toArray(".legal-section", sectionsRef.current);

      sections.forEach((section, index) => {
        const heading = section.querySelector("h2");
        const paragraph = section.querySelector("p");

        // Section container reveal
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
            delay: index === 0 ? 0.1 : 0,
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
        <LegalPage title="Terms of Service">
          <div ref={sectionsRef} className="legal-content">
            <div className="legal-section">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using this website and our services, you agree
                to be bound by these Terms of Service. If you do not agree with
                any part of these terms, please do not use our website or
                services.
              </p>
            </div>

            <div className="legal-section">
              <h2>2. Our Services</h2>
              <p>
                We provide digital services including website design,
                development, software development, consulting, and related
                technology services. The exact scope of each project will be
                agreed upon with the client before work begins.
              </p>
            </div>

            <div className="legal-section">
              <h2>3. User Responsibilities</h2>
              <p>
                You agree to provide accurate information and any materials
                required for us to deliver the requested services. You must not
                use our website for unlawful, fraudulent, abusive, or harmful
                activities.
              </p>
            </div>

            <div className="legal-section">
              <h2>4. Intellectual Property</h2>
              <p>
                Unless otherwise agreed in writing, all original content,
                designs, code, graphics, branding, and other materials created
                by us remain our intellectual property until the agreed
                payments and project obligations have been completed.
              </p>
            </div>

            <div className="legal-section">
              <h2>5. Payments</h2>
              <p>
                Project pricing, payment schedules, deposits, milestones, and
                other financial terms will be communicated and agreed upon
                before or during the project. Failure to make required payments
                may result in suspension or termination of services.
              </p>
            </div>

            <div className="legal-section">
              <h2>6. Third-Party Services</h2>
              <p>
                Our services may integrate with third-party platforms,
                libraries, hosting providers, payment gateways, analytics
                services, or other external services. We are not responsible
                for changes, interruptions, or failures caused by such
                third-party providers.
              </p>
            </div>

            <div className="legal-section">
              <h2>7. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by applicable law, we will not
                be liable for indirect, incidental, special, or consequential
                losses arising from the use of our website or services.
              </p>
            </div>

            <div className="legal-section">
              <h2>8. Termination</h2>
              <p>
                We reserve the right to suspend or terminate access to our
                website or services if these terms are violated or if continued
                service becomes impractical or unlawful.
              </p>
            </div>

            <div className="legal-section">
              <h2>9. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. Any
                updated version will be posted on this page with a revised
                update date.
              </p>
            </div>

            <div className="legal-section">
              <h2>10. Contact</h2>
              <p>
                If you have questions about these Terms of Service, please
                contact us through the contact information provided on our
                website.
              </p>
            </div>
          </div>
        </LegalPage>
      </main>
    </ReactLenis>
  );
};

export default Terms;