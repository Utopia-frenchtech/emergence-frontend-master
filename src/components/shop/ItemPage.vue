<template>
<div class="shop-item-page">
    <item class="item__summary" :item="item" :allowAdd="true" :onAdd="addItem" />
    <div class="item__long-description">
        {{item.longDescription}}
    </div>
</div>
  
</template>

<script>
import API from '@/services/API'
import Item from './Item'

export default {
    components:{
        Item,
    },
    props:{
        itemId: {
            type: String,
            required: true,
        }

    },
    created(){
        API.shop.getItem(this.itemId).then(item => this.item = item)
    },
    data(){return {
        item: {
            title: "Loading...",
        }
    }},
    methods:{
        addItem() { 
            API.shop.addItem(this.item)
            this.$router.push({name:'ShopThanksMessage', query:{categoryId: this.item.categoryId, itemId: this.item.id}})
        }
    }
}
</script>

<style lang="scss">
.shop-item-page{
.item__summary{
    padding: 40px 0px;
}

}

</style>
