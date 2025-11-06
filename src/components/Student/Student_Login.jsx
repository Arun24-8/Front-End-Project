import React, { useState } from "react";

export default function Student_Login({ onNavigate }) {
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
    await new Promise((r) => setTimeout(r, 450));
    setLoading(false);

    // save minimal student info for dashboard
    const student = {
      name: userId.includes(" ") ? userId : userId.split("@")[0] || userId,
      id: userId,
      program: "B.Tech Computer Science",
      semester: "6th Semester",
      year: "2023-2024",
    };
    try {
      localStorage.setItem("studentData", JSON.stringify(student));
    } catch {}

    if (typeof onNavigate === "function") onNavigate("/student");
  };

  return (
    <div className="login-root">
      <div className="login-wrap">
        <div className="login-card" role="region" aria-label="Student sign in">
          <div className="brand">
            <div className="logo">KL</div>
            <div className="brand-text">
              <div className="brand-title">Student Portal</div>
              <div className="brand-sub">
                Access your courses, grades and timetable
              </div>
            </div>
          </div>

          <h3 className="heading">Welcome back — sign in to continue</h3>

          <div className="form">
            <label className="label">
              User ID
              <input
                className="input"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                placeholder="student@kl.edu or 2024CSE001"
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
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>

            <div className="hint">Forgot password? Contact admin.</div>
          </div>
        </div>
      </div>

      <style>{`
        /* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Student\\Student_login.jsx */
        .login-root { min-height: calc(100vh - 40px); display:flex; align-items:center; justify-content:center; padding:24px; box-sizing:border-box; background: linear-gradient(135deg,#f7fbff 0%,#f8fafc 100%); }
        .login-wrap { width:100%; max-width:520px; }
        .login-card { background:#fff; border-radius:14px; padding:22px; box-shadow:0 12px 30px rgba(2,6,23,0.06); animation: cardIn 420ms cubic-bezier(.2,.9,.2,1) both; }
        @keyframes cardIn { from { opacity:0; transform: translateY(18px); } to { opacity:1; transform: translateY(0); } }
        .brand { display:flex; align-items:center; gap:14px; margin-bottom:12px; }
        .logo { width:56px; height:56px; background:#1e3a8a; color:#fff; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:18px; }
        .brand-title { font-weight:800; color:#0f172a; font-size:18px; }
        .brand-sub { font-size:13px; color:#6b7280; }
        .heading { margin:8px 0 16px 0; color:#0f172a; }
        .form { display:flex; flex-direction:column; gap:12px; }
        .label { font-size:13px; color:#374151; display:flex; flex-direction:column; gap:8px; font-weight:600; }
        .input { padding:12px 14px; border-radius:10px; border:1px solid #e6eef8; outline:none; transition: box-shadow 160ms, border-color 160ms, transform 160ms; }
        .input:focus { border-color:#3b82f6; box-shadow: 0 8px 22px rgba(59,130,246,0.08); transform: translateY(-1px); }
        .error { background:#fff5f5; color:#b91c1c; border:1px solid #fecaca; padding:10px; border-radius:8px; font-weight:600; }
        .btn { margin-top:6px; background: linear-gradient(90deg,#0f172a,#3b82f6); color:#fff; border:none; padding:12px 14px; font-weight:800; border-radius:12px; cursor:pointer; box-shadow:0 10px 30px rgba(37,99,235,0.12); transition: transform 120ms ease; }
        .btn:hover { transform: translateY(-2px); }
        .hint { color:#6b7280; font-size:13px; margin-top:8px; }
        @media (max-width:600px) { .login-card { padding:18px; } }
      `}</style>
    </div>
  );
}
