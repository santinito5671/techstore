import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '5rem 2rem',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '1.5rem',
      }}>— Bienvenido a TechStore</p>

      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        marginBottom: '2rem',
        maxWidth: '700px',
      }}>
        Gadgets de alto
        <br />
        <span style={{ color: 'var(--accent)' }}>rendimiento</span>
      </h1>

      <p style={{
        color: 'var(--text-muted)',
        fontSize: '1rem',
        lineHeight: 1.7,
        maxWidth: '480px',
        marginBottom: '3rem',
      }}>
        Periféricos, monitores y accesorios seleccionados para profesionales y entusiastas de la tecnología.
      </p>

      <Link to="/productos" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        padding: '14px 28px',
        background: 'var(--accent)',
        color: 'var(--bg)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '0.8rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        borderRadius: '3px',
        transition: 'opacity 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
      >
        Ver catálogo →
      </Link>

      {/* Stats decorativas */}
      <div style={{
        display: 'flex',
        gap: '3rem',
        marginTop: '5rem',
        paddingTop: '3rem',
        borderTop: '1px solid var(--border)',
      }}>
        {[
          { num: '6+', label: 'Productos' },
          { num: '100%', label: 'Garantía' },
          { num: '24hs', label: 'Envío' },
        ].map((stat) => (
          <div key={stat.label}>
            <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{stat.num}</p>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
