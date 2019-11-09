<template>
  <div class="container">
    <section class="parent">
      <section>A</section>
      <section>B</section>
      <section>C</section>
      <section>D</section>
      <section>E</section>
      <section>F</section>
      <section>G</section>
    </section>
  </div>

</template>

<script>

  import api from '@/api/api'
    export default {
        name: "test",
      data(){
          return{
            option:{
              title: {

              },
              tooltip: {},
              xAxis: {
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
              },
              yAxis: {},
              series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }]
            }
          }
      },
      mounted(){
          this.initCharts()
          api.get()
          .then( res => {
            console.log(res);
          })
          .catch( err => {
          })
      },
      methods:{
          initCharts(){
            let myCharts =  this.$echarts.init(this.$refs.main)
            myCharts.setOption(this.option)
            window.addEventListener('resize',()=>{myCharts.resize()})

          }
      }
    }
</script>

<style scoped>
  .container
  {
    width: 100%;
    height:99vh;
    background-color: red;
  }
  section section{
    margin-left: 10px;
    margin-top: 10px;
    text-align: center;
    width: 20%;
    background-color: #dddddd;
    height: 31%;
  }
  .parent{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 100%;
    width: 100%;
  }
  .parent section:nth-child(4){
    height: 98%;
    width: 55%;
  }
</style>
