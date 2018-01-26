<template>
  <items-list
  :items="items"
  :allowAdd="false"
  :allowRemove="true"
  :onRemove="removeItem"
  />
</template>

<script>
import ItemsList from './ItemsList'
import API from '@/services/API'
export default {
    created(){
        API.shop.getCartItems().then(items => this.items = items)
    },
    components:{
        ItemsList
    },
    data(){return{
        items: [],
    }},
    methods:{
        removeItem(item){
            API.shop.removeItem(item)
        }
    }
}
</script>

<style>

</style>
