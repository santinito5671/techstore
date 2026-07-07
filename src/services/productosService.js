import { collection, doc, getDoc, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase/config';

const productosRef = collection(db, 'productos');

export async function getProductos() {
  const snapshot = await getDocs(productosRef);
  return snapshot.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }));
}

export async function getProductoPorId(id) {
  const ref = doc(db, 'productos', id);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function crearProducto(producto) {
  return addDoc(productosRef, {
    ...producto,
    creado: serverTimestamp(),
  });
}
