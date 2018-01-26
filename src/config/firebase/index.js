import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: 'MyAPIkey',
    authDomain: 'MyBase.firebaseapp.com',
    databaseURL: 'https://MyBase.firebaseio.com',
    projectId: 'utopia-35a8b',
    storageBucket: 'MyBase.appspot.com',
    messagingSenderId: 'MyID'
})
const db = firebaseApp.database()
const auth = firebaseApp.auth()
export { db, auth }
