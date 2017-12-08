<template>
  <div class="shop-thanks-message">
      <h1>{{$t('components.shop.thanksMessage.title')}}</h1>
      <div class="thanks-message__description">
      <p v-for="t in $t('components.shop.thanksMessage.description').split('\n')">
          {{t}}
      </p>
      </div>
      <item v-if="item" :item="item" :allowAdd="false" :allowRemove="false"/>
      <p>
          <router-link :to="lastVisited">
          {{$t('components.shop.thanksMessage.continue')}}
          </router-link>
      </p>
      <p>
          <router-link :to="{name:'Chat'}">
          {{$t('components.shop.thanksMessage.leave')}}
              </router-link>   
      </p>
  </div>
</template>

<script>
import API from '@/services/API'
import Item from './Item'
export default {
    components:{
        Item,
    },
    created(){
        if (this.itemId){
            API.shop.getItem(this.itemId).then(item => this.item = item)
        }
            },
            data(){return{
                item: undefined,
            }},
    props:{
        categoryId:{
            type: String,
            required: false,
        },
        itemId: {
            type: String,
            required: false,
        }
    },
    computed:{
        lastVisited(){
            if (this.categoryId){
                return {
                    name:'ShopCategory', 
                    params: {
                        categoryId: this.categoryId
                        }
                    }
            } else if (this.itemId){
                return {
                    name:'ShopItem', 
                params: {itemId: this.itemId}
                }
            }
            return { name: 'Shop'}
        }
    }
}
</script>

<style lang="scss">
.shop-thanks-message{
    .thanks-message{
        &__description{
            font-size: 16px;

        }
    }

}
</style>
