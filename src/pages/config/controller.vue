<template>
  <div class="config-edit">
    <div class="config-header">
      <div class="header-buttons">
        <el-tooltip class="item" effect="dark" content="布局菜单" placement="bottom-start" :open-delay="200">
          <el-button :class="'is-focus'" size="mini" type="primary" icon="el-icon-menu"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="图表菜单" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-data"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="右侧栏" placement="bottom-start" :open-delay="200">
          <el-button :class="'is-focus'" size="mini" type="primary" icon="el-icon-notebook-2"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="工具栏" placement="bottom-start" :open-delay="200">
          <el-button :class="'is-focus'" size="mini" type="primary" icon="el-icon-s-cooperation"></el-button>
        </el-tooltip>
      </div>
      <div class="header-infor">
        <h3><i class="icon-title el-icon-s-platform"></i>XX——<i>测试</i></h3>
      </div>
      <div class="header-global-action">
        <el-tooltip class="item" effect="dark" content="快照" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-camera-solid"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="帮助" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-question"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="发布" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-promotion"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="预览" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-platform"></el-button>
        </el-tooltip>
      </div>
    </div>
    <div class="config-main">
      <div class="main-panel-layout">
        <div class="layout-nav">
          <i class="label">布局列表</i>
          <span class="icons">
            <i class="el-icon-menu"></i>
            <i class="el-icon-tickets"></i>
            <i class="el-icon-arrow-left"></i>
          </span>
        </div>
        <div class="beauty-scroll">
          <el-scrollbar>
            <ul></ul>
          </el-scrollbar>
        </div>
      </div>
      <div class="main-panel-chart">
        <div class="layout-nav">
          <i class="label">图表组件</i>
          <span class="icons">
            <i class="el-icon-arrow-left"></i>
          </span>
        </div>
        <el-tabs tab-position="left" class="chart-left-nav">
          <el-tab-pane v-for="item in leftChartList" :key="item.lebal">
            <span slot="label">
              <el-tooltip class="item" effect="dark" :content="item.label" placement="left-start">
                <i :class="item.icon"></i>
              </el-tooltip>
            </span>
            <ul class="chart-list">
              <li v-for="ele in item.child" :key="ele.label" class="chart-list-item">
                <div class="text">{{ ele.label }}</div>
                <div class="img" :style="{ backgroundImage: 'url(' + ele.bgimg + ')' }"></div>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="main-panel-edit-container"></div>
      <div class="config-right-manager">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-pie-chart"></i>图表样式 </span>
            我的行程
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-coin"></i>数据来源 </span>
            我的行程2
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-s-tools"></i>交互事件 </span>
            我的行程3
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { chartList } from './page.static.data'
export default {
  components: {},
  data() {
    return {
      leftChartList: chartList,
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
.config-edit {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #a1aeb3;
  .config-header {
    position: relative;
    height: 40px;
    padding-right: 8px;
    display: flex;
    z-index: 100;
    align-items: center;
    user-select: none;

    background: $config_backgroud;
    border-bottom: 1px solid #000;
    .header-buttons {
      margin: 0 15px;
      z-index: 1;
    }
    .header-infor {
      text-align: center;
      flex: 1;
      font-size: 16px;
      .icon-title {
        color: #fff;
        padding: 0px 3px;
      }
    }
    .header-global-action {
      margin: 0 15px;
      z-index: 1;
    }
  }
  .config-main {
    flex: 1;
    z-index: 1;
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    overflow: hidden;
    background: $config_backgroud;
    .layout-nav {
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      background: #2e3539;
      font-size: 13px;
      .label {
        padding: 0px 10px;
      }
      .icons {
        padding-right: 5px;
        color: #fff;
        i {
          font-size: 16px;
          padding: 0px 3px;
          cursor: pointer;
          &:hover {
            color: #409eff;
          }
        }
      }
    }
    .main-panel-layout {
      background-color: #1d1e26;
      box-shadow: 1px 0 #000;
      border-right: 1px solid #000;
      height: 100%;
      width: 220px;
    }
    .main-panel-chart {
      background-color: #15161c;
      height: 100%;
      width: 220px;
      z-index: 4;
      transition: width 0.3s ease;
      overflow: hidden;
      box-shadow: 1px 0 #000;
      .chart-left-nav {
        height: 100%;
      }
      .chart-list {
        display: flex;
        flex-wrap: wrap;
        .chart-list-item {
          height: 80px;
          width: 80px;
          margin-top: 5px;
          margin-right: 5px;
          cursor: pointer;
        }
        .text {
          height: 22px;
          line-height: 22px;
          color: #fff;
          text-align: center;
          background-color: #202127;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .img {
          height: 55px;
          width: 80px;
          background-clip: content-box;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          background-color: #181a1d;
          position: relative;
          text-align: center;
          box-sizing: content-box;
          transition: border-color 0.2s;
        }
      }
    }
    .main-panel-edit-container {
      flex: 1;
      height: 100%;
      background: #1a1c20;
    }
    .config-right-manager {
      width: 332px;
      height: 100%;
      z-index: 90;
      background: #1e1f28;
      position: relative;
      transition: width 0.25s ease-in-out;
      overflow: hidden;
      box-shadow: -1px 0 #000;
    }
  }
}
</style>
<style lang="scss">
// 修改button样式
.el-button--mini {
  font-size: 14px;
  padding: 3px 15px;
  border-radius: 0px;
  color: #fff;
  background-color: $config_button_backgroud;
  border-color: $config_button_backgroud;
  //   box-shadow: inset 0 0 0 1px rgba(255, 235, 235, 0.1), 0 0 0 1px #181818;
  transition: 0.3s;
}
.el-button--primary:focus,
.el-button--primary:hover {
  color: #fff;
  background-color: #232731;
  border-color: #232731;
}
.is-focus.el-button--mini {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
// 修改tooltips样式
.el-tooltip__popper.is-dark {
  background-color: #409eff;
}
.el-tooltip__popper.is-dark[x-placement^='bottom'] .popper__arrow {
  border-bottom-color: #409eff;
}
.el-tooltip__popper.is-dark[x-placement^='bottom'] .popper__arrow::after {
  border-bottom-color: #409eff;
}
.el-tooltip__popper.is-dark[x-placement^='left'] .popper__arrow {
  border-left-color: #409eff;
}
.el-tooltip__popper.is-dark[x-placement^='left'] .popper__arrow::after {
  border-left-color: #409eff;
}
.el-tooltip__popper {
  border-radius: 0px;
  padding: 5px 10px;
}
.el-button + .el-button {
  margin-left: 0px;
}
//修改tabs样式
.el-tabs--border-card {
  background: #1e1f28;
  border-color: #1e1f28;
}
.el-tabs--border-card > .el-tabs__header {
  background-color: #13161a;
  border-bottom: 1px solid #1e1f28;
  margin: 0;
}
.el-tabs__item {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.808);
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  color: #409eff;
  background-color: #1e1f28;
  border-right-color: #13161a;
  border-left-color: #13161a;
  border-top-color: #409eff;
  border-top-width: 2px;
}
.tablist [class*=' el-icon-'],
[class^='el-icon-'] {
  margin: 0px 3px;
}

.chart-left-nav {
  .el-tabs__nav-wrap::after {
    background-color: #1a1b24;
  }
  .el-tabs__nav-scroll {
    background-color: #1a1b24;
  }
  .el-tabs__item {
    height: 45px;
    line-height: 45px;
    padding: 2px 10px 16px 10px;
    font-size: 18px;
  }
}
</style>
