import React, { useState, useEffect } from "react";

const Home_Dashboard = ({ onNavigate }) => {
  const [showRoles, setShowRoles] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "" });

  const handleLoginClick = () => setShowRoles(true);
  const handleHomeClick = () => setShowRoles(false);

  useEffect(() => {
    function handleGlobalClick(e) {
      const btn =
        e.target.closest &&
        (e.target.closest('[data-action="save-attendance"]') ||
          e.target.closest(".save-attendance"));
      if (!btn) return;
      const cls = btn.dataset.classId || btn.getAttribute("data-class") || null;
      const date = btn.dataset.date || new Date().toISOString().slice(0, 10);
      const record = { class: cls, date, savedAt: new Date().toISOString() };
      try {
        const raw = localStorage.getItem("attendanceRecords");
        const arr = raw ? JSON.parse(raw) : [];
        arr.push(record);
        localStorage.setItem("attendanceRecords", JSON.stringify(arr));
      } catch (err) {
        // ignore storage errors
      }
      setToast({ show: true, msg: "Attendance saved" });
      setTimeout(() => setToast({ show: false, msg: "" }), 1800);
    }
    document.addEventListener("click", handleGlobalClick);
    return () => document.removeEventListener("click", handleGlobalClick);
  }, []);
  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>University Portal</h1>
          <p>Welcome to the University Management System</p>
        </div>

        {showRoles && (
          <button className="home-btn" onClick={handleHomeClick}>
            🏠 Home
          </button>
        )}
      </header>

      <main className="main-content split">
        <div className="left-panel" aria-hidden>
          <div className="left-inner">
            <img
              src="/src/components/Home/kl logo.jpg"
              alt="KLU logo"
              className="big-logo"
            />
          </div>
        </div>

        <div className="right-panel">
          {!showRoles ? (
            <div className="login-screen card">
              <h2 className="welcome-text">👋 Welcome to the University Portal</h2>
              <p className="description">
                Access your personalized dashboard and explore everything you need —
                courses, grades, and progress — all in one place.
              </p>
              <button className="login-btn" onClick={handleLoginClick}>
                Get Started →
              </button>
            </div>
          ) : (
            <div className="center-content card">
              <h2 className="text-default">Select Your Dashboard</h2>
              <p className="text-gray">
                Choose your role to continue to the appropriate portal.
              </p>

              <div className="card-container">
                <div
                  className="card role"
                  role="button"
                  aria-label="Student Login"
                  onClick={() => onNavigate("/student/login")}
                >
                  <div className="emoji">🎓</div>
                  <h3>Student</h3>
                  <p>Access your courses, grades, and assignments easily.</p>
                </div>

                <div
                  className="card role"
                  role="button"
                  aria-label="Faculty Login"
                  onClick={() => onNavigate("/faculty/login")}
                >
                  <div className="emoji">👨‍🏫</div>
                  <h3>Faculty</h3>
                  <p>Manage classes, upload materials, and evaluate students.</p>
                </div>

                <div
                  className="card role"
                  role="button"
                  aria-label="Admin Login"
                  onClick={() => onNavigate("/admin/login")}
                >
                  <div className="emoji">⚙️</div>
                  <h3>Admin</h3>
                  <p>Oversee platform settings and manage user accounts.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <div className={`global-toast ${toast.show ? "show" : ""}`} role="status" aria-live="polite">{toast.msg}</div>

      <style>{`
        *{box-sizing:border-box}
        body{margin:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;background:linear-gradient(135deg,#eef2ff,#f5f3ff);color:#1f2937}
        .app-container{display:flex;flex-direction:column;min-height:100vh}
        header{position:relative;background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);color:#fff;padding:28px 20px;text-align:center;overflow:hidden}
        .header-content{position:relative;z-index:2}
        .header-content h1{margin:0;font-size:28px}
        .header-content p{margin:6px 0 0;color:rgba(224,231,255,0.95)}
        .home-btn{position:absolute;right:20px;top:22px;background:#fff;color:#4f46e5;font-weight:700;border:none;border-radius:8px;padding:8px 14px;cursor:pointer;z-index:3;box-shadow:0 8px 20px rgba(2,6,23,0.08)}
        .main-content.split{display:flex;gap:24px;padding:36px 20px;flex:1;align-items:stretch}

        /* updated: make left logo area match the right example (larger, centered) */
        .left-panel{
          flex:1 1 60%;
          background:#ffffff;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          border-radius:14px;
          padding:48px; /* more breathing room so logo appears centered like example */
          position:relative;
          overflow:hidden;
        }
        .left-inner{
          display:flex;
          align-items:center;
          justify-content:center;
          flex:1;
          padding:8px;
          width:100%;
          height:100%;
        }
        .big-logo{
          display:block;
          width:auto;
          max-width:520px;    /* match the large visual in the second screenshot */
          max-height:80vh;    /* allow tall viewport usage but keep aspect ratio */
          height:auto;
          object-fit:contain;
          opacity:1;
          filter:none;
        }
        .left-footer{font-size:12px;color:rgba(15,23,42,0.8);margin-top:12px}

        .right-panel{flex:0 0 420px;display:flex;align-items:center;justify-content:center}
        .card{background:#fff;border-radius:12px;padding:28px;box-shadow:0 18px 40px rgba(2,6,23,0.08);width:100%;max-width:420px}
        .login-screen{max-width:420px;text-align:center}
        .welcome-text{font-size:22px;margin:0 0 8px 0}
        .description{color:#374151;margin:0 0 16px 0;line-height:1.5}
        .login-btn{background:linear-gradient(90deg,#4f46e5,#7c3aed);color:#fff;border:none;border-radius:8px;padding:10px 16px;font-weight:700;cursor:pointer}
        .center-content .card-container{display:grid;grid-template-columns:1fr;gap:12px;margin-top:12px}
        .role{display:flex;flex-direction:row;gap:12px;align-items:center}
        .role .emoji{font-size:28px;width:48px;height:48px;border-radius:8px;display:flex;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.02))}
        .role h3{margin:0;font-size:16px}
        .role p{margin:0;color:#374151;font-size:14px}

        .global-toast{
          position:fixed;
          bottom:24px;
          left:50%;
          transform:translateX(-50%) translateY(12px);
          background:rgba(15,23,42,0.95);
          color:#fff;
          padding:10px 16px;
          border-radius:10px;
          box-shadow:0 12px 30px rgba(2,6,23,0.18);
          opacity:0;
          pointer-events:none;
          transition:opacity .2s ease, transform .2s ease;
          z-index:9999;
        }
        .global-toast.show { opacity:1; transform:translateX(-50%) translateY(0); pointer-events:auto; }

        @media (max-width:900px){
          .main-content.split{flex-direction:column;gap:18px;padding:24px}
          .left-panel{flex:0 0 260px;border-radius:12px;padding:18px}
          .right-panel{flex:1 1 auto}
        }
      `}</style>
    </div>
  );
};

export default Home_Dashboard;