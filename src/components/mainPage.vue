<template>
  <div id="main">
    <img src="../../src/assets/bg1.png" class="bacImage"/>

    <div class="top-title" >

      <img src="../../src/assets/title.png" class="title1" />
      <div class="title2 animated zoomIn" >文体佳绩</div>
    </div>

    <div class="body">
      <div class="level1">
        <!--        ---------------------------这里是第一部分---------------------------------------------------------------->
        <div class="left animated " v-bind:class="{'bounceIn':animate.start,'flip':animate.animate1,'rotateIn':animate.animate2,
        'flipInY':animate.animate4,'flipInX':animate.animate3}">
          <img src="../../src/assets/subtitle.png" class="title3"/>
          <div class="title">{{allTitle.title1}}</div>
          <div class="mainStyle" v-show="showChart.show1">
            <div id="mainChart"></div>
          </div>
          <chart2 v-show="showChart.show5"></chart2>
          <chart5 v-show="showChart.show4" :start="start5"></chart5>
        </div>

        <div class="right ">
          <!----------------------------这里是第二部分---------------------------------------------------------->
          <div class="top animated " v-bind:class="{'zoomIn':animate.start,'flip':animate.animate1}">
            <img src="../../src/assets/subtitle.png" class="title4"/>
            <div class="title">{{allTitle.title2}}</div>

            <div class="mainStyle" v-show="!showChart.show2">
              <div id="chart2"></div>
            </div>
            <chart2  v-show="showChart.show2"></chart2>
          </div>
          <!----------------------------这里是第三部分---------------------------------------------------------->
          <div class="bottom animated" v-bind:class="{'zoomIn':animate.start,'rotateIn':animate.animate2}">
            <img src="../../src/assets/subtitle.png" class="title4"/>
            <div class="title">{{allTitle.title3}}</div>
            <div class="mainStyle" ref="item2" v-show="showChart.show3">
              <div id="chart3"></div>
            </div>
            <chart2  v-show="!showChart.show3"></chart2>
          </div>
        </div>
      </div>
      <div class="level2">
        <!----------------------------这里是第四部分---------------------------------------------------------->
        <div class="left animated" v-bind:class="{'zoomIn':animate.start,'flipInX':animate.animate3}">
          <img src="../../src/assets/subtitle.png" class="title3"/>
          <div class="title">{{allTitle.title4}}</div>
          <div class="mainStyle">
            <div id="chart4"></div>
          </div>
        </div>
        <!----------------------------这里是第五部分---------------------------------------------------------->
        <div class="right animated" v-bind:class="{'zoomIn':animate.start,'flipInY':animate.animate4}">
          <img src="../../src/assets/subtitle.png" class="title4"/>
          <div class="title">{{allTitle.title5}}</div>
          <div class="mainStyle">
            <div id="chart5"></div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import chart2 from "@/components/chart2";
  import chart5 from "@/components/chart5";
  import common from "@/components/common";

  export default {
    name: 'mainPage',
    components:{"chart2":chart2,"chart5":chart5},
    data(){
      return{
        start5:false,
        count:0,
        width:0,
        widthData:200,
        allTitle:{
          title1:"各奖项分布",
          title2:"中南大文艺青年",
          title3:"体测成绩&年级",
          title4:"体测项目对比",
          title5:"偶像排名TOP10"
        },
        showChart:{
          show1:true,
          show2:false,
          show3:true,
          show4:false,
          show5:false
        },
        animate:{
          start:true,
          animate1:false,
          animate2:false,
          animate3:false,
          animate4:false,
          animate5:false
        }
      }
    },
    methods:{
      init(){
        this.animate.start = true;
        this.showChart.show2 = true;
        this.showChart.show3 = true;
        this.showChart.show4 = false;
        this.showChart.show5 = false;
        // window.console.log("myChart1",this.myChart1,common.option1);
        this.myChart1.setOption(common.getOption1(true,true,true),true);
        this.myChart2.setOption(common.getOption1(false,false,true),true);//chart2的内容为第一个图的内容
        this.myChart3.setOption(common.getOption3(this.$echarts),true);//chart3的初始内容
        this.myChart4.setOption(common.option4,true);//chart4的初始内容
        this.myChart5.setOption(common.option5,true);//chart5的初始内容
        this.allTitle.title1 = "各奖项分布";
        this.allTitle.title2 = "中南大文艺青年";
        this.allTitle.title3 = "体测成绩&年级";
        this.allTitle.title4 = "体测项目对比";
        this.allTitle.title5 = "偶像排名TOP10";


        // title4:"",
        // title5:""
      },
      doInterval(){
        this.animate.start = false;
        switch (this.count) {
          case 0:
            //文艺青年
            //设置动画,1和2交换
            this.animate.animate1 = true;
            this.animate.animate2 = false;
            this.animate.animate3 = false;
            this.animate.animate4 =  false;
            window.console.log(this.animate);
            //设置第一张图，显示chart2
            this.allTitle.title1 = this.allTitle.title2;
            this.showChart.show1 = false;
            this.showChart.show5 = true;
            //设置第二张图，显示第一张图的内容
            this.allTitle.title2 = "各奖项分布";
            this.showChart.show2 = false;

            // this.myChart2.resize();
            break;
          case 1:
            //体测&年级 2和3交换
            this.animate.animate2 = true;
            this.animate.animate1 = false;
            this.animate.animate3 = false;
            this.animate.animate4 =  false;
            //设置第一张图
            this.allTitle.title1 = this.allTitle.title3;
            this.showChart.show1 = true;
            this.showChart.show5 = false;
            this.myChart1.setOption(common.getOption3(this.$echarts),true);
            //设置第二张图还原,第二张变成图1
            // this.allTitle.title2 = "中南大文艺青年";
            // this.showChart.show2 = true;
            // //设置第三张图 变成图2
            this.allTitle.title3 = "中南大文艺青年";
            this.showChart.show3 = false;
            // this.myChart3.setOption(common.getOption1(false,false,true),true);
            break;
          case 2:
            // 体测项目 3和4交换
            this.animate.animate3 = true;
            this.animate.animate1 = false;
            this.animate.animate2 = false;
            this.animate.animate4 =  false;
            //设置第一张图，显示第五个的内容
            this.allTitle.title1 = this.allTitle.title4;//体测项目
            this.showChart.show1 = true;
            this.showChart.show4 = false;
            this.myChart1.setOption(common.option4,true);
            //设置第三张图还原
            // this.allTitle.title3 = "体测成绩&年级";
            // this.myChart3.setOption(common.getOption3(this.$echarts));
            // //设置第四张图
            this.allTitle.title4 = "体测成绩&年级";
            this.myChart4.setOption(common.getOption3(this.$echarts));
            break;
          case 3:
            //top10  5和4交换
            this.animate.animate4 = true;
            this.animate.animate1 = false;
            this.animate.animate3 = false;
            this.animate.animate3 =  false;
            //设置第一张图 显示第四个的内容
            this.allTitle.title1 = this.allTitle.title5; //top10
            this.showChart.show1 = false;
            this.showChart.show4 = true;
            this.start5 = true;
            this.myChart1.setOption(common.option4,true);
            //设置第四张图还原
            // this.allTitle.title4 = "体测项目对比";
            // this.myChart4.setOption(common.option4);
            // //设置第四张图
            this.allTitle.title5 = "体测项目对比";
            this.myChart5.setOption(common.option4,true);
            clearInterval(this.timer);
            break;
          case 4:
            //还原所有！
            clearInterval(this.timer);
            this.animate.animate4 = false;
            this.showChart.show1 = true;
            this.showChart.show4 = false;
            // this.showChart.show4 = false;
            // this.init();
            //设置第一张图
            // this.allTitle.title1 = "各奖项分布";
            // this.showChart.show1 = true;
            // this.myChart1.setOption(common.getOption1(true,true,true),true);
            // //设置第五张图还原
            // this.allTitle.title5 = "偶像排名TOP10";
            // this.myChart5.setOption(common.option5,true);
            //设置计数器
            this.count = -1;
            break;
          default:
            break;
        }
        this.count++;
        window.console.log(this.count);
      }
    },
    mounted: function () {
      this.myChart1 = this.$echarts.init(document.getElementById('mainChart'));
      this.myChart2 = this.$echarts.init(document.getElementById('chart2'));//初始化chart2
      this.myChart3 = this.$echarts.init(document.getElementById('chart3'));
      this.myChart4 = this.$echarts.init(document.getElementById('chart4'));
      this.myChart5 = this.$echarts.init(document.getElementById('chart5'));
      this.showChart.show2 = true;
      this.init();
      window.onresize = () => {
        // 基于准备好的dom，初始化echarts实例
        this.myChart1.resize();
        this.myChart2.resize();
        this.myChart3.resize();
        this.myChart4.resize();
        this.myChart5.resize();
      };
      this.timer = setInterval(this.doInterval, 5000);
    }

  }
</script>

<style>
  #main {
    /*background-image:url("/assets/bg.png");*/
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
    width: 100%;
    height: 97vh;
    overflow: hidden;
  }

  .title1{
    width: 100%;
    height: 8%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .bacImage{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -2;
  }

  .top-title{
    width: 100%;
    height: 6%;
    /*padding-bottom: 5px;*/

  }

  .title2{
    height: 100%;
    color: #7cfafc;
    font-size: 30px;
    font-weight: bold;
    line-height: 100%;

  }

  /*.parent{*/
  /*  position: absolute;*/
  /*  width: 63%;*/
  /*}*/
  .title3{
    width: 350px;
    height: 32px;
    position:absolute;
    top: 0;
    left: 50%;
    margin-left: -175px;
    /*z-index: 0;*/
  }
  .title4{
    width: 250px;
    height: 32px;
    position:absolute;
    top: 0;
    left: 50%;
    margin-left: -125px;
    /*z-index: -1;*/
  }


  .title{
    /*margin: 5px;*/
    /*background:-webkit-linear-gradient(to right, rgba(27, 138, 189, 0.6), transparent);*/
    /*background:linear-gradient(to right, rgba(33, 166, 228, 0.6),transparent);*/
    text-align: center;
    position: relative;
    /*z-index: 1;*/
    /*padding-left: 1em*/

  }

  .body{
    width: 100%;
    margin: 0 auto;
    padding: 10px;
    color: white;
    font-size: 20px;
    display: flex;
    /*justify-content:space-between;*/
    flex-direction: column;
    /*flex-wrap: wrap;*/
    height: calc(90%);
  }

  .body .level1{
    display: flex;
    width: 100%;
    height: calc(64%);
    /*justify-content:space-evenly;*/
    margin-bottom: 10px;
    /*z-index: -2;*/
  }

  .body .level2{
    display: flex;
    height: calc(45%);
    /*justify-content:space-evenly;*/
  }



  .body .left{
    width:62%;

    margin-right: 10px;
  }

  .body .level2 .left{
    height: 100%;
  }

  .body .right{
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction:column;
    /*justify-content:space-between;*/
  }

  .body .top{
    width: 100%;
    height: 50%;
    margin-bottom: 10px;
  }
  .body .bottom{
    width: 100%;
    height: 50%;
  }


  .level2 .right{
    /*margin: 1px;*/
  }

  .body .left,.top,.bottom,.level2 .right{
    position: relative;
    padding: 5px;
    /*margin: 2px;*/
    background: rgba(13, 29, 78, 0.3); /*背景透明*/
    /*border: 1px solid white;*/
    border: 1px solid #48bde2; /*边框半透明 */
    border-radius: 10px;
    box-shadow: inset 0 0 10px #48bde2;

  }

  .mainStyle{
    height: 100%;
    width: 100%;
    margin:10px;
  }

  #chart2{
    /*width: 350px;*/
    width: 95%;
    height: 80%;
    /*margin: auto;*/
    /*height: 100px;*/

  }
  #chart3{
    height: 70%;
    width:95%;

  }

  #chart4{
    height: 85%;
    width:95%;

  }

  #chart5{
    margin: 0px;
    height: 100%;
    width:90%;

  }

  #mainChart{
    height: 80%;
    width:95%;
  }

</style>
