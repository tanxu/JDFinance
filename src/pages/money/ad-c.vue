<template>
  <panel title="理财金" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"
        alt="">
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "ad-c",
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
    margin-bottom: 0;
    > h4 {
      display: none;
    }
    .content {
      height: 102px;
      img {
        width: 100%;
        display: block;
        height: 102px;
      }
    }
  }

</style>
