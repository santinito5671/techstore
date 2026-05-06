import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function NavBar() {
  const linkStyle = ({ isActive }) => ({
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: isActive ? 'var(--accent)' : 'var(--text-muted)',
    transition: 'color 0.2s',
    padding: '4px 0',
    borderBottom: isActive ? '1px solid var(--accent)' : '1px solid transparent',
  });

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
    }}>
      <NavLink to="/" end style={linkStyle}>Inicio</NavLink>
      <NavLink to="/productos" style={linkStyle}>Productos</NavLink>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
