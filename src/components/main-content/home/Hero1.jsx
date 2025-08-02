import mainImg from "@/assets/20250318_212221.png";
import Image from "next/image";
import Input from "@/ui/input";

export default function Hero1() {
    return (
        <div className="hero min-h-screen text-neutral-content overflow-y-visible relative">
            {/* <div className="hero-overlay "> */}
            <div data-speed="0.5" className="absolute md:left-auto md:right-[1rem] top-10 bg-transparent min-w-2xl pointer-events-none z-50">
                <Image src={mainImg} alt="main image" className='brightness-60 contrast-150 bg-transparent mask-gradient-bottom' priority />
            </div>
            {/* </div> */}

            <div className="hero-content min-h-screen justify-start lg:items-center items-end lg:w-[75vw] p-10 text-neutral-content mix-blend-screen">
                <div data-speed="0.8" className="max-w-3xl w-[90%]">
                    <h1 className="mb-5 text-2xl lg:text-7xl font-bold select-none">
                        Rythem <span className="text-accent">Dhamija</span>
                    </h1>
                    <p className="mb-5 max-w-md">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <Input placeholder="Your email" type="email" required={true} />
                </div>
            </div>
        </div>
    );
}