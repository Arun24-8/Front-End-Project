import React from "react";

export default function Admin_Sections({ section }) {
  // Each inner component represents a large section from your HTML.
  const Users = () => (
    <div className="animate-section">
      <div style={{ marginBottom: 12 }}>
        <h3>User Management</h3>
      </div>
      <div className="data-table">
        <div className="table-header">
          <h3 className="table-title">User Management</h3>
          <div>
            <select className="form-select" style={{ width: "auto", marginRight: 12 }}>
              <option value="all">All Users</option>
              <option value="students">Students</option>
              <option value="faculty">Faculty</option>
              <option value="staff">Staff</option>
            </select>
            <button className="btn btn-primary">+ Add User</button>
          </div>
        </div>
        <table>
          <thead>
            <tr><th>User ID</th><th>Name</th><th>Role</th><th>Department</th><th>Status</th><th>Last Login</th><th>Actions</th></tr>
          </thead>
          <tbody>
            <tr><td>FAC001</td><td>Dr. Priya Sharma</td><td>Faculty</td><td>Computer Science</td><td><span className="badge badge-success">Active</span></td><td>2 hours ago</td><td><button className="btn btn-sm btn-primary">View</button>{' '}<button className="btn btn-sm btn-secondary">Edit</button></td></tr>
            <tr><td>STU2021001</td><td>Rahul Verma</td><td>Student</td><td>Computer Science</td><td><span className="badge badge-success">Active</span></td><td>1 hour ago</td><td><button className="btn btn-sm btn-primary">View</button>{' '}<button className="btn btn-sm btn-secondary">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Academics = () => (
    <div className="animate-section">
      <h3>Course Management</h3>
      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Course Management</h3><button className="btn btn-primary">+ Add Course</button></div>
        <table>
          <thead><tr><th>Course Code</th><th>Course Title</th><th>Department</th><th>Credits</th><th>Enrolled</th><th>Faculty</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>CSE401</td><td>Web Technologies</td><td>Computer Science</td><td>4</td><td>65</td><td>Dr. Priya Sharma</td><td><span className="badge badge-success">Active</span></td></tr>
            <tr><td>MTH201</td><td>Linear Algebra</td><td>Mathematics</td><td>3</td><td>120</td><td>Dr. Suresh Kumar</td><td><span className="badge badge-success">Active</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Library = () => (
    <div className="animate-section">
      <h3>Library Management</h3>
      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Book Management</h3><button className="btn btn-primary">+ Add Book</button></div>
        <table>
          <thead><tr><th>Book ID</th><th>Title</th><th>Author</th><th>Category</th><th>Available</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>BK001</td><td>Data Structures & Algorithms</td><td>Thomas H. Cormen</td><td>CS</td><td>5/10</td><td><span className="badge badge-success">Available</span></td></tr>
            <tr><td>BK002</td><td>Engineering Mathematics</td><td>B.S. Grewal</td><td>Math</td><td>0/8</td><td><span className="badge badge-danger">Out of Stock</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Hostel = () => (
    <div className="animate-section">
      <h3>Hostel Management</h3>
      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Room Allocation</h3><button className="btn btn-primary">+ Allocate Room</button></div>
        <table>
          <thead><tr><th>Room No</th><th>Hostel</th><th>Student Name</th><th>Student ID</th><th>Check-in Date</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>A-101</td><td>Boys Hostel A</td><td>Rahul Sharma</td><td>STU2021001</td><td>Aug 15, 2024</td><td><span className="badge badge-success">Occupied</span></td></tr>
            <tr><td>B-205</td><td>Girls Hostel B</td><td>Priya Patel</td><td>STU2021045</td><td>Aug 20, 2024</td><td><span className="badge badge-success">Occupied</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Transport = () => (
    <div className="animate-section">
      <h3>Transport Management</h3>
      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Bus Fleet Management</h3><button className="btn btn-primary">+ Add Bus</button></div>
        <table>
          <thead><tr><th>Bus No</th><th>Route</th><th>Driver</th><th>Capacity</th><th>Current Load</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>BUS-001</td><td>City Center - Campus</td><td>Rajesh Kumar</td><td>50</td><td>42</td><td><span className="badge badge-success">Active</span></td></tr>
            <tr><td>BUS-002</td><td>Railway Station - Campus</td><td>Suresh Singh</td><td>45</td><td>38</td><td><span className="badge badge-success">Active</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Events = () => (
    <div className="animate-section">
      <h3>Events & Activities</h3>
      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Event Management</h3><button className="btn btn-primary">+ Create Event</button></div>
        <table>
          <thead><tr><th>Event Name</th><th>Date</th><th>Venue</th><th>Organizer</th><th>Participants</th><th>Status</th></tr></thead>
          <tbody>
            <tr><td>Tech Fest 2025</td><td>Jan 25-27, 2025</td><td>Main Auditorium</td><td>CS Club</td><td>450</td><td><span className="badge badge-warning">Planning</span></td></tr>
            <tr><td>Annual Sports Meet</td><td>Feb 10-12, 2025</td><td>Sports Complex</td><td>Sports Committee</td><td>800</td><td><span className="badge badge-info">Approved</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const Settings = () => (
    <div className="animate-section">
      <div className="alert alert-info"><span className="alert-icon">⚙️</span>
        <div><strong>System Configuration</strong><p>Manage institution settings, user permissions, and system preferences</p></div>
      </div>

      <div className="dashboard-grid" style={{ marginBottom: 12 }}>
        <div className="stat-card"><div className="stat-card-title">General Settings</div><div className="stat-card-subtitle">Institution details & preferences</div></div>
        <div className="stat-card"><div className="stat-card-title">User Permissions</div><div className="stat-card-subtitle">Role-based access control</div></div>
        <div className="stat-card"><div className="stat-card-title">Academic Settings</div><div className="stat-card-subtitle">Semester & course configuration</div></div>
      </div>

      <div className="data-table">
        <div className="table-header"><h3 className="table-title">Quick Settings</h3></div>
        <table>
          <thead><tr><th>Setting</th><th>Current Value</th><th>Description</th><th>Actions</th></tr></thead>
          <tbody>
            <tr><td>Academic Year</td><td>2024-25</td><td>Current academic session</td><td><button className="btn btn-sm btn-secondary">Edit</button></td></tr>
            <tr><td>Current Semester</td><td>Spring 2025</td><td>Active semester</td><td><button className="btn btn-sm btn-secondary">Edit</button></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );

  const map = {
    users: <Users />,
    academics: <Academics />,
    library: <Library />,
    hostel: <Hostel />,
    transport: <Transport />,
    events: <Events />,
    settings: <Settings />
  };

  return (
    <div>
      {map[section] || <div className="animate-section"><p>Section not found</p></div>}
      <style>{`
        /* entrance */
        .animate-section { animation: fadeUp 320ms cubic-bezier(.22,.9,.26,1) both; }
        @keyframes fadeUp { from { opacity:0; transform: translateY(8px);} to { opacity:1; transform: translateY(0);} }

        /* data-table */
        .data-table {
          background:#fff;
          border-radius:12px;
          padding:0;
          margin-bottom:16px;
          box-shadow:0 8px 20px rgba(2,6,23,0.04);
          overflow:hidden;
          transition: transform 220ms cubic-bezier(.22,.9,.26,1), box-shadow 220ms;
        }
        .data-table:hover { transform: translateY(-4px); box-shadow:0 18px 40px rgba(2,6,23,0.06); }

        .table-header { padding:12px 16px; border-bottom:1px solid #f1f1f1; display:flex; justify-content:space-between; align-items:center; gap:12px; }
        .table-title { margin:0; font-weight:700; color:#2c3e50; }

        /* tables: striped, hover and focus */
        table { width:100%; border-collapse:collapse; }
        thead th { background:#fbfdfe; padding:12px 14px; text-align:left; font-size:13px; color:#556; border-bottom:1px solid #eef3f7; }
        tbody tr { transition: background-color 180ms ease, transform 160ms ease; }
        tbody tr:nth-child(odd) { background: #ffffff; }
        tbody tr:nth-child(even) { background: #fbfbfb; }
        tbody tr:hover { background: #f1f7ff; transform: translateX(6px); }
        tbody tr:focus-within { outline: 2px solid rgba(100,116,255,0.12); }
        tbody td { padding:12px 14px; border-bottom:1px solid #f6f7f8; color:#333; vertical-align:middle; }

        /* action buttons */
        .btn { border-radius:8px; padding:8px 12px; cursor:pointer; transition: transform 140ms ease, box-shadow 160ms ease, background 160ms; }
        .btn:hover { transform: translateY(-3px); box-shadow: 0 8px 18px rgba(2,6,23,0.08); }
        .btn:active { transform: translateY(-1px); }
        .btn-sm { padding:6px 10px; border-radius:6px; }
        .btn-primary { background: linear-gradient(135deg,#667eea,#764ba2); color:#fff; border:none; }
        .btn-secondary { background:#6c757d; color:#fff; border:none; }
        .btn-success { background:#10b981; color:#fff; border:none; }

        /* stat cards: hover lift */
        .dashboard-grid { display:grid; grid-template-columns: repeat(auto-fit,minmax(240px,1fr)); gap:16px; margin-bottom:16px; }
        .stat-card {
          background:#fff;
          padding:16px;
          border-radius:10px;
          box-shadow:0 6px 14px rgba(2,6,23,0.04);
          transition: transform 220ms cubic-bezier(.22,.9,.26,1), box-shadow 220ms;
          cursor: default;
        }
        .stat-card:hover { transform: translateY(-8px); box-shadow:0 20px 40px rgba(2,6,23,0.08); }
        .stat-card-title{ font-size:13px; color:#666; }
        .stat-card-value{ font-size:22px; font-weight:800; color:#2c3e50; margin-top:8px; }
        .stat-card-subtitle{ font-size:12px; color:#8b97a6; margin-top:6px; }

        /* badges */
        .badge { padding:6px 10px; border-radius:12px; font-weight:700; display:inline-block; transition: transform 120ms, box-shadow 120ms; }
        .badge:hover { transform: translateY(-2px); box-shadow: 0 6px 12px rgba(2,6,23,0.06); }
        .badge-success { background:#d4edda; color:#155724; }
        .badge-warning { background:#fff3cd; color:#856404; }
        .badge-danger { background:#f8d7da; color:#721c24; }
        .badge-info { background:#d1ecf1; color:#0c5460; }

        /* small screens */
        @media (max-width: 768px) {
          .data-table:hover { transform:none; box-shadow:0 8px 20px rgba(2,6,23,0.04); }
          .stat-card:hover { transform:none; }
        }

        /* reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .animate-section, .data-table, .stat-card, .nav-item, tbody tr { animation: none !important; transition: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}
