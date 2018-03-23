<template>
  <article>
    <slider :cname="$style.slider" :items="items"></slider>
    <section :class="$style.list">
      <div :class="$style.item" v-for="(item,index) in enters" :key="index">
        <router-link :to="{name:item.href}">
          <img :src="item.img" :alt="item.title">
          <h4>{{item.title}}</h4>
        </router-link>
      </div>
    </section>
  </article>
</template>
<script>
  import Slider from '@/components/core/slider'

  export default {
    data() {
      return {
        items: [
          {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t15298/250/2605782004/42066/e3f130b4/5aab8795N3c33eb39.jpg?width=750&height=320'
          },
          {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t19675/253/830457163/36326/edba67e1/5aab8886N4e741b27.jpg?width=750&height=320'
          },
          {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t16612/253/842330467/35829/3f23279d/5aab8849N93ba4ff3.png?width=750&height=320'
          },
          {
            href: 'Index',
            src: '//img12.360buyimg.com/jrpmobile/jfs/t15892/242/2384997044/39637/6dcc30e2/5aab87feNa9fc205f.jpg?width=750&height=320'
          },
        ],
        enters: [
          {
            href: 'Index',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '优惠券'
          },
          {
            href: 'Index',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132',
            title: '抢红包'
          },
          {
            href: 'Index',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132',
            title: '抢钢镚'
          },
          {
            href: 'Index',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132',
            title: '领京豆'
          },
          {
            href: 'Index',
            img: '//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135',
            title: '白条提额'
          }
        ]
      }
    },
    created() {
    },
    mounted() {
    },
    components: {
      Slider
    },
    methods: {}
  }
</script>
<style lang="scss" module>
  @import "../../assets/css/element";

  .slider {
    margin-top: 120px;
    img {
      width: 100%;
    }
  }

  .list {
    @include list(row);
    background-color: #fff;
    padding-top: 40px;
    padding-bottom: 20px;
    justify-content: space-around;
    a {
      text-decoration: none;
    }
    .item {
      text-align: center;
      img {
        display: inline-block;
        width: 90px;
        height: 90px;
      }
      h4 {
        font-size: 26px;
        margin-top: 12px;
        color: #666;
      }
    }
  }
</style>
