/* eslint-disable react/jsx-key */
import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionFlower = () => {
    const imageRef1 = useRef(null);
    const imageRef2 = useRef(null);

    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRef5 = useRef(null);
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    const textRef8 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const frameCount = 300;
            const urls = Array.from(
                { length: frameCount },
                (_, i) => `/imageSequence/image${i + 1}.webp`
            );

            imageSequence({
                urls,
                canvas: "#image-sequence",
                scrollTrigger: {
                    trigger: ".flower",
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            function imageSequence(config) {
                const playhead = { frame: 0 };
                const canvas = gsap.utils.toArray(config.canvas)[0];

                if (!canvas) return;

                const context = canvas.getContext("2d");
                let currentFrame = -1;
                let images;

                const updateImage = function () {
                    const frame = Math.round(playhead.frame);

                    if (frame !== currentFrame && images[frame]) {
                        if (config.clear) {
                            context.clearRect(
                                0,
                                0,
                                canvas.width,
                                canvas.height
                            );
                        }

                        context.drawImage(images[frame], 0, 0);
                        currentFrame = frame;

                        if (config.onUpdate) {
                            config.onUpdate.call(
                                this,
                                frame,
                                images[frame]
                            );
                        }
                    }
                };

                images = config.urls.map((url, index) => {
                    const image = new Image();
                    image.src = url;

                    if (index === 0) {
                        image.onload = updateImage;
                    }

                    return image;
                });

                gsap.to(playhead, {
                    frame: images.length - 1,
                    ease: "none",
                    onUpdate: updateImage,
                    duration: images.length / (config.fps || 30),
                    paused: !!config.paused,
                    scrollTrigger: config.scrollTrigger,
                });
            }

            // Image reveal animations
            gsap.fromTo(
                imageRef1.current,
                { width: 0, opacity: 0 },
                {
                    width: "5vw",
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: imageRef1.current,
                        start: "top 95%",
                    },
                }
            );

            gsap.fromTo(
                imageRef2.current,
                { width: 0, opacity: 0 },
                {
                    width: "5vw",
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: imageRef2.current,
                        start: "top 95%",
                    },
                }
            );

            // Text animations
            const textAnimations = [
                { ref: textRef1, delay: 0 },
                { ref: textRef2, delay: 0.25 },
                { ref: textRef3, delay: 0.5 },
                { ref: textRef4, delay: 0 },
                { ref: textRef5, delay: 0.6 },
                { ref: textRef6, delay: 0.85 },
                { ref: textRef7, delay: 0 },
                { ref: textRef8, delay: 0.25 },
            ];

            textAnimations.forEach(({ ref, delay }) => {
                const splitText = new SplitText(ref.current, {
                    type: "chars",
                });

                gsap.fromTo(
                    splitText.chars,
                    { opacity: 0.25 },
                    {
                        delay,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: ref.current,
                            start: "top 95%",
                        },
                    }
                );
            });
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section className="flower">
            <div className="flower-content">
                <div className="projects-gradient-top" />
                <div className="projects-gradient-bottom" />

                <div className="flower-content-sequence">
                    <canvas
                        className="image-sequence-canvas"
                        id="image-sequence"
                        width="1920"
                        height="1080"
                    />
                </div>

                <div className="flower-content-textbox">
                    <div className="flower-content-textbox-item">
                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef1}
                            >
                                Grow
                            </h1>
                        </span>

                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef2}
                            >
                                Your
                            </h1>
                        </span>

                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef3}
                            >
                                Digital
                            </h1>
                        </span>

                        <span>
                            <div
                                className="flower-content-right-content-item"
                                ref={imageRef1}
                            >
                                <img
                                    src="/images/iphoneoptimized.png"
                                    className="flower-content-right-content-item-image"
                                    alt=""
                                />
                            </div>
                        </span>
                    </div>

                    <div className="flower-content-textbox-item">
                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef4}
                            >
                                Presence,
                            </h1>
                        </span>

                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef5}
                            >
                                Let
                            </h1>
                        </span>

                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef6}
                            >
                                Your
                            </h1>
                        </span>
                    </div>

                    <div className="flower-content-textbox-item">
                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef7}
                            >
                                Vision
                            </h1>
                        </span>

                        <span>
                            <div
                                className="flower-content-right-content-item"
                                ref={imageRef2}
                            >
                                <img
                                    src="/images/iphoneoptimized.png"
                                    className="flower-content-right-content-item-image"
                                    alt=""
                                />
                            </div>
                        </span>

                        <span>
                            <h1
                                className="subheadline white"
                                ref={textRef8}
                            >
                                Bloom
                            </h1>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};