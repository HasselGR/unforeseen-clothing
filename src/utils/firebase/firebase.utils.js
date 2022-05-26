import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
 } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxqaBJnIo1s8vLoFuTbBwU07SVpx9Ze8E",
    authDomain: "unforeseen-clothing-db.firebaseapp.com",
    projectId: "unforeseen-clothing-db",
    storageBucket: "unforeseen-clothing-db.appspot.com",
    messagingSenderId: "534573941533",
    appId: "1:534573941533:web:0bfe10ea07e1ff918497f4"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});  

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);