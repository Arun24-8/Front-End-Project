import React from "react";

export default function Profile({ student }) {
  const s = student || {};
  return (
    <div style={{ fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif", color: "#0f172a" }}>
      <h2 style={{ color: "#1e3a8a" }}>Student Profile</h2>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Full Name</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{s.name ?? "John Smith"}</div>
        </div>
        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Student ID</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{s.id ?? "2024CSE001"}</div>
        </div>
        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Program</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{s.program ?? "B.Tech Computer Science"}</div>
        </div>
        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Semester</div>
          <div style={{ marginTop: 6, fontWeight: 600 }}>{s.semester ?? "6th Semester"}</div>
        </div>
      </div>
    </div>
  );
}
