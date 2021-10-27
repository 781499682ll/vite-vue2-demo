<template>
  <DvFullScreenContainer>
    <div class="data-view">
      <div class="box">
        <v-chart
          ref="barRef"
          :option="lineOption"
          :autoresize="true"
        />
      </div>
      <div class="box">
        <v-chart
          ref="barRef"
          :option="barOption"
          :autoresize="true"
        />
      </div>
      <div class="box">
        <v-chart
          ref="barRef"
          :option="pieOption"
          :autoresize="true"
        />
      </div>
      <div class="box">
        <mapChart
          :options="mapOptions"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  </DvFullScreenContainer>
</template>
<script>
import fullScreen from '@/utils/fullScreen'
import mapChart from '@/components/map/index.vue'
// 设置点的位置(经纬度)
const geoCoordMap = {
  厦门市: [118.11022, 24.490474, 20],
  福州市: [119.206239, 26.275302, 20],
  泉州市: [118.589421, 24.908853, 20],
  漳州市: [117.561801, 24.510897, 20],
  龙岩市: [116.82978, 25.391603, 20],
  莆田市: [119.007558, 25.591011, 20],
  三明市: [117.435001, 26.465444, 20],
  南平市: [118.178459, 27.535627, 20],
  宁德市: [119.527082, 27.15924, 20]
}
const seriesData = [
  {
    name: '厦门市'
  },
  {
    name: '福州市'
  },
  {
    name: '泉州市'
  },
  {
    name: '漳州市'
  },
  {
    name: '龙岩市'
  },
  {
    name: '莆田市'
  },
  {
    name: '三明市'
  },
  {
    name: '南平市'
  },
  {
    name: '宁德市'
  }
]
const convertData = function (data) {
  const scatterData = []
  for (let i = 0; i < data.length; i++) {
    const geoCoord = geoCoordMap[data[i].name]
    if (geoCoord) {
      scatterData.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return scatterData
}
export default {
  name: '',
  components: {
    mapChart
  },
  props: {},
  data () {
    return {
      // img: require('@/assets/pageBg.png')
      barOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
          }
        }]
      },
      lineOption: {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      },
      pieOption: {
        title: {
          text: 'Referer of a Website',
          subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#fff'
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },
      mapOptions: {}
    }
  },
  computed: {},
  created () {
    // let a = 123
  },
  mounted () {
    this.$nextTick(() => {
      fullScreen.open()
      this.initMap()
    })
  },
  methods: {
    initMap () {
      const newData = [
        {
          // 名字需要与 “common/map/fujian.js” 地图数据文件里面定义的一一对应，不能是 “福州” 或者 “闽” 之类的缩写
          name: '福州市',
          value: 10,
          elseData: {
            // 这里放置地图 tooltip 里想显示的数据
          }
        },
        {
          name: '厦门市',
          value: 9
        },
        {
          name: '漳州市',
          value: 8
        },
        {
          name: '泉州市',
          value: 7
        },
        {
          name: '三明市',
          value: 6
        },
        {
          name: '莆田市',
          value: 5
        },
        {
          name: '南平市',
          value: 4
        },
        {
          name: '龙岩市',
          value: 3
        },
        {
          name: '宁德市',
          value: 2
        }
      ]
      this.mapOptions = {
        showLegendSymbol: true,
        tooltip: {
          trigger: 'item',
          textStyle: {
            fontSize: 14,
            lineHeight: 22
          },
          position: point => {
            // 固定在顶部
            return [point[0] + 50, point[1] - 20]
          }
          // 如果需要自定义 tooltip样式，需要使用formatter
          /*
              formatter: params => {
                return `<div style=""> ... </div>`
              }
            */
        },
        visualMap: {
          min: 0,
          max: 10,
          show: false,
          seriesIndex: 0,
          // 颜色
          inRange: {
            color: ['rgba(41,166,206, .5)', 'rgba(69,117,245, .9)']
          }
        },
        // 底部背景
        geo: {
          show: true,
          aspectScale: 0.85, // 长宽比
          zoom: 1.2,
          top: '10%',
          left: '16%',
          map: 'fujian',
          roam: false,
          itemStyle: {
            normal: {
              areaColor: 'rgba(0,0,0,0)',
              shadowColor: 'rgba(7,114,204, .8)',
              shadowOffsetX: 5,
              shadowOffsetY: 5
            },
            emphasis: {
              areaColor: '#00aeef'
            }
          }
        },
        series: [
          {
            name: '相关指数',
            type: 'map',
            aspectScale: 0.85, // 长宽比
            zoom: 1.2,
            mapType: 'fujian', // 自定义扩展图表类型
            top: '10%',
            left: '16%',
            itemStyle: {
              normal: {
                color: 'red',
                areaColor: 'rgba(19,54,162, .5)',
                borderColor: 'rgba(0,242,252,.3)',
                borderWidth: 1,
                shadowBlur: 7,
                shadowColor: '#00f2fc'
              },
              emphasis: {
                areaColor: '#4f7fff',
                borderColor: 'rgba(0,242,252,.6)',
                borderWidth: 2,
                shadowBlur: 10,
                shadowColor: '#00f2fc'
              }
            },
            label: {
              formatter: params => `${params.name}`,
              show: true,
              position: 'insideRight',
              textStyle: {
                fontSize: 14,
                color: '#efefef'
              },
              emphasis: {
                textStyle: {
                  color: '#fff'
                }
              }
            },
            data: newData
          },
          {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            symbolSize: 7,
            effectType: 'ripple',
            legendHoverLink: false,
            showEffectOn: 'render',
            rippleEffect: {
              period: 4,
              scale: 2.5,
              brushType: 'stroke'
            },
            zlevel: 1,
            itemStyle: {
              normal: {
                color: '#99FBFE',
                shadowBlur: 5,
                shadowColor: '#fff'
              }
            },
            data: convertData(seriesData)
          }
        ]
      }
    }
  }
}
</script>
<style lang='less' scoped>
.data-view{
  width: 100%;
  height: 100%;
  background: url('@/assets/pageBg.png') no-repeat;
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box{
    height: 30%;
  }
}
</style>
