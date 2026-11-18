import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  const posts = [
    {
      id: 1,
      titulo: "10 Claves para Optimizar el SEO en Next.js",
      extracto: "Aprende cómo Next/Head, los sitemaps automáticos y los metadatos Open Graph catapultan tu ranking en Google.",
      fecha: "18 de Noviembre, 2026",
      categoria: "SEO Avanzado"
    },
    {
      id: 2,
      titulo: "next/image vs etiqueta <img> tradicional",
      extracto: "Descubre cómo Next.js convierte imágenes a WebP al vuelo y reduce el peso de carga hasta en un 80%.",
      fecha: "15 de Noviembre, 2026",
      categoria: "Rendimiento Web"
    },
    {
      id: 3,
      titulo: "Lazy Loading con next/dynamic en React",
      extracto: "Aumenta la puntuación de Core Web Vitals dividiendo componentes pesados en chunks independientes.",
      fecha: "12 de Noviembre, 2026",
      categoria: "Arquitectura"
    }
  ];

  return (
    <>
      <Head>
        <title>Blog de Rendimiento y SEO Web | Mi Sitio Optimizado</title>
        <meta
          name="description"
          content="Artículos técnicos, tutoriales y guías sobre Server-Side Rendering, sitemaps dinámicos y optimización web."
        />
        <meta name="keywords" content="Blog, Next.js, SEO, optimización, WebP, Core Web Vitals" />
        <meta property="og:title" content="Blog de Rendimiento y SEO Web" />
        <meta
          property="og:description"
          content="Explora nuestras guías avanzadas para posicionar páginas web en los primeros resultados de búsqueda."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="article" />
      </Head>

      <section>
        <div style={{ backgroundColor: "#059669", color: "#fff", padding: "2rem", borderRadius: "12px", marginBottom: "2rem" }}>
          <span style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "1px", opacity: 0.9 }}>
            Página 2 de 3 (Con Meta Tags Personalizados)
          </span>
          <h1 style={{ fontSize: "2.2rem", margin: "0.5rem 0" }}>
            Blog de Tecnología & Posicionamiento
          </h1>
          <p style={{ margin: 0, fontSize: "1.1rem", opacity: 0.95 }}>
            Página con meta tags específicos para artículos de contenido y redes sociales.
          </p>
        </div>

        <div style={{ display: "grid", gap: "1.5rem" }}>
          {posts.map((post) => (
            <article key={post.id} style={{
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
              border: "1px solid #e2e8f0"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "#64748b", marginBottom: "0.5rem" }}>
                <span style={{ backgroundColor: "#ecfdf5", color: "#059669", padding: "0.2rem 0.6rem", borderRadius: "4px", fontWeight: "bold" }}>
                  {post.categoria}
                </span>
                <span>{post.fecha}</span>
              </div>
              <h2 style={{ fontSize: "1.3rem", color: "#1e293b", margin: "0.5rem 0" }}>
                {post.titulo}
              </h2>
              <p style={{ color: "#475569", lineHeight: "1.5", fontSize: "0.95rem" }}>
                {post.extracto}
              </p>
            </article>
          ))}
        </div>

        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/" style={{ color: "#0284c7", fontWeight: "bold" }}>
            ← Volver al Inicio
          </Link>
        </div>
      </section>
    </>
  );
}
