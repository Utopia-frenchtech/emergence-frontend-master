<template>
<div class="shop-item item">
                <div class="item__image-wrapper">
                    <img :src="item.icon" :alt="item.title">
                </div>
                <div>
                    <h2 class="item__title">
                     {{item.title}}
                     </h2>
                      <p class="item__description">
                       {{item.shortDescription}}
                   </p>
                </div>
            </router-link>
            <div v-if="allowAdd || allowRemove" class="item__actions">
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
            </div>
</div>
  
</template>

<script>
export default {
    props:{
        item:{
            type: Object,
            required: true,
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

    }

}
</script>

<style lang="scss">
.item{
        display: flex;
        padding: 24px 0px;
        &__description-block{
            display: flex;
        }
        &__description{
            margin: 2px;
        }
        &__title{
            margin: 2px;
        }
        &__image-wrapper{
            display: flex;
            align-items: center;
            padding-right: 16px;
        }
        &__actions{
            padding-left: 16px;
            display: flex;
            align-items: center;
        }
}
</style>
