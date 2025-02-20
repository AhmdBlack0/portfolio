import { useState } from 'react';
import './Header.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { CiLight } from "react-icons/ci";




function Header() {
    const [showModel, setShowModel] = useState(false);
    const [active, setActive] = useState("home");
    const [darkmode, setDarkMode] = useState(true)
    return (
        <div className='header'>
            <HiMiniBars3  onClick={() => setShowModel(true)} className='show-nav icon'/>
            <div></div>
            {
                showModel && 
                <div className='pop-nav'>
                    <ul className='pop-nav-links'>
                        <li><Link to='/' onClick={() => setShowModel(false)}>home</Link></li>
                        <li><Link to={'/about'} onClick={() => setShowModel(false)}>about</Link></li>
                        <li><Link to={'/projects'} onClick={() => setShowModel(false)}>projects</Link></li>
                        <IoClose onClick={() => setShowModel(false)} className='close-nav icon'/>
                        <li><Link to='/content' onClick={() => setShowModel(false)}>contact</Link></li>
                    </ul>
                </div>
            }
            <ul className='nav-links'>
                <li><Link to='/' className={active === "home" ? "active-nav" : ""} onClick={() => setActive('home')}>home</Link></li>
                <li><Link to='/about' className={active === "about" ? "active-nav" : ""} onClick={() => setActive('about')}>about</Link></li>
                <li><Link to='/projects' className={active === "projects" ? "active-nav" : ""} onClick={() => setActive('projects')}>projects</Link></li>
                <li><Link to='/contact' className={active === "contact" ? "active-nav" : ""} onClick={() => setActive('contact')}>contact</Link></li>
            </ul>
            <button onClick={() => {
                document.querySelector("body").classList.toggle("light-mode")
                setDarkMode(!darkmode)
            }}>{darkmode ? <BsMoonStars className='icon' />: <CiLight className='icon'/>}</button>
        </div>
    )
}

export default Header
