import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer in-container">
            <p>© 2025 Ahmed Osama. All rights reserved.</p>
            <p>
                Inspired from 
                <Link to="https://spotlight.tailwindui.com/" target="_blank">
                    here
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
