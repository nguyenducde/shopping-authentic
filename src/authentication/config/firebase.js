import firebase from "firebase/app"
import "firebase/storage"
import "firebase/auth"

const firebaseConfig = {
    apiKey: 'AIzaSyCq_C4TqaEIeJ3kcQP-KjMpKl0ab9u1HH0',
    authDomain: 'ecommerce-a6d72.firebaseapp.com',
    projectId: 'ecommerce-a6d72',
    storageBucket: 'ecommerce-a6d72.appspot.com',
    messagingSenderId: '232116880437',
    appId: '1:232116880437:web:b89459f4092b67e885dd7c',
    measurementId: 'G-R7EDQ4WVZS',
}
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  export {firebase}