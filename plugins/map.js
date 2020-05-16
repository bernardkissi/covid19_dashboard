import Vue from 'vue'
import * as am4core from '@amcharts/amcharts4/core'
import * as am4maps from '@amcharts/amcharts4/maps'
import am4themesAnimated from '@amcharts/amcharts4/themes/animated'
import ghanaMap from '~/plugins/map/ghana'

am4core.useTheme(am4themesAnimated)

Vue.prototype.$am4core = () => {
  return {
    am4core,
    am4maps,
    am4themesAnimated,
    ghanaMap
  }
}
