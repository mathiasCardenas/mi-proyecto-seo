import Head from "next/head";
import Image from "next/image";

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
      <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ color: '#0f172a', marginBottom: '1.5rem' }}>Bienvenido</h1>
        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
          <Image
            src="/images/seo-image.png"
            width={800}
            height={400}
            alt="Ejemplo de imagen optimizada"
            priority
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>
      </div>
    </>
  );
}
