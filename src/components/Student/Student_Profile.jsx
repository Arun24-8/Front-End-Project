import React, { useEffect, useState } from "react";

export default function Student_Profile() {
	const [student, setStudent] = useState(null);

	useEffect(() => {
		try {
			const raw = localStorage.getItem("studentData");
			if (raw) {
				setStudent(JSON.parse(raw));
				return;
			}
		} catch (e) {}
		// fallback: ensure Sai is shown if nothing in storage
		setStudent({
			name: "Sai",
			id: "S001",
			program: "B.Tech Computer Science",
			email: "sai@university.edu",
			phone: "+91 90000 00000",
			year: "3rd Year",
			roll: "2024CSE001",
			room: "Hostel A - 101"
		});
	}, []);

	if (!student) return <div style={{ padding: 20 }}>Loading profile...</div>;

	return (
		<div style={{ padding: 20, maxWidth: 900 }}>
			<header style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 18 }}>
				<div style={{ width: 72, height: 72, borderRadius: 12, background: "linear-gradient(135deg,#4f46e5,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 800, fontSize: 20 }}>
					{student.name[0]}
				</div>
				<div>
					<h2 style={{ margin: 0 }}>{student.name}</h2>
					<div style={{ color: "#6b7280" }}>{student.program} • {student.year}</div>
				</div>
			</header>

			<section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
				<div style={{ background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
					<div style={{ color: "#6b7280", fontSize: 13 }}>Student ID</div>
					<div style={{ fontWeight: 700, marginTop: 6 }}>{student.id}</div>
				</div>
				<div style={{ background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
					<div style={{ color: "#6b7280", fontSize: 13 }}>Roll Number</div>
					<div style={{ fontWeight: 700, marginTop: 6 }}>{student.roll}</div>
				</div>

				<div style={{ background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
					<div style={{ color: "#6b7280", fontSize: 13 }}>Email</div>
					<div style={{ fontWeight: 700, marginTop: 6 }}>{student.email}</div>
				</div>
				<div style={{ background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
					<div style={{ color: "#6b7280", fontSize: 13 }}>Phone</div>
					<div style={{ fontWeight: 700, marginTop: 6 }}>{student.phone}</div>
				</div>

				<div style={{ gridColumn: "1 / -1", background: "#fff", padding: 12, borderRadius: 10, boxShadow: "0 8px 20px rgba(2,6,23,0.04)" }}>
					<div style={{ color: "#6b7280", fontSize: 13 }}>Additional Info</div>
					<div style={{ marginTop: 8, color: "#374151" }}>
						<div>Program: {student.program}</div>
						<div>Year: {student.year}</div>
						<div>Hostel/Room: {student.room || "N/A"}</div>
					</div>
				</div>
			</section>
		</div>
	);
}
