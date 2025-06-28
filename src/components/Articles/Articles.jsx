import { Link } from 'react-router-dom'
import './Articles.css'

function Articles() {
    return (
        <div className='articles in-container'>
            <Link to={'/ecommerce-api'} className='article'>
                <h3>E-commerce API Documentation</h3>
                <p>Complete guide to building and implementing a robust e-commerce API with Node.js and Express.</p>
                <div className='article-meta'>
                    <span>5 min read</span>
                    <span className='read-more'>Read more</span>
                </div>
            </Link>
            <Link to={'/social-media-api'} className='article'>
                <h3>Social Media API Documentation</h3>
                <p>Complete guide to building and implementing a robust Social Media API with Node.js and Express.</p>
                <div className='article-meta'>
                    <span>10 min read</span>
                    <span className='read-more'>Read more</span>
                </div>
            </Link>
            
            
        </div>
    )
}

export default Articles