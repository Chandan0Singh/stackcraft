import CookiePolicy from "./CookiePolicy";

export const metadata = {
  title: "Cookie Policy | StackCraft Studio",
  description:
    "Learn how StackCraft Studio uses cookies and similar technologies to improve website functionality, performance, and user experience.",
  alternates: {
    canonical: "https://www.stackcraftstudio.com/cookies",
  },
};

export default function Page() {
  return <CookiePolicy />;
}