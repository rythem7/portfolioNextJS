import electronicCircuit from "@/assets/electronicCircuitBoard.png";
import Image from "next/image";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function BrokenItem() {
    const containerRef = useRef(null);
    const imageRef = useRef(null);

    useGSAP(() => {
        // Helper to check if screen is large (Tailwind 'lg': min-width 1024px)
        const isLargeScreen = () => window.innerWidth >= 1024;

        const handleMouseMove = (e) => {
            if (!isLargeScreen()) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            gsap.to(imageRef.current, {
                x: -x * 0.15,
                y: -y * 0.15,
                duration: 0.5,
                ease: "power3.out"
            });
        };

        const handleMouseLeave = () => {
            gsap.to(imageRef.current, {
                x: 0,
                y: 0,
                duration: 0.7,
                ease: "power3.out"
            });
        };

        const container = containerRef.current;
        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        // Reset image position on resize if screen becomes small
        const handleResize = () => {
            if (!isLargeScreen()) {
                gsap.to(imageRef.current, {
                    x: 0,
                    y: 0,
                    duration: 0.3,
                    ease: "power3.out"
                });
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="glass opacity-60 bg-black h-[400px] p-6 rounded-lg z-20 translate-y-[40px] overflow-hidden relative flex items-center justify-center"
        >
            <div
                ref={imageRef}
                className="w-[600px] h-[600px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-center z-[10] brightness-60 hover:brightness-80"
            >
                <Image
                    src={electronicCircuit}
                    alt="Electronic Circuit"
                    className="w-auto h-full object-cover"
                />
            </div>
            <h1 className="text-2xl font-bold z-20">Under Construction!</h1>
        </div>
    );
}