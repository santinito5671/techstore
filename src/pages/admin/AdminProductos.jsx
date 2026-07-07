import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProductos } from '../../services/productosService';

function AdminProductos() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProductos()
      .then(setProductos)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2rem' }}>
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            marginBottom: '0.4rem',
          }}>Administrador</p>
          <h1 style={{ fontSize: '1.8rem', fontWeight: 800 }}>Productos cargados</h1>
        </div>
        <Link to="/admin/nuevo" style={{
          padding: '10px 20px',
          background: 'var(--accent)',
          color: 'var(--bg)',
          borderRadius: '4px',
          fontFamily: 'var(--font-mono)',
          fontWeight: 700,
          fontSize: '0.75rem',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
        }}>+ Nuevo</Link>
      </div>

      {loading ? (
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Cargando productos...</p>
      ) : productos.length === 0 ? (
        <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Todavía no cargaste ningún producto. Usá "+ Nuevo" para agregar el primero.
        </p>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {productos.map((p) => (
            <div key={p.id} style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.2rem',
              padding: '1rem 1.2rem',
              background: 'var(--bg2)',
              border: '1px solid var(--border)',
              borderRadius: '6px',
            }}>
              <img src={p.imagen} alt={p.nombre} style={{ width: '64px', height: '48px', objectFit: 'cover', borderRadius: '4px' }} />
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 700, fontSize: '0.9rem' }}>{p.nombre}</p>
                <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>{p.categoria}</p>
              </div>
              <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>
                ${Number(p.precio).toLocaleString('es-AR')}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AdminProductos;
