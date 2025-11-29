import React from "react";

export default function Academics() {
  const courses = [
    { name: "Data Structures & Algorithms", code: "CSE301", credits: 4, faculty: "Dr. Sarah Johnson" },
    { name: "Database Management Systems", code: "CSE302", credits: 3, faculty: "Prof. Michael Chen" },
    { name: "Computer Networks", code: "CSE303", credits: 3, faculty: "Dr. Emily Davis" },
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 16 }}>
        <div style={{ fontSize: 28 }}>📚</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Academic Records</h2>
          <div style={{ color: "#6b7280" }}>Overview of courses, credits and academic calendar</div>
        </div>
      </header>

      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginBottom: 18 }}>
        <div style={{ background: "#fff", padding: 12, borderRadius: 8, borderLeft: "4px solid #3b82f6" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Total Credits (So far)</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>160</div>
        </div>
        <div style={{ background: "#fff", padding: 12, borderRadius: 8, borderLeft: "4px solid #10b981" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Current CGPA</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>8.20</div>
        </div>
        <div style={{ background: "#fff", padding: 12, borderRadius: 8, borderLeft: "4px solid #f59e0b" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Backlogs</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>0</div>
        </div>
      </section>

      <section style={{ marginBottom: 18 }}>
        <h3 style={{ margin: "0 0 10px 0", color: "#1e3a8a" }}>Current Semester Courses</h3>
        <div style={{ display: "grid", gap: 10 }}>
          {courses.map(c => (
            <div key={c.code} style={{ background: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{c.name}</div>
                  <div style={{ color: "#6b7280", marginTop: 6 }}>{c.code} • {c.credits} credits</div>
                </div>
                <div style={{ textAlign: "right", color: "#6b7280" }}>{c.faculty}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{ color: "#1e3a8a", marginBottom: 8 }}>Academic Calendar</h3>
        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
            <div style={{ color: "#6b7280" }}>Semester Start</div>
            <div>August 15, 2024</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
            <div style={{ color: "#6b7280" }}>Mid-term Exams</div>
            <div>October 20-25, 2024</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
            <div style={{ color: "#6b7280" }}>End-term Exams</div>
            <div>January 8-15, 2025</div>
          </div>
        </div>
      </section>
    </div>
  );
}
