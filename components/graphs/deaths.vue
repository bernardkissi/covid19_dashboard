<template>
  <div>
    <Trends
      name="Deaths"
      :series-data="chartData"
      color="#718096"
      min="2020-03-20"
      chart-type="area"
      title-y="Number of death cases"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Deaths',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const deaths = []
      keys.forEach((key, i) => {
        deaths.push([key, this.weekly.data[key].deaths])
      })

      return deaths
    }
  }
}
</script>
