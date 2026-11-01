import { useState, useMemo } from "react";
import projectsFile from "../../projects";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { FaGithub, FaArrowRight, FaCode } from "react-icons/fa";

function Projects() {
    const [tech, setTech] = useState("all");

    const categories = [
        { id: "all", label: "All Projects" },
        { id: "nodejs", label: "Node.js & Express" },
        { id: "blockchain", label: "Blockchain" },
        { id: "telegram", label: "Telegram Bots" },
    ];

    const filteredProjects = useMemo(() => {
        if (tech === "all") return projectsFile;
        return projectsFile.filter((project) => project.by === tech);
    }, [tech]);

    return (
        <section className="px-6 py-12 sm:px-12 lg:px-16">
            {/* Header */}
            <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-teal-500/30 bg-teal-500/10 light:bg-teal-50 text-teal-400 light:text-teal-700 text-xs font-semibold uppercase tracking-wider mb-3">
                    <FaCode />
                    <span>Portfolio Showcase</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight">
                    Things I’ve Built
                </h1>
                <p className="mt-3 text-base sm:text-lg text-zinc-400 light:text-zinc-600 leading-relaxed">
                    A curated collection of backend architectures, web applications, microservices, and automation bots I’ve developed.
                </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pb-8 border-b border-zinc-800/60 light:border-zinc-200/80 mb-10">
                {categories.map((cat) => {
                    const count = cat.id === "all" 
                        ? projectsFile.length 
                        : projectsFile.filter(p => p.by === cat.id).length;
                    const isActive = tech === cat.id;

                    return (
                        <button
                            key={cat.id}
                            type="button"
                            onClick={() => setTech(cat.id)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                                isActive
                                    ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25 scale-[1.02]"
                                    : "border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-zinc-400 light:text-zinc-600 hover:text-zinc-100 light:hover:text-zinc-900 hover:border-zinc-700"
                            }`}
                        >
                            <span>{cat.label}</span>
                            <span className={`px-2 py-0.5 rounded-full text-[11px] ${
                                isActive
                                    ? "bg-white/20 text-white"
                                    : "bg-zinc-800 light:bg-zinc-200 text-zinc-400 light:text-zinc-600"
                            }`}>
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative flex flex-col rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white overflow-hidden shadow-lg hover:shadow-2xl hover:border-teal-500/50 light:hover:border-teal-400 transition-all duration-300 hover:-translate-y-1.5"
                        >
                            {/* Project Image Preview */}
                            <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                                <img
                                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                                
                                {/* Category Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-zinc-900/90 light:bg-white/90 text-teal-400 light:text-teal-700 backdrop-blur-md border border-zinc-700/50 light:border-zinc-300 shadow-md">
                                        {project.by}
                                    </span>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="flex flex-col flex-1 p-6">
                                <div className="flex items-start justify-between gap-3 mb-2">
                                    <h3 className="text-xl font-bold text-zinc-100 light:text-zinc-900 group-hover:text-teal-400 light:group-hover:text-teal-600 transition-colors">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 leading-relaxed line-clamp-3 mb-5 flex-1">
                                    {project.description}
                                </p>

                                {/* Tech Icons */}
                                <div className="flex items-center gap-2 mb-6 flex-wrap">
                                    {project.icons && project.icons.map((Icon, idx) => (
                                        <div
                                            key={idx}
                                            className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 light:border-zinc-200 bg-zinc-950/60 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 text-sm shadow-sm"
                                        >
                                            <Icon />
                                        </div>
                                    ))}
                                    {project.tags && project.tags.slice(0, 2).map((t, i) => (
                                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/80 light:bg-zinc-100 text-zinc-400 light:text-zinc-600">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer Links */}
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 light:border-zinc-100">
                                    <div className="flex items-center gap-2">
                                        {project.url && (
                                            project.url.startsWith("http") ? (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Live Demo"
                                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:text-teal-400 hover:border-teal-500 transition-all"
                                                >
                                                    <IoIosLink className="text-lg" />
                                                </a>
                                            ) : (
                                                <Link
                                                    to={project.url}
                                                    title="Live Demo / Docs"
                                                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:text-teal-400 hover:border-teal-500 transition-all"
                                                >
                                                    <IoIosLink className="text-lg" />
                                                </Link>
                                            )
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="GitHub Repository"
                                                className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:text-teal-400 hover:border-teal-500 transition-all"
                                            >
                                                <FaGithub className="text-base" />
                                            </a>
                                        )}
                                    </div>

                                    <Link
                                        to={`/project/${project.id}`}
                                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-400 light:text-teal-600 hover:underline group-hover:translate-x-0.5 transition-transform"
                                    >
                                        <span>Details</span>
                                        <FaArrowRight className="text-[10px]" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="py-20 text-center">
                    <p className="text-base text-zinc-400 light:text-zinc-600">No projects found in this category.</p>
                </div>
            )}
        </section>
    );
}

export default Projects;
