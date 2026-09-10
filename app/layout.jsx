import "./globals.css";
import FloatingContact from "../components/floatingicons";
import { Navigation } from "../components/Navigation";
import { SectionFooter } from "../components/SectionFooter";

export const metadata = {
  title: "StackCraft | Cutting-Edge Website Design & Custom Digital Solutions",
  description:
    "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
  keywords: [
    "website design",
    "UX/UI design",
    "web development",
    "full-stack development",
    "custom websites",
    "digital solutions",
    "social media management",
    "motion graphics",
    "3D motion graphics",
    "3D video production",
    "3D modeling",
    "interactive design",
    "creative digital agency",
    "multimedia design",
    "3D rendering services",
    "website redesign",
    "branding and design",
    "responsive web design",
    "animation services",
    "digital marketing solutions",
    "advanced video production",
    "digital media strategy",
  ],
  openGraph: {
    title:
      "StackCraft | Cutting-Edge Website Design & Custom Digital Solutions",
    description:
      "Harnessing Cutting-Edge Visualization Technology to Transform Vision into Tailored Digital Reality.",
    images: ["/logos/stackcraft.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children} <SectionFooter /> <FloatingContact />
      </body>
    </html>
  );
}
