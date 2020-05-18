<template>
  <div>
    <Trends
      name="Recovered"
      :series-data="chartData"
      color="#48BB78"
      min="2020-03-20"
      chart-type="area"
      title-y="Number of recovered cases"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Recovered',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const recovered = []
      keys.forEach((key, i) => {
        recovered.push([key, this.weekly.data[key].recovered])
      })

      return recovered
    }
  }
}
</script>
