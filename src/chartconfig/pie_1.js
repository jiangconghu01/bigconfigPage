const option = {
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  color: ['#0A73FF', '#3DABFF', '#43CCFF'],
  series: [
    {
      name: 'xxxx',
      type: 'pie',
      radius: '75%',
      center: ['50%', '50%'],
      data: [202, 234, 500],
      label: {
        show: true,
        position: 'inside',
        formatter: '{d}%',
      },
      itemStyle: {
        emphasis: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}
export default option
