'use client';
import Hero2 from "@/components/main-content/Hero2";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function AboutMePage() {
    const containerRef = useRef(null);

    useGSAP(() => {
        const particles = gsap.utils.toArray(".particle");

        particles.forEach((p) => {
            // Random start position
            const depth = gsap.utils.random(0.2, 1); // 0.2 = far, 1 = close
            p.dataset.depth = depth;
            gsap.set(p, {
                x: gsap.utils.random(0, window.innerWidth),
                y: gsap.utils.random(0, window.innerHeight),
                opacity: gsap.utils.random(0.5, 0.8),
                scale: gsap.utils.random(0.5, 1.5) * depth
            });
            gsap.to(p, {
                x: `+=${gsap.utils.random(-100, 100)}`,
                y: `+=${gsap.utils.random(-100, 100)}`,
                duration: gsap.utils.random(7, 15),
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        });

        // // const handleMouseMove = (e) => {
        // //     const x = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        // //     const y = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        // //     particles.forEach((p) => {
        // //         const depth = parseFloat(p.dataset.depth);
        // //         gsap.to(p, {
        // //             x: `+=${x * depth * 15}`,
        // //             y: `+=${y * depth * 15}`,
        // //             duration: 0.5,
        // //             ease: "power4",
        // //         });
        // //     });
        // // };

        // // 📱 Tilt-based parallax
        // const handleTilt = (event) => {
        //     const tiltX = event.gamma / 45; // left/right tilt (-1 to 1)
        //     const tiltY = event.beta / 45;  // forward/back tilt (-1 to 1)

        //     particles.forEach((p) => {
        //         const depth = parseFloat(p.dataset.depth);
        //         gsap.to(p, {
        //             x: `+=${tiltX * depth * 20}`,
        //             y: `+=${tiltY * depth * 20}`,
        //             duration: 0.5,
        //             ease: "sine.out"
        //         });
        //     });
        // };

        // // iOS 13+ needs permission request
        // const enableTilt = () => {
        //     if (typeof DeviceOrientationEvent !== "undefined" &&
        //         typeof DeviceOrientationEvent.requestPermission === "function") {
        //         DeviceOrientationEvent.requestPermission()
        //             .then((response) => {
        //                 if (response === "granted") {
        //                     window.addEventListener("deviceorientation", handleTilt);
        //                 }
        //             })
        //             .catch(console.error);
        //     } else {
        //         // Android & older iOS
        //         window.addEventListener("deviceorientation", handleTilt);
        //     }
        // };

        // // Show prompt for iOS
        // const clickHandler = () => {
        //     enableTilt();
        //     window.removeEventListener("click", clickHandler);
        // };
        // window.addEventListener("click", clickHandler);

        // return () => {
        //     window.removeEventListener("deviceorientation", handleTilt);
        //     window.removeEventListener("click", clickHandler);
        // };
    }, []);
    return (
        <div className="min-h-screen w-full flex flex-col items-center px-4 relative overflow-hidden">
            <div className="z-10">
                <Hero2 />
            </div>
            {/* <section className="fixed bottom-0 right-0">
                <button onCl>
                    Toggle Particles
                </button>
            </section> */}
            <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                {Array.from({ length: 30 }).map((_, i) => (
                    <section
                        key={i}
                        className="particle absolute w-2 h-2 rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)"
                        }}
                    ></section>
                ))}
            </div>
        </div>
    );
}

// Animate drift
// gsap.to(p, {
//     x: "+=" + gsap.utils.random(-100, 100),
//     y: "+=" + gsap.utils.random(-100, 100),
//     duration: gsap.utils.random(8, 15),
//     repeat: -1,
//     yoyo: true,
//     ease: "sine.inOut"
// });