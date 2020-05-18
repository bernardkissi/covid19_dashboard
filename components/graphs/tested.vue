<template>
  <div>
    <Trends
      name="Tested"
      :series-data="chartData"
      color="#805AD5"
      min="2020-03-20"
      chart-type="area"
      title-y="Number of people tested"
    />
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Trends from '@/components/trends'
export default {
  name: 'Tested',
  components: {
    Trends
  },
  computed: {
    ...mapGetters({ weekly: 'trends/getWeekly' }),
    chartData() {
      const keys = Object.keys(this.weekly.data)
      const tested = []
      keys.forEach((key, i) => {
        tested.push([key, this.weekly.data[key].tested])
      })

      return tested
    }
  }
}
</script>
