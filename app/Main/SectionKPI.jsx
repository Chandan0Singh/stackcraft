import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Cone, Globe, User, Zap } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export const SectionKPI = () => {
    const subheadlineBoxRef = useRef(null);
    const titleRef = useRef(null);
    const bentoBoxRef1 = useRef(null);
    const bentoBoxRef2 = useRef(null);
    const bentoBoxRef3 = useRef(null);

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
                    yPercent: 100,
                },
                {
                    opacity: 1,
                    filter: "blur(0px)",
                    yPercent: 0,
                    stagger: 0.085,
                    duration: 1,
                    ease: "power2",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 95%",
                    },
                }
            );

            // Bento grid box animations
            const animateBox = (element, delay = 0) => {
                gsap.fromTo(
                    element,
                    {
                        rotationY: 30,
                        scale: 0.6,
                        opacity: 0,
                    },
                    {
                        delay,
                        rotationY: 0,
                        scale: 1,
                        opacity: 1,
                        duration: 0.75,
                        ease: "power1",
                        scrollTrigger: {
                            trigger: element,
                            start: "top bottom",
                        },
                    }
                );
            };

            animateBox(bentoBoxRef1.current);
            animateBox(bentoBoxRef2.current, 0.2);
            animateBox(bentoBoxRef3.current, 0.4);
        });

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <section className="kpi">
            <div className="kpi-content">
                <div className="textbox">
                    <div
                        className="subheadline-box opacity-blur"
                        ref={subheadlineBoxRef}
                    >
                        <Zap className="subheadline-box-icon" />
                        <h2 className="small-description grey">
                            Key Performance Indicators
                        </h2>
                    </div>

                    <div className="titlebox">
                        <div className="titlebox-gradient" />
                        <h1 className="subheadline white" ref={titleRef}>
                            Building Digital <br /> Products That Matter
                        </h1>
                    </div>
                </div>

                <div className="kpi-content-row">
                    <div className="kpi-content-item" ref={bentoBoxRef1}>
                        <div className="kpi-item-textbox">
                            <div className="kpi-item-textbox-top">
                                <div className="kpi-item-textbox-number">
                                    <h2 className="headline kpi-item-textbox-number-text white">
                                        250
                                    </h2>
                                    <div className="kpi-item-textbox-number-gradient" />
                                </div>

                                <h3 className="small-subheadline kpi-item-textbox-top-text white">
                                    thousand
                                </h3>
                            </div>

                            <p className="description grey">
                                of data processed by our <br /> models every
                                single month
                            </p>
                        </div>

                        <div className="kpi-item-button">
                            <Globe className="kpi-item-button-icon" />
                        </div>

                        <div className="kpi-item-grid" />
                    </div>

                    <div className="kpi-content-item" ref={bentoBoxRef2}>
                        <div className="kpi-item-textbox">
                            <div className="kpi-item-textbox-top">
                                <div className="kpi-item-textbox-number">
                                    <h2 className="headline kpi-item-textbox-number-text white">
                                        $100
                                    </h2>
                                    <div className="kpi-item-textbox-number-gradient" />
                                </div>

                                <h3 className="small-subheadline kpi-item-textbox-top-text white">
                                    million
                                </h3>
                            </div>

                            <p className="description grey">
                                client revenue driven by our <br /> tailored
                                solutions and strategies.
                            </p>
                        </div>

                        <div className="kpi-item-button">
                            <User className="kpi-item-button-icon" />
                        </div>

                        <div className="kpi-item-grid" />
                    </div>

                    <div className="kpi-content-item" ref={bentoBoxRef3}>
                        <div className="kpi-item-textbox">
                            <div className="kpi-item-textbox-top">
                                <div className="kpi-item-textbox-number">
                                    <h2 className="headline kpi-item-textbox-number-text white">
                                        500
                                    </h2>
                                    <div className="kpi-item-textbox-number-gradient" />
                                </div>

                                <h3 className="small-subheadline kpi-item-textbox-top-text white">
                                    million
                                </h3>
                            </div>

                            <p className="description grey">
                                users continuosly running our <br /> photo
                                enhancment software plugin.
                            </p>
                        </div>

                        <div className="kpi-item-button">
                            <Cone className="kpi-item-button-icon" />
                        </div>

                        <div className="kpi-item-grid" />
                    </div>
                </div>
            </div>
        </section>
    );
};