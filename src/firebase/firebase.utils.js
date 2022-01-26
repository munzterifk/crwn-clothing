import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA30DQJL8kpHV86IPCeHVlcJZcSbTnrUt0",
  authDomain: "crwndb-60247.firebaseapp.com",
  projectId: "crwndb-60247",
  storageBucket: "crwndb-60247.appspot.com",
  messagingSenderId: "1015809733667",
  appId: "1:1015809733667:web:4796c8703602b423e46d96",
  measurementId: "G-31MG9FFJ2S"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log('snapShot :>> ', snapShot);

  // save logged user if not yet existing in user collection
  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error :>> ', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;