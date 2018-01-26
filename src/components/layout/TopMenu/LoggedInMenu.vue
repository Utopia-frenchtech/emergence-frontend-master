<template>
      <div class="logged-in-menu">
          <div>{{this.$store.state.user.vename}}</div>
            &nbsp;
          <div class="buttons">
              <ShopTopButton/>
          </div>
          &nbsp;
        <div class="">
          {{user.username}}
        </div>
        &nbsp;
        <div>
          <level :level="exp.level"></level>
        </div>
      </div>
</template>

<script>
import Level from '@/components/emergence/Level'
import ShopTopButton from '@/components/shop/TopButton'
export default {
    name:'logged-in-menu',
    components:{
        Level,
        ShopTopButton,
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
