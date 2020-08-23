import echarts from 'echarts'
const option = {
  title: {
    show: true,
    text: 'XXX',
    textStyle: {
      fontWeight: 'normal',
      fontSize: 16,
      color: '#F1F1F3',
    },
    left: '1.5%',
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      lineStyle: {
        color: '#dddc6b',
      },
    },
  },
  legend: {
    top: '0%',
    data: ['IOS'],
    textStyle: {
      color: 'rgba(255,255,255,.5)',
      fontSize: '12',
    },
  },
  grid: {
    left: '10',
    top: '30',
    right: '10',
    bottom: '10',
    containLabel: true,
  },
  color: ['#0A73FF', '#3DABFF', '#43CCFF'],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
        textStyle: {
          //   color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.2)',
        },
      },

      data: ['01', '02', '03', '04', '05', '06', '07'],
    },
    {
      axisPointer: { show: false },
      axisLine: { show: false },
      position: 'bottom',
      offset: 20,
    },
  ],

  yAxis: [
    {
      type: 'value',
      axisTick: { show: false },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
      axisLabel: {
        textStyle: {
          //   color: 'rgba(255,255,255,.6)',
          fontSize: 12,
        },
      },

      splitLine: {
        lineStyle: {
          color: 'rgba(255,255,255,.1)',
        },
      },
    },
  ],
  series: [
    {
      name: '模板',
      type: 'line',
      smooth: true,
      symbol: 'circle',
      symbolSize: 5,
      showSymbol: false,
      lineStyle: {
        normal: {
          color: '#0A73FF',
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            0,
            1,
            [
              {
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)',
              },
              {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)',
              },
            ],
            false
          ),
          shadowColor: 'rgba(0, 0, 0, 0.1)',
        },
      },
      itemStyle: {
        normal: {
          color: '#0184d5',
          borderColor: 'rgba(221, 220, 107, .1)',
          borderWidth: 12,
        },
      },
      data: [1, 8, 3, 4, 2, 4, 5],
    },
  ],
}
export default option
