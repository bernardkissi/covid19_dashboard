<template>
  <div
    class="text-gray-700 dark:text-gray-200 max-w-7xl rounded-md mt-1 lg:py-10 py-6 px-4 sm:px-8 lg:px-8 mx-auto"
  >
    <div class="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-12">
      <div class="col-span-1 lg:col-span-2">
        <label for="search">
          <div class="font-medium text-base text-center text-gray-800">
            Search Regions
          </div>
          <div class="relative">
            <input
              id="search"
              v-model="search"
              class="outline-none p-4 px-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-md w-full shadow-xl 
                  dark:placeholder-gray-300 placeholder-gray-700"
              type="text"
              placeholder="Eg. Greater Accra, Ashanti, Northen"
            />
            <div class="absolute top-0">
              <svg class="h-6 w-6 mt-4 ml-6" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#4A5568"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </label>

        <div class="flex items-center justify-center mt-8">
          <button
            class="dark-focus:outline-none focus:outline-none px-4 py-2 dark:bg-gray-700 bg-gray-300 dark:text-gray-100 rounded-md dark-hover:bg-gray-600 font-semibold hover:bg-gray-400 transition duration-500 ease-in-out"
            :class="{
              'dark:bg-gray-900 dark:text-white bg-blue-600 text-white px-4  py-2 shadow-lg': isGhana
            }"
            @click="dynamicComponent('Overall')"
          >
            Total Cases
          </button>
          <button
            class="dark-focus:outline-none focus:outline-none ml-2 px-4 py-2 dark:bg-gray-700 bg-gray-300 dark:text-gray-100 rounded-md font-semibold dark-hover:bg-gray-600  hover:bg-gray-400 transition  duration-500 ease-in-out"
            :class="{
              'dark:bg-gray-900 dark:text-white bg-blue-600 text-white px-4  py-2 shadow-lg': isToday
            }"
            @click="dynamicComponent('Today')"
          >
            <span class="">Cases</span> Today
          </button>
          <button
            class="dark-focus:outline-none focus:outline-none ml-2 px-4 py-2 dark:bg-gray-700 bg-gray-300 dark:text-gray-100 rounded-md font-semibold dark-hover:bg-gray-600 hover:bg-gray-400 transition  duration-500 ease-in-out"
            :class="{
              'dark:bg-gray-900 dark:text-white bg-blue-600 text-white py-2 shadow-lg': isWorld
            }"
            @click="dynamicComponent('World')"
          >
            World <span class="hidden md:inline-flex">Cases</span>
          </button>
        </div>
        <!-- maincards -->
        <transition name="component-fade" mode="out-in">
          <keep-alive>
            <component :is="activeComponent"></component>
          </keep-alive>
        </transition>
        <!-- end of cards -->
        <!-- Table Entry-->
        <div
          class="mt-8 mb-3 text-xs text-gray-700 dark:text-gray-400 font-normal tracking-wide text-right"
        >
          Data Sources:
          <nuxt-link
            class="px-1 border-b-4 border-blue-400 hover:bg-blue-100"
            to="/about"
          >
            Read more</nuxt-link
          >
        </div>
        <!-- Actual Table -->
        <Table :search-keyword="search" />
        <!-- Actual Table Ends  -->
        <!-- end of table -->
        <div class="mt-6 text-gray-800">
          <div class="text-xl font-semibold">
            Questions we get asked
          </div>
          <div class="mt-3">
            <h1 class="text-base font-semibold">What are your sources?</h1>
            <p class="dark:text-gray-500 text-gray-700 text-sm leading-5">
              We are using state bulletins and official government handles to
              update our numbers. The data is validated by a group of volunteers
              and published into a Google sheet and an API.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">
              Where can I find the data for this?
            </h1>
            <p class="dark:text-gray-500 text-gray-700 text-sm leading-5">
              If you want access to our data API or raw sheet data, kindly send
              an email to bernardkissi18@gmail.com stating the purpose of use.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Who are you ?</h1>
            <p class="dark:text-gray-500 text-gray-700 text-sm leading-5">
              We are a group of dedicated volunteers who curate and verify the
              data coming from several sources.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Are you offical?</h1>
            <p class="dark:text-gray-500 text-gray-700 text-sm leading-5">
              No we are not offical, but we seek to help in the fight against
              virus.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Do you want to support?</h1>
            <p class="dark:text-gray-500 text-gray-700 text-sm leading-5">
              Support volunteers to keep on the fight against coronavirus
            </p>
            <a
              href="https://dashboard.flutterwave.com/donate/ode7kguxvkkg"
              rel="noreferrer noopener"
              target="_blank"
            >
              <button
                class="mt-4 mb-8 lg:mb-0 py-2 px-3 bg-green-600 text-white rounded-md font-bold uppercase text-xs"
              >
                Support our Cloud Hosting
              </button>
            </a>
          </div>
        </div>
      </div>
      <div
        class="col-span-1 lg:col-span-2 lg:border-none border-t border-gray-400 dark:border-gray-700 pt-4 md:pt-0"
      >
        <div class="flex items-start justify-between">
          <div>
            <div class="text-2xl font-semibold text-gray-800">
              Regional Breakdown
            </div>
            <div class="mb-4 font-normal text-gray-700 dark:text-gray-400">
              View regional distribution of cases and trends. Click on cards to
              view map details
            </div>
          </div>
        </div>
        <!-- inser regional cards -->
        <Regional />
        <!-- end of regional cards -->
        <!-- regional map -->
        <Map />
        <!-- end of regional map -->
        <!-- Spread trends weekly -->
        <div class="mt-8 text-gray-800">
          <div class="text-2xl font-semibold">
            Spread Trends
          </div>
          <div class="mb-2 font-normal dark:text-gray-500 text-gray-700">
            View weekly updates of coronavirus across Ghana.
          </div>
          <div class="flex items-center py-2">
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 px-1 md:px-3 py-2 font-medium rounded-md tracking-wide"
              :class="{
                'dark:bg-red-500 dark:text-white bg-red-600 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Confirmed'
              }"
              @click="dynamicTrend('Confirmed')"
            >
              Confirmed
            </button>
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md
              transition  duration-500 ease-in-out"
              :class="{
                'dark:bg-blue-500 dark:text-white bg-blue-600 text-white px-3 py-2 shadow-lg':
                  activeTrend === 'Active'
              }"
              @click="dynamicTrend('Active')"
            >
              Active
            </button>
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-3 py-2 font-medium tracking-wide rounded-md
              transition  duration-500 ease-in-out"
              :class="{
                'dark:bg-green-500 dark:text-white bg-green-600 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Recovered'
              }"
              @click="dynamicTrend('Recovered')"
            >
              Recovered
            </button>
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md
              transition  duration-500 ease-in-out"
              :class="{
                'dark:bg-gray-900 dark:text-white bg-gray-600 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Deaths'
              }"
              @click="dynamicTrend('Deaths')"
            >
              Deaths
            </button>
          </div>
          <!-- insert cards -->
          <!-- maincards -->
          <transition name="component-fade" mode="out-in">
            <component :is="activeTrend"></component>
          </transition>
          <!-- end of cards -->
        </div>
        <!-- end of spread trends -->
        <!-- demographics -->
        <div class="mt-8 text-gray-800">
          <div class="text-2xl font-semibold">
            General Information
          </div>
          <div class="mb-2 font-normal dark:text-gray-500 text-gray-700">
            View weekly trends of coronavirus across Ghana.
          </div>
          <div class="flex items-center py-2 text-gray-800">
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md
              transition  duration-500 ease-in-out"
              :class="{
                'dark:bg-purple-500 dark:text-white bg-purple-500 text-white px-4 py-2 shadow-lg':
                  activeDemo === 'Tested'
              }"
              @click="dynamicDemo('Tested')"
            >
              Test Performed
            </button>
            <button
              class="dark-focus:outline-none focus:outline-none dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md
              transition  duration-500 ease-in-out"
              :class="{
                'dark:bg-orange-500 dark:text-white bg-orange-600 text-white px-4 py-2 shadow-lg':
                  activeDemo === 'Critical'
              }"
              @click="dynamicDemo('Critical')"
            >
              Critical Cases
            </button>
          </div>
          <!-- start -->
          <!-- maincards -->
          <transition name="component-fade" mode="out-in">
            <component :is="activeDemo"></component>
          </transition>
          <!-- end of cards -->
          <!-- end of  -->
        </div>
        <!-- end -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import Overall from '@/components/overall'
import Today from '@/components/today'
import World from '@/components/world'
import Table from '@/components/table'
import Regional from '@/components/regional'
import Map from '@/components/map'

export default {
  transition: 'component-fade',
  components: {
    Overall,
    Today,
    World,
    Regional,
    Table,
    Map,
    Active: () => import('@/components/graphs/active'),
    Deaths: () => import('@/components/graphs/deaths'),
    Tested: () => import('@/components/graphs/tested'),
    Confirmed: () => import('@/components/graphs/confirmed'),
    Recovered: () => import('@/components/graphs/recovered'),
    Critical: () => import('@/components/graphs/critical')
  },
  async fetch({ store, from }) {
    const intialPageLoad = !from
    if (intialPageLoad) {
      await Promise.all([
        store.dispatch('regions/fetchRegions'),
        store.dispatch('trends/fetchTrends'),
        store.dispatch('summaries/fetchWorld')
      ])
    }
  },
  data: () => ({
    search: '',
    activeComponent: 'Overall',
    activeTrend: 'Confirmed',
    activeDemo: 'Critical'
  }),
  computed: {
    isGhana() {
      if (this.activeComponent === 'Overall') {
        return true
      }
      return false
    },
    isWorld() {
      if (this.activeComponent === 'World') {
        return true
      }
      return false
    },
    isToday() {
      if (this.activeComponent === 'Today') {
        return true
      }
      return false
    }
  },
  mounted() {
    this.$echo.channel('daily').listen('.total.world', (e) => {
      this.update(e)
      // eslint-disable-next-line
      console.log(e)
    })

    this.$echo.channel('daily').listen('.corona.weekly', (e) => {
      this.weeklyUpdate(e.data)
      // eslint-disable-next-line
      console.log(e)
    })
  },
  methods: {
    ...mapActions({
      update: 'summaries/updateWorld',
      weeklyUpdate: 'trends/updateWeekly'
    }),
    dynamicComponent(component) {
      this.activeComponent = component
    },
    dynamicTrend(component) {
      this.activeTrend = component
    },
    dynamicDemo(component) {
      this.activeDemo = component
    }
  }
}
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.2s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
