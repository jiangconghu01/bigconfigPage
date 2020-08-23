<template>
  <div class="chart-settings-box">
    <el-collapse :value="['box', 'grid', 'title']">
      <el-collapse-item title="布局盒子设置" name="box">
        <ul class="setting-page-param">
          <li class="setting-item normal" :class="[chartSettinOptins.pageType == 'free' ? '' : 'unusebale']">
            <span class="text">图表大小</span>
            <span class="form-item link-w-h">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <i class="el-icon-connection"></i>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">宽度</i>
              <i class="layout-text">高度</i>
            </span>
          </li>
          <li class="setting-item normal" :class="[chartSettinOptins.pageType == 'free' ? '' : 'unusebale']">
            <span class="text">图表位置</span>
            <span class="form-item">
              <el-input-number v-model="chart.x" size="mini"></el-input-number>
              <el-input-number v-model="chart.y" size="mini"></el-input-number>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">X</i>
              <i class="layout-text">Y</i>
            </span>
          </li>
          <li class="setting-item normal slider-number">
            <span class="text">背景颜色</span>
            <span class="form-item">
              <el-input v-model="chart.bgcolor" size="mini" placeholder="请输入内容" class="input-with-color">
                <p slot="prepend" class="color-view" :style="{ backgroundColor: chart.bgcolor }"></p>
                <el-color-picker slot="append" v-model="chart.bgcolor" show-alpha size="mini"></el-color-picker>
              </el-input>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">透明度</span>
            <span class="form-item slider">
              <el-slider v-model="chart.opacity" :min="0" :max="1" :step="0.01" class="chartset-silder"></el-slider>
              <el-input-number v-model="chart.opacity" size="mini" :precision="2" :step="0.01" :max="1"></el-input-number>
            </span>
          </li>
          <li class="setting-item normal select-w100">
            <span class="text">边框</span>
            <span class="form-item">
              <el-select v-model="chart.frame" placeholder="请选择" size="mini">
                <el-option label="无边框" value=""> </el-option>
                <el-option label="边框模板一" value="bg_temp_1"> </el-option>
              </el-select>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">图表颜色组</span>
            <span class="form-item">
              <ul class="color-series">
                <li v-for="(item, index) in chart.color" :key="item" class="color-item" :style="{ backgroundColor: item }">
                  <i class="el-icon-close" @click="deleteColorItem(index)"></i>
                </li>
                <li class="add">
                  <i class="el-icon-plus"></i><el-color-picker :value="'#409eff'" show-alpha size="mini" @change="addColorItem"></el-color-picker>
                </li>
              </ul>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="图表盒子（grid）" name="grid">
        <ul class="setting-page-param">
          <li class="setting-item normal">
            <span class="text">图表边距</span>
            <span class="form-item item-normal-input">
              <el-input v-model="chart.grid.left" placeholder="数字或百分比"></el-input>
              <el-input v-model="chart.grid.right" placeholder="数字或百分比"></el-input>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">左</i>
              <i class="layout-text">右</i>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text"></span>
            <span class="form-item item-normal-input">
              <el-input v-model="chart.grid.top" placeholder="数字或百分比"></el-input>
              <el-input v-model="chart.grid.bottom" placeholder="数字或百分比"></el-input>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">上</i>
              <i class="layout-text">下</i>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="图表字体样式（textStyle）" name="textStyle">
        <ul class="setting-page-param">
          <li class="setting-item normal slider-number">
            <span class="text">字体颜色</span>
            <span class="form-item">
              <el-input v-model="chart.textStyle.color" size="mini" placeholder="请输入内容" class="input-with-color">
                <p slot="prepend" class="color-view" :style="{ backgroundColor: chart.textStyle.color }"></p>
                <el-color-picker slot="append" v-model="chart.textStyle.color" show-alpha size="mini"></el-color-picker>
              </el-input>
            </span>
          </li>
          <li class="setting-item normal slider-number">
            <span class="text">字体</span>
            <span class="form-item">
              <el-select v-model="chart.textStyle.fontSize" placeholder="请选择" size="mini">
                <el-option v-for="item in fontSize" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select v-model="chart.textStyle.fontWeight" placeholder="请选择" size="mini">
                <el-option v-for="item in fontWeight" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">大小</i>
              <i class="layout-text">粗细</i>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="图表标题（title）" name="title">
        <ul class="setting-page-param">
          <li class="setting-item normal">
            <span class="text">标题文本</span>
            <span class="form-item item-normal-input w100">
              <el-input v-model="chart.title.text" placeholder="请输入内容"></el-input>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">是否显示</span>
            <span class="form-item">
              <el-select v-model="chart.title.show" placeholder="请选择" size="mini">
                <el-option key="1" label="是" :value="true"> </el-option>
                <el-option key="0" label="否" :value="false"> </el-option>
              </el-select>
            </span>
          </li>
          <li class="setting-item normal slider-number">
            <span class="text">字体颜色</span>
            <span class="form-item">
              <el-input v-model="chart.title.textStyle.color" size="mini" placeholder="请输入内容" class="input-with-color">
                <p slot="prepend" class="color-view" :style="{ backgroundColor: chart.title.textStyle.color }"></p>
                <el-color-picker slot="append" v-model="chart.title.textStyle.color" show-alpha size="mini"></el-color-picker>
              </el-input>
            </span>
          </li>
          <li class="setting-item normal slider-number">
            <span class="text">字体</span>
            <span class="form-item">
              <el-select v-model="chart.title.textStyle.fontSize" placeholder="请选择" size="mini">
                <el-option v-for="item in fontSize" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
              <el-select v-model="chart.title.textStyle.fontWeight" placeholder="请选择" size="mini">
                <el-option v-for="item in fontWeight" :key="item.value" :label="item.label" :value="item.value"> </el-option>
              </el-select>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">大小</i>
              <i class="layout-text">粗细</i>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="图例（legend）">
        <ul class="setting-page-param"></ul>
      </el-collapse-item>
      <el-collapse-item title="xy坐标轴（axis）">
        <ul class="setting-page-param"></ul>
      </el-collapse-item>
      <el-collapse-item title="坐标指示器（axisPointer）">
        <ul class="setting-page-param"></ul>
      </el-collapse-item>
      <el-collapse-item title="提示框（tooltip）">
        <ul class="setting-page-param"></ul>
      </el-collapse-item>
      <el-collapse-item title="系列列表（series）">
        <ul class="setting-page-param"></ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    chartSettinOptins: {
      type: Object,
      required: false,
      default: () => {},
    },
    currentChartItem: {
      type: Object,
      required: false,
      default: () => {},
    },
  },
  data() {
    return {
      chart: {
        w: 88,
        h: 99,
        x: 99,
        y: 99,
        bgcolor: '',
        opacity: 1,
        frame: '',
        color: [],
        grid: {
          left: '10%',
          right: '10%',
          top: '60',
          bottom: '60',
        },
        textStyle: {
          color: '#fff',
          fontSize: 'normal',
          fontWeight: 'normal',
        },
        title: {
          show: false,
          text: '默认文字',
          textStyle: {
            color: '#333',
            fontSize: 'normal',
            fontWeight: 'normal',
          },
        },
        xAxis: [],
        yAxis: [],
        series: [],
        fontVal: '',
        titleFontVal: '',
      },
    }
  },
  computed: {
    fontSize() {
      return [
        {
          value: 'normal',
          label: 'normal',
        },
        ...Array.from({ length: 20 }, (v, k) => ({ value: k + 12, label: k + 12 })),
      ]
    },
    fontWeight() {
      return [
        {
          value: 'normal',
          label: 'normal',
        },
        {
          value: 'bold',
          label: 'bold',
        },
        ...Array.from({ length: 8 }, (v, k) => ({ value: k * 100 + 100, label: k * 100 + 100 })),
      ]
    },
  },
  watch: {
    currentChartItem: {
      handler(nv, ov) {
        this.setItemOptions()
      },
      deep: true,
      immediate: true,
    },
    chart: {
      handler(nv, ov) {
        this.getItemOptions()
      },
      deep: true,
    },
  },
  created() {},
  mounted() {},
  methods: {
    setItemOptions() {
      if (!this.currentChartItem) {
        return
      }

      const chartoption = this.currentChartItem.chartoption
      const position = this.currentChartItem.position
      const bgcolor = this.currentChartItem.background
      const opacity = this.currentChartItem.opacity
      const frame = this.currentChartItem.frame
      //基本盒子初始化
      this.chart.x = position.x
      this.chart.y = position.y
      this.chart.w = position.w
      this.chart.h = position.h
      this.chart.bgcolor = bgcolor
      this.chart.opacity = opacity
      this.chart.frame = frame
      //同步系列颜色数组
      chartoption.color && (this.chart.color = chartoption.color)
      //grid同步
      chartoption.grid && (this.chart.grid = chartoption.grid)
      //总体textStyle同步
      if (chartoption.textStyle) {
        const s_color = chartoption.textStyle.color
        s_color !== undefined && (this.chart.textStyle.color = s_color)
        const s_fsize = chartoption.textStyle.fontSize
        s_fsize !== undefined && (this.chart.textStyle.fontSize = s_fsize)
        const s_fwight = chartoption.textStyle.fontWeight
        s_fwight !== undefined && (this.chart.textStyle.fontWeight = s_fwight)
      }
      //title同步
      if (chartoption.title) {
        chartoption.title.show !== undefined && (this.chart.title.show = chartoption.title.show)
        chartoption.title.text !== undefined && (this.chart.title.text = chartoption.title.text)
        if (chartoption.title.textStyle) {
          const t_color = chartoption.title.textStyle.color
          t_color !== undefined && (this.chart.title.textStyle.color = t_color)
          const t_fsize = chartoption.title.textStyle.fontSize
          t_fsize !== undefined && (this.chart.title.textStyle.fontSize = t_fsize)
          const t_fwight = chartoption.title.textStyle.fontWeight
          t_fwight !== undefined && (this.chart.title.textStyle.fontWeight = t_fwight)
        }
      }
      //asyncOptions()
    },
    getItemOptions() {
      if (!this.currentChartItem) {
        return
      }
      const origindata = this.currentChartItem
      const chart = this.chart

      //基本盒子初始化
      origindata.position.x = chart.x
      origindata.position.y = chart.y
      origindata.position.w = chart.w
      origindata.position.h = chart.h
      origindata.background = chart.bgcolor
      origindata.opacity = chart.opacity
      origindata.frame = chart.frame
      //grid同步
      !origindata.chartoption.color && (origindata.chartoption.color = [])
      origindata.chartoption.color = chart.color
      //grid同步
      !origindata.chartoption.grid && (origindata.chartoption.grid = {})
      origindata.chartoption.grid = chart.grid
      //总体textStyle同步
      if (!origindata.chartoption.textStyle) {
        origindata.chartoption.textStyle = {}
      }
      const s_color = chart.textStyle.color
      origindata.chartoption.textStyle.color = s_color
      const s_fsize = chart.textStyle.fontSize
      origindata.chartoption.textStyle.fontSize = s_fsize
      const s_fwight = chart.textStyle.fontWeight
      origindata.chartoption.textStyle.fontWeight = s_fwight
      //title同步
      if (!origindata.chartoption.title) {
        origindata.chartoption.title = {}
        origindata.chartoption.title.textStyle = {}
      }
      origindata.chartoption.title.show = chart.title.show
      origindata.chartoption.title.text = chart.title.text
      const t_color = chart.title.textStyle.color
      origindata.chartoption.title.textStyle.color = t_color
      const t_fsize = chart.title.textStyle.fontSize
      origindata.chartoption.title.textStyle.fontSize = t_fsize
      const t_fwight = chart.title.textStyle.fontWeight
      origindata.chartoption.title.textStyle.fontWeight = t_fwight
    },
    deleteColorItem(index) {
      this.chart.color.splice(index, 1)
    },
    addColorItem(text) {
      this.chart.color.push('' + text)
    },
  },
}
</script>
<style lang="scss" scoped>
.chart-settings-box {
  margin-bottom: 100px;
  /deep/ .el-collapse-item__header {
    padding: 0 15px;
  }
  .setting-page-param {
    padding: 15px;
    padding-right: 0;
    .setting-item {
      display: flex;
      position: relative;
      &.unusebale::after {
        content: '';
        display: inline-block;
        position: absolute;
        left: 0;
        top: 0;
        background-image: linear-gradient(-90deg, rgba(0, 161, 255, 0.39) 0, rgba(0, 137, 255, 0.19) 100%);
        height: 24px;
        width: 100%;
        z-index: 100;
      }
      &.normal {
        margin-top: 15px;
      }
      &.slider-number {
        padding-right: 32px;
      }
      .text {
        width: 100px;
        height: 22px;
        line-height: 22px;
      }
      .form-item {
        flex: 1;
        .layout-text {
          width: 98px;
          height: 22px;
          line-height: 22px;
          display: inline-block;
          text-align: center;
        }
        &.slider {
          display: flex;
          align-items: center;
          /deep/ .el-slider {
            width: 90px;
            margin-right: 10px;
          }
        }
        .input-with-color {
          .color-view {
            height: 20px;
            width: 20px;
            border: 1px solid #dcdfe6;
          }
          /deep/ .el-input-group__prepend {
            padding: 0;
          }
        }
        .color-series {
          display: flex;
          flex-wrap: wrap;
          .color-item {
            width: 40px;
            height: 18px;
            margin: 5px;
            background-color: aqua;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            border-radius: 1px;
            cursor: pointer;
            &:hover i {
              display: inline;
            }
            i {
              color: #fff;
              display: none;
              transition: all 0.3s;
              &:hover {
                background: rgba(0, 0, 0, 0.15);
                border-radius: 10%;
              }
            }
          }
          .add {
            width: 40px;
            height: 18px;
            margin: 5px;
            background-color: rgba(49, 54, 66, 0.8);
            border-color: rgba(49, 54, 66, 0.8);
            border-radius: 1px;
            cursor: pointer;
            position: relative;
            &:hover {
              background-color: rgba(57, 62, 73, 0.993);
            }
            i {
              color: #fff;
              position: absolute;
              left: 10px;
              top: 3px;
            }
            /deep/ .el-color-picker--mini .el-color-picker__trigger {
              width: 40px;
              height: 18px;
              opacity: 0;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.el-collapse {
  border: none;
  color: #a1aeb3;
}
.el-collapse-item__header {
  background-color: #1e1f28;
  border-top: 2px solid rgba(0, 0, 0, 0.12);
  border-bottom: none;
  color: #c5ced1;
  font-size: 12px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.el-collapse-item__wrap {
  background-color: #1e1f28;
  border-bottom: none;
  color: #a1aeb3;
}
.el-collapse-item__content {
  color: #a1aeb3;
}
.setting-page-param {
  .item-normal-input {
    .el-input {
      width: 98px;

      .el-input__inner {
        height: 22px;
        border-radius: 0;
      }
    }
    &.w100 {
      .el-input {
        width: 200px;
      }
    }
  }
  .el-select {
    width: 98px;
    .el-input__suffix {
      display: none;
    }
    .el-input--suffix .el-input__inner {
      padding-right: 5px;
    }
  }
  .select-w100 {
    .el-select {
      width: 200px;
    }
  }
}
.el-input__inner {
  &::placeholder {
    font-size: 12px;
    color: #cad0df;
  }

  &::-webkit-input-placeholder {
    /* WebKit browsers 适配谷歌 */
    font-size: 12px;
    color: #cad0df;
  }

  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 适配火狐 */
    font-size: 12px;
    color: #cad0df;
  }

  &::-moz-placeholder {
    /* Mozilla Firefox 19+ 适配火狐 */
    font-size: 12px;
    color: #cad0df;
  }

  &:-ms-input-placeholder {
    /* Internet Explorer 10+  适配ie*/
    font-size: 12px;
    color: #cad0df;
  }
}
</style>
