export default async function handler(req, res) {
  // Si estamos en Render o localhost, detectamos el host dinámicamente o usamos el dominio oficial
  const host = req.headers.host;
  const protocol = req.headers['x-forwarded-proto'] || (host?.includes('localhost') ? 'http' : 'https');
  const BASE_URL = host ? `${protocol}://${host}` : "https://mi-proyecto-seo-ilas.onrender.com";

  const urls = ["/", "/blog", "/contacto"]; // Agrega más rutas dinámicamente

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
  .join("")}
</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
