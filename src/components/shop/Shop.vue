<template>
<div class="shop">
    <router-view class="topbar" name="top"></router-view>
    <router-view class="content" name="content"></router-view>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~@/assets/style/variables/colors';
.shop{
    .topbar{
        background-color: $greyDark;
        color: $white;
    }
    .content{
        background-color: $greyLight;
    }
}

</style>
