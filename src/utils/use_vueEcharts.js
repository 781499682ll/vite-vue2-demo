import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import { CanvasRenderer } from 'echarts/renderers'
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'

import {
  PieChart,
  BarChart,
  LineChart,
} from 'echarts/charts'

use([
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,


  // 增加需要的图表
  PieChart,
  BarChart,
  LineChart,
])


// register globally 
export default app => {
  app.component('v-chart', ECharts);
}