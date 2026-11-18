export default function LargeComponent() {
  return (
    <div style={{
      padding: '2rem',
      backgroundColor: '#f8fafc',
      border: '2px dashed #0284c7',
      borderRadius: '12px',
      marginTop: '1.5rem',
      textAlign: 'center'
    }}>
      <h2 style={{ color: '#0369a1', margin: '0 0 0.5rem 0', fontSize: '1.4rem' }}>
        ⚡ Componente Cargado con Lazy Loading (next/dynamic)
      </h2>
      <p style={{ color: '#475569', fontSize: '1rem', margin: 0 }}>
        Este componente se divide en un chunk separado y solo se carga en el navegador cuando se necesita (<code>ssr: false</code>).
      </p>
    </div>
  );
}
