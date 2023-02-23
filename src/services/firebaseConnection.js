import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyC-rRTwzgj0ZEWq8OF5H4l_j47ZHgZuirY",
    authDomain: "tarefas-2350e.firebaseapp.com",
    projectId: "tarefas-2350e",
    storageBucket: "tarefas-2350e.appspot.com",
    messagingSenderId: "1027610811830",
    appId: "1:1027610811830:web:905ec85d62a5c7071db517",
    measurementId: "G-P8QCFKHD7T"
  };

  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
  }

  export default firebase;