'use client';
import { useRef } from "react";
// import { useFadeInFromY } from "@/animations/hooks/useFadeInFromY";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Section3() {
    const ref = useRef(null);
    // useFadeInFromY(ref, 0.3, 0.9, 40, "back.out(2.5)", 0, {
    //     start: "top bottom",
    //     end: "bottom top",
    //     scrub: false,
    //     // markers: true,
    //     toggleActions: "restart none none none",
    // }); // targets selector for direct children
    // useGSAP(() => {
    //     if (ref.current) {
    //         gsap.from(ref.current, {
    //             autoAlpha: 0,
    //             y: 40,
    //             duration: 0.9,
    //             ease: "back.out(2.5)",
    //             delay: 0.3,
    //             scrollTrigger: {
    //                 trigger: ref.current,
    //                 start: "top bottom",
    //                 end: "bottom top",
    //                 scrub: false,
    //                 // markers: true,
    //                 toggleActions: "restart none none none",
    //             },
    //         });
    //     }
    // }, [ref]);


    return (
        <div ref={ref} data-speed="1.3" className="bg-neutral-800 w-screen min-h-[110vh] flex items-center justify-center overflow-y-visible rounded-t-[4rem] z-20 mt-[-20rem] pt-[2rem]">
            <h1 className="text-4xl text-white">Section 3</h1>
        </div>
    );
}