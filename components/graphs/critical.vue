<template>
  <div>
    <Trends
      name="Criical"
      :series-data="chartData"
      color="#ED8936"
      min="2020-03-20"
      chart-type="area"
      title-y="Number of critical cases"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Critical',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const critical = []
      keys.forEach((key, i) => {
        critical.push([key, this.weekly.data[key].critical])
      })

      return critical
    }
  }
}
</script>
