import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function CartWidget() {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" style={{
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      padding: '8px 16px',
      border: '1px solid var(--border)',
      borderRadius: '4px',
      fontSize: '0.85rem',
      fontFamily: 'var(--font-mono)',
      color: totalItems > 0 ? 'var(--accent)' : 'var(--text-muted)',
      transition: 'all 0.2s',
    }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
      {totalItems > 0
        ? <span style={{ color: 'var(--accent)', fontWeight: 700 }}>{totalItems}</span>
        : <span>0</span>
      }
    </Link>
  );
}

export default CartWidget;
