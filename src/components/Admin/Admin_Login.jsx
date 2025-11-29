import React, { useState, useEffect } from "react";

export default function Admin_Login({ onNavigate }) {
	const [userId, setUserId] = useState("");
	const [password, setPassword] = useState("");
	const [err, setErr] = useState("");
	const [remember, setRemember] = useState(false);

	const capchCharsA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const [runCpach, setCapcha] = useState("");
	const [enteredCaptcha, setEnteredCaptcha] = useState("");
	const [captchaError, setCaptchaError] = useState("");

	useEffect(() => { generateCaptcha(); }, []);
	function generateCaptcha() {
		let s = ""; for (let i=0;i<6;i++) s += capchCharsA[Math.floor(Math.random()*capchCharsA.length)];
		setCapcha(s); setEnteredCaptcha(""); setCaptchaError("");
	}

	
	const allowedAdmins = [
		{ username: "32926", password: "admin@123" }
	];

	const handleSignIn = async (e) => {
		if (e && e.preventDefault) e.preventDefault();
		setErr("");
		if (!enteredCaptcha.trim()) { setErr("Please enter verification code."); return; }
		if (enteredCaptcha !== runCpach) { setErr("The verification code is incorrect."); return; }
		if (!userId.trim()) {
			setErr("Please enter User ID.");
			return;
		}
		if (!password.trim()) {
			setErr("Please enter Password.");
			return;
		}
		if (password.length < 6) {
			setErr("Password must be at least 6 characters.");
			return;
		}

		const ok = allowedAdmins.find(u => u.username === userId && u.password === password);
		if (!ok) { setErr("Invalid username or password."); return; }

		try { localStorage.setItem("adminData", JSON.stringify({ id: "32926" })); } catch {}
		if (typeof onNavigate === "function") onNavigate("/admin"); else try { window.history.pushState({}, "", "/admin"); } catch {}
	};

	return (
		<div style={{ minHeight: "100vh", display: "flex", gap: 24, alignItems: "stretch", padding: 20, boxSizing: "border-box", fontFamily: "Segoe UI, Inter, system-ui" }}>
			<div style={{ flex: 1, background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: 12, padding: 18 }}>
				<img src="/src/components/Home/kl logo.jpg" alt="KLU" style={{ maxWidth: "70%", height: "auto", display: "block" }} />
			</div>

			<div style={{ width: "100%", maxWidth: 480, display: "flex", alignItems: "center", justifyContent: "center" }}>
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
					<div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
						<div style={{ width: 56, height: 56, borderRadius: 10, background: "linear-gradient(90deg,#4f46e5,#7c3aed)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800 }}>KL</div>
						<div>
							<div style={{ fontSize: 18, fontWeight: 800 }}>Admin Portal</div>
							<div style={{ color: "#6b7280", fontSize: 13 }}>Manage the system and users</div>
						</div>
					</div>

					<div style={{ marginBottom: 12 }}>
						<label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: 6 }}>User ID</label>
						<input
							value={userId}
							onChange={(e) => setUserId(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
							placeholder="admin@university.edu"
							style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #e6eef8", outline: "none", fontSize: 14 }}
						/>
					</div>

					<div style={{ marginBottom: 8 }}>
						<label style={{ display: "block", fontWeight: 700, color: "#374151", marginBottom: 6 }}>Password</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSignIn()}
							placeholder="Enter your password"
							style={{ width: "100%", padding: 12, borderRadius: 10, border: "1px solid #e6eef8" }}
						/>
					</div>

					<div style={{ background: "#f8fafc", border: "1px solid #e6eef8", padding: 10, borderRadius: 8, marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<div style={{ fontSize: 13, color: "#374151" }}>
							<strong>Demo:</strong> 32926 / admin@123
						</div>
						<button type="button" onClick={() => { try { navigator.clipboard.writeText("32926:admin@123"); } catch{} }} style={{ padding: "6px 10px", borderRadius: 8, border: "none", background: "#eef2ff", color: "#4f46e5", cursor: "pointer", fontWeight:700 }}>Copy</button>
					</div>

					<div style={{ display:"flex", gap:8, alignItems:"center", marginBottom:12 }}>
						<input readOnly value={runCpach} style={{ padding:10, borderRadius:8, border:"1px solid #e6eef8", width:120, textAlign:"center", background:"#f3f4f6" }} />
						<button type="button" onClick={generateCaptcha} style={{ padding:"8px 10px", borderRadius:8, border:"none", background:"#efefef", cursor:"pointer" }}>🔄</button>
						<input placeholder="Enter verification Code" value={enteredCaptcha} onChange={(e)=>setEnteredCaptcha(e.target.value)} style={{ flex:1, padding:10, borderRadius:8, border:"1px solid #e6eef8" }} />
					</div>
					{captchaError && <div style={{ color:"#b91c1c", marginBottom:12 }}>{captchaError}</div>}

					<div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: 8 }}>
						<label style={{ display: "flex", alignItems: "center", gap: 8, color: "#374151", cursor: "pointer" }}>
							<input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
							<span style={{ fontSize: 13 }}>Remember me</span>
						</label>
						<a href="#" style={{ color: "#4f46e5", textDecoration: "none", fontSize: 13 }} onClick={(e) => e.preventDefault()}>Forgot?</a>
					</div>

					{err && <div style={{ marginTop: 12, color: "#b91c1c", fontWeight: 700 }}>{err}</div>}

					<div style={{ marginTop: 16 }}>
						<button onClick={handleSignIn} style={{ width: "100%", padding: 12, borderRadius: 10, border: "none", background: "linear-gradient(90deg,#16a34a,#059669)", color: "#fff", fontWeight: 800, cursor: "pointer", boxShadow: "0 8px 22px rgba(6,95,70,0.12)" }}>
							Sign In
						</button>
					</div>

					<div style={{ background: "#fff7f0", padding:10, borderRadius:8, marginTop:12, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
						<div style={{ fontWeight:700 }}>Demo: 32926 / admin@123</div>
						<button type="button" onClick={() => { try { navigator.clipboard.writeText("32926:admin@123"); } catch{} }} style={{ padding:"6px 10px", borderRadius:8, border:"none", background:"#fff", cursor:"pointer" }}>Copy</button>
					</div>
				</div>
			</div>

			<style>{`
        @media (max-width:900px){
          div[style*="minHeight:"]{flex-direction:column}
        }
      `}</style>
		</div>
	);
}
