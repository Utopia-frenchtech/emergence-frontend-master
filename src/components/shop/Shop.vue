<template>
<div class="shop">
    <router-view class="topbar" name="top"></router-view>
    <div class="content">
    <router-view name="content"></router-view>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '~@/assets/style/variables/colors';
.shop{
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .topbar{
        background-color: $greyDark;
        color: $white;
        flex-shrink: 0;
    }
    .content{
        display: flex;
        overflow: auto;
        flex-grow:1;
        padding: 16px 24px;
        background-color: $greyLight;
    }
}

</style>
