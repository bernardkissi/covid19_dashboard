<template>
  <div>
    <div v-if="$nuxt.isOffline">
      <div
        class="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <svg
          class="fill-current text-red-500 h-4 w-4 mt-2 cursor-pointer "
          viewBox="0 0 24 24"
        >
          <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
        <span class="text-gray-300 font-medium">
          You lost connection and might not get recent updates
        </span>
      </div>
    </div>
    <div v-if="$nuxt.isOnline">
      <div
        class="flex items-center justify-center px-4 py-2 bg-gray-200 dark:bg-gray-700"
      >
        <svg
          class="fill-current text-green-500 h-4 w-4 mt-2 cursor-pointer "
          viewBox="0 0 24 24"
        >
          <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
        </svg>
        <span class="text-sm text-gray-700 dark:text-gray-300 font-medium">
          Last updated
          <timeago datetime="2020-05-16 07:35:00" :auto-update="10"></timeago>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
export default {
  computed: {
    // ...mapGetters({ total: 'trends/getTotals' }),
    // getDate() {
    //   const key = Object.keys(this.total.spots)
    //   return this.total.spots[key].date.date
    // }
  }
}
</script>
