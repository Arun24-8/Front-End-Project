import React from "react";

const Card = ({ icon, title, value, subtitle }) => (
  <div className="stat-card animate-card" role="article" tabIndex={0}>
    <div className="stat-card-header">
      <div className="stat-card-icon" aria-hidden>{icon}</div>
    </div>
    <div className="stat-card-title">{title}</div>
    <div className="stat-card-value">{value}</div>
    {subtitle && <div className="stat-card-subtitle">{subtitle}</div>}
    <style>{`
      .animate-card { animation: fadeUp 360ms cubic-bezier(.22,.9,.26,1) both; }
      @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
      .stat-card { background:#fff;border-radius:12px;padding:18px; box-shadow:0 6px 12px rgba(0,0,0,0.06); }
      .stat-card-title{font-size:13px;color:#666}
      .stat-card-value{font-size:24px;font-weight:800;color:#2c3e50;margin-top:8px}
      .stat-card-subtitle{color:#888;font-size:12px;margin-top:6px}
    `}</style>
  </div>
);

export default function Admin_StatGrid() {
  const cards = [
    { icon: "👥", title: "Total Students", value: "2,847", subtitle: "Active enrollments" },
    { icon: "👨‍🏫", title: "Faculty Members", value: "156", subtitle: "Teaching staff" },
    { icon: "🏢", title: "Departments", value: "12", subtitle: "Academic departments" },
    { icon: "📚", title: "Active Courses", value: "284", subtitle: "This semester" },
    { icon: "💰", title: "Revenue", value: "₹2.4Cr", subtitle: "This academic year" },
    { icon: "📊", title: "Attendance Rate", value: "87.5%", subtitle: "Institution average" },
  ];

  return (
    <div style={{ marginBottom: 16 }}>
      <div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))" }}>
        {cards.map((c, i) => <Card key={i} {...c} />)}
      </div>
    </div>
  );
}
