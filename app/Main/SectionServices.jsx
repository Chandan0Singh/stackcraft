
/* eslint-disable react/jsx-key */
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import CustomEase from "gsap/CustomEase";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { X, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase);

const customEase = CustomEase.create("customEase", ".4,0,.1,1");

export const SectionServices = () => {
  const subheadlineBoxRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayWidgetRef = useRef(null);
  const overlayWidgetButtonRef = useRef(null);

  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subheadline box animation
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

      // Headline text animation
      const titleSplit = new SplitText(titleRef.current, {
        type: "words",
      });

      gsap.fromTo(
        titleSplit.words,
        {
          "will-change": "opacity, transform",
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

      // Description text animation
      const descriptionSplit = new SplitText(descriptionRef.current, {
        type: "words",
      });

      gsap.fromTo(
        descriptionSplit.words,
        {
          filter: "blur(8px)",
          opacity: 0,
          skewX: 0,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          skewX: 0,
          stagger: 0.025,
          ease: "sine",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 95%",
          },
        },
      );

      // Button animation
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

  useEffect(() => {
    const scriptSrc =
      "https://assets.calendly.com/assets/external/widget.js";

    // Avoid adding duplicate Calendly scripts.
    const existingScript = document.querySelector(
      `script[src="${scriptSrc}"]`,
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Do not remove the shared external script here.
      // Removing it can cause unnecessary reloads when the component
      // mounts again during client-side navigation.
    };
  }, []);

  const toggleOverlay = () => {
    if (!isOverlayVisible) {
      gsap.to(overlayRef.current, {
        display: "flex",
        opacity: 1,
        duration: 0.3,
      });

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
    }

    setIsOverlayVisible((visible) => !visible);
  };

  return (
    <section className="services">
      <div
        className="calendly-overlay"
        ref={overlayRef}
        style={{ display: "none", opacity: 0 }}
        onClick={toggleOverlay}
      >
        <div
          className="calendly-overlay-widget"
          ref={overlayWidgetRef}
        >
          <div className="calendly-overlay-widget-border" />
          <div className="calendly-overlay-widget-scrollbar-hider" />

          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/StackCraft Studio/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=1a1a1a&text_color=ffffff&primary_color=9b92a2"
          />
        </div>

        <div
          className="calendly-overlay-widget-button"
          ref={overlayWidgetButtonRef}
          onClick={toggleOverlay}
        >
          <X className="calendly-overlay-widget-button-icon" />
        </div>
      </div>

      <div className="services-content">
        <div className="textbox">
          <div
            className="subheadline-box opacity-blur"
            ref={subheadlineBoxRef}
          >
            <Zap className="subheadline-box-icon" />
            <h2 className="small-description grey">
              Our Services
            </h2>
          </div>

          <div className="titlebox">
            <div className="titlebox-gradient" />

            <h1
              className="subheadline white"
              ref={titleRef}
            >
              Digital Solutions That Move Businesses Forward
            </h1>
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
            <button className="contact-button-white">
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
            autoPlay="autoplay"
            muted
            playsInline
            data-wf-ignore="true"
            preload="auto"
            loop
          />
        </div>
      </div>
    </section>
  );
};