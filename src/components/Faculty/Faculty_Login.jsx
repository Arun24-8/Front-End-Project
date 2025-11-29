import React, { useState } from "react";

export default function Faculty_Login({ onNavigate }) {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [remember, setRemember] = useState(false);

	// allowed faculty credentials for local testing
	const allowedFaculty = [
		{ username: "faculty1", password: "fac123456" },
		{ username: "profraj", password: "raj@1234" }
	];

	const handleSignIn = () => {
		setError("");
		if (!userId.trim()) {
			setError("Username cannot be blank.");
			return;
		}
		if (!password.trim()) {
			setError("Password cannot be blank.");
			return;
		}
		if (password.length < 6) {
			setError("Password must be at least 6 characters.");
			return;
		}
		const ok = allowedFaculty.find(u => u.username === userId && u.password === password);
		if (!ok) { setError("Invalid username or password."); return; }

		try { localStorage.setItem("facultyData", JSON.stringify({ id: userId })); } catch {}
		if (typeof onNavigate === "function") onNavigate("/faculty"); else try { window.history.pushState({}, "", "/faculty"); } catch {}
	};

	const submit = async (e) => {
		if (e && e.preventDefault) e.preventDefault();
		handleSignIn();
	};

	return (
		<div style={{ minHeight: "100vh", display: "flex", gap: 24, alignItems: "stretch", padding: 20, boxSizing: "border-box", fontFamily: "Segoe UI, Inter, system-ui" }}>
			<div style={{ flex:1, background:"#fff", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:12 }}>
				<img src="/src/components/Home/kl logo.jpg" alt="KLU" style={{ maxWidth:"60%", maxHeight:"60%", opacity:0.95 }} />
			</div>

			<div style={{ width: "100%", maxWidth: 480, display:"flex", alignItems:"center", justifyContent:"center" }}>
				<div style={{
					width: "100%",
					background: "#fff",
					padding: 28,
					borderRadius: 12,
					boxShadow: "0 18px 40px rgba(2,6,23,0.06)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "stretch",
					minHeight: 560,
					height: "68vh",
					boxSizing: "border-box"
				}}>
					<div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
						<div style={{ width:48,height:48,borderRadius:10,background:"linear-gradient(90deg,#06b6d4,#0ea5b4)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800 }}>KL</div>
						<div>
							<div style={{ fontSize:18,fontWeight:800 }}>Faculty Portal</div>
							<div style={{ color:"#6b7280", fontSize:13 }}>Teaching and evaluation tools</div>
						</div>
					</div>

					<label style={{ display:"block", fontWeight:700, color:"#374151", marginBottom:6 }}>User ID</label>
					<input value={userId} onChange={(e)=>setUserId(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&submit()} style={{ width:"100%", padding:12, borderRadius:8, border:"1px solid #e6eef8", marginBottom:12 }} placeholder="faculty@university.edu" />

					<label style={{ display:"block", fontWeight:700, color:"#374151", marginBottom:6 }}>Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&submit()} style={{ width:"100%", padding:12, borderRadius:8, border:"1px solid #e6eef8", marginBottom:12 }} placeholder="Enter your password" />

					<div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
						<label style={{ display:"flex", alignItems:"center", gap:8 }}>
							<input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
							<span style={{ fontSize:13 }}>Remember me</span>
						</label>
						<a href="#" onClick={(e)=>e.preventDefault()} style={{ color:"#06b6d4", fontSize:13 }}>Forgot?</a>
					</div>

					{error && <div style={{ color:"#b91c1c", fontWeight:700, marginBottom:12 }}>{error}</div>}

					<button type="submit" onClick={handleSignIn} style={{ width:"100%", padding:12, borderRadius:8, border:"none", background:"linear-gradient(90deg,#059669,#10b981)", color:"#fff", fontWeight:800, cursor:"pointer" }}>Sign In</button>
				</div>
			</div>
		</div>
	);
}
