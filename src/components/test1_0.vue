<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">获奖按月分布</div>
    </div>
    <div id="chart0" style="width: 100%;height: 90%">
    </div>
  </div>

</template>

<script>
    export default {
        name: 'test1_0',
      methods: {
        initCharts() {
          var myChart = echarts.init(document.getElementById('chart0'));
          var option = {
            tooltip: {
              trigger: 'axis',
              axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
              },
              textStyle: {
                color: "#fff",
                fontSize:9
              },
            },
            grid:{
              top:'18%',
              bottom: '15%',
              left:'15%'
            },
            legend: {
              data: ['国家级竞赛', '省级竞赛', '校级竞赛','院级竞赛','专利期刊'],
              right: 10,
              top:'3%',
              textStyle: {
                color: "#fff",
                fontSize:9
              },
              itemWidth: 12,
              itemHeight: 10,
              // itemGap: 35
            },
            xAxis: {
              type: 'category',
              data: ['1','2','3','4','5','6','7','8','9','10','11','12'],
              axisLine: {
                lineStyle: {
                  color: 'white'

                }
              },
              axisLabel: {
                // interval: 0,
                // rotate: 40,
                textStyle: {
                  fontFamily: 'Microsoft YaHei',
                  fontSize:9
                }
              },
            },

            yAxis: {
              type: 'value',
              max:'300',
              axisLine: {
                show: false,
                lineStyle: {
                  color: 'white'

                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: 'rgba(255,255,255,0.3)'
                }
              },
              axisLabel: {
                textStyle: {
                  fontFamily: 'Microsoft YaHei',
                  fontSize:9
                }
              }
            },
            series: [{
              name: '国家级',
              type: 'bar',
              barWidth: '10%',
              itemStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00e3fd'
                  }, {
                    offset: 1,
                    color: '#00e3fd'
                  }]),
                  barBorderRadius: 12,
                },
              },
              data:  [
                0, 0, 2, 5, 13, 6, 0, 2, 3, 0, 0,1
              ]
            },
              {
                name: '省级竞赛',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#00a1f9'
                    }, {
                      offset: 1,
                      color: '#00a1f9'
                    }]),
                    barBorderRadius: 11,
                  }

                },
                data: [
                  0, 0, 3, 5, 6, 6, 23, 10, 7, 0, 0, 0
                ]
              },
              {
                name: '校级竞赛',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#5d69fd'
                    }, {
                      offset: 1,
                      color: '#5d69fd'
                    }]),
                    barBorderRadius: 11,
                  }

                },
                data: [
                  5, 0, 12, 98, 259, 54, 14, 68, 85, 0, 2, 7
                ]
              },
              {
                name: '院级竞赛',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 1,
                      color: '#06e6a4'
                    }, {
                      offset: 0,
                      color: '#06e6a4'
                    }]),
                    barBorderRadius: 11,
                  }
                },
                data: [
                  0, 0, 0, 14, 52, 18, 14, 1, 0, 1, 0, 1
                ]
              },
              {
                name: '期刊专利',
                type: 'bar',
                barWidth: '10%',
                itemStyle: {
                  normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                      offset: 0,
                      color: '#edbf3b'
                    }, {
                      offset: 1,
                      color: '#edbf3b'
                    }]),
                    barBorderRadius: 11,
                  }
                },
                data: [
                  21, 5, 13, 22, 23, 31, 33, 39, 9, 0, 0, 1
                ]
              }]
          };

          var app = {
            currentIndex: -1,
          };
          setInterval(function () {
            var dataLen = option.series[0].data.length;

            // 取消之前高亮的图形
            myChart.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: app.currentIndex
            });
            app.currentIndex = (app.currentIndex + 1) % dataLen;
            //console.log(app.currentIndex);
            // 高亮当前图形
            myChart.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: app.currentIndex,
            });
            // 显示 tooltip
            myChart.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: app.currentIndex
            });


          }, 1000);
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
