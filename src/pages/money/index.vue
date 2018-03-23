<template>
  <div class="index">
    <heador></heador>
    <m-slider></m-slider>
    <ada></ada>
    <money></money>
    <adb></adb>
    <finance></finance>
    <adc></adc>
    <footor cname="mfooter"></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '@/components/public/heador'
  import Footor from '@/components/public/footor'
  import MSlider from './m-slider'
  import Navbar from '@/components/public/navbar'
  import Ada from './ad-a'
  import Adb from './ad-b'
  import Adc from './ad-c'
  import Finance from './finance'
  import Money from './money'

  export default {
    name: 'index',
    data() {
      return {}
    },
    components: {
      Heador, Footor, MSlider, Navbar, Ada, Adb, Money, Finance, Adc
    }
  }
</script>

<style lang="scss">
  .mfooter {
    margin-top: 0 !important;
    ul {
      li:first-child {
        display: none;
      }
    }
  }
</style>
