<template>
  <button class="altai-button" :class="{'altai-button--round': isRound}">
      <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'altai-button',
  props:{
    isRound: {
      type: Boolean,
      default: false
      }
  },
  data: function data () {
    return {

    }
  }
}
</script>
<style lang="scss">
.altai-button{
    border-radius: 5%;
    background-color: #38393B;
    color:#ffffff;
    padding: 12px 24px;
    text-transform: uppercase;
    transition: background-color 0.3s, color 0.3s;
    &--round{
      width: 40px;
      height: 40px;
      border-radius: 50%;
      padding: 0px;
      text-align: center;
    }
    &:hover{
      cursor: pointer;
      transform: scale(1.1);
    }
    &:active{
      transform: translate(1px, 1px)
    }
    &:disabled{
      background-color: #989aa1;
      color: #6f7175;
      cursor: not-allowed;
    }
}
</style>
