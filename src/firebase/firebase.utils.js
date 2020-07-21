import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyC4fqpX-YHNsnu203yPHqeMQCclWMnK4F8',
  authDomain: 'react-test-ecommerce.firebaseapp.com',
  databaseURL: 'https://react-test-ecommerce.firebaseio.com',
  projectId: 'react-test-ecommerce',
  storageBucket: 'react-test-ecommerce.appspot.com',
  messagingSenderId: '804006826370',
  appId: '1:804006826370:web:490e5d1e556fcaaa647f9b',
  measurementId: 'G-GDW2KBLFRX',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user profile', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
