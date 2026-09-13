"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { ReactLenis } from "lenis/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowUpRight, Zap } from "lucide-react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Main/Carousel/EmblaCarouselArrowButtons";
import "./works.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

const works = [
  {
    name: "Amazdraw",
    categories: ["Web Design & Development", "Branding"],
    image: "/mockups/amazdraw.webp",
    alt: "Amazdraw 2D animation and creative services website",
  },
  {
    name: "Isproperties",
    categories: ["Web Design & Development", "Branding"],
    image: "/mockups/isproperties.webp",
    alt: "Isproperties Gurugram property sales website",
  },
  {
    name: "Odhira",
    categories: ["Web Design & Development", "Branding"],
    image: "/mockups/odhira.webp",
    alt: "Odhira beauty products online store",
  },
  {
    name: "Tour",
    categories: ["Web Design & Development", "Branding"],
    image: "/mockups/tour.webp",
    alt: "Tour and travel services website",
  },
];

const industries = [
  {
    title: "2D Animation & Creative Services",
    image: "/mockups/amazdraw.webp",
    alt: "Amazdraw 2D animation and creative services website",
  },
  {
    title: "Real Estate & Property Sales",
    image: "/mockups/isproperties.webp",
    alt: "Isproperties Gurugram property sales website",
  },
  {
    title: "Beauty & E-commerce",
    image: "/mockups/odhira.webp",
    alt: "Odhira beauty products online store",
  },
  {
    title: "Travel & Tourism",
    image: "/mockups/tour.webp",
    alt: "Tour and travel services website",
  },
];

const caseStudies = [
  {
    category: "Web Design & Development",
    title: "Amazdraw",
    description:
      "A modern digital experience for an animation and creative services brand, designed to present its services, training programs, and creative capabilities clearly.",
    image: "/mockups/amazdraw.webp",
    alt: "Amazdraw animation and creative services website",
    href: "/case-studies/amazdraw",
  },
  {
    category: "Web Design & Development",
    title: "IS Properties",
    description:
      "A property-focused website designed to give IS Properties a stronger digital presence and a clearer experience for showcasing real estate offerings.",
    image: "/mockups/isproperties.webp",
    alt: "IS Properties real estate website",
    href: "/case-studies/is-properties",
  },
  {
    category: "Web Design & Development",
    title: "Odhira Boutique",
    description:
      "A visually focused e-commerce experience for a boutique brand, built to showcase products and create a polished online shopping journey.",
    image: "/mockups/odhira.webp",
    alt: "Odhira Boutique e-commerce website",
    href: "/case-studies/odhira-boutique",
  },
  {
    category: "Web Design & Development",
    title: "TourTrek",
    description:
      "A travel platform designed around Himalayan treks, tour packages, destinations, and trip discovery with a clear booking-focused user experience.",
    image: "/mockups/tour.webp",
    alt: "TourTrek travel and tourism website",
    href: "/case-studies/tourtrek",
  },
];

function useDragCursor() {
  const cursorRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let animationFrameId;
    const speed = 0.05;

    const handleMouseMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed;
      cursorY += (mouseY - cursorY) * speed;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      autoAlpha: visible ? 1 : 0,
      scale: visible ? 1 : 0,
      duration: 0.3,
      ease: visible ? "power3.out" : "power3.in",
    });
  }, [visible]);

  return {
    cursorRef,
    handleMouseEnter: () => setVisible(true),
    handleMouseLeave: () => setVisible(false),
  };
}

function WorksCarousel({ onMouseEnter, onMouseLeave }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const updateProgress = useCallback((api) => {
    setScrollProgress(
      api ? Math.max(0, Math.min(1, api.scrollProgress())) * 100 : 0,
    );
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;

    updateProgress(emblaApi);

    emblaApi.on("reInit", updateProgress);
    emblaApi.on("scroll", updateProgress);
    emblaApi.on("slideFocus", updateProgress);

    return () => {
      emblaApi.off("reInit", updateProgress);
      emblaApi.off("scroll", updateProgress);
      emblaApi.off("slideFocus", updateProgress);
    };
  }, [emblaApi, updateProgress]);

  return (
    <div
      className="works-carousel-wrapper"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="works-carousel-wrapper-overlay" />

      <div className="works-carousel" ref={emblaRef}>
        <div className="works-carousel-row">
          <div className="works-item-padding" />

          {works.map((work) => (
            <div className="works-item" key={`${work.name}-${work.image}`}>
              <div className="works-item-content">
                <div className="works-item-content-textbox">
                  <h2 className="subheadline white">{work.name}</h2>
                  <div className="works-item-content-textbox-row">
                    {work.categories.map((category) => (
                      <div
                        className="works-item-content-textbox-button"
                        key={category}
                      >
                        <p className="small-description white">{category}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <NextImage
                  src={work.image}
                  className="works-item-content-image"
                  width={750}
                  height={750}
                  loading="lazy"
                  alt={work.alt}
                />
              </div>
              <div className="works-item-border" />
            </div>
          ))}

          <div className="works-item">
            <div className="works-item-last-content">
              <p className="description white">
                Be our next client in this section!
              </p>
              <h2 className="subheadline white">Let us get you a coffee.</h2>
              <div className="contact-button-wrapper">
                <button type="button" className="contact-button-white">
                  <span>
                    <span className="contact-button-container-white">
                      <span className="contact-button-primary-white" />
                      <span className="contact-button-complimentary-white" />
                    </span>
                  </span>
                  <span className="description black">Book a call</span>
                </button>
              </div>
            </div>
            <div className="works-item-border" />
          </div>

          <div className="works-item-padding" />
        </div>
      </div>

      <CarouselControls
        progress={scrollProgress}
        prevDisabled={prevBtnDisabled}
        nextDisabled={nextBtnDisabled}
        onPrev={onPrevButtonClick}
        onNext={onNextButtonClick}
      />
    </div>
  );
}

function CaseStudiesCarousel({ wrapperRef, onMouseEnter, onMouseLeave }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });
  const [scrollProgress, setScrollProgress] = useState(0);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const updateProgress = useCallback((api) => {
    setScrollProgress(
      api ? Math.max(0, Math.min(1, api.scrollProgress())) * 100 : 0,
    );
  }, []);

  useEffect(() => {
    if (!emblaApi) return undefined;

    updateProgress(emblaApi);
    emblaApi.on("reInit", updateProgress);
    emblaApi.on("scroll", updateProgress);
    emblaApi.on("slideFocus", updateProgress);

    return () => {
      emblaApi.off("reInit", updateProgress);
      emblaApi.off("scroll", updateProgress);
      emblaApi.off("slideFocus", updateProgress);
    };
  }, [emblaApi, updateProgress]);

  return (
    <div
      ref={wrapperRef}
      className="casestudies-carousel-wrapper opacity-blur"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="casestudies-carousel" ref={emblaRef}>
        <div className="casestudies-carousel-row">
          <div className="casestudies-item-padding" />

          {caseStudies.map((study) => (
            <article className="casestudies-item" key={study.title}>
              <div className="casestudies-item-content">
                <div className="casestudies-item-content-textbox">
                  <div className="subheadline-box">
                    <Zap className="subheadline-box-icon" aria-hidden="true" />
                    <h2 className="small-description grey">{study.category}</h2>
                  </div>

                  <h3 className="small-subheadline white">{study.title}</h3>
                  <p className="description grey">{study.description}</p>
                </div>

                <div className="casestudies-item-content-imagebox">
                  <div className="button casestudies-item-content-imagebox-button">
                    <div className="button-content">
                      <Link
                        className="button-link no-underline small-description white"
                        href={study.href}
                        aria-label={`Read ${study.title} case study`}
                      >
                        Read More
                      </Link>
                    </div>
                    <ArrowUpRight
                      className="casestudies-item-content-imagebox-button-icon"
                      aria-hidden="true"
                    />
                  </div>

                  <NextImage
                    src={study.image}
                    className="casestudies-item-content-image"
                    alt={study.alt}
                    width={400}
                    height={300}
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          ))}

          <div className="casestudies-item-padding" />
        </div>
      </div>

      <CarouselControls
        progress={scrollProgress}
        prevDisabled={prevBtnDisabled}
        nextDisabled={nextBtnDisabled}
        onPrev={onPrevButtonClick}
        onNext={onNextButtonClick}
      />
    </div>
  );
}

function CarouselControls({
  progress,
  prevDisabled,
  nextDisabled,
  onPrev,
  onNext,
}) {
  return (
    <div className="casestudies-carousel-bottom">
      <div className="casestudies-carousel-bottom-buttons">
        <PrevButton onClick={onPrev} disabled={prevDisabled} />
        <NextButton onClick={onNext} disabled={nextDisabled} />
      </div>

      <div className="embla__progress" aria-hidden="true">
        <div
          className="embla__progress__bar"
          style={{ transform: `translate3d(${progress}%, 0, 0)` }}
        />
      </div>
    </div>
  );
}

function IndustriesSection({ subheadlineBoxRef, subtitleRef, descriptionRef }) {
  return (
    <div className="works-industries">
      <div className="works-subtextbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
          <Zap className="subheadline-box-icon" aria-hidden="true" />
          <h2 className="small-description grey">Industries we serve</h2>
        </div>

        <div className="titlebox">
          <div className="titlebox-medium-gradient" />
          <h2 className="subheadline white" ref={subtitleRef}>
            We have extensive experience <br /> across multiple industries
          </h2>
        </div>

        <p className="description grey" ref={descriptionRef}>
          Our product designers have completed projects in different niches.
          They know how to add business value and provide practical solutions.
        </p>
      </div>

      <div className="works-industries-container">
        <div className="works-industries-divider" />

        {industries.map((industry, index) => (
          <div className="works-industries-item" key={industry.title}>
            <div className="works-industries-item-left">
              <h2 className="small-subheadline white">{industry.title}</h2>
            </div>

            <div className="works-industries-item-right">
              <div className="works-industries-item-right-imagebox">
                <NextImage
                  src={industry.image}
                  className="works-industries-item-right-image"
                  alt={industry.alt}
                  height={400}
                  width={400}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="works-industries-divider" />
      </div>
    </div>
  );
}

export const WorksPageSection = () => {
  const titleRef = useRef(null);
  const subtitleRef1 = useRef(null);
  const subtitleRef2 = useRef(null);
  const descriptionRef = useRef(null);
  const subdescriptionRef1 = useRef(null);
  const subdescriptionRef2 = useRef(null);
  const lineRef = useRef(null);
  const carouselWrapperRef = useRef(null);
  const subheadlineBoxRef1 = useRef(null);
  const subheadlineBoxRef2 = useRef(null);
  const cursor = useDragCursor();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const titleSplit = new SplitText(titleRef.current, { type: "chars" });

        gsap.fromTo(
          titleSplit.chars,
          {
            willChange: "opacity, transform",
            filter: "blur(8px)",
            opacity: 0,
            yPercent: 50,
          },
          {
            delay: 0.2,
            opacity: 1,
            filter: "blur(0px)",
            yPercent: 0,
            stagger: 0.02,
            duration: 0.75,
            ease: "power1",
          },
        );
      }

      if (descriptionRef.current) {
        gsap.to(descriptionRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.6,
        });
      }

      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { opacity: 0, filter: "blur(8px)" },
          {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            delay: 0.5,
          },
        );
      }

      const industryImageElements = document.querySelectorAll(
        ".works-industries-item-right-imagebox",
      );

      industryImageElements.forEach((element) => {
        gsap.fromTo(
          element,
          { width: 0 },
          {
            width: "100%",
            scrollTrigger: {
              trigger: element,
              start: "top bottom",
              end: "center center",
              scrub: true,
            },
          },
        );
      });

      if (carouselWrapperRef.current) {
        gsap.to(carouselWrapperRef.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power1",
          scrollTrigger: {
            trigger: carouselWrapperRef.current,
            start: "top 95%",
          },
        });
      }

      [subheadlineBoxRef1.current, subheadlineBoxRef2.current].forEach(
        (element) => {
          if (!element) return;

          gsap.to(element, {
            opacity: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power1",
            scrollTrigger: {
              trigger: element,
              start: "top 95%",
            },
          });
        },
      );

      [subtitleRef1.current, subtitleRef2.current].forEach((element) => {
        if (!element) return;

        const split = new SplitText(element, { type: "words" });

        gsap.fromTo(
          split.words,
          {
            willChange: "opacity, transform",
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
              trigger: element,
              start: "top 95%",
            },
          },
        );
      });

      [subdescriptionRef1.current, subdescriptionRef2.current].forEach(
        (element) => {
          if (!element) return;

          const split = new SplitText(element, { type: "words" });

          gsap.fromTo(
            split.words,
            { filter: "blur(8px)", opacity: 0 },
            {
              opacity: 1,
              filter: "blur(0px)",
              stagger: 0.025,
              duration: 0.5,
              ease: "sine",
              scrollTrigger: {
                trigger: element,
                start: "top 95%",
              },
            },
          );
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <ReactLenis root>
      <section className="works">
        <div className="works-content">
          <div className="works-content-top">
            <div className="works-content-top-text">
              <div className="works-content-textbox">
                <div className="titlebox">
                  <div className="subpage-titlebox-gradient" />
                  <h1 className="headline white" ref={titleRef}>
                    Collection of Our Works
                  </h1>
                </div>

                <p
                  className="description grey opacity-blur"
                  ref={descriptionRef}
                >
                  Case studies offer a unique opportunity to explore real-world
                  examples of challenges, solutions, and results.
                </p>
              </div>

              <div className="works-content-top-divider" ref={lineRef} />
            </div>

            <WorksCarousel
              onMouseEnter={cursor.handleMouseEnter}
              onMouseLeave={cursor.handleMouseLeave}
            />
          </div>

          <IndustriesSection
            subheadlineBoxRef={subheadlineBoxRef1}
            subtitleRef={subtitleRef1}
            descriptionRef={subdescriptionRef1}
          />

          <div className="works-casestudies">
            <div className="works-subtextbox">
              <div
                className="subheadline-box opacity-blur"
                ref={subheadlineBoxRef2}
              >
                <Zap className="subheadline-box-icon" aria-hidden="true" />
                <h2 className="small-description grey">Case Studies</h2>
              </div>

              <div className="titlebox">
                <div className="titlebox-medium-gradient" />
                <h2 className="subheadline white" ref={subtitleRef2}>
                  We have a diverse portfolio of <br /> successful case studies
                </h2>
              </div>

              <p className="description grey" ref={subdescriptionRef2}>
                Case studies offer a unique opportunity to explore real-world
                examples of challenges, solutions, and results.
              </p>
            </div>

            <CaseStudiesCarousel
              wrapperRef={carouselWrapperRef}
              onMouseEnter={cursor.handleMouseEnter}
              onMouseLeave={cursor.handleMouseLeave}
            />
          </div>
        </div>

        <div className="hover-cursor" ref={cursor.cursorRef} aria-hidden="true">
          <p className="small-description white">Drag</p>
        </div>
      </section>
    </ReactLenis>
  );
};
