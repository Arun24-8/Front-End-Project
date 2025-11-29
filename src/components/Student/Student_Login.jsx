import React, { useState, useEffect } from "react";

export default function Student_Login({ onNavigate }) {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [remember, setRemember] = useState(false);

	const capchChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const [runCpach, setCapcha] = useState("");
	const [enteredCaptcha, setEnteredCaptcha] = useState("");
	const [captchaError, setCaptchaError] = useState("");

	const allowedStudents = [
		{ username: "sai", password: "sai123456" },
		{ username: "2400032926", password: "sai@123" }
	];

	useEffect(() => { generateCaptcha(); }, []);

	function generateCaptcha() {
		let s = "";
		for (let i = 0; i < 6; i++) s += capchChars[Math.floor(Math.random()*capchChars.length)];
		setCapcha(s);
		setEnteredCaptcha("");
		setCaptchaError("");
	}

	const handleSignIn = async (e) => {
	
		if (e && e.preventDefault) e.preventDefault();

		setError("");

		if (!enteredCaptcha.trim()) { setCaptchaError("Please enter verification code."); return; }
		if (enteredCaptcha !== runCpach) { setCaptchaError("The verification code is incorrect."); return; }
		setCaptchaError("");
		if (!userId.trim()) { setError("Username cannot be blank."); return; }
		if (!password.trim()) { setError("Password cannot be blank."); return; }
		if (password.length < 6) { setError("Password must be at least 6 characters."); return; }

		const match = allowedStudents.find(u => u.username === userId && u.password === password);
		if (!match) {
			setError("Invalid username or password.");
			return;
		}

		const saiProfile = {
			name: "Sai",
			id: "S001",
			program: "B.Tech Computer Science",
			email: userId,
			phone: "+91 90000 00000",
			year: "3rd Year",
			roll: "2024CSE001"
		};
		try { localStorage.setItem("studentData", JSON.stringify(saiProfile)); } catch {}
		if (typeof onNavigate === "function") onNavigate("/student"); else try { window.history.pushState({}, "", "/student"); } catch {}
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
					boxShadow: "0 18px 40px rgba(2,6,23,0.08)",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "stretch",
					minHeight: 560,
					height: "68vh",
					boxSizing: "border-box"
				}}>
					<div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:12 }}>
						<div style={{ width:48,height:48,borderRadius:10,background:"linear-gradient(90deg,#4f46e5,#7c3aed)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:800 }}>KL</div>
						<div>
							<div style={{ fontSize:18,fontWeight:800 }}>University Portal</div>
							<div style={{ color:"#6b7280", fontSize:13 }}>Student Sign in</div>
						</div>
					</div>

					<label style={{ display:"block", fontWeight:700, color:"#374151", marginBottom:6 }}>User ID</label>
					<input value={userId} onChange={(e)=>setUserId(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&handleSignIn()} placeholder="student@university.edu or 2024CSE001" style={{ width:"100%", padding:12, borderRadius:8, border:"1px solid #e6eef8", marginBottom:12 }} />

					<label style={{ display:"block", fontWeight:700, color:"#374151", marginBottom:6 }}>Password</label>
					<input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} onKeyDown={(e)=>e.key==="Enter"&&handleSignIn()} placeholder="Enter your password" style={{ width:"100%", padding:12, borderRadius:8, border:"1px solid #e6eef8", marginBottom:12 }} />

					<div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:8 }}>
						<input readOnly value={runCpach} style={{ padding:10, borderRadius:8, border:"1px solid #e6eef8", width:130, textAlign:"center", background:"#f3f4f6" }} />
						<button type="button" onClick={generateCaptcha} style={{ padding:"8px 10px", borderRadius:8, border:"none", background:"#efefef", cursor:"pointer" }}>🔄</button>
						<input placeholder="Enter verification Code" value={enteredCaptcha} onChange={(e)=>setEnteredCaptcha(e.target.value)} style={{ flex:1, padding:10, borderRadius:8, border:"1px solid #e6eef8" }} />
					</div>
					{captchaError && <div style={{ color:"#b91c1c", marginBottom:12 }}>{captchaError}</div>}

					<div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:12 }}>
						<label style={{ display:"flex", alignItems:"center", gap:8 }}>
							<input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} />
							<span style={{ fontSize:13 }}>Remember me</span>
						</label>
						<a href="#" onClick={(e)=>e.preventDefault()} style={{ color:"#4f46e5", fontSize:13 }}>Forgot?</a>
					</div>

					<div style={{ background: "#f8fafc", border: "1px solid #e6eef8", padding: 10, borderRadius: 8, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
						<div style={{ fontSize: 13, color: "#374151" }}>
							<strong>Demo:</strong> 2400032926 / sai@123
						</div>
						<button type="button" onClick={() => { try { navigator.clipboard.writeText("sai:sai@123"); } catch{} }} style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: "#eef2ff", color: "#4f46e5", cursor: "pointer", fontWeight:700 }}>Copy</button>
					</div>

					{error && <div style={{ color:"#b91c1c", fontWeight:700, marginBottom:12 }}>{error}</div>}

					<button onClick={handleSignIn} style={{ width:"100%", padding:12, borderRadius:8, border:"none", background:"linear-gradient(90deg,#4f46e5,#7c3aed)", color:"#fff", fontWeight:800, cursor:"pointer" }}>Sign In</button>
				</div>
			</div>

			<style>{`
				@media (max-width:900px){
					div[style*="minHeight:"]{flex-direction:column}
					.left-panel, img{max-width:40%}
				}
			`}</style>
		</div>
	);
}
