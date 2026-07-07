import { useState } from 'react';
import { crearProducto } from '../../services/productosService';
import { subirImagen } from '../../services/imgbb';

const ESTADO_INICIAL = {
  nombre: '',
  precio: '',
  categoria: '',
  descripcion: '',
};

function ProductForm() {
  const [form, setForm] = useState(ESTADO_INICIAL);
  const [archivo, setArchivo] = useState(null);
  const [preview, setPreview] = useState(null);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState('');
  const [exito, setExito] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    setArchivo(file);
    setPreview(URL.createObjectURL(file));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setExito(false);

    if (!archivo) {
      setError('Seleccioná una imagen para el producto.');
      return;
    }

    setEnviando(true);
    try {
      const urlImagen = await subirImagen(archivo);

      await crearProducto({
        nombre: form.nombre,
        precio: Number(form.precio),
        categoria: form.categoria,
        descripcion: form.descripcion,
        imagen: urlImagen,
      });

      setForm(ESTADO_INICIAL);
      setArchivo(null);
      setPreview(null);
      setExito(true);
      setTimeout(() => setExito(false), 3000);
    } catch (err) {
      setError('Ocurrió un error al cargar el producto. Intentá de nuevo.');
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
    <div style={{ maxWidth: '640px' }}>
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--accent)',
        marginBottom: '0.4rem',
      }}>Administrador</p>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '2rem' }}>Cargar producto</h1>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        <div>
          <label style={labelStyle}>Nombre</label>
          <input name="nombre" value={form.nombre} onChange={handleChange} required style={inputStyle} placeholder="Mouse Gamer RGB" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
          <div>
            <label style={labelStyle}>Precio</label>
            <input name="precio" type="number" min="0" step="1" value={form.precio} onChange={handleChange} required style={inputStyle} placeholder="29999" />
          </div>
          <div>
            <label style={labelStyle}>Categoría</label>
            <input name="categoria" value={form.categoria} onChange={handleChange} required style={inputStyle} placeholder="Periféricos" />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Descripción</label>
          <textarea
            name="descripcion"
            value={form.descripcion}
            onChange={handleChange}
            required
            rows={4}
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--font-display)' }}
            placeholder="Descripción del producto..."
          />
        </div>

        <div>
          <label style={labelStyle}>Imagen</label>
          <input type="file" accept="image/*" onChange={handleFile} required style={{ ...inputStyle, padding: '10px' }} />
          {preview && (
            <img src={preview} alt="Vista previa" style={{ marginTop: '1rem', width: '160px', borderRadius: '6px', border: '1px solid var(--border)' }} />
          )}
        </div>

        {error && (
          <p style={{ color: '#ff4444', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{error}</p>
        )}
        {exito && (
          <p style={{ color: 'var(--accent)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>✓ Producto cargado correctamente.</p>
        )}

        <button
          type="submit"
          disabled={enviando}
          style={{
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
          {enviando ? 'Cargando...' : 'Cargar producto'}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;
