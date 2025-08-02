'use client';
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function GridItem({ children, className = "" }) {
    const cardRef = useRef(null);

    useGSAP(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            // Calculate rotation values (-15 to 15 degrees)
            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            gsap.to(card, {
                duration: 0.5,
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                ease: "power2.out"
            });
        };

        card.addEventListener("mousemove", handleMouseMove);

        const handleMouseLeave = () => {
            gsap.to(card, {
                duration: 0.5,
                rotationX: 0,
                rotationY: 0,
                transformPerspective: 1000,
                ease: "power2.out"
            });
        };

        card.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            card.removeEventListener("mousemove", handleMouseMove);
            card.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`bg-neutral-800 h-[400px] p-6 rounded-lg fade-in-init transform-gpu hover:shadow-2xl hover:shadow-accent/40 hover:ring-2 hover:ring-accent/15 transition-shadow duration-300 ${className}`}
        >
            {children}
            <div className="h-[400px]"></div>
        </div>
    );
}