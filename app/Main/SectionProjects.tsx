"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Fade from "embla-carousel-fade";
import NextImage from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

type EmblaApi = UseEmblaCarouselType[1];

export const SectionProjects = () => {
  const subheadlineBoxRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descriptionRef = useRef<HTMLParagraphElement | null>(null);
  const imageContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  const [showCursor, setShowCursor] = useState<boolean>(false);

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
      }

      // Description text animation
      if (descriptionRef.current) {
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
      }

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

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onNextButtonClick } = usePrevNextButtonsSafe(emblaApi);

  // FOLLOWING CURSOR
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const speed = 0.05;
    let animationFrameId: number | null = null;

    const handleMouseMove = (event: MouseEvent): void => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const animate = (): void => {
      const distX = mouseX - cursorX;
      const distY = mouseY - cursorY;

      cursorX += distX * speed;
      cursorY += distY * speed;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
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
    if (!cursorRef.current) return;

    gsap.to(cursorRef.current, {
      autoAlpha: showCursor ? 1 : 0,
      scale: showCursor ? 1 : 0,
      duration: 0.3,
      ease: showCursor ? "power3.out" : "power3.in",
    });
  }, [showCursor]);

  const handleMouseEnter = (): void => {
    setShowCursor(true);
  };

  const handleMouseLeave = (): void => {
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

          <p className="small-description grey">
            Featured Works
          </p>
        </div>

        <div className="titlebox">
          <div className="titlebox-big-gradient" />

          <h2
            className="subheadline white"
            ref={titleRef}
          >
            Digital Products Built
            <br className="hide-on-mobile" />
            To Make An Impact
          </h2>
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
                <NextImage
                  src="/mockups/amazdraw.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Amazdraw website design project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/isproperties.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="IS Properties website design project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/odhira.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Odhira website design project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/tour.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Tour website design project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/tour.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/odhira.webp"
                  width={1920}
                  height={1080}
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
              className={
                "embla__dot".concat(
                  index === selectedIndex
                    ? " embla__dot--selected"
                    : "",
                )
              }
            />
          ))}
        </div>
      </div>

      <div
        className="hover-cursor"
        ref={cursorRef}
      >
        <p className="small-description white">
          See More
        </p>
      </div>
    </section>
  );
};

/*
 * Local safe version of the Embla next-button hook.
 * Keeps the existing carousel behavior without
 * requiring the ArrowButtons hook.
 */
const usePrevNextButtonsSafe = (emblaApi: EmblaApi) => {
  const [nextBtnDisabled, setNextBtnDisabled] =
    useState<boolean>(true);

  useEffect(() => {
    if (!emblaApi) return;

    const update = (): void => {
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
    onNextButtonClick: (): void => {
      emblaApi?.scrollNext();
    },
  };
};