<template>
  <div class="chart-settings-box">
    <el-collapse>
      <el-collapse-item title="布局盒子设置" name="1">
        <ul class="setting-page-param">
          <li class="setting-item normal">
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
          <li class="setting-item normal">
            <span class="text">图表位置</span>
            <span class="form-item">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">X</i>
              <i class="layout-text">Y</i>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">透明度</span>
            <span class="form-item slider">
              <el-slider v-model="chart.opacity" :min="0" :max="1" :step="0.01" class="chartset-silder"></el-slider>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="布局盒子设置" name="2">
        <ul class="setting-page-param">
          <li class="setting-item normal">
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
          <li class="setting-item normal">
            <span class="text">图表位置</span>
            <span class="form-item">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">X</i>
              <i class="layout-text">Y</i>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">透明度</span>
            <span class="form-item">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
        </ul>
      </el-collapse-item>
      <el-collapse-item title="布局盒子设置" name="3">
        <ul class="setting-page-param">
          <li class="setting-item normal">
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
          <li class="setting-item normal">
            <span class="text">图表位置</span>
            <span class="form-item">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
          <li class="setting-item">
            <span class="text"></span>
            <span class="form-item">
              <i class="layout-text">X</i>
              <i class="layout-text">Y</i>
            </span>
          </li>
          <li class="setting-item normal">
            <span class="text">透明度</span>
            <span class="form-item">
              <el-input-number v-model="chart.w" size="mini"></el-input-number>
              <el-input-number v-model="chart.h" size="mini"></el-input-number>
            </span>
          </li>
        </ul>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      chart: {
        w: 99,
        h: 99,
        x: 99,
        y: 99,
        opacity: 1,
      },
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.chart-settings-box {
  width: 100%;
  .setting-page-param {
    .setting-item {
      display: flex;
      &.normal {
        margin-top: 15px;
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
      }
    }
  }
}
</style>
<style>
.el-collapse {
  border: none;
  color: #a1aeb3;
}
.el-collapse-item__header {
  background-color: #1e1f28;
  border-top: 2px solid rgba(0, 0, 0, 0.12);
  border-bottom: none;
  color: #a1aeb3;
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
</style>
