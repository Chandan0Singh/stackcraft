"use client";

import { ReactLenis} from "lenis/react";
import { SectionHero } from "./SectionHero";
import { SectionShowreel } from "./SectionShowreel";
import { SectionTestimonials } from "./SectionTestimonials";
import { SectionTechstack } from "./SectionTechstack";
import { SectionFlower } from "./SectionFlower";
import { SectionServices } from "./SectionServices";
import { SectionProjects } from "./SectionProjects";
import { SectionProjectsMobile } from "./SectionProjectsMobile";
import { SectionKPI } from "./SectionKPI";

import "./main.css";

const Main = () => {

return (
    <ReactLenis root>
        <SectionHero />

        <div className="normal-padding" />

        <SectionShowreel />

        <div className="border-padding">
            <div className="section-border" />
        </div>

        <SectionServices />

        <div className="normal-padding" />

        <SectionProjects />
        <SectionProjectsMobile />

        <div className="normal-padding" />

        <SectionTechstack />

        <div className="normal-padding" />

        <SectionTestimonials />

        <div className="normal-padding" />

        <SectionKPI />

        <div className="normal-padding" />

        <SectionFlower />

        <div className="normal-padding" />
    </ReactLenis>
);

};

export default Main;
