<template>
  <panel title="轮播图" :class="$style.panel">
    <section :class="$style.content">
      <slider :items="items" :cname="$style.slider"></slider>
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'
  import Slider from '@/components/core/slider'

  export default {
    name: "i-slider",
    data() {
      return {
        items: [
          {
            href: 'Ious',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t16192/335/2551594630/83964/64093ce3/5ab215c6N94e6936b.jpg?width=750&height=320'
          },
          {
            href: 'Ious',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t16798/322/621991060/49914/ec0d539b/5a991ebcN932c6731.jpg?width=750&height=320'
          }
        ]
      }
    },
    components: {
      Panel, Slider
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    >h4{
      display: none;
    }
    .content {
      .slider {
        margin-top: 120px;
      }
    }
  }
</style>
