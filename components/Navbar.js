import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "🏠 Home" },
    { href: "/blog", label: "📰 Blog" },
    { href: "/contacto", label: "✉️ Contacto" },
  ];

  return (
    <header style={{
      backgroundColor: "#0f172a",
      color: "#fff",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 50
    }}>
      <div>
        <Link href="/" style={{ color: "#fff", fontSize: "1.25rem", fontWeight: "bold", textDecoration: "none" }}>
          🚀 Mi Sitio Optimizado
        </Link>
        <span style={{ display: "block", fontSize: "0.75rem", color: "#94a3b8" }}>
          Laboratorio 14: Optimización y SEO
        </span>
      </div>
      <nav style={{ display: "flex", gap: "1rem" }}>
        {navLinks.map((link) => {
          const isActive = router.pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: isActive ? "#38bdf8" : "#cbd5e1",
                textDecoration: "none",
                fontWeight: isActive ? "bold" : "normal",
                padding: "0.4rem 0.8rem",
                borderRadius: "6px",
                backgroundColor: isActive ? "rgba(56, 189, 248, 0.15)" : "transparent",
                border: isActive ? "1px solid rgba(56, 189, 248, 0.3)" : "1px solid transparent",
                transition: "all 0.2s ease"
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
