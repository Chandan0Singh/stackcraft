"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import "./contact.css";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const ContactPageSection = () => {
  // ANIMATIONS
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const contactItem1 = useRef(null);
  const contactItem2 = useRef(null);
  const contactItem3 = useRef(null);
  const contactItem4 = useRef(null);
  const contactItem5 = useRef(null);
  const contactItem6 = useRef(null);
  const contactItem7 = useRef(null);
  const imageRef = useRef(null);
  const imageWrapperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline text animation
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
          delay: 0.2,
          opacity: 1,
          filter: "blur(0px)",
          yPercent: 0,
          stagger: 0.02,
          duration: 0.75,
          ease: "power1",
        },
      );

      // Line animation
      gsap.fromTo(
        lineRef.current,
        {
          opacity: 0,
          filter: "blur(8px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          delay: 0.5,
        },
      );

      // Contact items
      const contactItems = [
        [contactItem1.current, 0.4],
        [contactItem2.current, 0.5],
        [contactItem3.current, 0.6],
        [contactItem4.current, 0.7],
        [contactItem5.current, 0.8],
        [contactItem6.current, 0.9],
        [contactItem7.current, 1],
      ];

      contactItems.forEach(([element, delay]) => {
        gsap.to(element, {
          delay,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power1",
        });
      });

      // Image wrapper animation
      gsap.to(imageWrapperRef.current, {
        delay: 0.5,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power1",
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  // CARDS MOUSE ANIMATION
  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let box1X = 0;
    let box1Y = 0;

    const speed = 0.025;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    let frameId;

    const animate = () => {
      const distX1 = mouseX * -1 - box1X;
      const distY1 = mouseY * -1 - box1Y;

      box1X += distX1 * speed;
      box1Y += distY1 * speed;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${box1X}px, ${box1Y}px)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <ReactLenis root>
      <section className="contact">
        <div className="contact-content">
          <div className="contact-content-top">
            <div className="titlebox">
              <div className="titlebox-gradient" />

              <h1 className="headline white" ref={titleRef}>
                Get in Touch
              </h1>
            </div>

            <div className="contact-divider" ref={lineRef} />
          </div>

          <div className="contact-content-row">
            <div className="contact-content-left">
              <div className="contact-content-column">
                <div
                  className="contact-content-top-item opacity-blur"
                  ref={contactItem1}
                >
                  <div className="contact-content-top-item-profile">
                    <img
                      src="/images/mockup4.webp"
                      className="contact-content-top-item-image"
                      alt=""
                    />
                  </div>

                  <div className="contact-content-top-item-text">
                    <p className="description white">
                      Let&apos;s build something great together. Whether you
                      need a website, web application, mobile app, or
                      AI-powered solution, we&apos;d love to hear about your
                      project.
                    </p>
                  </div>
                </div>

                <div className="contact-content-column-row">
                  <a
                    href="tel:+918860968260"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div
                      className="contact-content-small-item opacity-blur"
                      ref={contactItem2}
                    >
                      <img
                        src="/logos/phone.svg"
                        className="contact-content-small-item-icon"
                        alt=""
                      />
                      <p className="small-description grey">Call</p>
                    </div>
                  </a>

                  <a
                    href="mailto:code.chandansingh@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div
                      className="contact-content-small-item opacity-blur"
                      ref={contactItem3}
                    >
                      <Mail
                        strokeWidth={2.5}
                        className="contact-content-small-item-icon"
                      />
                      <p className="small-description grey">Email</p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/chandan-singh-0b1b4a1b3/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="no-underline"
                  >
                    <div
                      className="contact-content-small-item opacity-blur"
                      ref={contactItem4}
                    >
                      <img
                        src="/logos/linkedin.svg"
                        className="contact-content-small-item-icon"
                        alt=""
                      />
                      <p className="small-description grey">LinkedIn</p>
                    </div>
                  </a>
                </div>

                <div
                  className="contact-content-item opacity-blur"
                  ref={contactItem5}
                >
                  <p className="small-description grey">Videocall</p>
                  <p className="description white">Book a videocall</p>
                </div>

                <div
                  className="contact-content-item opacity-blur"
                  ref={contactItem6}
                >
                  <p className="small-description grey">Email</p>
                  <p className="description white">YOur gmail</p>
                </div>

                <div
                  className="contact-content-item opacity-blur"
                  ref={contactItem7}
                >
                  <p className="small-description grey">Address</p>
                  <p className="description white">City</p>
                  <p className="description white">State</p>
                  <p className="description white">Counry</p>
                </div>
              </div>
            </div>

            <div
              className="contact-content-right opacity-blur"
              ref={imageWrapperRef}
            >
              <img
                src="/logos/stackcraft.png"
                className="contact-content-right-image"
                ref={imageRef}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};