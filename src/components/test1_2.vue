<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">图书借阅排名</div>
    </div>
    <div id="chart2" style="width: 100%;height: 90%">
    </div>
  </div>

</template>

<script>
    export default {
        name: 'test1_2',
      methods: {
        initCharts(){
          var myChart = echarts.init(document.getElementById('chart2'));

          var highlight = '#03e3f8';

          var demoData = [{
            name: '明朝那些事儿',
            value: 222,
            unit: '次',
            pos: ['16.6%', '25%'],
            range: [0, 250]
          },
            {
              name: '理想国',
              value: 213,
              unit: '次',
              pos: ['49.8%', '25%'],
              range: [0, 250]
            },
            {
              name: '经济学原理',
              value: 171,
              unit: '次',
              pos: ['83%', '25%'],
              range: [0, 240],

            },
            {
              name: '论法的精神',
              value: 162,
              unit: '次',
              pos: ['16.6%', '73%'],
              range: [0, 250]
            },
            {
              name: '政府论',
              value: 123,
              unit: '次',
              pos: ['49.8%', '73%'],
              range: [0, 250]
            },
            {
              name: '毛泽东选集',
              value: 120,
              unit: '次',
              pos: ['83%', '73%'],
              range: [0, 250]
            }
          ];

          var option = {
            series: (function() {
              var result = [];

              demoData.forEach(function(item) {
                result.push(
                  // 外围刻度
                  {
                    type: 'gauge',
                    center: item.pos,
                    radius: '2%', // 1行3个
                    splitNumber: item.splitNum || 10,
                    min: item.range[0],
                    max: item.range[1],
                    startAngle: 225,
                    endAngle: -45,
                    axisLine: {
                      show: true,
                      lineStyle: {
                        width: 1,
                        shadowBlur: 0,
                        color: [
                          [1, highlight]
                        ]
                      }
                    },
                    axisTick: {
                      show: true,
                      lineStyle: {
                        color: highlight,
                        width: 1
                      },
                      length: -3,
                      splitNumber: 10
                    },
                    splitLine: {
                      show: true,
                      length: -14,
                      lineStyle: {
                        color: highlight,
                      }
                    },
                    axisLabel: {
                      distance: -22,
                      textStyle: {
                        color: highlight,
                        fontSize: '8',
                      }
                    },
                    pointer: {
                      show: 0
                    },
                    detail: {
                      show: 0
                    }
                  },

                  // 内侧指针、数值显示
                  {
                    name: item.name,
                    type: 'gauge',
                    center: item.pos,
                    radius: '28%',
                    startAngle: 225,
                    endAngle: -45,
                    min: item.range[0],
                    max: item.range[1],
                    axisLine: {
                      show: true,
                      lineStyle: {
                        width: 16,
                        color: [
                          [1, 'rgba(255,255,255,.1)']
                        ]
                      }
                    },
                    axisTick: {
                      show: 0,
                    },
                    splitLine: {
                      show: 0,
                    },
                    axisLabel: {
                      show: 0
                    },
                    pointer: {
                      show: true,
                      length: '105%'
                    },
                    detail: {
                      show: true,
                      offsetCenter: [0, '110%'],
                      textStyle: {
                        fontSize: 10,
                        color: '#fff'
                      },
                      formatter: [
                        '{value} ' + (item.unit || ''),
                        '{name|' + item.name + '}'
                      ].join('\n'),
                      rich: {
                        name: {
                          fontSize: 10,
                          lineHeight: 20,
                          color: '#fff',
                          fontWeight: 'bold'
                        }
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: highlight,
                      }
                    },
                    data: [{
                      value: item.value
                    }]
                  }
                );
              });

              return result;
            })()
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
