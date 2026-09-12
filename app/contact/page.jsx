import "./contact.css";
import { ContactPageSection } from "./ContactPageSection";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "StackCraft Studio",
  url: "https://www.stackcraftstudio.com",
  logo: "https://www.stackcraftstudio.com/logos/stackcraft.png",
  description:
    "StackCraft Studio is a digital product studio building high-performance websites, web applications, e-commerce platforms, and AI-powered digital products.",
  email: "mailto:code.chandansingh@gmail.com",
  telephone: "+918860968260",
  sameAs: [
    "https://www.linkedin.com/in/chandan-singh-0b1b4a1b3/",
  ],
};

export const metadata = {
  title: "Contact StackCraft Studio | Web, E-Commerce & AI Solutions",

  description:
    "Contact StackCraft Studio to discuss website development, web applications, e-commerce platforms, AI solutions, and digital product development.",

  alternates: {
    canonical: "https://www.stackcraftstudio.com/contact",
  },

  openGraph: {
    title: "Contact StackCraft Studio | Web, E-Commerce & AI Solutions",
    description:
      "Talk to StackCraft Studio about your next website, web application, e-commerce platform, or AI-powered digital product.",
    url: "https://www.stackcraftstudio.com/contact",
    siteName: "StackCraft Studio",
    type: "website",
  },
};

const Contact = () => {

  return (
    <>
    <ContactPageSection />
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      </>
  );
};

export default Contact;