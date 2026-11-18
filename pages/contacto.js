import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <>
      <Head>
        <title>Contacto y Asesoría SEO | Mathias Cárdenas</title>
        <meta
          name="description"
          content="Ponte en contacto con nuestro equipo para consultoría en posicionamiento web y optimización de rendimiento."
        />
        <meta name="keywords" content="Contacto, Asesoría SEO, Next.js, Mathias Cardenas, Tecsup" />
        <meta property="og:title" content="Contacto y Asesoría SEO" />
        <meta
          property="og:description"
          content="Solicita una auditoría SEO para tu sitio web y optimiza tu visibilidad en buscadores."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section>
        <div style={{ backgroundColor: "#7c3aed", color: "#fff", padding: "2rem", borderRadius: "12px", marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.9 }}>
            Página 3 de 3 (Con Meta Tags Personalizados)
          </span>
          <h1 style={{ fontSize: "2.2rem", margin: "0.5rem 0" }}>
            Contacto & Consultoría SEO
          </h1>
          <p style={{ margin: 0, fontSize: "1.1rem", opacity: 0.95 }}>
            Página optimizada para conversiones y contacto directo.
          </p>
        </div>

        <div style={{ backgroundColor: "#fff", padding: "2rem", borderRadius: "12px", boxShadow: "0 2px 10px rgba(0,0,0,0.06)", border: "1px solid #e2e8f0" }}>
          {enviado ? (
            <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#f0fdf4", borderRadius: "8px", border: "1px solid #bbf7d0" }}>
              <h3 style={{ color: "#16a34a", margin: "0 0 0.5rem 0" }}>¡Mensaje enviado con éxito!</h3>
              <p style={{ color: "#166534", margin: 0 }}>Gracias por comunicarte con nosotros. Te responderemos a la brevedad.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.3rem", color: "#334155" }}>
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Mathias Cárdenas"
                  style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.3rem", color: "#334155" }}>
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="tuemail@ejemplo.com"
                  style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.9rem", fontWeight: "bold", marginBottom: "0.3rem", color: "#334155" }}>
                  Mensaje o Consulta SEO
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Escribe tu consulta sobre posicionamiento web..."
                  style={{ width: "100%", padding: "0.75rem", borderRadius: "6px", border: "1px solid #cbd5e1", fontSize: "1rem" }}
                />
              </div>

              <button
                type="submit"
                style={{
                  padding: "0.85rem",
                  backgroundColor: "#7c3aed",
                  color: "#fff",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "background-color 0.2s"
                }}
              >
                Enviar Mensaje
              </button>
            </form>
          )}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/" style={{ color: "#7c3aed", fontWeight: "bold" }}>
            ← Volver al Inicio
          </Link>
        </div>
      </section>
    </>
  );
}
