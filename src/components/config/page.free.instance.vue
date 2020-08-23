<template>
  <vue-draggable-resizable
    :parent="true"
    :scale="0.4"
    :scale-ratio="0.4"
    :handle-info="{ size: 10, offset: -5, switch: true }"
    :snap="true"
    :snap-tolerance="10"
    :x="position.x"
    :y="position.y"
    :w="position.w"
    :h="position.h"
    :style="unitStyle"
    :class="config.frame"
    @resizing="onResize"
    @dragging="onDrag"
    @refLineParams="getRefLineParams"
    @activated="onActivated"
    @deactivated="onDeactivated"
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
      initTimer: null,
      position: {
        x: 0,
        y: 0,
        w: 400,
        h: 260,
      },
    }
  },
  computed: {
    chartid() {
      return this.config.domindex === undefined || this.config.domindex === '' ? 'chart-dom-empty' : 'chart-dom-' + this.config.domindex
    },
    unitStyle() {
      return { backgroundColor: this.config.background, opacity: this.config.opacity }
    },
  },
  watch: {
    config: {
      handler(nv, ov) {
        this.position = nv.position
        if (nv.type.indexOf('chart') > -1) {
          this.initTimer && clearTimeout(this.initTimer)
          this.initTimer = setTimeout(() => {
            this.initChart()
          }, 500)
        }
      },
      deep: true,
      immediate: true,
    },
    position() {
      //   console.log('33333333333')
      //   this.$emit('handlePosition')
    },
  },
  mounted() {
    console.log(this.config)
    this.position = this.config.position
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
          this.chartBox.resize()
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
      //   this.position = { x, y, w, h }
      this.config.position = { x, y, w, h }
      this.resizeTimer && clearTimeout(this.resizeTimer)
      this.resizeTimer = setTimeout(() => {
        this.resizeChartBox()
      }, 300)
    },
    onDrag: function (x, y) {
      //   this.position.x = x
      //   this.position.y = y
      this.config.position.x = x
      this.config.position.y = y
    },
    getRefLineParams(params) {
      this.$emit('handleLine', params)
    },
    onActivated() {
      this.$emit('getCurrentActivedItem', this.config.domindex)
    },
    onDeactivated() {
      this.$emit('getCurrentActivedItem', 'deActived')
    },
  },
}
</script>
<style lang="scss" scoped>
.target-context {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .chart-init-box {
    width: 100%;
    height: 100%;
  }
}
</style>
