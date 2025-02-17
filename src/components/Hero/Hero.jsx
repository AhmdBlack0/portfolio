import profile_image from '../../imgs/cropped_image.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './Hero.css'

function Hero() {
    return (
        <div className="hero in-container">
            <div className="hero-sec-left">
                <div className='profile-image-container'>
                    <img className='hero-profile-image' src={profile_image} alt="" />
                </div>
                <h1>Frontend Developer</h1>
                <p className='hero-description'>
                    I'm <strong>Ahmed Osama</strong>, a passionate Computer Science student at Zagazig University.
                    I specialize in building dynamic and responsive web applications using the <strong>MERN Stack</strong> 
                    (MongoDB, Express.js, React.js, and Node.js).
                </p>
                <p>Let's build something amazing together!</p>
                <ul className='hero-links'>
                    <li><a href=""><FaGithub className='hero-icons' title='github'/></a></li>
                    <li><a href=""><FaLinkedin className='hero-icons' title='linkedin'/></a></li>
                    <li><a href=""><SiGmail className='hero-icons' title='gmail'/></a></li>
                </ul>
            </div>
            <div className="hero-sec-right">
                test
            </div>
        </div>
    )
}

export default Hero
