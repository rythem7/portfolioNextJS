'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

// Version 1: Accept ref from parent (when you need the ref for other purposes)
export function useFadeInFromY(
    ref,
    delay = 0.3,
    duration = 0.9,
    y = 40,
    ease = "back.out(2.5)",
    stagger = 0,
    scrollTrigger = null,
    targets = null // NEW: selector for children
) {
    useGSAP(() => {
        if (ref.current) {
            gsap.from(
                targets ? ref.current.querySelectorAll(targets) : ref.current,
                {
                    autoAlpha: 0,
                    y,
                    duration,
                    ease,
                    delay,
                    stagger,
                    scrollTrigger: scrollTrigger
                        ? { trigger: ref.current, ...scrollTrigger }
                        : undefined,
                }
            );
        }
    }, [ref, delay, duration, y, ease, stagger, scrollTrigger, targets]);
}

// Version 2: Create and return ref (simpler API)
export function useFadeInFromYRef(
    delay = 0.3,
    duration = 0.9,
    y = 40,
    ease = "back.out(2.5)",
    stagger = 0
) {
    const ref = useRef(null);

    useGSAP(() => {
        if (ref.current) {
            gsap.from(ref.current, {
                autoAlpha: 0,
                y,
                duration,
                ease,
                delay,
                stagger,
            });
        }
    }, [delay, duration, y, ease, stagger]);

    return ref;
}
