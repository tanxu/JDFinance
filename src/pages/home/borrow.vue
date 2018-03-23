<template>
  <Panel title="急速借贷" :class="$style.panel">
    <section :class="$style.content">
      <router-link :to="{name:'Index'}">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=100&height=100"
          alt="">
      </router-link>
    </section>
  </Panel>
</template>
<script>
  import Panel from '@/components/core/panel'

  export default {
    data() {
      return {}
    },
    created() {
    },
    mounted() {
    },
    components: {
      Panel
    },
    methods: {}
  }
</script>
<style lang="scss" module>
  @import '../../assets/css/element';

  .panel {
    @include panel;
    .content {
      padding-bottom: 40px;
      img {
        display: block;
        width: 100%;
      }
    }
  }
</style>
