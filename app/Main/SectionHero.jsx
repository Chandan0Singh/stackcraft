"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import Marquee from "react-fast-marquee";
import { ArrowUpRight } from "lucide-react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import Image from "next/image";
import { Item3 } from "./HeroModel/Coins";

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

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.05;
    let animationFrameId;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursor.current) {
        cursor.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);

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

                <h1
                  className="headline hero-headline white"
                  ref={titleRef}
                >
                  We Build <br /> Digital Experiences
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
                  <span className="small-description">
                    View Work
                  </span>

                  <span className="small-description">
                    View Work
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
                  <span className="small-description">
                    Get In Touch
                  </span>

                  <span className="small-description">
                    Get In Touch
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
            <Canvas
              style={{
                pointerEvents: "auto",
                width: "100%",
                height: "100%",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              camera={{
                position: [2, 0, 10],
                fov: 35,
              }}
            >
              <Suspense fallback={null}>
                <Float
                  rotationIntensity={0.5}
                  floatIntensity={2}
                  speed={2}
                >
                  <Item3 />
                </Float>

                <Environment preset="sunset" />

                <OrbitControls
                  maxPolarAngle={Math.PI / 2}
                  enableZoom={false}
                  enableRotate
                  enablePan={false}
                />
              </Suspense>
            </Canvas>
          </div>
        </div>

        <div
          className="hero-content-bottom opacity-blur"
          ref={logosWrapperRef}
        >
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
              <div
                className="hero-content-bottom-item"
                key={i}
              >
                <Image
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

      <div
        className="hover-cursor"
        ref={cursor}
      >
        <p className="small-description white">
          Drag
        </p>
      </div>
    </section>
  );
};
