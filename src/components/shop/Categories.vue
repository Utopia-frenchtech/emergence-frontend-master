<template>
<div>
    <h1>{{$t('components.shop.categories.welcome.title')}}</h1>
    <p>{{$t('components.shop.categories.welcome.message')}}</p>
    <div>
        <ul>
            <li v-for="category in categories" :key="category.title">
                <div>
                    <img :src="category.icon" :alt="category.name + 'icon'"/>
                </div>
                <div :style="{
                    backgroundColor: category.bgColor,
                }">
                    {{category.name}}
                </div>
            </li>
        </ul>

    </div>
</div>
</template>

<script>
/**
 * Home page of the shop
 */
export default {
    data(){ return {
        categories:[],
    }}
}
</script>

<style>

</style>
