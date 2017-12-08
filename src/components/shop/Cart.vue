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
export default {
    components:{
        ItemsList
    },
    data(){return{
        items: [],
    }},
    methods:{
        removeItem(){
            return
        }
    }
}
</script>

<style>

</style>
