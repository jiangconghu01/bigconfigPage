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
  textStyle: {
    color: '#fff',
    fontSize: 'normal',
    fontWeight: 'normal',
  },
  grid: {
    left: '50',
    right: '10%',
    top: '60',
    bottom: '60',
  },
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
