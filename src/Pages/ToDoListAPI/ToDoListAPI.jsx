import React, { useState, useEffect } from 'react';
import { SiPostman } from "react-icons/si";

const ToDoListAPI = () => {
    const [showToast, setShowToast] = useState(false);

    const baseUrl = 'https://to-do-list-nodejs-pink.vercel.app/api/';


    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    useEffect(() => {
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
        <div className="ecommerce-api">
            <div className="container">
                <div className="header-ecommerce-api">
                    <h1><i className="fas fa-calendar-check"></i> To Do List API</h1>
                    <p>To Do List API Documentation With Cookies</p>
                </div>

                <div className="doc-links">
                    <a
                    href="https://github.com/AhmdBlack0/To-Do-List-Nodejs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                    >
                    <i className="fab fa-github"></i> GitHub
                    </a>
        
                    <a
                    href="https://script-6747.postman.co/workspace/dash~90a4e8db-69e4-4ed9-963c-847e0ddb1ace/collection/35971683-289857c1-92ce-4f86-a1f8-92c15defb7db?action=share&creator=35971683&active-environment=35971683-5b978b32-604f-47f9-8160-85905cda486e"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link postman"
                    >
                    <SiPostman className="postman-icon"/> Postman
                    </a>
                </div>

                <div className="base-url">
                    <h3><i className="fas fa-globe"></i> Base URL</h3>
                    <code>{baseUrl}</code>
                </div>

                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-user-lock"></i>
                        AUTH
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Register"
                            description="Create a new user account."
                            method="POST"
                            endpoint="/auth/signup"
                        />
                        <APICard 
                            number="2"
                            title="Login"
                            description="Authenticate a user and obtain a token."
                            method="POST"
                            endpoint="/auth/login"
                        />
                        <APICard 
                            number="3"
                            title="Get Current User"
                            description="Retrieve details of the currently authenticated user."
                            method="GET"
                            endpoint="/auth/me"
                            authRequired={true}
                        />
                        <APICard 
                            number="4"
                            title="Logout"
                            description="Logout the currently authenticated user."
                            method="POST"
                            endpoint="/auth/logout"
                            authRequired={true}
                        />
                        <APICard 
                            number="5"
                            title="Update Profile"
                            description="Update the profile information of the authenticated user."
                            method="PATCH"
                            endpoint="/auth/profile"
                            authRequired={true}
                        />
                        <APICard 
                            number="6"
                            title="update Password"
                            description="Update the password of the authenticated user."
                            method="PATCH"
                            endpoint="/auth/password"
                            authRequired={true}
                        />
                        <APICard 
                            number="7"
                            title="Delete Account"
                            description="Delete the account of the authenticated user."
                            method="DELETE"
                            endpoint="/auth/account"
                            authRequired={true}
                        />
                        
                    
                    </div>


                <div className="section" style={{marginTop: '70px'}}>
                    <h2 className="section-title">
                        <i className="fas fa-calendar-check"></i>
                        Tasks 
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Add Task"
                            description="Create a new task for the authenticated user."
                            method="POST"
                            endpoint="/todos/"
                            authRequired={true}
                        />
                        <APICard 
                            number="2"
                            title="get Tasks"
                            description="Retrieve all Tasks for the authenticated user."
                            method="GET"
                            endpoint="/todos/"
                            authRequired={true}
                        />
                        <APICard 
                            number="3"
                            title="get Task by ID"
                            description="Retrieve a specific task by its ID for the authenticated user."
                            method="GET"
                            endpoint="/todos/{id}"
                            authRequired={true}
                        />
                        <APICard 
                            number="4"
                            title="Update Task"
                            description="Update a specific Task by its ID for the authenticated user."
                            method="PATCH"
                            endpoint="/todos/{id}"
                            authRequired={true}
                        />
                        <APICard 
                            number="5"
                            title="Delete Task"
                            description="Delete a specific Task by its ID for the authenticated user."
                            method="DELETE"
                            endpoint="/todos/{id}"
                            authRequired={true}
                        />
                        <APICard 
                            number="6"
                            title="Toggle Task Completion"
                            description="Toggle the completion status of a specific Task by its ID for the authenticated user."
                            method="POST"
                            endpoint="/todos/{id}/toggle"
                            authRequired={true}
                        />
                        </div>
                    </div>
                </div>

                
                

            </div>

        </div>
    );
};

export default ToDoListAPI;
