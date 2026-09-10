"use client";

import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigationBar = useRef(null);
    const navigationBarCenter = useRef(null);

    const navigationBarCenterRef1 = useRef(null);
    const navigationBarCenterRef2 = useRef(null);
    const navigationBarCenterRef3 = useRef(null);

    useLayoutEffect(() => {
        const navigation = navigationBar.current;
        const navigationCenter = navigationBarCenter.current;

        if (!navigation || !navigationCenter) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            /*
             * DESKTOP
             */
            mm.add("(min-width: 769px)", () => {
                gsap.to(navigation, {
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    rotateX: 0,
                    y: "0vh",
                    duration: 0.75,
                    ease: "power1",
                    delay: 0.75,
                });

                gsap.fromTo(
                    navigation,
                    {
                        width: "25%",
                    },
                    {
                        width: "100%",
                        duration: 0.75,
                        ease: "power1",
                        delay: 1.75,
                    }
                );

                gsap.set(navigationCenter, {
                    display: "none",
                });

                gsap.delayedCall(1.75, () => {
                    if (navigationCenter) {
                        navigationCenter.style.display = "flex";
                    }
                });

                const navItems = [
                    navigationBarCenterRef1.current,
                    navigationBarCenterRef2.current,
                    navigationBarCenterRef3.current,
                ];

                navItems.forEach((item, index) => {
                    if (!item) return;

                    gsap.to(item, {
                        opacity: 1,
                        duration: 1,
                        delay: 1.75 + index * 0.1,
                    });
                });
            });

            /*
             * MOBILE
             */
            mm.add("(max-width: 768px)", () => {
                gsap.set(navigation, {
                    width: "100%",
                    opacity: 1,
                    rotateY: 0,
                    rotateX: 0,
                    scale: 1,
                    y: 0,
                });

                gsap.set(navigationCenter, {
                    display: "none",
                });

                gsap.set(
                    [
                        navigationBarCenterRef1.current,
                        navigationBarCenterRef2.current,
                        navigationBarCenterRef3.current,
                    ],
                    {
                        opacity: 0,
                    }
                );
            });
        }, navigation);

        return () => {
            ctx.revert();
        };
    }, []);

    return (
        <>
            <div className="navigation-wrapper">
                <div
                    className="navigation-inside"
                    ref={navigationBar}
                >
                    <div className="navigation-inside-left">
                        <img
                            src="/logos/stackcraft.png"
                            className="navigation-inside-left-image"
                            alt=""
                        />
                    </div>

                    <div
                        className="navigation-inside-big"
                        ref={navigationBarCenter}
                    >
                        <Link
                            href="/"
                            className="small-description white hover-text-white opacity"
                            ref={navigationBarCenterRef1}
                        >
                            Home
                        </Link>

                        <Link
                            href="/about"
                            className="small-description white hover-text-white opacity"
                            ref={navigationBarCenterRef2}
                        >
                            About
                        </Link>

                        <Link
                            href="/works"
                            className="small-description white hover-text-white opacity"
                            ref={navigationBarCenterRef3}
                        >
                            Works
                        </Link>
                    </div>

                    <div className="navigation-inside-right">
                        <Link
                            href="/contact"
                            className="button button-navigation button-transparent-border"
                        >
                            <div className="button-content">
                                <span className="small-description">
                                    Get In Touch
                                </span>

                                <span className="small-description">
                                    Get In Touch
                                </span>
                            </div>

                            <div className="button-circle button-circle-white">
                                <ArrowUpRight className="button-icon" />
                            </div>
                        </Link>
                    </div>

                    <button
                        type="button"
                        className="navigation-inside-right-mobile"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <X className="navigation-mobile-close-icon" />
                        ) : (
                            <>
                                <div className="navigation-inside-right-mobile-line" />
                                <div className="navigation-inside-right-mobile-line" />
                                <div className="navigation-inside-right-mobile-line" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="navigation-mobile-menu">
                    <Link
                        href="/"
                        className="small-description white"
                        onClick={() => setMenuOpen(false)}
                    >
                        Home
                    </Link>

                    <Link
                        href="/about"
                        className="small-description white"
                        onClick={() => setMenuOpen(false)}
                    >
                        About
                    </Link>

                    <Link
                        href="/works"
                        className="small-description white"
                        onClick={() => setMenuOpen(false)}
                    >
                        Works
                    </Link>

                    <Link
                        href="/contact"
                        className="small-description white"
                        onClick={() => setMenuOpen(false)}
                    >
                        Get In Touch
                    </Link>
                </div>
            )}
        </>
    );
};