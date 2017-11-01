<template>
  <form v-on:submit.prevent="onLogin" id="login" class="vertical big">
    <div style="color: red" v-if="invalide">{{message}}</div>
    <div class="">
      <input type="text" name="username" v-model="username" :placeholder="$t('models.user.userName')">
    </div>
    <div class="">
      <input type="password" name="password" v-model="password" :placeholder="$t('models.user.password')">
    </div>
    <div class="button-wrapper">
      <altai-button type="submit" :disabled="isDisabled">{{$t('components.user.login.button')}}</altai-button>
    </div>
    <div class="links">
      <router-link :to="{ name: 'Signup'}">{{$t('components.user.signup.notYetMember')}}</router-link>
    </div>
</form>
</template>
<script>
import AltaiButton from '@/components/ui/AltaiButton'
import API from '@/services/API'
import stringHelpers from '@/helpers/stringHelpers'
export default {
  name: 'login',
  components: {
    AltaiButton
  },
  data: function data () {
    return {
      username: '',
      password: '',
      message: '',
      invalide: false
    }
  },
  computed: {
    isDisabled: function () {
      return stringHelpers.isEmpty(this.username) || stringHelpers.isSmaller(this.password, 6)
    }
  },
  methods: {
    onLogin: function () {
      let $this = this
      API.user.login({ email: this.username, password: this.password }).then((user) => {
        // go back to the chat interface
        this.$router.push({ name: 'Chat' })
      }).catch(function (error) {
        $this.invalide = true
        $this.message = error
//        console.log('dd', error)
      })
    }
  }
}
</script>
<style lang="scss">
</style>
