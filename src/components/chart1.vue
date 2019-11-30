<template>
    <div ref="chart1" style="width: 100%;height: 100%;">
    </div>
</template>

<script>
  import 'echarts-liquidfill/src/liquidFill.js'
    export default {
        name: "chart1",
      data(){
          return{
            option:{},
          }
      },
      mounted(){
          this.initCharts()
      },
      methods:{
          initCharts(){
            let option= {
              title: {
                text: '水球图'
              },
              series: [{
                type: 'liquidFill',
                label: {//容器内部字体
                  normal: {
                    textStyle: {
                      fontSize: '70%'
                    }
                  }
                },
                radius: '70%', //半径大小，取值百分比
                backgroundStyle: {//背景
                  borderWidth: 2,
                  borderColor: '#011842',
                  color: '#010b24',
                  opacity:0.9
                },
                outline: {
                  borderDistance: 0,//border向内占据的空间 不是width
                  itemStyle: {
                    borderWidth: 3,
                    // borderColor: '#0f0',border颜色通过判断修改
                    // shadowBlur: 20,//
                    // shadowColor: 'rgba(255, 0, 0, 1)'
                  }
                },
                data: [{
                  value: 0.6,
                  direction: 'left', //水波移动的方向，默认right,top 和bottom时，单条水波静止
                  itemStyle: {
                    normal: { //正常样式
                      color: '#ffff1d',
                      opacity: 0.6
                    }
                  },
                },, {
                  value: 0.5,
                  direction: 'left', //水波移动的方向，默认right,top 和bottom时，单条水波静止
                  itemStyle: {
                    normal: { //正常样式
                      color: '#009AC0',
                      opacity: 0.6
                    }
                  },
                },
                  {
                    value: 0.4,
                    direction: 'top', //水波静止
                    itemStyle: {
                      normal: { //正常样式
                        color: '#00CCBC',
                        opacity: 0.6
                      }
                    },
                  },
                  {
                    value: 0.3,
                    direction: 'left', //水波静止
                    itemStyle: {
                      normal: { //正常样式
                        color: '#60F3AB',
                        opacity: 0.6
                      }
                    },
                  }
                ]
              }]
            }
            this.option=option
            let myCharts =  this.$echarts.init(this.$refs.chart1)
            myCharts.setOption(option)
            window.addEventListener('resize',()=>{myCharts.resize()})

          }
      }
    }
</script>

<style scoped>
  .chart{
    height: 100%;
    width: 100%;
  }
</style>
