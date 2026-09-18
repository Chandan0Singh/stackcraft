"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, X } from "lucide-react";
import { useEffect, useState } from "react";

const blogItems = [
  {
    title: "AI Agent vs AI Chatbot...",
    href: "/blog/ai-agent-vs-ai-chatbot-what-should-your-business-build-in-2026",
  },
  {
    title: "Digital Marketing Cost in India...",
    href: "/blog/how-much-does-digital-marketing-cost-in-india-in-2026",
  },
  {
    title: "Web App Development Cost...",
    href: "/blog/how-much-does-it-cost-to-build-a-web-app-in-india-in-2026",
  },
  {
    title: "AI SaaS App Development Cost...",
    href: "/blog/how-much-does-it-cost-to-build-an-ai-saas-app-in-2026",
  },
  {
    title: "How to Build an AI Web App...",
    href: "/blog/how-to-build-an-ai-web-app-in-2026",
  },
];

const caseStudyItems = [
  {
    title: "Amazdraw",
    href: "/case-studies/amazdraw",
  },
  {
    title: "IS Properties",
    href: "/case-studies/is-properties",
  },
  {
    title: "Odhira Boutique",
    href: "/case-studies/odhira-boutique",
  },
  {
    title: "TourTrek",
    href: "/case-studies/tourtrek",
  },
];

const navigationItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Works",
    href: "/works",
  },
];

export const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  /*
   * Lock page scrolling while mobile navigation is open.
   */
  useEffect(() => {
    if (!menuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /*
   * Escape closes mobile navigation.
   */
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setMobileDropdown(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  const closeMobileMenu = () => {
    setMenuOpen(false);
    setMobileDropdown(null);
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdown((current) =>
      current === menu ? null : menu,
    );
  };

  const toggleMenu = () => {
    setMenuOpen((current) => !current);
    setMobileDropdown(null);
  };

  useEffect(() => {
  if (!menuOpen) return;

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (
      !target.closest(".navigation-mobile") &&
      !target.closest(".navigation-mobile-toggle")
    ) {
      closeMobileMenu();
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [menuOpen]);

  return (
    <header className="navigation-wrapper">
      <nav
        className="navigation-inside"
        aria-label="Main navigation"
      >
        {/* =====================================================
            LOGO
            ===================================================== */}

        <Link
          href="/"
          className="navigation-logo-link"
          aria-label="StackCraft Studio home"
        >
          <Image
            src="/logos/stackcraft.png"
            className="navigation-logo-image"
            alt="StackCraft Studio"
            width={64}
            height={64}
            priority
            sizes="64px"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
            ===================================================== */}

        <div className="navigation-desktop">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navigation-link"
            >
              {item.title}
            </Link>
          ))}

          {/* =================================================
              BLOG DROPDOWN
              ================================================= */}

          <div className="navigation-dropdown">
            <Link
              href="/blog"
              className="navigation-link navigation-dropdown-trigger"
              aria-haspopup="true"
            >
              <span>Blog</span>

              <ChevronDown
                className="navigation-dropdown-icon"
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <div className="navigation-dropdown-menu">
              <div className="navigation-dropdown-panel">
                <Link
                  href="/blog"
                  className="navigation-dropdown-heading"
                >
                  <span>All Articles</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>

                <div className="navigation-dropdown-items">
                  {blogItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="navigation-dropdown-item"
                    >
                      <span>{item.title}</span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              CASE STUDIES DROPDOWN
              ================================================= */}

          <div className="navigation-dropdown">
            <Link
              href="/case-studies"
              className="navigation-link navigation-dropdown-trigger"
              aria-haspopup="true"
            >
              <span>Case Studies</span>

              <ChevronDown
                className="navigation-dropdown-icon"
                size={14}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </Link>

            <div className="navigation-dropdown-menu">
              <div className="navigation-dropdown-panel">
                <Link
                  href="/case-studies"
                  className="navigation-dropdown-heading"
                >
                  <span>All Case Studies</span>

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.8}
                    aria-hidden="true"
                  />
                </Link>

                <div className="navigation-dropdown-items">
                  {caseStudyItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="navigation-dropdown-item"
                    >
                      <span>{item.title}</span>

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP CTA
            ===================================================== */}

        <Link
          href="/contact"
          className="navigation-cta"
        >
          <span>Get In Touch</span>

          <span className="navigation-cta-icon">
            <ArrowUpRight
              size={16}
              strokeWidth={1.8}
              aria-hidden="true"
            />
          </span>
        </Link>

        {/* =====================================================
            MOBILE BUTTON
            ===================================================== */}

        <button
          type="button"
          className="navigation-mobile-toggle"
          onClick={toggleMenu}
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X
              size={24}
              strokeWidth={1.7}
              aria-hidden="true"
            />
          ) : (
            <span className="navigation-hamburger">
              <span />
              <span />
              <span />
            </span>
          )}
        </button>
      </nav>

      {/* =======================================================
          MOBILE NAVIGATION
          ======================================================= */}

      <div
        id="mobile-navigation"
        className={`navigation-mobile ${
          menuOpen ? "is-open" : ""
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="navigation-mobile-inner">
          {/* HOME / ABOUT / WORKS */}

          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="navigation-mobile-link"
              onClick={closeMobileMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.title}
            </Link>
          ))}

          {/* =================================================
              MOBILE BLOG
              ================================================= */}

          <div className="navigation-mobile-group">
            <div className="navigation-mobile-row">
              <Link
                href="/blog"
                className="navigation-mobile-link"
                onClick={closeMobileMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Blog
              </Link>

              <button
                type="button"
                className="navigation-mobile-dropdown-toggle"
                onClick={() => toggleMobileDropdown("blog")}
                aria-label="Toggle Blog articles"
                aria-expanded={mobileDropdown === "blog"}
              >
                <ChevronDown
                  size={19}
                  strokeWidth={1.8}
                  className={
                    mobileDropdown === "blog"
                      ? "is-rotated"
                      : ""
                  }
                  aria-hidden="true"
                />
              </button>
            </div>

            {mobileDropdown === "blog" && (
              <div className="navigation-mobile-submenu">
                <Link
                  href="/blog"
                  className="navigation-mobile-submenu-link navigation-mobile-submenu-all"
                  onClick={closeMobileMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  All Articles
                </Link>

                {blogItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="navigation-mobile-submenu-link"
                    onClick={closeMobileMenu}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE CASE STUDIES
              ================================================= */}

          <div className="navigation-mobile-group">
            <div className="navigation-mobile-row">
              <Link
                href="/case-studies"
                className="navigation-mobile-link"
                onClick={closeMobileMenu}
                tabIndex={menuOpen ? 0 : -1}
              >
                Case Studies
              </Link>

              <button
                type="button"
                className="navigation-mobile-dropdown-toggle"
                onClick={() =>
                  toggleMobileDropdown("case-studies")
                }
                aria-label="Toggle case studies"
                aria-expanded={
                  mobileDropdown === "case-studies"
                }
              >
                <ChevronDown
                  size={19}
                  strokeWidth={1.8}
                  className={
                    mobileDropdown === "case-studies"
                      ? "is-rotated"
                      : ""
                  }
                  aria-hidden="true"
                />
              </button>
            </div>

            {mobileDropdown === "case-studies" && (
              <div className="navigation-mobile-submenu">
                <Link
                  href="/case-studies"
                  className="navigation-mobile-submenu-link navigation-mobile-submenu-all"
                  onClick={closeMobileMenu}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  All Case Studies
                </Link>

                {caseStudyItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="navigation-mobile-submenu-link"
                    onClick={closeMobileMenu}
                    tabIndex={menuOpen ? 0 : -1}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* =================================================
              MOBILE CONTACT
              ================================================= */}

          <Link
            href="/contact"
            className="navigation-mobile-contact"
            onClick={closeMobileMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            <span>Get In Touch</span>

            <span className="navigation-mobile-contact-icon">
              <ArrowUpRight
                size={17}
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};