import profile_image_1 from '/profile_image_1.png'
import './Hero.css'
import SocialLinks from '../SocialLinks/SocialLinks';
import Articles from '../Articles/Articles';

function Hero() {
    return (
        <>
            <div className="hero in-container">
                <div className="hero-sec-left">
                    <div className='profile-image-container'>
                        <img className='hero-profile-image' src={profile_image_1} alt="" />
                    </div>
                    <h1>Frontend Developer</h1>
                    <p className='hero-description'>
                        I’m <strong>Ahmed Osama</strong>, a passionate Computer Science student at Zagazig University.
                        I specialize in building dynamic and responsive web applications using the <strong>MERN Stack</strong> 
                        (MongoDB, Express.js, React.js, and Node.js).
                    </p>
                    <p>Let’s build something amazing together!</p>
                    <SocialLinks />
                </div>
            </div>
            <Articles />
        </>
    )
}

export default Hero
