import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDhXyuF2OYhFg5In1Nt4hK6ZzVPQbhUkfo",
    authDomain: "react-firebase-auth-bf829.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-bf829.firebaseio.com",
    projectId: "react-firebase-auth-bf829",
    storageBucket: "react-firebase-auth-bf829.appspot.com",
    messagingSenderId: "664832777103",
    appId: "1:664832777103:web:0ceb6bfdbbd34bca4989fa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase