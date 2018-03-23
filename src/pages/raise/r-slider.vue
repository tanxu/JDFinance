<template>
  <panel title="金融头条" :class="$style.panel">
    <section :class="$style.content">
      <swiper :options="options">
        <swiper-slide>百万白条券免费送,速来领取!! <em>&gt;</em></swiper-slide>
        <swiper-slide>签到领流量,1元500M! <em>&gt;</em></swiper-slide>
      </swiper>
    </section>
  </panel>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  import Panel from '@/components/core/panel'

  export default {
    name: "r-slider",
    data() {
      return {
        options: {
          autoplay: true,
          loop: true,
          direction: 'vertical'
        }
      }
    },
    components: {
      Panel, swiper, swiperSlide
    }
  }
</script>

<style lang="scss">
  .swiper-container-vertical {
    height: 72px;
    .swiper-slide{
      font-size: 28px;
      color: #333333;

      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      padding-right: 40px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      position: relative;
      em{
        float: right;
        position: absolute;
        right: 20px;
        top: 50%;
        transform:translateY(-50%);
        color: #ddd;
      }
    }
  }
</style>
<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    > h4 {
      display: none;
    }
    .content {
      margin-top: 120px;
      height: 72px;
      line-height: 72px;
      overflow: hidden;
      padding-left: 166px;
      background: url("//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png") left center no-repeat;
    }
  }
</style>
