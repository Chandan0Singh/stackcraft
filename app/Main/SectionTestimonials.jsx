/* eslint-disable react/jsx-key */
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./Carousel/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { Send } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionTestimonials = () => {
  const subheadlineBoxRef = useRef(null);
  const titleRef = useRef(null);
  const emblaWrapperRef = useRef(null);

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
        }
      );

      // Embla wrapper animation
      gsap.to(emblaWrapperRef.current, {
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.5,
        ease: "power1",
        scrollTrigger: {
          trigger: emblaWrapperRef.current,
          start: "top 95%",
        },
      });

      return () => {
        titleSplit.revert();
      };
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({
    dragFree: true,
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onScroll = useCallback((api) => {
    const progress = Math.max(
      0,
      Math.min(1, api.scrollProgress())
    );

    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);

    emblaApi
      .on("reInit", onScroll)
      .on("scroll", onScroll)
      .on("slideFocus", onScroll);

    return () => {
      emblaApi
        .off("reInit", onScroll)
        .off("scroll", onScroll)
        .off("slideFocus", onScroll);
    };
  }, [emblaApi, onScroll]);

  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <div className="textbox testimonials-content-textbox">
          <div
            className="subheadline-box opacity-blur"
            ref={subheadlineBoxRef}
          >
            <Send className="subheadline-box-icon" />

            <h2 className="small-description grey">
              Client Feedback
            </h2>
          </div>

          <div className="titlebox">
            <div className="titlebox-big-gradient" />

            <h1
              className="subheadline white"
              ref={titleRef}
            >
              Built With Trust.
              <br />
              Backed By Our Clients.
            </h1>
          </div>
        </div>

        <div
          className="opacity-blur"
          ref={emblaWrapperRef}
        >
          <div
            className="testimonials-carousel"
            ref={emblaRef}
          >
            <div className="testimonials-carousel-row">
              <div className="testimonials-item-padding" />

              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="testimonials-item-profile">
                    <img
                      src="/images/sourav.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="testimonials-item-center">
                    <p className="big-description white">
                      Sourav Khatana
                    </p>

                    <p className="description grey">
                      Owner, IS Properties
                    </p>
                  </div>

                  <p className="description white">
                    StackCraft transformed our online presence with
                    a modern, responsive website that showcases IS
                    Properties and makes exploring properties for
                    sale, rent, and lease across Gurugram simple
                    and seamless.
                  </p>
                </div>

                <div className="testimonials-item-grid" />
              </div>

              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="testimonials-item-profile">
                    <img
                      src="/images/jay.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="testimonials-item-center">
                    <p className="big-description white">
                      Jay Negi
                    </p>

                    <p className="description grey">
                      Owner, Tour Site
                    </p>
                  </div>

                  <p className="description white">
                    StackCraft brought the Odhira brand online with
                    an elegant, modern e-commerce website. His
                    expertise, attention to detail, and
                    professionalism made the entire development
                    process smooth.
                  </p>
                </div>

                <div className="testimonials-item-grid" />
              </div>

              <div className="testimonials-item">
                <div className="testimonials-item-content">
                  <div className="testimonials-item-profile">
                    <img
                      src="/images/tushar.jpeg"
                      alt="Tushar Kandiyal"
                    />
                  </div>

                  <div className="testimonials-item-center">
                    <p className="big-description white">
                      Tushar Kandiyal
                    </p>

                    <p className="description grey">
                      Founder, Odhira
                    </p>
                  </div>

                  <p className="description white">
                    StackCraft brought the Odhira brand online with
                    an elegant, modern e-commerce website. His
                    expertise, attention to detail, and
                    professionalism made the entire development
                    process smooth.
                  </p>
                </div>

                <div className="testimonials-item-grid" />
              </div>

              <div className="testimonials-item testimonials-item-last">
                <div className="testimonials-item-content testimonials-item-content-last">
                  <div className="testimonials-item-last-top">
                    <p className="description white">
                      Ready to build something great?
                    </p>
                  </div>

                  <p className="small-subheadline white">
                    Let&apos;s build your next digital product.
                  </p>

                  <div className="contact-button-wrapper">
                    <button className="contact-button-white">
                      <span>
                        <span className="contact-button-container-white">
                          <span className="contact-button-primary-white"></span>
                          <span className="contact-button-complimentary-white"></span>
                        </span>
                      </span>

                      <span className="description black">
                        Book a call
                      </span>
                    </button>
                  </div>
                </div>

                <div className="background-gradient-circle-3" />
                <div className="testimonials-item-grid" />
              </div>

              <div className="testimonials-item-padding" />
            </div>
          </div>
        </div>

        <div className="testimonials-content-bottom">
          <div className="testimonials-content-bottom-buttons">
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />

            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>

          <div className="embla__progress">
            <div
              className="embla__progress__bar"
              style={{
                transform: `translate3d(${scrollProgress}%,0px,0px)`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};