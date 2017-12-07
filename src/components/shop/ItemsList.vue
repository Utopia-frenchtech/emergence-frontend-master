<template>
<div class="shop-items">
    <ul class="items list--no-style">
        <li v-for="item in items" class="item" :key="item.id">
            <router-link 
            :to="{name:'ShopItem', params:{itemId: item.id}}"
            tag="div"
            class="btn btn--zooming item__description-block"
            >
                <div class="item__image-wrapper">
                    <img :src="item.icon" :alt="item.title">
                </div>
                <div>
                    <h2>
                     {{item.title}}
                     </h2>
                      <p>
                       {{item.shortDescription}}
                   </p>
                </div>
            </router-link>
            <div class="item__price price">
                <div class="price__value">
                {{item.price}}
                </div>
                <button 
                class="price__button"
                @click="addItem(item)"
                >{{$t('components.shop.cart.add')}}</button>
            </div>
        </li>
    </ul>

</div>
</template>

<script>
import API from '@/services/API'
import AltaiButton from '@/components/ui/AltaiButton'
export default {
    created(){
        API.shop.getCategory(this.categoryId).then(category => this.category = category)
        API.shop.getItems(this.categoryId).then(items => this.items = items)
    },
    props:{
        categoryId:{
            type: String,
            required: true,
        }
    },
    data(){return{
        items:[],
        category: {
            title: "Loading...",
        }
    }},
    methods:{
        addItem(item) { 
            API.shop.addItem(item)
            this.$router.push({name:'ShopThanksMessage', query:{categoryId: this.category.id}})
        }
    }
}
</script>

<style lang="scss">
.shop-items{
    .items{
    }
    .item{
        display: flex;
        &__description-block{
            display: flex;
        }

    }
}

</style>
