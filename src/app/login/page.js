'use client';

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LoginForm from "@/ui/loginForm";
import ProgressFlow from "@/components/login/ProgressFlow";
import authSteps from "@/components/login/authSteps";

export default function LoginFormPage() {

    useGSAP(() => {
        gsap.to(":root", {
            "--c1": "#171717",  // keep base dark
            "--c2": "#203a43",  // deep teal
            "--c3": "#0f2027",
            "--c4": "#0d1b2a",
            duration: 15,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    }, []);
    return (
        <div id="gradient-bg" className="min-h-screen w-full flex flex-col items-center mx-auto">
            {/* <h1 className="text-4xl">Projects</h1> */}
            {/* <LoginForm /> */}
            {/* <div className="h-[2000px]"> */}
            <div className="h-screen w-full flex items-center justify-center">
                <LoginForm />
            </div>
            <ProgressFlow steps={authSteps} />
            {/* </div> */}
            {/* <p className="text-lg">Here are some of my recent projects.</p> */}
        </div>
    );
}