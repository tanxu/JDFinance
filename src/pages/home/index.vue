<template>
  <div class="index">
    <heador></heador>
    <h-slider></h-slider>
    <novice></novice>
    <borrow></borrow>
    <money></money>
    <product></product>
    <life></life>
    <footor></footor>
    <navbar></navbar>
  </div>
</template>

<script>
  import Heador from '@/components/public/heador'
  import Footor from '@/components/public/footor'
  import HSlider from './h-slider'
  import Novice from './novice'
  import Borrow from './borrow'
  import Money from './money'
  import Product from './product'
  import Life from './life'
  import Navbar from '@/components/public/navbar'

  export default {
    name: 'index',
    data() {
      return {}
    },
    components: {
      Heador, Footor, HSlider, Novice, Borrow, Money, Product, Life,Navbar
    }
  }
</script>
