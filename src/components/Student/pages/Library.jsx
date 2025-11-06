import React, { useState } from "react";

export default function Library() {
  const [query, setQuery] = useState("");
  const issued = [
    { title: "Data Structures and Algorithms in Java", due: "Dec 20, 2024", fine: 0 },
    { title: "Computer Networking: A Top-Down Approach", due: "Dec 10, 2024", fine: 10 },
  ];

  return (
    <div>
      <header style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 26 }}>📖</div>
        <div>
          <h2 style={{ margin: 0, color: "#1e3a8a" }}>Library Services</h2>
          <div style={{ color: "#6b7280" }}>Search catalog, view issued books and fines</div>
        </div>
      </header>

      <div style={{ marginBottom: 12, display: "flex", gap: 8 }}>
        <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search books, authors, ISBN" style={{ flex:1, padding:10, borderRadius:8, border:"1px solid #e5e7eb" }} />
        <button style={{ background:"#3b82f6", color:"#fff", padding:"10px 12px", borderRadius:8, border:"none" }}>Search</button>
      </div>

      <div style={{ display: "grid", gap: 10 }}>
        <div style={{ background:"#fff", padding:12, borderRadius:8 }}>
          <div style={{ fontWeight:800 }}>Books Issued</div>
          {issued.map((b,i) => (
            <div key={i} style={{ display:"flex", justifyContent:"space-between", paddingTop:8 }}>
              <div>
                <div style={{ fontWeight:700 }}>{b.title}</div>
                <div style={{ color:"#6b7280" }}>Due: {b.due}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ color: b.fine ? "#dc2626" : "#059669", fontWeight:700 }}>{b.fine ? `Fine: ₹${b.fine}` : "No Fines"}</div>
                <div style={{ marginTop:8 }}>
                  <button style={{ background:"#e5e7eb", padding:"8px 10px", borderRadius:8, border:"none" }}>Renew</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background:"#f8fafc", padding:12, borderRadius:8 }}>
          <div style={{ fontWeight:800 }}>Quick Links</div>
          <div style={{ marginTop:8, color:"#6b7280" }}>Request book • View history • Reserve</div>
        </div>
      </div>
    </div>
  );
}
