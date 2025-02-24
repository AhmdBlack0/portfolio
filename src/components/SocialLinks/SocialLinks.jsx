import './SocialLinks.css'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function SocialLinks() {
    return (
        <ul className='social-links'>
            <li><Link
                to="https://github.com/AhmdBlack0"
                target='_blank'
            ><FaGithub className='hero-icons' title='github' /></Link></li>
            <li><Link
                target='_blank'
                to="https://www.linkedin.com/in/ahmed-osama-9020052bb/">
                <FaLinkedin className='hero-icons' title='linkedin' />
            </Link></li>
            <li><Link
                target='_blank'
                to="mailto:ahmdBlack.0@gmail.com"
            ><SiGmail className='hero-icons' title='gmail' /></Link></li>
        </ul>
    )
}

export default SocialLinks
