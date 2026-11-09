import profile_image_2 from '/profile_image_2.jpg';
import { FaGraduationCap } from 'react-icons/fa';
import SocialLinks from '../SocialLinks/SocialLinks';

function About() {
    return (
        <section className="px-6 py-12 sm:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Bio & Story */}
                <div className="lg:col-span-7 space-y-6">
                    <div>
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 light:bg-teal-50 text-teal-400 light:text-teal-700 border border-teal-500/30 light:border-teal-200 mb-3">
                            About Me
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-extrabold text-zinc-100 light:text-zinc-900 tracking-tight leading-tight">
                            I’m Ahmed Osama. Living in Egypt, engineering the backend systems of tomorrow.
                        </h1>
                    </div>

                    <div className="space-y-4 text-sm sm:text-base text-zinc-300 light:text-zinc-700 leading-relaxed">
                        <p>
                            I’ve had a passion for programming for as long as I can remember, deeply fascinated by how clean, well-structured logic under the hood can power seamless digital experiences across the world.
                        </p>
                        <p>
                            Currently pursuing my Bachelor’s degree in Computer Science at <strong className="text-zinc-100 light:text-zinc-900 font-semibold">Zagazig University (2022–2026)</strong>, I have dedicated myself to mastering server-side engineering with <strong className="text-teal-400 light:text-teal-600 font-semibold">Node.js & Express.js</strong>, databases (<strong className="text-teal-400 light:text-teal-600 font-semibold">PostgreSQL, Prisma, MongoDB</strong>), and containerized workflows with <strong className="text-teal-400 light:text-teal-600 font-semibold">Docker & GitHub</strong>.
                        </p>
                        <p>
                            My focus centers on designing scalable RESTful APIs, implementing robust authentication flows (JWT, cookies, RBAC), handling complex database relationships, and writing modular, maintainable code. I love tackling real problems and transforming requirements into performant backend services.
                        </p>
                    </div>

                    {/* Education Card */}
                    <div className="p-5 rounded-2xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/50 light:bg-zinc-50 flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 light:text-teal-600 text-lg">
                            <FaGraduationCap />
                        </div>
                        <div>
                            <h3 className="text-base font-bold text-zinc-100 light:text-zinc-900">
                                Zagazig University - Faculty of Computer Science
                            </h3>
                            <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-500 mt-0.5">
                                Bachelor of Science in Computer Science • 2022 – 2026
                            </p>
                            <p className="text-xs text-zinc-400 light:text-zinc-600 mt-2">
                                Focused on Data Structures, Algorithms, Operating Systems, Database Management Systems, and Software Engineering.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Profile Image & Connect */}
                <div className="lg:col-span-5 flex flex-col items-center lg:items-end space-y-6">
                    <div className="relative group max-w-sm w-full">
                        <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-500/30 to-sky-500/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></div>
                        <div className="relative rounded-3xl overflow-hidden border-2 border-zinc-700/80 light:border-zinc-200 bg-zinc-900 shadow-2xl transition-transform duration-300 group-hover:rotate-1">
                            <img
                                className="w-full h-auto object-cover"
                                src={profile_image_2}
                                alt="Ahmed Osama"
                            />
                        </div>
                    </div>

                    {/* Connect Card */}
                    <div className="w-full max-w-sm p-6 rounded-3xl border border-zinc-800/80 light:border-zinc-200 bg-zinc-900/60 light:bg-white shadow-lg text-center sm:text-left">
                        <h3 className="text-base font-bold text-zinc-100 light:text-zinc-900 mb-2">
                            Let&apos;s Connect & Collaborate
                        </h3>
                        <p className="text-xs sm:text-sm text-zinc-400 light:text-zinc-600 mb-4 leading-relaxed">
                            Interested in working together or discussing potential opportunities? Feel free to reach out anytime.
                        </p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
