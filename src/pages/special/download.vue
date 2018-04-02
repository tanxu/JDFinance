<template>
  <panel title="下载APP" :class="$style.panel">
    <seciont :class="$style.content">

    </seciont>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "download",
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element.scss";

  .panel {
    @include panel;
    .content {

    }
  }
</style>
