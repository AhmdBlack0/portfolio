import { useState, useEffect } from "react";
import projectsFile from "../../projects";
import "./Projects.css";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";




function Projects() {
    const [tech, setTech] = useState("all");
    const [projects, setProjects] = useState(projectsFile);

    // Update projects when tech changes
    useEffect(() => {
        if (tech === "all") {
            setProjects(projectsFile); // Show all projects
        } else {
            setProjects(projectsFile.filter(project => project.by === tech));
        }
    }, [tech]);

    return (
        <div className="content in-container">
            <div className="content-left-sec">
                <button className={tech === "all" ? "active" : ""} onClick={() => setTech("all")}>All Projects</button>
                <button className={tech === "blockchain" ? "active" : ""} onClick={() => setTech("blockchain")}>Block Chain</button>
                <button className={tech === "nodejs" ? "active" : ""} onClick={() => setTech("nodejs")}>NodeJS & Express</button>
                <button className={tech === "telegram" ? "active" : ""} onClick={() => setTech("telegram")}>Telegram Bot</button>
            </div>
            <div className="content-right-sec">
                {projects.length > 0 ? (
                    projects.map(project => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <span className="project-card-category">{project.by}</span>
                                <img className="project-image" src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-card-description">{project.description}</p>
                                <div className="project-icons">
                                    {project.icons.map((Icon, index) => (
                                        <Icon key={index} />
                                    ))}
                                </div>
                            </div>
                            <div className="card-links">
                                {project.url.startsWith("http") ? (
                                    <a title="Live Demo" href={project.url} target="_blank" rel="noopener noreferrer">
                                        <IoIosLink />
                                    </a>
                                ) : (
                                    <Link title="Live Demo" to={project.url}>
                                        <IoIosLink />
                                    </Link>
                                )}
                                {project.github && (
                                    <a title="Github" href={project.github} target="_blank" rel="noopener noreferrer">
                                        <FaGithub />
                                    </a>
                                )}
                                <Link title="View More" to={`/project/${project.id}`} className="view-more-link">
                                    <FaArrowRight />
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    );
}

export default Projects;
