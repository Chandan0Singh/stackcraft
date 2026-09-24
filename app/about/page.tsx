import type { Metadata } from "next";

import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

export const metadata: Metadata = {
  title: "About StackCraft Studio | Digital Growth & Technology Studio",

  description:
    "Learn about StackCraft Studio, a digital growth and technology studio helping businesses build, automate, market, and optimize digital solutions based on their specific needs.",

  alternates: {
    canonical: "https://www.stackcraftstudio.com/about",
  },

  openGraph: {
    title: "About StackCraft Studio | Digital Growth & Technology Studio",

    description:
      "Discover how StackCraft Studio helps businesses with web development, AI solutions, digital marketing, research, and technology-driven strategies — individually or as a combination.",

    url: "https://www.stackcraftstudio.com/about",

    siteName: "StackCraft Studio",

    type: "website",
  },
};

const About = () => {
  return <AboutPageSection />;
};

export default About;