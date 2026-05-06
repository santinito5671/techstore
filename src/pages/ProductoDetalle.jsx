import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

function ProductoDetalle() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [agregado, setAgregado] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/productos.json')
      .then((res) => res.json())
      .then((data) => {
        const encontrado = data.find((p) => p.id === Number(id));
        setProducto(encontrado);
        setLoading(false);
      });
  }, [id]);

  function handleAddToCart() {
    addToCart(producto);
    setAgregado(true);
    setTimeout(() => setAgregado(false), 2000);
  }

  if (loading) return (
    <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
      Cargando...
    </div>
  );

  if (!producto) return (
    <div style={{ padding: '4rem', textAlign: 'center' }}>
      <p style={{ color: 'var(--text-muted)' }}>Producto no encontrado.</p>
      <Link to="/productos" style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>← Volver al catálogo</Link>
    </div>
  );

  return (
    <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 2rem' }}>
      <Link to="/productos" style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.05em',
        marginBottom: '2.5rem',
        textTransform: 'uppercase',
        transition: 'color 0.2s',
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
      >
        ← Volver
      </Link>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'start',
      }}>
        {/* Imagen */}
        <div style={{
          border: '1px solid var(--border)',
          borderRadius: '6px',
          overflow: 'hidden',
          background: 'var(--bg2)',
        }}>
          <img src={producto.imagen} alt={producto.nombre} style={{ width: '100%', display: 'block' }} />
        </div>

        {/* Info */}
        <div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.65rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
            border: '1px solid var(--border)',
            borderRadius: '3px',
            padding: '3px 10px',
            display: 'inline-block',
            marginBottom: '1.2rem',
          }}>{producto.categoria}</span>

          <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>
            {producto.nombre}
          </h1>

          <p style={{
            fontSize: '2rem',
            fontWeight: 700,
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent)',
            marginBottom: '1.5rem',
          }}>
            ${producto.precio.toLocaleString('es-AR')}
          </p>

          <p style={{
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            marginBottom: '2.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid var(--border)',
          }}>
            {producto.descripcion}
          </p>

          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '14px',
              background: agregado ? 'transparent' : 'var(--accent)',
              color: agregado ? 'var(--accent)' : 'var(--bg)',
              border: '1px solid var(--accent)',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.85rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.3s',
              cursor: 'pointer',
            }}
          >
            {agregado ? '✓ Agregado al carrito' : 'Agregar al carrito'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductoDetalle;
