<template>
  <div ref="chart2" style="width: 100%;height: 100%;">
  </div>
</template>

<script>
    export default {
        name: "chart2",
      data(){
          return{
          }
      },
      mounted(){
        this.initCharts()
      },
      methods:{
        initCharts() {
          let myCharts =  this.$echarts.init(this.$refs.chart2)
          let option = {
            //从右上角开始的扇形颜色
            color: ["#fff", "#ffff1e", "#009AC0", "#00CCBC", "#60F3AB", "#00ccff"],
            grid: {
              left: -100,
              top: 50,
              bottom: 10,
              right: 10,
              containLabel: true
            },
            tooltip: {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)",
              position:['50%', '70%'],
              confine:false
            },
            legend: {
              type: "scroll",
              orient: "vartical",
              // x: "right",
              top: "center",
              left: "15",
              // bottom: "0%",
              itemWidth: 16,
              itemHeight: 8,
              itemGap: 16,
              textStyle: {
                color: '#A3E2F4',
                fontSize: 12,
                fontWeight: 0
              },
              data: ['IDS', 'VPN', '交换机', '防火墙', 'WAF', '堡垒机']
            },
            polar: {},
            angleAxis: {
              interval: 1,
              type: 'category',
              data: [],
              z: 10,
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#0B4A6B",
                  width: 1,
                  type: "solid"
                },
              },
              axisLabel: {
                interval: 0,
                show: true,
                color: "#0B4A6B",
                margin: 8,
                fontSize: 16
              },
            },
            radiusAxis: {
              min: 40,
              max: 120,
              interval: 20,
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#0B3E5E",
                  width: 1,
                  type: "solid"
                },
              },
              axisLabel: {
                formatter: '{value} %',
                show: false,
                padding: [0, 0, 20, 0],
                color: "#0B3E5E",
                fontSize: 16
              },
              splitLine: {
                lineStyle: {
                  color: "#0B3E5E",
                  width: 2,
                  type: "solid"
                }
              }
            },
            calculable: true,
            series: [

              {
              stack: 'a',
              type: 'pie',
              radius: ['20%', '80%'],
              roseType: 'area',
              zlevel:10,
              label: {
                normal: {
                  show: true,
                  formatter: "{c}",
                  textStyle: {
                    fontSize: 12,
                  },
                  position: 'outside'
                },
                emphasis: {
                  show: true
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 20,
                  length2: 55
                },
                emphasis: {
                  show: false
                }
              },
              data: [{
                value: 10,
                name: 'IDS'
              },
                {
                  value: 5,
                  name: 'VPN'
                },
                {
                  value: 15,
                  name: '交换机'
                },
                {
                  value: 25,
                  name: '防火墙'
                },
                {
                  value: 20,
                  name: 'WAF'
                },
                {
                  value: 35,
                  name: '堡垒机'
                }
              ]
            }
            ]
          }
          myCharts.setOption(option)
          window.addEventListener('resize',()=>{myCharts.resize()})
          let currentIndex = -1;
          setInterval(()=> {
            let dataLen = option.series[0].data.length;
            // 取消之前高亮的图形
            console.log(dataLen)
            myCharts.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
            // 高亮当前图形
            myCharts.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            // 显示 tooltip
            myCharts.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: currentIndex
            })
          }, 800);

        }
      }
    }
</script>

<style scoped>

</style>
