import { useState } from 'react';
import './Header.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { Link } from 'react-router-dom';



function Header() {
    const [showModel, setShowModel] = useState(false);
    const [active, setActive] = useState("home");
    return (
        <div className='header'>
            <HiMiniBars3  onClick={() => setShowModel(true)} className='show-nav icon'/>
            <div></div>
            {
                showModel && 
                <div className='pop-nav'>
                    <ul className='pop-nav-links'>
                        <li><Link to='/'>home</Link></li>
                        <li><Link to={'/about'}>about</Link></li>
                        <li><Link to={'/projects'}>projects</Link></li>
                        <IoClose onClick={() => setShowModel(false)} className='close-nav icon'/>
                        <li><Link to='/content'>contact</Link></li>
                    </ul>
                </div>
            }
            <ul className='nav-links'>
                <li><Link to='/' className={active === "home" ? "active-nav" : ""} onClick={() => setActive('home')}>home</Link></li>
                <li><Link to='/about' className={active === "about" ? "active-nav" : ""} onClick={() => setActive('about')}>about</Link></li>
                <li><Link to='/projects' className={active === "projects" ? "active-nav" : ""} onClick={() => setActive('projects')}>projects</Link></li>
                <li><Link to='/contact' className={active === "contact" ? "active-nav" : ""} onClick={() => setActive('contact')}>contact</Link></li>
            </ul>
            <button><BsMoonStars className='icon' /></button>
        </div>
    )
}

export default Header
