// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0OWKnhz0jmGiiiGwotDpkEhEj_tCUvjs",
  authDomain: "pedidospuestocomida.firebaseapp.com",
  projectId: "pedidospuestocomida",
  storageBucket: "pedidospuestocomida.firebasestorage.app",
  messagingSenderId: "251357525868",
  appId: "1:251357525868:web:9cf755590e16fdff686549"
};

// Inicializar Firebase y Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };