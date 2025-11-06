import React, { useState } from "react";

export default function Admin_Login({ onNavigate }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setErr("");
    if (!userId.trim() || !password.trim()) {
      setErr("Please enter User ID and Password.");
      return;
    }
    setLoading(true);
    // simulated auth delay
    await new Promise((r) => setTimeout(r, 450));
    setLoading(false);
    // for dev accept any non-empty credentials
    if (typeof onNavigate === "function") onNavigate("/admin");
  };

  return (
    <div className="login-root">
      <div className="login-wrap">
        <div className="login-card" role="region" aria-label="Admin sign in">
          <div className="brand">
            <div className="logo">KL</div>
            <div className="brand-text">
              <div className="brand-title">Admin Portal</div>
              <div className="brand-sub">Manage users and system settings</div>
            </div>
          </div>

          <h3 className="heading">Sign in to your admin account</h3>

          <div className="form">
            <label className="label">
              User ID
              <input
                className="input"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="admin@kl.edu"
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              />
            </label>

            <label className="label">
              Password
              <input
                className="input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
              />
            </label>

            {err && <div className="error">{err}</div>}

            <button
              className={`btn ${loading ? "btn-loading" : ""}`}
              onClick={handleSignIn}
              disabled={loading}
              aria-busy={loading}
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>

            <div className="hint">
              Tip: any non-empty credentials work for development.
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Admin\\Admin_Login.jsx */
        .login-root { min-height: calc(100vh - 40px); display:flex; align-items:center; justify-content:center; padding:24px; box-sizing:border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg,#eef2ff 0%,#f8fafc 100%); }
        .login-wrap { width:100%; max-width:520px; }
        .login-card { background: #fff; border-radius: 14px; padding: 22px; box-shadow: 0 12px 30px rgba(2,6,23,0.08); transform: translateY(6px); animation: cardIn 360ms ease-out both; }
        @keyframes cardIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
        .brand { display:flex; align-items:center; gap:14px; margin-bottom:12px; }
        .logo { width:56px; height:56px; background:#1e3a8a; color:#fff; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px; }
        .brand-title { font-weight:800; color:#0f172a; font-size:18px; }
        .brand-sub { font-size:13px; color:#6b7280; }
        .heading { margin: 8px 0 16px 0; color:#0f172a; }
        .form { display:flex; flex-direction:column; gap:12px; }
        .label { font-size:13px; color:#374151; display:flex; flex-direction:column; gap:8px; font-weight:600; }
        .input { padding:12px 14px; border-radius:10px; border:1px solid #e6eef8; outline:none; box-shadow: inset 0 1px 2px rgba(2,6,23,0.03); transition: box-shadow 160ms, border-color 160ms, transform 160ms; font-size:15px; }
        .input:focus { border-color:#3b82f6; box-shadow: 0 6px 18px rgba(59,130,246,0.08); transform: translateY(-1px); }
        .error { background:#fff5f5; color:#b91c1c; border:1px solid #fecaca; padding:10px; border-radius:8px; font-weight:600; }
        .btn { margin-top:6px; background: linear-gradient(90deg,#1e3a8a,#3b82f6); color:#fff; border:none; padding:12px 14px; font-weight:800; border-radius:12px; cursor:pointer; transition: transform 120ms ease, box-shadow 120ms ease; box-shadow: 0 8px 24px rgba(59,130,246,0.12); }
        .btn:hover { transform: translateY(-2px); }
        .btn:active { transform: translateY(0); }
        .btn-loading { opacity:0.95; }
        .hint { color:#6b7280; font-size:13px; margin-top:8px; }
        @media (max-width:600px) { .login-card { padding:18px; } }
      `}</style>
    </div>
  );
}
