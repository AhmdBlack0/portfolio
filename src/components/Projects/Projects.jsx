import { useState, useEffect } from "react";
import projectsFile from "../../projects";
import "./Projects.css";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";




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
                <button className={tech === "html" ? "active" : ""} onClick={() => setTech("html")}>HTML & CSS</button>
                <button className={tech === "javascript" ? "active" : ""} onClick={() => setTech("javascript")}>JavaScript</button>
                <button className={tech === "react" ? "active" : ""} onClick={() => setTech("react")}>React</button>
                <button className={tech === "node" ? "active" : ""} onClick={() => setTech("node")}>Node & Express</button>
            </div>
            <div className="content-right-sec">
                {projects.length > 0 ? (
                    projects.map(project => (
                        <div key={project.id} className="project-card">
                            <img className="project-image" src={project.image} />
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                {project.icons.map((Icon, index) => (
                                    <Icon key={index} />
                                ))}
                            </div>
                            <div className="card-links">
                                <Link title="Live Demo" target="_blank" to={`${project.url}`}><IoIosLink /></Link>
                                <Link title="Github" target="_blank" to={`${project.github}`}><FaGithub /></Link>

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
