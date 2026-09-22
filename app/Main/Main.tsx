"use client";

import dynamic from "next/dynamic";
import { ReactLenis } from "lenis/react";

import { SectionHero } from "./SectionHero";
import { LazySection } from "./LazySection";

import "./main.css";

/* =========================================================
   DYNAMIC SECTIONS
   ========================================================= */

const SectionShowreel = dynamic(
  () =>
    import("./SectionShowreel").then(
      (mod) => mod.SectionShowreel
    ),
  {
    loading: () => null,
  }
);

const SectionServices = dynamic(
  () =>
    import("./SectionServices").then(
      (mod) => mod.SectionServices
    ),
  {
    loading: () => null,
  }
);

const SectionProjects = dynamic(
  () =>
    import("./SectionProjects").then(
      (mod) => mod.SectionProjects
    ),
  {
    loading: () => null,
  }
);

const SectionProjectsMobile = dynamic(
  () =>
    import("./SectionProjectsMobile").then(
      (mod) => mod.SectionProjectsMobile
    ),
  {
    loading: () => null,
  }
);

const SectionTechstack = dynamic(
  () =>
    import("./SectionTechstack").then(
      (mod) => mod.SectionTechstack
    ),
  {
    loading: () => null,
  }
);

const SectionTestimonials = dynamic(
  () =>
    import("./SectionTestimonials").then(
      (mod) => mod.SectionTestimonials
    ),
  {
    loading: () => null,
  }
);

const SectionKPI = dynamic(
  () =>
    import("./SectionKPI").then(
      (mod) => mod.SectionKPI
    ),
  {
    loading: () => null,
  }
);

// const SectionFlower = dynamic(
//   () =>
//     import("./SectionFlower").then(
//       (mod) => mod.SectionFlower
//     ),
//   {
//     ssr: false,
//     loading: () => null,
//   }
// );

/* =========================================================
   MAIN
   ========================================================= */

const Main = () => {
  return (
    <ReactLenis root>

      {/* =================================================
          HERO — LOAD IMMEDIATELY
          ================================================= */}

      <SectionHero />


      {/* =================================================
          SHOWREEL
          Starts loading when user gets ~700px away
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionShowreel />
      </LazySection>


      {/* =================================================
          BORDER
          ================================================= */}

      <div className="border-padding">
        <div className="section-border" />
      </div>


      {/* =================================================
          SERVICES
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionServices />
      </LazySection>


      <div className="normal-padding" />


      {/* =================================================
          PROJECTS
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionProjects />
      </LazySection>


      {/* =================================================
          PROJECTS MOBILE
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionProjectsMobile />
      </LazySection>


      <div className="normal-padding" />


      {/* =================================================
          TECH STACK
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionTechstack />
      </LazySection>


      <div className="normal-padding" />


      {/* =================================================
          TESTIMONIALS
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionTestimonials />
      </LazySection>


      <div className="normal-padding" />


      {/* =================================================
          KPI
          ================================================= */}

      <LazySection rootMargin="700px">
        <SectionKPI />
      </LazySection>


      <div className="normal-padding" />


      {/* =================================================
          FLOWER / THREE.JS
          ================================================= */}

      {/* <LazySection rootMargin="1000px">
        <SectionFlower />
      </LazySection> */}


      <div className="normal-padding" />

    </ReactLenis>
  );
};

export default Main;