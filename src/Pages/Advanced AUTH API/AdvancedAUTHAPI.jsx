import { useEffect } from "react";
import "./AdvancedAUTHAPI.css";
import { SiPostman } from "react-icons/si";


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

    {img && <img src={img} alt={title} className="api-image" />}

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
      { threshold: 0.1 }
    );

    document.querySelectorAll(".api-card").forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="api">
      <div className="container">

        {/* Header */}
        <header className="header-api">
          <h1>
            <i className="fas fa-share-alt"></i> Advanced AUTH API Documentation
          </h1>
        </header>

        {/* GitHub & Postman */}
        <div className="doc-links">
          <a
            href="https://github.com/AhmdBlack0/Advanced-AUTH-Nodejs"
            target="_blank"
            rel="noopener noreferrer"
            className="doc-link"
          >
            <i className="fab fa-github"></i> GitHub
          </a>

          <a
            href="https://script-6747.postman.co/workspace/dash~90a4e8db-69e4-4ed9-963c-847e0ddb1ace/request/35971683-0f59451a-d4e3-440b-9708-55d329192ae9"
            target="_blank"
            rel="noopener noreferrer"
            className="doc-link postman"
          >
            <SiPostman className="postman-icon"/> Postman
          </a>
        </div>

        {/* Base URL */}
        <section className="base-url">
          <h3>
            <i className="fas fa-globe"></i> Base URL
          </h3>
          <code>{baseUrl}</code>
        </section>

        {/* AUTH Section */}
        <section className="section">
          <h2 className="section-title">
            <i className="fas fa-user-lock"></i> AUTH
          </h2>

          <div className="api-grid">
            <APICard number="1" title="Register User" description="Create a new user account." method="POST" endpoint="/register" />
            <APICard number="2" title="Login User" description="Authenticate a user." method="POST" endpoint="/login" />
            <APICard number="3" title="Get Me" description="Get user profile." method="GET" endpoint="/me" authRequired />
            <APICard number="4" title="Update Me" description="Update user profile." method="PATCH" endpoint="/update-me" authRequired />
            <APICard number="5" title="Verify Email" description="Verify email address." method="POST" endpoint="/verify-email" img="/verifyEmail.png" />
            <APICard number="6" title="Resend Verification" description="Resend verification code." method="POST" endpoint="/resend-verification" />
            <APICard number="7" title="Change Password" description="Change password." method="POST" endpoint="/reset-password" img="/change-password.png" authRequired />
            <APICard number="8" title="Forget Password" description="Send reset code." method="POST" endpoint="/forget-password" />
            <APICard number="9" title="Reset Password" description="Reset password." method="POST" endpoint="/reset-forget-password" />
            <APICard number="10" title="Logout User" description="Logout user." method="POST" endpoint="/logout" authRequired />
            <APICard number="11" title="Delete Me" description="Delete account." method="DELETE" endpoint="/delete-me" authRequired />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AdvancedAUTHAPI;
