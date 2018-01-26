<template>
  <nav id="top-menu">
    <div class="menu-block left-menu-button btn">
      <i class="fa fa-bars" v-on:click.prevent="toggleLeftMenu"></i>
    </div>
    <div class="menu-block user-menu">
      <logged-in-menu v-if="user" :user="user" :exp="exp" class="user-info"/>
      <div v-else class="user-login">
        <router-link :to="{ name: 'Login'}">
          <altai-button>{{$t('components.user.login.label')}}</altai-button>
        </router-link>
      </div>
    </div>
  </nav>
</template>
<script>
import AltaiButton from '@/components/ui/AltaiButton'
import LoggedInMenu from './LoggedInMenu'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'top-menu',
  components: {
    AltaiButton,
    LoggedInMenu,
  },
  data: function data () {
    return {
    }
  },
  computed: {
    ...mapState(['user', 'exp']),
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapMutations(['toggleLeftMenu'])
  }
}
</script>
<style lang="scss">
#top-menu{
  display: flex;
  padding: 8px;
  margin: 8px 0px;
  .menu-block{
    padding: 0px 16px;
  }
  .left-menu-button{
    font-size: 200%;
    color: #666666;
  }
  .user-menu{
    flex-grow: 1;
    text-align: right;
  }
}

</style>
