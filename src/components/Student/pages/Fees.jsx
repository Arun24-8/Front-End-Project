import React from "react";

export default function Fees() {
  const components = [
    { name: "Tuition Fee (Semester 6)", amount: "₹100,000", status: "Paid" },
    { name: "Hostel & Mess Charges (Jan-May)", amount: "₹35,000", status: "Partial" },
    { name: "Development Fee", amount: "₹10,000", status: "Unpaid" },
  ];

  return (
    <div>
      <h2 style={{ color: "#1e3a8a" }}>Fee Management</h2>
      <div style={{ marginTop: 12 }}>
        {components.map((c, idx) => (
          <div key={idx} style={{ display: "flex", justifyContent: "space-between", padding: 12, background: "#fff", borderRadius: 8, marginBottom: 8 }}>
            <div>
              <div style={{ fontWeight: 700 }}>{c.name}</div>
              <div style={{ color: "#6b7280" }}>{c.status}</div>
            </div>
            <div style={{ fontWeight: 700 }}>{c.amount}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
