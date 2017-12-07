/* eslint-disable no-undef */
/**
 * User related requests, mainly for authentication.
 *
 * Note that we may need to complete this in the futur, to handle forgotten password
 * and email verification.
 */
import Axios from './Axios'
// import faker from 'faker'
import localStorageHelpers from '@/helpers/localStorageHelpers'
import store from '@/config/vuex/store'
import {auth, db} from '@/config/firebase'
import firebase from 'firebase'
// TODO : fake data while the backend is not ready
/* ancien code */
// const randomId = faker.random.uuid()
// const token = faker.random.uuid()
/* ancien code */
export const user = {
  /**
   * Returns a demo unique ID, so that the user can still test out the chat for a few days
   * without the need to authenticate.
   *
   * This way we can push user to signup by allowing them to test the good part of the app
   * without an account.
   * @return {*} [description]
   */
  /* ancien code */
  // demo: (e, usname) => (new Promise((resolve, reject) => {
  //   // let user = e.filter(e => e['.key'] === usname)
  //   console.log('ddd', e)
  //   // localStorage.setItem('userId', randomId)
  //   // resolve({
  //   //   id: randomId
  //   // })
  // })),
  /* ancien code */
  /**
   * Login, not that we should be able to provide either the username or email for login,
   * this is a good pattern to follow.
   * @param  {*} email    [description]
   * @param  {*} password [description]
   * @return {*}          [description]
   */
  login: ({ email, password }) => (new Promise((resolve, reject) => {
    auth.signInWithEmailAndPassword(email, password)
      .then(function (data) {
        var users = auth.currentUser

        if (users != null) {
          users.providerData.forEach(function (profile) {
            // console.log('Sign-in provider: ' + profile.providerId)
            // console.log('  Provider-specific UID: ' + profile.uid)
            // console.log('  Name: ' + profile.displayName)
            // console.log('  Email: ' + profile.email)
            // console.log('  Photo URL: ' + profile.photoURL)
            // console.log(profile)
          })
        }
        db.ref('users').orderByChild('email').equalTo(data.email).on('value', snapshot => {
          snapshot.forEach(function (profile) {
            const users = {
              id: profile.key,
              firstname: profile.val().name,
              lastname: profile.val().lname,
              username: profile.val().usname,
              email: profile.val().email,
              profilgame: profile.val().casej,
              profildev: profile.val().casedev
            }
            store.commit('updateUser', users)
            localStorageHelpers.setJSONItem('user', users)
            resolve(users)
          })
        })
      }).catch(function (error) {
        reject(error.message)
        // console.log(error.code)
        // console.log(vm)
        // vm.auth.message = error.message
        // vm.auth.hasErrors = true
      })
    /* ancien code */
    // const user = {
    //   id: randomId,
    //   name: faker.name.findName(),
    //   level: 0
    // }
    // // we memorize user data throughout the app
    // localStorageHelpers.setJSONItem('user', user)
    // localStorage.setItem('userId', user.id)
    // localStorage.setItem('token', token)
    // store.commit('updateUser', user)
    // resolve(user)
    /* ancien code */
  })),
  /**
   * Signup
   * @param  {*} user [description]
   * @return {*}      [description]
   */
  signup: (user) => (new Promise((resolve, reject) => {
    auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(function (data) {
        console.log(data.uid)
        var users = auth.currentUser
        if (users != null) {
          users.providerData.forEach(function (profile) {
            // resolve(user)
            db.ref('users').push({
              uid: data.uid,
              usname: user.name,
              email: profile.email,
              casej: false,
              casedev: false
            })
            const usersdata = {
              id: data.uid,
              firstname: '',
              lastname: '',
              username: user.name,
              email: profile.emaill,
              profilgame: false,
              profildev: false
            }
            // user.id = randomId
            /* ancien code */
            // localStorage.setItem('userId', randomId)
            // localStorage.setItem('token', token)
            /* ancien code */
            store.commit('updateUser', usersdata)
            resolve(user)
          })
        }
      }).catch(function (error) {
        reject(error.message)
      })
  })),
  /**
   * Update user data
   * @param  {*} user [description]
   * @return {*}      [description]
   */
  update: (user, $this) => (new Promise((resolve, reject) => {
    // thats an update so we conserve existing values when it makes sense
    const id = user.id
    delete user['id']
    console.log(user)
    let users = firebase.auth().currentUser
    if (users) {
      db.ref('users').child(id).set(user)
      users.updatePassword(user.password).then(function (e) {
        resolve(users)
      }).catch(function (error) {
        reject(error)
      })
    }
    /* ancien code */
    // const currentUser = localStorageHelpers.getJSONItem('user', user)
    // localStorageHelpers.setJSONItem('user', { ...currentUser, ...user })
    // store.commit('updateUser', { ...user })
    // resolve({ ...currentUser, ...user })
    /* ancien code */
  })),
  /**
   * Logout.
   * NOTE :  we also need to clear the localStorage ! This is very important
   * for security reasons.
   * @return {*} [description]
   */
  logout: () => (new Promise((resolve, reject) => {
    localStorage.clear()
    auth.signOut()
    store.commit('clearUser')
    resolve()
  })),

  _demo: () => (Axios.get('/demo-id').then((randomId) => {
    localStorage.setItem('userId', randomId)
    return randomId
  })),
  _login: ({ email, password }) => (Axios.post('/login', { email, password })
  .then(({ token, user }) => {
    // we memorize user data throughout the app
    localStorageHelpers.setJSONItem('user', user)
    localStorage.setItem('userId', user.id)
    localStorage.setItem('token', token)
    store.commit('updateUser', user)
    return user
  })),
  _signup: (userInfo) => (Axios.post('/signup', userInfo)
  .then(({ token, user }) => {
    // we login the user too
    localStorageHelpers.setJSONItem('user', user)
    localStorage.setItem('userId', user.id)
    localStorage.setItem('token', token)
    store.commit('updateUser', user)
  })),
  _update: (user) => (Axios.post('/user/update')
  .then((user) => {
    const currentUser = localStorageHelpers.getJSONItem('user', user)
    localStorageHelpers.setJSONItem('user', { ...currentUser, ...user })
    store.commit('updateUser', { ...currentUser, ...user })
    return { ...currentUser, ...user }
  })),
  _logout: () => (Axios.post('/logout')
  .finally(() => {
    // we clear the localStorage even when the server can't logout for security reasons
    localStorage.clear()
    store.commit('clearUser')
  }))
}

export default user
