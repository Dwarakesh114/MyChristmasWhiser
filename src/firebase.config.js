import { initializeApp } from "firebase/app";
    import { getAnalytics } from "firebase/analytics";
    import { getAuth, GoogleAuthProvider } from "firebase/auth";
    
    const firebaseConfig = {
      apiKey: "AIzaSyDs9z97l1zbvVNn2HntQAb8c3podJ0Ob3Q",
      authDomain: "dwarakeshchristmas.firebaseapp.com",
      projectId: "dwarakeshchristmas",
      storageBucket: "dwarakeshchristmas.firebasestorage.app",
      messagingSenderId: "790287037703",
      appId: "1:790287037703:web:62c43d00e1ee5b414181a2",
      measurementId: "G-SYRFMGSPGE"
    };
    
    export const app = initializeApp(firebaseConfig);
    export const analytics = getAnalytics(app);
    export const auth = getAuth(app);
    export const googleProvider = new GoogleAuthProvider();
