import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgnoulINfcYNb0AdlYHiSW623dM4zwMbQ",
  authDomain: "crwn-clothing-db-f7e52.firebaseapp.com",
  projectId: "crwn-clothing-db-f7e52",
  storageBucket: "crwn-clothing-db-f7e52.appspot.com",
  messagingSenderId: "799616741248",
  appId: "1:799616741248:web:949c753c97467853a9db65"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
// The Popup for Google
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
// The Redirect for Google
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// initialize the database
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  //console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  //console.log(userSnapshot);
  // If the document exist in the database
  // returns false/true
  //console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      });
    } catch (error) {
      console.log('error creating the user: ', error.message)
    }
  }

  // If user data exist
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}