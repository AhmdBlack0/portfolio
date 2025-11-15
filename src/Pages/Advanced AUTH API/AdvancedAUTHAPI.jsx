import { useEffect } from "react";
import "./AdvancedAUTHAPI.css";

// ✅ Reusable API Card Component
const APICard = ({ number, title, description, method, img, endpoint, authRequired, adminOnly }) => (
  <div className="api-card">
    <h3 className="api-header">
      <span className="api-number">{number}</span> {title}
    </h3>
    <p className="api-description">{description}</p>

    <div className="api-endpoint">
      <span className={`method-badge ${method.toLowerCase()}-req`}>{method}</span>
      <code className="endpoint-url">{endpoint}</code>
    </div>

    {img && <img src={img} alt={`${title} example`} className="api-image" />}

    {(authRequired || adminOnly) && (
      <div className="auth-note">
        <i className={adminOnly ? "fas fa-shield-alt" : "fas fa-lock"}></i>
        {adminOnly ? " Admin privileges required" : " Authentication required"}
      </div>
    )}
  </div>
);

// ✅ Main Component
const AdvancedAUTHAPI = () => {
  const baseUrl = "https://advanced-auth-nodejs-16ms.vercel.app/api/auth/";

  // ✨ Fade-in animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = document.querySelectorAll(".api-card");
    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.transform = "translateY(20px)";
      card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="api">
      <div className="container">
        {/* Header Section */}
        <header className="header-api">
          <h1>
            <i className="fas fa-share-alt"></i> Advanced AUTH API Documentation 
          </h1>
        </header>

        {/* Base URL */}
        <section className="base-url">
          <h3>
            <i className="fas fa-globe"></i> Base URL
          </h3>
          <code>{baseUrl}</code>
        </section>

        {/* ===== AUTH SECTION ===== */}
        <section className="section">
          <h2 className="section-title">
            <i className="fas fa-user-lock"></i> AUTH
          </h2>
          <div className="api-grid">
            <APICard
              number="1"
              title="Register User"
              description="Create a new user account with email, password, and profile information."
              method="POST"
              endpoint="/register"
            />
            <APICard 
              number="2"
              title="Login User"
              description="Authenticate a user with email and password."
              method="POST"
              endpoint="/login"
            />
            <APICard 
              number="3"
              title="Get Me"
              description="Retrieve profile info of the authenticated user."
              method="GET"
              endpoint="/me"
              authRequired
            />
            <APICard 
              number="4"
              title="Update Me"
              description="Update the profile info of the authenticated user."
              method="PATCH"
              endpoint="/update-me"
              authRequired
            />
            <APICard 
              number="5"
              title="Verify Email"
              description="Verify a user's email address using a verification code."
              method="POST"
              endpoint="/verify-email"
              img="/verifyEmail.png"
            />
            <APICard 
              number="6"
              title="Resend Verification Code"
              description="Resend the email verification code."
              method="POST"
              endpoint="/resend-verification"
            />
            <APICard 
              number="7"
              title="Change Password"
              description="Change the user's password."
              method="POST"
              endpoint="/reset-password"
              img="/change-password.png"
              authRequired
            />
            <APICard 
              number="8"
              title="Forget Password"
              description="Send reset code to the user's email."
              method="POST"
              endpoint="/forget-password"
              img="/forget-password.png"
            />
            <APICard 
              number="9"
              title="Reset Password"
              description="Reset password using reset code."
              method="POST"
              endpoint="/reset-forget-password"
              img="/reset-password.png"
            />
            <APICard 
              number="10"
              title="Logout User"
              description="Logout the authenticated user."
              method="POST"
              endpoint="/logout"
              authRequired
            />
            <APICard 
              number="11"
              title="Delete Me"
              description="Delete the authenticated user account."
              method="DELETE"
              endpoint="/delete-me"
              authRequired />
          </div>
        </section>




      </div>
    </div>
  );
};

export default AdvancedAUTHAPI;
