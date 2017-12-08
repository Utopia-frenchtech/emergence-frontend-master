<template>
<div class="shop-item item">
    <router-link
            :to="{name:'ShopItem', params:{itemId: item.id}}"
            tag="div"
            class="btn btn--zooming item__description-block"
    >
                <div class="item__image-wrapper">
                    <img :src="item.icon" :alt="item.title">
                </div>
                <div class="item__text">
                    <h2 class="item__title">
                     {{item.title}}
                     </h2>
                      <p class="item__description" v-for="t in item.shortDescription.split('\n')">{{t}}</p>
                   </p>
                </div>
</router-link>
            <div v-if="allowAdd || allowRemove" class="item__actions">
            <div v-if="allowAdd" class="item__price price">
                <div class="price__value">
                {{item.price}}
                </div>
                <altai-button 
                isFlat
                isRound
                class="btn btn--no-style price__button"
                :onClick="()=>onAdd(item)"
                :title="$t('components.shop.cart.add')"
                ><img :src="addIcon" :alt="$t('components.shop.cart.add')"/>
                </altai-button>
            </div>
            <div v-if="allowRemove" class="item__remove">
                <altai-button 
                isFlat
                isROund
                class="remove__button"
                :onClick="()=>onRemove(item)"
                :title="$t('components.shop.cart.remove')"
                ><img :src="removeIcon" :alt="$t('components.shop.cart.remove')"/>
                </altai-button>
            </div>
            </div>
</div>
  
</template>

<script>
import addIcon from '@/assets/img/shop/free_add_icon.png';
import removeIcon from '@/assets/img/shop/close_icon.png';
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

    },
    data(){return {
        addIcon,
        removeIcon,
    }}

}
</script>

<style lang="scss">
.item{
        display: flex;
        padding: 24px 0px;
        &__description-block{
            display: flex;
        }
        &__text{
            padding-right: 32px;
        }
        &__description{
            margin: 2px;
            font-size: 18px;
        }
        &__title{
            margin: 4px 0px;
            font-size: 32px;
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
            button{
                width: auto;
            }
        }
}
</style>
