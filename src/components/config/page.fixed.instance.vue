<template>
  <div class="target-context" :style="unitStyle" :class="config.frame">
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
</template>
<script>
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
      instance: null,
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
      handler: function (nv, ov) {
        nv.type.indexOf('chart') > -1 && this.initChart()
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {},
  methods: {
    casecaderHandleChange(d) {
      console.log(d)
    },
    setTime() {},
    initChart() {
      if (!(this.config.domindex === undefined || this.config.domindex === '')) {
        this.$nextTick(() => {
          this.instance = this.$echarts.init(document.getElementById(this.chartid))
          this.instance.clear()
          this.instance.resize()
          this.instance.setOption(this.config.chartoption)
        })
      }
    },
    resizeChartBox() {
      this.$nextTick(() => {
        this.instance && this.instance.resize()
      })
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
