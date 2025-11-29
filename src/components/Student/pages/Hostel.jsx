import React from "react";

export default function Hostel() {
  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>🏠</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Hostel Management</h2>
          <div style={{ color: "#6b7280" }}>Room details, warden contact and hostel services</div>
        </div>
      </header>

      <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
        <div style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Hostel Name</div><div>Block C (Boys Hostel)</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Room Number</div><div>C-405</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Room Type</div><div>2-Seater AC</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Warden</div><div>Mr. R. Sharma</div>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ color: "#6b7280" }}>Warden Contact</div><div>+91 9988776655</div>
          </div>

          <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
            <button style={{ background: "#3b82f6", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8 }}>Request Maintenance</button>
            <button style={{ background: "#10b981", color: "#fff", border: "none", padding: "8px 12px", borderRadius: 8 }}>View Mess Menu</button>
          </div>
        </div>
      </div>
    </div>
  );
}
