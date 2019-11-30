<template>
  <div id="xbar3" style="width: 100%;height:100%"></div>
</template>

<script>
  export default {
    name: "xbar3",
    methods: {
      initCharts() {
        let charts = echarts.init(document.getElementById('xbar3'))
        let option = {
          grid:{
            x:'15%',
            x2:'12%',
            width:'80%',
            y2:'20%',
            height:'60%'

          },
          legend: {
            data: ['2011年', '2012年'],
            top:12,
            right:20,
            textStyle: {
              color: "#fff"
            },
          },
          xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            nameRotate:40,
            axisLabel: {
              textStyle: {
                color:'#fff'
              },
              interval: 0,
              rotate:40
            },
          },
          yAxis: {
            type: 'category',
            data: ['巴西', '印尼', '美国', '印度', '中国', '人口'],
            axisLine: {
              show: false,
              lineStyle: {
                color: '#FFF'
              }
            },
            axisLabel: {
              textStyle: {
                color:'#fff'
              }
            },
          },
          series: [
            {
              name: '2011年',
              type: 'bar',
              data: [18203, 23489, 29034, 104970, 131744, 630230],
              itemStyle:{
                color:'#8b7397'
              }
            },
            {
              name: '2012年',
              type: 'bar',
              data: [19325, 23438, 31000, 121594, 134141, 681807],
              itemStyle:{
                color:'#e1cbec'
              }
            }
          ]
        };
        charts.setOption(option)
      }
    },
    mounted() {
      this.initCharts()
    }
  }
</script>

<style scoped>

</style>
