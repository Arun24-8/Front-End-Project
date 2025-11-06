import React from "react";

export default function Admin_RecentActivities() {
  const rows = [
    { date: "Jan 10, 2025", activity: "New Faculty Onboarding", dept: "Computer Science", status: "In Progress", priority: "Medium" },
    { date: "Jan 09, 2025", activity: "Semester Fee Collection", dept: "Finance", status: "Completed", priority: "High" },
    { date: "Jan 08, 2025", activity: "Infrastructure Maintenance", dept: "Facilities", status: "Scheduled", priority: "Medium" },
    { date: "Jan 07, 2025", activity: "Academic Calendar Update", dept: "Academic Affairs", status: "Published", priority: "Low" },
  ];

  return (
    <div className="data-table animate-table" style={{ marginBottom: 16 }}>
      <div className="table-header"><h3 className="table-title">Recent Activities</h3></div>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#f8f9fa" }}>
          <tr>
            <th style={{ padding: 12 }}>Date</th>
            <th style={{ padding: 12 }}>Activity</th>
            <th style={{ padding: 12 }}>Department</th>
            <th style={{ padding: 12 }}>Status</th>
            <th style={{ padding: 12 }}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r,i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f0f0f0" }}>
              <td style={{ padding: 12 }}>{r.date}</td>
              <td style={{ padding: 12 }}>{r.activity}</td>
              <td style={{ padding: 12 }}>{r.dept}</td>
              <td style={{ padding: 12 }}><span className={`badge ${r.status === "Completed" ? "badge-success":"badge-warning"}`}>{r.status}</span></td>
              <td style={{ padding: 12 }}><span className={`badge ${r.priority === "High" ? "badge-success": r.priority === "Medium" ? "badge-warning":"badge-info"}`}>{r.priority}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .animate-table { animation: fadeUp 380ms both; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:translateY(0) } }
        .badge { padding:6px 10px; border-radius:14px; font-weight:700; }
        .badge-success { background:#d4edda; color:#155724; }
        .badge-warning { background:#fff3cd; color:#856404; }
        .badge-info { background:#d1ecf1; color:#0c5460; }
      `}</style>
    </div>
  );
}
