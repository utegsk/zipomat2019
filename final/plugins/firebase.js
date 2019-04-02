import Vue from 'vue'
import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import VueFirestore from 'vue-firestore'
Vue.use(VueFirestore)

if (!firebase.apps.length) {
  // loaded from your local .env file with dotenv plugin
  firebase.initializeApp({
    apiKey: process.env.APIKEY,
    authDomain: process.env.AUTHDOMAIN,
    databaseURL: process.env.DATABASEURL,
    projectId: process.env.PROJECTID,
    storageBucket: process.env.STORAGEBUCKET,
    messagingSenderId: process.env.MESSAGINGSENDERID
  })  
}
export const fireDb = firebase.firestore()
export default firebase