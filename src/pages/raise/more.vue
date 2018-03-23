<template>
  <panel title="更多福利" :class="$style.panel">
    <section :class="$style.content">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7456/56/1425209238/21928/f1fe492d/599cee57Naea99020.jpg?width=250&height=330"
        alt="">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t7894/126/1440046618/24763/5ce6a129/599cee04Ne77b3641.jpg?width=250&height=330"
        alt="">
      <img
        src="//img12.360buyimg.com/jrpmobile/jfs/t6385/103/1675552688/24265/91be4150/59549aedNa30670f7.jpg?width=250&height=330"
        alt="">
      <p>专享福利&gt;</p>
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "more",
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    .content {
      @include flex(row);
      justify-content: space-around;
      padding-bottom: 60px;
      position: relative;
      p {
        position: absolute;
        top: -112px;
        right: 20px;
        font-size: 28px;
        height: 112px;
        line-height: 112px;
        color: #999;

      }
      img {
        width: 33.3%;
        height: 280px;
      }
    }
  }
</style>
