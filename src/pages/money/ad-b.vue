<template>
  <panel title="理财金" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"
        alt="">
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "ad-b",
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
        height: 142px;
      }
    }
  }

</style>
