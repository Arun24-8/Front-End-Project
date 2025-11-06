import React, { useEffect, useState } from "react";
import DashboardHome from "./pages/DashboardHome.jsx";
import Profile from "./pages/Profile.jsx";
import Attendance from "./pages/Attendance.jsx";
import Fees from "./pages/Fees.jsx";
import Results from "./pages/Results.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import { mockStudentData } from "./studentData.js";

export default function Student_Dashboard() {
	// ...existing logic...
	const [active, setActive] = useState("dashboard");
	const [student, setStudent] = useState(null);
	const [logoutOpen, setLogoutOpen] = useState(false);

	useEffect(() => {
		// use persisted student data if available, else use mock
		try {
			const s = localStorage.getItem("studentData");
			if (s) setStudent(JSON.parse(s));
			else {
				localStorage.setItem("studentData", JSON.stringify(mockStudentData));
				setStudent(mockStudentData);
			}
		} catch {
			setStudent(mockStudentData);
		}
	}, []);

	const navItems = [
		{ id: "dashboard", label: "Dashboard", icon: "🏠" },
		{ id: "profile", label: "Profile", icon: "👤" },
		{ id: "academics", label: "Academic Records", icon: "📚" },
		{ id: "courses", label: "Courses", icon: "📖" },
		{ id: "timetable", label: "Time Table", icon: "📅" },
		{ id: "attendance", label: "Attendance", icon: "✅" },
		{ id: "fees", label: "Fee Management", icon: "💳" },
		{ id: "fee-payments", label: "Fee Payments", icon: "💰" },
		{ id: "results", label: "Exam Results", icon: "🏆" },
		{ id: "halltickets", label: "Hall Tickets", icon: "🎫" },
		{ id: "library", label: "Library Services", icon: "📖" },
		{ id: "hostel", label: "Hostel Management", icon: "🏠" },
	];

	const renderContent = () => {
		if (!student) return <div style={{ padding: 24 }}>You are logged out.</div>;
		switch (active) {
			case "dashboard": return <DashboardHome student={student} />;
			case "profile": return <Profile student={student} />;
			case "attendance": return <Attendance />;
			case "fees":
			case "fee-payments": return <Fees />;
			case "results": return <Results />;
			case "academics": return <Placeholder label="Academic Records" />;
			case "courses": return <Placeholder label="Courses" />;
			case "timetable": return <Placeholder label="Time Table" />;
			case "halltickets": return <Placeholder label="Hall Tickets" />;
			case "library": return <Placeholder label="Library Services" />;
			case "hostel": return <Placeholder label="Hostel Management" />;
			default: return <Placeholder label={active} />;
		}
	};

	const openLogout = () => setLogoutOpen(true);
	const closeLogout = () => setLogoutOpen(false);
	const confirmLogout = () => {
		closeLogout();
		localStorage.removeItem("studentData");
		setStudent(null);
		// In integrated app, you may navigate back to Home/Login here
	};

	return (
		<div className="student-portal-root">
			<header className="header">
				<div className="logo-section">
					<div className="logo">KL</div>
					<div className="university-info">
						<h1>KL University</h1>
						<p>Student Information System</p>
					</div>
				</div>

				<div className="user-info">
					<div className="user-avatar">{student ? student.name.split(" ").map(n => n[0]).slice(0,2).join("") : "JS"}</div>
					<div style={{ textAlign: "right" }}>
						<div style={{ fontWeight: 600 }}>{student ? student.name : "Guest"}</div>
						<div style={{ fontSize: 12, opacity: 0.8 }}>ID: {student ? student.id : "—"}</div>
					</div>
					<button className="logout-btn" onClick={openLogout}>Logout</button>
				</div>
			</header>

			<div className="main-container">
				<aside className="sidebar" aria-label="Main navigation">
					<h3>📚 Student Portal</h3>
					{navItems.map(it => (
						<div
							key={it.id}
							className={`nav-item ${active === it.id ? "active" : ""}`}
							onClick={() => setActive(it.id)}
							role="button"
							tabIndex={0}
							onKeyDown={(e) => e.key === "Enter" && setActive(it.id)}
						>
							<div className="nav-icon">{it.icon}</div>
							<div className="nav-text">{it.label}</div>
						</div>
					))}
				</aside>

				<main className="content-area" role="main">
					<div className="page-content active">
						{renderContent()}
					</div>
				</main>
			</div>

			{logoutOpen && (
				<div className="modal-overlay active" onClick={(e) => { if (e.target.classList.contains('modal-overlay')) closeLogout(); }}>
					<div className="modal-box" role="dialog" aria-modal="true" aria-labelledby="logoutTitle">
						<div className="modal-header" id="logoutTitle">Confirm Logout</div>
						<div className="modal-body">Are you sure you want to log out of the student portal?</div>
						<div className="modal-footer">
							<button className="modal-btn modal-btn-cancel" onClick={closeLogout}>Cancel</button>
							<button className="modal-btn modal-btn-confirm" onClick={confirmLogout}>Logout</button>
						</div>
					</div>
				</div>
			)}

			<style>{`
				/* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Student\\Student_Dashboard.jsx */
				.student-portal-root { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); min-height: 100vh; }
				.header { background:#1e3a8a; color:white; padding:16px 24px; display:flex; justify-content:space-between; align-items:center; box-shadow:0 2px 10px rgba(0,0,0,0.1); flex-wrap:wrap; }
				.logo-section { display:flex; align-items:center; gap:12px; }
				.logo { width:50px; height:50px; background:white; border-radius:8px; display:flex; align-items:center; justify-content:center; color:#1e3a8a; font-weight:700; }
				.university-info h1 { margin:0; font-size:18px; font-weight:700; }
				.university-info p { margin:0; font-size:12px; opacity:0.9; }
				.user-info { display:flex; align-items:center; gap:12px; }
				.user-avatar { width:40px; height:40px; background:#3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center; color:white; font-weight:700; }
				.logout-btn { background:#dc2626; color:white; border:none; padding:8px 12px; border-radius:6px; cursor:pointer; }
				.main-container { max-width:1400px; margin:24px auto; padding:0 24px; background:white; border-radius:12px; display:flex; min-height:600px; overflow:hidden; }
				.sidebar { width:280px; padding:24px 16px; border-right:2px solid #e5e7eb; background:#f8fafc; border-radius:12px 0 0 12px; overflow:auto; }
				.sidebar h3 { color:#1e3a8a; margin:0 0 16px 0; font-size:1.1rem; font-weight:600; border-bottom:2px solid #e5e7eb; padding-bottom:8px; }
				.nav-item { display:flex; align-items:center; gap:12px; padding:12px; margin-bottom:8px; border-radius:8px; cursor:pointer; border-left:4px solid transparent; }
				.nav-item:hover { background:white; border-left-color:#3b82f6; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
				.nav-item.active { background:#dbeafe; border-left-color:#1d4ed8; color:#1d4ed8; box-shadow:0 2px 8px rgba(0,0,0,0.06); }
				.nav-icon { width:32px; height:32px; border-radius:6px; display:flex; align-items:center; justify-content:center; font-size:16px; }
				.nav-text { font-weight:500; color:#374151; }
				.content-area { flex:1; padding:24px; background:white; border-radius:0 12px 12px 0; overflow:auto; min-width:0; }
				.modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.5); display:flex; align-items:center; justify-content:center; z-index:999; }
				.modal-box { background:white; padding:20px; border-radius:12px; width:90%; max-width:420px; transform:scale(1); opacity:1; transition:all 180ms ease; }
				.modal-header { font-size:18px; font-weight:700; color:#1e3a8a; margin-bottom:12px; }
				.modal-body { color:#374151; margin-bottom:16px; }
				.modal-footer { display:flex; justify-content:flex-end; gap:8px; }
				.modal-btn { padding:10px 14px; border-radius:8px; font-weight:700; cursor:pointer; border:none; }
				.modal-btn-cancel { background:#e5e7eb; color:#374151; }
				.modal-btn-confirm { background:#dc2626; color:white; }
				@media (max-width:900px) {
					.main-container { margin:16px; flex-direction:column; padding:16px; }
					.sidebar { width:100%; border-right:none; border-bottom:2px solid #e5e7eb; border-radius:12px 12px 0 0; }
					.content-area { border-radius:0 0 12px 12px; padding:16px; }
				}
			`}</style>
		</div>
	);
}
