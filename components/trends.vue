<template>
  <div>
    <VueApexCharts :type="chartType" :options="chartOptions" :series="series" />
  </div>
</template>

<script>
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
          height: '40%',
          width: '100%',
          foreColor: '#E2E8F0',
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
          borderColor: '#4A5568'
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
        yaxis: {
          show: true,
          showAlways: true,
          title: {
            text: this.titleY,
            rotate: 90,
            style: {
              fontSize: '13px',
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
  watch: {
    seriesData(value) {
      this.updateChart(value)
    }
  },
  methods: {
    updateChart(value) {
      this.series = [
        {
          data: value
        }
      ]
    }
  }
}
</script>

<style></style>
