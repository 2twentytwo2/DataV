<template>
    <div class="container">
      <div class="title">

        <div style="width: 22.7%;height: 100%;color:#e1cbec;text-align:center;margin-top:15px;font-size: 52px;font-weight: bold">志愿活动</div>
        <div  style="width: 20%;height: 40%;display: flex;flex-direction: row;flex-wrap: wrap;margin-top:20px">
          <div style="margin-top:15px;width: 5px;height: 100%;background-color: #635a68">
          </div>
          <div style="width: calc(60% - 5px);height: 100%">
            <div style="width: 100%;height: 100%;color:#e1cbec;text-align:center;margin-top:18px;font-size: 20px">志愿者总数</div>
          </div>
          <div style="width: 40%;height: 100%;color:#5dcacd ;margin-top:12px;font-size: 28px;font-weight: bold">1026人</div>
        </div>
        <div  style="width: 20%;height: 40%;display: flex;flex-direction: row;flex-wrap: wrap;margin-top:20px">
          <div style="margin-top:15px;width: 5px;height: 100%;background-color: #635a68">
          </div>
          <div style="width: calc(60% - 5px);height: 100%">
            <div style="width: 100%;height: 100%;color:#e1cbec;text-align:center;margin-top:18px;font-size: 20px">星级志愿者总数</div>
          </div>
          <div style="width: 40%;height: 100%;color:#5dcacd ;margin-top:12px;font-size: 28px;font-weight: bold">1026人</div>
        </div>
        <div  style="width: 25%;height: 40%;display: flex;flex-direction: row;flex-wrap: wrap;margin-top:20px">
          <div style="margin-top:15px;width: 5px;height: 100%;background-color: #635a68">
          </div>
          <div style="width: calc(55% - 5px);height: 100%">
            <div style="width: 100%;height: 100%;color:#e1cbec;text-align:center;margin-top:18px;font-size: 20px">星级志愿者总工时</div>
          </div>
          <div style="width: 45%;height: 100%;color:#5dcacd;margin-top:12px;font-size: 28px;font-weight: bold">248922.55时</div>
        </div>
      </div>
      <img src="../assets/未标题.gif" style="opacity:0.5" class="bac"/>
  <section class="parent">

    <section class="right" style="height: 40%">
      <div style="width: 5px;height: 100%;background-color: #635a68">
      </div>

      <div style="width: calc(100% - 9px);height: 100%">
        <DIV class="subtitle">星级志愿者分布</DIV>
        <div style="width: 100%;height: 92%">
          <DIV style="width: 100%;height: 50%;display: flex;flex-direction: column;flex-wrap: wrap;margin-top: 5%">
            <v-chart style="width: 45%;height: 100%":options="optionOnePie"> </v-chart>
            <apexchart style="margin-top:10%;width: 40%;height: 80%" type=line :options="chartOptionsSparkLine" :series="seriesSpark1"></apexchart>
          </DIV>

          <table style="border-color:white;border:1px solid white;width: 100%;height: 35%;text-align: center">

            <tr >
              <td style="width: 5px"><div style="margin-left:20px;margin-right:10px;background-color:#8b7397;width: 10px;height: 10px"></div></td>
              <td style="color:#fff;font-size: 12px;text-align: left">一星志愿者</td>

              <td style="color: #fff;font-size: 12px;font-weight: bold" >835人</td>
              <td style="color: #5dcacd;font-size: 12px;font-weight: bold" >81.38%</td>
            </tr>
            <tr >
              <td style="width: 5px"><div style="margin-left:20px;background-color:#ba7985;width: 10px;height: 10px"></div></td>
              <td style="color:#fff;font-size: 12px;text-align: left">二星志愿者</td>

              <td style="color: #fff;font-size: 12px;font-weight: bold" >186人</td>
              <td style="color: #5dcacd;font-size: 12px;font-weight: bold" >18.13%</td>
            </tr>
            <tr >
              <td style="width: 5px"><div style="margin-left:20px;background-color:#d7b4ba;width: 10px;height: 10px"></div></td>
              <td style="color:#fff;font-size: 12px;text-align: left">三星志愿者</td>

              <td style="color: #fff;font-size: 12px;font-weight: bold" >2人</td>
              <td style="color: #5dcacd;font-size: 12px;font-weight: bold" >0.19%</td>
            </tr>
            <tr >
              <td style="width: 5px"><div style="margin-left:20px;background-color:#e1cbec;width: 10px;height: 10px"></div></td>
              <td style="color:#fff;font-size: 12px;text-align: left">五星志愿者</td>

              <td style="color: #fff;font-size: 12px;font-weight: bold" >3人</td>
              <td style="color: #5dcacd;font-size: 12px;font-weight: bold" >0.30%</td>
            </tr>
          </table>
        </div>

      </div>


      <div style="width: 4px;height: 100%">
        <img src="../assets/bian.gif" height="100%" width="100%"/>
      </div>

    </section>

    <section class="right" style="height: 54%">

      <div style="width: 5px;height: 100%;background-color: #635a68"></div>

      <div style="width: calc(100% - 9px);height: 100%">

        <div class="subtitle">志愿服务关键词</div>
        <word-cloud style="width: 100%;height: 92%"></word-cloud>

      </div>

      <div style="width: 4px;height: 100%">
        <img src="../assets/bian.gif" height="100%" width="100%"/>
      </div>

    </section>

    <transition
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut" >
      <section class="center"  v-if="isShow.center" style="height: 60%" >
        <div style="width: 5px;height: 100%;background-color: #635a68">
        </div>
        <div style="width: calc(100% - 9px);height: 100%">
          <DIV class="subtitle">工时累计</DIV>
          <v-chart :options="optionCenter" autoresize style="width: 100%;height: 92%" ref="center"></v-chart>
        </div>
        <div style="width: 4px;height: 100%">
          <img src="../assets/bian.gif" height="100%" width="100%"/>
        </div>

      </section >
      <section class="center"  v-if="isShow.leftOne" style="height: 60%">

        <div style="width: 5px;height: 100%;background-color: #635a68">
        </div>
        <div style="width: calc(100% - 9px);height: 100%">
          <DIV class="subtitle">星级志愿者分布</DIV>
          <v-chart :options="optionOfLeftOne" autoresize style="width: 100%;height: 92%"></v-chart>
        </div>
        <div style="width: 4px;height: 100%">
          <img src="../assets/bian.gif" height="100%" width="100%"/>
        </div>

      </section >
      <section class="center" v-if="isShow.map" style="height: 60%">

        <div style="width: 5px;height: 100%;background-color: #635a68">
        </div>
        <div style="width: calc(100% - 9px);height: 100%">
          <DIV class="subtitle">志愿地点分布</DIV>
          <v-chart :options="optionMap" autoresize style="width: 100%;height: 92%"></v-chart>
        </div>
        <div style="width: 4px;height: 100%">
          <img src="../assets/bian.gif" height="100%" width="100%"/>
        </div>

      </section >
      <section class="center" v-if="isShow.word" style="height: 60%">

        <div style="width: 5px;height: 100%;background-color: #635a68">
        </div>
        <div style="width: calc(55% - 9px);height: 100%">
          <DIV class="subtitle">志愿活动关键词</DIV>
          <div style="width: 100%;height: 92% " id="word"></div>
          <!--        <v-chart :options="wordOption" autoresize style="width: 100%;height: 92%"></v-chart>-->
        </div>
        <v-chart :options="wordBar" autoresize style="width: 45%;height: 92%;margin-top: 5%"></v-chart>
        <div style="width: 4px;height: 100%">
          <img src="../assets/bian.gif" height="100%" width="100%"/>
        </div>

      </section >
      <section class="center" v-if="isShow.bar" style="height: 60%">

        <div style="width: 5px;height: 100%;background-color: #635a68">
        </div>
        <div style="width: calc(100% - 9px);height: 100%">
          <DIV class="subtitle">志愿活动类型占比分布</DIV>
          <v-chart :options="barOption" autoresize style="width: 100%;height: 92%"></v-chart>
        </div>
        <div style="width: 4px;height: 100%">
          <img src="../assets/bian.gif" height="100%" width="100%"/>
        </div>

      </section >
    </transition>

    <section class="center" style="height: 34%">
      <div style="width: 5px;height: 100%;background-color: #635a68">
      </div>
      <div style="width: calc(100% - 9px);height: 100%">
        <div class="subtitle">志愿服务目的</div>
        <pie style="height: 92%;width: 100%"></pie>
      </div>


      <div style="width: 4px;height: 100%">
        <img src="../assets/bian.gif" height="100%" width="100%"/>
      </div>

    </section>

    <section class="right" style="height: 47%">
      <div style="width: 5px;height: 100%;background-color: #635a68">
      </div>

      <div style="width: calc(100% - 9px);height: 100%">
        <DIV class="subtitle">标题</DIV>
        <testmap style="height: 92%;width: 100%"></testmap>
      </div>


      <div style="width: 4px;height: 100%">
        <img src="../assets/bian.gif" height="100%" width="100%"/>
      </div>

    </section>

    <section class="right" style="height: 47%">

      <div style="width: 5px;height: 100%;background-color: #635a68"></div>

      <div style="width: calc(100% - 9px);height: 100%">

        <div class="subtitle">标题</div>
        <v-chart :options="barOption2" autoresize style="width: 100%;height: 92%"></v-chart>

      </div>

      <div style="width: 4px;height: 100%">
        <img src="../assets/bian.gif" height="100%" width="100%"/>
      </div>

    </section>

  </section>
    </div>
</template>

<script>
  import chart2 from "@/components/chart7"
  import testmap from "@/components/testmap"
  import pie from "@/components/pie"
  import xbar from "@/components/xbar"
  import xbar2 from "@/components/xbar2"
  import xbar3 from "@/components/xbar3"
  import wordCloud from "@/components/wordCloud"

    export default {

    components:{"chart2":chart2,"testmap":testmap,"pie":pie,"xbar":xbar,"xbar2":xbar2,"xbar3":xbar3,"wordCloud":wordCloud},
        name: "test",
      data(){
          return{
            barOption:{},
            barOption2:{

              grid: [{
                left: '5%',
                right: '7%',
                bottom: '7%',
                top: '10%',
                height:'86%',
                containLabel: true
              }
              ],
              xAxis: [{
                gridIndex:0,
                show: false,
              },
                {
                  gridIndex:0,
                  show: false,
                },

              ],
              yAxis: {
                type: 'category',
                inverse: true,
                show: false
              },

              series: [

                //亮色条 百分比
                {
                  show: true,
                  type: 'bar',
                  barGap: '-100%',
                  barWidth: '15%',
                  z: 2,
                  itemStyle: {
                    normal: {
                      color: function(params) {
                        let myColor = ['#ba7985', '#d7b4ba',  '#8b7397','#e1cbec'];
                        let num = myColor.length;
                        return myColor[params.dataIndex % num]
                      }
                    }
                  },
                  label: {
                    normal: {
                      show: true,
                      textStyle: {
                        color: '#fff',
                        fontSize: 10,
                        fontWeight: 'bold'
                      },
                      position: 'right',
                      formatter: function(data) {
                        let chartData=[282,270,253,189,50,47,43,34,23,13]
                        return chartData[data.dataIndex] ;
                      }
                    }
                  },
                  data: [282,270,253,189,50,47,43,34,23,13],
                },
                //年份
                {
                  show: true,
                  type: 'bar',
                  xAxisIndex: 1, //代表使用第二个X轴刻度
                  barGap: '-100%',
                  barWidth: '15%',
                  itemStyle: {
                    normal: {
                      barBorderRadius: 200,
                      color: 'transparent'
                    }
                  },
                  label: {
                    normal: {
                      show: true,
                      position: [0, '-10'],
                      textStyle: {
                        fontSize:10,
                        color: '#fff',
                      },
                      formatter: function(data) {
                        let chartName=['助老助残', '社区服务', '文化建设','大型活动', '实践培训','社会管理', '生态建设','医疗健康','关爱乡村青少年','环境保护',]
                        return chartName[data.dataIndex];
                      }
                    }
                  },
                  data: [282,270,253,189,50,47,43,34,23,13]
                },

              ]
            },
            url: require("../assets/cy.png"),
            wordOption:{},
            wordBar:{
              grid:{
                x:'27%',
                top:'10%',

              },
              xAxis: {
                show: false
              },
              yAxis:{
                type: 'category',
                inverse: true,
                nameGap: 16,
                axisLine: {
                  show: false,
                  lineStyle: {
                    color: '#ddd'
                  }
                },
                axisTick: {
                  show: false,
                  lineStyle: {
                    color: '#ddd'
                  }
                },
                axisLabel: {
                  interval: 0,
                  margin: 85,

                  textStyle: {
                    color: '#fff',
                    align: 'left',
                    fontSize: 14
                  },
                  rich: {
                    a: {
                      color: '#fff',
                      backgroundColor: '#ba7985',
                      width: 20,
                      height: 20,
                      align: 'center',
                      borderRadius: 2,
                      margin:50
                    },
                    b: {
                      color: '#fff',
                      backgroundColor: '#8b7397',
                      width: 20,
                      height: 20,
                      align: 'center',
                      borderRadius: 2,
                      margin:50
                    }
                  },
                  formatter: function(params) {
                    if(parseInt(params.slice(0, 2))<=3){
                      return [
                        '{a|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + params.slice(2)
                      ].join('\n')
                    }else{
                      return [
                        '{b|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + params.slice(2)
                      ].join('\n')}
                  }
                },
                data: ['1 活动 ','2 志愿',
                  '3 服务',
                  '4 社区',
                  '5 志愿者',
                  '6 爱心',
                  '7 校园',
                  '8 中南',
                  '9 课堂',
                  '10文化',

                ]
              },
              series:[{
                name: '词频排名',
                type: 'bar',
                barMaxWidth: 10,
                barGap: 0,
                itemStyle:{
                  color:'#5dcacd'
                },
                data:[
                  458,241,140,138,86,58,57,53,47,45
                ]
              }]
            },
            optionMap: {
            grid:{
              x:'73%',
              top:'10%',
              width:'15%',
              height:'80%'
            },
            tooltip: {
              trigger: 'item',
                formatter: function (params) {
                return params.name + ' : ' + params.value;
              }
            },
            xAxis: {
                show: false
            },
            yAxis:{
              type: 'category',
              inverse: true,
              nameGap: 16,
              axisLine: {
                show: false,
                lineStyle: {
                  color: '#ddd'
                }
              },
              axisTick: {
                show: false,
                lineStyle: {
                  color: '#ddd'
                }
              },
              axisLabel: {
                interval: 0,
                margin: 210,

                textStyle: {
                  color: '#fff',
                  align: 'left',
                  fontSize: 14
                },
                rich: {
                  a: {
                    color: '#fff',
                    backgroundColor: '#ba7985',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2,
                    margin:50
                  },
                  b: {
                    color: '#fff',
                    backgroundColor: '#8b7397',
                    width: 20,
                    height: 20,
                    align: 'center',
                    borderRadius: 2,
                    margin:50
                  }
                },
                formatter: function(params) {
                  if(parseInt(params.slice(0, 2))<=3){
                  return [
                    '{a|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + params.slice(2)
                  ].join('\n')
                  }else{
                  return [
                    '{b|' + (parseInt(params.slice(0, 2))) + '}' + '  ' + params.slice(2)
                  ].join('\n')}

                }
              },
              data: ['1 中南财经政法大学南湖校区 ','2 中南财经政法大学首义校区',
                '3 武汉科技馆新馆',
                '4 武昌区江零社区',
                '5 湖北省武汉市洪山区',
                '6 鲁广社区',
                '7 硚口区韩家墩街阳光家园',
                '8 起义门社区',
                '9武汉市第三医院',
                '10 武昌区水果湖放鹰台社区',

              ]
            },
            geo:{
              viewControl:{
                projection:'perspective',
                  autoRotate:true,
                  autoRotateDirection:'cw',
                  autoRotateAfterStill: 10,
                  distance: 150,
              },
               roam:true,
                name: 'wuhanMap', // 系列名称
                map: '武汉',
                zoom:0.9,
                bottom:0,
                left:0,
                width:'48%',
                height:'100%',
                emphasis:{

              },

              label: {
                show: true,
                textStyle: {
                  color: '#fff', //地图初始化区域字体颜色
                  fontSize: 12,
                  opacity: 1,
                  backgroundColor: 'rgba(0,0,0,0)'
                  //backgroundColor: 'rgba(53,171,199,0)'
                },
              },
              itemStyle: {
                normal: {
                  borderColor: '#8b7397',
                  borderWidth: 2,
                  areaColor: {
                    type: 'radial',
                    x: 0.5,
                    y: 0.5,
                    r: 0.8,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: 'rgba(139, 115, 151, 0)' // 100% 处的颜色
                    }],
                    globalCoord: false // 缺省为 false
                  },
                  shadowColor: 'rgba(184, 155, 199, 0)',
                  // shadowColor: 'rgba(255, 255, 255, 1)',
                  shadowOffsetX: -2,
                  shadowOffsetY: 2,
                  shadowBlur: 10
                },
                emphasis: {
                  areaColor: '#8b7397',
                  borderWidth: 2
                }
              },
            },
            series: [
              {
                name: '点',
                type: 'scatter',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: function (val) {
                  let num = val[2] / 2;
                  if(num < 20){
                    return 10
                  }else{
                    return 20;
                  }
                },
                label: {
                  normal: {
                    show: false,
                    formatter: function(params) {
                      return params.value[2];
                    },
                    textStyle: {
                      color: '#fff',
                      fontSize: 19,
                    }
                  },

                },
                itemStyle: {
                  normal: {
                    color: '#5dcacd', //标志颜色
                  }
                },
                data: [
                  {
                    name:"武汉科技馆新馆",
                    value:[114.14708897008657,30.6313997,9]
                  },
                  {
                    name:"湖北省武汉市武昌区江零社区",
                    value:[114.31766263388212,30.54090208917682,9]
                  },
                  {
                    name:"湖北省武汉市洪山区",
                    value:[114.35045554601551,30.50633395680806,7]
                  },
                  {
                    name:"鲁广社区",
                    value:[114.40187563137326,30.510066264909216,7]
                  },
                  {
                    name:"湖北省武汉市硚口区四新社区韩家墩街阳光家园",
                    value:[114.22044926922001,30.593541654414636,7]
                  },
                  {
                    name:"起义门社区",
                    value:[114.31390996261419,30.531348902742053,6]
                  },
                  {
                    name:"湖北省武汉市洪山区",
                    value:[114.30965900127987,30.546402925290018,5]
                  },
                  {
                    name:"武汉市武昌区水果湖放鹰台社区",
                    value:[114.35364039837059,30.554345862053843,5]
                  }
                  ]
              },
              {
                name: 'Top 5',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: [
                  {
                    name:"中南财经政法大学南湖校区",
                    value:[114.400212,30.481757,399]
                  },
                  {
                    name:"中南财经政法大学首义校区",
                    value:[114.31932036687023,30.5390737985983,106]
                  }
                ],
                showEffectOn: 'render',
                rippleEffect: {
                  brushType: 'stroke'
                },
                hoverAnimation: true,
                label: {
                  textStyle:{
                    fontWeight:'bold',
                  },
                  normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true,
                    fontWeight:'bold',
                    fontSize:13
                  }
                },
                itemStyle: {
                  normal: {
                    color: '#d7b4ba',
                    shadowBlur: 10,
                    shadowColor: '#05C3F9'
                  }
                },
                zlevel: 1
              },
              {
                name: '星级志愿者人数排名',
                title:'星级志愿者人数排名',
                type: 'bar',
                barMaxWidth: 10,
                barGap: 0,
                itemStyle:{
                  color:'#5dcacd'
                },
                data:[
                  399,106,59,59,57,57,57,56,55,55
                ]
              }
            ]
            },
            mwtime:{
              '中韩新媒体学院':
                {'女': 202.45125000000002, '男': 224.725},
              '会计学院':
                {'女': 198.43823529411765, '男': 124.71199999999999},
              '信息与安全工程学院':
                {'女': 192.09314285714285, '男': 199.05933333333334},
              '公共管理学院':
                {'女': 181.16953124999998, '男': 181.59357142857147},
              '刑事司法学院':
                {'女': 140.8161538461538, '男': 184.81685714285715},
              '哲学院':
                {'女': 195.2272222222222, '男': 153.896},
              '外国语学院':
                {'女': 201.99533333333332, '男': 421.17},
              '工商管理学院':
                {'女': 217.64, '男': 226.6557692307692},
              '文澜学院':
                {'女': 152.65461538461537, '男': 115.05},
              '新闻与文化传播学院':
                {'女': 215.6125, '男': 213.78875},
              '法学院':
                {'女': 173.0492024539877, '男': 184.39129032258063},
              '经济学院':
                {'女': 128.45885714285714, '男': 176.8011111111111},
              '统计与数学学院':
                {'女': 177.2743137254902, '男': 98.85333333333334},
              '财政税务学院':
                {'女': 204.88837209302326, '男': 198.2428571428571},
              '金融学院':
                {'女': 163.2296052631579, '男': 162.55571428571426}
            },
            totaltime: {
          '中韩新媒体学院': 209.87583333333336,
          '会计学院': 193.38849315068495,
          '信息与安全工程学院': 194.183,
          '公共管理学院': 181.245641025641,
          '刑事司法学院': 172.9,
          '哲学院': 180.46607142857144,
          '外国语学院': 206.76,
          '工商管理学院': 218.86088541666666,
          '文澜学院': 149.96857142857144,
          '新闻与文化传播学院': 215.2809090909091,
          '法学院': 174.86159793814434,
          '经济学院': 138.34704545454545,
          '统计与数学学院': 172.91759259259257,
          '财政税务学院': 203.958,
          '金融学院': 163.08371134020618
        },
            optionOfLeftOne:{
              tooltip: {
                trigger: 'axis',
                extraCssText: 'box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);',
                position: ['70%', 10],
                backgroundColor:'rgba(132,123,154,0.8)',
                textStyle:{
                  fontSize: 16
                },
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                  }
                }
              },
              legend: {
                top:'5%',
                data: ['学院星级志愿者总人数','男星级志愿者人数', '女星级志愿者人数'],
                textStyle: {
                  color: '#fff',
                  fontSize: 16
                },
              },
              grid:[
                {
                x:'10%',
                x2:'50%',
                width:'65%',
                top:'15%',
                bottom:'5%',
                height:'80%'
              },
                {
                  x:'82%',
                  top:'20%',
                  width:'40%',
                  height:'30%'
                },
                {
                  x:'82%',
                  top:'15%',
                  width:'15%',
                  height:'30%'
                },
                {
                  x:'82%',
                  bottom:'5%',
                  width:'15%',
                  height:'40%'
                }
              ],
              xAxis: [
                {
                gridIndex: 0,
                data: [],
                nameRotate:40,
                axisLabel: {
                  textStyle: {
                    color:'#fff'
                  },
                  interval: 0,
                  rotate:40
                },
                axisLine: {
                  lineStyle: {
                    color: '#B4B4B4'
                  }
                },
                axisTick:{
                  show:false,
                },
              },{
                gridIndex:2,
                show: false
              },
                {
                  gridIndex:3,
                  show: false
                }],
              yAxis: [
                {
                gridIndex:0,
                min:0,
                max:280,
                axisLabel: {
                  textStyle: {
                    color:'#fff'
                  }
                },
                splitLine: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#fff',
                  }
                },

                axisLabel:{
                  formatter:'{value} ',
                }
              },
                {
                  gridIndex:0,
                  min:0,
                  max:280,
                  show:false,
                  axisLabel: {
                    textStyle: {
                      color:'#fff'
                    }
                  },
                  splitLine: {show: false},
                  axisLine: {
                    lineStyle: {
                      color: '#fff',
                    }
                  },
                  axisLabel:{
                    formatter:'{value} ',
                  }
                },
                {
                  gridIndex:2,
                  type: 'category',
                  inverse: true,
                  nameGap: 16,
                  axisLine: {
                    show: false,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisTick: {
                    show: false,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisLabel: {
                    interval: 0,
                    margin: 30,
                    textStyle: {
                      color: '#fff',
                      align: 'left',
                      fontSize: 14
                    },
                    rich: {
                      a: {
                        color: '#fff',
                        backgroundColor: '#ba7985',
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 2
                      }
                    },
                    formatter: function(params) {

                        return [
                          '{a|' + (parseInt(params.slice(0, 1))) + '}' + '  ' + params.slice(1)
                        ].join('\n')

                    }
                  },
                  data: ['1工商管理学院 267人','2法学院 228人','3会计学院 103人']
                },
                {
                  gridIndex:3,
                  type: 'category',
                  inverse: true,
                  nameGap: 16,
                  axisLine: {
                    show: false,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisTick: {
                    show: false,
                    lineStyle: {
                      color: '#ddd'
                    }
                  },
                  axisLabel: {
                    interval: 0,
                    margin: 30,
                    textStyle: {
                      color: '#fff',
                      align: 'left',
                      fontSize: 14
                    },
                    rich: {
                      a: {
                        color: '#fff',
                        backgroundColor: '#8b7397',
                        width: 20,
                        height: 20,
                        align: 'center',
                        borderRadius: 2
                      }
                    },
                    formatter: function(params) {

                      return [
                        '{a|' + (parseInt(params.slice(0, 1))) + '}' + '  ' + params.slice(1)
                      ].join('\n')

                    }
                  },
                  data: ['1一星志愿者 835人','2二星志愿者 186人','3三星志愿者  2人','3四星志愿者  3人']
                }
              ],

              series: [

                {
                name: '学院星级志愿者总人数',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 8,
                yAxisIndex: 1,
                itemStyle: {
                  normal: {
                    color:'#5dcacd'},
                },
                data: []
              },

                {
                  name: '男星级志愿者人数',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                    normal: {
                      barBorderRadius: 2,
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#8b7397'},
                          {offset: 1, color: '#ba7985'}

                        ]
                      )
                    }
                  },
                  data: []
                },

                {
                  name: '女星级志愿者人数',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                    normal: {
                      barBorderRadius: 2,
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#d7b4ba'},
                          {offset: 1, color: '#e1cbec'},
                        ]
                      )
                    }
                  },
                  z: -12,

                  data: []
                },
                {
                  name:'星级志愿者分布',
                  type:'pie',
                  color:["#8b7397",'#d7b4ba','#ba7985','#e1cbec'],
                  radius:' 25%',
                  center: ['57%', '40%'],
                  avoidLabelOverlap: false,
                  label: {
                    fontWeight: 'bold'
                  },

                  data:[
                    {value:835, name:'一星志愿者'},
                    {value:186, name:'二星志愿者'},
                    {value:32, name:'三星志愿者'},

                    {value:33, name:'五星志愿者'},

                  ]
                },
                {
                  name: '学院星级志愿者人数排名',

                  title:'学院星级志愿者人数排名',
                  type: 'bar',
                  xAxisIndex: 1,
                  yAxisIndex: 2,
                  barMaxWidth: 10,
                  barGap: 0,
                },
                {
                  name: '星级志愿者人数排名',

                  title:'星级志愿者人数排名',
                  type: 'bar',
                  xAxisIndex: 1,
                  yAxisIndex: 2,
                  barMaxWidth: 10,
                  barGap: 0,
                }
              ]

            },
            chartOptionsSparkLine: {

              fill: {
                type: 'gradient',
                gradient: {
                  shade: 'dark',
                  gradientToColors: [ '#8b7397'],
                  shadeIntensity: 1,
                  type: 'horizontal',
                  opacityFrom: 1,
                  opacityTo: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: "#8b7397",
                      opacity: 1
                    },
                    {
                      offset: 30,
                      color: "#ba7985",
                      opacity: 1
                    },
                    {
                      offset: 300,
                      color: "#d7b4ba",
                      opacity: 1
                    },
                    {
                      offset: 600,
                      color: "#e1cbec",
                      opacity: 1
                    }
                  ]
                },
              },
              height: 100,
              chart: {
                height: '10%',
                sparkline: {
                  enabled: true
                }
              },
              plotOptions: {
                bar: {
                  columnWidth: '60%'
                }
              },
              xaxis: {
                crosshairs: {
                  width: 5
                },
              },
              stroke: {
                width: 3,
                curve: 'smooth'
              },
              tooltip: {
                fixed: {
                  enabled: false
                },
                x: {
                  show: false
                },
                y: {
                  title: {
                    formatter: function (seriesName) {
                      return ''
                    }
                  }
                },
                marker: {
                  show: false
                }
              }
            },
            seriesSpark1: [{
              data: [ 32,835, 33, 286]
            }],
            isShow:{
              center:true,
              map:false,
              leftOne:false,
              word:false,
              bar:false
            },
            optionCenter :{
              tooltip: {
                trigger: 'axis',
                extraCssText: 'box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);',
                position: ['70%', 10],
                backgroundColor:'rgba(132,123,154,0.8)',
                textStyle:{
                  fontSize: 16
                },
                axisPointer: {
                  type: 'shadow',
                  label: {
                    show: true,
                  }
                }
              },
              legend: {
                top:'8%',
                data: ['学院平均工时','男生平均工时', '女生平均工时'],
                textStyle: {
                  color: '#fff',
                  fontSize: 16
                },
              },
              grid:{
                x:'10%',
                x2:'12%',
                width:'80%',
                y2:'25%',
                height:'60%'
              },
              xAxis: {
                data: [],
                nameRotate:40,
                axisLabel: {
                  textStyle: {
                    color:'#fff'
                  },
                  interval: 0,
                  rotate:40
                },
                axisLine: {
                  lineStyle: {
                    color: '#B4B4B4'
                  }
                },
                axisTick:{
                  show:false,
                },
              },
              yAxis: [{
                min:0,
                max:500,
                axisLabel: {
                  textStyle: {
                    color:'#fff'
                  }
                },
                splitLine: {show: false},
                axisLine: {
                  lineStyle: {
                    color: '#fff',
                  }
                },

                axisLabel:{
                  formatter:'{value} ',
                }
              },
                {
                  min:120,
                  max:220,
                  axisLabel: {
                    textStyle: {
                      color:'#fff'
                    }
                  },
                  splitLine: {show: false},
                  axisLine: {
                    lineStyle: {
                      color: '#fff',
                    }
                  },
                  axisLabel:{
                    formatter:'{value} ',
                  }
                }],

              series: [{
                name: '学院平均工时',
                type: 'line',
                smooth: true,
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 8,
                yAxisIndex: 1,
                itemStyle: {
                  normal: {
                    color:'#5dcacd'},
                },
                data: []
              },

                {
                  name: '男生平均工时',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                    normal: {
                      barBorderRadius: 2,
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: '#8b7397'},
                          {offset: 1, color: '#60a3a5'}

                        ]
                      )
                    }
                  },
                  data: []
                },

                {
                  name: '女生平均工时',
                  type: 'bar',
                  barWidth: 10,
                  itemStyle: {
                    normal: {
                      barBorderRadius: 2,
                      color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                          {offset: 0, color: 'rgba(222,130,149,0.5)'},
                          {offset: 1, color: 'rgba(156,107,211,0.3)'},
                        ]
                      )
                    }
                  },
                  z: -12,

                  data: []
                },
              ]
            },
            optionPie:{},
            optionOnePie:{
              series: [

                {
                  name:'星级志愿者分布',
                  type:'pie',
                  color:["#80638f",'#ae606f','#e1c4c9','#c6aad4'],
                  radius : '70%',
                  center: ['50%', '50%'],
                  avoidLabelOverlap: false,
                  label: {
                    normal: {
                      show: false,
                      position: 'center'
                    },
                    emphasis: {
                      show: false
                    }
                  },
                  labelLine: {
                    normal: {
                      show: false
                    }
                  },
                  data:[
                    {value:835, name:'一星志愿者'},
                    {value:186, name:'二星志愿者'},
                    {value:32, name:'三星志愿者'},

                    {value:33, name:'五星志愿者'},

                  ]
                }
              ]
            },
            index:1
              }
      },
      mounted(){

        this.initOptionCenter()
        let firstInterval = setInterval(()=>{
          if(this.index === 1)
          {
            this.isShow.center = false

          }
          else if(this.index === 2)
          {
            this.isShow.leftOne = false

          }
          else if(this.index === 3)
          {
            this.isShow.map = false

          }
          else if(this.index === 4)
          {
            this.isShow.word = false


            clearInterval(firstInterval)
          }

        },12000)

        let secondInterval = setInterval(()=> {
          if(this.index === 1)
          {

            this.index ++
            this.initOptionOfLeftOne()
            this.isShow.leftOne = true
          }
          else if(this.index === 2)
          {

            this.index ++
            this.isShow.map = true
          }
          else if(this.index === 3)
          {

            this.isShow.word = true
            this.initWord()
            this.index ++
          }
          else if(this.index === 4)
          {
            this.isShow.bar = true
            this.initBarOption()
            clearInterval(secondInterval)
          }
        },12200)

      },


      methods: {
        initBarOption(){
          let myColor = ['#ba7985', '#d7b4ba',  '#8b7397','#e1cbec'];
          let Name=['助老助残', '社区服务', '文化建设','大型活动', '实践培训','社会管理', '生态建设','医疗健康','关爱乡村青少年','环境保护',]
          let Data=[282,270,253,189,50,47,43,34,23,13]
          let chartName=[]
          let chartData=[]
          let lname=['西部开发','三下乡','应急救援','垃圾分类','红色宣讲','网络文明']
          let ldata=[2,3,4,5,6,6]
          for(let i = Name.length-1;i>=0;i--)
          {
            chartName.push(Name[i])
          }
          for(let i = Data.length-1;i>=0;i--)
          {
            chartData.push(Data[i])
          }
          console.log(chartName);

          this.barOption = {

            grid: [{
              left: '5%',
              right: '7%',
              bottom: '7%',
              top: '10%',
              height:'86%',
              containLabel: true
            }
            ],
            xAxis: [{
              gridIndex:0,
              show: false,
            },
              {
                gridIndex:0,
                show: false,
              },

            ],
            yAxis: {
              type: 'category',
              inverse: false,
              show: false
            },

            series: [

              //亮色条 百分比
              {
                show: true,
                type: 'bar',
                barGap: '-100%',
                barWidth: '20%',
                z: 2,
                itemStyle: {
                  normal: {
                    color: function(params) {
                      let num = myColor.length;
                      return myColor[params.dataIndex % num]
                    }
                  }
                },
                label: {
                  normal: {
                    show: true,
                    textStyle: {
                      color: '#fff',
                      fontSize: 16,
                      fontWeight: 'bold'
                    },
                    position: 'right',
                    formatter: function(data) {
                      return chartData[data.dataIndex] ;
                    }
                  }
                },
                data: chartData,
              },
              //年份
              {
                show: true,
                type: 'bar',
                xAxisIndex: 1, //代表使用第二个X轴刻度
                barGap: '-100%',
                barWidth: '10%',
                itemStyle: {
                  normal: {
                    barBorderRadius: 200,
                    color: 'transparent'
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: [0, '-20'],
                    textStyle: {
                      fontSize:14,
                      color: '#fff',
                    },
                    formatter: function(data) {
                      return chartName[data.dataIndex];
                    }
                  }
                },
                data: chartData
              },

            ]
          };
        },



        initOptionOfLeftOne()
        {
          let category = ['财政税务学院',	'法学院'	,'工商管理学院',	'公共管理学院',	'会计学院',	'金融学院',	'经济学院',	'统计与数学学院',	'外国语学院',	'文澜学院',	'新闻与文化传播学院',	'信息与安全工程学院'	,'刑事司法学院'	,'刑事司法学院'	,'中韩新媒体学院'];
          let lineData = [49,228,267,85,103,102,42,75,58,14,39,50,55,32,13];
          let barData = [10,61,62,21,14,20,11,7,6,3,5,20,44,11,4];
          let rateData = [39,167,205,64,89,82,31,68,52,11,34,30,11,21,9];

          this.optionOfLeftOne.xAxis.data=category
          this.optionOfLeftOne.series[0].data = lineData
          this.optionOfLeftOne.series[1].data = rateData
          this.optionOfLeftOne.series[2].data = barData
          console.log(this.optionOfLeftOne);
        },
        initOptionCenter(){
          let category = [];
          let lineData = [];
          let barData = [];
          let rateData = [];
          for(let key in this.mwtime)
          {
            console.log(key)
            category.push(key)
            barData.push(this.mwtime[key]['女'])
            rateData.push(this.mwtime[key]['男'])
          }
          for(let key in this.mwtime)
          {
            lineData.push(this.totaltime[key])

          }
          this.optionCenter.xAxis.data=category
          this.optionCenter.series[0].data = lineData
          this.optionCenter.series[1].data = rateData
          this.optionCenter.series[2].data = barData
          let currentIndex = -1;
          setInterval(()=> {
            let dataLen = this.optionCenter.series[0].data.length;
            // 取消之前高亮的图形
            console.log(dataLen)
            this.$refs.center.dispatchAction({
              type: 'downplay',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            currentIndex = (currentIndex + 1) % dataLen; //+1表示每次跳转一个
            // 高亮当前图形
            this.$refs.center.dispatchAction({
              type: 'highlight',
              seriesIndex: 0,
              dataIndex: currentIndex
            });
            // 显示 tooltip
            this.$refs.center.dispatchAction({
              type: 'showTip',
              seriesIndex: 0,
              dataIndex: currentIndex
            })
          }, 800);

        },
        initPie(){
          let scale = 1;
          let echartData = [{
            value: 835,
            name: '一星',
            itemStyle: {
              normal: {//颜色渐变
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#8b7397'},
                    {offset: 1, color: '#8b7397'}
                  ]
                )
              }
            }

          },
            {
            value: 186,
            name: '二星',
            itemStyle: {
              normal: {//颜色渐变
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#e1cbec'},
                    {offset: 1, color: '#e1cbec'}
                  ]
                )
              }
            }

          }, {
            value: 2,
            name: '三星',
            itemStyle: {
              normal: {//颜色渐变
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#ba7985'},
                    {offset: 1, color: '#ba7985'}
                  ]
                )
              }
            }

          },
            {
            value: 3,
            name: '五星',
            itemStyle: {
              normal: {//颜色渐变
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#d7b4ba'},
                    {offset: 1, color: '#d7b4ba'}
                  ]
                )
              }
            }

          }]
          let total_datas = 1026;

          let rich = {
              yellow: {
                color: "#fff",
                fontSize: 15 * scale,
                // padding: [21, 0],
                align: 'center'
              },
              total: {
                color: "#fff",
                fontSize: 40 * scale,
                align: 'center'
              },

              blue: {
                color: '#fff',
                fontSize: 16 * scale,
                align: 'center'
              },
              hr: {
                borderColor: '#fff',
                width: '100%',
                borderWidth: 1,
                height: 0,
              }
            }
            this.optionPie = {
              title: {
                text: '总数',
                subtext: total_datas,
                textStyle: {
                  color: '#f2f2f2',
                  fontSize: 15,
                  align: 'center'
                },
                subtextStyle: {
                  fontSize: 25,
                  color: ['#fff'] //总数量
                },
                x: 'center',
                y: 'center',
              },
              legend: {
                // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） | 'vertical'（垂直）
                orient: 'horizontal',
                // x 设置水平安放位置，默认全图居中，可选值：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                x: 'center',
                // y 设置垂直安放位置，默认全图顶端，可选值：'top' | 'bottom' | 'center' | {number}（y坐标，单位px）
                y: 'top',
                itemWidth: 8,   // 设置图例图形的宽
                itemHeight: 10,  // 设置图例图形的高
                textStyle: {
                  color: '#fff'  // 图例文字颜色
                },
                // itemGap设置各个item之间的间隔，单位px，默认为10，横向布局时为水平间隔，纵向布局时为纵向间隔
                itemGap: 10,
                data: ['一星','二星','三星','五星']
              },

              series: [{
                name: '星级志愿者分布',
                type: 'pie',
                radius: ['38%', '50%'],
                hoverAnimation: false,
                label: {
                  normal: {
                    formatter: function(params, ticket, callback) {
                      var total = 0; //考生总数量
                      var percent = 0; //考生占比
                      echartData.forEach(function(value, index, array) {
                        total += value.value;
                      });
                      percent = ((params.value / total) * 100).toFixed(1);
                      return '{yellow|' + params.value + '}\n{blue|' + percent + '%}';
                    },
                    rich: rich
                  },
                },
                labelLine: {
                  normal: {
                    length: 55 * scale,
                    length2: 10,
                    lineStyle: {
                      color: '#fff'
                    }
                  }
                },
                data: echartData
              }]
            };
        },
        initWord(){
          let word =  echarts.init(document.getElementById('word'))
          let keywords =
            {'活动': 459,
            '志愿': 241,
            '服务': 140,
            '社区': 138,
            '志愿者': 86,
            '爱心': 58,
            '校园': 57,
            '中南': 53,
            '课堂': 47,
            '中南财经政法大学': 45,
            '文化': 40,
            '武汉': 39,
            '普法': 38,
            '少数民族': 37,
            '学院': 36,
            '人员': 35,
            '迎新': 34,
            '教学活动': 31,
            '环保': 31,
            '爱': 30,
            '系列': 29,
            '公益': 29,
            '培训': 27,
            '关爱': 27,
            '行': 25,
            '经商': 25,
            '分队': 24,
            '走进': 24,
            '养老院': 24,
            '志协': 23,
            '大赛': 23,
            '校庆': 23,
            '南湖': 22,
            '金融': 22,
            '敬老': 22,
            '同行': 22,
            '小学': 21,
            '家园': 21,
            '知识': 20,
            '宣传': 20,
            '光谷': 20,
            '主题': 20,
            '协会': 20,
            '阳光': 20,
            '2018': 20,
            '洪山区': 19,
            '2019': 19,
            '青年': 19,
            '国家': 19,
            '服务队': 18,
            '青春': 18,
            '教育': 18,
            '军运会': 17,
            '务工': 17,
            '通用': 17,
            '年': 17,
            '文明': 16,
            '黄鹤楼': 16,
            '暖阳': 16,
            '江城': 15,
            '杯': 15,
            '医院': 15,
            '进校园': 15,
            '帮扶': 15,
            '保护': 15,
            '先行': 15,
            '起义': 15,
            '门': 15,
            '红色': 15,
            '项目': 15,
            '绿色': 15,
            '离退休': 14,
            '招募': 14,
            '宣讲': 14,
            '首义': 14,
            '传递': 14,
            '军运': 14,
            '暨': 14,
            '新疆': 14,
            '交流': 14,
            '助力': 14,
            '寓': 13,
            '乐于': 13,
            '教': 13,
            '哲学': 13,
            '子女': 13,
            '新': 13,
            '值班': 13,
            '地铁': 12,
            '和谐': 12,
            '进社区': 12,
            '中国': 12,
            '夕阳': 12,
            '法律': 12,
            '策划': 12,
            '承毅': 11,
            '财大': 11,
            '校区': 11,
            '情满': 11,
            '学习': 11,
            '月': 11,
            '校运会': 11,
            '语言文字': 11,
            '周年': 11,
            '定点': 11,
            '校友': 11,
            '科技馆': 10,
            '解放路': 10,
            '院': 10,
            '计划': 10,
            '支教': 10,
            '会议': 10,
            '―': 10,
            '送': 10,
            '清凉': 10,
            '仪式': 10,
            '老人': 10,
            '日': 10,
            '制动': 10,
            '之江': 9,
            '讲解': 9,
            '老来乐': 9,
            '急救': 9,
            '送暖': 9,
            '工商': 9,
            '病房': 9,
            '青少年': 9,
            '参观': 9,
            '传承': 9,
            '精神': 9,
            '工作': 9,
            '携手': 9,
            '义卖': 9,
            '食堂': 9,
            '军训': 9,
            '旅途': 9,
            '人文': 9,
            '客运': 9,
            '高校': 9,
            '温暖': 9,
            '70': 9,
            '物资': 8,
            '大学生': 8,
            '手工': 8,
            '英语': 8,
            '保安': 8,
            '博物馆': 8,
            '美好': 8,
            '伴行': 8,
            '岗': 8,
            '运会': 8,
            '工商管理': 8,
            '湖北': 8,
            '风采': 8,
            '模拟': 8,
            '湖北省': 8,
            '新生': 8,
            '敬老院': 8,
            '文澜': 8,
            '情暖': 8,
            '成长': 8,
            '青鸟': 8,
            '家乡': 8,
            '巡湖': 7,
            '假期': 7,
            '哲院志协': 7,
            '健康': 7,
            '伴': 7,
            '护': 7,
            '烧伤科': 7,
            '返乡': 7,
            '助残': 7,
            '垃圾': 7,
            '第四届': 7,
            '回收': 7,
            '手机': 7,
            '交流会': 7,
            '鲁广': 7,
            '马拉松': 7,
            '未来': 7,
            '天使': 7,
            '献血': 7,
            '传统': 7,
            '世界': 7,
            '运动会': 7,
            '哲院志': 7,
            '嘉年华': 7,
            '民族': 7,
            '六一': 7,
            '感谢': 7,
            '东湖': 7,
            '动物': 7,
            '电子产品': 6,
            '发放': 6,
            '街': 6,
            '四点': 6,
            '国庆': 6,
            '益游': 6,
            '讲座': 6,
            '童心': 6,
            '实验': 6,
            '大军': 6,
            '第三': 6,
            '教室': 6,
            '时代': 6,
            '统数志协': 6,
            '格物': 6,
            '智知': 6,
            '台': 6,
            '江滩': 6,
            '广场': 6,
            '莲莲': 6,
            '服': 6,
            '语言': 6,
            '文字': 6,
            '趣味': 6,
            '班': 6,
            '善行': 6,
            '暖': 6,
            '雷锋': 6,
            '协涂家': 6,
            '沟': 6,
            '时光': 6,
            '面试': 6,
            '院校': 6,
            '情': 6,
            '信件': 6,
            '行之': 6,
            '傅家坡': 6,
            '教学': 6,
            '一对一': 6,
            '感恩': 6,
            '五月': 6,
            '历史': 6,
            '寒冬': 6,
            '消防': 6,
            '救护': 5,
            '法制': 5,
            '星火': 5,
            '造血': 5,
            '干细胞': 5,
            '迎军运': 5,
            '慰问': 5,
            '教师': 5,
            '情系': 5,
            '建设': 5,
            'DIY': 5,
            '创意': 5,
            '法学院': 5,
            '线下': 5,
            '中心': 5,
            '展': 5,
            '前期': 5,
            '普及': 5,
            '点子': 5,
            '舞蹈': 5,
            '竞赛': 5,
            '班级': 5,
            '江零': 5,
            '第三届': 5,
            '折翼': 5,
            '运': 5,
            '厚德': 5,
            '前行': 5,
            '站': 5,
            '统计': 5,
            '第一期': 5,
            '辅导': 5,
            '儿童': 5,
            '空间': 5,
            '防艾': 5,
            '中': 5,
            '雪莲花': 5,
            '大学': 5,
            '外访': 5,
            '美丽': 5,
            '共享': 5,
            '火车站': 5,
            '中秋': 5,
            '禁毒': 5,
            '希望': 5,
            '家教': 5,
            '恩师': 5,
            '迎': 5,
            '返校': 5,
            '中学': 5,
            '三市': 5,
            '联合': 5,
            '心系': 5,
            '守护': 5,
            '人心': 5,
            '宪法': 5,
            '冬日': 5,
            '涂镇': 5,
            '双语': 5,
            '3.15': 5,
            '汽标': 4,
            '应急': 4,
            '进': 4,
            '不忘': 4}
          let data = [];
          for (let name in keywords) {
            data.push({
              name: name,
              value: Math.sqrt(keywords[name])
            })
          }
          let myImage = new Image()
          let url = this.url
          myImage.src = url
          this.wordOption = {
            grid:{
              left:'5%',
              width:'100%',
              height:'100%'
            },

            series: [
              {
              name: '搜索指数',
              type: 'wordCloud',
              //size: ['9%', '99%'],
              sizeRange:[6,50],
              maskImage:myImage,
              //shape: 'circle',
              textPadding: 0,
              autoSize: {
                enable: false,
                minSize: 1,
                maxSize:1
              },
                textStyle: {
                  normal: {
                    color: function(v) {
                      let color = ['#ba7985', '#d7b4ba', '#5dcacd', '#8b7397','#e1cbec']
                      let num =Math.floor(Math.random() * (4 + 1));
                      return color[num];
                    },
                  },
                },
              data: data
            },

            ],
          };
          myImage.onload = ()=>{
            word.setOption(this.wordOption)
          }
          window.onresize = ()=>{
            word.resize();
          }
        }
      }
    }
</script>

<style scoped>

.topTitle{
  background:-webkit-gradient(linear, 0 0, 0 bottom, from(rgba(225,203,236,.5)), to(rgba(139,115,151,.5)));
  border-radius: 20px;
  margin-left: 3%;
  margin-right: 3%;

}


  .container{
    background-color: #0b060a;
    width: 100%;
    height: 100vh;
  }
  .subtitle{
    width: 100%;
    height: 5%;
    font-size: 20px;
    padding-top: 10px;
    padding-left: 10px;
    color: white;
    text-align: left;
  }
  .main{
    width: 100%;
    height: calc(95% - 10px);
  }
  .bac{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top:0;
  }
  .title{
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    z-index: 2;
  }
  .title div{
    z-index: 2;
  }
  .title p{
    z-index: 2;
  }
  section{
    z-index: 1;
  }
  section section{
    margin-left: 1%;
    margin-top: 1%;
    background: rgba(139,115,151,0.1);
    border-radius: 5px;
  }
  .parent{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
    height: 90%;
  }

  .parent .left{
    width: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .parent .center{
    width: 55%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .parent .right{
    width: 20%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
</style>
