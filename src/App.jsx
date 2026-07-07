import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './Layout';
import Home from './pages/Home';
import Productos from './pages/Productos';
import ProductoDetalle from './pages/ProductoDetalle';
import Carrito from './pages/Carrito';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/admin/Login';
import AdminLayout from './pages/admin/AdminLayout';
import AdminProductos from './pages/admin/AdminProductos';
import ProductForm from './pages/admin/ProductForm';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="productos" element={<Productos />} />
              <Route path="producto/:id" element={<ProductoDetalle />} />
              <Route path="carrito" element={<Carrito />} />
            </Route>

            {/* Login del admin: pública */}
            <Route path="/admin/login" element={<Login />} />

            {/* Rutas de administrador, protegidas por sesión de Firebase Auth */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminProductos />} />
              <Route path="nuevo" element={<ProductForm />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
