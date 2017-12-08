<template>
  <div>
      <h1>{{$t('components.shop.thanksMessage.title')}}</h1>
      <p>{{$t('components.shop.thanksMessage.description')}}</p>
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

<style>

</style>
