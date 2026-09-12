import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

const siteUrl = "https://www.stackcraftstudio.com";

export const metadata = {
  title: "Web Design & Development Portfolio | StackCraft Studio",
  description:
    "Explore StackCraft Studio’s portfolio of websites, web applications, e-commerce platforms, and digital products built for modern businesses.",
  alternates: {
    canonical: `${siteUrl}/works`,
  },
  openGraph: {
    title: "Web Design & Development Portfolio | StackCraft Studio",
    description:
      "Explore StackCraft Studio’s portfolio of websites, web applications, e-commerce platforms, and digital products.",
    url: `${siteUrl}/works`,
    siteName: "StackCraft Studio",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/works.jpg`,
        width: 1200,
        height: 630,
        alt: "StackCraft Studio web design and development portfolio",
      },
    ],
  },
};

const Works = () => {

  return (
    <WorksPageSection />
  );
};

export default Works;