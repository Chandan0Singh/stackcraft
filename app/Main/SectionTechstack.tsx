"use client";

import { useCallback, useEffect, useRef } from "react";
import NextImage from "next/image";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
import { ArrowUpRight, Layers } from "lucide-react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { usePrevNextButtons } from "./Carousel/EmblaCarouselArrowButtons";
import {
  DotButton,
  useDotButton,
} from "./Carousel/EmblaCarouselDotButton";
import { motion } from "framer-motion";

gsap.registerPlugin(SplitText, ScrollTrigger);

const TWEEN_FACTOR_BASE = 0.25;

type EmblaApi = UseEmblaCarouselType[1];
type EmblaEventName = Parameters<
  NonNullable<EmblaApi>["on"]
>[0];

const numberWithinRange = (
  number: number,
  min: number,
  max: number,
): number => {
  return Math.min(Math.max(number, min), max);
};

export const SectionTechstack = () => {
  // GSAP REFS

  const subheadlineBoxRef =
    useRef<HTMLDivElement | null>(null);

  const titleRef =
    useRef<HTMLHeadingElement | null>(null);

  const descriptionRef =
    useRef<HTMLParagraphElement | null>(null);

  const bentoBoxRef1 =
    useRef<HTMLDivElement | null>(null);

  const bentoBoxRef2 =
    useRef<HTMLDivElement | null>(null);

  const bentoBoxRef3 =
    useRef<HTMLDivElement | null>(null);

  // GSAP ANIMATIONS

  useEffect(() => {
    let hoverClassTimeout: number | undefined;

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

        // Description text animation
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

          // Bento box 1
          gsap.fromTo(
            bentoBoxRef1.current,
            {
              rotationY: 30,
              scale: 0.6,
              opacity: 0,
            },
            {
              rotationY: 0,
              scale: 1,
              opacity: 1,
              duration: 0.75,
              ease: "power1",
              scrollTrigger: {
                trigger: bentoBoxRef1.current,
                start: "top bottom",
              },
            },
          );

          // Bento box 2
          gsap.fromTo(
            bentoBoxRef2.current,
            {
              rotationY: 30,
              scale: 0.6,
              opacity: 0,
            },
            {
              rotationY: 0,
              scale: 1,
              opacity: 1,
              duration: 0.75,
              ease: "power1",
              scrollTrigger: {
                trigger: bentoBoxRef2.current,
                start: "top bottom",
              },
            },
          );

          const addClassnames = (): void => {
            const cards =
              bentoBoxRef3.current?.querySelectorAll<HTMLElement>(
                ".techstack-item-card",
              );

            if (!cards?.length) return;

            cards.forEach((card, index) => {
              card.classList.add(
                `techstack-item-card-animated-${index + 1}`,
              );
            });

            hoverClassTimeout = window.setTimeout(() => {
              cards.forEach((card) => {
                card.classList.add(
                  "techstack-item-card-animated-hover",
                );
              });
            }, 1250);
          };

          // Bento box 3
          gsap.fromTo(
            bentoBoxRef3.current,
            {
              rotationY: 30,
              scale: 0.6,
              opacity: 0,
            },
            {
              delay: 0.2,
              rotationY: 0,
              scale: 1,
              opacity: 1,
              duration: 0.75,
              ease: "power1",
              scrollTrigger: {
                trigger: bentoBoxRef3.current,
                start: "top bottom",
              },
              onComplete: addClassnames,
            },
          );

          return () => {
            if (hoverClassTimeout !== undefined) {
              window.clearTimeout(hoverClassTimeout);
            }

            titleSplit.revert();
            descriptionSplit.revert();
          };
        }
      }
    });

    return () => {
      ctx.revert();

      if (hoverClassTimeout !== undefined) {
        window.clearTimeout(hoverClassTimeout);
      }
    };
  }, []);

  // VIDEO

  const videoRef =
    useRef<HTMLVideoElement | null>(null);

  const handleVideoButtonClick = (): void => {
    if (videoRef.current) {
      void videoRef.current.play();
    }
  };

  // EMBLA CAROUSEL

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: false,
  });

  const {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  } = useDotButton(emblaApi);

  const tweenFactor = useRef<number>(0);

  const tweenNodes =
    useRef<(HTMLElement | null)[]>([]);

  const {
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const setTweenNodes = useCallback(
    (api: NonNullable<EmblaApi>): void => {
      tweenNodes.current = api
        .slideNodes()
        .map((slideNode) =>
          slideNode.querySelector<HTMLElement>(
            ".techstack-item-content-column-slider-item-child",
          ),
        );
    },
    [],
  );

  const setTweenFactor = useCallback(
    (api: NonNullable<EmblaApi>): void => {
      tweenFactor.current =
        TWEEN_FACTOR_BASE *
        api.scrollSnapList().length;
    },
    [],
  );

  const tweenEffects = useCallback(
    (
      api: NonNullable<EmblaApi>,
      eventName?: EmblaEventName,
    ): void => {
      const engine = api.internalEngine();
      const scrollProgress = api.scrollProgress();
      const slidesInView = api.slidesInView();
      const isScrollEvent = eventName === "scroll";
      const slideNodes = api.slideNodes();
      const scrollSnapList = api.scrollSnapList();

      scrollSnapList.forEach(
        (scrollSnap, snapIndex) => {
          let diffToTarget =
            scrollSnap - scrollProgress;

          const slidesInSnap =
            engine.slideRegistry[snapIndex];

          slidesInSnap.forEach((slideIndex) => {
            if (
              isScrollEvent &&
              !slidesInView.includes(slideIndex)
            ) {
              return;
            }

            if (engine.options.loop) {
              engine.slideLooper.loopPoints.forEach(
                (loopItem) => {
                  const target = loopItem.target();

                  if (
                    slideIndex === loopItem.index &&
                    target !== 0
                  ) {
                    const sign = Math.sign(target);

                    if (sign === -1) {
                      diffToTarget =
                        scrollSnap -
                        (1 + scrollProgress);
                    }

                    if (sign === 1) {
                      diffToTarget =
                        scrollSnap +
                        (1 - scrollProgress);
                    }
                  }
                },
              );
            }

            const tweenValue =
              1 -
              Math.abs(
                diffToTarget *
                  tweenFactor.current,
              );

            const scale =
              numberWithinRange(
                tweenValue,
                0,
                1,
              ).toString();

            const opacity =
              numberWithinRange(
                tweenValue,
                0,
                1,
              ).toString();

            // Scale effect
            const tweenNode =
              tweenNodes.current[slideIndex];

            if (tweenNode) {
              tweenNode.style.transform =
                `scale(${scale})`;
            }

            // Opacity effect
            const slideNode =
              slideNodes[slideIndex];

            if (slideNode) {
              slideNode.style.opacity = opacity;
            }
          });
        },
      );
    },
    [],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenEffects(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenEffects)
      .on("scroll", tweenEffects)
      .on("slideFocus", tweenEffects);

    return () => {
      emblaApi
        .off("reInit", setTweenNodes)
        .off("reInit", setTweenFactor)
        .off("reInit", tweenEffects)
        .off("scroll", tweenEffects)
        .off("slideFocus", tweenEffects);
    };
  }, [
    emblaApi,
    setTweenNodes,
    setTweenFactor,
    tweenEffects,
  ]);

  const slideDescriptions: string[] = [
    "Modern frontend experiences built with React for fast, interactive, and scalable interfaces.",
    "Production-ready applications with Next.js, optimized for performance, SEO, and scalability.",
    "Robust backend systems and APIs built with Node.js and Express.",
    "Flexible and scalable data storage using MongoDB for modern web applications.",
    "AI-powered features and intelligent automation integrated into real-world digital products.",
  ];

  return (
    <section className="techstack">
      <div className="techstack-content">
        <div className="textbox">
          <div
            className="subheadline-box opacity-blur"
            ref={subheadlineBoxRef}
          >
            <Layers className="subheadline-box-icon" />

            <p className="small-description grey">
              Our Technology
            </p>
          </div>

          <div className="titlebox">
            <div className="titlebox-big-gradient" />

            <h2
              className="subheadline white"
              ref={titleRef}
            >
              Modern Technology For
              <br className="hide-on-mobile" />
              Powerful Digital Products.
            </h2>
          </div>

          <p
            className="description grey"
            ref={descriptionRef}
          >
            We use modern tools and proven technologies
            to build fast, scalable, secure, and reliable
            digital experiences.
          </p>
        </div>

        <div className="techstack-container">
          <div
            className="techstack-item-big techstack-item-no-padding"
            ref={bentoBoxRef1}
          >
            <div className="techstack-item-content">
              <div className="techstack-item-content-center">
                <div className="textbox">
                  <p className="small-subheadline white hide-on-mobile">
                    Technology That <br />
                    Works For Your Business
                  </p>

                  <button
                    type="button"
                    className="button hero-button button-transparent-border"
                    onClick={handleVideoButtonClick}
                  >
                    <div className="button-content">
                      <span className="small-description">
                        Explore Our Stack
                      </span>

                      <span className="small-description">
                        Explore Our Stack
                      </span>
                    </div>

                    <div className="button-circle button-circle-white">
                      <ArrowUpRight className="button-icon button-icon-180" />
                    </div>
                  </button>
                </div>
              </div>

              <video
                className="techstack-item-content-video"
                ref={videoRef}
                src="/videos/logos.mp4"
                muted
                playsInline
                data-wf-ignore="true"
                loop
              />
            </div>

            <div className="background-gradient-circle" />
            <div className="techstack-item-no-padding-border" />
          </div>

          <div
            className="techstack-item-small techstack-item-small-mobile-big"
            ref={bentoBoxRef2}
          >
            <div className="techstack-item-content">
              <div className="techstack-item-content-column">
                <div className="techstack-item-content-column-slider">
                  <NextImage
                    src="/images/abs.webp"
                    className="techstack-item-content-column-slider-image"
                    alt="3D technology visualization"
                    width={800}
                    height={800}
                  />

                  <div
                    className="techstack-item-content-column-slider-carousel"
                    ref={emblaRef}
                  >
                    <div className="techstack-item-content-column-slider-carousel-row">
                      <div className="techstack-item-content-column-slider-item">
                        <div className="techstack-item-content-column-slider-item-child">
                          <NextImage
                            src="/logos/blenderwhite.svg"
                            className="techstack-item-content-column-slider-item-image"
                            alt="Blender"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="techstack-item-content-column-slider-item">
                        <div className="techstack-item-content-column-slider-item-child">
                          <NextImage
                            src="/logos/ae.svg"
                            className="techstack-item-content-column-slider-item-image"
                            alt="After Effects"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="techstack-item-content-column-slider-item">
                        <div className="techstack-item-content-column-slider-item-child">
                          <NextImage
                            src="/logos/photoshop.svg"
                            className="techstack-item-content-column-slider-item-image"
                            alt="Photoshop"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="techstack-item-content-column-slider-item">
                        <div className="techstack-item-content-column-slider-item-child">
                          <NextImage
                            src="/logos/davinciresolvewhite.svg"
                            className="techstack-item-content-column-slider-item-image"
                            alt="DaVinci Resolve"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>

                      <div className="techstack-item-content-column-slider-item">
                        <div className="techstack-item-content-column-slider-item-child">
                          <NextImage
                            src="/logos/houdiniwhite.svg"
                            className="techstack-item-content-column-slider-item-image"
                            alt="Houdini"
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="techstack-item-content-column-textbox">
                  <p className="small-subheadline white">
                    The Right Technology Stack
                  </p>

                  <motion.p
                    key={selectedIndex}
                    className="description grey"
                    initial={{
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    animate={{
                      opacity: 1,
                      filter: "blur(0px)",
                    }}
                    exit={{
                      opacity: 0,
                      filter: "blur(10px)",
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {
                      slideDescriptions[
                        selectedIndex
                      ]
                    }
                  </motion.p>
                </div>

                <div className="techstack-item-content-column-border" />

                <div className="techstack-item-content-column-bottom">
                  <div className="techstack-item-content-column-bottom-left">
                    <button
                      type="button"
                      className="button techstack-item-content-column-bottom-button"
                      onClick={onPrevButtonClick}
                    >
                      <div className="button-content">
                        <span className="small-description">
                          Previous
                        </span>

                        <span className="small-description">
                          Previous
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="techstack-item-content-column-bottom-center">
                    <div className="embla__dots-small">
                      {scrollSnaps.map(
                        (_, index) => (
                          <DotButton
                            key={index}
                            onClick={() =>
                              onDotButtonClick(
                                index,
                              )
                            }
                            className={
                              "embla__dot-small".concat(
                                index ===
                                  selectedIndex
                                  ? " embla__dot--selected-small"
                                  : "",
                              )
                            }
                          />
                        ),
                      )}
                    </div>
                  </div>

                  <div className="techstack-item-content-column-bottom-right">
                    <button
                      type="button"
                      className="button techstack-item-content-column-bottom-button"
                      onClick={onNextButtonClick}
                    >
                      <div className="button-content">
                        <span className="small-description">
                          Continue
                        </span>

                        <span className="small-description">
                          Continue
                        </span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="background-gradient-circle" />
          </div>

          <div
            className="techstack-item-small bentoBoxRef3"
            ref={bentoBoxRef3}
          >
            <div className="techstack-item-content-cards">
              <div className="techstack-item-content-textbox">
                <p className="small-subheadline white">
                  Transparent Project Updates
                </p>

                <p className="description grey">
                  Stay informed with clear communication,
                  regular updates, and a transparent
                  development process.
                </p>
              </div>

              <div className="techstack-item-cards">
                <div className="techstack-item-card techstack-item-card-1">
                  <div className="techstack-item-card-content techstack-item-card-content-1">
                    <div className="techstack-item-card-content-top">
                      <p className="description white">
                        Slack
                      </p>

                      <NextImage
                        src="/logos/slack.png"
                        className="techstack-item-card-content-top-image"
                        alt="Slack logo"
                        width={100}
                        height={100}
                      />
                    </div>

                    <div className="techstack-item-card-content-bottom">
                      <p className="description grey">
                        Clear communication, regular updates,
                        and a transparent development process.
                      </p>
                    </div>

                    <p className="small-description grey">
                      Nov 5
                    </p>
                  </div>
                </div>

                <div className="techstack-item-card techstack-item-card-2">
                  <div className="techstack-item-card-content techstack-item-card-content-2">
                    <div className="techstack-item-card-content-top">
                      <p className="description white">
                        Gmail
                      </p>

                      <NextImage
                        src="/logos/gmail.png"
                        className="techstack-item-card-content-top-image"
                        alt="Gmail logo"
                        height={100}
                        width={100}
                      />
                    </div>
                  </div>

                  <div className="techstack-item-card-content-bottom">
                    <p className="small-description grey">
                      Development update sent. Testing
                      and final review are now scheduled.
                    </p>
                  </div>

                  <p className="small-description grey">
                    Nov 6
                  </p>
                </div>
              </div>

              <div className="techstack-item-card techstack-item-card-3">
                <div className="techstack-item-card-content">
                  <div className="techstack-item-card-content-top">
                    <p className="description white">
                      Notion
                    </p>

                    <NextImage
                      src="/logos/notion.png"
                      className="techstack-item-card-content-top-image"
                      alt="Notion logo"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="techstack-item-card-content-bottom">
                    <p className="small-description grey">
                      Project tasks updated and organized
                      for the next development phase.
                    </p>
                  </div>

                  <p className="small-description grey">
                    Nov 7
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="background-gradient-circle-2" />
        </div>
      </div>
    </section>
  );
};