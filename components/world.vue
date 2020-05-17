<template>
  <div>
    <div
      class="font-medium mt-3 text-center text-sm text-gray-700 dark:text-gray-500"
    >
      Global coronavirus spread statistics
    </div>
    <div class="flex items-center justify-between md:mt-0 -mt-1">
      <div
        class="w-1/4 mr-2 md:mr-4 py-4 bg-red-300 shadow md:border-red-600 border-b-4 border-red-600 mt-4 rounded-md"
      >
        <div class="flex flex-col justify-between">
          <div
            class="tracking-normal text-red-700 uppercase text-xs md:text-sm font-extrabold text-center"
          >
            Cases
          </div>
          <div
            class="text-xs md:text-sm text-red-600 mt-1 md:mt-0 font-medium text-center"
          >
            + 0
          </div>
          <div
            class="text-base md:text-xl mt-1 md:mt-0 font-bold text-red-700  text-center"
          >
            <span class="hidden md:block">{{
              summaries.data.total_cases.toLocaleString()
            }}</span>
            <span class="block md:hidden">{{
              summaries.data.total_cases | formatValue
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="w-1/4 mr-2 md:mr-4 py-4 bg-blue-300 shadow border-b-4 border-blue-600 mt-4 rounded-md"
      >
        <div class="flex flex-col justify-between">
          <div
            class="tracking-normal text-blue-700 uppercase text-xs md:text-sm font-extrabold text-center"
          >
            Active
          </div>
          <div
            class="text-xs md:text-sm text-blue-600 mt-1 md:mt-0 font-medium text-center"
          >
            + 0
          </div>
          <div
            class="text-base md:text-xl mt-1 md:mt-0 font-bold text-blue-700 text-center"
          >
            <span class="hidden md:block">{{ Active.toLocaleString() }}</span>
            <span class="block md:hidden">{{ Active | formatValue }}</span>
          </div>
        </div>
      </div>
      <div
        class="w-1/4 mr-2 md:mr-4 py-4 bg-green-300 border-b-4 shadow border-green-600 mt-4 rounded-md"
      >
        <div class="flex flex-col justify-between">
          <div
            class="tracking-normal text-green-700 uppercase text-xs md:text-sm font-extrabold text-center"
          >
            Recover
          </div>
          <div
            class="text-xs md:text-sm text-green-600 font-medium mt-1 md:mt-0  text-center"
          >
            + 0
          </div>
          <div
            class="text-base md:text-xl mt-1 md:mt-0 font-bold text-green-700 text-center"
          >
            <span class="hidden md:block">{{
              summaries.data.recovered.toLocaleString()
            }}</span>
            <span class="block md:hidden">{{
              summaries.data.recovered | formatValue
            }}</span>
          </div>
        </div>
      </div>
      <div
        class="w-1/4 py-4 bg-gray-300 border-b-4 dark:border-gray-400 border-gray-600 shadow dark:border-gray-200 mt-4 rounded-md"
      >
        <div class="flex flex-col justify-between">
          <div
            class="tracking-normal md:text-gray-600 text-gray-500 uppercase text-xs md:text-sm font-bold text-center"
          >
            Deaths
          </div>
          <div
            class="text-xs md:text-sm text-gray-500 font-medium mt-1 md:mt-0 text-center"
          >
            + 0
          </div>
          <div
            class="text-base md:text-xl mt-1 md:mt-0 font-bold text-gray-700 text-center"
          >
            <span class="hidden md:block">{{
              summaries.data.deaths.toLocaleString()
            }}</span>
            <span class="block md:hidden">{{
              summaries.data.deaths | formatValue
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'World',
  filters: {
    formatValue(value) {
      if (value >= 1000000) {
        value = parseFloat(value / 1000000).toFixed(1) + 'M'
      } else if (value >= 1000) {
        value = parseFloat(value / 1000).toFixed(0) + 'K'
      }
      return value
    }
  },
  computed: {
    ...mapGetters({ summaries: 'summaries/getWorld' }),
    Active() {
      return (
        this.summaries.data.total_cases -
        (this.summaries.data.recovered + this.summaries.data.deaths)
      )
    }
  },
  // mounted() {
  //   this.$echo.channel('daily').listen('.total.world', (e) => {
  //     this.update(e.data)
  //   })
  // },
  methods: {
    ...mapActions({ update: 'summaries/updateWorld' })
  }
}
</script>
