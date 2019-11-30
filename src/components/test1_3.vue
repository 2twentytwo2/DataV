<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">科研项目中使用最多的模型</div>
    </div>
    <DIV style="width: 100%;height: 90%">
      <div style="width: 45%;height: 90%;margin-left: 7%;margin-right: 2%;margin-top: 3%;float: left">
        <!--    <h3 style="color: white;text-align: center">科研项目中使用最多的模型</h3>-->
        <table cellspacing="15px" border="0">
          <tr>
            <td><DIV style="background-color: #0de6f9;width: 20px;height: 20px"></DIV></td>
            <td style="font-size: 12px;border-left: 0">logistics回归</td>
          </tr>
          <tr>
            <td><DIV style="background-color: #039efc;width: 20px;height: 20px"></DIV></td>
            <td style="font-size: 12px;border-left: 0">AHP层次分析模型</td>
          </tr>
          <tr>
            <td><DIV style="background-color: #5b69fe;width: 20px;height: 20px"></DIV></td>
            <td style="font-size: 12px;border-left: 0">结构方程模型</td>
          </tr>
          <tr>
            <td><DIV style="background-color: #00e6a3;width: 20px;height: 20px"></DIV></td>
            <td style="font-size: 12px;border-left: 0">FAHP模型</td>
          </tr>
          <tr>
            <td><DIV style="background-color: #efc04e;width: 20px;height: 20px"></DIV></td>
            <td style="font-size: 12px;border-left: 0">模糊综合评价模型</td>
          </tr>
        </table>
      </div>
      <div id="chart3" style="height: 100%;display: inline-block;width: 40%"></div>
    </DIV>

  </div>

</template>

<script>
    export default {
        name: 'test1_3',
      methods:{
          initChart(){
            let myChart = echarts.init(document.getElementById('chart3'))
            let option = {
              series: [
                {
                  center:['50%','45%'],
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  color:['#0de6f9','#039efc','#5b69fe','#00e6a3','#efc04e'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: true,
                      textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                      }
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:220, name:'logistics回归'},
                    {value:150, name:'AHP层次分析模型'},
                    {value:100, name:'结构方程模型'},
                    {value:60, name:'FAHP模型'},
                    {value:60, name:'模糊综合评价模型'}
                  ]
                }
              ]
            };
            myChart.setOption(option);
            window.addEventListener('resize',()=>{myChart.resize()})
          }
      },
      mounted() {
        this.initChart()
      }
    }
</script>

<style scoped>
  table{
    width: 80%;
  }
  td{
    margin: 0;
    padding: 0;
    color: white;
    text-align: center;
  }
</style>
