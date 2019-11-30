<template>
    <div id="pie" style="width: 100%;height: 100%">

    </div>
</template>

<script>
    export default {
        name: "pie",
      mounted(){
          this.initCharts()
      },
      methods:{
          initCharts(){
            let chart = echarts.init(document.getElementById("pie"))
            let data = [
              {
                name: '积累志愿工时',
                value: 11.1
              },{
                name: '结识更多志愿者',
                value: 13.9
              },{
                name: '体现自我社会价值',
                value: 38.9
              },{
                name: '锻炼自己能力',
                value: 36.1
              }]
            let titleArr= [], seriesArr=[];
            let colors=[['#8b7397', '#e1cbec'],['#ba7985', '#d7b4ba'],['#8b7397', '#e1cbec'],['#ba7985', '#d7b4ba']]
            data.forEach(function(item, index){
              titleArr.push(
                {
                  text:item.name,
                  left: index * 25 + 13 +'%',
                  top: '80%',
                  textAlign: 'center',
                  textStyle: {
                    fontWeight: 'normal',
                    fontSize: '16',
                    color: colors[index][0],
                    textAlign: 'center',
                  },
                }
              );
              seriesArr.push(
                {
                  name: item.name,
                  type: 'pie',
                  clockWise: false,
                  radius: [50, 58],
                  itemStyle:  {
                    normal: {
                      color: colors[index][0],
                      shadowColor: colors[index][0],
                      shadowBlur: 0,
                      label: {
                        show: false
                      },
                      labelLine: {
                        show: false
                      },
                    }
                  },
                  hoverAnimation: false,
                  center: [index * 25 + 13 +'%', '45%'],
                  data: [{
                    value: item.value,
                    label: {
                      normal: {
                        formatter: function(params){
                          return params.value+'%';
                        },
                        position: 'center',
                        show: true,
                        textStyle: {
                          fontSize: '16',
                          fontWeight: 'bold',
                          color: colors[index][0]
                        }
                      }
                    },
                  }, {
                    value: 100-item.value,
                    name: 'invisible',
                    itemStyle: {
                      normal: {
                        color: colors[index][1]
                      },
                      emphasis: {
                        color: colors[index][1]
                      }
                    }
                  }]
                }
              )
            });
            let option = {
              title:titleArr,
              series: seriesArr
            }
            chart.setOption(option)

            window.onresize = ()=>{
              chart.resize();
            }
          }
      }
    }
</script>

<style scoped>

</style>
