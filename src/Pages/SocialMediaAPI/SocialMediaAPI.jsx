import { useState, useEffect } from 'react';
import './SociallMediaAPI.css';

const SocailMediaAPI = () => {
    const [showToast, setShowToast] = useState(false);

    const baseUrl = 'https://social-media-api-fhdx.vercel.app/';


    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    useEffect(() => {
        // Add animation on scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.api-card').forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const APICard = ({ number, title, description, method, img, endpoint, authRequired, adminOnly }) => (
        <div className="api-card">
            <h3 className="api-header">
                <span className="api-number">{number}</span>
                {title}
            </h3>
            <p className="api-description">{description}</p>
            <div className="api-endpoint">
                <span className={`method-badge ${method.toLowerCase()}-req`}>{method}</span>
                <code className="endpoint-url">{endpoint}</code>
            </div>
            {img && <img src={img} alt={title} className="api-image" />}
            {(authRequired || adminOnly) && (
                <div className="auth-note">
                    <i className={adminOnly ? "fas fa-shield-alt" : "fas fa-lock"}></i>
                    {adminOnly ? "Admin privileges required" : "Authentication required"}
                </div>
            )}
        </div>
    );
    

    return (
        <div className="api">
            <div className="container">
                <div className="header-api">
                    <h1><i className="fas fa-shopping-cart"></i> Social Media API</h1>
                    <p>
                        This API provides endpoints for managing users, products, and their interactions in a social media context.
                    </p>
                </div>

                <div className="base-url">
                    <h3><i className="fas fa-globe"></i> Base URL</h3>
                    <code>{baseUrl}</code>
                </div>

                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-box"></i>
                        Users 
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Register User"
                            description="Create a new user account with email, password, and profile information."
                            method="POST"
                            endpoint="/api/auth/signup"
                            img={'/register-social-media-api.png'}
                        />
                        <APICard 
                        number="2"
                        title="Login User"
                        description="Authenticate a user with email and password."
                        method="POST"
                        endpoint="/api/auth/login"
                        img={'/login-social-media-api.png'}
                    />

                        <APICard 
                            number="3"
                            title="Get Me"
                            description="Retrieve the profile information of the currently authenticated user."
                            method="GET"
                            endpoint="/api/auth/me"
                            img={'/getme-social-media-api.png'}
                            authRequired={true}
                    />
                        <APICard 
                            number="4"
                            title="Logout User"
                            description="Log out the currently authenticated user."
                            method="POST"
                            endpoint="/api/auth/logout"
                            img={'/Logout-social-media-api.png'}
                            authRequired={true}
                            />
                    <div/>
                </div>
                    
                    </div>

                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-box"></i>
                        Users 
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Get User Profile"
                            description="Retrieve the profile information of a user by their username."
                            method="GET"
                            endpoint="/api/users/profile/{username}"
                            img={'/get-user-social-media-api.png'}
                            authRequired={true}
                            />
                        <APICard 
                            number="2"
                            title="Suggest Users"
                            description="Get a list of suggested users based on the current user's interests and interactions."
                            method="GET"
                            endpoint="/api/users/suggested"
                            img={'/suggested-users-social-media-api.png'}
                            authRequired={true}
                            />
                        <APICard 
                            number="3"
                            title="Follow and Unfollow User"
                            description="Get a list of suggested users based on the current user's interests and interactions."
                            method="GET"
                            endpoint="/api/users/suggested"
                            img={'/follow-user-social-media-api.png'}
                            authRequired={true}
                        />
                        <APICard 
                            number="4"
                            title="Update User Profile"
                            description="Update the profile information of the currently authenticated user."
                            method="POST"
                            endpoint="/api/users/update"
                            img={'/updated-user-social-media-api.png'}
                            authRequired={true}
                        />

                    <div/>
                </div>
                    
                    </div>
                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-box"></i>
                        Posts
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Get All Posts"
                            description="Retrieve a list of all posts made by users."
                            method="GET"
                            endpoint="/api/users/posts/all"
                            authRequired={true}
                            />
                        <APICard 
                            number="2"
                            title="Get Following Posts"
                            description="Retrieve a list of posts made by users that the currently authenticated user follows."
                            method="GET"
                            endpoint="/api/users/posts/following"
                            authRequired={true}
                            />
                        <APICard 
                            number="3"
                            title="Get User Posts"
                            description="Retrieve a list of posts made by a specific user."
                            method="GET"
                            endpoint="/api/posts/user/{username}"
                            authRequired={true}
                            />
                        <APICard 
                            number="4"
                            title="Create Post"
                            description="Create a new post with text and optional media."
                            method="POST"
                            endpoint="/api/posts/create"
                            img={'/create-post-social-media-api.png'}
                            authRequired={true}
                            />
                        <APICard 
                            number="5"
                            title="Like & Unlike Post"
                            description="Like or unlike a post by its ID."
                            method="POST"
                            endpoint="/api/posts/like/{postId}"
                            img={'/like-post-social-media-api.png'}
                            authRequired={true}
                            />
                        <APICard 
                            number="6"
                            title="Add Comment"
                            description="Add a comment to a post by its ID."
                            method="POST"
                            endpoint="/api/posts/comment/{postId}"
                            img={'/add-comment-social-media-api.png'}
                            authRequired={true}
                            />
                        <APICard 
                            number="7"
                            title="Delete Post"
                            description="Delete a post by its ID."
                            method="DELETE"
                            endpoint="/api/posts/{postId}"
                            img={'/delete-post-social-media-api.png'}
                            authRequired={true}
                            />
                        

                    <div/>
                </div>
                    
                    </div>
            </div>
        </div>
    );
};

export default SocailMediaAPI;
