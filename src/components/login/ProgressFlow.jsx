'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import Checkpoint from "./Checkpoint";

export default function ProgressFlow({ steps }) {
    const pathRef = useRef(null);
    const dotRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);


        const path = pathRef.current;
        const dot = dotRef.current;

        const pathLength = path.getTotalLength(); // Optional: for dynamic path detection
        const scrollLength = pathLength; // Adjust based on path length

        // gsap.set(dot, {
        //     xPercent: -50,
        //     yPercent: -50, // centers the dot relative to its own size
        // });
        gsap.to(dot, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: `+=${scrollLength}`,
                scrub: true,
                ease: 'power1.out',
                // pin: true,
                // markers: true, // Enable for debugging
            },
            motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                // autoRotate: false,
            },
            ease: "none",
        });

        gsap.utils.toArray(".checkpoint").forEach((el, i) => {
            const topValue = parseInt(steps[i].top);
            gsap.to(el, {
                opacity: 1,
                x: 50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top+=${topValue - 450} top`,
                    end: `top+=${topValue - 300} top`,
                    toggleActions: "play none none reverse",
                },
                duration: 0.4,
                ease: "power4.out",
            });
        });
    }, []);

    return (
        <div ref={containerRef} className="relative h-[2200px] overflow-x-hidden w-full z-10">
            {/* SVG Path (starts below viewport) */}
            <svg
                viewBox="0 0 100 2200"
                className="absolute top-0 lg:left-1/2 left-1/6 -translate-x-1/2 max-w-[100px] z-10 h-full"
                id="pathSVG"
            >
                <path
                    ref={pathRef}
                    id="authPath"
                    d="M50,0 L50,1650"
                    fill="none"
                    stroke="#ccc"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-neutral-300/30"
                    // Optional: Add a dashed line effect
                    strokeDasharray="5,5"
                />
            </svg>

            {/* Fixed Glowing Dot in Center */}
            <div
                ref={dotRef}
                className="w-6 h-6 rounded-full bg-accent drop-shadow-lg drop-shadow-accent/30 will-change-transform absolute  lg:left-1/2 left-1/6 top-1/2 z-30"

            />
            {steps.map((checkpoint, i) => (
                <Checkpoint
                    key={i}
                    title={checkpoint.title}
                    description={checkpoint.description}
                    top={checkpoint.top}
                />
            ))}

        </div>
    );
}
