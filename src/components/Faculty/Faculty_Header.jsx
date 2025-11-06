import React from "react";

export default function Faculty_Header({ title = "Dashboard", user = { name: "Dr. Priya Sharma", id: "FAC001" }, onLogout }) {
  return (
    <header className="faculty-topbar" role="banner">
      <div className="topbar-left">
        <div className="logo-box">KL</div>
        <div className="title-block">
          <div className="app-title">KL University</div>
          <div className="app-sub">Student Information System</div>
        </div>
      </div>

      <div className="topbar-right">
        <div className="page-title" aria-live="polite">{title}</div>
        <div className="user-profile" role="group" aria-label="user info">
          <div className="user-avatar" aria-hidden>{user.name ? user.name.charAt(0) : "U"}</div>
          <div className="user-meta">
            <div className="user-name">{user.name}</div>
            <div className="user-id">ID: {user.id}</div>
          </div>
          <button className="logout-btn" onClick={onLogout} aria-label="Logout">Logout</button>
        </div>
      </div>

      <style>{`
        .faculty-topbar {
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:14px 20px;
          background: #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.06);
          animation: fadeInDown 300ms ease both;
          gap:12px;
        }
        .topbar-left { display:flex; align-items:center; gap:12px; }
        .logo-box { width:48px; height:48px; background:#fff; color:#1e3a8a; border-radius:6px; display:flex; align-items:center; justify-content:center; font-weight:700; box-shadow:0 1px 3px rgba(0,0,0,0.04); }
        .title-block .app-title { font-weight:700; font-size:14px; }
        .title-block .app-sub { font-size:12px; color:#6b7280; }

        .topbar-right { display:flex; align-items:center; gap:12px; }
        .page-title { font-size:18px; color:#1e3a8a; font-weight:700; margin-right:8px; }

        .user-profile { display:flex; align-items:center; gap:10px; }
        .user-avatar { width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; }
        .user-meta .user-name { font-weight:700; font-size:13px; }
        .user-meta .user-id { font-size:12px; color:#6b7280; }
        .logout-btn { background:#ef4444; color:#fff; border:none; padding:8px 12px; border-radius:8px; cursor:pointer; font-weight:700; }

        @keyframes fadeInDown { from { transform: translateY(-8px); opacity:0 } to { transform: translateY(0); opacity:1 } }
      `}</style>
    </header>
  );
}
