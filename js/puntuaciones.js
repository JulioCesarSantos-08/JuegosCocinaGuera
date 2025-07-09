import { db } from './firebase-config.js';
import {
  collection, addDoc, query, orderBy, limit, getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

export async function guardarPuntuacion(juego, nombre, puntos) {
  try {
    await addDoc(collection(db, juego), {
      nombre,
      puntos,
      timestamp: Date.now()
    });
  } catch (error) {
    console.error("Error al guardar puntuación:", error);
  }
}

export async function obtenerTop10(juego) {
  const resultados = [];
  const q = query(collection(db, juego), orderBy("puntos", "asc"), limit(10));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => resultados.push(doc.data()));
  return resultados;
}