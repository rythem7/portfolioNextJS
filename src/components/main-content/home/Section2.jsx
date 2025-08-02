'use client';
import { useRef } from "react";
import { useFadeInFromY } from "@/animations/hooks/useFadeInFromY";
import GridItem from "./GridItem";
import BrokenItem from "./BrokenItem";

function Section2() {
    const ref = useRef(null);
    useFadeInFromY(ref, 0.3, 0.7, 40, "back.out(2.5)", 0.1, {
        start: "top bottom",
        end: "bottom top",
        scrub: false,
        // markers: true,
        // toggleActions: "restart none none none",
    }, ":scope > div"); // targets selector for direct children

    return (
        <div className="bg-neutral-900 w-screen min-h-[110vh]  pt-[10rem] pb-[35rem] mix-blend-overlay">
            <div data-speed="0.9" className="container z-20 mx-auto min-h-[110vh] lg:max-w-[80rem] lg:pt-[15rem] text-center text-white">
                <h1 className="text-4xl">Section 2</h1>
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-4 mt-auto will-change-transform">
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <GridItem />
                    <BrokenItem />
                    {/* <GridItem />
                    <GridItem /> */}
                </div>
            </div>
        </div>
    )
}

export default Section2;
