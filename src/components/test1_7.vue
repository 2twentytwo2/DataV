<template>
  <div style="width: 100%;height: 100%">
    <div style="width: 100%;height: 10%;color: #0de6f9;font-size: 14px;font-weight: bold">
      <DIV  style=" width: 1%;height: 14px;background-color: #0de6f9;margin-left: 10px;margin-top: 4px;float: left"></DIV>
      <div style="margin-left: 20px;margin-top: 5px;">科研项目词云图</div>
    </div>
    <div id="chart7" style="width: 100%;height: 90%">
    </div>
  </div>
</template>

<script>
    export default {
      name: 'test1_7',
      methods: {
        initCharts() {
          var myChart = echarts.init(document.getElementById('chart7'));
          let keywords={'互联网': 60, '发展': 59, '农村': 46, '风险': 46, '经济': 41, '扶贫': 40, '金融': 39, '共享': 38, '法律': 37, '企业': 36, '改革': 35, '实施': 35, '政策': 35, '养老': 33, '高校': 32, '创新': 30, '精准': 30, '服务': 29, '电商': 27, '城市': 25, '中国': 24, '建设': 24, '文化': 24, '效应': 24, '前景': 24, '项目': 23, '乡村': 22, '社区': 22, '侧': 22, 'PPP': 22, '上海': 22, '设计': 22, '融资': 21, '保护': 21, '规制': 21, '理论': 21, '农业': 21, '运营': 20, '校园': 20, '构建': 20, '媒体': 20, '农民': 20, '市场': 19, '困境': 19, '策略': 19, '管理': 18, 'APP': 18, '旅游': 18, '医疗': 18, '创业': 18, '产业': 17, '转型': 17, '消费': 17, '数据': 17, '时代': 17, '系统': 17, '技术': 16, '消费者': 16, '环境': 16, '需求': 15, '绿色': 15, '传播': 15, '试点': 14, '教育': 14, '运行': 14, '行业': 14, '可行性': 14, '实践': 14, '学习': 14, '农户': 14, '推广': 14, '健康': 13, '体系': 13, '型': 13, '直播': 13, '改善': 13, '政府': 13, '公益': 13, '信息': 13, '七校': 12, '供应链': 12, '监管': 12, '众筹': 12, '法': 12, '用户': 12, '化': 12, '战略': 12, '智能': 12, '知识': 12, '振兴': 11, '租赁': 11, '上海市': 11, '式': 11, '北京': 11, '司法': 11, '土地': 11, '生态': 11, '绩效': 11, '湖南': 11, '深圳': 11}
          let data = [];
          for (let name in keywords) {
            data.push({
              name: name,
              value: Math.sqrt(keywords[name])
            })
          }
          var option = {
            "series": [{
              "name": "积分排行",
              "type": "wordCloud",
              "gridSize": 20,
              "sizeRange": [6, 25],
              "rotationRange": [0, 0],
              "shape": "circle",
              textStyle: {
                normal: {
                  color: function(v) {
                    let color = ['#19e2f7', '#08a1f9', '#5b69fe', '#02e4a2','#efc04e']
                    let num =Math.floor(Math.random() * (4 + 1));
                    return color[num];
                  },
                },
              },
              "autoSize": {
                "enable": true,
                "minSize": 10
              },
              "data":data
            }]
          };
          myChart.setOption(option);
          window.addEventListener('resize',()=>{myChart.resize()})
        }
      },
      mounted() {
        this.initCharts()
      }
    }
</script>

<style scoped>

</style>
