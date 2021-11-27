import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAgGRheqV-A1r1WQBUV_Mx3OaR0I8bH4hQ",
    authDomain: "shop-yolo.firebaseapp.com",
    projectId: "shop-yolo",
    storageBucket: "shop-yolo.appspot.com",
    messagingSenderId: "919097320954",
    appId: "1:919097320954:web:fefe217dba03c689ed7043"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export {firebase}