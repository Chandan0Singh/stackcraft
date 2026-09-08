"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/all";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(SplitText, ScrollTrigger, TextPlugin);

export const AboutPageSection = () => {
  // ANIMATIONS

  const titleRef = useRef();
  const titleRef2 = useRef();
  const descriptionRef = useRef();
  const lineRef = useRef();
  const itemRefs = useRef([]);

  const teamMembers = [
    {
      name: "Chandan Singh",
      title: "Founder & CEO",
    },
    {
      name: "Varsha Chauhan",
      title: "Social Media & Outreach",
    },
    {
      name: "Anshu Chaudhary",
      title: "Content & Social Media Manager",
    },
    {
      name: "Govind Rajawat",
      title: "COO & Design Lead",
    },
    {
      name: "Jay Negi",
      title: "Digital Marketing Specialist",
    },
    {
      name: "Bharat Khati",
      title: "Digital Marketing Specialist",
    },
  ];

  useEffect(() => {
    // title animation
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    gsap.fromTo(
      titleSplit.chars,
      {
        "will-change": "opacity, transform",
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

    // description animation
    gsap.to(descriptionRef.current, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      delay: 0.6,
    });

    // line animation
    gsap.fromTo(
      lineRef.current,
      { opacity: 0, filter: "blur(8px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.5, delay: 0.5 },
    );

    // title 2 animation
    const titleSplit2 = new SplitText(titleRef2.current, { type: "words" });
    gsap.fromTo(
      titleSplit2.words,
      { "will-change": "opacity", filter: "blur(8px)", opacity: 0 },
      {
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.025,
        ease: "sine",
        scrollTrigger: {
          trigger: titleRef2.current,
          start: "top 95%",
          end: "bottom center",
          scrub: true,
        },
      },
    );

    // team member boxes animations
    itemRefs.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { yPercent: 100, opacity: 0, filter: "blur(8px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.75,
          delay: index * 0.2,
          ease: "power3",
          scrollTrigger: {
            trigger: ".five-content",
            start: "top bottom",
          },
        },
      );
    });
  }, []);

  // STICKY SECTION

  const item1Ref = useRef(null);
  const item2Ref = useRef(null);
  const item3Ref = useRef(null);
  const item4Ref = useRef(null);

  useEffect(() => {
    const refs = [item1Ref, item2Ref, item3Ref, item4Ref];

    refs.forEach((ref, position) => {
      const el = ref.current;
      const isLast = position === refs.length - 1;

      gsap.set(el, { willChange: "transform, filter" });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: "center center",
          end: "350%",
          scrub: true,
        },
      });

      timeline
        .to(
          el,
          {
            ease: "none",
            startAt: { filter: "blur(0px)" },
            filter: isLast ? "blur(0px)" : "blur(3px)",
            scrollTrigger: {
              trigger: el,
              start: "center center",
              end: "+=100%",
              scrub: true,
            },
          },
          0,
        )
        .to(
          el,
          {
            ease: "none",
            scale: isLast ? 1 : 0.55,
            yPercent: isLast ? 0 : -45,
          },
          0,
        );
    });
  }, []);

  return (
    <ReactLenis root>
      <section className="about">
        <div className="about-content">
          <div className="about-content-top">
            <div className="about-content-textbox">
              <div className="titlebox">
                <div className="titlebox-gradient" />
                <h1 className="headline white" ref={titleRef}>
                  Building Digital Products That Move Businesses Forward
                </h1>
              </div>
              <p className="description grey opacity-blur" ref={descriptionRef}>
                StackCraft Studio is a digital product studio focused on
                building modern websites, web applications, e-commerce
                platforms, and AI-powered solutions.
              </p>
            </div>
            <div className="about-divider" ref={lineRef} />
          </div>
          <div className="about-team">
            <div className="about-team-container">
              {teamMembers.map((member, index) => (
                <div
                  className="about-team-item"
                  key={index}
                  ref={(el) => (itemRefs.current[index] = el)}
                >
                  <p className="description white">{member.name}</p>
                  <p className="description white">{member.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="about-divider" />
          <div className="about-whyus">
            <p className="description about-whyus-description grey">Why us</p>
            <p
              className="subheadline about-whyus-subheadline white"
              ref={titleRef2}
            >
              At StackCraft Studio, we combine design, development, and modern
              technology to build digital products that solve real business
              problems. We work closely with our clients from idea to launch,
              focusing on performance, scalability, and long-term growth.
            </p>
          </div>
          <div className="about-divider" />
          <div className="about-sticky-container">
            <div className="about-sticky-item" ref={item1Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    Web <br /> Development
                  </h1>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    We build fast, responsive, and scalable websites and web
                    applications using modern technologies like React, Next.js,
                    Node.js, and MongoDB.
                  </p>
                </div>
                <h1 className="headline white">(01)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <img
                    src="/images/web-dev.png"
                    className="about-sticky-item-right-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="about-sticky-item" ref={item2Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">E-Commerce</h1>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    We create conversion-focused e-commerce experiences with
                    modern storefronts, secure integrations, and scalable
                    backend systems.
                  </p>
                </div>
                <h1 className="headline white">(02)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <img
                    src="/images/e-com.png"
                    className="about-sticky-item-right-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="about-sticky-item" ref={item3Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    AI <br /> Solutions
                  </h1>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    We integrate AI and generative AI capabilities into digital
                    products to automate workflows, improve user experiences,
                    and unlock new possibilities.
                  </p>
                </div>
                <h1 className="headline white">(03)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <img
                    src="/images/ai.png"
                    className="about-sticky-item-right-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="about-sticky-item" ref={item4Ref}>
              <div className="about-sticky-item-left">
                <div className="about-sticky-item-left-textbox">
                  <h1 className="headline white">
                    Maintenance <br /> & Support
                  </h1>

                  <p className="description about-sticky-item-left-textbox-description grey">
                    We keep your digital products secure, updated, optimized,
                    and ready to grow with your business.
                  </p>
                </div>
                <h1 className="headline white">(04)</h1>
              </div>
              <div className="about-sticky-item-right">
                <div className="about-sticky-item-right-imagebox">
                  <img
                    src="/images/Maintenance.png"
                    className="about-sticky-item-right-image"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactLenis>
  );
};
