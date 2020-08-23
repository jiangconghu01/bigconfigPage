<template>
  <div ref="dombox" class="fixed-layout-common-box generate-page-box" :style="pageStyle">
    <div class="header">
      <div class="title target 0" index="0">
        <page-instance :config="eleArray.data0"></page-instance>
      </div>
      <div class="date target 1" index="1">
        <page-instance :config="eleArray.data1"></page-instance>
      </div>
    </div>
    <div class="chart left">
      <div class="target item 2" index="2"><page-instance :config="eleArray.data2"></page-instance></div>
      <div class="target item 3" index="3"><page-instance :config="eleArray.data3"></page-instance></div>
      <div class="target item 4" index="4"><page-instance :config="eleArray.data4"></page-instance></div>
    </div>
    <div class="chart center">
      <div class="target title 5" index="5"><page-instance :config="eleArray.data5"></page-instance></div>
      <div class="target item 6" index="6"><page-instance :config="eleArray.data6"></page-instance></div>
    </div>
    <div class="chart right">
      <div class="target item 7" index="7"><page-instance :config="eleArray.data7"></page-instance></div>
      <div class="target item 8" index="8"><page-instance :config="eleArray.data8"></page-instance></div>
      <div class="target item 9" index="9">
        <page-instance :config="eleArray.data9"></page-instance>
      </div>
    </div>
  </div>
</template>
<script>
import pageInstance from '@/components/config/page.fixed.instance.vue'
export default {
  name: 'GenertateFixedCommon',
  components: {
    pageInstance,
  },
  props: {},
  data() {
    return {
      options: {},
      width: '',
      height: '',
    }
  },
  computed: {
    pageStyle() {
      let style = null
      if (this.options.generateLayout == 'coverwh') {
        style = { backgroundColor: this.options.background.color }
      }
      if (this.options.generateLayout == 'fixwh') {
        style = {
          width: this.options.width + 'px',
          height: this.options.height + 'px',
          backgroundColor: this.options.background.color,
        }
      }
      if (this.options.generateLayout == 'scalewh') {
        const w1 = this.options.width
        const h1 = this.options.height
        const w2 = this.width
        const h2 = this.height
        const s = w2 / w1 >= h2 / h1 ? h2 / h1 : w2 / w1
        style = {
          width: this.options.width * s + 'px',
          height: this.options.height * s + 'px',
          backgroundColor: this.options.background.color,
          //   transform: 'scale(' + s + ')',
        }
      }
      return style
    },
    eleArray() {
      const t = {
        data0: { type: '' },
        data1: { type: '' },
        data2: { type: '' },
        data3: { type: '' },
        data4: { type: '' },
        data5: { type: '' },
        data6: { type: '' },
        data7: { type: '' },
        data8: { type: '' },
        data9: { type: '' },
      }
      this.options.children &&
        this.options.children.forEach((ele) => {
          t['data' + ele.domindex] = ele
        })
      return t
    },
  },
  created() {
    this.options = JSON.parse(this.$ls.get('current_page'))
  },
  mounted() {
    // !this.options.id && (this.options.id = this.$uuidv4())
    // console.log(this.options)
    // this.width = this.$refs.dombox.clientWidth
    // this.height = this.$refs.dombox.clientHeight
    this.width = document.querySelector('body').clientWidth
    this.height = document.querySelector('body').clientHeight
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.fixed-layout-common-box {
  position: relative;
  width: 100%;
  height: 100%;
  //   background: #000d4a url(../../../static/temp_common_bg.jpg) center top;
  background-size: cover;
  color: rgb(212, 208, 208);
  //   .target {
  //     background-color: rgba(218, 230, 230, 0.11);
  //   }
  & > div {
    position: absolute;
  }
  .header {
    height: 70px;
    width: 100%;
    .title {
      font-size: 22px;
      height: 70px;
      line-height: 70px;
      min-width: 180px;
      text-align: center;
      @include Xcenter();
    }
    .date {
      font-size: 14px;
      height: 70px;
      line-height: 70px;
      min-width: 100px;
      text-align: center;
      right: 10px;
      position: absolute;
    }
  }
  .chart {
    height: calc(100% - 75px);
    top: 75px;
    display: flex;
    flex-direction: column;
    .item {
      flex: 1;
      margin-top: 20px;
    }
    .item:last-child {
      margin-bottom: 20px;
    }
  }
  .left {
    width: 30%;
    left: 1%;
  }
  .center {
    left: 32%;
    width: 36%;
    .title {
      height: 100px;
      margin-top: 20px;
    }
  }
  .right {
    right: 1%;
    width: 30%;
  }
}
</style>
