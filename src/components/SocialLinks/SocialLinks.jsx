import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function SocialLinks({ className = "" }) {
    const links = [
        {
            href: "https://github.com/AhmdBlack0",
            icon: FaGithub,
            label: "GitHub",
            hoverColor: "hover:text-white hover:border-zinc-600 hover:bg-zinc-800",
        },
        {
            href: "https://www.linkedin.com/",
            icon: FaLinkedin,
            label: "LinkedIn",
            hoverColor: "hover:text-sky-400 hover:border-sky-500/50 hover:bg-sky-500/10",
        },
        {
            href: "mailto:ahmdBlack.0@gmail.com",
            icon: SiGmail,
            label: "Email",
            hoverColor: "hover:text-rose-400 hover:border-rose-500/50 hover:bg-rose-500/10",
        },
    ];

    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {links.map((link) => {
                const Icon = link.icon;
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        title={link.label}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 light:border-zinc-200 bg-zinc-900/60 light:bg-zinc-100 text-zinc-400 light:text-zinc-600 transition-all duration-200 shadow-sm hover:scale-110 active:scale-95 ${link.hoverColor}`}
                    >
                        <Icon className="text-lg" />
                    </a>
                );
            })}
        </div>
    );
}

export default SocialLinks;
