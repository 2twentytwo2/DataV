<template>
  <DIV style="width: 100%;height: 100%" id="chart23"></DIV>
</template>

<script>
    export default {
        name: "chart23",
      mounted()
      {
        this.initCharts()
      },
      methods:{
        initCharts(){
          let myChart = echarts.init(document.getElementById('chart23'))
          let option = {
            tooltip: {},
            animationDurationUpdate: function(idx) {
              // 越往后的数据延迟越大
              return idx * 100;
            },
            animationEasingUpdate: 'bounceIn',
            color: ['#fff', '#fff', '#fff'],
            series: [{
              type: 'graph',
              layout: 'force',
              force: {
                repulsion: 300,
                edgeLength: 30
              },
              roam: true,
              label: {
                normal: {
                  show: true,
                  position: 'inside',
                  formatter: '{b}',
                  fontSize: 15,
                  fontStyle: '600',
                }
              }
              ,
              data: [{
                "name": "考研",
                "value": 10000,
                x: 500,
                y: 56,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#927aef",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#927aef",
                    "color": "#927aef"
                  }
                }
              }, {
                "name": "兼职",
                "value": 6181,
                x: 0,
                y: 0,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#89bd02",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#89bd02",
                    "color": "#89bd02",
                  }
                },

              }, {
                "name": "食堂",
                "value": 4386,
                x: 0,
                y: 0,
                "symbolSize": 50,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "rgb(165, 190, 198)",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "rgb(165, 190, 198)",
                    "color": "rgb(165, 190, 198)"
                  }
                }
              }, {
                "name": "家教",
                "value": 4055,
                "symbolSize": 60,
                x: 0,
                y: 0,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#4DFB37",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#4DFB37",
                    "color": "#4DFB37"
                  }
                }
              }, {
                "name": "大四",
                "value": 2467,
                x: 0,
                y: 0,
                "symbolSize": 30,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#00BFFF",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#00BFFF",
                    "color": "#00BFFF"
                  }
                }
              }, {
                "name": "研友",
                "value": 2244,
                x: 0,
                y: 0,
                "symbolSize": 30,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#FFD700",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#FFD700",
                    "color": "#FFD700"
                  }
                }
              },{
                "name": "友",
                "value": 1244,
                x: 0,
                y: 0,
                "symbolSize": 30,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#FFD700",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#FFD700",
                    "color": "#FFD700"
                  }
                }
              }, {
                "name": "研",
                "value": 244,
                x: 0,
                y: 0,
                "symbolSize": 30,
                "draggable": true,
                "itemStyle": {
                  "normal": {
                    "borderColor": "#00ffff",
                    "borderWidth": 4,
                    "shadowBlur": 10,
                    "shadowColor": "#00ffff",
                    "color": "#00ffff"
                  }
                }
              },
                {
                  "name": "1",
                  "value": 1244,
                  x: -10,
                  y: 0,
                  "symbolSize": 30,
                  "draggable": true,
                  "itemStyle": {
                    "normal": {
                      "borderColor": "#00ffff",
                      "borderWidth": 4,
                      "shadowBlur": 10,
                      "shadowColor": "#00ffff",
                      "color": "#00ffff"
                    }
                  }
                },
                {
                  "name": "2",
                  "value": 1244,
                  x: 20,
                  y: 30,
                  "symbolSize": 30,
                  "draggable": true,
                  "itemStyle": {
                    "normal": {
                      "borderColor": "#FFD700",
                      "borderWidth": 4,
                      "shadowBlur": 10,
                      "shadowColor": "#FFD700",
                      "color": "#FFD700"
                    }
                  }
                },
                {
                  "name": "3",
                  "value": 1244,
                  x: 10,
                  y: 10,
                  "symbolSize": 30,
                  "draggable": true,
                  "itemStyle": {
                    "normal": {
                      "borderColor": "#FFf",
                      "borderWidth": 4,
                      "shadowBlur": 10,
                      "shadowColor": "#FFf",
                      "color": "#FFf"
                    }
                  }
                }],
              links:[{
                "source": "食堂",
                "target": "家教"
              },
                {
                  "source": "研友",
                  "target": "家教"
                },
                {
                  "source": "兼职",
                  "target": "家教"
                },
                {
                  "source": "考研",
                  "target": "家教"
                },
                {
                  "source": "大四",
                  "target": "家教"
                },
                {
                  "source": "友",
                  "target": "大四"
                },
                {
                  "source": "研",
                  "target": "考研"
                },
                {
                  "source": "1",
                  "target": "食堂"
                },{
                  "source": "3",
                  "target": "1"
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
