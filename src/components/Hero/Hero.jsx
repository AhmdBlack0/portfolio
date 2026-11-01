import profile_image_1 from '/profile_image_1.png';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaTerminal, FaServer, FaDatabase } from 'react-icons/fa';
import { HiSparkles } from 'react-icons/hi2';
import SocialLinks from '../SocialLinks/SocialLinks';
import Articles from '../Articles/Articles';

function Hero() {
    const skills = [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "Docker",
    ];

    return (
        <>
            <section className="relative px-6 py-12 sm:px-12 lg:px-16 overflow-hidden">
                {/* Background Ambient Glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
                <div className="absolute top-1/3 right-10 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

                <div className="max-w-5xl">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-teal-500/30 bg-teal-500/10 light:bg-teal-50 light:border-teal-300 text-teal-400 light:text-teal-700 text-xs font-medium mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                        </span>
                        <span>Available for new projects & opportunities</span>
                    </div>

                    {/* Profile & Intro Header */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8">
                        <div className="relative group">
                            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-500 to-sky-500 opacity-70 blur-md group-hover:opacity-100 transition duration-300"></div>
                            <div className="relative h-24 w-24 sm:h-28 sm:w-28 rounded-full overflow-hidden border-2 border-zinc-700 light:border-zinc-300 bg-zinc-900 shadow-xl">
                                <img
                                    className="h-full w-full object-cover object-top transition duration-300 group-hover:scale-105"
                                    src={profile_image_1}
                                    alt="Ahmed Osama"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 text-zinc-400 light:text-zinc-600 text-sm font-medium">
                                <HiSparkles className="text-teal-400" />
                                <span>Hello, I am</span>
                            </div>
                            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-100 light:text-zinc-900 mt-1">
                                Ahmed Osama
                            </h1>
                            <p className="text-lg font-semibold bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400 bg-clip-text text-transparent mt-1">
                                Backend Developer & API Architect
                            </p>
                        </div>
                    </div>

                    {/* Bio Paragraph */}
                    <p className="text-base sm:text-lg text-zinc-300 light:text-zinc-700 leading-relaxed max-w-3xl mb-6">
                        Computer Science student at <strong className="text-zinc-100 light:text-zinc-900 font-semibold">Zagazig University</strong> specializing in engineering robust, high-performance backend architectures, RESTful APIs, and scalable services with <strong className="text-teal-400 light:text-teal-600 font-semibold">Node.js, Express.js</strong>, databases (<strong className="text-teal-400 light:text-teal-600 font-semibold">PostgreSQL & MongoDB</strong>), and containerized workflows with <strong className="text-teal-400 light:text-teal-600 font-semibold">Docker</strong>.
                    </p>

                    {/* Skills pills */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-3 py-1 rounded-lg border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-xs font-medium text-zinc-300 light:text-zinc-700 shadow-sm transition hover:border-teal-500/50 hover:text-teal-400 light:hover:text-teal-600"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>

                    {/* CTA Actions & Social */}
                    <div className="flex flex-wrap items-center gap-4 mb-10">
                        <Link
                            to="/projects"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>Explore Projects</span>
                            <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-700 light:border-zinc-300 bg-zinc-900/50 light:bg-zinc-100 hover:bg-zinc-800 light:hover:bg-zinc-200 text-zinc-200 light:text-zinc-800 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            Get in Touch
                        </Link>
                        <div className="ml-0 sm:ml-2">
                            <SocialLinks />
                        </div>
                    </div>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-800/60 light:border-zinc-200/80">
                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 light:text-teal-600">
                                <FaServer className="text-lg" />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-zinc-100 light:text-zinc-900">15+</div>
                                <div className="text-xs text-zinc-400 light:text-zinc-500 font-medium">Backend & API Projects</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 light:text-sky-600">
                                <FaDatabase className="text-lg" />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-zinc-100 light:text-zinc-900">Clean & Scalable</div>
                                <div className="text-xs text-zinc-400 light:text-zinc-500 font-medium">Data Modeling & DBs</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3.5 p-3.5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 light:text-indigo-600">
                                <FaTerminal className="text-lg" />
                            </div>
                            <div>
                                <div className="text-xl font-bold text-zinc-100 light:text-zinc-900">2022 - 2026</div>
                                <div className="text-xs text-zinc-400 light:text-zinc-500 font-medium">CS @ Zagazig University</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Articles / API Documentation Section */}
            <Articles />
        </>
    );
}

export default Hero;
