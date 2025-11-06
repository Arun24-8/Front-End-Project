import React, { useState } from "react";

export default function Student_Login({ onNavigate }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSignIn = () => {
    setLoginError("");
    if (!userId.trim() || !password.trim()) {
      setLoginError("Please enter both User ID and Password.");
      return;
    }

    // Simulate authentication: accept any non-empty credentials for dev.
    // Persist minimal student data so Student_Dashboard can load it.
    const student = {
      name: userId.includes(" ") ? userId : `${userId.split(".")[0] || userId}`.replace(/[_\-\.]/g, " "),
      id: userId,
      program: "B.Tech Computer Science",
      semester: "6th Semester",
      year: "2023-2024",
    };
    try {
      localStorage.setItem("studentData", JSON.stringify(student));
    } catch (e) {
      // ignore storage errors
    }

    if (typeof onNavigate === "function") onNavigate("/student");
  };

  return (
    <div className="student-login-page">
      <header className="login-header">
        <div className="header-inner">
          <h1 className="title">
            Welcome to the Student
            <br />
            Portal
          </h1>
          <p className="subtitle">Sign in to access your dashboard.</p>
        </div>
      </header>

      <div className="content-wrap">
        <div className="card-wrap">
          <div className="card">
            <h3 className="card-title">Student Sign In</h3>

            <div className="form-block">
              <div className="field">
                <label className="label" htmlFor="userid">
                  User ID
                </label>
                <input
                  id="userid"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter your User ID"
                  className="input"
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="********"
                  className="input"
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                />
              </div>

              {loginError && <div className="error">{loginError}</div>}

              <button onClick={handleSignIn} className="btn-primary">
                Sign In
              </button>
            </div>

            <p className="footnote">
              Need an account? Contact your administrator.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Student\\Student_login.jsx */
        .student-login-page { min-height:100vh; display:flex; flex-direction:column; align-items:center; padding-bottom:64px; background:#f6f7fb; font-family:Inter,system-ui,Segoe UI,Roboto,Arial; }
        .login-header { width:100%; padding-top:48px; padding-bottom:24px; }
        .header-inner { max-width:960px; margin:0 auto; text-align:center; padding:0 16px; }
        .title { font-size:36px; line-height:1.05; font-weight:800; color:#111827; margin:0; }
        .subtitle { margin-top:12px; color:#6b7280; font-size:14px; }
        .content-wrap { width:100%; padding:0 16px; }
        .card-wrap { max-width:400px; margin:0 auto; }
        .card { background:#fff; border-radius:16px; box-shadow:0 10px 30px rgba(40,44,52,0.08); border:1px solid #e5e7eb; padding:30px 32px; }
        .card-title { font-size:24px; font-weight:700; margin-bottom:24px; text-align:center; color:#111827; }
        .field { margin-bottom:18px; }
        .label { display:block; font-size:13px; font-weight:600; color:#374151; margin-bottom:6px; }
        .input { width:100%; padding:14px 16px; border-radius:12px; border:1px solid #d1d5db; font-size:15px; color:#111827; outline:none; box-shadow:inset 0 1px 3px rgba(0,0,0,0.05); transition:border-color .2s, box-shadow .2s; }
        .input:focus { border-color:#3b82f6; box-shadow:0 0 0 4px rgba(59,130,246,0.12); }
        .error { color:#b91c1c; background:#fee2e2; border:1px solid #fca5a5; padding:12px; border-radius:8px; margin-bottom:18px; font-size:13px; font-weight:500; }
        .btn-primary { width:100%; background:#3b82f6; color:#fff; padding:15px 16px; border-radius:12px; border:none; font-weight:700; font-size:16px; cursor:pointer; box-shadow:0 4px 6px rgba(59,130,246,0.3); transition:transform .1s, background .2s; }
        .btn-primary:hover { background:#2563eb; transform:translateY(-1px); }
        .footnote { margin-top:24px; font-size:13px; color:#6b7280; text-align:center; }
        @media (max-width:640px) { .title{font-size:32px} .card { padding:24px; border-radius:12px } }
      `}</style>
    </div>
  );
}
