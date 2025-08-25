import profile_image_2 from '/profile_image_2.png';
import './About.css'

import SocialLinks from '../SocialLinks/SocialLinks';

function About() {
    return (
        <div className="about in-container">
            <div className="about-left-sec">
                <h1>I’m Ahmed Osama. I live in Egypt, where I design the future.</h1>
                <div className="about-info">
                    <p>
                        I’ve loved building and creating for as long as I can remember, 
                        fascinated by how a few lines of code can bring something to life on a screen.
                    </p>
                    <p>
                        I’ve loved building and creating for as long as I can remember, fascinated by how a few lines of code can bring something to life. I’m a Computer Science student (2022–2026), specializing in backend development with Node.js, Express.js, and MongoDB. 
                    </p>
                    <p>
                        
                        I enjoy building scalable applications, integrating APIs, and working with authentication and file storage systems. I’m always eager to learn new technologies, improve my skills, and take on challenging projects that make an impact
                    </p>
                </div>
            </div>
            <div className="about-right-sec">
                <div className='about-profile-image-container'>
                    <img className='about-profile-image' src={profile_image_2} alt="Ahmed Osama" />
                </div>
                <SocialLinks />
                    
            </div>
        </div>
    );
}

export default About;
