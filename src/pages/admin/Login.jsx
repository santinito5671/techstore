import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [enviando, setEnviando] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setEnviando(true);
    try {
      await login(email, password);
      navigate('/admin');
    } catch (err) {
      setError('Email o contraseña incorrectos.');
    } finally {
      setEnviando(false);
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    background: 'var(--bg3)',
    border: '1px solid var(--border)',
    borderRadius: '4px',
    color: 'var(--text)',
    fontFamily: 'var(--font-display)',
    fontSize: '0.9rem',
    outline: 'none',
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.7rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: '0.5rem',
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg)',
      padding: '2rem',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '380px',
        background: 'var(--bg2)',
        border: '1px solid var(--border)',
        borderRadius: '8px',
        padding: '2.5rem',
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--accent)' }}>TECH</span>
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800 }}>STORE</span>
        </Link>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          marginBottom: '0.4rem',
        }}>Panel administrador</p>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem' }}>Iniciar sesión</h1>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.2rem' }}>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
              placeholder="admin@techstore.com"
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={labelStyle}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={inputStyle}
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p style={{ color: '#ff4444', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', marginBottom: '1.2rem' }}>
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            style={{
              width: '100%',
              padding: '13px',
              background: 'var(--accent)',
              color: 'var(--bg)',
              border: 'none',
              borderRadius: '4px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              cursor: enviando ? 'default' : 'pointer',
              opacity: enviando ? 0.6 : 1,
            }}
          >
            {enviando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
