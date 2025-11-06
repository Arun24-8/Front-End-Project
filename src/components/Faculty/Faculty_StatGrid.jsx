import React from "react";

const Card = ({ icon, title, value, subtitle }) => (
  <div className="stat-card animate-card">
    <div className="stat-card-header">
      <div className="stat-card-icon">{icon}</div>
    </div>
    <div className="stat-card-title">{title}</div>
    <div className="stat-card-value">{value}</div>
    {subtitle && <div className="stat-card-subtitle">{subtitle}</div>}
    <style>{`
      .animate-card { animation: fadeUp 360ms cubic-bezier(.22,.9,.26,1) both; }
      @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
      .stat-card { background:#fff;border-radius:10px;padding:14px;box-shadow:0 6px 12px rgba(2,6,23,0.06); }
      .stat-card-title{font-size:13px;color:#666;margin-top:6px}
      .stat-card-value{font-size:24px;font-weight:800;color:#1e3a8a;margin-top:6px}
      .stat-card-subtitle{color:#888;font-size:12px;margin-top:6px}
      .stat-card-icon{width:44px;height:44px;border-radius:8px;display:flex;align-items:center;justify-content:center}
    `}</style>
  </div>
);

export default function Faculty_StatGrid() {
  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "grid", gap: 14, gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))" }}>
        <Card icon="📚" title="Active Courses" value="5" subtitle="Computer Science & Engineering" />
        <Card icon="👥" title="Total Students" value="245" subtitle="Across all courses" />
        <Card icon="📝" title="Pending Evaluations" value="23" subtitle="Assignments & Exams" />
        <Card icon="📅" title="Classes This Week" value="18" subtitle="Lectures & Labs" />
      </div>
    </div>
  );
}
