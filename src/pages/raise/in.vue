<template>
  <panel title="In货推荐" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item" v-for="(item,index) in items">
        <img :src="item.categoryImg" alt="">
        <section :class="$style.list">
          <div :class="$style.product" v-for="(product,pIndex) in item.product">
            <img :src="product.src"
                 alt="">
            <p :class="$style.title">{{product.title}}</p>
            <p :class="$style.price"><em>{{product.price}}.00</em>起</p>
            <article v-if="product.progress">
              <div :class="$style.wrapper">
                <div :class="$style.inner" :style="{width:product.progress+'%'}"></div>
              </div>
              <p>{{product.progress}}%</p>
            </article>
            <div v-if="!product.progress">
              众筹结束
            </div>
            <label v-if="product.fine==='1'">精选</label>
          </div>
        </section>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "in",
    data() {
      return {
        items: [
          {
            categoryImg: 'https://img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200',
            product: [
              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t15595/15/2136732080/41551/b26c2916/5a7c54cdN4ad03299.jpg',
                title: '电动牙刷',
                price: '79',
                progress: '203',
                fine: '1'
              },
              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t16168/161/1968909024/148686/2a85179/5a7be4bdN01533e62.jpg',
                title: '胶囊咖啡机',
                price: '11',
                progress: '103',
                fine: '0'
              }
            ]
          },
          {
            categoryImg: 'https://img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200',
            product: [
              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t13834/192/2625202072/70435/e5b85a62/5a460eefN94289190.jpg',
                title: '智能后视镜',
                price: '90',
                progress: '',
                fine: '0'
              },
              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t5827/255/6140287884/111611/498f9693/59683808N9253369f.jpg',
                title: 'GPD口袋电脑',
                price: '75',
                progress: '0',
                fine: '0'
              }
            ]
          },
          {
            categoryImg: 'https://img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200',
            product: [

              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t19087/67/359234055/152112/75036460/5a6ecc5fN565775cd.jpg',
                title: '层层轻薄雪花酥',
                price: '29',
                progress: '',
                fine: '0'
              },
              {
                src: 'https://img30.360buyimg.com/cf/s250x250_jfs/t14506/168/2096353267/153845/5bb0a2e6/5a6e9518N15da6f7c.jpg',
                title: '华礼脸茶',
                price: '29',
                progress: '',
                fine: '0'
              }
            ]
          },
        ]
      }
    },
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    .content {
      @include flex();
      .item {
        > img {
          display: block;
          width: 100%;
          height: 170px;
        }
        .list {
          @include flex(row);
          justify-content: space-between;
          padding: 0 20px;
          margin-bottom: 40px;
          .product {
            width: 290px;
            height: 396px;
            box-sizing: border-box;
            background-color: rgba(0, 0, 0, .02);
            text-align: center;
            position: relative;
            > div {
              color: #999;
              background: #EDEDED;
              height: 48px;
              line-height: 48px;
              font-size: 24px;
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
            }
            label {
              position: absolute;
              left: 0;
              top: 0;
              color: #ff0000;
              font-size: 20px;
              padding: 4px 8px;
              background-image: linear-gradient(-35deg, #C1C1C1 0, #ACACAC 100%);
            }
            article {
              @include flex(row);
              align-items: center;
              justify-content: space-around;
              height: 30px;
              line-height: 30px;
              margin-top: 16px;
              p {
                font-size: 24px;
                color: #999;
              }
              .wrapper {
                width: 144px;
                height: 10px;
                background: #F6E6E6;
                border-radius: 22px;
                overflow: hidden;
                .inner {
                  width: 40%;
                  height: 10px;
                  background-image: linear-gradient(270deg, #F55 1%, #FF9C31 100%);
                  border-radius: 11px;
                }
              }
            }
            img {
              width: 180px;
              height: 180px;
              margin: 44px auto 20px;
            }
            .title {
              font-size: 28px;
              color: #444;
            }
            .price {
              font-size: 20px;
              color: #999;
              height: 48px;
              line-height: 48px;
              em {
                color: #ff3232;
                font-size: 36px;
                margin-right: 4px;
                &:before {
                  content: '￥';
                  font-size: 28px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
