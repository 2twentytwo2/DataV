<template>
    <div ref="box" id="box" style="width: 500px;height: 500px"></div>
</template>

<script>
    export default {
        name: "testbar",
      data(){
          return{
            data:[6,2,7,4,9,6,7,3,9,10,4,12]
          }
      },
      methods:{
          initCharts(){
            let myChart = echarts.init(document.getElementById('box'))
            let data = this.data
            let option = {
              xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                type: 'value'
              },
              series: [{
                data: [],
                type: 'bar'
              }]
            }
            setInterval(() =>{
              let choose = data.slice(0,7)
              let start = data[0]
              let end = data.slice(1)
              data = end.concat(start)
              option.series[0].data=choose
              console.log(option.series.data);
              myChart.setOption(option)
            } , 400)

          }
      },
      mounted() {
          this.initCharts()
      }
    }
</script>

<style scoped>

</style>
