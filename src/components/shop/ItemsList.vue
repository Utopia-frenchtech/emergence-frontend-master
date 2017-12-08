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
            <div v-if="allowAdd" class="item__price price">
                <div class="price__value">
                {{item.price}}
                </div>
                <button 
                class="price__button"
                @click="onAdd(item)"
                >{{$t('components.shop.cart.add')}}</button>
            </div>
            <div v-if="allowRemove" class="item__remove">
                <button 
                class="remove__button"
                @click="onRemove(item)"
                >{{$t('components.shop.cart.remove')}}</button>
            </div>
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
import AltaiButton from '@/components/ui/AltaiButton'
export default {
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
