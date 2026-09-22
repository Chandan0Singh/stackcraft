"use client";

import { useEffect, useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const SectionShowreel = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playButtonRef = useRef<HTMLDivElement | null>(null);
  const showreelItemRef1 = useRef<HTMLDivElement | null>(null);
  const showreelItemRef2 = useRef<HTMLDivElement | null>(null);
  const showreelItemRef3 = useRef<HTMLDivElement | null>(null);
  const showreelItemRef4 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        rotateY: "0deg",
        scale: "1",
        rotateX: "0deg",
        translateY: "0vh",
        scrollTrigger: {
          trigger: ".showreel",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      });

      const animateItem = (
        element: HTMLDivElement | null,
        delay: number,
      ): void => {
        if (!element) return;

        gsap.to(element, {
          delay,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power1",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
          },
        });
      };

      animateItem(showreelItemRef1.current, 0);
      animateItem(showreelItemRef2.current, 0.1);
      animateItem(showreelItemRef3.current, 0.2);
      animateItem(showreelItemRef4.current, 0.3);
    });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;
    let animationFrameId: number;

    const handleMouseMove = (event: MouseEvent): void => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = (): void => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      ctx.revert();
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        {/* <div className="showreel-content-container">

          <div ref={videoRef} className="showreel-content-videobox">
            <div className="background">
              <div className="trail"></div>
            </div>

            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              autoPlay
              muted
              playsInline
              aria-label="StackCraft Studio digital design and development showreel"
              preload="auto"
              loop
            />
          </div>
        </div> */}

        <div className="showreel-content-row">
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef1}
          >
            <NextImage
              src="/logos/stackcraft.png"
              className="showreel-content-row-item-image"
              alt="StackCraft Studio logo"
              width={200}
              height={200}
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef2}
          >
            <NextImage
              src="/logos/cssbestui.svg"
              className="showreel-content-row-item-image"
              alt="cssbestui"
              width={200}
              height={200}
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef3}
          >
            <NextImage
              src="/logos/cssbestinnovation.svg"
              className="showreel-content-row-item-image"
              alt="cssbestinnovation"
              width={200}
              height={200}
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef4}
          >
            <NextImage
              src="/logos/cssbestux.svg"
              className="showreel-content-row-item-image"
              alt="cssbestux"
              width={200}
              height={200}
            />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
      </div>
    </section>
  );
};