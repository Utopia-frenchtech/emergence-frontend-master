<template>
        <router-link :to="{ name: 'Shop'}">
              <altai-button class="shop-button" title="Shop" isRound>
                  <img :src="shopIcon" class="shop-button__icon"/>
                  </altai-button>
        </router-link>
</template>

<script>

import shopIcon from '@/assets/img/shop/shop_icon.png'
export default {
    data(){return{
        shopIcon,
    }},
}
</script>

<style lang="scss">
    .shop-button{
        padding: 2px;
    }
    .shop-button__icon{
        max-width: 100%;
        max-height: 100%;
    }

</style>
