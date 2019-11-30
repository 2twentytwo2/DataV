<template>
<!--  配色 #014128 #006FAF #009ACO #00CCBC #60F3AB #ffff1d!-->
  <div class="container">

    <img src="../assets/backgrround_blue2.png" class="bacImage"/>

    <div class="title" style="text-align: center ">
      <div style="color: white;margin-top: 20px;font-size: 50px">典赞青春·概览</div>
    </div>

    <section class="parent">

      <section class="item" @click="clickChart('1')"  style="transform:translate(-30%,-32%) scale(0.32)">
        <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>各维度脱单率</div>
        <div  class="main" >
          <div style="width: 99%;height: 100%;">
            <v-chart :options="radarOption1" autoresize style="width: 100%;height: 90%;"></v-chart>
          </div>

          </div>
      </section>

      <section  class="item"  @click="clickChart('2')" style="transform:translate(-30%,2%) scale(0.32)">

        <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>不同年龄获奖人数</div>
        <div  class="main" >
          <div style="width: 99%;height: 100%;">
            <v-chart :options="ageOption" autoresize style="width: 100%;height: 90%;"></v-chart>
          </div>

        </div>

      </section>

      <section  class="item"  @click="clickChart('3')" style="transform:translate(-30%,36%) scale(0.32)">

        <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>各年级维度分数</div>

        <div  class="main" >
          <div style="width: 99%;height: 100%;">
            <v-chart :options="radarOption2" autoresize style="width: 100%;height: 90%;"></v-chart>
          </div>

        </div>

      </section>


      <transition
        enter-active-class="animated flash"
        leave-active-class="animated flash"
      >

        <section v-if="isShow.earth" class="item active"  style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>国外合办高校</div>
        <div class="main">
          <earth style="width: 100%;height: 100%"></earth>

        </div>
      </section>
        <section v-if="isShow.radar1" class="item active"  style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>各维度脱单率</div>
          <div class="main">
            <v-chart autoresize :options="radarCenter" style="width: 100%;height: 100%" ref="radar"></v-chart>

          </div>
        </section>
        <section v-if="isShow.bar" class="item active" style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>不同年龄获奖人数</div>
          <div class="main">
            <v-chart :options="ageCenter" autoresize style="width:100%;height:100%" ref="bar"></v-chart>

          </div>
        </section>

        <section v-if="isShow.radar2" class="item active" style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>各年级维度分数</div>
          <div class="main">
              <div style="width: 100%;height: 100%">
              <v-chart :options="radarCenter2" autoresize style="width: 100%;height: 48%;"></v-chart>
                <v-chart :options="mybar1" autoresize style="width: 34%;height: 45%;float: left"></v-chart>
                <v-chart :options="mybar2" autoresize style="width: 33%;height: 45%;float: left"></v-chart>
                <v-chart :options="mybar3" autoresize style="width: 33%;height: 45%;float: left"></v-chart>
              </div>
              <v-chart :options="proportionCenter"  autoresize style="width: 100%;height: 90%"></v-chart>

          </div>
        </section>

        <section v-if="isShow.pie" class="item active"  style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>男女比例</div>

          <div class="main">
            <v-chart autoresize :options="proportionCenter" style="width: 100%;height: 90%"></v-chart>

          </div>
        </section>

        <section v-if="isShow.nation"  class="item active"   style="transform:translate(21.5%,-12%) scale(0.72)">
          <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 36px;margin-right: 10px"></span>少数民族人数</div>

          <div class="main">

            <v-chart autoresize style="width: 100%;height: 90%" :options="nationCenter" ref="nation"></v-chart>

          </div>
        </section>
      </transition>


      <section class="item"  @click="clickChart('5')"  style="transform:translate(84%,-32%) scale(0.32)">
        <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 34px;margin-right: 10px"></span>男女比例</div>
        <div  class="main" >
        <div style="width: 99%;height: 100%;">
          <v-chart :options="proportion" autoresize style="width: 100%;height: 90%;"></v-chart>
        </div>

      </div>
      </section>

      <section class="item" @click="clickChart('6')"  style="height:215%;transform:translate(84%,-16%) scale(0.32)">
        <div class="subtitle" ><span class="iconfont icondianzan" style="font-size: 34px;margin-right: 10px"></span>少数民族人数</div>

        <div  class="main" >
          <div style="width: 99%;height: 100%;">
            <v-chart :options="nationOption" autoresize style="width: 100%;height: 90%;"></v-chart>
          </div>

        </div>
      </section>


    </section>

    </div>

</template>

<script>
import chart1 from '@/components/chart1'
import chart2 from '@/components/chart2'
import chart3 from '@/components/chart3'
import chart4 from '@/components/chart4'
import chart5 from '@/components/chart5'
  import api from '@/api/api'
    export default {
        name: "test",
      components:{"chart1":chart1,"chart2":chart2,"chart3":chart3,"earth":chart4,"chart5":chart5},
      data() {
        return {
          isShow:{
            earth:true,
            radar1:false,
            radar2:false,
            pie:false,
            bar:false,
            nation:false
          },
          proportionCenter :{
            color: [ 'rgba(8,217,197, 0.9)','rgba(59,153,216,0.9)', '#E099FF'],

            title: [{
              text: '各年级男女获奖对比',
              left: '1%',
              top: '6%',
              textStyle: {
                color: '#fff',
                fontSize:20
              }
            }, {
              text: '男女比概览',
              left: '83%',
              top: '6%',
              textAlign: 'center',
              textStyle: {
                color: '#fff',
                fontSize:20
              }
            }],
            tooltip: {
              trigger: 'axis'
            },
            legend: {
              x: 300,
              top: '7%',
              textStyle: {
                color: '#fff',
                fontSize:20
              },
              data: ['男', '女']
            },
            grid: {
              left: '1%',
              right: '35%',
              top: '16%',
              bottom: '6%',
              containLabel: true
            },
            toolbox: {
              "show": false,
              feature: {
                saveAsImage: {}
              }
            },
            xAxis: {
              type: 'category',
              "axisLine": {
                lineStyle: {
                  color: '#fff'//x轴颜色
                }
              },
              "axisTick": {
                "show": false
              },
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontSize:20
                }
              },

              boundaryGap: false,
              data: [0,'2016级', '2017级', '2018级','']
            },
            yAxis: {
              "axisLine": {
                lineStyle: {
                  color: '#fff'
                }
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#fff'
                }
              },
              "axisTick": {
                "show": false
              },
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  fontSize:20
                }
              },
              type: 'value'
            },
            series: [
              {
                name: '男',
                smooth: true,
                type: 'bar',
                symbol: 'circle',
                symbolSize: 8,
                barMaxWidth: 20,
                barGap:'30%',
                barCategoryGap:'1%',
                left: 'center',
                data: [0,1725, 1670, 1542,0] //2016-2018获奖男生
              },
              {
                name: '女',
                smooth: true,
                type: 'bar',
                symbol: 'circle',
                symbolSize: 8,
                barMaxWidth: 20,
                barGap:'30%',
                barCategoryGap:'1%',
                data: [0,3466, 3374, 3555,0] //2016-2018获奖女生
              },
              {
                type: 'pie',
                center: ['83%', '33%'],
                radius: ['25%', '30%'],
                label: {
                  normal: {
                    position: 'center',
                    fontSize:20
                  }
                },
                data: [
                  {
                  value: 10382,
                  name: '全校男女比',
                  itemStyle: {
                    normal: {
                      color: 'rgba(59,153,216,1)'
                    }
                  },
                  label: {
                    normal: {
                      textStyle: {
                        color: '#fff',
                        fontSize: 20
                      },
                      formatter: '全校男女比'
                    }
                  }
                },

                  {
                  value: 4910,
                  name: '全校男',
                  tooltip: {
                    show: false
                  },
                  itemStyle: {
                    normal: {
                      color: 'rgba(8,217,197, 1)'
                    }
                  },
                  label: {
                    normal: {
                      textStyle: {
                        color: 'rgba(255,255,96,1)',
                        fontSize: 22,
                        fontWeight:'bold'
                      },
                      formatter: '\n\n\n8:17'
                    }
                  }
                }]
              },
              {
                type: 'pie',
                center: ['83%', '72%'],
                radius: ['25%', '30%'],
                label: {
                  normal: {
                    position: 'center'
                  }
                },
                data: [{
                  value: 41,
                  name: '获奖男女比',
                  itemStyle: {
                    normal: {
                      color: 'rgba(59,153,216,1)'
                    }
                  },
                  label: {
                    normal: {
                      formatter: '获奖男女比',
                      textStyle: {
                        color: '#fff',
                        fontSize: 20
                      }
                    }
                  }
                }, {
                  value: 9,
                  name: '获奖男生',
                  tooltip: {
                    show: false
                  },
                  itemStyle: {
                    normal: {
                      color: 'rgba(8,217,197, 1)'
                    }
                  },
                  label: {
                    normal: {
                      textStyle: {
                        color: 'rgba(255,255,96,1)',
                        fontSize: 22,
                        fontWeight:'bold'
                      },
                      formatter: '\n\n\n9:41'
                    }
                  }
                }]
              }
            ]
          },
          proportion:{},
          radarOption2:{},
          radarOption1 :{
            tooltip: {
              trigger: 'axis',
              show: false
            },
            radar: {
              indicator: [{
                name: '学习',
                max: 0.83,
                min:0.72
              },
                {
                  name: '勤工助学',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '社会实践',
                  max: 0.83,
                  min:0.72
                }, {
                  name: '志愿服务',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '科研',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '文体',
                  max: 0.83,
                  min:0.72
                }
              ],
              radius: '70%',
              center: ['50%', '50%'],
              shape: 'circle',
              splitNumber: 4,
              name: {
                textStyle: {
                  color: '#fff',
                  fontSize: 18
                },
                formatter: function(value) {
                  return '{a|' + value + '} '
                },
                lineHeight: 20,
                rich: {
                  a: {
                    fontSize: 35,
                    align: 'center'
                  },
                  b: {
                    fontSize: 12,
                    align: 'left'
                  }
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)'
                  ]
                }
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  // color: [   //此处可以修改圆环的颜色
                  //     '#FFC221', '#6B6EB1',
                  //     '#6B6EB1', '#6B6EB1',
                  //     '#6B6EB1', '#6B6EB1'
                  // ].reverse(),
                  width: 1
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(238,238,238, 0.2)'
                }
              }
            },
            series: [

              {
              name: '信息',
              type: 'radar',
              tooltip: {
                trigger: 'item'
              },
              data: [{
                value: [0.775956284,
                  0.777777778,
                  0.826086957,
                  0.801932367,
                  0.827586207,
                  0.816326531
                ],

              }],
              symbol: 'circle',
              symbolSize: 12,
              itemStyle: {
                normal: {
                  color: 'rgba(5,214,190,0.8)',
                  borderColor: 'rgba(5,214,190,0.2)',
                  borderWidth: 2,
                }
              },
              areaStyle: {
                normal: {
                  color: 'rgba(5,214,190,0.5)',
                }
              },
              lineStyle: {
                normal: {
                  type: "dashed",
                  color: 'rgba(5,214,190,1)',
                  width: 2
                }
              },

            }]


          },
          radarCenter :{

            tooltip: {
              trigger: 'item',
              show: true,
              extraCssText: 'box-shadow: 0 10px 10px rgba(8,217,197, 0.1);',
              position: ['60%', '25%'],
              backgroundColor:'rgba(8,217,197, 0.5)',
              textStyle:{
                fontSize: 20
              },
            },
            grid:{
              top:'55%',
              bottom:'20%',
            },
            xAxis: [{
              type: 'category',
              data: ['文体特长','志愿活动','科研创新','学习优秀','勤工助学','社会实践'],
              nameRotate:40,
              axisLabel:{
                textStyle:{
                  fontSize:20,
                  color:'#fff'
                },
                rotate:40
              },
              axisLine: {
                lineStyle: {
                  color: "#999"
                }
              }
            }],
            yAxis: [{
              type: 'value',
              splitNumber: 4,
              min:0.75,
              splitLine: {
                show: false,
                lineStyle: {
                  type: 'dashed',
                  color: '#DDD'
                }
              },
              axisLabel:{
                show:false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: "#333"
                },
              },
              nameTextStyle: {
                color: "#999"
              },
              splitArea: {
                show: false
              }
            }],
            radar: {
              indicator: [{
                name: '学习优秀',
                max: 0.83,
                min:0.72
              },
                {
                  name: '勤工助学',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '社会实践',
                  max: 0.83,
                  min:0.72
                }, {
                  name: '志愿服务',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '科研创新',
                  max: 0.83,
                  min:0.72
                },
                {
                  name: '文体特长',
                  max: 0.83,
                  min:0.72
                }
              ],
              radius: '30%',
              center: ['30%', '30%'],
              shape: 'circle',
              splitNumber: 4,
              name: {
                textStyle: {
                  color: '#fff',
                  fontSize: 20
                },
                formatter: function(value) {
                  return '' + value + ' '
                },
                lineHeight: 20,
                rich: {
                  a: {
                    fontSize: 20,
                    align: 'center'
                  },
                  b: {
                    fontSize: 12,
                    align: 'left'
                  }
                }
              },
              splitArea: {
                areaStyle: {
                  color: ['rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                    'rgba(255,255,255,0.03)'
                  ]
                }
              },
              splitLine: {
                lineStyle: {
                  type: "dashed",
                  // color: [   //此处可以修改圆环的颜色
                  //     '#FFC221', '#6B6EB1',
                  //     '#6B6EB1', '#6B6EB1',
                  //     '#6B6EB1', '#6B6EB1'
                  // ].reverse(),
                  width: 1
                }
              },
              axisLine: {
                lineStyle: {
                  color: 'rgba(238,238,238, 0.2)'
                }
              }
            },
            series: [
              {
                name: '脱单率',
                type: 'line',
                data: [0.775956284,
                  0.777777778,
                  0.826086957,
                  0.801932367,
                  0.827586207,
                  0.816326531],
                lineStyle: {
                  normal: {
                    width: 5,
                    color: {
                      type: 'linear',

                      colorStops: [{
                        offset: 0,
                        color: 'rgba(59,153,216,1)' // 0% 处的颜色
                      }, {
                        offset: 1,
                        color: 'rgba(8,217,197, 1)' // 100% 处的颜色
                      }],
                      globalCoord: false // 缺省为 false
                    },
                    shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 10,
                    shadowOffsetY: 20
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#fff',
                    borderWidth: 10,
                    /*shadowColor: 'rgba(72,216,191, 0.3)',
                    shadowBlur: 100,*/
                    borderColor: "rgba(8,217,197, 1)"
                  }
                },
                smooth: true
              },
              {
                name: '脱单率',
                type: 'radar',
                data: [{
                  value: [0.775956284,
                    0.777777778,
                    0.826086957,
                    0.801932367,
                    0.827586207,
                    0.816326531
                  ],

                }],
                symbol: 'circle',
                symbolSize: 12,
                itemStyle: {
                  normal: {
                    color: 'rgba(72,216,191, 0.8)',
                    borderColor: 'rgba(72,216,191, 0.3)',
                    borderWidth: 10,
                  }
                },
                areaStyle: {
                  normal: {
                    color: 'rgba(72,216,191, 0.5)',
                  }
                },
                lineStyle: {
                  normal: {
                    type: "dashed",
                    color: 'rgba(72,216,191, 1)',
                    width: 2
                  }
                },

              }]


          },
          radarCenter2:{},
          ageOption:{

            tooltip: {
              trigger: 'axis',
              backgroundColor:'rgba(255,255,255,0.1)',
              axisPointer: {
                type: 'shadow',
                label: {
                  show: true,
                  backgroundColor: '#fff'
                }
              }
            },
            legend: {
              data: ['获奖者人数','占比'],
              textStyle: {
                color: '#fff',
                fontSize:35
              },
              top:'2%',
            },
            grid:{
              x:'11%',
              width:'82%',
              bottom:'10%'
            },
            xAxis: {
              data: ['16','17','18','19','20','21','22','23','24','25','29'],
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
              axisTick:{
                show:false,
              },
              axisLabel:{
                textStyle:{
                  fontSize:30
                }
              }
            },
            yAxis: [{

              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#fff',
                }
              },

              axisLabel:{
                textStyle:{
                  fontSize:30
                }
              }
            },
              {
                min:0,
                max:1,
                splitLine: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#fff',
                  }
                },
                axisLabel:{
                  textStyle:{
                    fontSize:30
                  }
                }
              }],

            series: [{
              name: '占比',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color:'rgba(255,255,22, 1)',
                  borderWidth:3,
                },
              },

              lineStyle:
                {
                  normal:{
                    width:3,
                  },
                },

              data: [0.0002,
                0.0017,
                0.0337,
                0.2592,
                0.3313,
                0.2832,
                0.0771,
                0.0119,
                0.0014,
                0.0002,
                0.02,
              ]
            },

              {
                name: '获奖者人数',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 1, color: 'rgba(5,214,190, 1)'},
                        {offset: 0, color: 'rgb(58,147,210)'}
                      ]
                    )
                  }
                },
                data: [1,
                  11,
                  217,
                  1670,
                  2135,
                  1825,
                  497,
                  77,
                  9,
                  1,
                  1
                ]
              }
            ]
          },
          ageCenter:{

            tooltip: {
              trigger: 'axis',
              backgroundColor:'rgba(58,147,210,0.4)',
              position:['10%','3%'],
              textStyle:{
                fontSize: 20
              },
              axisPointer: {
                type: 'shadow',
                label: {
                  show: true,
                  backgroundColor: '#fff',

                }
              }
            },
            legend: {
              data: ['获奖者人数','占比'],
              textStyle: {
                color: '#fff',
                fontSize:20
              },
              top:'8%',
              right:'10%'
            },
            grid:{
              x:'10%',
              width:'82%',
              top:'15%',
              y:'5%',
              bottom:'20%'
            },
            xAxis: {
              data: ['16岁','17岁','18岁','19岁','20岁','21岁','22岁','23岁','24岁','25岁','29岁'],
              axisLine: {
                lineStyle: {
                  color: '#fff'
                }
              },
              axisTick:{
                show:false,
              },
              axisLabel:{
                textStyle:{
                  fontSize:20
                }
              }
            },
            yAxis: [{

              splitLine: {show: false},
              axisLine: {
                lineStyle: {
                  color: '#fff',
                }
              },

              axisLabel:{
                textStyle:{
                  fontSize:20
                }
              }
            },
              {
                min:0,
                max:1,
                splitLine: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#fff',
                  }
                },
                axisLabel:{
                  textStyle:{
                    fontSize:20
                  }
                }
              }],

            series: [

              {
              name: '占比',
              type: 'line',
              smooth: true,
              showAllSymbol: true,
              symbol: 'emptyCircle',
              symbolSize: 8,
              yAxisIndex: 1,
              itemStyle: {
                normal: {
                  color:'rgba(255,255,22, 1)',}
              },
              data: [0.0002,
                0.0017,
                0.0337,
                0.2592,
                0.3313,
                0.2832,
                0.0771,
                0.0119,
                0.0014,
                0.0002,
                0.02,
              ]
            },

              {
                name: '获奖者人数',
                type: 'bar',
                barWidth: 10,
                itemStyle: {
                  normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 1, color: 'rgba(5,214,190, 1)'},
                        {offset: 0, color: 'rgb(58,147,210)'}
                      ]
                    )
                  }
                },
                data: [1,
                  11,
                  217,
                  1670,
                  2135,
                  1825,
                  497,
                  77,
                  9,
                  1,
                  1
                ]
              }
            ]
          },
          nationOption:{},
          nationCenter:{},
          mybar1:{

            grid: {
              left: '15%',
              top: '0%',
              right: '1%',
              bottom: '18%',
              width:'70%',
              containLabel: true
            },

            xAxis: {
              type: 'value',
              show:false,
              position: 'top',
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              splitLine: {
                show: false
              },
            },
            yAxis: [{
              type: 'category',
              axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

              },
              axisLabel:{
                textStyle:{
                  fontSize:20,
                  color:'#fff'
                },
              },
              "splitLine": { //网格线
                "show": false
              },
              inverse: 'true', //排序
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              data: ['专业技能', '文体特长', '团学工作', '社会实践', '科研创新']
            }

            ],
            series: [
              {
                name: '能耗值',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                      color: 'white', //color of value
                      fontSize:20
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    show: true,
                    color: function(params) {
                      return {
                        type: 'linear',
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(11,42,84,0.3)'
                        }, {
                          offset: 1,
                          color: 'rgba(8,217,197, 1)'
                        }],
                        //globalCoord: false
                      }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                  }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [9.82, 2.22,4.38, 2.01, 3.64]
              }

            ]
          },
          mybar2:{

            grid: {
              left: '15%',
              top: '0%',
              right: '1%',
              bottom: '18%',
              width:'70%',
              containLabel: true
            },

            xAxis: {
              type: 'value',
              show:false,
              position: 'top',
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              splitLine: {
                show: false
              },
            },
            yAxis: [{
              type: 'category',
              axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

              },
              "splitLine": { //网格线
                "show": false
              },
              axisLabel:{
                textStyle:{
                  fontSize:20,
                  color:'#fff'
                },
              },
              inverse: 'true', //排序
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              data: []
            }

            ],
            series: [
              {
                name: '能耗值',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                      color: 'white',


                      fontSize:20//color of value
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    show: true,
                    color: function(params) {
                      return {
                        type: 'linear',
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(11,42,84,0.3)'
                        }, {
                          offset: 1,
                          color: 'rgba(255,255,96,1)'
                        }],
                        //globalCoord: false
                      }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                  }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [11.5, 3.38,7.06, 1.77, 2.39]
              }

            ]
          },
          mybar3:{

            grid: {
              left: '15%',
              top: '0%',
              right: '1%',
              bottom: '18%',
              width:'70%',
              containLabel: true
            },

            xAxis: {
              type: 'value',
              show:false,
              position: 'top',
              axisTick: {
                show: false
              },
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              splitLine: {
                show: false
              },
            },
            yAxis: [{
              type: 'category',
              axisTick: {
                show: false,
                alignWithLabel: false,
                length: 5,

              },
              "splitLine": { //网格线
                "show": false
              },
              inverse: 'true', //排序
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#fff',
                }
              },
              axisLabel:{
                textStyle:{
                  fontSize:20,
                  color:'#fff'
                },
              },
              data: []
            }

            ],
            series: [
              {
                name: '能耗值',
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}',
                    textStyle: {
                      color: 'white',
                      fontSize:20//color of value
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    show: true,
                    color: function(params) {
                      return {
                        type: 'linear',
                        colorStops: [{
                          offset: 0,
                          color: 'rgba(11,42,84,0.3)'
                        }, {
                          offset: 1,
                          color: 'rgba(59,153,216,1)'
                        }],
                        //globalCoord: false
                      }
                    },
                    barBorderRadius: 70,
                    borderWidth: 0,
                    borderColor: '#333',
                  }
                },
                barGap: '0%',
                barCategoryGap: '50%',
                data: [1.71, 2.94,5.64, 0.69, 2.12]
              }

            ]
          },
          index:1
        }
      },
      mounted() {


        this.initRadar2()
        this.initProportion()
        this.initNationOption()

        let firstInterval = setInterval(()=>{
          if(this.index === 1)
          {
            this.isShow.earth = false

          }
          else if(this.index === 2)
          {
            this.isShow.radar1 = false

          }
          else if(this.index === 3)
          {
            this.isShow.bar = false

          }
          else if(this.index === 4)
          {
            this.isShow.radar2 = false

          }
          else if(this.index === 5)
          {
            this.isShow.pie = false
            clearInterval(firstInterval)
          }




        },12000)

        let secondInterval = setInterval(()=> {

          if(this.index === 1)
          {

            this.index ++
            this.isShow.radar1 = true
            this.initRadarCenter()
          }
          else if(this.index === 2)
          {

            this.index ++

            this.isShow.bar = true
            this.initAgeCenter()
          }
          else if(this.index === 3)
          {
            this.index ++
            this.isShow.radar2 = true
            this.initRadarCenter2()

          }
          else if(this.index === 4)
          {
            this.isShow.pie = true
            this.initProportionCenter()
            this.index ++
          }
          else if(this.index === 5)
          {
            this.isShow.nation = true
            this.initNationCenter()
            clearInterval(secondInterval)
          }
        },12200)



        this._initt()
      },
      methods: {
        _resize() {
          this.$root.charts.forEach((myChart) => {
            myChart.resize()
          })
        },
        _initt() {
          this.items = document.querySelectorAll('.parent .item')
          for (let i = 0; i < this.items.length; i++) {
            this.items[i].dataset.order = i + 1;
          }
        },
        initProportion(){
          this.proportion = {
            backgroundColor: "#03141c",
            title: {
              show:false,
              text: "8：17",
              subtext: '全校男女比',
              x: 'center',
              y: 'center',
              textStyle: {
                color: "#fff",
                fontSize: 35,
                fontWeight: 'normal'
              },
              subtextStyle: {
                color: "rgba(255,255,255,.45)",
                fontSize: 14,
                fontWeight: 'normal'
              }
            },
            tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x: 'center',
              y: 'bottom',
              data: ['rose3', 'rose5', 'rose6', 'rose7', 'rose8']
            },
            calculable: true,
            series: [
              {
                name: '男女比',
                type: 'pie',
                radius: [90, 110],
                center: ['30%', '50%'],
                data: [{
                  value: 10382,
                  name: '女生',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 1,
                      color: 'rgba(0,226,225, 0.8)'
                    }, {
                      offset: 0,
                      color: 'rgba(0,226,225, 1)'
                    }])
                  },
                  label: {
                    color: "rgba(255,255,255,.45)",
                    fontSize: 30,
                    formatter: '{a|全校男女比}\n\n{a|8：17}',
                    position: 'center',
                    rich: {
                      a: {
                        color: "#fff",
                        fontSize: 30,
                        lineHeight: 30
                      },
                    }
                  }
                },
                  {
                    value: 4910,
                    name: '男生',
                    itemStyle: {
                      color: "transparent"
                    },
                    label: {
                      show: false
                    }
                  }
                ]
              },
              {
                name: '男女比',
                type: 'pie',
                radius: [90, 110],
                center: ['30%', '50%'],
                data: [{
                  value: 10382,
                  name: '女生',
                  itemStyle: {
                    color: "transparent"
                  }
                },
                  {
                    value: 4910,
                    name: '男生',
                    itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(59,153,216,1)'
                      }, {
                        offset: 1,
                        color: 'rgba(59,153,216,0.8)'
                      }])
                    },
                    label: {
                      position: 'center',
                      color: "rgba(255,255,255,.45)",
                      fontSize: 14,
                      formatter: '', //男生\n{a|4910}个
                      rich: {
                        a: {
                          color: "#fff",
                          fontSize: 30,
                          lineHeight: 30
                        },
                      }
                    }
                  }
                ]
              },
              {
                name: '男女比',
                type: 'pie',
                radius: [90, 110],
                center: ['70%', '50%'],
                data: [{
                  value: 41,
                  name: '女生',
                  itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                      offset: 1,
                      color: 'rgba(0,226,225, 0.8)'
                    }, {
                      offset: 0,
                      color: 'rgba(0,226,225, 1)'
                    }])
                  },
                  label: {
                    color: "rgba(255,255,255,.45)",
                    position:'center',
                    fontSize: 30,
                    formatter: '{a|获奖男女比\n\n9：41}',
                    rich: {
                      a: {
                        color: "#fff",
                        fontSize: 30,
                        lineHeight: 30
                      },
                    }
                  }
                },
                  {
                    value: 9,
                    name: '男生',
                    itemStyle: {
                      color: "transparent"
                    }
                  }
                ]
              },
              {
                name: '男女比',
                type: 'pie',
                radius: [90, 110],
                center: ['70%', '50%'],
                data: [{
                  value: 41,
                  name: '女生',
                  itemStyle: {
                    color: "transparent"
                  }
                },
                  {
                    value: 9,
                    name: '男生',
                    itemStyle: {
                      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                        offset: 0,
                        color: 'rgba(59,153,216,1)'
                      }, {
                        offset: 1,
                        color: 'rgba(59,153,216,0.8)'
                      }])
                    },
                    label: {
                      position:'center',
                      color: "rgba(255,255,255,.45)",
                      fontSize: 30,
                      formatter: '',//男生\n{a|4910}个
                      rich: {
                        a: {
                          color: "#fff",
                          fontSize: 30,
                          lineHeight: 30
                        },
                      }
                    }
                  }
                ]
              },
            ]
          };
        },
        initProportionCenter(){

        },
        // clickChart(clickIndex) {
        //   console.log(clickIndex)
        //   let activeItem = document.querySelector('.parent .active')
        //   let activeIndex = activeItem.dataset.order
        //   let clickItem = this.items[clickIndex - 1]
        //   if (activeIndex === clickIndex) {
        //     return
        //   }
        //   activeItem.classList.remove('active')
        //   clickItem.classList.add('active')
        //   this._setStyle(clickItem, activeItem)
        // },

        initRadarCenter(){
          let currentIndex = -1;
          setInterval(()=> {
            let dataLen = this.radarCenter.series[0].data.length;
            // 取消之前高亮的图形
            console.log(dataLen)
            this.$refs.radar.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
            // 高亮当前图形
            this.$refs.radar.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            // 显示 tooltip
            this.$refs.radar.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: currentIndex
            })
          }, 1200);

        },
        initNationOption(){
          // let url1=require('../assets/人物1.png')
          let url2=require('../assets/人物2.png')
          let url3=require('../assets/人物3.png')
          let url4=require('../assets/人物4.png')
          // let url5=require('../assets/人物5.png')
          let url6=require('../assets/人物6.png')
          let url7=require('../assets/人物7.png')
          let url8=require('../assets/人物8.png')

          var spirit1 = 'image://'
          this.nationOption= {
            "grid": {
              "left": "20%",
              "top": "10%",
              "bottom": 10
            },
            "tooltip": {
              "trigger": "item",
              "textStyle": {
                "fontSize": 40
              },
              "formatter": "{b0}:{c0}"
            },
            "xAxis": {
              "max": 160,
              "splitLine": {
                "show": false
              },
              "axisLine": {
                "show": false
              },
              "axisLabel": {
                "show": false
              },
              "axisTick": {
                "show": false
              }
            },
            "yAxis": [
              {
                "type": "category",
                "inverse": true,
                "data": [
                  '土家族',
                  '壮族',
                  '回族',
                  '苗族',
                  '满族',
                  '蒙古族',
                  '瑶族',
                  '维吾尔族',
                  '侗族',
                  '彝族',

                ],
                "axisLine": {
                  "show": false
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "margin": -4,
                  "textStyle": {
                    "color": "#fff",
                    "fontSize":35
                  }
                }
              },

            ],
            "series": [
              {
                tooltip:{
                  show:false
                },
                z:4,
                "type": "pictorialBar",
                "color":"#fff",
                "symbolRepeat": "fixed",
                "symbolMargin": "2%",
                "symbolClip": true,
                "symbolSize": 50,
                "symbolPosition": "start",
                "symbolOffset": [
                  20,
                  0
                ],
                "symbolBoundingData": 300,
                "data": [
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  }

                ],
              },
              {
                "type": "pictorialBar",
                "color":"#fff",
                "symbolRepeat": "fixed",
                "symbolMargin": "2%",
                "symbolClip": true,
                "symbolSize": 50,
                "symbolPosition": "start",
                "symbolOffset": [
                  20,
                  0
                ],
                "symbolBoundingData": 300,
                z:6,

                "data": [
                  {
                    value:156,
                    symbol:spirit1+url4
                  },
                  {
                    value:94,
                    symbol:spirit1+url2
                  },
                  {
                    value:52,
                    symbol:spirit1+url3
                  },
                  {
                    value:39,
                    symbol:spirit1+url4
                  },
                  {
                    value:34,
                    symbol:spirit1+url2
                  },
                  {
                    value:30,
                    symbol:spirit1+url3
                  },
                  {
                    value:18,
                    symbol:spirit1+url4
                  },
                  {
                    value:17,
                    symbol:spirit1+url2
                  },
                  {
                    value:15,
                    symbol:spirit1+url3
                  },
                  {
                    value:12,
                    symbol:spirit1+url4
                  }
                ],
              },

            ]
          };
        },
        initAgeCenter(){
          let currentIndex=-1
          setInterval(()=> {
            let dataLen = this.ageCenter.series[0].data.length;
            // 取消之前高亮的图形
            console.log(dataLen)
            this.$refs.bar.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
            // 高亮当前图形
            this.$refs.bar.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            // 显示 tooltip
            this.$refs.bar.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: currentIndex
            })
          }, 800);
        },
        initNationCenter(){
          let url2=require('../assets/人物2.png')
          let url3=require('../assets/人物3.png')
          let url4=require('../assets/人物4.png')
          // let url5=require('../assets/人物5.png')
          let url6=require('../assets/人物6.png')
          let url7=require('../assets/人物7.png')
          let url8=require('../assets/人物8.png')

          var spirit1 = 'image://'
          this.nationCenter= {
            "grid": {
              "left": "17%",
              "top": "5%",
              "bottom": 10
            },
            "tooltip": {
              "trigger": "item",
              "textStyle": {
                "fontSize": 20
              },
              backgroundColor:'rgba(59,153,216,0.6)',
              "formatter": "{b0}:{c0}人",
              extraCssText: 'box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);',
            },
            "xAxis": {
              "max": 160,
              "splitLine": {
                "show": false
              },
              "axisLine": {
                "show": false
              },
              "axisLabel": {
                "show": false
              },
              "axisTick": {
                "show": false
              }
            },
            "yAxis": [
              {
                "type": "category",
                "inverse": true,
                "data": [
                  '土家族',
                  '壮族',
                  '回族',
                  '苗族',
                  '满族',
                  '蒙古族',
                  '瑶族',
                  '维吾尔族',
                  '侗族',
                  '彝族',
                ],
                "axisLine": {
                  "show": false
                },
                "axisTick": {
                  "show": false
                },
                "axisLabel": {
                  "margin": -4,
                  "textStyle": {
                    "color": "#fff",
                    "fontSize":20
                  }
                }
              },

            ],
            series: [
              {
                tooltip:{
                  show:false
                },


                z:4,
                "type": "pictorialBar",
                "color":"#fff",
                "symbolRepeat": "fixed",
                "symbolMargin": "1%",
                "symbolClip": true,
                "symbolSize": 25,
                "symbolPosition": "start",
                "symbolOffset": [
                  20,
                  0
                ],
                "symbolBoundingData": 300,
                "data": [
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  },
                  {
                    value:160,
                    symbol:spirit1+url6
                  },
                  {
                    value:160,
                    symbol:spirit1+url7
                  },
                  {
                    value:160,
                    symbol:spirit1+url8
                  }

                ],
              },
              {
                "type": "pictorialBar",
                "color":"#fff",
                "symbolRepeat": "fixed",
                "symbolMargin": "1%",
                "symbolClip": true,
                "symbolSize": 25,
                "symbolPosition": "start",
                "symbolOffset": [
                  20,
                  0
                ],
                label: {
                  normal: {
                    show: true,
                    position: 'right',
                    formatter: '{c}人',
                    textStyle: {
                      color: 'white' //color of value
                    }
                  }},
                "symbolBoundingData": 300,
                z:6,

                data: [
                  {
                    value:156,
                    symbol:spirit1+url4
                  },
                  {
                    value:94,
                    symbol:spirit1+url2
                  },
                  {
                    value:52,
                    symbol:spirit1+url3
                  },
                  {
                    value:39,
                    symbol:spirit1+url4
                  },
                  {
                    value:34,
                    symbol:spirit1+url2
                  },
                  {
                    value:30,
                    symbol:spirit1+url3
                  },
                  {
                    value:18,
                    symbol:spirit1+url4
                  },
                  {
                    value:17,
                    symbol:spirit1+url2
                  },
                  {
                    value:15,
                    symbol:spirit1+url3
                  },
                  {
                    value:12,
                    symbol:spirit1+url4
                  }
                ],
              },

            ]
          };
          let currentIndex = -1;
          setInterval(()=> {
            let dataLen = this.nationCenter.series[1].data.length;
            // 取消之前高亮的图形
            console.log(dataLen)
            this.$refs.nation.dispatchAction({
              type: 'downplay',
              seriesIndex: 1,
              dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
            // 高亮当前图形
            this.$refs.nation.dispatchAction({
              type: 'highlight',
              seriesIndex: 1,
              dataIndex: currentIndex
            });
            // 显示 tooltip
            this.$refs.nation.dispatchAction({
              type: 'showTip',
              seriesIndex: 1,
              dataIndex: currentIndex
            })
          }, 1200);
        },
        initRadar2(){
          var data_year_rang = ["2016级", "2017级", "2018级"]
          var data_dd = [
            {
            'dim_year':2016,
            'radar_indicator': [{
              name: '科研创新',
              max: 4
            }, {
              name: '专业技能',
              max: 12
            }, {
              name: '文体特长',
              max: 4
            }, {
              name: '团学工作',
              max: 7.5
            }, {
              name: '社会实践',
              max: 2.5
            }],
            'trade_range': [3.64, 9.82, 2.22, 4.38, 2.01]
          },
            {
              'dim_year':2017,
              'radar_indicator': [{
                name: '科研创新',
                max: 4
              }, {
                name: '专业技能',
                max: 12
              }, {
                name: '文体特长',
                max: 4
              }, {
                name: '团学工作',
                max: 7.5
              }, {
                name: '社会实践',
                max: 2.5
              }],
              'trade_range': [2.39,11.50,3.38,7.06,1.77]
            },
            {
              'dim_year':2018,
              'radar_indicator': [{
                name: '科研创新',
                max: 4
              }, {
                name: '专业技能',
                max: 12
              }, {
                name: '文体特长',
                max: 4
              }, {
                name: '团学工作',
                max: 7.5
              }, {
                name: '社会实践',
                max: 2.5
              }],
              'trade_range': [0.35,1.71,3.18,5.38,0.69]
            },
            {
              'dim_year':2019.4,
              'radar_indicator': [{
                name: '产品设计',
                max: 100
              }, {
                name: '项目管理',
                max: 100
              }, {
                name: '数据分析',
                max: 100
              }, {
                name: '抗压能力',
                max: 100
              }, {
                name: '执行能力',
                max: 100
              }, {
                name: '技术知识',
                max: 100
              }, {
                name: '沟通能力',
                max: 100
              }],
              'trade_range': [80, 70, 75, 75, 80, 65,80]
            }
          ]

          this.radarOption2 = {
            tooltip: {},
            baseOption: {
              title: {
                textStyle: {
                  color: '#fff'
                }
              },
              timeline: {
                show: false,
                // y: 0,
                axisType: 'category',
                // realtime: false,
                // loop: false,
                autoPlay: true,
                // currentIndex: 2,
                playInterval: 4000,
                bottom:"1%",

                data: data_year_rang,
                label: {
                  normal: {
                    color: '#fff',
                    interval: 0,
                    fontSize: 30,
                    padding: [0, 0, -50, 0],
                    lineHeight: 100
                  },
                }
              },
              tooltip: {},
              color: ['rgba(8,217,197, 1)','rgba(255,255,96,1)','rgba(59,153,216,1)'],
              legend: {
                z:20,
                orient: "vartical",
                // x: "right",
                icon:'roundRect',
                itemGap: 30,
                top: "3%",
                left: "3%",
                textStyle: {
                  color: '#fff',
                  fontSize: 25,
                  fontWeight: 'bold'
                },},
              data: ['2016级', '2017级', '2018级'],


              series: [
                {
                name: '2016级',
                type: 'radar',

              },
                {
                  name: '2017级',
                  type: 'radar',

                },
                {
                  name: '2018级',
                  type: 'radar',

                }]
            },
            options: [
              {
              radar: {
                center:['50%','55%'],
                name: {
                  textStyle: {
                    color: '#fff',
                    fontSize: 20
                  },
                  formatter: function(value) {
                    return '{a|' + value + '} '
                  },
                  lineHeight: 20,
                  rich: {
                    a: {
                      fontSize: 35,
                      align: 'center'
                    },
                    b: {
                      fontSize: 12,
                      align: 'left'
                    }
                  }
                },
                splitArea: {
                  areaStyle: {
                    color: ['rgba(255,255,255,0.1)',
                      'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                      'rgba(255,255,255,0.03)'
                    ]
                  }
                },
                splitLine: {
                  lineStyle: {
                    type: "dashed",
                    // color: [   //此处可以修改圆环的颜色
                    //     '#FFC221', '#6B6EB1',
                    //     '#6B6EB1', '#6B6EB1',
                    //     '#6B6EB1', '#6B6EB1'
                    // ].reverse(),
                    width: 2
                  }
                },
                axisLine: {
                  lineStyle: {
                    color: 'rgba(5,214,190, 0.3)'
                  }
                },
                splitNumber: 6,
                // shape: 'circle',
                indicator: data_dd[0].radar_indicator
              },
              series: [{
                lineStyle: {
                  normal: {
                    type: "dashed",
                    color: 'rgba(5,214,190, 0.5)',
                    width: 2
                  }
                },
                data: [{
                  symbol: 'circle',
                  symbolSize: 12,
                  value: data_dd[0].trade_range,
                  itemStyle: {
                    normal: {
                      color: 'rgba(5,214,190,0.8)',
                      borderColor: 'rgba(5,214,190,0.2)',
                      borderWidth: 2,
                    }
                  },
                  areaStyle: {
                    normal: {
                      color: 'rgba(5,214,190,0.5)',
                    }
                  },
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(5,214,190,1)',
                      width: 2
                    }
                  },
                }]
              }]
            },

              {
                radar: {
                  name: {
                    textStyle: {
                      color: '#fff',
                      fontSize: 40
                    },
                    formatter: function(value) {
                      return '{a|' + value + '} '
                    },
                    lineHeight: 20,
                    rich: {
                      a: {
                        fontSize: 35,
                        align: 'center'
                      },
                      b: {
                        fontSize: 12,
                        align: 'left'
                      }
                    }
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                      ]
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      // color: [   //此处可以修改圆环的颜色
                      //     '#FFC221', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1'
                      // ].reverse(),
                      width: 1
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(238,238,238, 0.2)'
                    }
                  },
                  splitNumber: 6,
                  // shape: 'circle',
                  indicator: data_dd[1].radar_indicator
                },
                series: [{
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(255,255,96, 0.5)',
                      width: 2
                    }
                  },
                  data: [{
                    symbol: 'circle',
                    symbolSize: 12,
                    value: data_dd[1].trade_range,
                    itemStyle: {
                      color: 'rgba(255,255,96,0.8)',
                      borderColor: 'rgba(255,255,96,0.2)'
                    },
                    areaStyle: {
                      normal: {
                        color: 'rgba(255,255,96,0.5)',
                      }
                    },
                  }]
                }]
              },
              {
                radar: {
                  name: {
                    textStyle: {
                      color: '#fff',
                      fontSize: 40
                    },
                    formatter: function(value) {
                      return '{a|' + value + '} '
                    },
                    lineHeight: 20,
                    rich: {
                      a: {
                        fontSize: 35,
                        align: 'center'
                      },
                      b: {
                        fontSize: 12,
                        align: 'left'
                      }
                    }
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                      ]
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      // color: [   //此处可以修改圆环的颜色
                      //     '#FFC221', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1'
                      // ].reverse(),
                      width: 1
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(238,238,238, 0.2)'
                    }
                  },
                  splitNumber: 6,
                  // shape: 'circle',
                  indicator: data_dd[2].radar_indicator
                },
                series: [{
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(59,153,216, 1)',
                      width: 2
                    }
                  },
                  data: [{
                    symbol: 'circle',
                    symbolSize: 12,
                    value: data_dd[2].trade_range,
                    itemStyle: {
                      color: 'rgba(59,153,216,0.8)',
                      borderColor: 'rgba(59,153,216,0.2)'
                    },
                    areaStyle: {
                      normal: {
                        color: 'rgba(59,153,216,0.5)',
                      }
                    },
                  }]
                }]
              }


            ]
          }
        },


        initRadarCenter2(){
          var data_year_rang = ["2016级", "2017级", "2018级"]
          var data_dd = [
            {
              'dim_year':2016,
              'radar_indicator': [{
                name: '科研创新',
                max: 4
              }, {
                name: '专业技能',
                max: 12
              }, {
                name: '文体特长',
                max: 4
              }, {
                name: '团学工作',
                max: 7.5
              }, {
                name: '社会实践',
                max: 2.5
              }],
              'trade_range': [3.64, 9.82, 2.22, 4.38, 2.01]
            },
            {
              'dim_year':2017,
              'radar_indicator': [{
                name: '科研创新',
                max: 4
              }, {
                name: '专业技能',
                max: 12
              }, {
                name: '文体特长',
                max: 4
              }, {
                name: '团学工作',
                max: 7.5
              }, {
                name: '社会实践',
                max: 2.5
              }],
              'trade_range': [2.39,11.50,3.38,7.06,1.77]
            },
            {
              'dim_year':2018,
              'radar_indicator': [{
                name: '科研创新',
                max: 4
              }, {
                name: '专业技能',
                max: 12
              }, {
                name: '文体特长',
                max: 4
              }, {
                name: '团学工作',
                max: 7.5
              }, {
                name: '社会实践',
                max: 2.5
              }],
              'trade_range': [0.35,1.71,3.18,5.38,0.69]
            },
            {
              'dim_year':2019.4,
              'radar_indicator': [{
                name: '产品设计',
                max: 100
              }, {
                name: '项目管理',
                max: 100
              }, {
                name: '数据分析',
                max: 100
              }, {
                name: '抗压能力',
                max: 100
              }, {
                name: '执行能力',
                max: 100
              }, {
                name: '技术知识',
                max: 100
              }, {
                name: '沟通能力',
                max: 100
              }],
              'trade_range': [80, 70, 75, 75, 80, 65,80]
            }
          ]
          var colorArray1 = [
            {
              top: 'rgba(10,214,243,1)', //黄
              bottom: 'rgba(11,42,84,.3)'
            },

            {
              top: 'rgba(10,214,243,1)', //粉
              bottom: 'rgba(11,42,84,.3)'
            },
            {
              top: 'rgba(10,214,243,1)', //蓝
              bottom: 'rgba(11,42,84,0.3)'
            }, {
              top: 'rgba(10,214,243,1)', //深蓝
              bottom: 'rgba(11,42,84,0.3)'
            },
            {
              top: 'rgba(10,214,243,1)', //绿
              bottom: 'rgba(11,42,84,0.3)'
            }
          ]
          this.radarCenter2 = {
            baseOption: {
              grid:{
                width:'100%',
                height:'100%'
              },
              timeline: {

                show: false,

                autoPlay: true,
                // currentIndex: 2,
                playInterval: 4000,
                data: data_year_rang,
              },
              color: ['rgba(8,217,197,0.6)','rgba(255,255,96,1)','rgba(59,153,216,1)'],
              tooltip: {},
              legend: {
                orient: "vartical",
                // x: "right",
                icon:'roundRect',
                itemGap: 30,
                top: "30%",
                left: "10%",
                textStyle: {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 'bold'
                },

                data: ['2016级', '2017级', '2018级']
              },
              series: [
                {
                  name: '2016级',
                  type: 'radar',

                },
                {
                  name: '2017级',
                    type: 'radar',
                },
                {
                  name: '2018级',
                    type: 'radar',
                },



                ]
            },
            options: [
              {
                radar: {
                  radius: '60%',
                  center: ['55%', '50%'],
                  name: {
                    textStyle: {
                      color: '#FFF',
                      fontSize: 20
                    },
                    formatter: function(value) {
                      return '{a|' + value + '} '
                    },
                    lineHeight: 20,
                    rich: {
                      a: {
                        fontSize: 20,
                        align: 'center'
                      },
                      b: {
                        fontSize: 12,
                        align: 'left'
                      }
                    }
                  },
                  areaStyle: {
                    color: 'rgba(8,217,197, 0.5)',
                    normal: {
                      shadowBlur: 13,
                      shadowColor: 'rgba(0,0,0,0)',
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
                      opacity: 1,

                    }
                  },
                  itemStyle: {
                    color: 'rgba(8,217,197, 0.5)',
                    borderColor: 'rgba(8,217,197, 0.5)'
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                      ]
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      // color: [   //此处可以修改圆环的颜色
                      //     '#FFC221', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1'
                      // ].reverse(),
                      width: 1
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(238,238,238, 0.2)'
                    }
                  },
                  splitNumber: 6,
                  // shape: 'circle',
                  indicator: data_dd[0].radar_indicator
                },
                series: [
                  {
                    type:'radar',
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(8,217,197, 1)',
                      width: 2
                    }
                  },
                  data: [{
                    value: data_dd[0].trade_range,
                    areaStyle: {
                      color:'rgba(10,214,243,0.5)',
                      normal: {
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 1
                      }
                    },
                  }]
                }
                ]
              },

              {
                radar: {
                  name: {
                    textStyle: {
                      color: '#fff',
                      fontSize: 40
                    },
                    formatter: function(value) {
                      return '{a|' + value + '} '
                    },
                    lineHeight: 20,
                    rich: {
                      a: {
                        fontSize: 20,
                        align: 'center'
                      },
                      b: {
                        fontSize: 12,
                        align: 'left'
                      }
                    }
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                      ]
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      // color: [   //此处可以修改圆环的颜色
                      //     '#FFC221', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1'
                      // ].reverse(),
                      width: 1
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(238,238,238, 0.2)'
                    }
                  },
                  splitNumber: 6,
                  // shape: 'circle',
                  indicator: data_dd[1].radar_indicator
                },
                series: [{
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(255,255,96,1)',
                      width: 2
                    }
                  },
                  data: [{
                    value: data_dd[1].trade_range,
                    areaStyle: {

                      normal: {
                        color:'rgba(255,255,96,0.5)',
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 1
                      }
                    },

                  }]
                }]
              },
              {
                radar: {
                  name: {
                    textStyle: {
                      color: '#fff',
                      fontSize: 30
                    },
                    formatter: function(value) {
                      return '{a|' + value + '} '
                    },
                    lineHeight: 20,
                    rich: {
                      a: {
                        fontSize: 20,
                        align: 'center'
                      },
                      b: {
                        fontSize: 12,
                        align: 'left'
                      }
                    }
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)', 'rgba(255,255,255,0.1)',
                        'rgba(255,255,255,0.03)'
                      ]
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      type: "dashed",
                      // color: [   //此处可以修改圆环的颜色
                      //     '#FFC221', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1',
                      //     '#6B6EB1', '#6B6EB1'
                      // ].reverse(),
                      width: 1
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(238,238,238, 0.2)'
                    }
                  },
                  splitNumber: 6,
                  // shape: 'circle',
                  indicator: data_dd[2].radar_indicator
                },
                series: [{
                  lineStyle: {
                    normal: {
                      type: "dashed",
                      color: 'rgba(59,153,216,1)',
                      width: 2
                    }
                  },
                  data: [{
                    areaStyle: {

                      normal: {
                        color:'rgba(59,153,216,0.5)',
                        shadowBlur: 13,
                        shadowColor: 'rgba(0,0,0,0)',
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        opacity: 1
                      }
                    },
                    value: data_dd[2].trade_range,

                  }]
                }]
              },



            ]
          }
        },
        _setStyle(el1, el2) {
          let transform1 = el1.style.transform
          let transform2 = el2.style.transform
          el1.style.transform = transform2
          el2.style.transform = transform1
        }
      }
    }
</script>

<style scoped>
  .container
  {
    width: 100%;
    height:96vh;
    font-family: ch;
    font-color:white;
  }
  .title{
    width: 100%;
    height: 9%;
  }
  .subtitle{
    font-size: 45px;
    color:#fff;
    margin-left: 20px;
    margin-top: 10px;
  }
  section{
    z-index: 1;
  }

  .item{
    font-size: 60px;
    height: 105%;
    width: 65%;
    background-color: rgba(102,102,102,0.1);
    border-radius: 15px;
    box-shadow: 0px 20px 40px rgba(0,0,0,.5),0px -2px 40px rgba(0,0,0,.3);
    position:absolute;
    transition:transform 0s;

  }
  .parent{
    position:relative;
    height: calc(85% - 20px);
    width: 100%;
  }
  .active{
    height: 145%;
    width: 70%;
    font-size: 50px;
  }
  .main{
    height: 100%;
    width: 100%;
  }
  .bacImage{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
  }


</style>
