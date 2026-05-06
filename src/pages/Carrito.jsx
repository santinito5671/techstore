import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Carrito() {
  const { carrito, removeFromCart, clearCart, totalItems, totalPrecio } = useCart();

  if (carrito.length === 0) return (
    <div style={{ maxWidth: '600px', margin: '6rem auto', padding: '2rem', textAlign: 'center' }}>
      <p style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</p>
      <h2 style={{ fontWeight: 800, marginBottom: '0.5rem' }}>Tu carrito está vacío</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
        Todavía no agregaste ningún producto.
      </p>
      <Link to="/productos" style={{
        display: 'inline-block',
        padding: '12px 24px',
        background: 'var(--accent)',
        color: 'var(--bg)',
        fontFamily: 'var(--font-mono)',
        fontWeight: 700,
        fontSize: '0.8rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        borderRadius: '3px',
      }}>
        Ver productos →
      </Link>
    </div>
  );

  return (
    <section style={{ maxWidth: '900px', margin: '0 auto', padding: '3rem 2rem' }}>
      <div style={{ marginBottom: '2rem' }}>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '0.5rem',
        }}>Carrito</p>
        <h2 style={{ fontSize: '2rem', fontWeight: 800 }}>{totalItems} producto{totalItems !== 1 ? 's' : ''}</h2>
      </div>

      {/* Items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
        {carrito.map((p) => (
          <div key={p.id} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '1.2rem',
            background: 'var(--bg2)',
            border: '1px solid var(--border)',
            borderRadius: '6px',
          }}>
            <img src={p.imagen} alt={p.nombre} style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontWeight: 700, marginBottom: '2px' }}>{p.nombre}</p>
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
                ${p.precio.toLocaleString('es-AR')} × {p.cantidad}
              </p>
            </div>
            <p style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)', minWidth: '100px', textAlign: 'right' }}>
              ${(p.precio * p.cantidad).toLocaleString('es-AR')}
            </p>
            <button
              onClick={() => removeFromCart(p.id)}
              style={{
                background: 'transparent',
                border: '1px solid var(--border)',
                borderRadius: '3px',
                color: 'var(--text-muted)',
                padding: '6px 10px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff4444'; e.currentTarget.style.color = '#ff4444'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              Quitar
            </button>
          </div>
        ))}
      </div>

      {/* Total */}
      <div style={{
        padding: '1.5rem',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '6px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</p>
          <p style={{ fontSize: '1.8rem', fontWeight: 800, fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>
            ${totalPrecio.toLocaleString('es-AR')}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            onClick={clearCart}
            style={{
              padding: '10px 20px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
            }}
          >
            Vaciar
          </button>
          <button style={{
            padding: '10px 24px',
            background: 'var(--accent)',
            border: 'none',
            borderRadius: '3px',
            color: 'var(--bg)',
            fontFamily: 'var(--font-mono)',
            fontWeight: 700,
            fontSize: '0.8rem',
            letterSpacing: '0.05em',
            cursor: 'pointer',
          }}>
            Finalizar compra →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Carrito;
