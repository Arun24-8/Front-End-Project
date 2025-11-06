import React from "react";

export default function Placeholder({ label = "Page" }) {
  return (
    <div style={{ fontFamily: "Segoe UI, Tahoma, Verdana, sans-serif" }}>
      <h2 style={{ color: "#1e3a8a" }}>{label}</h2>
      <p style={{ color: "#6b7280" }}>This page is under construction. Content will be added soon.</p>
    </div>
  );
}
