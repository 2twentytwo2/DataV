<template>
  <DIV style="width: 100%;height: 100%" id="chart24"></DIV>
</template>

<script>
    export default {
        name: "chart24",
      mounted()
      {
        this.initCharts()
      },
      methods:{
        initCharts(){
          let myChart = echarts.init(document.getElementById('chart24'))
          let option = {
            radar: [{
              indicator: [{
                text: '次数'
              }, {
                text: '长度'
              }, {
                text: '时间'
              }, {
                text: '速度'
              }],
              center: ['25%', '50%'],
              radius: 70,
              startAngle: 90,
              splitNumber: 4,
              shape: 'circle',
              name: {
                textStyle: {
                  color: '#ffffff',
                  fontSize:15
                }
              },
              splitArea: {
                areaStyle: {
                  color: 'rgba(0, 0, 0, 0)'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#B8BCC0',
                  type: 'dotted',
                  opacity: 0.6
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(64,183,255,0.6)'
                }
              }
            },{
              indicator: [{
                text: '次数'
              }, {
                text: '长度'
              }, {
                text: '时间'
              }, {
                text: '速度'
              }],
              center: ['75%', '50%'],
              radius: 70,
              startAngle: 90,
              splitNumber: 4,
              shape: 'circle',
              name: {
                textStyle: {
                  color: '#ffffff',
                  fontSize:15
                }
              },
              splitArea: {
                areaStyle: {
                  color: 'rgba(0, 0, 0, 0)'
                }
              },
              axisLine: {
                lineStyle: {
                  color: '#B8BCC0',
                  type: 'dotted',
                  opacity: 0.6
                }
              },
              splitLine: {
                lineStyle: {
                  color: 'rgba(64,183,255,0.6)'
                }
              }
            }
              ],
            series: [{
              name: '雷达图',
              type: 'radar',
              radarIndex:0,
              data: [{
                value: [100, 8, 0.40, -80],
                name: '图一',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    color: '#00FFC6'
                  }
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(0,255,197,0.22)'
                  }
                }
              }, {
                value: [80, 5, 0.30, 40],
                name: '图二',
                lineStyle: {
                  normal: {
                    color: "#F8E81C"
                  }
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(248,230,27,0.21)'
                  }
                }
              }]
            },{
              name: '雷达2',
              type: 'radar',
              radarIndex:1,
              data: [{
                value: [100, 8, 0.40, -80],
                name: '图一',
                symbol: 'rect',
                symbolSize: 5,
                lineStyle: {
                  normal: {
                    color: '#00FFC6'
                  }
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(0,255,197,0.22)'
                  }
                }
              }, {
                value: [60, 5, 0.30, -100],
                name: '图二',
                lineStyle: {
                  normal: {
                    color: "#F8E81C"
                  }
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(248,230,27,0.21)'
                  }
                }
              }]
            }]
          }
          myChart.setOption(option)
        }
      }
    }
</script>

<style scoped>

</style>
