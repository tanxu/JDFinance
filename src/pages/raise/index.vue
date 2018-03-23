<template>
  <div class="index">
    <heador></heador>
    <r-slider></r-slider>
    <daily></daily>
    <in></in>
    <more></more>
    <footor cname="mfooter"></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '@/components/public/heador'
  import Footor from '@/components/public/footor'
  import RSlider from './r-slider'
  import Navbar from '@/components/public/navbar'

  import Daily from './daily'
  import In from './in'
  import More from './more'

  export default {
    name: 'index',
    data() {
      return {}
    },
    components: {
      Heador, Footor, RSlider, Navbar,Daily, In, More
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
