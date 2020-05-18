<template>
  <div>
    <Trends
      name="Active"
      :series-data="chartData"
      color="#3182CE"
      min="2020-03-20"
      chart-type="area"
      title-y="Number of active cases"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Active',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const active = []
      keys.forEach((key, i) => {
        const values =
          this.weekly.data[key].total_cases -
          (this.weekly.data[key].recovered + this.weekly.data[key].deaths)
        active.push({ x: key, y: values })
      })

      return active
    }
  }
}
</script>
