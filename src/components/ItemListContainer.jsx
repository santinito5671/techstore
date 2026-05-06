import { useState, useEffect } from 'react';
import Item from './Item';

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
        setLoading(false);
      });
  }, []);

  if (loading) return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
      Cargando productos...
    </div>
  );

  return (
    <section style={{ padding: '3rem 2rem', maxWidth: '1100px', margin: '0 auto' }}>
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '0.5rem',
        }}>Catálogo</p>
        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>Todos los productos</h2>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
        gap: '1.5rem',
      }}>
        {productos.map((p) => (
          <Item key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}

export default ItemListContainer;
