import React from "react";

const items = [
  { id: "dashboard", text: "Dashboard", icon: "🏠" },
  { id: "profile", text: "My Profile", icon: "👤" },
  { id: "courses", text: "My Courses", icon: "📚" },
  { id: "students", text: "Student Management", icon: "👥" },
  { id: "attendance", text: "Attendance", icon: "✅" },
  { id: "assignments", text: "Assignments & Exams", icon: "📝" },
  { id: "grades", text: "Grades Management", icon: "💯" },
  { id: "communication", text: "Communication", icon: "📧" },
  { id: "settings", text: "Settings", icon: "⚙️" },
];

export default function Faculty_Nav({ active, onNavigate }) {
  return (
    <aside className="faculty-sidebar" aria-label="Faculty navigation">
      <div className="sidebar-header">
        <h2>Faculty Portal</h2>
        <p>Academic Year 2024-25</p>
      </div>

      <nav aria-label="Main">
        <ul className="nav-list">
          {items.map((it) => (
            <li
              key={it.id}
              className={`nav-item ${active === it.id ? "active" : ""}`}
              data-id={it.id}
              role="button"
              tabIndex={0}
              onClick={() => onNavigate(it.id)}
              onKeyDown={(e) => e.key === "Enter" && onNavigate(it.id)}
            >
              <span className="nav-item-icon" aria-hidden>
                {it.icon}
              </span>
              <span className="nav-item-text">{it.text}</span>
            </li>
          ))}
        </ul>
      </nav>

      <style>{`
        .faculty-sidebar {
          width: 280px;
          background: linear-gradient(180deg,#1e3c72 0%,#2a5298 100%);
          color: #fff;
          display: flex;
          flex-direction: column;
          padding-bottom: 20px;
          animation: slideInLeft 420ms cubic-bezier(.22,.9,.26,1) both;
          box-shadow: 4px 0 10px rgba(0,0,0,0.06);
        }
        .sidebar-header { padding: 22px 18px; background: rgba(0,0,0,0.06); border-bottom: 1px solid rgba(255,255,255,0.04); }
        .sidebar-header h2 { margin:0; font-size:18px; font-weight:700; }
        .sidebar-header p { margin:6px 0 0; font-size:13px; opacity:0.9; }

        .nav-list { list-style:none; padding:10px 0; margin:0; }
        .nav-item {
          padding:12px 18px;
          display:flex;
          align-items:center;
          gap:12px;
          cursor:pointer;
          border-left:4px solid transparent;
          transition: all 180ms ease;
          user-select: none;
          outline: none;
        }
        .nav-item:focus { box-shadow: inset 0 0 0 2px rgba(255,255,255,0.04); }
        .nav-item:hover { background: rgba(255,255,255,0.035); border-left-color: #4fc3f7; transform: translateX(4px); }
        .nav-item.active { background: rgba(255,255,255,0.06); border-left-color: #4fc3f7; transform: translateX(6px); font-weight:700; }
        .nav-item-icon { font-size:18px; width:26px; text-align:center; }
        .nav-item-text { font-size:15px; }

        @keyframes slideInLeft {
          from { transform: translateX(-12px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </aside>
  );
}
