import type { Metadata } from "next";

import Terms from "./terms";

export const metadata: Metadata = {
title: "Terms of Service | StackCraft Studio",
description:
"Read the Terms of Service governing the use of the StackCraft Studio website and digital product services.",
alternates: {
canonical: "https://www.stackcraftstudio.com/terms",
},
};

export default function Page() {
return <Terms />;
}
