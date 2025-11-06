import React from "react";

export default function Attendance() {
  const subjects = [
    { name: "Data Structures & Algorithms (CSE301)", percent: 92, status: "Safe" },
    { name: "Database Management Systems (CSE302)", percent: 85, status: "Safe" },
    { name: "Computer Networks (CSE303)", percent: 74, status: "Borderline" },
  ];

  return (
    <div>
      <h2 style={{ color: "#1e3a8a" }}>Attendance Summary</h2>
      <div style={{ marginTop: 12, display: "grid", gap: 12 }}>
        {subjects.map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: 12, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.03)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontWeight: 700 }}>{s.name}</div>
              <div style={{ fontWeight: 700, color: s.percent >= 75 ? "#059669" : "#d97706" }}>{s.percent}%</div>
            </div>
            <div style={{ height: 8, background: "#e5e7eb", borderRadius: 6, overflow: "hidden", marginTop: 8 }}>
              <div style={{ width: `${s.percent}%`, height: "100%", background: s.percent >= 75 ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#f59e0b,#d97706)" }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
