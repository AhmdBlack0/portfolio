import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen } from 'react-icons/fa';
import { HiOutlineClock } from 'react-icons/hi2';

function Articles() {
    const articles = [
        {
            to: '/advanced-auth-api',
            tag: 'Security & Auth',
            title: 'Advanced AUTH API',
            description: 'Complete architecture guide to building a production-ready authentication service with Node.js, Express, refresh tokens, and role-based access control.',
            time: '10 min read',
            gradient: 'from-emerald-500/20 to-teal-500/5',
        },
        {
            to: '/social-media-api',
            tag: 'Social Platform',
            title: 'Social Media API with Secure Cookies',
            description: 'Scalable backend handling user relations, feed generation, image uploads, and HTTP-only cookie session authentication.',
            time: '10 min read',
            gradient: 'from-sky-500/20 to-blue-500/5',
        },
        {
            to: '/habit-tracker-api',
            tag: 'Productivity & Tracking',
            title: 'Habit Tracker API Documentation',
            description: 'Data modeling for habits, streak calculations, reminders, and daily progress analytics with optimized queries.',
            time: '15 min read',
            gradient: 'from-violet-500/20 to-purple-500/5',
        },
        {
            to: '/to-do-list-api',
            tag: 'CRUD & State Management',
            title: 'To Do List API with Cookies',
            description: 'Lightweight and secure task management API featuring subtasks, priority levels, categorization, and cookie sessions.',
            time: '5 min read',
            gradient: 'from-amber-500/20 to-orange-500/5',
        },
        {
            to: '/ecommerce-api',
            tag: 'E-Commerce Platform',
            title: 'E-Commerce API Documentation',
            description: 'Comprehensive store backend with inventory management, cart workflows, order processing, and payment webhook integrations.',
            time: '5 min read',
            gradient: 'from-rose-500/20 to-pink-500/5',
        },
        {
            to: '/docker-guide',
            tag: 'DevOps & Containers',
            title: 'Dockerizing Node.js & PostgreSQL Backend',
            description: 'Multi-stage Dockerfile architecture, Docker Compose configuration with PostgreSQL, persistent volumes, and production deployment tips.',
            time: '8 min read',
            gradient: 'from-cyan-500/20 to-teal-500/5',
        },
    ];

    return (
        <section className="px-6 py-12 sm:px-12 lg:px-16 border-t border-zinc-800/60 light:border-zinc-200/80">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                    <div className="flex items-center gap-2 text-teal-400 light:text-teal-600 text-xs font-semibold tracking-wider uppercase mb-1">
                        <FaBookOpen />
                        <span>Technical Documentation</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-zinc-100 light:text-zinc-900 tracking-tight">
                        API Documentation & Case Studies
                    </h2>
                </div>
                <p className="text-sm text-zinc-400 light:text-zinc-500 max-w-md">
                    Deep dives into backend architectures, authentication flows, and database designs I’ve implemented.
                </p>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className="group relative flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-white hover:border-teal-500/50 light:hover:border-teal-400 hover:shadow-xl hover:shadow-teal-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                    >
                        {/* Hover Gradient Overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />

                        <div>
                            {/* Tag */}
                            <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide bg-zinc-800 light:bg-zinc-100 text-teal-400 light:text-teal-700 border border-zinc-700/60 light:border-zinc-200 mb-3">
                                {item.tag}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-zinc-100 light:text-zinc-900 group-hover:text-teal-400 light:group-hover:text-teal-600 transition-colors line-clamp-2 mb-2">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 leading-relaxed mb-6 line-clamp-3">
                                {item.description}
                            </p>
                        </div>

                        {/* Footer Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-zinc-800/60 light:border-zinc-100 text-xs text-zinc-400 light:text-zinc-500">
                            <span className="flex items-center gap-1.5 font-medium">
                                <HiOutlineClock className="text-sm" />
                                {item.time}
                            </span>
                            <span className="flex items-center gap-1 font-semibold text-teal-400 light:text-teal-600 group-hover:translate-x-1 transition-transform">
                                Read Guide <FaArrowRight className="text-[10px]" />
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}

export default Articles;