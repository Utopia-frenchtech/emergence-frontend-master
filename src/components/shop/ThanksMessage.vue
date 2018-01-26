<template>
  <div class="shop-thanks-message">
      <h1>{{$t('components.shop.thanksMessage.title')}}</h1>
      <div class="thanks-message__description">
      <p v-for="t in $t('components.shop.thanksMessage.description').split('\n')">
          {{t}}
      </p>
      </div>
      <items-list :items="items" :allowAdd="false" :allowRemove="false"/>
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
import ItemsList from './ItemsList'
export default {
    components:{
        ItemsList,
    },
    created(){
            API.shop.getCartItems().then(items => this.items = items)
            },
            data(){return{
                items: [],
            }},
    props:{
        categoryId:{
            type: String,
            required: false,
        },
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
            }
            return { name: 'Shop'}
        }
    }
}
</script>

<style lang="scss">
.shop-thanks-message{
    padding-bottom: 16px;
    height: 100%;
    .thanks-message{
        &__description{
            font-size: 16px;

        }
    }

}
</style>
