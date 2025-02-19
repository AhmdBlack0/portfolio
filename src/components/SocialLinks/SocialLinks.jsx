import './SocialLinks.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function SocialLinks() {
    return (
        <ul className='social-links'>
            <li><Link to=""><FaGithub className='hero-icons' title='github'/></Link></li>
            <li><Link
                target='_blank'
                to="https://www.linkedin.com/in/ahmed-osama-9020052bb/">
                <FaLinkedin className='hero-icons' title='linkedin' />
            </Link></li>
            <li><a href=""><SiGmail className='hero-icons' title='gmail'/></a></li>
        </ul>
    )
}

export default SocialLinks
