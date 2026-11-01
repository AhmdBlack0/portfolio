import { useParams, Link } from 'react-router-dom';
import { IoIosLink } from 'react-icons/io';
import { FaGithub, FaArrowLeft, FaCheckCircle, FaLock } from 'react-icons/fa';
import projects from '../../projects';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-zinc-100 light:text-zinc-900 mb-4">Project Not Found</h1>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-teal-400 light:text-teal-600 font-semibold hover:underline"
        >
          <FaArrowLeft className="text-xs" /> Back to Projects
        </Link>
      </div>
    );
  }

  const addressUrl = project.url.startsWith("http")
    ? project.url.replace(/^https?:\/\//, '')
    : `localhost:5173${project.url}`;

  return (
    <div className="px-6 py-10 sm:px-12 lg:px-16">
      {/* Back button */}
      <div className="mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 hover:text-teal-400 light:hover:text-teal-600 hover:border-teal-500/50 transition-all shadow-sm"
        >
          <FaArrowLeft className="text-xs" />
          <span>Back to Projects</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Media Preview / Browser Mockup */}
        <div className="lg:col-span-7">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500/30 to-sky-500/30 blur-xl opacity-60 group-hover:opacity-100 transition duration-500" />
            
            <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-950 overflow-hidden shadow-2xl">
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-zinc-100">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1 rounded-lg bg-zinc-950 light:bg-white text-[11px] text-zinc-400 light:text-zinc-500 border border-zinc-800/80 light:border-zinc-200 max-w-xs sm:max-w-md truncate font-mono">
                  <FaLock className="text-[9px] text-emerald-400" />
                  <span className="truncate">{addressUrl}</span>
                </div>
                <div className="w-12"></div>
              </div>

              {/* Browser Content Image */}
              <div className="aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  className="w-full h-full object-cover object-top"
                  src={project.image}
                  alt={project.title}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Information & Details */}
        <div className="lg:col-span-5 flex flex-col space-y-6">
          <div>
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 light:bg-teal-50 text-teal-400 light:text-teal-700 border border-teal-500/30 light:border-teal-200 mb-3">
              {project.by}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Technical Tags */}
          {project.tags && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 rounded-md text-xs font-medium border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-zinc-300 light:text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Description */}
          <p className="text-sm sm:text-base text-zinc-300 light:text-zinc-700 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features */}
          {project.features && (
            <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/40 light:bg-zinc-50">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200 light:text-zinc-800 mb-3">
                Key Architecture & Features
              </h3>
              <ul className="space-y-2.5">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 light:text-zinc-700">
                    <FaCheckCircle className="text-teal-400 light:text-teal-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Icons */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 light:text-zinc-500">
              Built with:
            </span>
            <div className="flex items-center gap-2">
              {project.icons && project.icons.map((Icon, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900 light:bg-zinc-100 text-zinc-300 light:text-zinc-700 text-base shadow-sm"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.url && (
              project.url.startsWith("http") ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <IoIosLink className="text-lg" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <Link
                  to={project.url}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold text-sm shadow-lg shadow-teal-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
                >
                  <IoIosLink className="text-lg" />
                  <span>View Docs</span>
                </Link>
              )
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-700 light:border-zinc-300 bg-zinc-900/60 light:bg-zinc-100 text-zinc-200 light:text-zinc-800 hover:bg-zinc-800 light:hover:bg-zinc-200 font-semibold text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <FaGithub className="text-base" />
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
