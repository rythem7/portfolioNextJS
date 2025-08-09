'use client';

// import { useContext } from "react";
// import { BrokenContext } from "@/context/brokenContext";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function useHeadingAnimation(headingRef, setIsAnimating) {
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onStart: () => {
                    setIsAnimating(true);
                },
                onComplete: () => {
                    setIsAnimating(false);
                }
            });

            tl.from(headingRef.current, {
                autoAlpha: 0,
                x: -100,
                duration: 1.5,
                ease: "power3.inOut",
            });
            // tl.to(spanRef.current, {
            //     rotateZ: 30,
            //     transformOrigin: "left bottom",
            //     ease: "elastic.out(1, 0.3)",
            //     duration: 1.2,
            // });
            // tl.from(dropRef.current, {
            //     autoAlpha: 0,
            //     y: -50,
            //     duration: 0.3,
            //     ease: "power3.out",
            // })
        }, headingRef);

        return () => ctx.revert();
    }, { scope: headingRef });
}

