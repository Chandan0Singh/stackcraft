/* eslint-disable react/jsx-key */
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Fade from "embla-carousel-fade";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjects = () => {
  const subheadlineBoxRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);
  const cursor = useRef(null);

  const [showCursor, setShowCursor] = useState(false);

  // GSAP ANIMATIONS
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
          yPercent: 50,
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          stagger: 0.05,
          duration: 0.75,
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

      // Image parallax effect
      gsap.fromTo(
        imageContainerRef.current,
        {
          yPercent: 7.5,
        },
        {
          yPercent: -7.5,
          scrollTrigger: {
            trigger: ".projects",
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // EMBLA CAROUSEL
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    [Fade()],
  );

  const {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useDotButton(emblaApi);

  const {
    onNextButtonClick,
  } = usePrevNextButtonsSafe(emblaApi);

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.05;
    let animationFrameId = null;

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
        cursor.current.style.left = `${cursorX}px`;
        cursor.current.style.top = `${cursorY}px`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

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
    <section className="projects projects-desktop">
      <div className="textbox">
        <div
          className="subheadline-box opacity-blur"
          ref={subheadlineBoxRef}
        >
          <Star className="subheadline-box-icon" />

          <h2 className="small-description grey">
            Featured Works
          </h2>
        </div>

        <div className="titlebox">
          <div className="titlebox-big-gradient" />

          <h1
            className="subheadline white"
            ref={titleRef}
          >
            Digital Products Built
            <br className="hide-on-mobile" />
            To Make An Impact
          </h1>
        </div>

        <p
          className="description grey"
          ref={descriptionRef}
        >
          From business websites to scalable web applications,
          <br className="hide-on-desktop" />
          we turn ideas into products people love to use.
        </p>
      </div>

      <div
        className="projects-content"
        ref={contentRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onNextButtonClick}
      >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />

        <div
          className="project-content-wrapper"
          ref={imageContainerRef}
        >
          <div
            className="projects-carousel"
            ref={emblaRef}
          >
            <div className="projects-carousel-row">
              <div className="projects-carousel-item">
                <Image
                  src="/mockups/amazdraw.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt="amazdraw"
                />
              </div>

              <div className="projects-carousel-item">
                <Image
                  src="/mockups/isproperties.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>

              <div className="projects-carousel-item">
                <Image
                  src="/mockups/odhira.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>

              <div className="projects-carousel-item">
                <Image
                  src="/mockups/tour.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>

              <div className="projects-carousel-item">
                <Image
                  src="/mockups/tour.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>

              <div className="projects-carousel-item">
                <Image
                  src="/mockups/odhira.png"
                  width={1920}
                  height={1080}
                  unoptimized
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex
                  ? " embla__dot--selected"
                  : "",
              )}
            />
          ))}
        </div>
      </div>

      <div
        className="hover-cursor"
        ref={cursor}
      >
        <p className="small-description white">
          See More
        </p>
      </div>
    </section>
  );
};

/*
 * Kept local to avoid changing the existing carousel behavior.
 * Replace this with the existing usePrevNextButtons hook
 * from EmblaCarouselArrowButtons once that hook is imported.
 */
const usePrevNextButtonsSafe = (emblaApi) => {
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;

    const update = () => {
      setNextBtnDisabled(!emblaApi.canScrollNext());
    };

    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);

    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return {
    nextBtnDisabled,
    onNextButtonClick: () => emblaApi?.scrollNext(),
  };
};