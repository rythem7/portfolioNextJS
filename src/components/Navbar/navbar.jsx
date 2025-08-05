import React from 'react';
import Link from 'next/link';
import MobileDropdown from './nav-dropdown';

function Navbar() {
    return (
        <div className="navbar absolute top-0 left-1/2 transform -translate-x-1/2 z-10 max-w-[1280px] mx-auto rounded-box p-3 font-bold text-neutral-content">
            <div className="navbar-start">
                <MobileDropdown />
                <Link href="/" className="btn btn-ghost text-xl">
                    <span>Portfo<span className="text-accent">lio</span></span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Services</a></li>
                    <li>
                        <Link href='/about-me'>
                            <span>About <span className='text-accent'>Me!</span></span>
                        </Link>
                    </li>
                    <li><Link href='/login'>Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link href='/contact' className="btn btn-accent rounded-box brightness-80 hover:brightness-100">Button</Link>
            </div>
        </div>
    )
}

export default Navbar;
