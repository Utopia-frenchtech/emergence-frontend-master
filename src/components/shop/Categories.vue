<template>
<div class="shop-categories">
    <h1>{{$t('components.shop.categories.welcome.title')}}</h1>
    <p>{{$t('components.shop.categories.welcome.message')}}</p>
    <div>
        <ul class="categories">
            <li class="btn btn--zooming category" v-for="category in categories" :key="category.title"
            >
            <router-link :to="{name: 'ShopCategory', params:{categoryId: category.id}}">
            <button class="category__button"
            :style="{
                    backgroundColor: category.bgColor,
                }"
            >
            <div class="category__icon-wrapper">
                    <img :src="category.icon" :alt="category.name + 'icon'"/>
            </div>
            <div class="category__title">
                    {{category.title}}
            </div>
            </button>
            </router-link>
            </li>
        </ul>

    </div>
</div>
</template>

<script>
import API from '@/services/API'
import AltaiButton from '@/components/ui/AltaiButton'
/**
 * Home page of the shop
 */
export default {
    components:{
        AltaiButton,
    },
    created(){
        API.shop.getCategories().then(categories => {
            this.categories = categories
        })
    },
    data(){ return {
        categories:[],
    }}
}
</script>

<style lang="scss">
.shop-categories{
    .categories{
        list-style-type: none;
        margin: 0;
        padding: 0px 12px;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap;
        justify-content: space-between;
        align-items: center;
    }
    .category{
        flex-basis: calc(50% - 8px);
        flex-shrink: 0;
        margin: 4px 0px;
        &__button{
        color: #ffffff;
        text-align: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        width: 100%;
        height: 100%;
        }
        &__title{
            flex-grow: 1;
            line-height: 32px;
            height: 32px;
            font-size: 24px;
        }   
        &__icon-wrapper{
            padding: 4px 8px;
        }
    }
}

</style>
