<template lang="html">
  <div :class="[btnClass, cname]">
    <slot>按钮</slot>
  </div>
</template>

<script>
export default {
  props: {
    cname: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      btnClass: 'btn'
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/css/element';
.btn{
  @include btn;
}
</style>
