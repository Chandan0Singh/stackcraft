import type { Metadata } from "next";

import PrivacyPolicy from "./PrivacyPolicy";

export const metadata: Metadata = {
title: "Privacy Policy | StackCraft Studio",
description:
"Read the Privacy Policy explaining how StackCraft Studio collects, uses, and protects personal information.",
alternates: {
canonical: "https://www.stackcraftstudio.com/privacy-policy",
},
};

export default function Page() {
return <PrivacyPolicy />;
}
