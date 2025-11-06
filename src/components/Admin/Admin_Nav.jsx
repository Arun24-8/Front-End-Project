import React from "react";

const items = [
  { id: "dashboard", label: "Dashboard", icon: "🏠" },
  { id: "users", label: "User Management", icon: "👥" },
  { id: "academics", label: "Academic Management", icon: "🎓" },
  { id: "library", label: "Library Management", icon: "📚" },
  { id: "hostel", label: "Hostel Management", icon: "🏠" },
  { id: "transport", label: "Transport Management", icon: "🚌" },
  { id: "events", label: "Events & Activities", icon: "🎉" },
  { id: "settings", label: "System Settings", icon: "⚙️" },
];

export default function Admin_Nav({ active, onNavigate, institution }) {
  return (
    <aside
      className="admin-sidebar"
      aria-label="Admin navigation"
      role="navigation"
    >
      <div className="sidebar-header" aria-hidden={false}>
        <h2 id="app-title">{institution || "Admin Dashboard"}</h2>
        <p id="institution-name">{institution || "Institution"}</p>
      </div>

      <ul className="nav-list" role="menu" aria-label="Main navigation">
        {items.map((it, idx) => (
          <li
            key={it.id}
            className={`nav-item ${active === it.id ? "active" : ""}`}
            role="menuitem"
            tabIndex={0}
            onClick={() => onNavigate(it.id)}
            onKeyDown={(e) => e.key === "Enter" && onNavigate(it.id)}
            style={{ animationDelay: `${idx * 80}ms` }} // staggered entrance
          >
            <span className="nav-item-icon" aria-hidden>
              {it.icon}
            </span>
            <span className="nav-item-text">{it.label}</span>
          </li>
        ))}
      </ul>

      <style>{`
        :root {
          --sidebar-w: 280px;
          --bg-start: #2c3e50;
          --bg-end: #34495e;
          --accent: #3498db;
          --text: #ffffff;
          --item-hover-bg: rgba(255,255,255,0.035);
          --active-bg: rgba(255,255,255,0.06);
          --ease: cubic-bezier(.22,.9,.26,1);
          --shadow: 4px 8px 24px rgba(2,6,23,0.12);
        }

        .admin-sidebar {
          width: var(--sidebar-w);
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, var(--bg-start), var(--bg-end));
          color: var(--text);
          box-shadow: var(--shadow);
          padding-bottom: 20px;
          min-height: 100vh;
          border-right: 1px solid rgba(0,0,0,0.06);
          overflow: hidden;
          position: relative;
          isolation: isolate;
          /* entrance */
          animation: sidebarFade 420ms var(--ease) both;
        }

        .sidebar-header {
          padding: 20px 18px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          backdrop-filter: blur(2px);
        }

        .sidebar-header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 0.2px;
        }

        .sidebar-header p {
          margin-top: 6px;
          opacity: 0.92;
          font-size: 13px;
          color: rgba(255,255,255,0.9);
        }

        .nav-list {
          list-style: none;
          margin: 8px 0;
          padding: 6px 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          cursor: pointer;
          border-left: 4px solid transparent;
          transition:
            transform 220ms var(--ease),
            background-color 220ms var(--ease),
            box-shadow 220ms var(--ease),
            border-left-color 220ms var(--ease);
          outline: none;
          user-select: none;
          transform-origin: left center;
          /* item entrance animation */
          opacity: 0;
          transform: translateX(-8px);
          animation: itemSlideIn 420ms var(--ease) both;
        }

        .nav-item:focus {
          box-shadow: inset 0 0 0 3px rgba(255,255,255,0.03);
        }

        .nav-item:hover {
          background: var(--item-hover-bg);
          border-left-color: var(--accent);
          transform: translateX(6px) scale(1.01);
        }

        .nav-item.active {
          background: var(--active-bg);
          border-left-color: var(--accent);
          font-weight: 700;
          transform: translateX(8px);
          box-shadow: 0 6px 14px rgba(0,0,0,0.06);
        }

        .nav-item-icon {
          width: 28px;
          height: 28px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:16px;
          border-radius:6px;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          box-shadow: 0 2px 6px rgba(2,6,23,0.04) inset;
        }

        .nav-item-text {
          font-size: 15px;
          color: #f7fbff;
          white-space: nowrap;
        }

        /* Animations */
        @keyframes sidebarFade {
          from { transform: translateX(-12px); opacity: 0; }
          to   { transform: translateX(0); opacity: 1; }
        }
        @keyframes itemSlideIn {
          from { opacity: 0; transform: translateX(-8px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* prefers-reduced-motion support */
        @media (prefers-reduced-motion: reduce) {
          .admin-sidebar { animation: none; }
          .nav-item { animation: none !important; transition: none; transform: none; }
        }

        /* Mobile adjustments */
        @media (max-width: 900px) {
          .admin-sidebar { width: 100%; display:flex; flex-direction:row; gap:6px; overflow-x:auto; padding:8px; align-items:center; }
          .sidebar-header { display:none; }
          .nav-list { flex-direction:row; gap:8px; padding:0; }
          .nav-item { padding:10px 12px; border-left: none; border-bottom: 3px solid transparent; }
          .nav-item.active { transform: none; border-bottom-color: var(--accent); }
        }
      `}</style>
    </aside>
  );
}
