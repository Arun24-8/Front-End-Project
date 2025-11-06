import React from "react";

export default function Results() {
  const grades = [
    { code: "CSE301", title: "Data Structures & Algorithms", grade: "A", credits: 4 },
    { code: "CSE302", title: "Database Management Systems", grade: "A+", credits: 3 },
    { code: "CSE303", title: "Computer Networks", grade: "B+", credits: 3 },
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>🏆</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Exam Results</h2>
          <div style={{ color: "#6b7280" }}>Latest exam grades and GPA summary</div>
        </div>
      </header>

      <div style={{ display: "grid", gap: 10 }}>
        {grades.map(g => (
          <div key={g.code} style={{ background: "#fff", padding: 12, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 800 }}>{g.title}</div>
              <div style={{ color: "#6b7280" }}>{g.code} • {g.credits} credits</div>
            </div>
            <div style={{ fontSize: 18, fontWeight: 900 }}>{g.grade}</div>
          </div>
        ))}

        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Semester GPA (SGPA)</div>
            <div style={{ fontWeight: 800 }}>8.5</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8 }}>
            <div style={{ color: "#6b7280" }}>Cumulative GPA (CGPA)</div>
            <div style={{ fontWeight: 800 }}>8.2</div>
          </div>
        </div>
      </div>
    </div>
  );
}
