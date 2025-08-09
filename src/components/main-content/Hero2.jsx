'use client';

import secImg from "@/assets/20250515_141026.png";
import waterDrop from "@/assets/water-drop.svg";
import Image from "next/image";
import { useHeadingAnimation } from "@/animations/mainHeading";
import { useRef, useState, useEffect } from "react";
import gsap from 'gsap';
// import { BrokenContext } from "@/context/brokenContext";


function Hero2() {
    const [broken, setBroken] = useState(false);
    const started = useRef(false);
    const spanRef = useRef(null);
    const headingRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);
    const dropRef = useRef(null);
    useHeadingAnimation(headingRef, setIsAnimating);

    const animateFix = async () => {
        await gsap.to(spanRef.current, {
            rotateZ: 0,
            duration: 0.3,
            ease: "power2.out"
        });

        await gsap.to(dropRef.current, {
            autoAlpha: 0,
            duration: 0.1,
            ease: "power3.out",
        });
        setIsAnimating(false);
        setBroken(false);
    };

    useEffect(() => {
        let timeout;

        if (started.current && !broken) {
            timeout = setTimeout(() => {
                animateBreak();
            }, 2000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        }

    }, [broken]);

    const animateBreak = async () => {
        await gsap.to(spanRef.current, {
            rotateZ: 30,
            transformOrigin: "left bottom",
            ease: "elastic.out(1, 0.3)",
            duration: 1,
        });

        await gsap.fromTo(dropRef.current,
            { autoAlpha: 0, y: -50 },
            { autoAlpha: 1, y: 0, duration: 0.5, ease: "power3.out" }
        );
        setIsAnimating(false);
        setBroken(true);
    };

    async function handleClick() {
        if (isAnimating) return;
        if (!started.current) {
            started.current = true;
            setIsAnimating(true);
        }

        if (broken) {
            await animateFix();
        } else {
            await animateBreak();
        }

    }


    return (
        <>
            <div className="hero bg-neutral-850 min-h-screen">
                <div className="hero-content lg:justify-between flex-col lg:flex-row lg:w-[60vw] bg-transparent lg:p-0">
                    <div className="relative max-w-md ">
                        <Image
                            src={secImg}
                            alt="second image"
                            className="brightness-60 contrast-120 drop-shadow-2xl rounded-box"
                            priority
                        />
                        <div ref={dropRef} style={{ visibility: "hidden" }} className="absolute top-1/3 right-1/3">
                            <Image
                                src={waterDrop}
                                alt="second image"
                                className="w-[3rem] brightness-60 contrast-115 drop-shadow-2xl rounded-box relative opacity-70"
                            />
                        </div>
                    </div>

                    <div className='max-w-xl lg:pr-20'>
                        <h1 className={`text-7xl font-bold select-none will-change-auto`} style={{ visibility: "hidden" }} ref={headingRef}>
                            About <button className='bg-transparent text-accent cursor-pointer inline-block' ref={spanRef} onClick={handleClick} disabled={isAnimating}>Me</button>
                        </h1>
                        <h3 className='text-2xl my-6'>Developer <span className='text-accent/95'>& Designer</span></h3>
                        <p className="pb-8">
                            Hi! I&apos;m Rythem — a web developer who turns ideas into fast, responsive apps using React, Tailwind CSS, and GSAP. I also build full stack features with Node.js and PostgreSQL. Whether you need a sleek landing page, custom animation, or full web app, I&apos;ve got you covered.
                        </p>
                        <button className="btn btn-accent rounded-box">Get Started</button>
                    </div>
                </div>
            </div>
            {/* <section className="h-[80vh] bg-gradient-to-b from-neutral-850 to-[#1e1e1e]" />
            <section className="h-[100vh] bg-[#1e1e1e]"></section> */}
        </>
    )
}

export default Hero2;