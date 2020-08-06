import echarts from 'echarts'
const option = {
  title: {
    // text: '数量',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#F1F1F3',
    },
    top: '10%',
    left: '1.5%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    top: 45,
    right: '4%',
    left: 80,
    bottom: 55,
  },
  xAxis: [
    {
      type: 'category',
      data: [],
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.12)',
        },
      },
      axisLabel: {
        interval: 0,
        rotate: 25,
        margin: 10,
        color: '#e2e9ff',
        textStyle: {
          fontSize: 14,
        },
      },
    },
  ],
  yAxis: [
    {
      splitNumber: 3,
      axisLabel: {
        formatter: '{value}',
        color: '#e2e9ff',
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.12)',
        },
      },
      splitLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.12)',
        },
      },
    },
  ],
  series: [
    {
      type: 'bar',
      data: [200, 300, 300, 900, 1500, 1200, 600],
      barWidth: '16px',
      label: {
        show: true,
        position: 'top',
        color: 'rgba(255,255,255,0.8)',
        fontSize: 10,
      },
      itemStyle: {},
    },
  ],
}
const barColor = {
  color: new echarts.graphic.LinearGradient(
    0,
    0,
    0,
    1,
    [
      {
        offset: 0,
        color: '#0338FF', // 0% 处的颜色
      },
      {
        offset: 1,
        color: '#01B0FF', // 100% 处的颜色
      },
    ],
    false
  ),
  barBorderRadius: [10, 10, 10, 10],
}
option.series[0].itemStyle.normal = barColor
//暴力拷贝后小圆点的对象获取失败，直接指定小圆点的html=
const pointer = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:##;"></span>'
export default option
