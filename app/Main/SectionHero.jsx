"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
const Marquee = dynamic(() => import("react-fast-marquee"), {
  ssr: false,
});
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
// import { Environment, Float, OrbitControls } from "@react-three/drei";
import NextImage from "next/image";
import { Item3 } from "./HeroModel/Coins";
import Link from "next/link";

const Hero3D = dynamic(() => import("./HeroModel/Hero3D"), {
  ssr: false,
  loading: () => <div className="hero-3d-placeholder" />,
});

gsap.registerPlugin(SplitText);

export const SectionHero = () => {
  // REFS
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const logosWrapperRef = useRef(null);
  const cursor = useRef(null);

  const [showCursor, setShowCursor] = useState(false);
  const [is3DReady, setIs3DReady] = useState(false);

  // GSAP ANIMATIONS
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 1,
      });

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
          delay: 0.4,
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          stagger: 0.02,
          duration: 0.75,
          ease: "power1",
        },
      );

      gsap.to(descriptionRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.9,
      });

      gsap.to(buttonRef1.current, {
        delay: 1.1,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1",
      });

      gsap.to(buttonRef2.current, {
        delay: 1.4,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1",
      });

      gsap.to(logosWrapperRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        delay: 0.9,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
  if (typeof window === "undefined") return;

  const load3D = () => {
    setIs3DReady(true);
  };

  if ("requestIdleCallback" in window) {
    const idleId = window.requestIdleCallback(load3D, {
      timeout: 2000,
    });

    return () => window.cancelIdleCallback(idleId);
  }

  const timeoutId = window.setTimeout(load3D, 1500);

  return () => window.clearTimeout(timeoutId);
}, []);

  // FOLLOWING CURSOR
 useEffect(() => {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let animationFrameId;
  let isMoving = false;

  const speed = 0.08;

  const handleMouseMove = (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    isMoving = true;
  };

  const animate = () => {
    if (isMoving && cursor.current) {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      cursor.current.style.transform =
        `translate3d(${cursorX}px, ${cursorY}px, 0)`;

      if (
        Math.abs(mouseX - cursorX) < 0.1 &&
        Math.abs(mouseY - cursorY) < 0.1
      ) {
        isMoving = false;
      }
    }

    animationFrameId = requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMouseMove, {
    passive: true,
  });

  animationFrameId = requestAnimationFrame(animate);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(animationFrameId);
  };
}, []);

  // CURSOR VISIBILITY
  useEffect(() => {
    if (!cursor.current) return;

    gsap.to(cursor.current, {
      autoAlpha: showCursor ? 1 : 0,
      scale: showCursor ? 1 : 0,
      duration: 0.3,
      ease: showCursor ? "power3.out" : "power3.in",
    });
  }, [showCursor]);

  const handleMouseEnter = () => {
    setShowCursor(true);
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
  };

  return (
    <section className="hero">
      <div className="hero-background-element-small" />
      <div className="hero-background-element-grid-small" />

      <div className="hero-content">
        <div className="hero-content-row">
          <div className="hero-content-left">
            <div className="hero-textbox">
              <div className="hero-titlebox">
                <div className="hero-titlebox-gradient" />

                <h1 className="headline hero-headline white" ref={titleRef}>
                  We Build <br /> Digital Experiences That Grow Businesses
                </h1>
              </div>

              <p
                className="big-description grey opacity-blur"
                ref={descriptionRef}
              >
                We design and build modern websites, web applications, and
                AI-powered digital solutions that help businesses grow.
              </p>
            </div>

            <div className="hero-buttons-row">
              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef1}
              >
                <div className="button-content">
                  <span className="small-description">View Work</span>

                  <span className="small-description">
                    <Link className="button-link no-underline" href="/works">
                      View Work
                    </Link>
                  </span>
                </div>

                <div className="button-circle">
                  <ArrowUpRight className="button-icon button-icon-180" />
                </div>
              </button>

              <button
                className="button button-transparent-border opacity-blur"
                ref={buttonRef2}
              >
                <div className="button-content">
                  <span className="small-description">Get In Touch</span>

                  <span className="small-description">
                    <Link className="button-link no-underline" href="/contact">
                      Get In Touch
                    </Link>
                  </span>
                </div>

                <div className="button-circle">
                  <ArrowUpRight className="button-icon" />
                </div>
              </button>
            </div>
          </div>

          <div
            className="hero-content-right"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              {is3DReady && <Hero3D />}

          </div>
        </div>

        <div className="hero-content-bottom opacity-blur" ref={logosWrapperRef}>
          <Marquee
            className="hero-content-bottom-row"
            gradient
            gradientColor="#010101"
            gradientWidth={250}
          >
            {[
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
              "/logos/adobe.webp",
              "/logos/webflow.svg",
              "/logos/stripe.svg",
            ].map((src, i) => (
              <div className="hero-content-bottom-item" key={i}>
                <NextImage
                  width={100}
                  height={100}
                  src={src}
                  alt={`Marquee item ${i + 1}`}
                  className="hero-content-bottom-image"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="hover-cursor" ref={cursor}>
        <p className="small-description white">Drag</p>
      </div>
    </section>
  );
};
