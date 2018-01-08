<template>
  <form v-on:submit.prevent="onSignup" id="signup" class="vertical big">
    <div style="color: red" v-if="invalide">{{message}}</div>
    <div class="">
      <input type="text" name="username" v-model="usname" :placeholder="$t('models.user.userName')">
    </div>
    <div class="">
      <input type="text" name="email" v-model="email" :placeholder="$t('models.user.email')">
    </div>
    <div class="">
      <input type="password" name="password" v-model="password" :placeholder="$t('models.user.password')">
    </div>
    <div class="button-wrapper">
      <altai-button type="submit" :disabled="isDisabled">{{$t('components.user.signup.button')}}</altai-button>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Login'}">{{$t('components.user.login.alreadyMember')}}</router-link>
    </div>
</form>
</template>
<script>
import AltaiButton from '@/components/ui/AltaiButton'
import API from '@/services/API'
import stringHelpers from '@/helpers/stringHelpers'
import {mapState} from 'vuex'
export default {
  name: 'signup',
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      email: '',
      usname: '',
      password: '',
      message: '',
      invalide: false
    }
  },
  computed: {
    ...mapState(['user', 'userValide']),
    isDisabled: function () {
      return stringHelpers.isEmpty(this.usname) || stringHelpers.isEmpty(this.email) || stringHelpers.isSmaller(this.password, 6)
    }
  },
  methods: {
    onSignup: function () {
      let $this = this
      API.user.signup({ usname: this.usname, name: this.usname, email: this.email, password: this.password })
      .then((user) => {
        // go back to the chat interface
        this.$router.push({ name: 'Chat' })
      }).catch(function (error) {
        $this.invalide = true
        $this.message = error
      })
    }
  },
  mounted () {
    console.log(this.user)
    this.user.email ? this.email = this.user.email : null
    this.user.username ? this.username = this.user.username : null
    let valide = this.userValide
    if (valide === false) {
      this.invalide = true
      this.message = this.$t('models.user.uservalides')
    }
    console.log(this.userValide)
  }
}
</script>
<style lang="scss">
</style>
