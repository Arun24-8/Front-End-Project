import React from "react";

export default function HallTickets() {
  const upcoming = { exam: "End Semester Exams (Sem 6)", start: "Jan 08, 2025", status: "Available Soon" };
  const previous = { exam: "End Semester Exams (Sem 5)", status: "Available", file: "/mock/hallticket_sem5.pdf" };

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>🎫</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Hall Tickets</h2>
          <div style={{ color: "#6b7280" }}>Download your exam hall tickets</div>
        </div>
      </header>

      <div style={{ display: "grid", gap: 12 }}>
        <div style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
          <div style={{ fontWeight: 800 }}>{upcoming.exam}</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>Start Date: {upcoming.start} • Status: {upcoming.status}</div>
          <div style={{ marginTop: 8 }}>
            <button style={{ background: "#9ca3af", color: "#fff", padding: "8px 12px", borderRadius: 8 }} disabled>⬇️ Download</button>
          </div>
        </div>

        <div style={{ background: "#fff", padding: 12, borderRadius: 8 }}>
          <div style={{ fontWeight: 800 }}>{previous.exam}</div>
          <div style={{ color: "#6b7280", marginTop: 6 }}>Status: {previous.status}</div>
          <div style={{ marginTop: 8 }}>
            <a href={previous.file} download style={{ background: "#3b82f6", color: "#fff", padding: "8px 12px", borderRadius: 8, textDecoration: "none" }}>⬇️ Download Hall Ticket</a>
          </div>
        </div>
      </div>
    </div>
  );
}
