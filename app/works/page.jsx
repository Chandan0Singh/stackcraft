import "./works.css";
import { WorksPageSection } from "./WorksPageSection";

export const metadata = {
  title: 'Web Design & Development Portfolio | StackCraft Studio',
  description:
    'Explore StackCraft Studio’s portfolio of websites, web applications, e-commerce platforms, and digital products built for modern businesses.',
  alternates: {
    canonical: '/works',
  },
  openGraph: {
    title: 'Web Design & Development Portfolio | StackCraft Studio',
    description:
      'Explore StackCraft Studio’s portfolio of websites, web applications, e-commerce platforms, and digital products.',
    url: '/works',
    type: 'website',
  },
}

const Works = () => {

  return (
    <WorksPageSection />
  );
};

export default Works;