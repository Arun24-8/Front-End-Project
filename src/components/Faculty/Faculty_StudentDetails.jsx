import React from "react";

export default function Faculty_StudentDetails() {
  const info = {
    name: "Dr. Priya Sharma",
    id: "FAC001",
    dept: "Computer Science & Engineering",
    designation: "Associate Professor",
    email: "priya.sharma@university.edu",
    phone: "+91 98765 12345",
    office: "Room 305, CS Block",
    doj: "2018-08-15",
    experience: "12 Years",
    qualification: "Ph.D. Computer Science",
    specialization: "Machine Learning, Data Science",
    address: "123 Faculty Lane, Campus, City - 500000"
  };

  return (
    <div className="profile-card animate-card" style={{ marginBottom: 16 }}>
      <div style={{ display: "flex", gap: 18, alignItems: "center", marginBottom: 12 }}>
        <div style={{ width:100, height:100, borderRadius:50, background: "linear-gradient(135deg,#667eea,#764ba2)", color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:36, fontWeight:700 }}>PS</div>
        <div>
          <h2 style={{ margin:0 }}>{info.name}</h2>
          <div style={{ color:"#6b7280", marginTop:6 }}>Faculty ID: {info.id} • {info.dept}</div>
        </div>
      </div>

      <div style={{ display:"grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap:12 }}>
        {[
          ["Designation", info.designation],
          ["Email", info.email],
          ["Phone", info.phone],
          ["Office", info.office],
          ["Date of Joining", info.doj],
          ["Experience", info.experience],
          ["Qualification", info.qualification],
          ["Specialization", info.specialization],
          ["Address", info.address]
        ].map(([label, val], i) => (
          <div key={i} style={{ background:"#fff", padding:12, borderRadius:8, boxShadow:"0 2px 6px rgba(0,0,0,0.04)" }}>
            <div style={{ fontSize:12, color:"#9aa0a6", textTransform:"uppercase", fontWeight:700 }}>{label}</div>
            <div style={{ marginTop:6, fontWeight:600 }}>{val}</div>
          </div>
        ))}
      </div>

      <style>{`
        .animate-card { animation: fadeUp 360ms cubic-bezier(.22,.9,.26,1) both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: translateY(0); } }
        .profile-card { background:#fff; border-radius:10px; padding:14px; box-shadow:0 6px 12px rgba(2,6,23,0.04); }
      `}</style>
    </div>
  );
}
