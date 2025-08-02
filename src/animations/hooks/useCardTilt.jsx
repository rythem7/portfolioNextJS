'use client';

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

/**
 * useCardTilt - React hook to add a 3D tilt effect to any card element on mouse hover.
 * @param {Object} options - Optional configuration for tilt effect.
 * @param {number} options.maxTilt - Maximum tilt in degrees (default: 15)
 * @param {number} options.duration - Animation duration in seconds (default: 0.5)
 * @returns {React.RefObject} - Ref to attach to the card element
 */
export function useCardTilt({ maxTilt = 15, duration = 0.5 } = {}) {
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -maxTilt;
            const rotateY = ((x - centerX) / centerX) * maxTilt;
            gsap.to(card, {
                duration,
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                ease: "power2.out",
            });
        };

        const handleMouseLeave = () => {
            gsap.to(card, {
                duration,
                rotationX: 0,
                rotationY: 0,
                transformPerspective: 1000,
                ease: "power2.out",
            });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [maxTilt, duration]);

    return cardRef;
}
