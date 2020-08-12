<template>
  <div class="free-layout-common-box" :style="pageStyle">
    <div v-for="(item, index) in eleArray" :key="index + 'key'" class="layou-box" :style="position(item)">
      <page-instance :config="item"></page-instance>
    </div>
  </div>
</template>
<script>
import pageInstance from '@/components/config/page.fixed.instance.vue'
export default {
  name: 'GenertateFreeCommon',
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
    eleArray() {
      return this.options.children
    },
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
  },
  created() {
    this.options = JSON.parse(this.$ls.get('current_page'))
  },
  mounted() {
    // !this.options.id && (this.options.id = this.$uuidv4())
    // console.log(this.options)
    this.width = document.querySelector('body').clientWidth
    this.height = document.querySelector('body').clientHeight
  },
  methods: {
    position(item) {
      const W = this.options.width
      const H = this.options.height
      const w = item.position.w
      const h = item.position.h
      const x = item.position.x
      const y = item.position.y
      const wp = (w / W) * 100 + '%'
      const hp = (h / H) * 100 + '%'
      const xp = (x / W) * 100 + '%'
      const yp = (y / H) * 100 + '%'
      //   console.log(window.screen.height, this.height)
      if (this.options.generateLayout == 'fixwh') {
        return { width: w + 'px', height: h + 'px', left: x + 'px', top: y + 'px' }
      }
      if (this.options.generateLayout == 'coverwh') {
        return {
          width: wp,
          height: hp,
          left: xp,
          top: yp,
        }
      }
      //暂时无法获取，dom的缩小比例，只缩放外框，里边做百分比缩放和定位
      if (this.options.generateLayout == 'scalewh') {
        return {
          width: wp,
          height: hp,
          left: xp,
          top: yp,
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.free-layout-common-box {
  position: relative;
  width: 100%;
  height: 100%;
  //   background: #000d4a url(../../../static/temp_common_bg.jpg) center top;
  background-size: cover;
  color: rgb(212, 208, 208);
  & > div {
    position: absolute;
  }
}
</style>
