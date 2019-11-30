<template>
  <div id="box" class="box" style="height: 100%;width: 100%"/>
</template>

<script>
  export default {
    name: 'EarthChart',
    mounted() {
      const baseImg = require('../assets/img/data-1571295640429-3Co5rpLX.png') // 背景纹理贴图
      const scanImg = require('../assets/img/data-1571295559348-whnsd6fi.jpg') // 扫描光影效果
      const config = { // 扫描线条配置
        lineWidth: 0.5, // 扫描线条宽度
        color: '#00FFC2', // 线条颜色
        levels: 1,
        intensity: 3, // 强度
        threshold: 0.01
      }

      const canvas = document.createElement('canvas')
      canvas.width = 4096
      canvas.height = 2048
      const context = canvas.getContext('2d')

      context.lineWidth = config.lineWidth
      context.strokeStyle = config.color
      context.fillStyle = config.color
      context.shadowColor = config.color

      image(scanImg).then(function(image) {
        const m = image.height
        const n = image.width
        const values = new Array(n * m)
        // eslint-disable-next-line no-undef
        const contours = d3.contours().size([n, m]).smooth(true)
        // eslint-disable-next-line no-undef
        const projection = d3.geoIdentity().scale(canvas.width / n)
        // eslint-disable-next-line no-undef
        const path = d3.geoPath(projection, context)

        //   StackBlur.R(image, 5);

        for (let j = 0, k = 0; j < m; ++j) {
          for (let i = 0; i < n; ++i, ++k) {
            values[k] = image.data[(k << 2)] / 255
          }
        }

        const opt = {
          image: canvas
        }

        let results = []

        function update(threshold, levels) {
          context.clearRect(0, 0, canvas.width, canvas.height)
          const thresholds = []
          for (let i = 0; i < levels; i++) {
            thresholds.push((threshold + 1 / levels * i) % 1)
          }
          results = contours.thresholds(thresholds)(values)
          redraw()
        }

        function redraw() {
          results.forEach(function(d, idx) {
            context.beginPath()
            path(d)
            context.globalAlpha = 1
            context.stroke()
            if (idx > config.levels / 5 * 3) {
              context.globalAlpha = 0.01
              context.fill()
            }
          })
          opt.onupdate()
        }

        // eslint-disable-next-line no-undef
        d3.timer(function(t) {
          const threshold = (t % 10000) / 10000
          update(threshold, 1)
        })

        initCharts(opt)

        update(config.threshold, config.levels)
      })

      function image(url) {
        return new Promise(function(resolve) {
          const image = new Image()
          image.src = url
          image.onload = function() {
            const canvas = document.createElement('canvas')
            canvas.width = image.width / 8
            canvas.height = image.height / 8
            const context = canvas.getContext('2d')
            context.drawImage(image, 0, 0, canvas.width, canvas.height)
            resolve(context.getImageData(0, 0, canvas.width, canvas.height))
          }
        })
      }

      function initCharts(opt) {
        // eslint-disable-next-line no-undef
        const contourChart = echarts.init(document.createElement('canvas'), null, {
          width: '70%',
          height: '70%'
        })

        // eslint-disable-next-line no-undef
        const img = new echarts.graphic.Image({
          style: {
            image: opt.image,
            x: -1,
            y: -1,
            width: opt.image.width + 2,
            height: opt.image.height + 2
          }
        })
        contourChart.getZr().add(img)

        opt.onupdate = function() {
          img.dirty()
        }

        // eslint-disable-next-line no-undef
        const myChart = echarts.init(document.getElementById('box'))

        myChart.setOption({
          globe: {
            baseTexture: baseImg,
            displacementScale: 0.05,
            displacementQuality: 'high',
            shading: 'realistic',
            realisticMaterial: {
              roughness: 0.2,
              metalness: 0
            },

            postEffect: {
              enable: true,
              depthOfField: {
                // enable: true
              }
            },
            light: {
              ambient: {
                intensity: 1
              },
              main: { // 主光源
                intensity: 0,
                shadow: false
              }
              /* ambientCubemap: {
               texture: ROOT_PATH + 'data-gl/asset/lake.hdr',
               exposure: 1,
               diffuseIntensity: 0.5,
               specularIntensity: 2
               }*/
            },
            viewControl: {
              center: [0, 0, 0],
              alpha: 30,
              beta: 160,
              autoRotate: true,
              autoRotateAfterStill: 10,
              distance: 180,
              autoRotateSpeed: 4
            },
            layers: [{
              type: 'blend',
              blendTo: 'emission',
              texture: contourChart,
              intensity: config.intensity
            }]
          },
          series: [
            { // 点
              type: 'scatter3D',
              blendMode: 'lighter',
              coordinateSystem: 'globe',
              showEffectOn: 'render',
              zlevel: 2,
              effectType: 'ripple',
              symbolSize: 15,
              rippleEffect: {
                period: 4,
                scale: 4,
                brushType: 'fill'
              },

              hoverAnimation: true,
              itemStyle: {
                normal: {
                  color: 'rgba(235, 232, 6, 0.8)'
                }
              },
              data: [
                [115.9, -31.9],
                [-71.33, 41.82],
                [-1.68, 48.01],
                [-3.17, 51.47],
                [-4.283, 55.87],
                [-73.97, 40.78],
                [-71.33, 41.82],
                [-80.52, 43.47],
                [-83.48, 42.2],
                [-84.63, 33.82],
                [-87.63, 41.88],

              ]
            }
          ]
        })
        window.addEventListener('resize',()=>{myChart.resize()})
      }
    }
  }
</script>

<style scoped>
  .box{
    width: 100%;
    height: 100%;
  }
</style>
