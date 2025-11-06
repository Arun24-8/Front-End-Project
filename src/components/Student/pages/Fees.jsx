import React from "react";

export default function Fees() {
  const breakdown = [
    { name: "Tuition Fee", amount: 100000, status: "Paid" },
    { name: "Hostel & Mess", amount: 35000, status: "Partial" },
    { name: "Development Fee", amount: 10000, status: "Unpaid" },
  ];

  const payments = [
    { date: "2024-08-01", desc: "Tuition (Installment 1)", amount: 50000 },
    { date: "2024-10-01", desc: "Hostel Advance", amount: 20000 },
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>💳</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Fee Management</h2>
          <div style={{ color: "#6b7280" }}>Charges, payment status and history</div>
        </div>
      </header>

      <div style={{ display: "grid", gap: 12 }}>
        {breakdown.map((b, idx) => (
          <div key={idx} style={{ background: "#fff", padding: 12, borderRadius: 8, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 800 }}>{b.name}</div>
              <div style={{ color: "#6b7280" }}>{b.status}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontWeight: 800 }}>₹ {b.amount.toLocaleString()}</div>
              <div style={{ marginTop: 8 }}>
                <button
                  style={{
                    background: b.status === "Paid" ? "#9ca3af" : "#3b82f6",
                    color: "#fff",
                    padding: "8px 12px",
                    borderRadius: 8,
                    border: "none",
                  }}
                  disabled={b.status === "Paid"}
                >
                  {b.status === "Paid" ? "Paid" : "Pay Now"}
                </button>
              </div>
            </div>
          </div>
        ))}

        <div style={{ background: "#f8fafc", padding: 12, borderRadius: 8 }}>
          <h3 style={{ margin: 0, color: "#1e3a8a" }}>Payment History</h3>
          <div style={{ marginTop: 8 }}>
            {payments.map((p, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: 8 }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{p.desc}</div>
                  <div style={{ color: "#6b7280" }}>{p.date}</div>
                </div>
                <div style={{ fontWeight: 800 }}>₹ {p.amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
