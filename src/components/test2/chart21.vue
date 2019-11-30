<template>
    <div id="chart21" style="width: 100%;height: 100%">

    </div>
</template>

<script>
    export default {
        name: "chart21",
      mounted(){
          this.initCharts()
      },
      methods:{
          initCharts(){
            let myChart = echarts.init(document.getElementById('chart21'))
            let option = {
              grid:{
                y2:'30',
                x:'50',
                y:'100',
                x2:'15',
                bottom:'15%'
              },
              xAxis: [
                {
                  type: 'category',
                  data : ['江宁金茂悦','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林','进击九月森林'],
                  axisLabel: {
                    show: true,
                    interval:0,
                    textStyle: {
                      color: '#d2d4da'
                    }
                  },
                  axisLabel:{
                    interval:0,
                    textStyle: {
                      color: '#d2d4da',
                      fontSize:'9',
                    }
                  },
                }
              ],
              yAxis: [
                {
                  type: 'value',
                  // interval: 50,
                  scale: true,
                  splitLine: {
                    lineStyle: {
                      color:'#1f3054'
                    },
                  },
                  axisLabel:{
                    textStyle: {
                      color: '#d2d4da',
                      fontSize:'9',
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: '#1f3054', // 颜色
                      width: 1, // 粗细
                    }
                  }
                },
                {
                  type: 'value',
                  show: false,
                  interval: 1,
                  axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} %'
                  },

                }
              ],
              series: [
                {
                  name: '已完成',
                  barWidth : 10,
                  borderWidth:'0',
                  type: 'bar',
                  stack:  '总量',
                  itemStyle: {
                    normal: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 1,
                        color: "#3893e5" // 0% 处的颜色
                      },
                        {
                          offset: 0,
                          color: "#00ffff" // 100% 处的颜色
                        }], false),
                    },
                  },
                  label: {
                    normal: {
                      color:'#fff',
                      show: true,
                      position: 'inside',
                      zlevel:'1000',
                    }
                  },
                  data: [98, 68, 100, 40, 30, 68, 100, 40, 20]
                },
                {
                  name: '未完成',
                  type: 'bar',
                  stack: '总量',
                  itemStyle: {
                    normal: {
                      color: '#626262'
                    },
                  },
                  label: {
                    normal: {
                      color:'#dbdde2',
                      show: true,
                      position: 'inside'
                    }
                  },
                  data:[100, 100, 100, 100, 100, 100, 100, 100, 100]
                },
                {
                  name: '总计',
                  type: 'bar',
                  stack: '总量',
                  label: {
                    normal: {
                      // offset:['50', '80'],
                      show: true,
                      position: 'top',
                      formatter:'{c}',
                      textStyle:{ color:'#fff' }
                    }
                  },
                  itemStyle:{
                    normal:{
                      color:'rgba(128, 128, 128, 0)'
                    }
                  },
                  data:[0, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                  name:'完成率',
                  symbol:'circle',
                  symbolSize :8,
                  smooth:true,
                  type:'line',
                  yAxisIndex: 1,
                  data:[0,74,98,48,48,74,98,48,100],
                  itemStyle: {
                    normal: {
                      color:'#0eddfd',
                      label: {
                        show: true,
                        position: "top",
                        formatter:'{c}%',
                        borderWidth:10,
                        color:'#0eddfd',
                        padding:4,

                      },
                      labelLine: {
                        show: false
                      }
                    } ,

                  }
                }
              ]
            };
            myChart.setOption(option)
          }
      }
    }
</script>

<style scoped>

</style>
