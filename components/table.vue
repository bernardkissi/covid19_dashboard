<template>
  <div>
    <div class="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <table class="min-w-full overflow-hidden">
        <thead>
          <tr>
            <th
              class="w-2/5 px-5 py-3 border-b dark:border-gray-800 dark:bg-gray-900 bg-gray-400 text-left text-xs leading-4 font-bold dark:text-gray-200 text-gray-800 uppercase tracking-wider border-r border-gray-100"
            >
              Regions
            </th>
            <th
              class="w-1/6 px-5 py-3 border-b dark:border-gray-800 dark:bg-gray-900 bg-gray-400 text-left text-xs leading-4 font-bold dark:text-gray-200 text-gray-800 uppercase tracking-wider border-r border-gray-100"
            >
              Confirmed
            </th>
            <th
              class="w-1/6 px-5 py-3 border-b dark:border-gray-800 dark:bg-gray-900 bg-gray-400 text-left text-xs leading-4 font-bold dark:text-gray-200 text-gray-800 uppercase tracking-wider border-r border-gray-100"
            >
              Active
            </th>
            <th
              class="w-1/6 px-5 py-3 border-b dark:border-gray-800 dark:bg-gray-900 bg-gray-400 text-left text-xs leading-4 font-bold dark:text-gray-200 text-gray-800 uppercase tracking-wider border-r border-gray-100"
            >
              Recover
            </th>
            <th
              class="w-1/6 px-5 py-3 border-b dark:border-gray-800 dark:bg-gray-900 bg-gray-400 text-left text-xs leading-4 font-bold dark:text-gray-200 text-gray-800 uppercase tracking-wider border-r border-gray-100"
            >
              Deaths
            </th>
          </tr>
        </thead>
        <transition-group tag="tbody" name="component-fade" mode="out-in">
          <tr
            v-for="region in searchResults"
            :key="region.uuid"
            class="dark-hover:bg-gray-700 hover:bg-gray-200 focus:bg-gray-700 cursor-pointer"
            :class="{
              'dark:bg-gray-700 bg-gray-200 border-b border-gray-600':
                isSelected.name === region.name
            }"
            @click.prevent="setRegion(region.name)"
          >
            <td
              class="w-2/5 px-5 py-4 leading-4 text-xs dark:text-gray-100 text-gray-800 font-bold border-b border-gray-400 dark:border-gray-600  bg-gray-200 dark:bg-gray-700 uppercase tracking-wider"
            >
              <div class="flex items-center">
                <span>
                  <svg
                    class="fill-current h-4 w-4 mt-1 cursor-pointer "
                    :class="{
                      'text-green-600': region.active === 0,
                      'text-red-500': region.active > 0
                    }"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
                  </svg>
                </span>
                <span class="ml-1 lg:whitespace-no-wrap">{{
                  region.name
                }}</span>
              </div>
            </td>
            <td
              class="w-1/6 px-3 py-4 text-right border-b border-gray-400 dark:border-gray-600"
            >
              <div class="flex items-center justify-end">
                <!-- <span class="text-red-400 text-xs font-medium -ml-1">+23</span> -->
                <span class="font-medium ml-2">
                  {{ region.confirmed }}
                </span>
              </div>
            </td>
            <td
              class="w-1/6 px-3 py-4 text-right border-b border-gray-400 dark:border-gray-600 font-semibold"
            >
              {{ region.active }}
            </td>
            <td
              class="w-1/6 px-3 py-4 text-right border-b  border-gray-400 dark:border-gray-600  font-semibold"
            >
              <div class="flex items-center justify-end">
                <!--  <span class="text-green-400 text-xs font-semibold -ml-1"
                  >+13</span
                > -->
                <span class="font-semibold ml-2 text-green-400">
                  {{ region.recovered }}
                </span>
              </div>
            </td>
            <td
              class="w-1/6 px-3 py-4 text-right border-b  border-gray-400 dark:border-gray-600  font-bold text-red-500"
            >
              {{ region.deceased }}
            </td>
          </tr>
        </transition-group>
      </table>
    </div>
    <div v-if="totalResults <= 0" class="dark:bg-gray-900 bg-gray-200 p-6">
      <div class="flex items-center justify-center">
        <svg
          class="h-5 w-5 dark:text-gray-200 text-gray-700"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
            stroke="#CBD5E0"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <span class="ml-3 text-sm font-medium dark:text-gray-400 text-gray-600"
          >Sorry we couldn't find the region</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Table',
  props: {
    searchKeyword: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    bgray: 'bg-gray-700',
    selected: '',
    isDistrict: null
  }),
  computed: {
    ...mapGetters({
      regions: 'regions/getRegions',
      isSelected: 'regions/getRegion'
    }),
    searchResults() {
      const keyword = this.searchKeyword.toLowerCase()

      if (keyword !== '') {
        return this.regions.filter(function(region) {
          return region.name.toLowerCase().match(keyword)
        })
      }
      return this.regions
    },
    totalResults() {
      return this.searchResults.length
    }
  },
  watch: {
    selected(value) {
      this.changeRegion(value)
    }
  },
  mounted() {
    this.$echo.channel('regional').on('.corona.regional', (e) => {
      this.update(e)
      this.changeRegion(this.isSelected.name)
    })
  },
  methods: {
    setRegion(name) {
      this.selected = name
      this.isDistrict = null
    },
    ...mapActions({
      changeRegion: 'regions/fetchRegion',
      update: 'regions/updateRegions'
    })
  }
}
</script>
<style>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
