'use client';

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// ScrollSmoother requires ScrollTrigger
import { ScrollSmoother } from "gsap/ScrollSmoother";
import authSteps from "./authSteps";
import Checkpoint from "./Checkpoint";

export default function AuthMotionPath() {
    const pathRef = useRef(null);
    const dotRef = useRef(null);
    const containerRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(MotionPathPlugin, ScrollTrigger, ScrollSmoother);


        const path = pathRef.current;
        const dot = dotRef.current;

        const pathLength = path.getTotalLength(); // Optional: for dynamic path detection
        const scrollLength = pathLength; // Adjust based on path length

        gsap.to(dot, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                end: `+=${scrollLength}`,
                scrub: true,
                ease: 'power1.inOut',
                // markers: true, // Enable for debugging
            },
            motionPath: {
                path: path,
                align: path,
                alignOrigin: [0.5, 0.5],
                autoRotate: false,
            },
            ease: "none",
        });

        gsap.utils.toArray(".checkpoint").forEach((el, i) => {
            const topValue = parseInt(authSteps[i].top);
            gsap.to(el, {
                opacity: 1,
                x: 50,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: `top+=${topValue - 550} top`,
                    end: `top+=${topValue - 300} top`,
                    toggleActions: "play none none reverse",
                },
                duration: 0.5,
                ease: "power2.out",
            });
        });
    }, []);

    return (
        <div ref={containerRef} className="relative h-[2200px] w-full z-0">
            {/* SVG Path (starts below viewport) */}
            <svg
                viewBox="0 0 200 2200"
                className="absolute top-0 lg:left-1/2 left-1/8 -translate-x-1/2 w-[200px] z-10 h-full"
                id="pathSVG"
            >
                <path
                    ref={pathRef}
                    id="authPath"
                    d="M100,0 L100,1650"
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
                className="w-6 h-6 rounded-full bg-accent drop-shadow-lg drop-shadow-accent/50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            />
            {authSteps.map((checkpoint, i) => (
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
