<template>
  <div class="free-layout-common-box">
    <page-instance v-for="(item, index) in eleArray" :key="index + 'resize'" :config="item" @handleLine="asyncLine"></page-instance>
    <!--辅助线-->
    <span
      v-for="(item, index) in vLine"
      v-show="item.display"
      :key="index + 'v'"
      class="ref-line v-line"
      :style="{ left: item.position, top: item.origin, height: item.lineLength }"
    />
    <span
      v-for="(item, index) in hLine"
      v-show="item.display"
      :key="index + 'h'"
      class="ref-line h-line"
      :style="{ top: item.position, left: item.origin, width: item.lineLength }"
    />
    <!--辅助线END-->
  </div>
</template>
<script>
import pageInstance from '@/components/config/page.free.instance.vue'
export default {
  name: 'FreeCommon',
  components: {
    pageInstance,
  },
  props: {
    options: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
  data() {
    return {
      vLine: [],
      hLine: [],
    }
  },
  computed: {
    eleArray() {
      return this.options.children.map((ele, index) => {
        const t = ele
        t['domindex'] = index
        return t
      })
    },
  },
  created() {},
  mounted() {},
  methods: {
    asyncLine(param) {
      const { vLine, hLine } = param
      this.vLine = vLine
      this.hLine = hLine
      console.log(vLine, hLine)
    },
  },
}
</script>
<style lang="scss" scoped>
.free-layout-common-box {
  width: 100%;
  height: 100%;
}
</style>
