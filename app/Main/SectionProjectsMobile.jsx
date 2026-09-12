/* eslint-disable react/jsx-key */
"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Star } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons";
import { DotButton, useDotButton } from "./Carousel/EmblaCarouselDotButton";
import Fade from "embla-carousel-fade";
import NextImage from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionProjectsMobile = () => {
  const subheadlineBoxRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const contentRef = useRef(null);
  const imageContainerRef = useRef(null);

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
          y: "10vw",
        },
        {
          y: "-10vw",
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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Fade()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { onNextButtonClick } = usePrevNextButtons(emblaApi);

  return (
    <section className="projects projects-mobile">
      <div className="textbox">
        <div className="subheadline-box opacity-blur" ref={subheadlineBoxRef}>
          <Star className="subheadline-box-icon" />

          <p className="small-description grey">Featured Works</p>
        </div>

        <div className="titlebox">
          <div className="titlebox-big-gradient" />

          <h2 className="subheadline white" ref={titleRef}>
            Digital Products Built
            <br className="hide-on-mobile" />
            To Make An Impact
          </h2>
        </div>

        <p className="description grey" ref={descriptionRef}>
          From business websites to scalable web applications,
          <br className="hide-on-desktop" />
          we turn ideas into products people love to use.
        </p>
      </div>

      <div
        className="projects-content"
        ref={contentRef}
        onClick={onNextButtonClick}
      >
        <div className="projects-gradient-top" />
        <div className="projects-gradient-bottom" />

        <div className="project-content-wrapper" ref={imageContainerRef}>
          <div className="projects-carousel" ref={emblaRef}>
            <div className="projects-carousel-row">
              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/amazdraw.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Amazdraw website project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/isproperties.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="IS Properties website project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/odhira.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Odhira website project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/tour.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Tour website project"
                />
              </div>

              <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/vitalenta.webp"
                  width={1920}
                  height={1080}
                  className="projects-carousel-item-image"
                  alt="Vitalenta website project"
                />
              </div>

              {/* <div className="projects-carousel-item">
                <NextImage
                  src="/mockups/isproperties.webp"
                  width={1920}
                  height={1080}
                  
                  className="projects-carousel-item-image"
                  alt=""
                />
              </div> */}
            </div>
          </div>
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : "",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
