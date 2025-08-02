'use client';

import { useRef } from "react";
import Hero1 from "@/components/main-content/home/Hero1";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
// import Footer from "@/components/footer";
import Section2 from "@/components/main-content/home/Section2";
import Section3 from "@/components/main-content/home/Section3";


gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

export default function Home() {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);
    useGSAP(() => {
        let smoother = ScrollSmoother.create({
            smooth: 0.7,
            effects: true,
            smoothTouch: 0.3,
        });
        return () => {
            smoother.kill();
        };
    }, []);

    return (
        <div id="smooth-wrapper" ref={wrapperRef} className="h-screen w-full">
            <div id="smooth-content" ref={contentRef}>
                <Hero1 />
                <div className="h-[50vh] lg:h-[30vh] bg-gradient-to-b from-neutral-950 to-neutral-900">
                </div>
                <Section2 />
                <Section3 />
                {/* <Footer /> */}
            </div>
        </div>
    );
}
