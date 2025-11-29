import React from "react";

export default function Timetable() {
  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>📅</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Time Table</h2>
          <div style={{ color: "#6b7280" }}>Weekly schedule with room & faculty info</div>
        </div>
      </header>

      <div style={{ overflowX: "auto", background: "#fff", padding: 12, borderRadius: 8 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 820 }}>
          <thead style={{ background: "#1e3a8a", color: "#fff" }}>
            <tr>
              <th style={{ padding: 10 }}>Time</th>
              <th style={{ padding: 10 }}>Mon</th>
              <th style={{ padding: 10 }}>Tue</th>
              <th style={{ padding: 10 }}>Wed</th>
              <th style={{ padding: 10 }}>Thu</th>
              <th style={{ padding: 10 }}>Fri</th>
              <th style={{ padding: 10 }}>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: 10, background: "#f8fafc" }}>09:00 - 10:00</td>
              <td style={{ padding: 10 }}><strong>CSE301</strong><br/><small>R-101 • Dr. Sarah</small></td>
              <td style={{ padding: 10 }}><strong>CSE302</strong><br/><small>R-102 • Prof. Michael</small></td>
              <td style={{ padding: 10 }}><strong>CSE301</strong><br/><small>R-101 • Dr. Sarah</small></td>
              <td style={{ padding: 10 }}><strong>CSE303</strong><br/><small>R-103 • Dr. Emily</small></td>
              <td style={{ padding: 10 }}><strong>CSE302</strong><br/><small>R-102 • Prof. Michael</small></td>
              <td style={{ padding: 10 }}></td>
            </tr>
            <tr>
              <td style={{ padding: 10, background: "#f8fafc" }}>10:30 - 11:30</td>
              <td style={{ padding: 10 }}><strong>Lab: CSE301</strong><br/><small>Lab-1 • Tutors</small></td>
              <td style={{ padding: 10 }}><strong>CSE304</strong><br/><small>R-201 • Dr. Kumar</small></td>
              <td style={{ padding: 10 }}><strong>Workshop</strong><br/><small>Auditorium</small></td>
              <td style={{ padding: 10 }}><strong>CSE305</strong><br/><small>R-202 • Prof. Rao</small></td>
              <td style={{ padding: 10 }}><strong>CSE306</strong><br/><small>R-203 • Ms. Roy</small></td>
              <td style={{ padding: 10 }}></td>
            </tr>
            <tr>
              <td style={{ padding: 10, background: "#f8fafc" }}>13:00 - 14:00</td>
              <td style={{ padding: 10 }}><strong>Elective</strong><br/><small>Room TBA</small></td>
              <td style={{ padding: 10 }}></td>
              <td style={{ padding: 10 }}></td>
              <td style={{ padding: 10 }}></td>
              <td style={{ padding: 10 }}></td>
              <td style={{ padding: 10 }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: 12, color: "#6b7280" }}>
        <strong>Legend:</strong> Lecture • Lab • Workshop — rooms and primary faculty shown per cell.
      </div>
    </div>
  );
}
