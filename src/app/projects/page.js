import LoginForm from "@/ui/loginForm";

export default function ProjectsPage() {
    return (
        <div className="flex w-full flex-col min-h-screen items-center justify-center gap-4 p-4">
            {/* <h1 className="text-4xl">Projects</h1> */}
            <LoginForm />
            {/* <p className="text-lg">Here are some of my recent projects.</p> */}
        </div>
    );
}