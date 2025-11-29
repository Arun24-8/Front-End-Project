import React from "react";

export default function Courses() {
  // expanded course list with descriptions
  const courses = [
    { name: "Data Structures & Algorithms", code: "CSE301", credits: 4, type: "Core", prereq: "Programming Fundamentals", faculty: "Dr. Sarah Johnson", desc: "Algorithms, complexity, trees, graphs, sorting and searching." },
    { name: "Database Management Systems", code: "CSE302", credits: 3, type: "Core", prereq: "Data Structures", faculty: "Prof. Michael Chen", desc: "Relational models, SQL, transactions, indexing and normalization." },
    { name: "Computer Networks", code: "CSE303", credits: 3, type: "Core", prereq: "Computer Architecture", faculty: "Dr. Emily Davis", desc: "Network layers, TCP/IP, routing, switching and sockets." },
    { name: "Operating Systems", code: "CSE304", credits: 3, type: "Core", prereq: "Computer Architecture", faculty: "Dr. R. Kumar", desc: "Processes, threads, scheduling, memory and file systems." },
    { name: "Software Engineering", code: "CSE305", credits: 3, type: "Core", prereq: "Programming Fundamentals", faculty: "Prof. L. Rao", desc: "SDLC, requirements, testing, UML and agile practices." },
    { name: "Web Technologies", code: "CSE306", credits: 3, type: "Elective", prereq: "Programming Fundamentals", faculty: "Ms. A. Roy", desc: "HTML/CSS/JS, REST APIs, frontend frameworks and deployment." },
    { name: "Machine Learning", code: "CSE401", credits: 3, type: "Elective", prereq: "Linear Algebra", faculty: "Dr. P. Singh", desc: "Supervised/unsupervised learning, evaluation metrics, basic models." }
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>📖</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Courses</h2>
          <div style={{ color: "#6b7280" }}>Complete course catalog for the semester</div>
        </div>
      </header>

      <div style={{ display: "grid", gap: 12 }}>
        {courses.map(c => (
          <article key={c.code} style={{ background: "#fff", padding: 14, borderRadius: 8, boxShadow: "0 6px 18px rgba(2,6,23,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800 }}>{c.name} <span style={{ color: "#6b7280", fontWeight: 600, marginLeft: 8 }}>{c.code}</span></div>
                <div style={{ color: "#6b7280", marginTop: 6 }}>{c.desc}</div>
              </div>
              <div style={{ textAlign: "right", minWidth: 150 }}>
                <div style={{ fontWeight: 700 }}>{c.credits} credits</div>
                <div style={{ color: "#6b7280", marginTop: 6 }}>{c.type}</div>
                <div style={{ color: "#374151", marginTop: 8, fontWeight: 700 }}>{c.faculty}</div>
                <div style={{ color: "#6b7280", marginTop: 6 }}>Prereq: {c.prereq}</div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
