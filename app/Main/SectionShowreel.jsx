/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export const SectionShowreel = () => {
  const videoRef = useRef(null);
  const playButtonRef = useRef(null);
  const showreelItemRef1 = useRef(null);
  const showreelItemRef2 = useRef(null);
  const showreelItemRef3 = useRef(null);
  const showreelItemRef4 = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(videoRef.current, {
        rotateY: "0deg",
        scale: "1",
        rotateX: "0deg",
        translateY: "0vh",
        scrollTrigger: {
          trigger: ".showreel",
          start: "top bottom",
          end: "top top",
          scrub: true,
          markers: false,
        },
      });

      const animateItem = (element, delay) => {
        gsap.to(element, {
          delay,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power1",
          scrollTrigger: {
            trigger: element,
            start: "top 95%",
          },
        });
      };

      animateItem(showreelItemRef1.current, 0);
      animateItem(showreelItemRef2.current, 0.1);
      animateItem(showreelItemRef3.current, 0.2);
      animateItem(showreelItemRef4.current, 0.3);
    });

    let mouseX = 0;
    let mouseY = 0;
    let buttonX = 0;
    let buttonY = 0;
    const speed = 0.05;
    let animationFrameId;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) * 100 - 50;
      mouseY = (event.clientY / window.innerHeight) * 100 - 50;
    };

    const animate = () => {
      const distX = mouseX - buttonX;
      const distY = mouseY - buttonY;

      buttonX += distX * speed;
      buttonY += distY * speed;

      if (playButtonRef.current) {
        playButtonRef.current.style.transform = `translate(${buttonX}px, ${buttonY}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      ctx.revert();
    };
  }, []);

  return (
    <section className="showreel">
      <div className="showreel-content">
        <div className="showreel-content-container">
          <div
            className="showreel-video-playbutton"
            ref={playButtonRef}
          >
            <Play
              fill="#010101"
              className="showreel-video-playbutton-icon"
            />
          </div>

          <div
            ref={videoRef}
            className="showreel-content-videobox"
          >
            <div className="background">
              <div className="trail"></div>
            </div>

            <video
              src="/videos/ese.mp4"
              className="showreel-content-video"
              autoPlay="autoplay"
              muted
              playsInline
              data-wf-ignore="true"
              preload="auto"
              loop
            />
          </div>
        </div>

        <div className="showreel-content-row">
          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef1}
          >
            <img
              src="/logos/stackcraft.png"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef2}
          >
            <img
              src="/logos/cssbestui.svg"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef3}
          >
            <img
              src="/logos/cssbestinnovation.svg"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>

          <div
            className="showreel-content-row-item opacity-blur"
            ref={showreelItemRef4}
          >
            <img
              src="/logos/cssbestux.svg"
              className="showreel-content-row-item-image"
              alt=""
            />
            <div className="showreel-content-row-item-grid" />
          </div>
        </div>
      </div>
    </section>
  );
};
