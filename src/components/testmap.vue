<template>
    <div id="main" style="width: 100%;height: 100%">

    </div>
</template>

<script>
    export default {
        name: "testmap",
      methods:{
        autoDispatchMapAction(myChart, option) {

          let  app = {
        currentIndex: -1 //初始数据索引值---通过其指定高亮的某个数据
      }
      let timeId = setInterval(()=>{
        let dataLen = option.series[0].data.length;
        // 取消之前高亮的图形
        myChart.dispatchAction({
          type: 'mapUnSelect', //取消高亮指定的数据图形。
          seriesIndex: 0, // 可选，系列 index，在 tooltip 的 trigger 为 axis 的时候可选。
          dataIndex: app.currentIndex // 可选，数据的 index
        });
        app.currentIndex = (app.currentIndex + 1) % dataLen;
        // 高亮当前图形---通过seriesName或者seriesIndex指定系列。通过指定dataIndex或者name再指定某个数据。
        myChart.dispatchAction({
          type: 'mapSelect',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
        // 显示 tooltip
        myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: app.currentIndex
        });
      }, 2000);
    },
        convertData(data,geoCoordMap) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        },
          initCharts(){
          let _this=this
            let data =[
              {
                name:"江夏区",
                value:[114.32,30.35,100]
              },
              {
                name:"汉南区",
                value:[114.08,30.32,105]
              },
              {
                name:"蔡甸区",
                value:[114.03,30.58,92]
              },
              {
                name:"洪山区",
                value:[114.34,30.50,80]
              },
              {
                name:"汉阳区",
                value:[114.22,30.55,90]
              },
              {
                name:"武昌区",
                value:[114.32,30.56,104]
              },
              {
                name:"江汉区",
                value:[114.27,30.60,100]
              },
              {
                name:"江岸区",
                value:[114.31,30.60,100]
              },
              {
                name:"硚口区",
                value:[114.22,30.58,110]
              },
              {
                name:"东西湖区",
                value:[114.13,30.62,105]
              },
              {
                name:"新洲区",
                value:[114.80,30.85,100]
              },
              {
                name:"黄陂区",
                value:[114.38,30.88,110]
              },
              {
                name:"青山区",
                value:[114.39,30.64,100]
              }
            ]
            let chart = echarts.init(document.getElementById('main'))
            let option=
              {
                tooltip: {
                  trigger: 'item',
                  extraCssText: 'box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);',
                  backgroundColor:'#ba7985',
                  textStyle:{
                    fontSize: 14
                  },
                  formatter: function (params) {
                    return params.name + ' : ' + params.value[2]+'项活动';
                  }
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
                name: 'map', // 系列名称
                map: '武汉',
                zoom:0.9,
                bottom:0,
                left:0,
                width:'100%',
                height:'100%',
                emphasis:{

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
                    shadowColor: 'rgba(184, 155, 199, 1)',
                    // shadowColor: 'rgba(255, 255, 255, 1)',
                    shadowOffsetX: -2,
                    shadowOffsetY: 2,
                    shadowBlur: 10
                  },
                  emphasis: {
                    areaColor: '#8b7397',
                    borderWidth: 0
                  }
                },
              },
              series: [
                {
                name: '点',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                symbol: 'circle',
                symbolSize: 7,

                itemStyle: {
                  normal: {
                    color: '#efccd2', //标志颜色
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
                  ],
              },
              ]
            }
            chart.setOption(option)
            this.autoDispatchMapAction(chart,option)

            window.onresize = ()=>{
               chart.resize();
            }
          }
      },
      mounted() {
          this.initCharts()
      }
    }
</script>

<style scoped>

</style>
