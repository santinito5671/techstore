const equipo = [
  { nombre: 'Santino Sosa', rol: 'Full Stack Developer', github: 'santinito5671' },
  { nombre: 'Ana García', rol: 'UX/UI Designer', github: 'anagarcia' },
  { nombre: 'Lucas Méndez', rol: 'Backend Developer', github: 'lucasmendez' },
];

function Footer() {
  return (
    <footer style={{
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 2rem 2rem',
      marginTop: 'auto',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '3rem',
      }}>
        {/* Info empresa */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 700 }}>TECH</span>
            <span style={{ fontWeight: 800 }}>STORE</span>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, maxWidth: '280px' }}>
            Tu tienda de gadgets y periféricos de alta gama. Calidad garantizada, precios competitivos.
          </p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '1rem', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} TechStore. Todos los derechos reservados.
          </p>
        </div>

        {/* Equipo */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '1.2rem',
          }}>El equipo</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {equipo.map((persona) => (
              <div key={persona.nombre} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: 'var(--bg3)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
              }}>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem' }}>{persona.nombre}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{persona.rol}</p>
                </div>
                <a
                  href={`https://github.com/${persona.github}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}
                >
                  @{persona.github}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
