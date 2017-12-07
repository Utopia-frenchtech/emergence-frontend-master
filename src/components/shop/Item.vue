<template>
<div>
    <div>
        <img :src="item.icon" :alt="item.title">
    <h1>{{item.title}}</h1>
    <p>{{item.shortDescription}}</p>

    </div>
    <div>
        {{item.price}}
    </div>
    <div>
        {{item.longDescription}}
    </div>
</div>
  
</template>

<script>
import API from '@/services/API'
export default {
    created(){
        API.shop.getItem(this.$route.params.itemId).then(item => this.item = item)
    },
    data(){return {
        item: {
            title: "Loading...",
        }
    }}
}
</script>

<style>

</style>
