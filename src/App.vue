<template>
  <div id="app">
    <layout>
      <router-view ></router-view>
    </layout>
  </div>
</template>

<script>

// font-awesome
import 'font-awesome/css/font-awesome.min.css'
// css reset
import 'normalize.css'
import 'toastr/build/toastr.min.css'
// import localStorageHelpers from '@/helpers/localStorageHelpers'
// import API from '@/services/API'
import {db} from '@/config/firebase'
// import {auth} from './config/firebase'
/**
 * Requests related to the interface gamification, experience for example
 */
// import Axios from '@/services/API/Axios'
import Layout from '@/components/layout/Layout'
import { mapState } from 'vuex'
export default {
  name: 'app',
  components: {
    Layout
  },
  computed: {
    ...mapState(['user'])
  },
  data () {
    return {

    }
  },
  firebase: {
    users: {
      source: db.ref('users'),
      // Optional, allows you to handle any errors.
      cancelCallback (err) {
        console.error(err)
      }
    }
  },
  methods: {
    updateItem: function (item) {
      // create a copy of the item
      item = {...item}
      // remove the .key attribute
      delete item['.key']
      this.$firebaseRefs.items.child(item['.key']).set(item)
    }
  },
  mounted () {
    let { color, usname } = this.$route.query
    usname = usname.replace(' ', '_')
    if (usname) {
      db.ref('users').child(usname).on('value', snapshot => {
        const data = snapshot.val()
        console.log('data',data)
        const users = {
          id: usname,
          cs_uid: data.cs_uid,
          firstname: data.name,
          lastname: data.lname,
          username: data.usname,
          usname:data.usname,
          email: data.email,
          profilgame: data.casej,
          profildev: data.casedev,
          vename: data.vename,
          color: data.color,
          city: data.city,
          fbaccount: data.fbaccount
        }
        this.$store.commit('updateUser', users)
        this.loading = false
      })
    }

    // get the userId if logged in or ask the server to provide a unique id for demo purpose
//    if (!localStorage.getItem('userId')) {
//      API.user.demo().then((randomId) => {
//        console.log(randomId)
//        localStorage.setItem('userId', randomId)
//        this.$store.commit('updateUserId', randomId)
//      })
//    }
    if (color) this.$store.commit('updateColor', color)
  }
}
</script>

<style lang="scss">
@import './assets/style/app.scss';
</style>
