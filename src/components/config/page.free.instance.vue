<template>
  <vue-draggable-resizable
    :parent="true"
    :scale="0.4"
    :scale-ratio="0.4"
    :handle-info="{ size: 10, offset: -5, switch: true }"
    :snap="true"
    :snap-tolerance="10"
    :x="positon.x"
    :y="positon.y"
    :w="positon.w"
    :h="positon.h"
    @resizing="onResize"
    @dragging="onDrag"
    @refLineParams="getRefLineParams"
  >
    <div class="layout-box-item target-context">
      <el-button v-if="config.type == 'button'" size="mini">按钮</el-button>
      <el-select v-else-if="config.type == 'select'" v-model="value1" placeholder="请选择">
        <el-option v-for="item in selectoption" :key="item.value" :label="item.label" :value="item.value"> </el-option>
      </el-select>
      <el-date-picker
        v-else-if="config.type == 'datepicker'"
        v-model="dateVal"
        format="yyyy年MM月"
        value-format="yyyy-MM"
        type="month"
        placeholder="选择月"
        @change="setTime"
      >
      </el-date-picker>
      <el-cascader
        v-else-if="config.type == 'cascader'"
        v-model="value2"
        :options="cascaderoption"
        :props="{ expandTrigger: 'hover' }"
        @change="casecaderHandleChange"
      ></el-cascader>
      <div v-else :id="chartid" class="chart-init-box"></div>
    </div>
  </vue-draggable-resizable>
</template>
<script>
// import { chartTypeMap } from '@/pages/config/page.chart.type.map'
export default {
  props: {
    config: {
      type: Object,
      default: () => {},
      required: false,
    },
  },
  data() {
    return {
      dateVal: '',
      value1: '',
      value2: [],
      selectoption: [
        {
          value: 'xxx',
          label: '请配置数据',
        },
      ],
      cascaderoption: [
        {
          value: 'xxx',
          label: '请配置数据',
          //   children: [],
        },
      ],
      chartBox: null,
      resizeTimer: null,
      positon: {
        x: 760,
        y: 410,
        w: 400,
        h: 260,
      },
    }
  },
  computed: {
    chartid() {
      return this.config.domindex === undefined || this.config.domindex === '' ? 'chart-dom-empty' : 'chart-dom-' + this.config.domindex
    },
  },
  watch: {
    config: {
      handler: function (nv, ov) {
        nv.type.indexOf('chart') > -1 && this.initChart()
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    console.log(this.config)
  },
  methods: {
    casecaderHandleChange(d) {
      console.log(d)
    },
    setTime() {},
    initChart() {
      if (!(this.config.domindex === undefined || this.config.domindex === '')) {
        this.$nextTick(() => {
          this.chartBox = this.$echarts.init(document.getElementById(this.chartid))
          this.chartBox.clear()
          this.chartBox.setOption(this.config.chartoption)
        })
      }
    },
    resizeChartBox() {
      this.$nextTick(() => {
        this.chartBox && this.chartBox.resize()
      })
    },
    onResize(x, y, w, h) {
      this.positon = { x, y, w, h }
      this.resizeTimer && clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.resizeChartBox()
      }, 300)
    },
    onDrag: function (x, y) {
      this.positon.x = x
      this.positon.y = y
    },
    getRefLineParams(params) {
      this.$emit('handleLine', params)
    },
  },
}
</script>
<style lang="scss" scoped>
.target-context {
  width: 100%;
  height: 100%;
  .chart-init-box {
    width: 100%;
    height: 100%;
  }
}
</style>
