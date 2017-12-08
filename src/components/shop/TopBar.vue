<template>
<div class="shop-top-bar">
    <div class="shop-icon">
        <altai-button isFlat isRound>
            <router-link :to="{name:'Shop'}" >
        <img class="icon" :src="this.shopIcon" alt="The shop">
            </router-link>
        </altai-button>
    </div>
        <router-link :to="this.link" tag="div" class="title">
        <div v-if="icon" class="title__icon">
            <img :src="icon" :alt="dynamicTitle + 'icon'"/>
            </div>
        <div class="title__text">
        {{dynamicTitle}}
        </div>
        </router-link>
    <div class="actions">
        <altai-button isFlat isRound>
            <router-link :to="{name:'ShopCart'}" >
<img class="icon" :src="caddieIcon" :title="$t('components.shop.topbar.cart')"/>
</router-link>
</altai-button>
        <altai-button isFlat isRound>
<router-link :to="{name: 'Chat'}">
<img class="icon" :src="closeIcon" :title="$t('components.shop.topbar.close')" />
</router-link>
</altai-button>
    </div>
</div>
  

</template>

<script>
import API from '@/services/API'
import shopIcon from '@/assets/img/shop/shop_icon.png'
import caddieIcon from '@/assets/img/shop/caddie_icon.png'
import closeIcon from '@/assets/img/shop/close_icon.png'
export default {
    created(){
        console.log("CREATED")
        this.loadTitle()
    },
    watch:{
        title:{handler: function(){this.loadTitle()},},
        categoryId:{handler: function(){this.loadTitle()},},
        itemId:{handler: function(){this.loadTitle()},},
    },
    props:{
        title: {
            type: String,
            required: false,
        },
        categoryId:{
            type: String,
        },
        itemId:{
            type: String,
        }
    },
    data(){return{
        shopIcon,
        caddieIcon,
        closeIcon,
        dynamicTitle: "Loading...",
        icon: undefined,
        link: {name: 'Shop'},
    }},
    methods:{
        loadTitle(){
        if (this.title) {
            this.dynamicTitle = this.title
        } else if (this.categoryId){
            console.log("HERE")
            API.shop.getCategory(this.categoryId).then(category => {
                console.log("THERE")
                this.dynamicTitle = category.title
                this.icon = category.icon
            })
            this.link = {name: 'ShopCategory', params:{categoryId: this.categoryId}}
        } else if (this.itemId) {
            API.shop.getItem(this.itemId).then(item => {
                this.dynamicTitle = item.title
            })
        }
        }
    }

}
</script>

<style lang="scss">
$height: 48px;
.shop-top-bar{
    .icon{
            height: 32px;
    }
    display: flex;
    height: $height;
    .shop-icon, .actions{
        padding: #{($height - 32px)/2} 8px;
    }
    .title{
        flex-grow: 1;
        text-align: center;
        line-height: 48px;
        font-size: 32px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        justify-content: center;
        &__icon{
            margin-right: 16px;
        }
    }
}

</style>
