<template>
      <div class="logged-in-menu">
          <div class="buttons">
        <router-link :to="{ name: 'Shop'}">
              <altai-button isRound>Shop</altai-button>
        </router-link>
          </div>
        <div class="">
          {{user.username}}
        </div>
        <div>
          <level :level="exp.level"></level>
        </div>
      </div>
</template>

<script>
import Level from '@/components/emergence/Level'
import AltaiButton from '@/components/ui/AltaiButton'
export default {
    name:'logged-in-menu',
    components:{
        Level,
        AltaiButton
    },
    props: {
        user: {
            required: true,
            type: Object,
        },
        exp:{
            required: true,
            type: Object,
        }
    }
}
</script>

<style lang="scss">
.logged-in-menu{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .buttons{
        text-align: right;
        margin: 0px 4px;
    }

}

</style>
