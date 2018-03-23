<template>
  <panel title="新品推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.arrow">更多尖货 &gt;</div>
      <slider :options="options" :items="items" cname="product-slider"></slider>
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'
  import Slider from '@/components/core/slider'

  export default {
    name: "product",
    data() {
      return {
        options: {
          slidesPerView: 2.3,
          spaceBetween: 30,
          freeMode: true,
        },
        items: [
          {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t17500/129/612741991/43773/b9be060d/5a9d02d3N79dd6e76.jpg?width=335&height=421'
          }, {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t19381/282/641433664/36503/a7084d81/5a9d031cN6daf7d1d.jpg?width=335&height=421'
          }, {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t18736/21/452113740/50445/b97274fb/5a7d5bc4N592e324e.jpg?width=335&height=421'
          }, {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t14935/5/2384445307/37843/697e3be2/5a9d0375N91173d42.jpg?width=335&height=421'
          },
        ]
      }
    },
    components: {
      Slider,
      Panel
    }
  }
</script>

<style lang="scss">
  .product-slider {
    .swiper-container {
      box-sizing: border-box;
      padding: 0 24px;
      .swiper-slide {
        a {
          display: inline-block;
          width: 100%;
          img {
            width: 100%;
            display: block;
            height: 314px;
          }
        }
      }
    }
  }
</style>

<style lang="scss" module>
  @import '../../assets/css/element';
  .panel {
    @include panel;
    .content {
      padding-bottom: 40px;
      position: relative;
      .arrow{
        position: absolute;
        font-size: 28px;
        color: #999;
        right: 20px;
        top: -70px;
      }
    }
  }
</style>
