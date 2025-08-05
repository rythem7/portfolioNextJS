import LoginForm from "@/ui/loginForm";
import ProgressFlow from "@/components/login/ProgressFlow";
import authSteps from "@/components/login/authSteps";

export default function LoginFormPage() {
    return (
        <div className="min-h-screen w-[95vw] flex flex-col items-center mx-auto bg-neutral-850">
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