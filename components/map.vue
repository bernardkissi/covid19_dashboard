<template>
  <div class="mt-5">
    <div
      class="flex items-center justify-center p-2 text-xs dark:text-gray-500 text-gray-600 -ml-16 font-medium"
    >
      Click anywhere on the map to interact
    </div>
    <keep-alive>
      <div id="map" ref="mapdiv"></div>
    </keep-alive>
    <div class="mt-1 text-gray-700">
      <div class="flex items-center justify-start">
        <svg class="h-6 w-6 mt-2 mr-1" viewBox="0 0 24 24">
          <path
            d="M10 2.253v13m0-13C8.832 1.477 7.246 1 5.5 1S2.168 1.477 1 2.253v13C2.168 14.477 3.754 14 5.5 14s3.332.477 4.5 1.253m0-13C11.168 1.477 12.754 1 14.5 1s3.332.477 4.5 1.253v13C17.832 14.477 16.246 14 14.5 14s-3.332.477-4.5 1.253"
            stroke="#718096"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3 class="text-base font-bold">Current Map Insights</h3>
      </div>

      {{ getHighName }} Region has the highest number {{ high }} in
      {{ caseSelected }} cases and {{ getLowName }} Region has the least number
      {{ low }} in {{ caseSelected }} cases.
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    region: '',
    map: {},
    high: 0,
    low: 0,
    polygonSeries: {},
    heatLegend: {},
    polyTemplate: {},
    activated: '',
    minColor: '#C53030',
    maxColor: '#C53030',
    colors: [
      {
        name: 'confirmed',
        outline: '#FED7D7',
        active: '#E53E3E',
        hover: '#c53030',
        heat: '#C53030',
        min: 2
      },
      {
        name: 'active',
        outline: '#ffffff', // #63B3ED
        active: '#3182CE',
        hover: '#2B6CB0',
        heat: '#2B6CB0',
        heatMax: '#3182CE',
        min: 1.2
      },
      {
        name: 'recovered',
        outline: '#ffffff',
        active: '#38A169',
        hover: '#2F855A',
        heat: '#48BB78',
        min: 0.6
      },
      {
        name: 'deceased',
        outline: '#ffffff',
        active: '#718096',
        hover: '#4A5568',
        heat: '#4A5568',
        min: 0.8
      }
    ],
    states: [
      { name: 'North East', id: 'GH-NE' },
      { name: 'Northern', id: 'GH-NP' },
      { name: 'Upper East', id: 'GH-UE' },
      { name: 'Upper West', id: 'GH-UW' },
      { name: 'Oti', id: 'GH-OT' },
      { name: 'Bono East', id: 'GH-BE' },
      { name: 'Ashanti', id: 'GH-AH' },
      { name: 'Bono', id: 'GH-BO' },
      { name: 'Ahafo', id: 'GH-AF' },
      { name: 'Eastern', id: 'GH-EP' },
      { name: 'Volta', id: 'GH-TV' },
      { name: 'Central', id: 'GH-CP' },
      { name: 'Western North', id: 'GH-WN' },
      { name: 'Greater Accra', id: 'GH-AA' },
      { name: 'Western', id: 'GH-WP' },
      { name: 'Savannah', id: 'GH-SV' }
    ],
    cases: []
  }),
  computed: {
    ...mapGetters({
      active: 'regions/getMapRegion',
      totals: 'regions/getRegions',
      caseSelected: 'regions/getCaseType'
    }),
    selectedRegion() {
      return this.region
    },
    prepareData() {
      this.totals.map((region) => {
        this.cases.push({
          id: region.region_id,
          value: region[this.caseSelected]
        })
      })
      return this.cases
    },
    selectColor() {
      return this.colors.filter((color) => {
        return color.name === this.caseSelected
      })
    },
    getHighName() {
      let name = ''
      this.totals.map((region) => {
        if (region[this.caseSelected] === this.high) {
          name = region.name
        }
      })
      return name
    },
    getLowName() {
      let name = ''
      this.totals.map((region) => {
        if (region[this.caseSelected] === this.low) {
          name = region.name
        }
      })
      return name
    }
  },
  watch: {
    region(value) {
      this.changeRegion(value)
    },
    active(value) {
      this.setActiveState(value)
    },
    caseSelected(value) {
      this.recalculateData(value, this.selectColor)
    }
  },
  beforeMount() {
    this.cases = this.prepareData
  },
  mounted() {
    const _this = this
    const { am4core, am4maps, am4themesAnimated, ghanaMap } = this.$am4core()
    am4core.useTheme(am4themesAnimated)

    _this.map = am4core.create(this.$refs.mapdiv, am4maps.MapChart)
    _this.map.seriesContainer.draggable = false
    _this.map.seriesContainer.resizable = false
    _this.map.maxZoomLevel = 1
    _this.map.hiddenState.properties.opacity = 0
    // Create map polygon series
    _this.polygonSeries = _this.map.series.push(new am4maps.MapPolygonSeries())
    _this.polygonSeries.tooltip.getFillFromObject = false
    _this.polygonSeries.tooltip.background.fill = am4core.color('#1A202C')
    _this.polygonSeries.tooltip.outline = am4core.color('#1A202C')
    // Set map definition
    _this.map.geodata = ghanaMap

    // set map values
    _this.polygonSeries.data = _this.cases
    // eslint-disable-next-line

    // Set projection
    _this.map.projection = new am4maps.projections.Mercator()
    // Set min/max fill color for each area
    _this.polygonSeries.heatRules.push({
      property: 'fill',
      target: _this.polygonSeries.mapPolygons.template,
      min: am4core.color('#C53030').brighten(1.5),
      max: am4core.color('#C53030').brighten(-0.3)
    })

    const polygonTemplate = _this.polygonSeries.mapPolygons.template
    polygonTemplate.events.on('hit', (ev) => {
      const selectedRegion = ev.target.dataItem.dataContext
      _this.region = selectedRegion.name
    })
    // Make map load polygon data (state shapes and names) from GeoJSON
    _this.polygonSeries.useGeodata = true
    _this.polygonSeries.calculateVisualCenter = true
    polygonTemplate.tooltipPosition = 'fixed'
    // Set up heat legend
    _this.heatLegend = _this.map.createChild(am4maps.HeatLegend)
    _this.heatLegend.id = 'heatLegend'
    _this.heatLegend.series = _this.polygonSeries
    _this.heatLegend.align = 'right'
    _this.heatLegend.width = am4core.percent(30)
    _this.heatLegend.marginRight = am4core.percent(2)
    // _this.heatLegend.minValue = 0
    // _this.heatLegend.maxValue = _this.scale
    _this.heatLegend.valign = 'bottom'
    _this.heatLegend.valueAxis.renderer.labels.template.fontSize = 12
    _this.heatLegend.valueAxis.renderer.labels.template.fill = am4core.color(
      '#ffffff'
    )
    _this.heatLegend.markerCount = 5
    _this.heatLegend.margin(5, 15, 15, 5)

    _this.polygonSeries.mapPolygons.template.events.on('over', function(ev) {
      if (!isNaN(ev.target.dataItem.value)) {
        _this.heatLegend.valueAxis.showTooltipAt(ev.target.dataItem.value)
      } else {
        _this.heatLegend.valueAxis.hideTooltip()
      }
    })
    _this.polygonSeries.mapPolygons.template.events.on('out', function(ev) {
      _this.heatLegend.valueAxis.hideTooltip()
    })
    /// Set up custom heat map legend labels using axis ranges
    const minRange = _this.heatLegend.valueAxis.axisRanges.create()
    minRange.label.horizontalCenter = 'left'

    const maxRange = _this.heatLegend.valueAxis.axisRanges.create()
    maxRange.label.horizontalCenter = 'right'

    // Blank out internal heat legend value axis labels
    _this.heatLegend.valueAxis.renderer.labels.template.adapter.add(
      'text',
      function(labelText) {
        return ''
      }
    )

    // Update heat legend value labels
    _this.polygonSeries.events.on('datavalidated', function(ev) {
      _this.heatLegend = ev.target.map.getKey('heatLegend')
      const min = _this.heatLegend.series.dataItem.values.value.low
      const minRange = _this.heatLegend.valueAxis.axisRanges.getIndex(0)
      minRange.value = min
      minRange.label.text = '' + _this.heatLegend.numberFormatter.format(min)

      const max = _this.heatLegend.series.dataItem.values.value.high
      const maxRange = _this.heatLegend.valueAxis.axisRanges.getIndex(1)
      maxRange.value = max
      maxRange.label.text = '' + _this.heatLegend.numberFormatter.format(max)
      _this.high = max
      _this.low = min
    })

    polygonTemplate.tooltipText = '{name}: {value}'
    polygonTemplate.nonScalingStroke = true
    polygonTemplate.strokeWidth = 2
    polygonTemplate.stroke = am4core.color('#ffffff')
    polygonTemplate.propertyFields.id = 'id'

    // Configure label series
    const labelSeries = _this.map.series.push(new am4maps.MapImageSeries())
    const labelTemplate = labelSeries.mapImages.template.createChild(
      am4core.Label
    )
    labelTemplate.horizontalCenter = 'middle'
    labelTemplate.verticalCenter = 'middle'
    labelTemplate.fontSize = 10
    labelTemplate.interactionsEnabled = false
    labelTemplate.nonScaling = true

    _this.polygonSeries.events.on('inited', function() {
      _this.polygonSeries.mapPolygons.each(function(polygon) {
        const label = labelSeries.mapImages.create()
        const state = polygon.dataItem.dataContext.id.split('-').pop()
        label.latitude = polygon.visualLatitude
        label.longitude = polygon.visualLongitude
        label.children.getIndex(0).text = state
      })
    })

    // Create hover state and set alternative fill color
    const hs = polygonTemplate.states.create('hover')
    hs.properties.stroke = am4core.color('#c53030')
    hs.properties.strokeWidth = 4

    // Create active state
    const activeState = polygonTemplate.states.create('active')
    activeState.properties.fill = am4core.color('#C53030')
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose()
    }
  },
  methods: {
    ...mapActions({ changeRegion: 'regions/fetchRegion' }),
    setActiveState(value) {
      let id = ''
      this.states.filter((item) => {
        if (item.name === value) {
          id = item.id
        }
      })
      this.unsetActive(this.activated)
      this.polygonSeries.getPolygonById(id).isHover = true
      this.polygonSeries.getPolygonById(id).isActive = true
      this.activated = id
    },
    unsetActive(id) {
      if (id !== '') {
        this.polygonSeries.getPolygonById(id).isHover = false
        this.polygonSeries.getPolygonById(id).isActive = false
      }
    },
    recalculateData(value, colors) {
      this.cases = []
      this.totals.map((region) => {
        this.cases.push({
          id: region.region_id,
          value: region[value]
        })
      })
      this.polygonSeries.data = this.cases
      this.changeOutlineColor(colors[0].outline)
      this.changeHeatColors(colors[0].heat, colors[0].min)
      this.setlegendMaxValue(colors[0].heat, colors[0].min)
      this.changeActiveState(colors[0].active)
      this.changeHoverColor(colors[0].hover)
    },
    changeOutlineColor(color) {
      const { am4core } = this.$am4core()
      const polygonTemplate = this.polygonSeries.mapPolygons.template
      polygonTemplate.stroke = am4core.color(color)
    },
    changeActiveState(color) {
      const { am4core } = this.$am4core()
      const polygonTemplate = this.polygonSeries.mapPolygons.template
      const active = polygonTemplate.states.create('active')
      active.properties.fill = am4core.color(color)
    },
    changeHoverColor(color) {
      const { am4core } = this.$am4core()
      const polygonTemplate = this.polygonSeries.mapPolygons.template
      const hover = polygonTemplate.states.create('hover')
      hover.properties.fill = am4core.color(color)
      hover.properties.stroke = am4core.color(color)
    },
    changeHeatColors(color, saturation) {
      const { am4core } = this.$am4core()
      this.polygonSeries.heatRules.push({
        property: 'fill',
        target: this.polygonSeries.mapPolygons.template,
        min: am4core.color(color).brighten(saturation),
        max: am4core.color(color).brighten(-0.3)
      })
    },
    setlegendMaxValue(color, saturation) {
      const { am4core } = this.$am4core()
      this.heatLegend.minColor = am4core.color(color).brighten(saturation)
      this.heatLegend.maxColor = am4core.color(color).brighten(-0.3)
    }
  }
}
</script>
<style>
#map {
  width: 100%;
  height: 500px;
}
.fade-enter-active,
fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
