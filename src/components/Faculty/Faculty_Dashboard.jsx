import React, { useState } from "react";
import Faculty_Nav from "./Faculty_Nav.jsx";
import Faculty_Header from "./Faculty_Header.jsx";
import Faculty_Attendence from "./Faculty_Attendence.jsx";
import Faculty_StatGrid from "./Faculty_StatGrid.jsx";
import Faculty_RecentActivities from "./Faculty_RecentActivities.jsx";
import Faculty_StudentDetails from "./Faculty_StudentDetails.jsx";

export default function Faculty_Dashboard() {
  const [active, setActive] = useState("dashboard");

  const handleNavigate = (id) => setActive(id);
  const handleLogout = () => {
    // Minimal logout behavior for demo
    window.location.href = "/";
  };

  // Simple reusable components for placeholder tables/cards to keep file concise
  const StatCard = ({ icon, title, value, subtitle }) => (
    <div className="stat-card">
      <div className="stat-card-header">
        <div className="stat-card-icon">{icon}</div>
      </div>
      <div className="stat-card-title">{title}</div>
      <div className="stat-card-value">{value}</div>
      {subtitle && <div className="stat-card-subtitle">{subtitle}</div>}
    </div>
  );

  return (
    <div className="faculty-page">
      <Faculty_Nav active={active} onNavigate={handleNavigate} />

      <div className="faculty-main">
        <Faculty_Header
          title={
            active === "dashboard"
              ? "Dashboard"
              : active.charAt(0).toUpperCase() + active.slice(1)
          }
          onLogout={handleLogout}
          user={{ name: "Dr. Priya Sharma", id: "FAC001" }}
        />

        <div className="faculty-content">
          {/* Dashboard */}
          <section className={`section ${active === "dashboard" ? "active" : ""}`}>
            <div className="alert alert-info">
              <span className="alert-icon">👋</span>
              <div>
                <strong>Welcome to your faculty dashboard</strong>
                <p>Manage your courses, students, and academic activities</p>
              </div>
            </div>

            {/* modular stat grid with animations */}
            <Faculty_StatGrid />

            {/* modular recent activities table with animations */}
            <Faculty_RecentActivities />
          </section>

          {/* Profile */}
          <section className={`section ${active === "profile" ? "active" : ""}`}>
            {/* modular student/faculty details (expanded) */}
            <Faculty_StudentDetails />
          </section>

          {/* Courses */}
          <section
            className={`section ${active === "courses" ? "active" : ""}`}
          >
            <div className="data-table">
              <div className="table-header">
                <h3>Current Semester Courses</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => alert("Add Course (demo)")}
                >
                  + Add Course
                </button>
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Course Code</th>
                    <th>Title</th>
                    <th>Credits</th>
                    <th>Students</th>
                    <th>Schedule</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>CSE401</td>
                    <td>Web Technologies</td>
                    <td>4</td>
                    <td>65</td>
                    <td>Mon/Wed/Fri 9AM</td>
                  </tr>
                  <tr>
                    <td>CSE403</td>
                    <td>Machine Learning</td>
                    <td>4</td>
                    <td>58</td>
                    <td>Tue/Thu 10AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Students */}
          <section
            className={`section ${active === "students" ? "active" : ""}`}
          >
            <div className="dashboard-grid">
              <StatCard icon="👥" title="Total Students" value="245" />
              <StatCard icon="📈" title="Average Attendance" value="82.5%" />
              <StatCard icon="🏅" title="Top Performers" value="18" />
            </div>
            <div className="data-table">
              <div className="table-header">
                <h3>Student Performance Overview</h3>
                <div>
                  <select className="form-select" style={{ marginRight: 8 }}>
                    <option>All Courses</option>
                    <option>CSE401</option>
                    <option>CSE403</option>
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Export (demo)")}
                  >
                    📊 Export Data
                  </button>
                </div>
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Attendance</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2021CSE045</td>
                    <td>Rajesh Kumar</td>
                    <td>CSE401</td>
                    <td>85%</td>
                    <td>
                      <span className="badge badge-success">Excellent</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Attendance (separate module) */}
          <section
            className={`section ${active === "attendance" ? "active" : ""}`}
          >
            <Faculty_Attendence />
          </section>

          {/* Assignments */}
          <section
            className={`section ${active === "assignments" ? "active" : ""}`}
          >
            <div className="data-table">
              <div className="table-header">
                <h3>Assignments & Exams</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => alert("Create Assignment (demo)")}
                >
                  + Create Assignment
                </button>
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Course</th>
                    <th>Type</th>
                    <th>Due Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Web Development Project</td>
                    <td>CSE401</td>
                    <td>Assignment</td>
                    <td>Jan 15, 2025</td>
                    <td>
                      <span className="badge badge-warning">Active</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Grades */}
          <section
            className={`section ${active === "grades" ? "active" : ""}`}
          >
            <div className="data-table">
              <div className="table-header">
                <h3>Grade Management</h3>
                <div>
                  <select className="form-select" style={{ marginRight: 8 }}>
                    <option>All Courses</option>
                  </select>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Export Grades (demo)")}
                  >
                    📊 Export Grades
                  </button>
                </div>
              </div>
              <table className="simple-table">
                <thead>
                  <tr>
                    <th>Student ID</th>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Final Grade</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2021CSE045</td>
                    <td>Rajesh Kumar</td>
                    <td>CSE401</td>
                    <td>A</td>
                    <td>
                      <span className="badge badge-success">Published</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Communication */}
          <section
            className={`section ${active === "communication" ? "active" : ""}`}
          >
            <h3>Communication Center</h3>
            <div className="data-table" style={{ padding: 16 }}>
              <div style={{ marginBottom: 12 }}>
                <label className="form-label">Recipient Group</label>
                <select
                  className="form-select"
                  style={{ width: "100%", marginBottom: 8 }}
                >
                  <option>All Students (245)</option>
                </select>
                <input
                  className="form-input"
                  placeholder="Subject"
                  style={{ marginBottom: 8 }}
                />
                <textarea
                  className="form-input"
                  rows="5"
                  placeholder="Message"
                ></textarea>
                <div style={{ marginTop: 8 }}>
                  <button
                    className="btn btn-success"
                    onClick={() => alert("Send Email (demo)")}
                  >
                    📧 Send Email
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Settings */}
          <section
            className={`section ${active === "settings" ? "active" : ""}`}
          >
            <h3>Portal Settings</h3>
            <div className="profile-card">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <label className="form-label">Display Theme</label>
                  <select className="form-select">
                    <option>Light Mode</option>
                    <option>Dark Mode</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Notification Preference</label>
                  <select className="form-select">
                    <option>Email and In-App</option>
                  </select>
                </div>
                <div style={{ gridColumn: "1 / -1", marginTop: 12 }}>
                  <button
                    className="btn btn-primary"
                    onClick={() => alert("Save Preferences (demo)")}
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style>{`
        /* ...existing global styles kept small here ... */
        .faculty-page { display:flex; height:100vh; background:#f5f7fa; overflow:hidden; }
        .faculty-main { flex:1; display:flex; flex-direction:column; min-width:0; }
        .faculty-content { flex:1; overflow:auto; padding:20px; }
        .section { display:none; opacity:0; transform: translateY(6px); transition: all 240ms ease; }
        .section.active { display:block; opacity:1; transform: translateY(0); }
        .alert { display:flex; gap:12px; padding:12px; background:#d1ecf1; border-left:4px solid #17a2b8; border-radius:8px; margin-bottom:16px; align-items:flex-start; }
        .dashboard-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(220px,1fr)); gap:14px; margin-bottom:16px; }
        .stat-card { background:#fff; border-radius:10px; padding:14px; box-shadow:0 6px 12px rgba(2,6,23,0.06); }
        .data-table { background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 6px 12px rgba(2,6,23,0.04); margin-bottom:16px; }
        .table-header { padding:12px 16px; border-bottom:1px solid #eee; display:flex; justify-content:space-between; align-items:center; }
        .simple-table th, .simple-table td { padding:10px 12px; border-bottom:1px solid #f3f3f3; }
        .profile-card { background:#fff; border-radius:10px; padding:16px; box-shadow:0 6px 12px rgba(2,6,23,0.04); }
        .form-select, .form-input, textarea { width:100%; padding:8px 10px; border-radius:8px; border:1px solid #e5e7eb; margin-top:6px; }
        .btn { padding:8px 12px; border-radius:8px; border:none; cursor:pointer; }
        .btn-primary { background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; }
        .btn-success { background:#10b981; color:#fff; }
        .badge { padding:6px 10px; border-radius:14px; font-weight:700; display:inline-block; }
        .badge-warning { background:#fff3cd; color:#856404; }
        .badge-success { background:#d4edda; color:#155724; }
        @media (max-width: 900px) { .faculty-page { flex-direction:column; } .faculty-sidebar { width:100%; display:flex; overflow:auto } }
      `}</style>
    </div>
  );
}
