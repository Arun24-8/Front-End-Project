import React, { useState, useEffect } from "react";

/*
  Faculty_Attendence.jsx
  - Isolated attendance module extracted from the monolithic faculty HTML.
  - Usage: import Faculty_Attendence from './Faculty_Attendence.jsx' and render inside Faculty dashboard route/page.
  - Keeps local state for selected course and per-student attendance.
  - saveAttendance() currently shows a confirmation (no backend persistence).
*/

const defaultCourses = [
  { id: "CSE401", name: "CSE401 - Web Technologies" },
  { id: "CSE403", name: "CSE403 - Machine Learning" },
  { id: "MTH402", name: "MTH402 - Optimization" }
];

const defaultStudents = [
  { roll: "2021CSE045", name: "Rajesh Kumar", attendance: "present", current: "85%" },
  { roll: "2021CSE046", name: "Amit Sharma", attendance: "present", current: "78%" },
  { roll: "2021CSE047", name: "Priya Patel", attendance: "absent", current: "65%" },
  { roll: "2021CSE048", name: "Rohit Singh", attendance: "present", current: "92%" },
  { roll: "2021CSE049", name: "Sneha Reddy", attendance: "present", current: "88%" }
];

export default function Faculty_Attendence() {
  const [courses] = useState(defaultCourses);
  const [selectedCourse, setSelectedCourse] = useState(defaultCourses[0].id);
  const [students, setStudents] = useState([]);
  const [summary, setSummary] = useState([]);

  useEffect(() => {
    // initialize students state (clone default)
    setStudents(defaultStudents.map(s => ({ ...s })));
  }, []);

  useEffect(() => {
    // compute summary when students change
    computeSummary();
  }, [students]);

  function handleCourseChange(e) {
    setSelectedCourse(e.target.value);
    // In a real app we would fetch students for the selected course here
  }

  function setAttendance(roll, value) {
    setStudents(prev => prev.map(s => (s.roll === roll ? { ...s, attendance: value } : s)));
  }

  function saveAttendance() {
    // placeholder for saving logic (e.g., call API / firestore)
    const presentCount = students.filter(s => s.attendance === "present").length;
    const msg = `Attendance for ${selectedCourse} saved. Present: ${presentCount}/${students.length}. (No persistence in demo)`;
    // Small UI feedback
    if (typeof window !== "undefined" && window.alert) window.alert(msg);
    else console.log(msg);
  }

  function computeSummary() {
    // Simple summary grouped by course (demo uses single course)
    const avg = students.length
      ? (students.reduce((acc, s) => acc + (s.attendance === "present" ? 1 : 0), 0) / students.length) * 100
      : 0;
    setSummary([
      { course: selectedCourse, totalClasses: 45, conducted: 38, avg: `${avg.toFixed(1)}%`, low: "8 students" }
    ]);
  }

  return (
    <div className="animate-section" style={{ padding: 16 }}>
      <h3 style={{ marginBottom: 12, color: "#1e3a8a" }}>Mark Attendance</h3>

      <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <label htmlFor="attendance-course" style={{ fontWeight: 600 }}>Course</label>
        <select id="attendance-course" value={selectedCourse} onChange={handleCourseChange} style={{ padding: 8, borderRadius: 6 }}>
          {courses.map(c => (
            <option key={c.id} value={c.id}>{c.name}</option>
          ))}
        </select>

        <button onClick={saveAttendance} style={{
          marginLeft: "auto",
          background: "#10b981",
          color: "#fff",
          border: "none",
          padding: "8px 14px",
          borderRadius: 8,
          cursor: "pointer"
        }}>
          💾 Save Attendance
        </button>
      </div>

      <div style={{ overflowX: "auto", marginBottom: 20 }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa" }}>
            <tr>
              <th style={{ padding: 12, textAlign: "left" }}>Roll No</th>
              <th style={{ padding: 12, textAlign: "left" }}>Student Name</th>
              <th style={{ padding: 12, textAlign: "center" }}>Present</th>
              <th style={{ padding: 12, textAlign: "center" }}>Absent</th>
              <th style={{ padding: 12, textAlign: "right" }}>Current Attendance</th>
            </tr>
          </thead>
          <tbody>
            {students.map(s => (
              <tr key={s.roll} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: 12 }}>{s.roll}</td>
                <td style={{ padding: 12 }}>{s.name}</td>
                <td style={{ padding: 12, textAlign: "center" }}>
                  <input
                    type="radio"
                    name={`attendance_${s.roll}`}
                    checked={s.attendance === "present"}
                    onChange={() => setAttendance(s.roll, "present")}
                  />
                </td>
                <td style={{ padding: 12, textAlign: "center" }}>
                  <input
                    type="radio"
                    name={`attendance_${s.roll}`}
                    checked={s.attendance === "absent"}
                    onChange={() => setAttendance(s.roll, "absent")}
                  />
                </td>
                <td style={{ padding: 12, textAlign: "right" }}>{s.current}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h4 style={{ marginBottom: 8, color: "#1e3a8a" }}>Attendance Summary</h4>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f8f9fa" }}>
            <tr>
              <th style={{ padding: 12, textAlign: "left" }}>Course</th>
              <th style={{ padding: 12, textAlign: "center" }}>Total Classes</th>
              <th style={{ padding: 12, textAlign: "center" }}>Classes Conducted</th>
              <th style={{ padding: 12, textAlign: "center" }}>Average Attendance</th>
              <th style={{ padding: 12, textAlign: "center" }}>Low Attendance Students</th>
            </tr>
          </thead>
          <tbody>
            {summary.map((row, idx) => (
              <tr key={idx} style={{ borderBottom: "1px solid #f0f0f0" }}>
                <td style={{ padding: 12 }}>{row.course}</td>
                <td style={{ padding: 12, textAlign: "center" }}>{row.totalClasses}</td>
                <td style={{ padding: 12, textAlign: "center" }}>{row.conducted}</td>
                <td style={{ padding: 12, textAlign: "center" }}>{row.avg}</td>
                <td style={{ padding: 12, textAlign: "center" }}>{row.low}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        /* small animation helper used by sections */
        .animate-section { animation: fadeSlideUp 320ms cubic-bezier(.22,.9,.26,1) both; }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
