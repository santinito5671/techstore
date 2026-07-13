const IMGBB_API_KEY = "cabfb4b2a8dd34d917e60c64719fe9c3";

export async function subirImagen(archivo) {
  const formData = new FormData();
  formData.append('image', archivo);

  const res = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
    method: 'POST',
    body: formData,
  });

  const data = await res.json();

  if (!data.success) {
    throw new Error('No se pudo subir la imagen a imgbb');
  }

  return data.data.url;
}