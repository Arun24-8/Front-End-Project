import React, { useEffect, useState } from "react";
import Admin_Login from "./components/Admin/Admin_Login.jsx";
import Admin_Dashboard from "./components/Admin/Admin_Dashboard.jsx";
import Faculty_Dashboard from "./components/Faculty/Faculty_Dashboard.jsx";
import Faculty_Login from "./components/Faculty/Faculty_Login.jsx";
import Student_Login from "./components/Student/Student_login.jsx";
import Home_Dashboard from "./components/Home/Home_Dashboard.jsx";

// Small runtime-safe loader: imports module and renders it or fallback on error
function SafeLoad({ loader, loaderProps = {}, fallback = null }) {
  const [Comp, setComp] = useState(null);
  const [err, setErr] = useState(null);

  useEffect(() => {
    let mounted = true;
    setComp(null);
    setErr(null);
    loader()
      .then((m) => {
        if (!mounted) return;
        const C = (m && (m.default || m)) || null;
        if (!C) setErr(new Error("Module has no default export"));
        else setComp(() => C);
      })
      .catch((e) => {
        if (!mounted) return;
        // eslint-disable-next-line no-console
        console.error("Dynamic import failed:", e);
        setErr(e);
      });
    return () => { mounted = false; };
  }, [loader]);

  if (err) return fallback || <div style={{ padding: 16, color: "#c53030" }}>Module failed to load. Check console.</div>;
  if (!Comp) return <div style={{ padding: 16 }}>Loading...</div>;
  const C = Comp;
  return <C {...loaderProps} />;
}

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname || "/");

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  const navigate = (path) => {
    try { if (path !== window.location.pathname) window.history.pushState({}, "", path); } catch {}
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const routes = {
    "/": () => <Home_Dashboard onNavigate={navigate} />,
    "/admin/login": () => <Admin_Login onNavigate={navigate} />,
    "/admin": () => <Admin_Dashboard onNavigate={navigate} />,
    "/faculty/login": () => <Faculty_Login onNavigate={navigate} />,
    "/faculty": () => <Faculty_Dashboard onNavigate={navigate} />,
    "/student/login": () => <Student_Login onNavigate={navigate} />,
    "/student": () =>
      <SafeLoad
        loader={() => import("./components/Student/Student_Dashboard.jsx")}
        loaderProps={{ onNavigate: navigate }}            // <-- pass navigate
        fallback={<div style={{ padding: 16 }}>Student dashboard not available.</div>}
      />,
    "/student/profile": () =>
      <SafeLoad
        loader={() => import("./components/Student/Student_Profile.jsx")}
        loaderProps={{ onNavigate: navigate }}            // <-- pass navigate
        fallback={<div style={{ padding: 16 }}>Profile page not available.</div>}
      />,
  };

  const Render = routes[route] || routes["/"];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f5f7fa 0%,#e9ecf2 100%)" }}>
      <main style={{ maxWidth: 1200, margin: "24px auto", padding: 16 }}>
        <Render />
      </main>
    </div>
  );
}
