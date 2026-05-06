import { Link } from 'react-router-dom';

function Item({ id, nombre, precio, imagen, categoria }) {
  return (
    <div style={{
      background: 'var(--bg2)',
      border: '1px solid var(--border)',
      borderRadius: '6px',
      overflow: 'hidden',
      transition: 'border-color 0.2s, transform 0.2s',
      cursor: 'pointer',
    }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--accent)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ position: 'relative' }}>
        <img src={imagen} alt={nombre} style={{ width: '100%', display: 'block' }} />
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: '3px',
          padding: '2px 8px',
          fontSize: '0.65rem',
          fontFamily: 'var(--font-mono)',
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>{categoria}</span>
      </div>
      <div style={{ padding: '1.2rem' }}>
        <h3 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{nombre}</h3>
        <p style={{
          color: 'var(--accent)',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '1rem',
          marginBottom: '1rem',
        }}>
          ${precio.toLocaleString('es-AR')}
        </p>
        <Link to={`/producto/${id}`} style={{
          display: 'inline-block',
          padding: '8px 16px',
          border: '1px solid var(--accent)',
          borderRadius: '3px',
          color: 'var(--accent)',
          fontSize: '0.75rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          transition: 'background 0.2s, color 0.2s',
        }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'var(--accent)';
            e.currentTarget.style.color = 'var(--bg)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--accent)';
          }}
        >
          Ver detalle →
        </Link>
      </div>
    </div>
  );
}

export default Item;
