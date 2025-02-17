import { useState } from 'react';
import './Header.css'
import { HiMiniBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { BsMoonStars } from "react-icons/bs";



function Header() {
    const [showModel, setShowModel] = useState(false);
    return (
        <div className='header'>
            <HiMiniBars3  onClick={() => setShowModel(true)} className='show-nav icon'/>
            <div></div>
            {
                showModel && 
                <div className='pop-nav'>
                    <ul className='pop-nav-links'>
                        <li><a href="#">home</a></li>
                        <li><a href="#">about</a></li>
                        <li><a href="#">projects</a></li>
                        <IoClose onClick={() => setShowModel(false)} className='close-nav icon'/>
                        <li><a href="#">contact</a></li>
                    </ul>
                </div>
            }
            <ul className='nav-links'>
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">projects</a></li>
                <li><a href="#">contact</a></li>
            </ul>
            <button><BsMoonStars className='icon' /></button>
        </div>
    )
}

export default Header
