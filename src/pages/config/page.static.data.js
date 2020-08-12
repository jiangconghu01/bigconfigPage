const layoutList = [
  {
    name: '自由布局',
    tempName: 'FreeCommon',
    bgimg: require('@/static/free.png'),
  },
  {
    name: '布局模板一',
    tempName: 'FixedCommon',
    bgimg: require('../../static/layout_2.png'),
  },
  //   {
  //     name: '布局模板二',
  //     tempName: 'FixedIncome',
  //     bgimg: require('../../static/layout_2.png'),
  //   },
  {
    name: '布局模板三',
    tempName: 'FixedRemuneration',
    bgimg: require('../../static/layout_2.png'),
  },
]
const chartList = [
  {
    label: '全部组件',
    icon: 'el-icon-data-analysis',
    id: 'all-chart-item',
    child: [],
  },
  {
    label: '常用图表',
    icon: 'el-icon-s-data',
    child: [
      {
        label: '基本柱状图',
        bgimg: require('../../static/bar_1.png'),
        useable: true,
        type: 'chart_bar_1',
      },
      {
        label: '基本条形图',
        bgimg: require('../../static/bar_2.png'),
      },
      {
        label: '多系列柱状图',
        bgimg: require('../../static/bar_3.png'),
      },
      {
        label: '斑马柱状图',
        bgimg: require('../../static/stack_2.png'),
      },
      {
        label: '堆叠图',
        bgimg: require('../../static/stack_1.png'),
      },
      {
        label: '基本饼图',
        bgimg: require('../../static/pie_1.png'),
        useable: true,
        type: 'chart_pie_1',
      },
      {
        label: '分类玫瑰图',
        bgimg: require('../../static/pie_2.png'),
      },
      {
        label: '多维度饼图',
        bgimg: require('../../static/pie_3.png'),
      },
      {
        label: '单值占比',
        bgimg: require('../../static/pie_4.png'),
      },
      {
        label: '环形图',
        bgimg: require('../../static/pie_5.png'),
      },
      {
        label: '基本折线图',
        bgimg: require('../../static/line_1.png'),
      },
      {
        label: '区域折线图',
        bgimg: require('../../static/line_3.png'),
        useable: true,
        type: 'chart_line_1',
      },
    ],
  },
  {
    label: '地图',
    icon: 'el-icon-location-information',
    id: 'map-chart-item',
    child: [
      {
        label: '普通平面地图',
        bgimg: require('../../static/map_1.png'),
      },
      {
        label: '3D平面地图',
        bgimg: require('../../static/map_2.png'),
      },
    ],
  },

  {
    label: '文字',
    icon: 'el-icon-edit-outline',
    id: 'text-chart-item',
    child: [
      {
        label: '标题',
        bgimg: require('../../static/title_1.png'),
      },
      {
        label: '标题',
        bgimg: require('../../static/title_2.png'),
      },
      {
        label: '翻牌数字',
        bgimg: require('../../static/num_1.png'),
      },
    ],
  },
  {
    label: '图片',
    icon: 'el-icon-picture',
    id: 'img-chart-item',
    child: [
      {
        label: '图片',
        bgimg: require('../../static/pic_1.png'),
      },
      {
        label: '轮播图片',
        bgimg: require('../../static/pic_2.png'),
      },
    ],
  },
  {
    label: '控件',
    icon: 'el-icon-s-tools',
    id: 'controll-chart-item',
    child: [
      {
        label: '下拉选择器',
        bgimg: require('../../static/select_2.png'),
        useable: true,
        type: 'select',
      },
      {
        label: '级联选择器',
        bgimg: require('../../static/cascader.png'),
        useable: true,
        type: 'cascader',
      },
      {
        label: '时间选择器',
        bgimg: require('../../static/date_2.png'),
        type: 'datepicker',
        useable: true,
      },
      {
        label: '按钮',
        bgimg: require('../../static/button.png'),
        useable: true,
        type: 'button',
      },
      {
        label: '提示文字',
        bgimg: require('../../static/tooltip.png'),
      },
      {
        label: '边框',
        bgimg: require('../../static/frame_1.png'),
      },
    ],
  },
  {
    label: '其他',
    icon: 'el-icon-more',
    id: 'other-chart-item',
    child: [],
  },
  {
    label: '收藏',
    icon: 'el-icon-star-off',
    id: 'my-chart-item',
    child: [],
  },
]
chartList[0].child = chartList.reduce((preRe, curr, index) => {
  return index > 0 ? preRe.concat(curr.child) : preRe.concat([])
}, [])

export { chartList, layoutList }
