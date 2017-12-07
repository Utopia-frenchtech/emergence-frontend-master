<template>
<div class="shop-items">
    <ul>
        <li v-for="item in items" :key="item.id">
            <div>
            <img :src="item.icon" :alt="item.title">
            <h2>
            {{item.title}}
            </h2>
            <p>
            {{item.shortDescription}}
            </p>
            </div>
            <div>
                {{item.price}}
                <button>Add</button>
            </div>
        </li>
    </ul>

</div>
</template>

<script>
import API from '@/services/API'
import AltaiButton from '@/components/ui/AltaiButton'
export default {
    created(){
        API.shop.getCategory(this.$route.params.categoryId).then(category => this.category = category)
        API.shop.getItems(this.$route.params.categoryId).then(items => this.items = items)
    },
    data(){return{
        items:[],
        category: {
            title: "Loading...",
        }
    }}
}
</script>

<style>

</style>
