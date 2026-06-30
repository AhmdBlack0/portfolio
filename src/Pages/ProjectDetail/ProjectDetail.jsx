import { useParams, Link } from 'react-router-dom';
import { IoIosLink } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import projects from '../../projects';
import './ProjectDetail.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <h1>Project Not Found</h1>
          <Link to="/projects" className="back-link">← Back to Projects</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="project-detail-container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>
        
        <div className="project-detail-content">
          {/* Left Column: Media Preview */}
          <div className="project-detail-media-sec">
            <div className="media-glow-aura"></div>
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="browser-address-bar">
                  {project.url.startsWith("http") ? project.url : `localhost:5173${project.url}`}
                </div>
              </div>
              <div className="project-detail-image">
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          </div>
          
          {/* Right Column: Info details */}
          <div className="project-detail-info-sec">
            <div className="project-detail-header-info">
              <span className="category-badge">{project.by}</span>
              <h1 className="project-detail-title">{project.title}</h1>
            </div>

            {/* Technical Tags */}
            {project.tags && (
              <div className="project-tags-container">
                {project.tags.map((tag, index) => (
                  <span key={index} className="project-tag-pill">{tag}</span>
                ))}
              </div>
            )}
            
            <p className="project-detail-description">{project.description}</p>

            {/* Features Checklist */}
            {project.features && (
              <div className="project-features-container">
                <h3>Key Features</h3>
                <ul className="project-features-list">
                  {project.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa-solid fa-circle-check feature-check-icon"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Icons */}
            <div className="project-detail-tech-stack">
              <span>Built with:</span>
              <div className="project-detail-icons">
                {project.icons.map((Icon, index) => (
                  <Icon key={index} className="tech-icon" />
                ))}
              </div>
            </div>
            
            <div className="project-detail-links">
              {project.url.startsWith("http") ? (
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link primary-link"
                >
                  <IoIosLink /> Live Demo
                </a>
              ) : (
                <Link 
                  to={project.url} 
                  className="project-link primary-link"
                >
                  <IoIosLink /> Live Demo
                </Link>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link github-link"
                >
                  <FaGithub /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
