<template>
  <section :class="cname">
    <swiper :options="options" :not-next-tick="options.notNextTick">
      <swiper-slide v-for="(item,index) in items" :key="index">
        <router-link :to="{ name: item.href}">
          <img :src="item.src" alt="">
        </router-link>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination" v-if="options.pagination"></div>
    </swiper>
  </section>
</template>

<script>

  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    props: {
      cname: {
        type: String,
        default: ''
      },
      items: {
        type: Array,
        default() {
          return []
        }
      },
      options: {
        type: Object,
        default() {
          return {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            notNextTick: false
          }
        }
      }
    },
    mounted() {
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>

<style lang="scss">
</style>
