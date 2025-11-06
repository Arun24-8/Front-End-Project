import React, { useState } from "react";

const Home_Dashboard = ({ onNavigate }) => {
  const [showRoles, setShowRoles] = useState(false);

  const handleLoginClick = () => setShowRoles(true);
  const handleHomeClick = () => setShowRoles(false);

  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>Student Portal</h1>
          <p>Welcome to the University Management System</p>
        </div>

        {showRoles && (
          <button className="home-btn" onClick={handleHomeClick}>
            🏠 Home
          </button>
        )}
      </header>

      <main className="main-content">
        {!showRoles ? (
          <div className="login-screen">
            <h2 className="welcome-text">👋 Welcome to the Student Portal</h2>
            <p className="description">
              Access your personalized dashboard and explore everything you need —
              courses, grades, and progress — all in one place.
            </p>
            <button className="login-btn" onClick={handleLoginClick}>
              Get Started →
            </button>
          </div>
        ) : (
          <div className="center-content">
            <h2 className="text-default">Select Your Dashboard</h2>
            <p className="text-gray">
              Choose your role to continue to the appropriate portal.
            </p>

            <div className="card-container">
              <div
                className="card blue"
                role="button"
                aria-label="Student Login"
                onClick={() => onNavigate("/student/login")}
              >
                <div className="emoji">🎓</div>
                <h3>Student</h3>
                <p style={{ color: "black" }}>
                  Access your courses, grades, and assignments easily.
                </p>
              </div>

              <div
                className="card green"
                role="button"
                aria-label="Faculty Login"
                onClick={() => onNavigate("/faculty/login")}
              >
                <div className="emoji">👨‍🏫</div>
                <h3>Faculty</h3>
                <p style={{ color: "black" }}>
                  Manage classes, upload materials, and evaluate students.
                </p>
              </div>

              <div
                className="card purple"
                role="button"
                aria-label="Admin Login"
                onClick={() => onNavigate("/admin/login")}
              >
                <div className="emoji">⚙️</div>
                <h3>Admin</h3>
                <p style={{ color: "black" }}>
                  Oversee platform settings and manage user accounts.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #eef2ff, #f5f3ff);
          color: #1f2937;
        }

        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        header {
          position: relative;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 30px 20px;
          text-align: center;
        }

        .header-content h1 {
          margin: 0;
          font-size: 32px;
        }

        .header-content p {
          margin-top: 5px;
          color: #e0e7ff;
        }

        .home-btn {
          position: absolute;
          right: 20px;
          top: 25px;
          background-color: white;
          color: #4f46e5;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          padding: 10px 18px;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .home-btn:hover {
          background-color: #f3f4f6;
          transform: translateY(-2px);
        }

        .main-content {
          flex-grow: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 40px 20px;
        }

        /* --- Login screen --- */
        .login-screen {
          text-align: center;
          max-width: 480px;
          background: white;
          padding: 40px 30px;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .welcome-text {
          font-size: 30px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .description {
          font-size: 16px;
          color: #374151;
          margin-bottom: 30px;
          line-height: 1.6;
        }

        .login-btn {
          background: linear-gradient(to right, #4f46e5, #7c3aed);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 14px 28px;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .login-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(0,0,0,0.15);
        }

        /* --- Role cards --- */
        .center-content {
          text-align: center;
          max-width: 1000px;
          width: 100%;
        }

        .text-default {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 10px;
        }

        .text-gray {
          color: #6b7280;
          margin-bottom: 30px;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
          margin-top: 20px;
        }

        .card {
          border-radius: 16px;
          padding: 30px;
          background: white;
          color: black;
          border: 2px solid transparent;
          transition: transform 0.3s, box-shadow 0.3s, border 0.3s;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.15);
          border: 2px solid #6366f1;
        }

        .emoji {
          font-size: 48px;
          margin-bottom: 15px;
        }

        .card h3 {
          font-size: 22px;
          margin-bottom: 10px;
        }

        .card p {
          font-size: 15px;
          line-height: 1.6;
          margin: 10px 0;
        }

        /* NEW: ensure links wrapping cards don't underline and card text has no underline */
        .card-link {
          text-decoration: none;
          color: inherit;
          display: block;
        }

        .card, .card h3, .card p {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Home_Dashboard;
