import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="px-6 py-10 sm:px-12 lg:px-16 border-t border-zinc-800/60 light:border-zinc-200/80 bg-zinc-950/40 light:bg-zinc-50/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Navigation links */}
                <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm font-medium text-zinc-400 light:text-zinc-600">
                    <Link to="/" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">
                        About
                    </Link>
                    <Link to="/projects" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">
                        Projects
                    </Link>
                    <Link to="/contact" className="hover:text-teal-400 light:hover:text-teal-600 transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Back to top */}
                <button
                    type="button"
                    onClick={scrollToTop}
                    className="flex items-center gap-2 text-xs font-semibold text-zinc-400 light:text-zinc-500 hover:text-teal-400 light:hover:text-teal-600 transition-colors"
                >
                    <span>Back to top</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-white">
                        <FaArrowUp className="text-[10px]" />
                    </div>
                </button>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/40 light:border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 light:text-zinc-600">
                <p>© {new Date().getFullYear()} Ahmed Osama. Built with React & Tailwind CSS.</p>
                <p>
                    Zagazig, Egypt • Focused on scalable software systems
                </p>
            </div>
        </footer>
    );
}

export default Footer;
