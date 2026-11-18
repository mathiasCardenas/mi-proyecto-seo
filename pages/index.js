import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta
          name="description"
          content="Aprende sobre optimización SEO y rendimiento en Next.js."
        />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar tu web con Next.js."
        />
        <meta property="og:image" content="/images/seo-image.png" />
        <meta property="og:type" content="website" />
      </Head>
      <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ color: '#0f172a', fontSize: '2.2rem', marginBottom: '1rem' }}>
          Bienvenido a mi página optimizada
        </h1>
        <p style={{ color: '#475569', fontSize: '1.2rem', lineHeight: '1.6' }}>
          Aprende cómo mejorar el rendimiento y SEO en Next.js.
        </p>
      </div>
    </>
  );
}
