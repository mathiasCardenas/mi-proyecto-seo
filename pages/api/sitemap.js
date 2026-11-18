export default async function handler(req, res) {
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || (host?.includes('localhost') ? 'http' : 'https');
  const BASE_URL = host ? `${protocol}://${host}` : "https://mi-proyecto-seo-ilas.onrender.com";

  // Rutas dinámicas de la aplicación requeridas en la Tarea: Home, Blog, Contacto
  const routes = [
    { url: "/", changefreq: "daily", priority: "1.0" },
    { url: "/blog", changefreq: "weekly", priority: "0.8" },
    { url: "/contacto", changefreq: "monthly", priority: "0.5" }
  ];

  const currentDate = new Date().toISOString().split("T")[0];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${BASE_URL}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
