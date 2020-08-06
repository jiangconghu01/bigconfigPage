<template>
  <div class="config-edit">
    <!-- 头部导航栏--start-->
    <div class="config-header">
      <div class="header-buttons">
        <el-tooltip class="item" effect="dark" content="布局菜单" placement="bottom-start" :open-delay="200">
          <el-button
            :class="[isShowMuLayout ? 'is-focus' : '']"
            size="mini"
            type="primary"
            icon="el-icon-menu"
            @click="haddleIsShowMuLayout"
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="图表菜单" placement="bottom-start" :open-delay="200">
          <el-button
            :class="[isShowMuChart ? 'is-focus' : '']"
            size="mini"
            type="primary"
            icon="el-icon-s-data"
            @click="haddleIsShowMuChart"
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="右侧栏" placement="bottom-start" :open-delay="200">
          <el-button
            :class="[isShowMuRightSeting ? 'is-focus' : '']"
            size="mini"
            type="primary"
            icon="el-icon-notebook-2"
            @click="haddleIsShowMuRightSeting"
          ></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="工具栏" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-cooperation"></el-button>
        </el-tooltip>
      </div>
      <div class="header-infor">
        <h3><i class="icon-title el-icon-s-platform"></i>XX——<i>测试</i></h3>
      </div>
      <div class="header-global-action">
        <el-tooltip class="item" effect="dark" content="快照" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-camera-solid" @click="pagePicTest"></el-button>
        </el-tooltip>
        <!-- <el-tooltip class="item" effect="dark" content="帮助" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-question"></el-button>
        </el-tooltip> -->
        <el-tooltip class="item" effect="dark" content="暂存" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-document-add"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="发布" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-promotion"></el-button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="预览" placement="bottom-start" :open-delay="200">
          <el-button size="mini" type="primary" icon="el-icon-s-platform" @click="previewPage"></el-button>
        </el-tooltip>
      </div>
    </div>
    <!-- 头部导航栏结束--end -->
    <!-- 左侧栏图表组件选择--start -->
    <div id="config-main" class="config-main">
      <div :class="[isShowMuLayout ? '' : 'hide']" class="main-panel-layout">
        <div class="layout-nav">
          <i class="label">布局列表</i>
          <span class="icons">
            <i class="el-icon-menu"></i>
            <i class="el-icon-tickets"></i>
            <i class="el-icon-arrow-left" @click="isShowMuLayout = !isShowMuLayout"></i>
          </span>
        </div>
        <div class="beauty-scroll">
          <el-scrollbar>
            <ul class="layout-list m-no-select">
              <li v-for="item in leftLayoutList" :key="item.tempName" class="layout-list-item" @click="selectLayoutMethod(item.tempName)">
                <div class="text">{{ item.name }}</div>
                <div class="img" :style="{ backgroundImage: 'url(' + item.bgimg + ')' }"></div>
              </li>
              <!-- <li class="layout-list-item" @click="selectLayoutMethod()">
                <div class="text">自由布局</div>
                <div class="img" :style="{ backgroundImage: 'url(' + require('../../static/free.png') + ')' }"></div>
              </li> -->
            </ul>
          </el-scrollbar>
        </div>
      </div>
      <!-- 左侧栏图表组件选择结束 --end -->
      <!-- 左侧栏图表组件选择--start -->
      <div class="main-panel-chart" :class="[isShowMuChart ? '' : 'hide']">
        <div class="layout-nav">
          <i class="label">图表组件</i>
          <span class="icons">
            <i class="el-icon-arrow-left" @click="isShowMuChart = !isShowMuChart"></i>
          </span>
        </div>
        <el-tabs tab-position="left" class="chart-left-nav">
          <el-tab-pane v-for="item in leftChartList" :key="item.lebal">
            <span slot="label">
              <el-tooltip class="item" effect="dark" :content="item.label" placement="left-start">
                <i :class="item.icon"></i>
              </el-tooltip>
            </span>
            <div v-if="item.child.length > 0" class="beauty-scroll">
              <el-scrollbar>
                <ul :id="item.id" class="chart-list m-no-select">
                  <li
                    v-for="ele in item.child"
                    :key="ele.label + Math.random()"
                    :type="ele.type ? ele.type : ''"
                    :class="['chart-list-item', ele.useable ? 'useable' : 'unusebale']"
                  >
                    <div class="text">{{ ele.label }}</div>
                    <div class="img" :style="{ backgroundImage: 'url(' + ele.bgimg + ')' }"></div>
                  </li>
                </ul>
              </el-scrollbar>
            </div>
            <div v-if="item.child.length == 0" class="empty-text">暂未添加可用组件</div>
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 左侧栏图表组件选择--end -->

      <!-- 页面主题编辑区--start -->
      <div class="main-panel-edit-container" @mousemove="movingEditContext">
        <div class="layout beauty-scroll">
          <el-scrollbar>
            <div class="scrollbar-layout">
              <!-- <div v-if="configType === 'free'" class="main-panel-edit-container-context">
                <vue-draggable-resizable v-for="item in Array.from({ length: 2 })" :key="item" :parent="true" :scale="0.4">
                  <p class="layout-box-item"></p>
                </vue-draggable-resizable>
                <vue-draggable-resizable :parent="true" :scale="0.4">
                  <p id="layout-box-2" class="layout-box-item"></p>
                </vue-draggable-resizable>
              </div> -->
              <div class="main-panel-edit-container-context">
                <component :is="fixTemplate" :options="pageConfig"></component>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
      <!-- 页面主题编辑区--end -->

      <!-- 右侧设置图表样式栏--start -->
      <div v-show="isShowMuRightSeting" class="config-right-manager">
        <el-tabs type="border-card">
          <el-tab-pane>
            <span slot="label"><i class="el-icon-pie-chart"></i>图表样式 </span>
            seting1
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-coin"></i>数据来源 </span>
            seting2
          </el-tab-pane>
          <el-tab-pane>
            <span slot="label"><i class="el-icon-s-tools"></i>交互事件 </span>
            seting3
          </el-tab-pane>
        </el-tabs>
      </div>
      <!-- 右侧设置图表样式栏--end -->
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
require('webpack-jquery-ui/css')
require('webpack-jquery-ui/draggable')
require('webpack-jquery-ui/droppable')
import { chartList, layoutList } from './page.static.data'
import { chartTypeMap } from './page.chart.type.map'
import { BoxElement, ChartElement } from './page.element.instance'
import FixedCommon from './configtemplate/fixed.layout.common'
import FixedIncome from './configtemplate/fixed.layout.income'
import FixedRemuneration from './configtemplate/fixed.layout.remuneration'
import FreeCommon from './configtemplate/free.layout.common'
export default {
  components: {
    FixedCommon,
    FixedIncome,
    FixedRemuneration,
    FreeCommon,
  },
  data() {
    return {
      isShowMuLayout: true,
      isShowMuChart: true,
      isShowMuRightSeting: true,
      leftChartList: chartList,
      leftLayoutList: layoutList,
      configType: 'fixed',
      fixTemplate: 'FixedCommon',
      pageConfig: {
        width: 1920,
        height: 1080,
        layoutType: '',
        coverImg: '',
        background: {
          color: '',
          img: '',
        },
        children: [],
      },
    }
  },
  computed: {},
  created() {},
  mounted() {
    this.setLeftMuChartDraggable()
    $('.main-panel-edit-container .el-scrollbar__view').css({ height: '100%' })
    // const h = $('.main-panel-edit-container .el-scrollbar__wrap').height()
    // const w = $('.main-panel-edit-container .el-scrollbar__wrap').width()
    // console.log(h, w)
    // console.log(new ChartElement(2, 5, 'fff'), new BoxElement())
    // this.$ls.set('test', JSON.stringify(new ChartElement(2, 5, 'fff')))
  },
  methods: {
    pagePicTest() {
      this.pageConfig.children[0].chartoption.color = ['#F56C6C', '#67C23A', '#67C23A']
    },
    previewPage() {
      window.open('/generatepage.html#/index', '_blank')
    },
    movingEditContext() {},
    haddleIsShowMuLayout() {
      this.isShowMuLayout = !this.isShowMuLayout
      this.$nextTick(() => {
        this.setLeftMuChartDraggable()
      })
    },
    haddleIsShowMuChart() {
      this.isShowMuChart = !this.isShowMuChart
      this.$nextTick(() => {
        this.setLeftMuChartDraggable()
      })
    },
    haddleIsShowMuRightSeting() {
      this.isShowMuRightSeting = !this.isShowMuRightSeting
      this.$nextTick(() => {
        this.setLeftMuChartDraggable()
      })
    },
    selectLayoutMethod(name) {
      if (name == this.fixTemplate) {
        return
      }
      //   this.$msgbox
      //     .confirm('此操作将永久删除该文件, 是否继续?', '提示', {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning',
      //       center: true,
      //     })
      //     .then(() => {
      //       this.$message({
      //         type: 'success',
      //         message: '删除成功!',
      //       })
      //     })
      //     .catch(() => {
      //       this.$message({
      //         type: 'info',
      //         message: '已取消删除',
      //       })
      //     })
      this.configType = name === 'FreeCommon' ? 'free' : 'fixed'
      this.fixTemplate = name
      this.pageConfig.children = []
      this.$nextTick(() => {
        this.setLeftMuChartDraggable()
      })
    },
    initPageEleInstance(type, isDroped, ui) {
      const dom = $('.main-panel-edit-container-context .jq-ui-state-hover').eq(0)
      //   const init_dom = dom[0]
      const index = dom.attr('index')
      if (dom && isDroped && this.configType == 'fixed') {
        const ele = new BoxElement(type, index)
        type.indexOf('chart') > -1 && (ele.chartoption = JSON.parse(JSON.stringify(chartTypeMap[type])))
        this.pageConfig.children.push(ele)
        this.pageConfig = Object.assign({}, this.pageConfig)
      }
      if (this.configType == 'free') {
        const o = $('.free-layout-common-box').offset()
        const w = $('.free-layout-common-box').width()
        const h = $('.free-layout-common-box').height()
        const area = [o.left, o.left + w * 0.4, o.top, o.top + h * 0.4]
        const x = ui.position.left
        const y = ui.position.top
        const isHover = !(x < area[0] || x > area[1] || y < area[2] || y > area[3])
        if (isHover) {
          const ele = new BoxElement(type)
          type.indexOf('chart') > -1 && (ele.chartoption = JSON.parse(JSON.stringify(chartTypeMap[type])))
          this.pageConfig.children.push(ele)
          this.pageConfig = Object.assign({}, this.pageConfig)
        }
      }
      this.$nextTick(() => {
        this.setLeftMuChartDraggable()
      })
    },
    setLeftMuChartDraggable() {
      //   $('.main-panel-edit-container-context').draggable()
      const _vue_this = this
      let isDroped = false
      $('.chart-left-nav .chart-list-item.useable').draggable({
        helper: 'clone',
        appendTo: 'body',
        scroll: false,
        distance: 10,
        cursorAt: { left: -3, top: -3 },
        // revert: true,
        drag: function (event, ui) {
          isDroped = false
          $('#layout-box-1').offset()
          //   console.log(event, ui, $('#layout-box-1').offset())
        },
        stop: function (event, ui) {
          const type = $(this).attr('type')
          _vue_this.initPageEleInstance(type, isDroped, ui)
        },
      })
      this.configType == 'fixed' &&
        $('.main-panel-edit-container-context .target').droppable({
          // activeClass: 'jq-ui-state-active',
          // hoverClass: 'jq-ui-state-hover',
          greedy: true,
          tolerance: 'pointer',
          drop: function (event, ui) {
            //该回调有bug，拖动元素移动经过多个放置元素（距离比较近）只放置一次，回调会执行多次，不在此处执行图标初始化回调
            $('.main-panel-edit-container-context .target').removeClass('jq-ui-state-hover')
            $(this).addClass('jq-ui-state-hover')
            isDroped = true
          },
          over: function (event, ui) {
            //   console.log(1234)
          },
        })
    },
  },
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
      transition: width 0.3s ease, opacity 1s ease;
      .layout-list {
        padding-bottom: 60px;
        .layout-list-item {
          display: flex;
          flex-direction: column;
          height: 160px;
          width: 200px;
          margin-top: 10px;
          margin-left: 10px;
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
          flex: 1;
          width: 200px;
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
    .main-panel-chart {
      background-color: #15161c;
      height: 100%;
      width: 220px;
      z-index: 4;
      transition: width 0.3s ease, opacity 1s ease;
      overflow: hidden;
      box-shadow: 1px 0 #000;
      .chart-left-nav {
        height: 100%;
        .empty-text {
          color: #fff;
          height: 28px;
          line-height: 28px;
          font-size: 12px;
          padding: 10px 0px;
          text-align: center;
        }
      }
      .chart-list {
        display: flex;
        flex-wrap: wrap;
        padding-bottom: 60px;
        .chart-list-item {
          height: 80px;
          width: 80px;
          margin-top: 5px;
          margin-right: 5px;
          cursor: pointer;
          position: relative;
        }
        .unusebale::after {
          content: '';
          display: inline-block;
          position: absolute;
          left: 0;
          top: 0;
          //   background-color: rgba(91, 144, 224, 0.267);
          background-image: linear-gradient(-90deg, rgba(0, 161, 255, 0.39) 0, rgba(0, 137, 255, 0.19) 100%);
          height: 80px;
          width: 80px;
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
      transition: width 0.4s ease;
      overflow: hidden;
      .layout {
        width: 100%;
        height: 100%;
        overflow-x: auto;
        overflow-y: hidden;
        .scrollbar-layout {
          position: relative;
          width: 850px; //(1920 * 0.4)
          //   height: 460px;
          height: calc(100% + 17px);
          //   height: 100%;
          margin-bottom: -17px;
          overflow-y: hidden;
          margin-right: auto;
          margin-left: auto;
        }
        .main-panel-edit-container-context {
          //   width: 768px; //(1920 * 0.4)
          //   height: 432px;
          //   border-bottom: solid 1px rgba(83, 83, 189, 0.411);
          //   border-left: solid 1px rgba(83, 83, 189, 0.411);
          border: solid 1px #073249;
          width: 1920px;
          height: 1080px;
          //   background-color: rgba(157, 188, 216, 0.137);
          //   background: linear-gradient(-90deg, rgba(83, 83, 189, 0.411) 1px, transparent 1px) 0% 0% / 10px 10px, linear-gradient(rgba(83, 83, 189, 0.411) 1px, transparent 1px) 0% 0% / 10px 10px;
          background-image: linear-gradient(to bottom, #073249 0, #073249 1px, transparent 1px),
            linear-gradient(to right, #0f2937 0, #0f2937 1px, transparent 1px);
          background-size: 10px 10px;
          background-repeat: repeat;
          position: absolute;
          left: 50%;
          top: 50%;

          //   transform: translateX(-50%) translateY(-50%);
          //   left: calc(50% - 596px); //-1920*0.6/2 + 50% = 576
          //   top: calc(50% - 324px);
          transform: scale(0.4, 0.4) translateX(-50%) translateY(-50%);
          //   transform: scale(0.4, 0.4);
          transform-origin: 0 0;
        }
      }
    }
    .config-right-manager {
      width: 332px;
      height: 100%;
      z-index: 90;
      background: #1e1f28;
      position: relative;
      transition: width 0.35s ease-in-out;
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
  .el-tabs__header {
    height: 100%;
  }
  .el-tabs__content {
    height: 100%;
    .el-tab-pane {
      height: 100%;
    }
  }
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
//修改jq-ui
.chart-list-item.ui-draggable {
  z-index: 999;
}
.chart-list-item {
  height: 80px;
  width: 80px;
  margin-top: 5px;
  margin-right: 5px;
  cursor: pointer;
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
.jq-ui-state-active {
  background-image: linear-gradient(-90deg, rgba(0, 161, 255, 0.39) 0, rgba(0, 137, 255, 0.19) 100%);
}
.jq-ui-state-hover {
  background-color: rgba(64, 160, 255, 0.87) !important;
}
.target:hover {
  background-color: rgba(64, 160, 255, 0.87) !important;
}
//修改vdr组件样式

.layout-box-item {
  height: 100%;
  width: 100%;
}
.vdr {
  border-color: #409eff;
  border: 1px dashed #409eff;
}
.handle {
  background-color: rgb(144, 193, 243);
  border: 1px dashed #409eff;
}
.ref-line {
  background-color: rgba(243, 8, 196, 0.877);
  //   background-color: #409eff;
}
</style>
