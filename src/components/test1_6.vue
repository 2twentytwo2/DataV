<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">父母学历对比</div>
    </div>
    <div id="chart6" style="width: 100%;height: 90%">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'test1_6',
    methods: {
      initCharts() {
        let myChart = echarts.init(document.getElementById('chart6'));
        let myColor = ['#04e0fc', '#5a67ea', '#12dfab', '#ffcd03',  '#5af6c0'];
        let option = {
          grid: {
            left: '10%',
            top: '12%',
            right: '5%',
            bottom: '8%',
            containLabel: true
          },
          xAxis: [{
            show: false,
          }],
          yAxis: [

            {
            inverse:true,
            axisTick: 'none',
            axisLine: 'none',
            offset: '27',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '10',
                fontWeight:'bold'
              }
            },
            data: ['其他', '≤专科', '≤本科', '≤硕士', '≤博士']
          }, {
              inverse:true,
            axisTick: 'none',
            axisLine: 'none',
            axisLabel: {
              textStyle: {
                color: '#ffffff',
                fontSize: '0',
              }
            },
            data: [  '5', '4', '3', '2', '1']
          },
            {
            name: '拿科研奖学金与父母学历的对比分析',
              inverse:true,
            nameGap: '50',
            nameTextStyle: {
              color: '#ffffff',
              fontSize: '30',
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0,0,0,0)'
              }
            },
            data: [],
          }],
          series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [1050, 420, 689, 70, 11],
            label: {
              normal: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff',
                  fontSize: '14',
                }
              }
            },
            barWidth: 8,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
              }
            },
            z: 2
          }, {
            name: '白框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [0, 0, 0, 0, 0],
            barWidth: 9,
            itemStyle: {
              normal: {
                color: '#0e2147',
                barBorderRadius: 5,
              }
            },
            z: 1
          }, {
            name: '外框',
            type: 'bar',
            yAxisIndex: 2,
            barGap: '-100%',
            data: [0, 0, 0, 0, 0],
            barWidth: 9,
            itemStyle: {
              normal: {
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num]
                },
                barBorderRadius: 5,
              }
            },
            z: 0
          },
            {
              name: '外圆',
              type: 'scatter',
              hoverAnimation: false,
              data: [0, 0, 0, 0, 0],
              yAxisIndex: 2,
              symbolSize: 14,
              itemStyle: {
                normal: {
                  color: function(params) {
                    var num = myColor.length;
                    return myColor[params.dataIndex % num]
                  },
                  opacity: 1,
                }
              },
              z: 2
            }
          ]
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
