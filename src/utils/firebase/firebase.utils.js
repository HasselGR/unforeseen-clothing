import { initializeApp } from 'firebase/app';
import { getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
 } from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxqaBJnIo1s8vLoFuTbBwU07SVpx9Ze8E",
    authDomain: "unforeseen-clothing-db.firebaseapp.com",
    projectId: "unforeseen-clothing-db",
    storageBucket: "unforeseen-clothing-db.appspot.com",
    messagingSenderId: "534573941533",
    appId: "1:534573941533:web:0bfe10ea07e1ff918497f4"
};
  

const firebaseApp = initializeApp(firebaseConfig);

const gooogleProvider = new GoogleAuthProvider();
gooogleProvider.setCustomParameters({
    prompt: "select_account"
});  

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, gooogleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, gooogleProvider);


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {} ) => {
    if(!userAuth) return;

    const userDocRef =  doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot =  await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try { 
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
                console.log('error creating the user', error.message);
        }
    }
    return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
}