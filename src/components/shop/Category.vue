<template>
<items-list
:items="items"
:allowAdd="true"
:onAdd="addItem"
:allowRemove="false"
/>
</template>

<script>
import API from '@/services/API'
import ItemsList from './ItemsList'
export default {
    components:{
        ItemsList,
    },
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
            this.$router.push({name:'ShopThanksMessage', query:{
                categoryId: this.category.id,
                itemId: item.id
                }})
        }
    }
}
</script>

<style lang="scss">

</style>
