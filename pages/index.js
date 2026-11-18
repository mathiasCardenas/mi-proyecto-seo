import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home | SEO y Rendimiento en Next.js</title>
        <meta name="google-site-verification" content="zvoVjklypQojqxzMuzPg5jFYX_8dhcSrTQf-yf8vZzw" />
        <meta
          name="description"
          content="Aprende sobre optimización SEO, meta tags dinámicos y rendimiento web avanzado con Next.js y React."
        />
        <meta name="keywords" content="Next.js, SEO, optimización web, meta tags, Google Search Console, sitemap" />
        <meta property="og:title" content="Mi Sitio Optimizado - Home" />
        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar el posicionamiento y rendimiento de tu web con Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>

      <section>
        <div style={{ backgroundColor: "#0284c7", color: "#fff", padding: "2rem", borderRadius: "12px", marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.9 }}>
            Página 1 de 3 (Con Meta Tags Personalizados)
          </span>
          <h1 style={{ fontSize: "2.2rem", margin: "0.5rem 0" }}>
            Bienvenido a Mi Sitio Optimizado
          </h1>
          <p style={{ margin: 0, fontSize: "1.1rem", opacity: 0.95 }}>
            Página de inicio configurada con Meta Tags Open Graph y optimización de recursos.
          </p>
        </div>

        <div style={{ borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: "2rem" }}>
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Ejemplo de imagen optimizada con next/image"
            priority
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>

        <DynamicComponent />

        <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
          <Link href="/blog" style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#0f172a",
            color: "#fff",
            borderRadius: "8px",
            fontWeight: "bold"
          }}>
            Ir al Blog →
          </Link>
          <Link href="/contacto" style={{
            padding: "0.75rem 1.5rem",
            backgroundColor: "#e2e8f0",
            color: "#0f172a",
            borderRadius: "8px",
            fontWeight: "bold"
          }}>
            Ir a Contacto →
          </Link>
        </div>
      </section>
    </>
  );
}
