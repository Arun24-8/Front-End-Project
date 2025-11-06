import React, { useEffect, useState } from "react";
import DashboardHome from "./pages/DashboardHome.jsx";
import Profile from "./pages/Profile.jsx";
import Attendance from "./pages/Attendance.jsx";
import Fees from "./pages/Fees.jsx";
import Results from "./pages/Results.jsx";
import Placeholder from "./pages/Placeholder.jsx";
import Academics from "./pages/Academics.jsx";
import Courses from "./pages/Courses.jsx";
import Timetable from "./pages/Timetable.jsx";
import HallTickets from "./pages/HallTickets.jsx";
import Library from "./pages/Library.jsx";
import Hostel from "./pages/Hostel.jsx";
import { mockStudentData } from "./studentData.js";

export default function Student_Dashboard({ onNavigate }) {
	const [active, setActive] = useState("dashboard");
	const [student, setStudent] = useState(null);
	const [logoutOpen, setLogoutOpen] = useState(false);
	const [animKey, setAnimKey] = useState(0); // force content re-animation

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
			case "academics": return <Academics />;
			case "courses": return <Courses />;
			case "timetable": return <Timetable />;
			case "halltickets": return <HallTickets />;
			case "library": return <Library />;
			case "hostel": return <Hostel />;
			default: return <Placeholder label={active} />;
		}
	};

	const handleNav = (id) => {
		if (id === active) return;
		setActive(id);
		// bump key to trigger CSS animation on content container
		setAnimKey((k) => k + 1);
	};

	const openLogout = () => setLogoutOpen(true);
	const closeLogout = () => setLogoutOpen(false);
	const confirmLogout = () => {
		setLogoutOpen(false);
		localStorage.removeItem("studentData");
		setStudent(null);
		// navigate back to Home
		if (typeof onNavigate === "function") {
			onNavigate("/");
		} else {
			try { window.history.pushState({}, "", "/"); } catch {}
		}
	};

	return (
		<div className="student-portal-root">
			<header className="sd-header">
				<div className="sd-left">
					<div className="sd-logo">KL</div>
					<div className="sd-title">
						<div className="sd-name">KL University</div>
						<div className="sd-sub">Student Information System</div>
					</div>
				</div>

				<div className="sd-user">
					<div className="sd-avatar">{student ? student.name.split(" ").map(n=>n[0]).slice(0,2).join("") : "G"}</div>
					<div className="sd-meta">
						<div className="sd-user-name">{student ? student.name : "Guest"}</div>
						<div className="sd-user-id">ID: {student ? student.id : "—"}</div>
					</div>
					<button className="sd-logout" onClick={openLogout}>Logout</button>
				</div>
			</header>

			<div className="sd-main">
				<aside className="sd-sidebar" aria-label="Main navigation">
					<h3>📚 Student Portal</h3>
					{navItems.map(it => (
						<div key={it.id} className={`sd-nav-item ${active === it.id ? "active" : ""}`} onClick={() => handleNav(it.id)} role="button" tabIndex={0} onKeyDown={(e)=> e.key==="Enter" && handleNav(it.id)}>
							<div className="sd-nav-icon">{it.icon}</div>
							<div className="sd-nav-text">{it.label}</div>
						</div>
					))}
				</aside>

				<main className="sd-content" key={animKey}>
					<div className="sd-panel">{renderContent()}</div>
				</main>
			</div>

			{logoutOpen && (
				<div className="sd-modal-overlay" onClick={(e)=>{ if(e.target.classList && e.target.classList.contains('sd-modal-overlay')) closeLogout(); }}>
					<div className="sd-modal">
						<div className="sd-modal-h">Confirm Logout</div>
						<div className="sd-modal-b">Are you sure you want to log out?</div>
						<div className="sd-modal-f">
							<button className="sd-cancel" onClick={closeLogout}>Cancel</button>
							<button className="sd-confirm" onClick={confirmLogout}>Logout</button>
						</div>
					</div>
				</div>
			)}

			<style>{`
				/* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Student\\Student_Dashboard.jsx */
				.student-portal-root { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: linear-gradient(135deg,#667eea 0%,#764ba2 100%); min-height:100vh; }
				.sd-header { display:flex; justify-content:space-between; align-items:center; padding:18px 24px; color:#fff; }
				.sd-left { display:flex; align-items:center; gap:14px; }
				.sd-logo { width:56px; height:56px; background:#fff; color:#1e3a8a; border-radius:10px; display:flex; align-items:center; justify-content:center; font-weight:800; }
				.sd-title .sd-name { font-weight:800; font-size:18px; }
				.sd-sub { font-size:13px; opacity:0.9; }
				.sd-user { display:flex; align-items:center; gap:12px; background:rgba(255,255,255,0.06); padding:8px 12px; border-radius:12px; }
				.sd-avatar { width:44px; height:44px; background:#3b82f6; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:700; }
				.sd-user-name { font-weight:700; }
				.sd-user-id { font-size:12px; opacity:0.85; }
				.sd-logout { margin-left:8px; background:#ff7b7b; border:none; color:#fff; padding:8px 12px; border-radius:10px; cursor:pointer; transition: transform 120ms; }
				.sd-logout:hover { transform: translateY(-2px); }

				.sd-main { max-width:1400px; margin:20px auto; background:#fff; border-radius:12px; display:flex; overflow:hidden; min-height:640px; box-shadow:0 12px 36px rgba(2,6,23,0.12); }
				.sd-sidebar { width:280px; padding:20px; background:#f8fafc; border-right:1px solid #eef2f7; }
				.sd-sidebar h3 { margin:0 0 14px 0; color:#1e3a8a; font-size:1.05rem; }
				.sd-nav-item { display:flex; align-items:center; gap:10px; padding:10px; border-radius:8px; margin-bottom:8px; cursor:pointer; transition: all 200ms; }
				.sd-nav-item:hover { background:#fff; transform: translateY(-2px); box-shadow:0 6px 18px rgba(2,6,23,0.04); }
				.sd-nav-item.active { background:#dbeafe; border-left:4px solid #1d4ed8; color:#1d4ed8; }
				.sd-nav-icon { width:36px; height:36px; display:flex; align-items:center; justify-content:center; font-size:18px; }
				.sd-content { flex:1; padding:22px; min-width:0; }
				.sd-panel { animation: contentIn 360ms cubic-bezier(.2,.9,.2,1); }
				@keyframes contentIn { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }

				/* Modal */
				.sd-modal-overlay { position:fixed; inset:0; display:flex; align-items:center; justify-content:center; background:rgba(0,0,0,0.5); z-index:999; }
				.sd-modal { background:#fff; padding:18px; border-radius:12px; width:90%; max-width:420px; box-shadow:0 12px 36px rgba(2,6,23,0.18); }
				.sd-modal-h { font-size:16px; font-weight:800; color:#1e3a8a; margin-bottom:8px; }
				.sd-modal-b { color:#374151; margin-bottom:14px; }
				.sd-modal-f { display:flex; justify-content:flex-end; gap:8px; }
				.sd-cancel { background:#f3f4f6; border:none; padding:8px 12px; border-radius:8px; cursor:pointer; }
				.sd-confirm { background:#dc2626; color:#fff; border:none; padding:8px 12px; border-radius:8px; cursor:pointer; }

				/* small responsive */
				@media (max-width:900px) {
					.sd-main { flex-direction:column; }
					.sd-sidebar { width:100%; border-right:none; border-bottom:1px solid #eef2f7; }
				}
			`}</style>
		</div>
	);
}
