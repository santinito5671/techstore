import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProtectedRoute({ children }) {
  const { usuario, cargando } = useAuth();

  if (cargando) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
        Verificando sesión...
      </div>
    );
  }

  if (!usuario) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
