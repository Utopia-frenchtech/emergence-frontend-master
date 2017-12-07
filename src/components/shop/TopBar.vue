<template>
<div>
    <div>
        Le SHOP
    </div>
    <div>
        <div v-if="icon">{{icon}}</div>
        <div>
        {{title}}
        </div>
    </div>
    <div>
        <altai-button isFlat isRound>Cart</altai-button>
        <altai-button isFlat isRound>Leave</altai-button>
    </div>
</div>
  

</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true,
        }
    }

}
</script>

<style lang="scss">

</style>
