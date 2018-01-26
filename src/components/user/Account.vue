<template>
  <form v-on:submit.prevent="onUpdate($event)" id="account" class="vertical big">
    <div class="flex2">
    <div class="input-100" style="color: red" v-if="invalide">{{message}}</div>
    <div  style="color: green; height: 20px" v-if="valide">{{$t('models.user.changepassword')}}</div>
    </div>
    <div class="flex">
      <div class="input-100">
        <input type="text" name="UserName"  style="margin-top: 200px" v-model="usname" :placeholder="$t('models.user.userName')" >
      </div>
    </div>
    <div class="flex">
      <div>
        <input type="text" name="firstName"  v-model="name"  :placeholder="$t('models.user.firstName')">
      </div>
      <div>
        <input type="text" name="lastName" v-model="lname" :placeholder="$t('models.user.lastName')">
      </div>
    </div>
    <div class="flex">
      <div>
        <input type="text" name="color"  v-model="color"  :placeholder="$t('models.user.color')">
      </div>
      <div>
        <input type="text" name="vename" v-model="vename" :placeholder="$t('models.user.veName')">
      </div>
    </div>
    <div class="flex">
      <div class="input-100">
        <input type="text" name="fbaccount"  autocomplete="off" v-model="fbaccount" :placeholder="$t('models.user.fbAccount')">
      </div>
    </div>
    <div class="flex">
      <div class="input-100">
        <input type="text" name="city"  autocomplete="off" v-model="city" :placeholder="$t('models.user.city')">
      </div>
    </div>
    <div class="flex">
      <div class="input-100">
        <input type="email" name="email"  autocomplete="off" v-model="email" :placeholder="$t('models.user.email')">
      </div>
    </div>
    <div class="flex">
      <div class="input-100">
        <input type="password" name="password" autocomplete="off"  v-model="password" :placeholder="$t('models.user.password')">
      </div>
    </div>
    <div class="flex">
      <div>
        <input type="checkbox" name="profile-game" v-model="profilgame" >
        <label>{{$t('models.user.profileGame')}}</label>
      </div>
      <div>

        <input type="checkbox" name="profile-dev" v-model="profildev" >
        <label>{{$t('models.user.profileDev')}}</label>
      </div>
    </div>
    <div class="button-wrapper">
      <altai-button type="submit" :disabled="isDisabled">{{$t('components.user.account.button')}}</altai-button>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Login'}">{{$t('components.user.login.alreadyMember')}}</router-link>
    </div>
</form>
</template>
<script>
import _ from 'lodash'
import AltaiButton from '@/components/ui/AltaiButton'
import API from '@/services/API'
import firebase from 'firebase'
import {mapMutations} from 'vuex'
export default {
  name: 'account',
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      uid: null,
      usname: null,
      name: null,
      lname: null,
      email: null,
      profilgame: false,
      profildev: false,
      checked: false,
      password: '',
      message: '',
      invalide: false,
      valide: false,
      ...this.$store.state.user
    }
  },
  computed: {
    isDisabled () {
      return _.isEqual(this.newUser, this.initialUser) // initial user is not updated, but user is
    },
    initialUser () {
      const user = this.$store.state.user
      return {
        uid: user.uid || null,
        usname: user.usname || null,
        name: user.name || null,
        lname: user.lname || null,
        email: user.email || null,
        profilgame: user.profilgame || false,
        profildev: user.profildev || false,
        color: user.color || null,
        city: user.city || null,
        vename: user.vename || null,
        fbaccount: user.fbaccount || null
      }
    },
    newUser () {
      return {
        uid: this.uid,
        usname: this.usname,
        name: this.name,
        lname: this.lname,
        email: this.email,
        casej: this.profilgame,
        casedev: this.profildev,
        password: this.password,
        color: this.color,
        city: this.city,
        vename: this.vename,
        fbaccount: this.fbaccount,
      }
    }
  },
  methods: {
    ...mapMutations(['valideUser']),
    onUpdate: function (e) {
      let $this = this
      API.user.update(this.newUser, this).then((user) => {
        // go back to the chat interface
        this.$router.push({ name: 'Chat' })
      }).catch(function (error) {
        $this.invalide = true
        $this.message = error
        console.log('error',error)
      })
    }
  },
  mounted () {
    let $this = this
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // store.commit('updateUserId', user.uid)
      } else {
        const userId = 123
//        $this.$router.push({ name: 'Signup', params: { userValitde: false }})
        $this.$router.push({name: 'Signup', params: { userId }})
        $this.valideUser(false)
      }
    })
  }
}
</script>
<style lang="scss">
.flex{

  :first-child{
    margin-right: 8px;
  }
  :not(:first-child){
    margin-left: 8px;
  }
  .input-100{
    width: 100%;
    margin-right: inherit;
    input {
      width: 100%;
    }

  }
  input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;

  }
  input[type=checkbox] {
    -border-radius: 4px;
    height: 30px;
    width: 30px;
    background: linear-gradient(70deg, rgba(#aaaaaa, 0.5), rgba(#999999, 0.5));
    border: 1px solid #ccc;
  }
  input[type="checkbox"]:checked {
    background: linear-gradient(70deg, rgba(#aaaaaa, 0.5), rgba(#999999, 0.5));
    /*margin:0px;*/
    position: relative;
    &:before {
      font-family: FontAwesome;
      content: '\f00c';
      display: block;
      color: grey;
      font-size: 13px;
      position: absolute;
    }
  }
  label {
    position: relative;
    bottom: 28px;
  }

}
.flex2{
  margin-top: 65px

}
</style>
