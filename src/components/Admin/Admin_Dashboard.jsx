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
		document.title = config.app_title;
	}, [config]);

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
				.faculty-grid { display:grid; gap:16px; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); }
				.faculty-card { display:flex; gap:14px; align-items:flex-start; background:var(--card-bg); padding:14px; border-radius:var(--radius); box-shadow: var(--shadow-1); transition: transform 220ms var(--ease), box-shadow 220ms var(--ease); }
				.faculty-card:hover, .faculty-card:focus { transform: translateY(-8px); box-shadow: var(--shadow-2); outline:none; }
				.faculty-avatar { width:64px; height:64px; border-radius:12px; background:linear-gradient(135deg,var(--primary),${config.secondary_color}); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; box-shadow:0 8px 20px rgba(79,70,229,0.12); }
				.faculty-name { font-weight:800; color:#0b1220; }
				.faculty-dept { color:var(--muted); font-size:13px; margin-top:6px; }
				.faculty-contact, .faculty-office { color:#98a0ad; font-size:13px; margin-top:8px; }
				@media (prefers-reduced-motion: reduce) { .animate-panel, .faculty-card { animation:none; transition:none; } }
			`}</style>
		</div>
	);

	const handleLogout = () => {
		try {
			localStorage.removeItem("adminData");
		} catch (e) {
		}
		if (typeof onNavigate === "function") {
			onNavigate("/");
		} else {
			try { window.history.pushState({}, "", "/"); } catch (e) {}
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

				<div className="admin-actions">
					<button className="btn-logout" onClick={handleLogout} aria-label="Logout">Logout</button>
				</div>

				<div className="admin-content">
					{active === "dashboard" && (
						<>
							<div className="alert alert-info">
								<span className="alert-icon">👋</span>
								<div>
									<strong>{config.welcome_message}</strong>
									<p>Manage your institution's academic and administrative operations</p>
								</div>
							</div>

							<FacultyDetails items={[
								{ id: 'F001', initials: 'PS', name: 'Dr. Priya Sharma', dept: 'Computer Science', designation: 'Associate Professor', email: 'priya.sharma@university.edu', phone: '+91 98765 12345', office: 'Room 305' },
								{ id: 'F002', initials: 'RK', name: 'Dr. Rajesh Kumar', dept: 'Mathematics', designation: 'Professor', email: 'rajesh.kumar@university.edu', phone: '+91 98111 22233', office: 'Room 210' },
								{ id: 'F003', initials: 'MP', name: 'Dr. Meera Patel', dept: 'Physics', designation: 'Associate Professor', email: 'meera.patel@university.edu', phone: '+91 99000 11122', office: 'Room 118' }
							]} />

							<Admin_StatGrid />

							<Admin_RecentActivities />
						</>
					)}

					{active !== "dashboard" && <Admin_Sections section={active} />}
				</div>
			</div>

			<style>{`
        html, body, #root { height: 100%; }
        *{box-sizing:border-box}
        body{margin:0;background:linear-gradient(180deg, #f3f6fb 0%, var(--bg) 100%); color: var(--text_color, #0f172a); height:100%;}
        .app-container{display:flex;flex-direction:column;min-height:100%;height:100%;}
        .admin-page{display:flex;height:100%;width:100%;background: linear-gradient(90deg, rgba(0,0,0,0.02), rgba(0,0,0,0.01));}
        .admin-main{flex:1;display:flex;flex-direction:column;min-width:0;background:transparent;height:100%;}
        .admin-content{flex:1;padding:28px 32px 40px 32px;overflow:auto;background:linear-gradient(180deg, rgba(255,255,255,0.6), rgba(255,255,255,0.9));border-top-left-radius:20px;}
        .admin-actions{display:flex; justify-content:flex-end; padding:12px 24px 0 24px; gap:12px; align-items:center;}
        .btn-logout{
          background:transparent;
          border:1px solid rgba(15,23,42,0.08);
          color:var(--primary);
          padding:8px 12px;
          border-radius:10px;
          cursor:pointer;
          font-weight:700;
          transition: transform 160ms var(--ease), box-shadow 160ms var(--ease), background 160ms var(--ease);
        }
        .btn-logout:hover{ transform: translateY(-3px); box-shadow: var(--shadow-1); background: rgba(99,102,241,0.06); }

        /* admin-content now flexes to fill height (see .admin-main and .admin-page) */

        .alert{ display:flex; gap:16px; padding:18px; border-radius:12px; margin-bottom:20px; align-items:flex-start; background: linear-gradient(90deg,#f0f7ff,#fbfdff); box-shadow: var(--shadow-1); border-left:6px solid rgba(34,197,94,0.12); }
        .alert-icon{ font-size:22px; align-self:flex-start; padding:8px; border-radius:8px; background:linear-gradient(135deg,var(--primary),${config.secondary_color}); color:#fff; box-shadow:0 6px 18px rgba(0,0,0,0.06); }

        .faculty-details h3{ font-size:18px; margin-bottom:4px; color:#0f172a; }
        .faculty-grid{ display:grid; gap:16px; grid-template-columns: repeat(auto-fit,minmax(260px,1fr)); }
        .faculty-card{ display:flex; gap:14px; align-items:flex-start; background:var(--card-bg); padding:14px; border-radius:var(--radius); box-shadow: var(--shadow-1); transition: transform 220ms var(--ease), box-shadow 220ms var(--ease); }
        .faculty-card:focus, .faculty-card:hover{ transform: translateY(-8px); box-shadow: var(--shadow-2); outline:none; }
        .faculty-avatar{ width:64px; height:64px; border-radius:12px; background:linear-gradient(135deg,var(--primary),${config.secondary_color}); color:#fff; display:flex; align-items:center; justify-content:center; font-weight:800; font-size:20px; box-shadow:0 8px 20px rgba(79,70,229,0.12); }
        .faculty-name{ font-weight:800; color:#0b1220; }
        .faculty-dept{ color:var(--muted); font-size:13px; margin-top:6px; }
        .faculty-contact, .faculty-office{ color:#98a0ad; font-size:13px; margin-top:8px; }

        .admin-content .animate-panel, .admin-content .data-table{ transition: opacity 360ms var(--ease), transform 360ms var(--ease); }

        @media (max-width:1024px){
          .admin-actions{ padding:10px 18px; }
          .admin-content{ padding:18px; }
          .faculty-grid{ grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); }
        }
        @media (prefers-reduced-motion: reduce){
          *{transition:none!important; animation:none!important;}
        }
      `}</style>
		</div>
	);
}
