<template>
  <div>
    <keep-alive>
      <VueApexCharts
        :type="chartType"
        :options="chartOptions"
        :series="series"
      />
    </keep-alive>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Trends',
  props: {
    seriesData: {
      type: Array,
      required: true,
      default: () => []
    },
    color: {
      type: String,
      required: true,
      default: '#4299E1'
    },
    name: {
      type: String,
      required: true
    },
    min: {
      type: String,
      required: true,
      default: ''
    },
    chartType: {
      type: String,
      required: true,
      default: 'bar'
    },
    titleY: {
      type: String,
      required: true,
      default: ''
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          width: '100%',
          foreColor: '#4A5568',
          animations: {
            enabled: false,
            initialAnimation: {
              enabled: false
            }
          },
          id: 'vuechart-example',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: false,
              position: 'top'
            },
            columnWidth: '20%',
            endingShape: 'rounded'
          }
        },
        grid: {
          show: true,
          borderColor: '#CBD5E0'
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 6,
          tickPlacement: 'on',
          min: new Date('2020-05-03').getTime()
        },
        tooltip: {
          theme: 'dark',
          x: {
            format: 'dd MMM yyyy'
          },
          marker: {
            show: false
          }
        },
        fill: {
          colors: [this.color]
        },
        stroke: {
          curve: 'smooth',
          colors: [this.color]
        },
        noData: {
          text: undefined,
          align: 'center'
        },
        yaxis: {
          show: true,
          showAlways: true,
          title: {
            text: this.titleY,
            rotate: 90,
            style: {
              fontSize: '13px',
              color: this.ycolor,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
              fontWeight: 600
            }
          }
        }
      },
      series: [
        {
          name: this.name,
          data: this.seriesData
        }
      ]
    }
  },
  computed: {
    ...mapGetters({ theme: 'trends/getTheme' })
  },
  watch: {
    seriesData(value) {
      this.updateChart(value)
    },
    theme(value) {
      this.updateForeColor(value)
    }
  },
  mounted() {
    this.updateForeColor(this.theme)
  },
  methods: {
    updateChart(value) {
      this.series = [
        {
          data: value
        }
      ]
    },
    updateForeColor(value) {
      let color = ''
      let border = ''
      if (value !== 'light') {
        color = '#E2E8F0'
        border = '#4A5568'
      } else {
        color = '#4A5568'
        border = '#E2E8F0'
      }
      this.chartOptions = {
        ...this.chartOptions,
        chart: {
          foreColor: color
        },
        grid: {
          borderColor: border
        }
      }
    }
  }
}
</script>

<style></style>
