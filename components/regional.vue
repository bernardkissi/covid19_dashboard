<template>
  <div>
    <div class="flex items-center justify-between">
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 dark:bg-gray-900 bg-red-200 border-b-2 border-red-600 rounded-md shadow-none cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'confirmed'
        }"
        @click.prevent="setCase('confirmed')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal uppercase dark:text-gray-600 text-red-800 text-xs font-bold text-center"
            :class="{
              'dark:text-red-600': caseSelected === 'confirmed'
            }"
          >
            cases
          </div>
          <div
            class="text-base font-bold text-red-800 dark:text-gray-100 text-center"
          >
            {{ region.confirmed.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 dark:bg-gray-900 bg-blue-200 border-b-2 border-blue-600 rounded-md cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'active'
        }"
        @click.prevent="setCase('active')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal dark:text-gray-600 text-blue-800  uppercase text-xs font-bold text-center"
            :class="{
              'dark:text-blue-600 text-blue-800': caseSelected === 'active'
            }"
          >
            Active
          </div>
          <div
            class="text-base font-bold text-blue-800 dark:text-gray-100 text-center"
          >
            {{ region.active.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 dark:bg-gray-900 bg-green-200 border-b-2 border-green-600 rounded-md  cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'recovered'
        }"
        @click.prevent="setCase('recovered')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal dark:text-gray-600 text-green-800  uppercase text-xs font-bold text-center"
            :class="{
              'dark:text-green-600': caseSelected === 'recovered'
            }"
          >
            Recover
          </div>
          <div
            class="text-base font-bold text-green-800 dark:text-gray-100 text-center"
          >
            {{ region.recovered.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 dark:bg-gray-900 bg-gray-200 border-b-2 border-gray-600 rounded-md  cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'deceased'
        }"
        @click.prevent="setCase('deceased')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal dark:text-gray-600 text-gray-800  uppercase text-xs font-bold text-center"
            :class="{
              'dark:text-gray-700': caseSelected === 'deceased'
            }"
          >
            Deaths
          </div>
          <div
            class="text-base font-bold text-gray-800 dark:text-gray-100 text-center"
          >
            {{ region.deceased.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="hidden md:block w-1/4 md:w-1/6 py-3 dark:bg-gray-900 bg-purple-200 rounded-md border-b-2 border-purple-600 cursor-pointer"
        :class="{
          'shadow-lg': caseSelected === 'tested'
        }"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normaldark:text-gray-600 text-purple-800 uppercase text-xs font-bold text-center"
            :class="{
              'dark:text-purple-600': caseSelected === 'tested'
            }"
          >
            Tested
          </div>
          <div
            class="text-base font-bold text-purple-800 dark:text-gray-100 text-center"
          >
            N/A
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-6">
      <div
        class="flex flex-col text-base text-gray-700 md:text-xl font-semibold"
      >
        <div>{{ region.name }} Region</div>
        <div
          class="text-xs md:text-sm uppercase mt-1  font-extrabold"
          :class="{
            'text-red-500': caseSelected === 'confirmed',
            'text-blue-500': caseSelected === 'active',
            'text-green-500': caseSelected === 'recovered',
            'text-gray-500': caseSelected === 'deceased'
          }"
        >
          {{ caseLabel }} cases
        </div>
      </div>
      <div class="flex flex-col">
        <div class=" flex items-center mt-1">
          <svg class="mt-1 h-4 w-4" viewBox="0 0 24 24">
            <path
              d="M10 6v4l3 3-3-7zm9 4a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="#38A169"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <span
            class="ml-1 font-semibold text-green-600 text-right leading-tight"
            >Last updated</span
          >
        </div>
        <span
          class="text-base md:text-lg font-semibold text-green-500 text-right"
        >
          <timeago :datetime="region.updated_at" :auto-update="10"></timeago>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Regional',
  data: () => ({
    caseSelected: 'confirmed'
  }),
  computed: {
    ...mapGetters({ region: 'regions/getRegion', weekly: 'trends/getWeekly' }),
    cases() {
      return 2
    },
    caseLabel() {
      return this.caseSelected.length === 0 ? 'confirmed' : this.caseSelected
    }
  },
  watch: {
    caseSelected(value) {
      this.changeCase(value)
    }
  },
  methods: {
    ...mapActions({ changeCase: 'regions/fetchCase' }),
    setCase(type) {
      this.caseSelected = type
    }
  }
}
</script>
<style>
.shade {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
