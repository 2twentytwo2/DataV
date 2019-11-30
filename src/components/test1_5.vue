<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">最积极跨院合作学院</div>
    </div>
    <div id="chart5" style="width: 100%;height: 90%">

    </div>
  </div>
</template>

<script>
    export default {
        name: 'test1_5',
      data(){
          return{
            person:require("../assets/4.png"),
            phone:require("../assets/3.png")
          }
      },
      mounted(){
          this.initChart()
      },
      methods:{
          initChart(){
            // 调试页面回打印出点击的节点名称
            let myChart =  echarts.init(document.getElementById('chart5'))
            var person =  this.person;
            var car = this.phone
            var phone = this.phone

            var size = 10; //节点大小


            var listdata = [];
            var links = [];
            var legendes = ["手机IMSI", "人脸ID", "车牌号码", "人脸ID"];
            var texts = [];


            var phoneNum = {
              "法学院": "法学院",
              "会计学院": "会计学院",
              "工商管理学院": "工商管理学院",
              "统计与数学学院": "统计与数学学院"
            };

            var phoneIMSI =["6.38%", "2.13%", "2.13%",
              "8.51%" ]


            var carNum = {
              "信息与安全工程学院": "信息与安全工程学院",
              "刑事司法学院": "刑事司法学院",
              "新闻与文化传播学院": "新闻与文化传播学院",
              "中韩新媒体学院": "中韩新媒体学院",

            }
            const relationShipCar = ["2.13%", "10.64%", "4.26%",
              "63.83%"
            ]

            var mainRelationShip = {
              人脸ID: "中韩新媒体学院"
            }

            function setDataPerson(json, n) {
              var i = 0;
              for (var p in json) {
                listdata.push({
                  x: 50,
                  y: 100,
                  "name": p,
                  "showName": json[p],
                  "symbol":'circle',
                  "symbolSize": 18,
                  "category": n,
                  "draggable": "false",
                  formatter: function(params) {
                    return params.data.showName
                  },
                  label:{
                    position: 'bottom'
                  }
                });
                i++;
              }
            }
            function setDataPhone(json, n) {
              var i = 0;
              for (var p in json) {
                listdata.push({
                  x: i * 50,
                  y: size + i * 10,
                  "name": p,
                  "showName": json[p],
                  "symbol":car,
                  "symbolSize": size,
                  "category": n,
                  "draggable": "false",
                  formatter: function(params) {
                    return params.data.showName
                  },
                  label:{
                    position: 'bottom'
                  }
                });
                i++;
              }
            }
            function setDataCar(json, n) {
              var i = 0;
              for (var p in json) {
                listdata.push({
                  x: i * 50,
                  y: size + i * 10,
                  "name": p,
                  "showName": json[p],
                  "symbol":'circle',
                  "symbolSize": size,
                  "category": n,
                  "draggable": "false",
                  formatter: function(params) {
                    return params.data.showName
                  },
                  label:{
                    position: 'bottom'
                  }
                });
                i++;
              }
            }

            function setLinkData(json, relarr, title) {
              if (relarr !== "") {
                var i = 0;
                for (var p in json) {
                  links.push({
                    "source": p,
                    "target": title,
                    "value": relarr[i],
                    lineStyle: {
                      normal: {
                        // text: relarr[i],
                        color: 'source'
                      }
                    }
                  });
                  i++;
                }
              } else {
                for (var p2 in json) {
                  links.push({
                    "source": p2,
                    "target": title,
                    "value": "",
                    lineStyle: {
                      normal: {
                        color: 'source'
                      }
                    }
                  });
                }
              }
            }

            for (var i = 0; i < legendes.length; i++) {
              texts.push({
                "name": legendes[i]
              })
            }

            setDataPhone(phoneNum, 0);
            setDataCar(carNum, 2);
            setDataPerson(mainRelationShip, 3);

            setLinkData(phoneNum, phoneIMSI, legendes[3]);
            setLinkData(carNum, relationShipCar, legendes[3]);

            let option = {
              grid:{
                top:'80%'
              },
              animationDuration: 1000,
              animationEasingUpdate: 'quinticInOut',
              series: [{
                type: 'graph',
                layout: 'force',
                force: {
                  repulsion: 100,
                  gravity: 0,
                  edgeLength: 10,
                  layoutAnimation: true,
                },
                data: listdata,
                links: links,
                categories: texts,
                roam: false,
                nodeScaleRatio: 0,
                focusNodeAdjacency: false,
                lineStyle: {
                  normal: {
                    opacity: 0.5,
                    width: 1.5,
                    curveness: 0
                  }
                },
                label: {
                  normal: {
                    show: true,
                    position: 'inside',
                    textStyle: {
                      color: '#fff',
                      fontWeight: 'normal',
                      fontSize: "10" //字体大小
                    },
                    formatter: function(params) {
                      return params.data.showName
                    },
                    fontSize: 10,
                    fontStyle: '600',
                  }
                },
                edgeLabel: {
                  normal: {
                    show: true,
                    textStyle: {
                      fontSize: 8
                    },
                    formatter: "{c}"
                  }
                }
              }],
              color: [ '#039efc','#0de6f9','#00e6a3']
            };

            const clickFun = param => {
              console.log(param.name)
            }
            myChart.setOption(option)
            myChart.on("click", clickFun);


          }
      }
    }
</script>

<style scoped>

</style>
