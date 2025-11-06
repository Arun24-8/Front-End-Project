import React from "react";

export default function Attendance() {
  const overall = { percent: 87.5, required: 75 };
  const subjects = [
    { name: "Data Structures & Algorithms", code: "CSE301", percent: 92, attended: "46/50" },
    { name: "Database Management Systems", code: "CSE302", percent: 85, attended: "42/50" },
    { name: "Computer Networks", code: "CSE303", percent: 74, attended: "37/50" },
    { name: "Operating Systems", code: "CSE304", percent: 88, attended: "44/50" },
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>✅</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Attendance</h2>
          <div style={{ color: "#6b7280" }}>Overall and per-subject attendance details</div>
        </div>
      </header>

      <div style={{ display: "flex", gap: 12, marginBottom: 12, flexWrap: "wrap" }}>
        <div style={{ background: "#fff", padding: 14, borderRadius: 8, minWidth: 180, borderLeft: "4px solid #3b82f6" }}>
          <div style={{ color: "#6b7280", fontWeight: 700 }}>Overall Attendance</div>
          <div style={{ fontSize: 22, fontWeight: 900, marginTop: 8 }}>{overall.percent}%</div>
          <div style={{ color: overall.percent >= overall.required ? "#059669" : "#d97706", marginTop: 6 }}>
            {overall.percent >= overall.required ? "Eligible" : "Below Required"}
          </div>
        </div>

        <div style={{ background: "#fff", padding: 14, borderRadius: 8, flex: 1 }}>
          <div style={{ fontWeight: 700 }}>Summary</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>Minimum required attendance: {overall.required}%</div>
        </div>
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        {subjects.map((s, i) => (
          <div key={i} style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontWeight: 700 }}>{s.name} <small style={{ color: "#6b7280", marginLeft: 8 }}>{s.code}</small></div>
              <div style={{ fontWeight: 900 }}>{s.percent}%</div>
            </div>
            <div style={{ height: 10, background: "#e5e7eb", borderRadius: 6, overflow: "hidden", marginTop: 8 }}>
              <div style={{ width: `${s.percent}%`, height: "100%", background: s.percent >= overall.required ? "linear-gradient(90deg,#10b981,#059669)" : "linear-gradient(90deg,#f59e0b,#d97706)" }} />
            </div>
            <div style={{ marginTop: 8, color: "#6b7280" }}>Attended: {s.attended}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
