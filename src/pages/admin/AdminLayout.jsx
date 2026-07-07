import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function AdminLayout() {
  const { usuario, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate('/admin/login');
  }

  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 14px',
    borderRadius: '4px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '0.05em',
    color: isActive ? 'var(--bg)' : 'var(--text-muted)',
    background: isActive ? 'var(--accent)' : 'transparent',
    transition: 'all 0.2s',
  });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      <aside style={{
        width: '240px',
        flexShrink: 0,
        background: 'var(--bg2)',
        borderRight: '1px solid var(--border)',
        padding: '2rem 1.2rem',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.4rem', padding: '0 0.2rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>TECH</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>STORE</span>
        </Link>
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--text-muted)',
          marginBottom: '2.5rem',
          padding: '0 0.2rem',
        }}>Panel administrador</p>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          <NavLink to="/admin" end style={linkStyle}>Productos</NavLink>
          <NavLink to="/admin/nuevo" style={linkStyle}>Cargar producto</NavLink>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginBottom: '0.8rem', wordBreak: 'break-all' }}>
            {usuario?.email}
          </p>
          <button
            onClick={handleLogout}
            style={{
              width: '100%',
              padding: '10px',
              background: 'transparent',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#ff4444'; e.currentTarget.style.color = '#ff4444'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >
            Cerrar sesión
          </button>
        </div>
      </aside>

      <main style={{ flex: 1, padding: '2.5rem 3rem' }}>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
