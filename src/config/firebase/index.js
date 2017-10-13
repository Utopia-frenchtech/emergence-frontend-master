import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'AIzaSyCVRybVxa14St79JPK9Tc0B5m6T2wZh_YE',
  authDomain: 'utopia-35a8b.firebaseapp.com',
  databaseURL: 'https://utopia-35a8b.firebaseio.com',
  projectId: 'utopia-35a8b',
  storageBucket: 'utopia-35a8b.appspot.com',
  messagingSenderId: '281386689853'
})
const db = firebaseApp.database()
const auth = firebaseApp.auth()
export {db, auth}
