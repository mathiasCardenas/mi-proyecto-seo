import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className} style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main style={{ flex: 1, padding: "2rem 1rem", maxWidth: "900px", width: "100%", margin: "0 auto" }}>
        <Component {...pageProps} />
      </main>
      <footer style={{
        backgroundColor: "#fff",
        borderTop: "1px solid #e2e8f0",
        padding: "1.5rem",
        textAlign: "center",
        fontSize: "0.85rem",
        color: "#64748b"
      }}>
        <p style={{ margin: 0 }}><strong>Tecsup</strong> - Desarrollo de Aplicaciones Web Avanzado | Laboratorio 14</p>
        <p style={{ margin: "0.3rem 0 0 0" }}>Alumno: Mathias Cardenas Concha | Docente: Renato Usnayo Cáceres</p>
      </footer>
    </div>
  );
}
