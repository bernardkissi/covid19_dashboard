<template>
  <div>
    <Trends
      name="Confirmed"
      :series-data="chartData"
      color="#E53E3E"
      min="2020-03-14"
      chart-type="area"
      title-y="Number of confirmed cases"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Confirmed',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const confirmed = []
      keys.forEach((key, i) => {
        confirmed.push([key, this.weekly.data[key].total_cases])
      })

      return confirmed
    }
  }
}
</script>
