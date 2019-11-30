<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">学院获奖数</div>
    </div>
    <div id="chart1" style="width: 100%;height: 90%">
    </div>
  </div>
</template>

<script>
    export default {
        name: 'test1_1',

      methods: {
        initCharts() {
          var myChart = echarts.init(document.getElementById('chart1'));


          let nameData = ["统计与数学学院","信息与安全工程学院","金融学院","公共管理学院",
            "财政税务学院","法学院","工商管理学院","会计学院","中韩新媒体学院","经济学院"
          ]
          var option = {
            angleAxis: {
              interval: 1,
              type: 'category',
              data: nameData,
              z: 14,
              axisLine: {
                show: true,
                lineStyle: {
                  color: "#fff",
                  width: 1,
                  type: "solid"
                },
              },
              axisLabel: {
                interval: 0,
                show: true,
                color: "#fff",
                margin: 3,
                fontSize: 10
              },
            },
            radiusAxis: {
              min: 0,
              max: 180,
              interval: 45,
              axisLine: {
                show: true,
                lineStyle: {
                  color: "fff",
                  width: 1,
                  type: "solid"
                },
              },
              axisLabel: {
                formatter: '{value}',
                show: true,
                padding: [0, 0, 20, 0],
                color: "#fff",
                fontSize: 10
              },
              splitLine: {
                lineStyle: {
                  color: "#fff",
                  width: 1,
                  type: "solid"
                }
              }
            },
            polar: {},
            series: [{
              type: 'bar',
              data: [{
                value: 161,
                itemStyle: {
                  normal: {
                    color: "#04e0fc"
                  }
                }
              },
                {
                  value: 119,
                  itemStyle: {
                    normal: {
                      color: "#5a67ea"
                    }
                  }
                },
                {
                  value: 170,
                  itemStyle: {
                    normal: {
                      color: "#12dfab"
                    }
                  }
                },
                {
                  value: 89,
                  itemStyle: {
                    normal: {
                      color: "#01b0dd"
                    }
                  }
                },
                {
                  value: 82,
                  itemStyle: {
                    normal: {
                      color: "#0270da"
                    }
                  }
                },
                {
                  value: 125,
                  itemStyle: {
                    normal: {
                      color: "#01fff5"
                    }
                  }
                },
                {
                  value: 117,
                  itemStyle: {
                    normal: {
                      color: "#ffcd03"
                    }
                  }
                },
                {
                  value: 118,
                  itemStyle: {
                    normal: {
                      color: "#fe9f1f"
                    }
                  }
                },
                {
                  value: 24,
                  itemStyle: {
                    normal: {
                      color: "#5af6c0"
                    }
                  }
                },
                {
                  value: 62,
                  itemStyle: {
                    normal: {
                      color: "#4fd75c"
                    }
                  }
                }
              ],
              coordinateSystem: 'polar',
            }],
          };
          myChart.setOption(option);
          window.addEventListener('resize',()=>{myChart.resize()})
        }
      },
      mounted() {
        this.initCharts()
      }
    }
</script>

<style scoped>

</style>
