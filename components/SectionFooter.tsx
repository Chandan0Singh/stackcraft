"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Instagram, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFooter = () => {
const topRef1 = useRef<HTMLDivElement>(null);
const topRef2 = useRef<HTMLDivElement>(null);
const topRef3 = useRef<HTMLDivElement>(null);
const topRef4 = useRef<HTMLDivElement>(null);
const centerRef1 = useRef<HTMLDivElement>(null);
const bottomRef1 = useRef<HTMLParagraphElement>(null);
const bottomRef2 = useRef<HTMLDivElement>(null);

useEffect(() => {
const ctx = gsap.context(() => {
const animateIn = (
element: HTMLElement | null,
trigger: HTMLElement | null,
delay = 0,
) => {
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
          once: true,
        },
      },
    );
  };

  animateIn(topRef1.current, topRef1.current);
  animateIn(topRef2.current, topRef1.current, 0.2);
  animateIn(topRef3.current, topRef1.current, 0.4);
  animateIn(topRef4.current, topRef1.current, 0.6);

  animateIn(centerRef1.current, centerRef1.current);

  animateIn(bottomRef1.current, bottomRef1.current);
  animateIn(bottomRef2.current, bottomRef2.current, 0.2);
});

return () => ctx.revert();
}, []);

return ( <footer className="footer"> <div className="footer-content">
{/* Brand */} <div className="footer-content-left" ref={topRef1}> <Image
         src="/logos/stackcraft.png"
         className="footer-logo"
         alt="StackCraft Studio"
         width={200}
         height={200}
         sizes="100px"
       />

```
      <h2 className="subheadline white">StackCraft Studio</h2>

      <p className="description grey">
        We build modern websites, web applications, and AI-powered digital
        solutions that help businesses grow.
      </p>
    </div>

    {/* Navigation */}
    <div className="footer-content-right">
      {/* Company */}
      <nav
        className="footer-content-right-column"
        aria-label="Company navigation"
        ref={topRef2}
      >
        <h2 className="description white">Company</h2>

        <div className="footer-column-contents">
          <div className="footer-column-contents-item">
            <Link href="/" className="description grey hover-text-grey">
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
      </nav>

      {/* Legal */}
      <nav
        className="footer-content-right-column"
        aria-label="Legal navigation"
        ref={topRef3}
      >
        <h2 className="description white">Legal</h2>

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
      </nav>

      {/* Resources */}
      <nav
        className="footer-content-right-column"
        aria-label="Resources navigation"
        ref={topRef4}
      >
        <h2 className="description white">Resources</h2>

        <div className="footer-column-contents">
          <div className="footer-column-contents-item">
            <Link
              href="/blog"
              className="description grey hover-text-grey"
            >
              Blog
            </Link>
          </div>

          <div className="footer-column-contents-item">
            <Link
              href="/case-studies"
              className="description grey hover-text-grey"
            >
              Case Studies
            </Link>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div className="footer-divider" ref={centerRef1} />

  <div className="footer-content-bottom">
    <p className="small-description grey" ref={bottomRef1}>
      © 2026 StackCraft Studio. All Rights Reserved.
    </p>

    <div className="footer-socials" ref={bottomRef2}>
      <a
        href="https://www.instagram.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="StackCraft Studio on Instagram"
      >
        <Instagram
          strokeWidth={1.25}
          className="footer-socials-icon"
          aria-hidden="true"
        />
      </a>

      <a
        href="https://x.com/YOUR_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="StackCraft Studio on X"
      >
        <Twitter
          strokeWidth={1.25}
          className="footer-socials-icon"
          aria-hidden="true"
        />
      </a>

      <a
        href="https://www.linkedin.com/company/YOUR_COMPANY"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="StackCraft Studio on LinkedIn"
      >
        <Linkedin
          strokeWidth={1.25}
          className="footer-socials-icon"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</footer>

);
};

