<template>
  <div class="index">
    <heador></heador>
    <i-slider></i-slider>
    <welfare></welfare>
    <service></service>
    <footor></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '@/components/public/heador'
  import Footor from '@/components/public/footor'
  import ISlider from './i-slider'
  import Navbar from '@/components/public/navbar'

  import Welfare from './welfare'
  import Service from './service'

  export default {
    name: 'index',
    data() {
      return {}
    },
    components: {
      Heador, Footor, ISlider, Navbar, Welfare, Service
    }
  }
</script>

<style lang="scss">

</style>
