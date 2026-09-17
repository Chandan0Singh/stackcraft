import type { Metadata } from "next";

import "./about.css";
import { AboutPageSection } from "./AboutPageSection";

export const metadata: Metadata = {
  title: "About StackCraft Studio | Digital Product Studio",
  description:
    "Learn about StackCraft Studio, a digital product studio building high-performance websites, web applications, e-commerce platforms, and AI-powered digital products.",
  alternates: {
    canonical: "https://www.stackcraftstudio.com/about",
  },
  openGraph: {
    title: "About StackCraft Studio | Digital Product Studio",
    description:
      "Learn about StackCraft Studio and our approach to building websites, web applications, e-commerce platforms, and AI-powered digital products.",
    url: "https://www.stackcraftstudio.com/about",
    siteName: "StackCraft Studio",
    type: "website",
  },
};

const About = () => {
  return <AboutPageSection />;
};

export default About;