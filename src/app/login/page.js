import LoginForm from "@/ui/loginForm";
import AuthMotionPath from "@/components/login/AuthFlow";

export default function LoginFormPage() {
    return (
        <div className="min-h-screen w-screen overflow-hidden bg-neutral-850">
            {/* <h1 className="text-4xl">Projects</h1> */}
            {/* <LoginForm /> */}
            {/* <div className="h-[2000px]"> */}
            <div className="h-screen flex items-center justify-center">
                <LoginForm />
            </div>
            <AuthMotionPath />
            {/* </div> */}
            {/* <p className="text-lg">Here are some of my recent projects.</p> */}
        </div>
    );
}