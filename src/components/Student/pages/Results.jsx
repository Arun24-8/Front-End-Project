import React from "react";

export default function Results() {
  const grades = [
    { code: "CSE301", title: "Database Management Systems", grade: "A" },
    { code: "CSE302", title: "Operating Systems", grade: "A+" },
    { code: "CSE303", title: "Computer Networks", grade: "B+" },
  ];

  return (
    <div>
      <h2 style={{ color: "#1e3a8a" }}>Exam Results</h2>
      <div style={{ marginTop: 12 }}>
        {grades.map((g) => (
          <div key={g.code} style={{ display: "flex", justifyContent: "space-between", padding: 12, background: "#fff", borderRadius: 8, marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 700 }}>{g.title}</div>
              <div style={{ color: "#6b7280" }}>{g.code}</div>
            </div>
            <div style={{ fontWeight: 800 }}>{g.grade}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
