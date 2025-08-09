'use client';

import React, { useState, useEffect } from "react";
import { useFormStatus } from "react-dom"; // If using Next.js/app router
import { useCardTilt } from "@/animations/hooks/useCardTilt";

function SubmitButton({ children }) {
    const { pending } = useFormStatus();
    return (
        <button
            type="submit"
            className="w-full py-2 px-4 btn btn-accent brightness-60 hover:brightness-90 rounded  disabled:opacity-50"
            disabled={pending}
        >
            {pending ? "Submitting..." : children}
        </button>
    );
}

export default function LoginForm() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [form, setForm] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const cardRef = useCardTilt({ maxTilt: 3, duration: 0.3 });

    useEffect(() => {
        setIsAuthenticated(false);
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleLogin = async (formData) => {
        // Simulate login
        const username = formData.username;
        const password = formData.password;
        if (username === "user" && password === "pass") {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Invalid credentials");
        }
    };

    const handleSignup = async (formData) => {
        // Simulate signup
        const { username, password, confirmPassword } = formData;
        if (!username || !password) {
            setError("All fields are required");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        setIsAuthenticated(true);
        setError("");
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setForm({ username: "", password: "", confirmPassword: "" });
        setError("");
    };

    if (isAuthenticated) {
        return (
            <div className="max-w-lg mx-auto mt-10 p-6 bg-base-300 rounded shadow">
                <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
                <button
                    className="w-full py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        );
    }

    return (
        <div ref={cardRef} className="w-[70vw] max-w-lg mx-auto flex flex-col gap-4 justify-center mt-10 p-6 bg-base-300 rounded-box shadow-2xl shadow-accent/40">
            <h2 className="text-2xl font-bold">
                {isSignup ? "Sign Up" : "Login"}
            </h2>
            <form
                action={isSignup ? handleSignup : handleLogin}
                className="space-y-4 md:w-md"
            >
                <div>
                    <label className="block mb-1 font-medium">Username</label>
                    <input
                        type="text"
                        name="username"
                        autoComplete="username"
                        value={form.username}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-box focus:outline-none focus:ring"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        className="w-full border px-3 py-2 rounded-box focus:outline-none focus:ring"
                        autoComplete="current-password"
                        required
                    />
                </div>
                {isSignup && (
                    <div>
                        <label className="block mb-1 font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full border px-3 py-2 rounded-box focus:outline-none focus:ring"
                            required
                        />
                    </div>
                )}
                {error && <div className="text-red-500 text-sm">{error}</div>}
                <SubmitButton>
                    {isSignup ? "Sign Up" : "Login"}
                </SubmitButton>
            </form>
            <div className="mt-4 text-center">
                <button
                    className="text-warning brightness-50 hover:brightness-75 opacity-70 hover:underline"
                    onClick={() => {
                        setIsSignup(!isSignup);
                        setError("");
                    }}
                >
                    {isSignup
                        ? "Already have an account? Login"
                        : "Don't have an account? Sign Up"}
                </button>
            </div>
        </div>
    );
}
