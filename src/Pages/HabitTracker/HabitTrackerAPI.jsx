import React, { useState, useEffect } from 'react';
import './HabitTrackerAPI.css';

const HabitTrackerAPI = () => {
    const [showToast, setShowToast] = useState(false);

    const baseUrl = 'https://habit-tracker-eight-iota.vercel.app/api';


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
                    <h1><i className="fas fa-calendar-check"></i> Habit Tracker</h1>
                    <p>Habit Tracker API Documentation With Cookies</p>
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
                            img={"/habit-tracker-media/habit-tracker-register.png"}
                        />
                        <APICard 
                            number="2"
                            title="Login"
                            description="Authenticate a user and obtain a token."
                            method="POST"
                            endpoint="/auth/login"
                            img={"/habit-tracker-media/habit-tracker-login.png"}
                        />
                        <APICard 
                            number="3"
                            title="Get Current User"
                            description="Retrieve details of the currently authenticated user."
                            method="GET"
                            endpoint="/auth/me"
                            authRequired={true}
                            img={"/habit-tracker-media/habit-tracker-getme.png"}
                        />
                        <APICard 
                            number="4"
                            title="Logout"
                            description="Logout the currently authenticated user."
                            method="POST"
                            endpoint="/auth/logout"
                            authRequired={true}
                            img={"/habit-tracker-media/habit-tracker-logout.png"}
                        />
                        <APICard 
                            number="5"
                            title="Update Profile"
                            description="Update the profile information of the authenticated user."
                            method="PATCH"
                            endpoint="/auth/profile"
                            authRequired={true}
                            img={"/habit-tracker-media/habit-tracker-updateProfile.png"}
                        />
                        <APICard 
                            number="6"
                            title="update Password"
                            description="Update the password of the authenticated user."
                            method="PATCH"
                            endpoint="/auth/password"
                            authRequired={true}
                            img={"/habit-tracker-media/habit-tracker-changePassword.png"}
                        />
                        <APICard 
                            number="7"
                            title="Delete Account"
                            description="Delete the account of the authenticated user."
                            method="DELETE"
                            endpoint="/auth/account"
                            authRequired={true}
                            img={"/habit-tracker-media/habit-tracker-deleteAccount.png"}
                        />
                        
                    
                    </div>


                <div className="section" style={{marginTop: '70px'}}>
                    <h2 className="section-title">
                        <i className="fas fa-calendar-check"></i>
                        Habit 
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Add Habit"
                            description="Create a new habit for the authenticated user."
                            method="POST"
                            endpoint="/habits/"
                                authRequired={true}
                            img={"/public/habit-tracker-media/add-habit.png"}
                        />
                        <APICard 
                            number="2"
                            title="get Habits"
                            description="Retrieve all habits for the authenticated user."
                            method="GET"
                            endpoint="/habits/"
                            authRequired={true}
                            img={"/habit-tracker-media/get-habits.png"}
                        />
                        <APICard 
                            number="3"
                            title="get Habit by ID"
                            description="Retrieve a specific habit by its ID for the authenticated user."
                            method="GET"
                            endpoint="/habits/{habitId}"
                            authRequired={true}
                            img={"/public/habit-tracker-media/get-single-habit.png"}
                        />
                        <APICard 
                            number="4"
                            title="Update Habit"
                            description="Update a specific habit by its ID for the authenticated user."
                            method="PATCH"
                            endpoint="/habits/{habitId}"
                            authRequired={true}
                            img={"/habit-tracker-media/update-habit.png"}
                        />
                        <APICard 
                            number="5"
                            title="Delete Habit"
                            description="Delete a specific habit by its ID for the authenticated user."
                            method="DELETE"
                            endpoint="/habits/{habitId}"
                            authRequired={true}
                            img={"/habit-tracker-media/delete-habit.png"}
                        />
                        <APICard 
                            number="6"
                            title="GET Habit Entries"
                            description="Retrieve all entries for a specific habit by its ID."
                            method="GET"
                            endpoint="/habits/{habitId}/entries"
                            authRequired={true}
                            img={"/habit-tracker-media/delete-habit.png"}
                        />
                        </div>
                    </div>
                </div>

                <div className="section" style={{marginTop: '70px'}}>
                    <h2 className="section-title">
                        <i className="fas fa-calendar-check"></i> 
                        Entries
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Add Entries"
                            description="Create a new habit for the authenticated user."
                            method="POST"
                            endpoint="/entries/bulk"
                            authRequired={true}
                            img={"/public/habit-tracker-media/add-entries.png"}
                        />
                        <APICard 
                            number="2"
                            title="get Entries"
                            description="Retrieve all habits for the authenticated user."
                            method="GET"
                            endpoint="/entries/"
                            authRequired={true}
                            img={"/habit-tracker-media/get-entries.png"}
                        />
                        <APICard 
                            number="3"
                            title="Get Today's Entries"
                            description="Retrieve today's entries for the authenticated user."
                            method="GET"
                            endpoint="/entries/today"
                            authRequired={true}
                            img={"/habit-tracker-media/get-today-entry.png"}
                        />
                        <APICard 
                            number="4"
                            title="Update Entry"
                            description="Update today's entries for the authenticated user."
                            method="PATCH"
                            endpoint="/entries/{entryId}"
                            authRequired={true}
                            img={"/habit-tracker-media/update-entry.png"}
                        />
                        <APICard 
                            number="5"
                            title="Delete Entry"
                            description="Delete an entry by its ID for the authenticated user."
                            method="DELETE"
                            endpoint="/entries/{entryId}"
                            authRequired={true}
                            img={"/habit-tracker-media/delete-entry.png"}
                        />
                        
                    
                    </div>
                </div>

                <div className="section" style={{marginTop: '70px'}}>
                    <h2 className="section-title">
                        <i className="fas fa-chart-bar"></i>
                        Analytics
                    </h2>
                    <div className="api-grid">
                        <APICard 
                            number="1"
                            title="Dashboard"
                            description="Get an overview of habit statistics for the authenticated user."
                            method="GET"
                            endpoint="/analytics/dashboard"
                            authRequired={true}
                        />
                        <APICard 
                            number="2"
                            title="Habit Stats"
                            description="Retrieve statistics for a specific habit by its ID."
                            method="GET"
                            endpoint="/analytics/habits/{habitId}/stats"
                            authRequired={true}
                        />
                        <APICard 
                            number="3"
                            title="Get Streaks"
                            description="Retrieve current streaks for all habits of the authenticated user."
                            method="GET"
                            endpoint="/analytics/streaks"
                            authRequired={true}
                        />
                        <APICard 
                            number="4"
                            title="Get Completion Rate"
                            description="Retrieve the overall completion rate of habits for the authenticated user."
                            method="GET"
                            endpoint="/analytics/completion-rate"
                            authRequired={true}
                        />
                        <APICard 
                            number="5"
                            title="Get Trends"
                            description="Retrieve habit completion trends over time for the authenticated user."
                            method="GET"
                            endpoint="/analytics/trends"
                            authRequired={true}
                        />
                        <APICard 
                            number="6"
                            title="Get Calendar Data"
                            description="Retrieve calendar data for a specific month and year."
                            method="GET"
                            endpoint="/analytics/calendar/{yyyy}/{mm}"
                            authRequired={true}
                        />
                        
                    
                    </div>
                </div>



                
                

            </div>

        </div>
    );
};

export default HabitTrackerAPI;
