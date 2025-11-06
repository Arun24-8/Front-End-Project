import React from "react";

export default function Faculty_RecentActivities() {
  const rows = [
    { date: "Jan 10, 2025", activity: "Assignment Submission Deadline", course: "CSE401", status: "23 Pending", kind: "warning" },
    { date: "Jan 09, 2025", activity: "Lecture Conducted", course: "CSE403", status: "Completed", kind: "success" },
  ];

  return (
    <div className="data-table animate-table" style={{ marginBottom: 16 }}>
      <div className="table-header"><h3>Recent Activities</h3></div>
      <table className="simple-table" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{ background: "#f8f9fa" }}>
          <tr><th style={{ padding: 10 }}>Date</th><th style={{ padding: 10 }}>Activity</th><th style={{ padding: 10 }}>Course</th><th style={{ padding: 10 }}>Status</th></tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} style={{ borderBottom: "1px solid #f3f3f3" }}>
              <td style={{ padding: 10 }}>{r.date}</td>
              <td style={{ padding: 10 }}>{r.activity}</td>
              <td style={{ padding: 10 }}>{r.course}</td>
              <td style={{ padding: 10 }}>{r.kind === "warning" ? <span className="badge badge-warning">{r.status}</span> : <span className="badge badge-success">{r.status}</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <style>{`
        .animate-table { animation: fadeUp 380ms cubic-bezier(.22,.9,.26,1) both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        .data-table { background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 6px 12px rgba(2,6,23,0.04); }
        .table-header { padding:12px 16px; border-bottom:1px solid #eee; }
        .badge { padding:6px 10px; border-radius:14px; font-weight:700; display:inline-block; }
        .badge-warning { background:#fff3cd; color:#856404; }
        .badge-success { background:#d4edda; color:#155724; }
      `}</style>
    </div>
  );
}
