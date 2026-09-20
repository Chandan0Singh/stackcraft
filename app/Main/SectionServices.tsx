"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

const CALENDLY_SCRIPT =
  "https://assets.calendly.com/assets/external/widget.js";

const CALENDLY_URL =
  "https://calendly.com/StackCraft Studio/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=9b92a2";

export const SectionServices = () => {
  const subheadlineBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLParagraphElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLDivElement | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const overlayWidgetRef = useRef<HTMLDivElement | null>(null);
  const overlayWidgetButtonRef = useRef<HTMLDivElement | null>(null);

  const [isOverlayVisible, setIsOverlayVisible] =
    useState<boolean>(false);

  const [isCalendlyLoaded, setIsCalendlyLoaded] =
    useState<boolean>(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(subheadlineBoxRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: subheadlineBoxRef.current,
          start: "top 95%",
        },
      });

      if (titleRef.current) {
        const titleSplit = new SplitText(titleRef.current, {
          type: "words",
        });

        gsap.fromTo(
          titleSplit.words,
          {
            willChange: "opacity, transform",
            filter: "blur(8px)",
            opacity: 0,
            yPercent: 100,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            yPercent: 0,
            stagger: 0.085,
            duration: 1,
            ease: "power2",
            scrollTrigger: {
              trigger: titleRef.current,
              start: "top 95%",
            },
          },
        );
      }

      if (descriptionRef.current) {
        const descriptionSplit = new SplitText(
          descriptionRef.current,
          {
            type: "words",
          },
        );

        gsap.fromTo(
          descriptionSplit.words,
          {
            filter: "blur(8px)",
            opacity: 0,
          },
          {
            opacity: 1,
            filter: "blur(0px)",
            stagger: 0.025,
            ease: "sine",
            scrollTrigger: {
              trigger: descriptionRef.current,
              start: "top 95%",
            },
          },
        );
      }

      gsap.to(buttonRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 95%",
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // ---------------------------------------
  // Load Calendly only when needed
  // ---------------------------------------
  const loadCalendly = () => {
    return new Promise<void>((resolve) => {
      // Already loaded
      if (
        document.querySelector(
          `script[src="${CALENDLY_SCRIPT}"]`,
        )
      ) {
        setIsCalendlyLoaded(true);
        resolve();
        return;
      }

      const script = document.createElement("script");

      script.src = CALENDLY_SCRIPT;
      script.async = true;

      script.onload = () => {
        setIsCalendlyLoaded(true);
        resolve();
      };

      document.body.appendChild(script);
    });
  };

  const toggleOverlay = async (): Promise<void> => {
    if (!isOverlayVisible) {
      setIsOverlayVisible(true);

      // Open overlay immediately
      gsap.set(overlayRef.current, {
        display: "flex",
      });

      gsap.fromTo(
        overlayRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.3,
        },
      );

      gsap.fromTo(
        overlayWidgetRef.current,
        {
          yPercent: 10,
          rotate: 5,
          opacity: 0,
        },
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          duration: 0.5,
          ease: customEase,
        },
      );

      gsap.fromTo(
        overlayWidgetButtonRef.current,
        {
          opacity: 0,
          scale: 0.5,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: customEase,
        },
      );

      // Load Calendly ONLY after user clicks
      await loadCalendly();
    } else {
      gsap.to(overlayWidgetRef.current, {
        yPercent: 10,
        rotate: 5,
        opacity: 0,
        duration: 0.5,
        ease: customEase,
      });

      gsap.to(overlayWidgetButtonRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 0.5,
        ease: customEase,
      });

      gsap.to(overlayRef.current, {
        delay: 0.1,
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.display = "none";
          }
        },
      });

      setIsOverlayVisible(false);
    }
  };

  return (
    <section className="services">
      {/* ---------------------------------------
          Calendly Overlay
      --------------------------------------- */}

      <div
        className="calendly-overlay"
        ref={overlayRef}
        style={{
          display: "none",
          opacity: 0,
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            toggleOverlay();
          }
        }}
      >
        <div
          className="calendly-overlay-widget"
          ref={overlayWidgetRef}
        >
          <div className="calendly-overlay-widget-border" />

          <div className="calendly-overlay-widget-scrollbar-hider" />

          {/* Calendly is NOT rendered until user clicks */}
          {isCalendlyLoaded && (
            <div
              className="calendly-inline-widget"
              data-url={CALENDLY_URL}
              style={{
                minWidth: "320px",
                height: "700px",
              }}
            />
          )}
        </div>

        <div
          className="calendly-overlay-widget-button"
          ref={overlayWidgetButtonRef}
          onClick={toggleOverlay}
        >
          <X className="calendly-overlay-widget-button-icon" />
        </div>
      </div>

      {/* ---------------------------------------
          Services Content
      --------------------------------------- */}

      <div className="services-content">
        <div className="textbox">
          <div
            className="subheadline-box opacity-blur"
            ref={subheadlineBoxRef}
          >
            <Zap className="subheadline-box-icon" />

            <p className="small-description grey">
              Our Services
            </p>
          </div>

          <div className="titlebox">
            <div className="titlebox-gradient" />

            <p
              className="subheadline white"
              ref={titleRef}
            >
              Digital Solutions That Move Businesses Forward
            </p>
          </div>

          <p
            className="description grey"
            ref={descriptionRef}
          >
            From high-performance websites and web applications to
            e-commerce and AI-powered solutions, we build digital
            products that help businesses grow.
          </p>

          <div
            className="contact-button-wrapper opacity-blur"
            ref={buttonRef}
            onClick={toggleOverlay}
          >
            <button
              type="button"
              className="contact-button-white"
            >
              <span>
                <span className="contact-button-container-white">
                  <span className="contact-button-primary-white" />
                  <span className="contact-button-complimentary-white" />
                </span>
              </span>

              <span className="description black">
                Book a call
              </span>
            </button>
          </div>
        </div>

        <div className="services-content-container">
          <div className="services-content-container-left" />
          <div className="services-content-container-right" />
          <div className="services-content-container-bottom" />
          <div className="services-content-container-top" />

          <video
            src="/videos/serviceshighquality.mp4"
            className="services-content-video"
            autoPlay
            muted
            playsInline
            data-wf-ignore="true"
            preload="metadata"
            loop
          />
        </div>
      </div>
    </section>
  );
};