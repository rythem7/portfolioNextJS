'use client';

import Link from 'next/link';
import { useRef } from 'react';

export default function MobileDropdown() {
    const dropdownTrigger = useRef(null);

    const handleCloseDropdown = () => {
        dropdownTrigger.current?.blur();
    };

    return (
        <div className="dropdown">
            <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
                ref={dropdownTrigger}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                    />
                </svg>
            </div>

            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
                <li><Link href="/" onClick={handleCloseDropdown}>Item 1</Link></li>
                <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><Link href="/about-me" onClick={handleCloseDropdown}>About Me</Link></li>
                        <li><Link href="/projects" onClick={handleCloseDropdown}>Projects</Link></li>
                    </ul>
                </li>
                <li><Link href="/item3" onClick={handleCloseDropdown}>Item 3</Link></li>
            </ul>
        </div>
    );
}
