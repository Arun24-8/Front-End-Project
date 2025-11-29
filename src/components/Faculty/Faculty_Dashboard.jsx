import React, { useState, useEffect } from "react";
import Faculty_Nav from "./Faculty_Nav.jsx";
import Faculty_Header from "./Faculty_Header.jsx";
import Faculty_Attendence from "./Faculty_Attendence.jsx";
import Faculty_StatGrid from "./Faculty_StatGrid.jsx";
import Faculty_RecentActivities from "./Faculty_RecentActivities.jsx";
import Faculty_StudentDetails from "./Faculty_StudentDetails.jsx";

export default function Faculty_Dashboard() {
  const storageKey = "facultyCourses";
  const [courses, setCourses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [credits, setCredits] = useState("");
  const [error, setError] = useState("");
  const [active, setActive] = useState("dashboard");

  // assignments state
  const assignKey = "facultyAssignments";
  const [assignments, setAssignments] = useState([]);
  const [showAsgForm, setShowAsgForm] = useState(false);
  const [asgTitle, setAsgTitle] = useState("");
  const [asgDesc, setAsgDesc] = useState("");
  const [asgDue, setAsgDue] = useState("");
  const [asgError, setAsgError] = useState("");
  const [asgMsg, setAsgMsg] = useState("");

  // new: mode for assignment creation (manual form or file upload)
  const [asgMode, setAsgMode] = useState("manual"); // "manual" | "file"
  const [asgFile, setAsgFile] = useState(null); // { name, type, dataUrl }
  const [asgFileError, setAsgFileError] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setCourses(JSON.parse(raw));
      else {
        const initial = [
          { id: "C001", title: "Intro to Programming", code: "CS101", credits: 3 },
          { id: "C002", title: "Data Structures", code: "CS201", credits: 4 }
        ];
        setCourses(initial);
        localStorage.setItem(storageKey, JSON.stringify(initial));
      }
    } catch (e) {
      setCourses([]);
    }
  }, []);

  // load assignments from localStorage
  useEffect(() => {
    try {
      const rawAsg = localStorage.getItem(assignKey);
      if (rawAsg) setAssignments(JSON.parse(rawAsg));
      else {
        const initAsg = [];
        setAssignments(initAsg);
        localStorage.setItem(assignKey, JSON.stringify(initAsg));
      }
    } catch (e) {
      setAssignments([]);
    }
  }, []);

  const persist = (next) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch (e) {
      // ignore storage errors
    }
  };

  const persistAssignments = (next) => {
    try {
      localStorage.setItem(assignKey, JSON.stringify(next));
    } catch (e) {}
  };

  const handleAdd = (e) => {
    if (e && e.preventDefault) e.preventDefault(); // ensure no accidental submit
    setError("");
    if (!title.trim() || !code.trim() || !credits.toString().trim()) {
      setError("Please fill all fields.");
      return;
    }
    const numericCredits = Number(credits);
    if (!Number.isFinite(numericCredits) || numericCredits <= 0) {
      setError("Credits must be a positive number.");
      return;
    }
    const id = `C${String(Date.now()).slice(-6)}`;
    const newCourse = { id, title: title.trim(), code: code.trim().toUpperCase(), credits: numericCredits };
    const next = [newCourse, ...courses];
    setCourses(next);
    persist(next);
    setTitle("");
    setCode("");
    setCredits("");
    setShowForm(false); // close form, do not create extra buttons
  };

  const handleRemove = (id) => {
    const next = courses.filter((c) => c.id !== id);
    setCourses(next);
    persist(next);
  };

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

  // updated: handle file selection and convert to data URL
  const handleFileChange = (e) => {
    setAsgFileError("");
    const file = e.target.files && e.target.files[0];
    if (!file) {
      setAsgFile(null);
      return;
    }
    // small size guard (e.g., 5MB)
    const maxBytes = 5 * 1024 * 1024;
    if (file.size > maxBytes) {
      setAsgFileError("File is too large (max 5MB).");
      setAsgFile(null);
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setAsgFile({
        name: file.name,
        type: file.type,
        dataUrl: reader.result
      });
    };
    reader.onerror = () => {
      setAsgFileError("Failed to read file.");
      setAsgFile(null);
    };
    reader.readAsDataURL(file);
  };

  // assignment handlers
  const handleAddAssignment = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setAsgError("");
    setAsgFileError("");

    if (asgMode === "manual") {
      if (!asgTitle.trim() || !asgDesc.trim() || !asgDue.trim()) {
        setAsgError("Please fill all assignment fields.");
        return;
      }
      const id = `A${String(Date.now()).slice(-6)}`;
      const newAsg = { id, title: asgTitle.trim(), description: asgDesc.trim(), due: asgDue, createdAt: new Date().toISOString(), source: "manual" };
      const next = [newAsg, ...assignments];
      setAssignments(next);
      persistAssignments(next);
      setAsgTitle("");
      setAsgDesc("");
      setAsgDue("");
      setShowAsgForm(false);
      setAsgMsg("Assignment created");
      setTimeout(() => setAsgMsg(""), 1600);
      return;
    }

    // file mode
    if (asgMode === "file") {
      if (!asgFile) {
        setAsgFileError("Please select a file to upload.");
        return;
      }
      const id = `A${String(Date.now()).slice(-6)}`;
      const newAsg = {
        id,
        title: asgFile.name,
        description: `File assignment: ${asgFile.name}`,
        due: asgDue || "",
        createdAt: new Date().toISOString(),
        source: "file",
        file: {
          name: asgFile.name,
          type: asgFile.type,
          dataUrl: asgFile.dataUrl
        }
      };
      const next = [newAsg, ...assignments];
      setAssignments(next);
      persistAssignments(next);
      setAsgFile(null);
      setAsgDue("");
      setShowAsgForm(false);
      setAsgMsg("File assignment added");
      setTimeout(() => setAsgMsg(""), 1600);
      return;
    }
  };

  const handleRemoveAssignment = (id) => {
    const next = assignments.filter(a => a.id !== id);
    setAssignments(next);
    persistAssignments(next);
  };

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

          {/* New Courses Section */}
          <section
            className={`section ${active === "courses" ? "active" : ""}`}
          >
            <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto", boxSizing: "border-box" }}>
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <div>
                  <h1 style={{ margin: 0 }}>Faculty — Courses</h1>
                  <div style={{ color: "#6b7280", fontSize: 14 }}>Manage courses for your classes</div>
                </div>
                <div>
                  <button type="button" onClick={() => setShowForm((s) => !s)} style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#4f46e5", color: "#fff", fontWeight: 700, cursor: "pointer", marginRight: 8 }}>
                    {showForm ? "Close" : "Add Course"}
                  </button>
                  <button type="button" onClick={() => setShowAsgForm(s => !s)} style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#0ea5a9", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                    {showAsgForm ? "Close" : "Create Assignment"}
                  </button>
                </div>
              </header>

              {showForm && (
                <form onSubmit={handleAdd} style={{ marginBottom: 18, background: "#fff", padding: 16, borderRadius: 10, boxShadow: "0 8px 24px rgba(2,6,23,0.06)" }}>
                  <div style={{ display: "grid", gap: 12, gridTemplateColumns: "1fr 160px 120px", alignItems: "end" }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Course Title</label>
                      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Advanced Algorithms" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Course Code</label>
                      <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="e.g. CS301" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Credits</label>
                      <input value={credits} onChange={(e) => setCredits(e.target.value)} placeholder="3" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>
                  </div>

                  {error && <div style={{ color: "#b91c1c", marginTop: 10 }}>{error}</div>}

                  <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                    <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#059669", color: "#fff", fontWeight: 700, cursor: "pointer" }}>Save Course</button>
                    <button type="button" onClick={() => setShowForm(false)} style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e6eef8", background: "#fff", cursor: "pointer" }}>Cancel</button>
                  </div>
                </form>
              )}

              <section>
                <h2 style={{ marginTop: 0, marginBottom: 12 }}>Courses ({courses.length})</h2>
                {courses.length === 0 ? (
                  <div style={{ padding: 20, borderRadius: 8, background: "#fff", boxShadow: "0 8px 24px rgba(2,6,23,0.04)" }}>No courses yet. Click "Add Course" to create one.</div>
                ) : (
                  <div style={{ display: "grid", gap: 12 }}>
                    {courses.map((c) => (
                      <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
                        <div>
                          <div style={{ fontWeight: 800 }}>{c.title}</div>
                          <div style={{ color: "#6b7280", marginTop: 6 }}>{c.code} • {c.credits} credits</div>
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button type="button" onClick={() => navigator.clipboard?.writeText(`${c.code} - ${c.title}`)} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #e6eef8", background: "#fff", cursor: "pointer" }}>Copy</button>
                          <button type="button" onClick={() => handleRemove(c.id)} style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "#ef4444", color: "#fff", cursor: "pointer" }}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            </div>
          </section>

          {/* Assignments Section */}
          <section
            className={`section ${active === "assignments" ? "active" : ""}`}
          >
            <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto", boxSizing: "border-box" }}>
              <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <div>
                  <h1 style={{ margin: 0 }}>Faculty — Assignments</h1>
                  <div style={{ color: "#6b7280", fontSize: 14 }}>Manage assignments and exams for your courses</div>
                </div>
                <div>
                  <button type="button" onClick={() => setShowAsgForm(s => !s)} style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#0ea5a9", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                    {showAsgForm ? "Close" : "Create Assignment"}
                  </button>
                </div>
              </header>

              {showAsgForm && (
                <form onSubmit={handleAddAssignment} style={{ marginBottom: 18, background: "#fff", padding: 16, borderRadius: 10, boxShadow: "0 8px 24px rgba(2,6,23,0.06)" }}>
                {/* mode selector */}
                <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "center" }}>
                  <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input type="radio" name="asgMode" value="manual" checked={asgMode === "manual"} onChange={() => setAsgMode("manual")} />
                    <span>Manual</span>
                  </label>
                  <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <input type="radio" name="asgMode" value="file" checked={asgMode === "file"} onChange={() => setAsgMode("file")} />
                    <span>Upload file</span>
                  </label>
                </div>

                {asgMode === "manual" ? (
                  <div style={{ display: "grid", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Assignment Title</label>
                      <input value={asgTitle} onChange={(e) => setAsgTitle(e.target.value)} placeholder="Assignment title" style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Description</label>
                      <textarea value={asgDesc} onChange={(e) => setAsgDesc(e.target.value)} placeholder="Brief description" rows={3} style={{ width: "100%", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Due Date</label>
                      <input type="date" value={asgDue} onChange={(e) => setAsgDue(e.target.value)} style={{ width: "200px", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "grid", gap: 12 }}>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Select file (max 5MB)</label>
                      <input type="file" accept="*" onChange={handleFileChange} />
                      {asgFile && <div style={{ marginTop: 8, color: "#374151" }}>{asgFile.name} ({asgFile.type})</div>}
                      {asgFileError && <div style={{ color: "#b91c1c", marginTop: 8 }}>{asgFileError}</div>}
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 13, marginBottom: 6 }}>Optional Due Date</label>
                      <input type="date" value={asgDue} onChange={(e) => setAsgDue(e.target.value)} style={{ width: "200px", padding: 10, borderRadius: 8, border: "1px solid #e6eef8" }} />
                    </div>
                  </div>
                )}

                {(asgError) && <div style={{ color: "#b91c1c", marginTop: 10 }}>{asgError}</div>}

                <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
                  <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, border: "none", background: "#0ea5a9", color: "#fff", fontWeight: 700, cursor: "pointer" }}>
                    {asgMode === "manual" ? "Create Assignment" : "Upload & Create"}
                  </button>
                  <button type="button" onClick={() => setShowAsgForm(false)} style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #e6eef8", background: "#fff", cursor: "pointer" }}>Cancel</button>
                </div>
              </form>
              )}

              <section style={{ marginTop: 28 }}>
                <h2 style={{ marginTop: 0, marginBottom: 12 }}>Assignments ({assignments.length})</h2>
                {assignments.length === 0 ? (
                  <div style={{ padding: 16, borderRadius: 8, background: "#fff", boxShadow: "0 8px 24px rgba(2,6,23,0.04)" }}>No assignments yet. Click "Create Assignment" to add one.</div>
                ) : (
                  <div style={{ display: "grid", gap: 12 }}>
                    {assignments.map(a => (
                      <div key={a.id} style={{ background: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 8px 20px rgba(2,6,23,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <div style={{ fontWeight: 800 }}>{a.title}</div>
                          <div style={{ color: "#6b7280", marginTop: 6 }}>{a.description}</div>
                          <div style={{ color: "#98a0ad", marginTop: 8 }}>Due: {a.due || "N/A"}</div>
                          {a.source === "file" && a.file && (
                            <div style={{ marginTop: 8 }}>
                              <strong>File:</strong> {a.file.name} ({a.file.type})
                            </div>
                          )}
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <button type="button" onClick={() => navigator.clipboard?.writeText(`${a.title} - due ${a.due || "N/A"}`)} style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #e6eef8", background: "#fff", cursor: "pointer" }}>Copy</button>
                          <button type="button" onClick={() => handleRemoveAssignment(a.id)} style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "#ef4444", color: "#fff", cursor: "pointer" }}>Remove</button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                {asgMsg && <div style={{ marginTop: 12, color: "#059669", fontWeight: 700 }}>{asgMsg}</div>}
              </section>

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
