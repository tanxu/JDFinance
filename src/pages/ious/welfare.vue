<template>
  <panel title="白条福利" :class="$style.panel">
    <section :class="$style.content">
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"
          alt="">
        <div>
          <h4>开通白条</h4>
          <p>送188元礼包</p>
        </div>
        <em>立即开通&gt;</em>
      </div>
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"
          alt="">
        <div>
          <h4>白条闪付</h4>
          <p>新手享158元礼包</p>
        </div>
        <em>随机立减&gt;</em>
      </div>
      <div :class="$style.item">
        <img
          src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"
          alt="">
        <div>
          <h4>白条提额</h4>
          <p>金融app专享提额礼包</p>
        </div>
        <em>去提额&gt;</em>
      </div>
    </section>
  </panel>
</template>

<script>
  import Panel from '@/components/core/panel'

  export default {
    name: "finance",
    components: {
      Panel
    }
  }
</script>

<style lang="scss" module>
  @import "../../assets/css/element";

  .panel {
    @include panel;
    > h4 {
      border-bottom: 1px solid #ddd;
    }
    .content {
      @include flex;
      .item {
        @include flex(row);
        align-items: center;
        line-height: 140px;
        &:after {
          content: '';
          box-sizing: border-box;
          height: 0;
          width: 100%;
          border-bottom: 1px solid #ddd;
          margin-left: 136px;
        }
        &:last-child:after {
          border-bottom: none;
        }
        > img {
          width: 88px;
          height: 88px;
          display: inline-block;
          margin: 0 32px;
        }
        > div {
          width: 344px;
          h4 {
            font-size: 32px;
            color: #333333;
            line-height: 1.8;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          p {
            color: #999;
            font-size: 24px;
            line-height: 1.1;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
        > em {
          font-size: 28px;
          color: #FF801A;
        }
      }
    }
  }
</style>
