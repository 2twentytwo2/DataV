<template>
  <div style="width: 100%;height:100%" id="cloud"></div>
</template>

<script>
    export default {
        name: "cloud",
      data(){
        return{
          url:require("../assets/校标.png"),
        }
      },
      mounted(){
        this.initCharts()
      },
      methods:{
        initCharts(){
          let myChart =  echarts.init(document.getElementById('cloud'))

          let keywords =
            {'张': 405,
              '李': 403,
              '王': 368,
              '陈': 308,
              '刘': 294,
              '杨': 177,
              '黄': 154,
              '吴': 137,
              '周': 135,
              '赵': 107,
              '胡': 102,
              '朱': 87,
              '徐': 83,
              '孙': 77,
              '郑': 71,
              '何': 70,
              '郭': 69,
              '马': 68,
              '林': 68,
              '罗': 66,
              '汪': 47,
              '邓': 46,
              '袁': 43,
              '余': 43,
              '谢': 42,
              '肖': 42,
              '谭': 41,
              '曾': 41,
              '蔡': 40,
              '高': 39,
              '潘': 38,
              '彭': 37,
              '梁': 36,
              '宋': 35,
              '曹': 35,
              '叶': 34,
              '程': 34,
              '唐': 33,
              '田': 31,
              '董': 30,
              '许': 30,
              '苏': 30,
              '丁': 30,
              '沈': 30,
              '冯': 29,
              '吕': 29,
              '任': 28,
              '姚': 27,
              '蒋': 26,
              '杜': 26,
              '熊': 26,
              '韩': 25,
              '夏': 25,
              '方': 25,
              '邹': 23,
              '秦': 23,
              '卢': 23,
              '龚': 22,
              '江': 22,
              '金': 21,
              '陆': 20,
              '万': 20,
              '钟': 20,
              '雷': 20,
              '邱': 19,
              '崔': 19,
              '石': 19,
              '魏': 19,
              '范': 19,
              '毛': 19,
              '段': 19,
              '姜': 19,
              '郝': 17,
              '廖': 17,
              '涂': 17,
              '付': 17,
              '薛': 16,
              '孟': 16,
              '尹': 15,
              '白': 15,
              '闫': 15,
              '欧': 15,
              '章': 15,
              '于': 15,
              '易': 14,
              '贺': 14,
              '黎': 14,
              '常': 14,
              '文': 14,
              '覃': 14,
              '韦': 13,
              '童': 13,
              '向': 13,
              '陶': 13,
              '侯': 13,
              '严': 12,
              '钱': 12,
              '孔': 12,
              '戴': 12,
              '顾': 12,
              '莫': 11,
              '洪': 11,
              '汤': 10,
              '邵': 10,
              '聂': 10,
              '邢': 10,
              '殷': 10,
              '牛': 10,
              '樊': 10,
              '赖': 9,
              '庞': 9,
              '代': 9,
              '史': 9,
              '甘': 8,
              '贾': 8,
              '傅': 8,
              '康': 8,
              '阮': 8,
              '申': 8,
              '成': 8,
              '倪': 8,
              '包': 7,
              '齐': 7,
              '鲁': 7,
              '安': 7,
              '游': 7,
              '舒': 7,
              '柯': 7,
              '施': 7,
              '葛': 7,
              '武': 7,
              '温': 6,
              '焦': 6,
              '伍': 6,
              '翟': 6,
              '艾': 6,
              '符': 6,
              '庄': 6,
              '凌': 6,
              '柴': 6,
              '关': 6,
              '饶': 6,
              '龙': 6,
              '鄢': 6,
              '俞': 6,
              '谷': 5,
              '燕': 5,
              '喻': 5,
              '冉': 5,
              '桂': 5}
          let data = [];
          for (let name in keywords) {
            data.push({
              name: name,
              value: Math.sqrt(keywords[name])
            })
          }
          let maskImage = new Image();
          let url = this.url
          maskImage.src = url;
          let option = {
            grid:{
              bottom:'10%'
            },

            series: [{
              name: '搜索指数',
              type: 'wordCloud',
              //size: ['9%', '99%'],
              sizeRange:[18,55],
              rotationRange: [0, 0],
              //textRotation: [0, 45, 90, -45],
              //shape: 'circle',
              maskImage: maskImage,
              textPadding: 0,
              autoSize: {
                enable: false,
                minSize: 1,
                maxSize:1
              },
              textStyle: {
                normal: {
                  color: function(v) {
                    let color = ['#08d9c5', '#ffff60',  '#3b99d8']
                    let num =Math.floor(Math.random() * (3));
                    return color[num];
                  },
                },
              },
              data: data
            },
            ],
          };
          maskImage.onload = ()=>{
            myChart.setOption(option);
          }

          window.onresize = ()=>{
            myChart.resize();
          }
        }
      }
    }
</script>

<style scoped>

</style>
