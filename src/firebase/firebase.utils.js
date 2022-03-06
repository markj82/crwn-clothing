import firebase from 'firebase/compat/app'; // insted of importing whole firebase
// we import just small part we need

import 'firebase/compat/firestore';
import 'firebase/compat/auth' // those 2 imports will be attached to above import

const config = {
    apiKey: "AIzaSyAcciJ62NLDtxuiFCZ43FGd-bbahPSPN6I",
    authDomain: "crwn-db-760c1.firebaseapp.com",
    projectId: "crwn-db-760c1",
    storageBucket: "crwn-db-760c1.appspot.com",
    messagingSenderId: "701316641529",
    appId: "1:701316641529:web:8426403cc50705cb10a828"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;