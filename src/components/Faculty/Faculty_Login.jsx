import React, { useState } from "react";

export default function Faculty_Login({ onNavigate }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleSignIn = () => {
    setLoginError("");
    if (!userId.trim() || !password.trim()) {
      setLoginError("Please enter both User ID and Password.");
      return;
    }
    // Simulated faculty login
    if (typeof onNavigate === "function") onNavigate("/faculty");
  };

  return (
    <div className="faculty-login-page">
      <header className="login-header">
        <div className="header-inner">
          <h1 className="title">Faculty Portal</h1>
          <p className="subtitle">Sign in to access faculty tools.</p>
        </div>
      </header>

      <div className="content-wrap">
        <div className="card-wrap">
          <div className="card">
            <h3 className="card-title">Faculty Sign In</h3>

            <div className="form-block">
              <div className="field">
                <label className="label" htmlFor="faculty-userid">
                  User ID
                </label>
                <input
                  id="faculty-userid"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="Enter faculty User ID"
                  className="input"
                  onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
                />
              </div>

              <div className="field">
                <label className="label" htmlFor="faculty-password">
                  Password
                </label>
                <input
                  id="faculty-password"
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
              For faculty access contact the administration.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        /* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Faculty\\Faculty_Login.jsx */
        .faculty-login-page { min-height:100vh; display:flex; flex-direction:column; align-items:center; background:#f6f7fb; padding-bottom:64px; font-family:Inter,system-ui,Segoe UI,Roboto,Arial; }
        .login-header { width:100%; padding:48px 0 24px; }
        .header-inner { max-width:960px; margin:0 auto; text-align:center; padding:0 16px; }
        .title { font-size:32px; font-weight:800; color:#111827; margin:0; }
        .subtitle { margin-top:8px; color:#6b7280; }
        .content-wrap { width:100%; padding:0 16px; }
        .card-wrap { max-width:420px; margin:0 auto; }
        .card { background:#fff; border-radius:12px; padding:28px; border:1px solid #e5e7eb; box-shadow:0 10px 30px rgba(0,0,0,0.06); }
        .card-title { font-size:20px; text-align:center; margin-bottom:18px; font-weight:700; color:#111827; }
        .field{margin-bottom:14px} .label{display:block;font-size:13px;color:#374151;margin-bottom:6px;font-weight:600}
        .input{width:100%;padding:12px 14px;border-radius:10px;border:1px solid #d1d5db;outline:none}
        .input:focus{border-color:#1e40af;box-shadow:0 0 0 4px rgba(30,64,175,0.08)}
        .error{color:#b91c1c;background:#fee2e2;padding:10px;border-radius:8px;margin-bottom:12px}
        .btn-primary{width:100%;background:#1e40af;color:#fff;padding:12px;border-radius:10px;border:none;font-weight:700;cursor:pointer}
        .btn-primary:hover{background:#153e75}
        .footnote{margin-top:12px;color:#6b7280;text-align:center;font-size:13px}
      `}</style>
    </div>
  );
}
