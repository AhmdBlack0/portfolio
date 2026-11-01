import { useState } from 'react';
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

function Header() {
    const [showModal, setShowModal] = useState(false);
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const toggleTheme = () => {
        document.body.classList.toggle('light-mode');
        setDarkMode(!darkMode);
    };

    return (
        <header className="relative z-50 flex items-center justify-between px-6 py-5 sm:px-10 border-b border-zinc-800/40 light:border-zinc-200/60 bg-zinc-950/20 light:bg-white/20 backdrop-blur-md">
            {/* Left: Brand Identity */}
            <Link 
                to="/" 
                className="group flex items-center gap-2.5 transition-transform duration-200 hover:scale-[1.02]"
            >
                <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-teal-500 to-sky-500 text-white shadow-md shadow-teal-500/20">
                    <FaCode className="text-base" />
                    <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500 border-2 border-zinc-900 light:border-white"></span>
                    </span>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-semibold tracking-tight text-zinc-100 light:text-zinc-900 group-hover:text-teal-400 transition-colors">
                        Ahmed Osama
                    </span>
                    <span className="text-[11px] font-medium text-zinc-400 light:text-zinc-500">
                        Backend Engineer
                    </span>
                </div>
            </Link>

            {/* Mobile menu trigger */}
            <button
                type="button"
                onClick={() => setShowModal(true)}
                className="flex md:hidden h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100/80 text-zinc-300 light:text-zinc-700 hover:border-teal-500 hover:text-teal-400 transition-all shadow-sm"
                aria-label="Open navigation menu"
            >
                <HiMiniBars3 className="text-xl" />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 rounded-full border border-zinc-800/80 light:border-zinc-200/90 bg-zinc-900/80 light:bg-zinc-100/85 px-4 py-1.5 shadow-lg shadow-black/20 backdrop-blur-xl">
                {navItems.map((item) => {
                    const active = isActive(item.path);
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                                active
                                    ? 'text-teal-400 font-semibold bg-zinc-800/90 light:bg-white light:text-teal-600 shadow-sm'
                                    : 'text-zinc-400 light:text-zinc-600 hover:text-zinc-100 light:hover:text-zinc-900 hover:bg-zinc-800/40 light:hover:bg-zinc-200/50'
                            }`}
                        >
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            {/* Right: Theme Toggle */}
            <div className="flex items-center gap-3">
                <button
                    type="button"
                    onClick={toggleTheme}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900/70 light:bg-zinc-100/90 text-zinc-300 light:text-zinc-700 hover:border-teal-500 hover:text-teal-400 light:hover:text-teal-600 transition-all duration-200 shadow-sm hover:scale-105 active:scale-95"
                    aria-label="Toggle color theme"
                    title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {darkMode ? (
                        <BsMoonStars className="text-base text-teal-400" />
                    ) : (
                        <CiLight className="text-xl text-amber-500 stroke-[1.5]" />
                    )}
                </button>
            </div>

            {/* Mobile Navigation Drawer / Modal */}
            {showModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4"
                    onClick={() => setShowModal(false)}
                >
                    <div 
                        className="relative w-full max-w-sm rounded-3xl border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-white p-6 shadow-2xl transition-all"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between pb-4 border-b border-zinc-800/60 light:border-zinc-100">
                            <span className="text-sm font-semibold text-zinc-400 light:text-zinc-500 uppercase tracking-wider">
                                Navigation
                            </span>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:text-teal-400 light:hover:text-teal-600 transition-colors"
                            >
                                <IoClose className="text-2xl" />
                            </button>
                        </div>

                        <ul className="mt-4 flex flex-col space-y-1">
                            {navItems.map((item) => {
                                const active = isActive(item.path);
                                return (
                                    <li key={item.path}>
                                        <Link
                                            to={item.path}
                                            onClick={() => setShowModal(false)}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                                                active
                                                    ? 'bg-teal-500/10 text-teal-400 light:text-teal-600 font-semibold'
                                                    : 'text-zinc-300 light:text-zinc-700 hover:bg-zinc-800/50 light:hover:bg-zinc-100'
                                            }`}
                                        >
                                            <span>{item.label}</span>
                                            {active && <span className="h-1.5 w-1.5 rounded-full bg-teal-400"></span>}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
