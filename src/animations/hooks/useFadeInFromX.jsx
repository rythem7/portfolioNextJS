import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

// Version 1: Accept ref from parent (when you need the ref for other purposes)
export function useFadeInFromX(
    ref,
    delay = 0.3,
    duration = 0.9,
    x = -40,
    ease = "back.out(2.5)",
    stagger = 0
) {
    useGSAP(() => {
        if (ref.current) {
            gsap.from(ref.current, {
                autoAlpha: 0,
                x,
                duration,
                ease,
                delay,
                stagger,
            });
        }
    }, [ref, delay, duration, x, ease, stagger]);
}

// Version 2: Create and return ref (simpler API)
export function useFadeInFromXRef(
    delay = 0.3,
    duration = 0.9,
    x = -40,
    ease = "back.out(2.5)",
    stagger = 0
) {
    const ref = useRef(null);

    useGSAP(() => {
        if (ref.current) {
            gsap.from(ref.current, {
                autoAlpha: 0,
                x,
                duration,
                ease,
                delay,
                stagger,
            });
        }
    }, [delay, duration, x, ease, stagger]);

    return ref;
}