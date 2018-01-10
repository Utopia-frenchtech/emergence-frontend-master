import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
  apiKey: 'Mykey',
  authDomain: 'Mydom',
  databaseURL: 'https://Mybase',
  projectId: 'utopia-35a8b',
  storageBucket: 'Myst',
  messagingSenderId: 'MyId'
})
const db = firebaseApp.database()
const auth = firebaseApp.auth()
export {db, auth}
