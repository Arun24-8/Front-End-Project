import React from "react";

export default function DashboardHome({ student }) {
  const name = student?.name || "Student";
  return (
    <div style={{ color: "#0f172a", fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif" }}>
      <h2 style={{ color: "#1e3a8a", marginTop: 0 }}>Welcome back, {name.split(" ")[0]}!</h2>
      <p style={{ color: "#6b7280", marginTop: 6 }}>Here's your academic overview for the current semester.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginTop: 16 }}>
        <div style={{ background: "#fff", padding: 14, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.04)" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Current CGPA</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{student?.cgpa ?? "8.45"}</div>
        </div>
        <div style={{ background: "#fff", padding: 14, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.04)" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Attendance</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{student?.attendance ?? "87.5%"}</div>
        </div>
        <div style={{ background: "#fff", padding: 14, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.04)" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Fees Due</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{student?.feesDue ?? "₹60,000"}</div>
        </div>
        <div style={{ background: "#fff", padding: 14, borderRadius: 8, boxShadow: "0 4px 12px rgba(2,6,23,0.04)" }}>
          <div style={{ fontSize: 12, color: "#6b7280", fontWeight: 700 }}>Backlogs</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>{student?.backlogs ?? 0}</div>
        </div>
      </div>

      <section style={{ marginTop: 18 }}>
        <h3 style={{ margin: "16px 0 8px", color: "#1e3a8a" }}>Recent Announcements</h3>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ padding: 10, borderLeft: "4px solid #f59e0b", background: "#fffbeb", borderRadius: 6 }}>
            <div style={{ fontSize: 12, color: "#92400e", fontWeight: 700 }}>Dec 15, 2024</div>
            <div style={{ marginTop: 6, color: "#1f2937" }}>End semester examinations will commence from January 8, 2025.</div>
          </div>
          <div style={{ padding: 10, borderLeft: "4px solid #f59e0b", background: "#fffbeb", borderRadius: 6 }}>
            <div style={{ fontSize: 12, color: "#92400e", fontWeight: 700 }}>Dec 12, 2024</div>
            <div style={{ marginTop: 6, color: "#1f2937" }}>Winter break starts from December 20, 2024.</div>
          </div>
        </div>
      </section>
    </div>
  );
}
