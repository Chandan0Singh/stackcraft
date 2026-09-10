"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";
import { Instagram, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {
  const topRef1 = useRef(null);
  const topRef2 = useRef(null);
  const topRef3 = useRef(null);
  const centerRef1 = useRef(null);
  const bottomRef1 = useRef(null);
  const bottomRef2 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const animateIn = (element, trigger, delay = 0) => {
        if (!element || !trigger) return;

        gsap.fromTo(
          element,
          {
            filter: "blur(8px)",
            opacity: 0,
          },
          {
            delay,
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "sine",
            scrollTrigger: {
              trigger,
              start: "top 95%",
            },
          },
        );
      };

      animateIn(topRef1.current, topRef1.current);
      animateIn(topRef2.current, topRef1.current, 0.2);
      animateIn(topRef3.current, topRef1.current, 0.4);

      animateIn(centerRef1.current, centerRef1.current);

      animateIn(bottomRef1.current, bottomRef1.current);
      animateIn(bottomRef2.current, bottomRef2.current, 0.2);
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-content-left" ref={topRef1}>
          <img
            src="/logos/stackcraft.png"
            className="footer-logo"
            alt=""
          />

          <h1 className="subheadline white">
            StackCraft Studio
          </h1>

          <p className="description grey">
            We build modern websites, web applications, and AI-powered digital
            solutions that help businesses grow.
          </p>
        </div>

        <div className="footer-content-right" ref={topRef2}>
          <div className="footer-content-right-column">
            <h2 className="description white">
              Company
            </h2>

            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <Link
                  href="/"
                  className="description grey hover-text-grey"
                >
                  Home
                </Link>
              </div>

              <div className="footer-column-contents-item">
                <Link
                  href="/about"
                  className="description grey hover-text-grey"
                >
                  About
                </Link>
              </div>

              <div className="footer-column-contents-item">
                <Link
                  href="/works"
                  className="description grey hover-text-grey"
                >
                  Projects
                </Link>
              </div>

              <div className="footer-column-contents-item">
                <Link
                  href="/contact"
                  className="description grey hover-text-grey"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>

          <div
            className="footer-content-right-column"
            ref={topRef3}
          >
            <h2 className="description white">
              Legal
            </h2>

            <div className="footer-column-contents">
              <div className="footer-column-contents-item">
                <Link
                  href="/terms"
                  className="description grey hover-text-grey"
                >
                  Terms of Service
                </Link>
              </div>

              <div className="footer-column-contents-item">
                <Link
                  href="/privacy-policy"
                  className="description grey hover-text-grey"
                >
                  Privacy Policy
                </Link>
              </div>

              <div className="footer-column-contents-item">
                <Link
                  href="/cookie-policy"
                  className="description grey hover-text-grey"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="footer-divider"
        ref={centerRef1}
      />

      <div className="footer-content-bottom">
        <p
          className="small-description grey"
          ref={bottomRef1}
        >
          © 2026 StackCraft Studio. All Rights Reserved.
        </p>

        <div
          className="footer-socials"
          ref={bottomRef2}
        >
          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram
              strokeWidth={1.25}
              className="footer-socials-icon"
            />
          </a>

          <a
            href="https://x.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter
              strokeWidth={1.25}
              className="footer-socials-icon"
            />
          </a>

          <a
            href="https://www.linkedin.com/company/YOUR_COMPANY"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin
              strokeWidth={1.25}
              className="footer-socials-icon"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
