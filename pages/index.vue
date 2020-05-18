<template>
  <div
    class="text-gray-700 dark:text-gray-200 max-w-7xl rounded-md mt-1 lg:py-10 py-6 px-4 sm:px-8 lg:px-8 mx-auto"
  >
    <div class="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-12">
      <div class="col-span-1 lg:col-span-2">
        <div class="relative">
          <input
            v-model="search"
            class="outline-none p-4 px-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-md w-full shadow-xl 
            dark:placeholder-gray-300 placeholder-gray-700"
            type="text"
            placeholder="Search Regions, eg. Greater Accra, Ashanti, Northen"
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

        <div class="flex items-center justify-center mt-8">
          <button
            class="dark-focus:outline-none focus:outline-none px-4 py-2 dark:bg-gray-700 bg-gray-300 text-gray-700 dark:text-gray-100 rounded-md dark-hover:bg-gray-600 font-semibold hover:bg-gray-400 transition duration-500 ease-in-out"
            :class="{
              'dark-focus:bg-gray-900 focus:bg-orange-300 dark-active:bg-gray-900 active:bg-orange-300 dark-active:bg-gray-900 active:bg-orange-300 px-4 text-white py-2 shadow-lg': isGhana
            }"
            @click="dynamicComponent('Overall')"
          >
            Total Cases
          </button>
          <button
            class="dark-focus:outline-none focus:outline-none ml-2 px-4 py-2 dark:bg-gray-700 bg-gray-300 text-gray-700 dark:text-gray-100 rounded-md font-semibold dark-hover:bg-gray-600  hover:bg-gray-400 transition  duration-500 ease-in-out"
            :class="{
              'dark-focus:bg-gray-900 focus:bg-orange-300 px-4 text-white py-2 shadow-lg': isToday
            }"
            @click="dynamicComponent('Today')"
          >
            <span class="">Cases</span> Today
          </button>
          <button
            class="dark-focus:outline-none focus:outline-none ml-2 px-4 py-2 dark:bg-gray-700 bg-gray-300 text-gray-700 dark:text-gray-100 rounded-md font-semibold dark-hover:bg-gray-600 hover:bg-gray-400 transition  duration-500 ease-in-out"
            :class="{
              'dark-focus:bg-gray-900 focus:bg-orange-300 dark-active:bg-gray-900 active:bg-orange-300 px-4 text-white py-2 shadow-lg': isWorld
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
        <div class="mt-6">
          <div class="text-xl font-semibold">
            Questions we get asked
          </div>
          <div class="mt-3">
            <h1 class="text-base font-semibold">What are your sources?</h1>
            <p class="dark:text-gray-500 text-gray-600 text-sm leading-5">
              We are using state bulletins and official government handles to
              update our numbers. The data is validated by a group of volunteers
              and published into a Google sheet and an API.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">
              Where can I find the data for this?
            </h1>
            <p class="dark:text-gray-500 text-gray-600 text-sm leading-5">
              If you want access to our data API or raw sheet data, kindly send
              an email to bernardkissi18@gmail.com stating the purpose of use.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Who are you ?</h1>
            <p class="dark:text-gray-500 text-gray-600 text-sm leading-5">
              We are a group of dedicated volunteers who curate and verify the
              data coming from several sources.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Are you offical?</h1>
            <p class="dark:text-gray-500 text-gray-600 text-sm leading-5">
              No we are not offical, but we seek to help in the fight against
              virus.
            </p>
          </div>
          <div class="mt-4">
            <h1 class="text-base font-semibold">Do you want to support?</h1>
            <p class="dark:text-gray-500 text-gray-600 text-sm leading-5">
              Support volunteers to keep on the fight against coronavirus
            </p>
            <a
              href="https://dashboard.flutterwave.com/donate/ode7kguxvkkg"
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
            <div class="text-2xl font-semibold">
              Regional Breakdown
            </div>
            <div class="mb-4 font-medium text-gray-600 dark:text-gray-400">
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
        <div class="mt-8">
          <div class="text-2xl font-semibold">
            Spread Trends
          </div>
          <div class="mb-2 font-medium dark:text-gray-500 text-gray-600">
            View weekly updates of coronavirus across Ghana.
          </div>
          <div class="flex items-center py-2">
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 px-1 md:px-3 py-2 font-medium rounded-md tracking-wide"
              :class="{
                'dark:bg-red-500 dark:text-white bg-red-500 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Confirmed'
              }"
              @click="dynamicTrend('Confirmed')"
            >
              Confirmed
            </button>
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md"
              :class="{
                'dark:bg-blue-500 dark:text-white bg-blue-500 text-white px-3 py-2 shadow-lg':
                  activeTrend === 'Active'
              }"
              @click="dynamicTrend('Active')"
            >
              Active
            </button>
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-3 py-2 font-medium tracking-wide rounded-md"
              :class="{
                'dark:bg-green-500 dark:text-white bg-green-500 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Recovered'
              }"
              @click="dynamicTrend('Recovered')"
            >
              Recovered
            </button>
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md"
              :class="{
                'dark:bg-gray-900 dark:text-white bg-gray-500 text-white px-3 md:px-4 py-2 shadow-lg':
                  activeTrend === 'Deaths'
              }"
              @click="dynamicTrend('Deaths')"
            >
              Deaths
            </button>
          </div>
          <!-- insert cards -->
          <!-- maincards -->
          <component :is="activeTrend"></component>
          <!-- end of cards -->
        </div>
        <!-- end of spread trends -->
        <!-- demographics -->
        <div class="mt-8">
          <div class="text-2xl font-semibold">
            General Information
          </div>
          <div class="mb-2 font-medium dark:text-gray-500 text-gray-600">
            View weekly trends of coronavirus across Ghana.
          </div>
          <div class="flex items-center py-2">
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md"
              :class="{
                'dark:bg-purple-500 dark:text-white bg-purple-500 text-white px-4 py-2 shadow-lg':
                  activeDemo === 'Tested'
              }"
              @click="dynamicDemo('Tested')"
            >
              Test Performed
            </button>
            <button
              class="dark:bg-gray-700 dark:text-gray-100 bg-gray-300 ml-1 px-2 md:px-3 py-2 font-medium tracking-wide rounded-md"
              :class="{
                'dark:bg-orange-500 dark:text-white bg-orange-500 text-white px-4 py-2 shadow-lg':
                  activeDemo === 'Critical'
              }"
              @click="dynamicDemo('Critical')"
            >
              Critical Cases
            </button>
          </div>
          <!-- start -->
          <!-- maincards -->
          <component :is="activeDemo"></component>
          <!-- end of cards -->
          <!-- end of  -->
        </div>
        <!-- end -->
      </div>
    </div>
  </div>
</template>
<script>
import Overall from '@/components/overall'
import Today from '@/components/today'
import World from '@/components/world'
import Table from '@/components/table'
import Regional from '@/components/regional'
import Map from '@/components/map'

export default {
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
    activeDemo: 'Tested'
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
  methods: {
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
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
