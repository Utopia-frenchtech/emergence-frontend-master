<template>
<div class="shop-items">
    <ul class="items list--no-style">
        <li v-for="item in items" class="item__wrapper" :key="item.id">
            <router-link 
            :to="{name:'ShopItem', params:{itemId: item.id}}"
            tag="div"
            class="btn btn--zooming item__description-block"
            >
            <item :item="item" :onAdd="onAdd" :onRemove="onRemove" :allowAdd="allowAdd" :allowRemove="allowRemove"/>
            </router-link>
        </li>
    </ul>

</div>
</template>

<script>
/** 
A list of items
Can enable or disable add to cart/remove from cart buttons
*/
import API from '@/services/API'
import Item from './Item'

export default {
    components:{
        Item
    },
    props:{
        items:{
            type: Array,
            default: [],
        },
        allowAdd:{
            type: Boolean,
            default: false,
        },
        onAdd:{
            type: Function,
            required: false,
        },
        allowRemove:{
            type: Boolean,
            default: false,
        },
        onRemove:{
            type: Function,
            required: false,
        }
    },
}
</script>

<style lang="scss">
@import '~@/assets/style/variables/colors';
.shop-items{
    .item__wrapper{
        &:not(:last-child){
        border-bottom: 1px solid $greyDark;
        }
    }
}

</style>
