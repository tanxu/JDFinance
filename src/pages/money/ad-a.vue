<template>
  <panel title="神券满" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t14707/121/2335216734/37656/5611f3d9/5a97704dNca58d124.png?width=750&height=270"
        alt="">
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "ad-a",
    data() {
      return {}
    },
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    .content {
      img {
        width: 100%;
        display: block;
        height: 230px;
      }
    }
  }

</style>
