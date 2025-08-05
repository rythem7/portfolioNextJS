'use client';
import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function GridItem({ children, className = "" }) {
    const cardRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useGSAP(() => {
        const card = cardRef.current;
        if (!card) return;

        // Function to check if screen is large or extra large (Tailwind: lg = 1024px)
        const isLargeScreen = () => window.innerWidth >= 1024;

        let listenersActive = false;

        const handleMouseMove = (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
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

        const handleMouseLeave = () => {
            gsap.to(card, {
                duration: 0.5,
                rotationX: 0,
                rotationY: 0,
                transformPerspective: 1000,
                ease: "power2.out"
            });
        };

        // Add listeners if large screen
        const addListeners = () => {
            if (!listenersActive && isLargeScreen()) {
                card.addEventListener("mousemove", handleMouseMove);
                card.addEventListener("mouseleave", handleMouseLeave);
                listenersActive = true;
            }
        };

        // Remove listeners
        const removeListeners = () => {
            if (listenersActive) {
                card.removeEventListener("mousemove", handleMouseMove);
                card.removeEventListener("mouseleave", handleMouseLeave);
                listenersActive = false;
            }
        };

        // Handle resize
        const handleResize = () => {
            if (isLargeScreen()) {
                addListeners();
            } else {
                removeListeners();
            }
        };

        // Initial check
        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            removeListeners();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Set isMobile state to avoid hydration mismatch
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const cardClass = `bg-neutral-800 h-[400px] p-6 rounded-lg fade-in-init transform-gpu transition-shadow duration-300
        ${className}
        ${isMobile
            ? "shadow-2xl shadow-accent/40 ring-2 ring-accent/15"
            : "hover:shadow-2xl hover:shadow-accent/40 hover:ring-2 hover:ring-accent/15"
        }
    `;

    return (
        <div ref={cardRef} className={cardClass}>
            {children}
            <div className="h-[400px]"></div>
        </div>
    );
}