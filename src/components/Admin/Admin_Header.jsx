import React from "react";

export default function Admin_Header({ title = "Dashboard", user = { name: "Admin", id: "ADM001" } }) {
  const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0,2) : "AD";

  return (
    <header className="admin-topbar">
      <div className="topbar-left">
        <div className="top-bar-title">{title}</div>
      </div>

      <div className="topbar-right">
        <div className="user-profile" aria-label="User info">
          <div className="user-avatar">{initials}</div>
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-id">{user.id}</div>
          </div>
        </div>
      </div>

      <style>{`
        .admin-topbar { display:flex; justify-content:space-between; align-items:center; padding:16px 24px; background:#fff; box-shadow:0 2px 8px rgba(0,0,0,0.06); animation: fadeDown 300ms both; }
        .top-bar-title { font-size:20px; color:#2c3e50; font-weight:700; }
        .user-profile { display:flex; gap:12px; align-items:center; }
        .user-avatar { width:40px; height:40px; border-radius:50%; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; display:flex; justify-content:center; align-items:center; font-weight:700; }
        .user-name { font-weight:700; font-size:13px; color:#333; }
        .user-id { font-size:12px; color:#666; }
        @keyframes fadeDown { from { transform:translateY(-8px); opacity:0 } to { transform:translateY(0); opacity:1 } }
      `}</style>
    </header>
  );
}
