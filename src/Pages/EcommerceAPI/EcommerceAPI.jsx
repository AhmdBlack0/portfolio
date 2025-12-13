import React, { useState, useEffect } from 'react';
import './EcommerceAPI.css';
import { SiPostman } from "react-icons/si";


const EcommerceAPI = () => {
    const [showToast, setShowToast] = useState(false);

    const baseUrl = 'https://e-commerce-api-kmhw.vercel.app/api';


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
        <div className="ecommerce-api">
            <div className="container">
                <div className="header-ecommerce-api">
                    <h1><i className="fas fa-shopping-cart"></i> E-commerce API</h1>
                    <p>Comprehensive RESTful API for managing products, users, authentication, and e-commerce operations</p>
                </div>
                <div className="doc-links">
                    <a
                    href="https://github.com/AhmdBlack0/E-commerceAPI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="doc-link"
                    >
                    <i className="fab fa-github"></i> GitHub
                    </a>
        
                    <a
                    href="https://script-6747.postman.co/workspace/dash~90a4e8db-69e4-4ed9-963c-847e0ddb1ace/collection/35971683-1927e92f-7536-46b1-9339-ef9fbd17c399?action=share&creator=35971683&active-environment=35971683-5b978b32-604f-47f9-8160-85905cda486e"
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
                        <i className="fas fa-box"></i>
                        Products Management
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Get All Products"
                            description="Retrieve a list of all products available in the store with pagination support."
                            method="GET"
                            endpoint="/products"
                        />
                        
                        <APICard 
                            number="2"
                            title="Get Single Product"
                            description="Retrieve detailed information about a specific product by its ID."
                            method="GET"
                            endpoint="/products/{productId}"
                            />
                        
                        <APICard 
                            number="3"
                            title="Add New Product"
                            description={`Create a new product in the inventory. Requires authentication and appropriate permissions. 
                                \n\n**Required fields:** title, price, description, category. 
                                \n**Optional fields:** imageUrl, tags, size, color. 
                                \n\nFor the image, provide a valid URL from the internet. File upload support may be added later.`}
                                method="POST"
                                endpoint="/products"
                            authRequired={true}
                            img={'/addProduct.png'}
                                />

                        
                        <APICard 
                            number="4"
                            title="Update Product"
                            description="Update existing product information. Supports partial updates using PATCH method."
                            method="PATCH"
                            endpoint="/products/{productId}"
                            authRequired={true}
                            />
                        
                        <APICard 
                            number="5"
                            title="Delete Product"
                            description="Remove a product from the inventory permanently. This action cannot be undone."
                            method="DELETE"
                            endpoint="/products/{productId}"
                            authRequired={true}
                            />
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-user-shield"></i>
                        Authentication & Users
                    </h2>
                    <div className="api-grid">
                    <APICard 
                        number="1"
                        title="User Registration"
                        description={`Register a new user account with email, password, and profile information.
                            
                            Required fields: 
                            - username
                            - name
                            - email
                            - password
                            - role (allowed values: 'admin' or 'user', default: 'user')`}
                            method="POST"
                            endpoint="/register"
                            img={'/register-api.png'}
                    />

                        
                    <APICard 
                        number="2"
                        title="User Login"
                        description={`Authenticate user credentials and receive an access token for protected routes.

                        Required fields:
                        - email
                        - password`}
                        method="POST"
                            endpoint="/login"
                            img={'/login-api.png'}
                    />

                        
                        <APICard 
                            number="3"
                            title="Get All Users"
                            description="Retrieve a list of all registered users. Requires valid authentication token."
                            method="GET"
                            endpoint="/users"
                            authRequired={true}
                        />
                        
                        <APICard 
                            number="4"
                            title="Delete User"
                            description="Remove a user account from the system. Only administrators can perform this action."
                            method="DELETE"
                            endpoint="/users/{userId}"
                            adminOnly={true}
                        />
                    </div>
                </div>


                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-user-shield"></i>
                        Cart
                    </h2>
                    <div className="api-grid">
                    <APICard 
                        number="1"
                        title="Get Cart Items"
                        description={`Retrieve all items in the user's shopping cart. Requires authentication.`}
                        method="GET"
                            endpoint="/users/{userId}/cart"
                            authRequired={true}

                    />

                        
                    <APICard 
                        number="2"
                        title="Add Item To Cart"
                        description={`Add a product to the user's shopping cart.
                        Required fields:
                        - productId
                        - quantity (default: 1)`}
                        method="POST"
                            endpoint="/users/{userId}/cart"
                            img={'/addToCart.png'}
                            authRequired={true}

                    />

                        
                        <APICard 
                            number="3"
                            title="Update Cart Item"
                            description={`Update the quantity of a specific item in the user's cart.`}
                            method="PATCH"
                            endpoint="/users/:userId/cart/:productId"
                            img={'/updatedCart.png'}
                            authRequired={true}
                        />

                        <APICard 
                            number="4"
                            title="Delete Cart Item"
                            description={`Remove a specific item from the user's cart.`}
                            method="DELETE"
                            endpoint="/users/:userId/cart/:productId"
                            authRequired={true}
                        />

                        
                    </div>
                </div>

                <div className="section">
                    <h2 className="section-title">
                        <i className="fas fa-user-shield"></i>
                        WatchList
                    </h2>
                    <div className="api-grid">

                        <APICard 
                            number="1"
                            title="Get WatchList Items"
                            description={`Retrieve all items in the user's watchList.`}
                            method="GET"
                            endpoint="/users/{userId}/watchList"
                            authRequired={true}
                        />

                        <APICard 
                            number="2"
                            title="Add Item To WatchList"
                            description={`Add a product to the user's watchList. fields:
                            - productId`}
                            method="POST"
                            endpoint="/users/{userId}/watchList"
                            authRequired={true}
                            img={'/addToWatchList.png'}
                        />

                        <APICard 
                            number="3"
                            title="Delete Item From WatchList"
                            description={`Remove a specific item from the user's watchList.`}
                            method="DELETE"
                            endpoint="/users/{userId}/watchList/{productId}"
                            authRequired={true}
                        />
                        
                    </div>
                </div>

            </div>

        </div>
    );
};

export default EcommerceAPI;
