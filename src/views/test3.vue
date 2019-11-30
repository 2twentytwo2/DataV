<template>
    <div class="container">
      <div class="title">
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
        <div>

        </div>
      </div>

      <section class="parent">
        <section class="top">
            <div class="component">
              <aside style="width: 20px">
                <div class="preamp" >
                </div>
              </aside>

              <main>
              </main>
            </div>
          <div class="component">
            <aside style="width: 20px">
              <div class="preamp" >

              </div>
            </aside>

            <main>
              <div class="presets">
              </div>
            </main>
          </div>
          </section>
        <section class="top">
          <div class="component">
            <aside style="width: 20px">
              <div class="preamp" >
              </div>
            </aside>

            <main>
            </main>
          </div>
          <div class="component">
            <aside style="width: 20px">
              <div class="preamp" >

              </div>
            </aside>

            <main>
              <div class="presets">
              </div>
            </main>
          </div>
        </section>
      </section>

      <div class="circle">
        <v-chart :options="option1" style="width: 100%;height: 100%"></v-chart>
      </div>
    </div>
</template>

<script>

  import ECharts from "vue-echarts";
    export default {
        name: "test3",
      components: {
        'v-chart': ECharts
      },
      data(){
          return{
            option1: {
              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              color:['#10798f','#0f669b','#32206c'],
              series : [
                {
                  label:{
                    position:'inside',
                    fontSize: 16,
                    formatter: "{b}:\n\n{c}"
                  },
                  name: '奖项类型',
                  type: 'pie',
                  radius : '70%',
                  center: ['50%', '50%'],
                  data:[
                    {value:335, name:'国家级'},
                    {value:310, name:'省级'},
                    {value:234, name:'校级'},
                  ],

                  itemStyle: {
                    emphasis: {
                      shadowBlur: 10,
                      shadowOffsetX: 0,
                      shadowColor: 'rgba(0, 0, 1, 0.5)',
                      fontStyle: 'italic'
                    }
                  }
                }
              ]
            },
          }
      },
    }
</script>

<style scoped>
  .container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #343e59;
  }
  .bacImg{
    height: 100%;
    width:100%;
    position: absolute;
    left: 0;
    bottom: 0;
    opacity:1;
    z-index: 0;
  }
  .title{
    height: 100%;
    width: 10%;
    z-index: 1;
  }
  .parent {
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    z-index: 1;
  }

  section section{
    z-index: 1;
  }
  .top {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: calc(50% - 20px);
    margin-bottom:20px;
  }
  .bottom {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    height: calc(50% - 20px);
    margin-bottom: 20px;
  }
  .top .component
  {
    min-width:calc(50% - 45px);
    height: 90%;
  }
  .bottom .component{
    min-width:calc(25% - 40px);
    height: 90%;
  }
  .component{
    position: relative;
    color: white;
    background-color:#2b2d3e;
    border-radius:10px;
    display: flex;
    flex-direction: row;
    margin: 20px;
  }
  aside{
    position: relative;
    display: block;
    background: #343e59;
    opacity: 0.4;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  main{
    position: relative;
    display: block;
    padding-bottom: 50px;
    width: 100%;
    height: 100%;
  }
  .circle{
    border-radius: 100%;
    background-color: #2b2d3e;
    border: 40px solid  #343e59;
    width: 300px;
    height: 300px;
    position: absolute;
    left: calc(55% - 190px);
    top: calc(50% - 210px);
    z-index: 3;

  }
</style>
