import React, { useState, useEffect } from "react";
import Admin_Nav from "./Admin_Nav.jsx";
import Admin_Header from "./Admin_Header.jsx";
import Admin_StatGrid from "./Admin_StatGrid.jsx";
import Admin_RecentActivities from "./Admin_RecentActivities.jsx";
import Admin_Sections from "./Admin_Sections.jsx";

export default function Admin_Dashboard({ onNavigate }) {
  const [active, setActive] = useState("dashboard");
  const [config, setConfig] = useState({
    app_title: "Admin Dashboard",
    institution_name: "KL University",
    admin_name: "Dr. Rajesh Kumar",
    admin_id: "ADM001",
    welcome_message: "Welcome to the admin dashboard",
    primary_color: "#667eea",
    secondary_color: "#764ba2",
    background_color: "#f8f9fa",
    accent_color: "#2c3e50",
    text_color: "#333333",
  });

  useEffect(() => {
    // Mirror init behavior from original HTML: update document title
    document.title = config.app_title;
  }, [config]);

  // --- NEW: Small faculty details panel component (rendered on dashboard) ---
  const FacultyDetails = ({ items }) => (
    <div className="faculty-details animate-panel" role="region" aria-label="Faculty highlights" style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <h3 style={{ margin: 0 }}>Highlighted Faculty</h3>
        <div style={{ color: "#6b7280", fontSize: 13 }}>{items.length} members</div>
      </div>

      <div className="faculty-grid">
        {items.map((f, i) => (
          <div key={f.id} className="faculty-card" tabIndex={0}>
            <div className="faculty-avatar">{f.initials}</div>
            <div className="faculty-meta">
              <div className="faculty-name">{f.name}</div>
              <div className="faculty-dept">{f.dept} • {f.designation}</div>
              <div className="faculty-contact">{f.email} • {f.phone}</div>
              <div className="faculty-office">Office: {f.office}</div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .animate-panel { animation: fadeUp 360ms cubic-bezier(.22,.9,.26,1) both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }
        .faculty-grid { display:grid; gap:12px; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); }
        .faculty-card { display:flex; gap:12px; align-items:flex-start; background:#fff; padding:12px; border-radius:10px; box-shadow:0 8px 20px rgba(2,6,23,0.04); transition: transform 200ms ease, box-shadow 200ms ease; }
        .faculty-card:hover, .faculty-card:focus { transform: translateY(-6px); box-shadow:0 20px 40px rgba(2,6,23,0.08); outline:none; }
        .faculty-avatar { width:56px; height:56px; border-radius:12px; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:18px; }
        .faculty-name { font-weight:700; color:#1f2937; }
        .faculty-dept { color:#6b7280; font-size:13px; margin-top:4px; }
        .faculty-contact, .faculty-office { color:#8b97a6; font-size:12px; margin-top:6px; }
        @media (prefers-reduced-motion: reduce) { .animate-panel, .faculty-card { animation:none; transition:none; } }
      `}</style>
    </div>
  );

  // add logout handler (clears admin session and navigates to home)
	const handleLogout = () => {
		try {
			// remove any admin-specific data stored during session
			localStorage.removeItem("adminData");
		} catch (e) {
			// ignore storage errors
		}
		// navigate back to home/login
		if (typeof onNavigate === "function") {
			onNavigate("/");
		} else {
			try { window.history.pushState({}, "", "/"); } catch (e) {}
			// optionally reload to ensure state reset
			window.location.reload();
		}
	};

  return (
    <div className="admin-page">
      <Admin_Nav active={active} onNavigate={setActive} institution={config.institution_name} />

      <div className="admin-main">
        <Admin_Header
          title={active === "dashboard" ? "Dashboard" : active.charAt(0).toUpperCase() + active.slice(1)}
          user={{ name: config.admin_name, id: config.admin_id }}
        />

        <div className="admin-content">
          {/* Dashboard top stat + activities */}
          {active === "dashboard" && (
            <>
              <div className="alert alert-info">
                <span className="alert-icon">👋</span>
                <div>
                  <strong>{config.welcome_message}</strong>
                  <p>Manage your institution's academic and administrative operations</p>
                </div>
              </div>

              {/* Render new FacultyDetails above stats */}
              <FacultyDetails items={[
                { id: 'F001', initials: 'PS', name: 'Dr. Priya Sharma', dept: 'Computer Science', designation: 'Associate Professor', email: 'priya.sharma@university.edu', phone: '+91 98765 12345', office: 'Room 305' },
                { id: 'F002', initials: 'RK', name: 'Dr. Rajesh Kumar', dept: 'Mathematics', designation: 'Professor', email: 'rajesh.kumar@university.edu', phone: '+91 98111 22233', office: 'Room 210' },
                { id: 'F003', initials: 'MP', name: 'Dr. Meera Patel', dept: 'Physics', designation: 'Associate Professor', email: 'meera.patel@university.edu', phone: '+91 99000 11122', office: 'Room 118' }
              ]} />

              <Admin_StatGrid />

              <Admin_RecentActivities />
            </>
          )}

          {/* Other sections rendered by Admin_Sections (users/academics/library/etc.) */}
          {active !== "dashboard" && <Admin_Sections section={active} />}
        </div>
      </div>

      <style>{`
        /* minimal page layout to match original HTML */
        .admin-page { display:flex; height:100vh; background:${config.primary_color}; }
        .admin-main { flex:1; display:flex; flex-direction:column; min-width:0; background:#fff; }
        .admin-content { padding:24px; overflow:auto; background:${config.background_color}; min-height:0; }

        /* reuse some helper classes from original HTML for consistency */
        .alert { display:flex; gap:12px; padding:16px; border-radius:8px; margin-bottom:16px; align-items:flex-start; }
        .alert-info { background:#d1ecf1; border-left:4px solid #17a2b8; color:#0c5460; }

        /* dashboard content transition when sections change */
        .admin-content { transition: opacity 260ms cubic-bezier(.22,.9,.26,1), transform 260ms cubic-bezier(.22,.9,.26,1); }
        .admin-content > * { will-change: transform, opacity; }
        /* subtle fade/slide for section switches */
        .admin-content .alert, .admin-content .animate-panel, .admin-content .data-table { transition: opacity 320ms var(--ease), transform 320ms var(--ease); }
        @media (prefers-reduced-motion: reduce) {
          .admin-content, .admin-content .alert, .admin-content .animate-panel, .admin-content .data-table { transition: none !important; animation: none !important; }
        }
      `}</style>
    </div>
  );
}
