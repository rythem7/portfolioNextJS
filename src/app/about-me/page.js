'use client';
import BrokenCtxProvider from "@/context/brokenContext";

import Hero2 from "@/components/main-content/Hero2";

export default function AboutMePage() {
    return (
        <BrokenCtxProvider>
            <Hero2 />
        </BrokenCtxProvider>
    );
}
