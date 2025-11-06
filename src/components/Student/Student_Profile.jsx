import React, { useEffect, useState } from "react";

export default function Student_Profile(props) {
  const defaultMockStudent = {
    name: "John Smith",
    id: "2024CSE001",
    program: "B.Tech Computer Science",
    semester: "6th Semester",
    year: "2023-2024",
    email: "john.smith@kluniversity.edu",
    phone: "+91 98765 43210",
  };

  const [student, setStudent] = useState(() => {
    try {
      const s = localStorage.getItem("studentData");
      return s ? JSON.parse(s) : (props.student || defaultMockStudent);
    } catch {
      return props.student || defaultMockStudent;
    }
  });

  useEffect(() => {
    // Try to dynamically load shared studentData if it exists (safe, won't crash)
    let mounted = true;
    import("./studentData.js")
      .then((m) => {
        if (!mounted) return;
        if (m && m.mockStudentData) {
          const stored = localStorage.getItem("studentData");
          // prefer localStorage (login flow), else use module data
          setStudent(stored ? JSON.parse(stored) : m.mockStudentData);
        }
      })
      .catch(() => {
        // keep fallback if module not present
      });

    // keep local copy in case another component updated it
    try {
      const s = localStorage.getItem("studentData");
      if (s) setStudent(JSON.parse(s));
    } catch {}
    return () => { mounted = false; };
  }, [props.student]);

  if (!student) {
    return (
      <div style={{ padding: 24, textAlign: "center" }}>
        <h2 style={{ color: "#1e3a8a" }}>No student data</h2>
        <p>Please sign in to view the profile.</p>
      </div>
    );
  }

  return (
    <div className="sp-root">
      <main className="sp-main">
        <section className="sp-card">
          <div className="sp-top">
            <div className="sp-avatar">{(student.name || "S").split(" ").map(n => n[0]).slice(0,2).join("")}</div>
            <div className="sp-meta">
              <h2 className="sp-name">{student.name}</h2>
              <div className="sp-id">{student.id}</div>
              <div className="sp-program">{student.program} • {student.semester}</div>
            </div>
          </div>

          <div className="sp-grid">
            <div className="sp-block">
              <div className="sp-label">Student ID</div>
              <div className="sp-value">{student.id}</div>
            </div>
            <div className="sp-block">
              <div className="sp-label">Program</div>
              <div className="sp-value">{student.program}</div>
            </div>
            <div className="sp-block">
              <div className="sp-label">Semester</div>
              <div className="sp-value">{student.semester}</div>
            </div>
            <div className="sp-block">
              <div className="sp-label">Academic Year</div>
              <div className="sp-value">{student.year}</div>
            </div>

            <div className="sp-block wide">
              <div className="sp-label">Email</div>
              <div className="sp-value">john.smith@kluniversity.edu</div>
            </div>
            <div className="sp-block wide">
              <div className="sp-label">Phone</div>
              <div className="sp-value">+91 98765 43210</div>
            </div>
            <div className="sp-block wide">
              <div className="sp-label">Address</div>
              <div className="sp-value">Hostel Block C, Room 305, KL University Campus, Vaddeswaram, AP, India - 522509</div>
            </div>
          </div>

          <div className="sp-section">
            <h3>Emergency Contact</h3>
            <div className="sp-grid">
              <div className="sp-block">
                <div className="sp-label">Contact Name</div>
                <div className="sp-value">Maria Smith (Mother)</div>
              </div>
              <div className="sp-block">
                <div className="sp-label">Phone</div>
                <div className="sp-value">+91 90000 00000</div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: 16 }}>
            <button className="sp-btn" disabled>Edit Profile</button>
          </div>
        </section>
      </main>

      <style>{`
        /* filepath: c:\\Users\\HP\\OneDrive\\Desktop\\FrontEnd\\Sdp-13\\src\\components\\Student\\Student_Profile.jsx */
        .sp-root { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color:#111827; min-height:100vh; background:linear-gradient(135deg,#f5f7fa 0%,#eef2ff 100%); padding:24px; box-sizing:border-box; }
        .sp-main { max-width:1100px; margin:0 auto; }
        .sp-card { background:#fff; padding:20px; border-radius:12px; box-shadow:0 8px 24px rgba(2,6,23,0.06); }

        .sp-top { display:flex; gap:18px; align-items:center; border-bottom:1px solid #eef2f7; padding-bottom:16px; margin-bottom:16px; flex-wrap:wrap; }
        .sp-avatar { width:88px; height:88px; border-radius:16px; background:linear-gradient(135deg,#667eea,#764ba2); color:#fff; display:flex; align-items:center; justify-content:center; font-size:28px; font-weight:800; }
        .sp-meta .sp-name { margin:0; font-size:20px; color:#0f172a; }
        .sp-id { font-size:13px; color:#6b7280; margin-top:6px; }
        .sp-program { font-size:13px; color:#4b5563; margin-top:6px; }

        .sp-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:12px; margin-top:12px; }
        .sp-block { background:#f8fafc; padding:12px; border-radius:8px; border-left:4px solid #3b82f6; }
        .sp-block.wide { grid-column: 1 / -1; }
        .sp-label { font-size:12px; color:#6b7280; font-weight:700; text-transform:uppercase; }
        .sp-value { font-size:15px; color:#0f172a; margin-top:6px; font-weight:600; }

        .sp-section { margin-top:20px; }
        .sp-section h3 { margin:0 0 12px 0; color:#1e3a8a; }

        .sp-btn { background:#1e3a8a; color:#fff; padding:10px 14px; border-radius:8px; border:none; font-weight:700; cursor:not-allowed; opacity:0.9; }

        @media (max-width:720px) {
          .sp-grid { grid-template-columns: 1fr; }
          .sp-top { gap:12px; }
        }
      `}</style>
    </div>
  );
}
