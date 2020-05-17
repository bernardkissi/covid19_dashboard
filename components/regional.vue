<template>
  <div>
    <div class="flex  items-center justify-between">
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 bg-gray-800 md:bg-gray-200 border-b-2 border-red-600 rounded-md shadow-none cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'confirmed'
        }"
        @click.prevent="setCase('confirmed')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal text-gray-600 uppercase text-xs font-bold text-center"
          >
            <svg
              class="hidden md:block fill-current h-4 w-4 mt-2 cursor-pointer "
              :class="{
                'text-red-600': caseSelected === 'confirmed'
              }"
              viewBox="0 0 24 24"
            >
              <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
            cases
          </div>
          <div class="text-base font-bold text-white text-center">
            {{ region.confirmed.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 bg-gray-800 md:bg-gray-900 border-b-2 border-blue-600 rounded-md cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'active'
        }"
        @click.prevent="setCase('active')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal text-gray-600 uppercase text-xs font-bold text-center"
          >
            <svg
              class="hidden md:block fill-current h-4 w-4 mt-2 cursor-pointer "
              :class="{
                'text-blue-500': caseSelected === 'active'
              }"
              viewBox="0 0 24 24"
            >
              <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
            Active
          </div>
          <div class="text-base font-bold text-white text-center">
            {{ region.active.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 bg-gray-800 md:bg-gray-900 border-b-2 border-green-600 rounded-md  cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'recovered'
        }"
        @click.prevent="setCase('recovered')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal text-gray-600 uppercase text-xs font-bold text-center"
          >
            <svg
              class="hidden md:block fill-current h-4 w-4 mt-2 cursor-pointer "
              :class="{
                'text-green-500 text-gray-500': caseSelected === 'recovered'
              }"
              viewBox="0 0 24 24"
            >
              <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
            Recover
          </div>
          <div class="text-base font-bold text-white text-center">
            {{ region.recovered.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="w-1/4 md:w-1/6 mr-2 md:mr-0 py-3 bg-gray-800 md:bg-gray-900 border-b-2 border-gray-600 rounded-md  cursor-pointer"
        :class="{
          'md:shadow-lg': caseSelected === 'deceased'
        }"
        @click.prevent="setCase('deceased')"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal text-gray-600 uppercase text-xs font-bold text-center"
          >
            <svg
              class=" hidden md:block fill-current h-4 w-4 mt-2 cursor-pointer "
              :class="{
                'text-gray-200': caseSelected === 'deceased'
              }"
              viewBox="0 0 24 24"
            >
              <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
            Deaths
          </div>
          <div class="text-base font-bold text-white text-center">
            {{ region.deceased.toLocaleString() }}
          </div>
        </div>
      </div>
      <div
        class="hidden md:block w-1/4 md:w-1/6 py-3 bg-gray-900 rounded-md border-b-2 border-purple-600 cursor-pointer"
        :class="{
          'shadow-lg': caseSelected === 'tested'
        }"
      >
        <div class="flex flex-col justify-between">
          <div
            class="mb-1 flex items-center justify-center tracking-normal text-gray-600 uppercase text-xs font-bold text-center"
          >
            <svg
              class="fill-current h-4 w-4 mt-2 cursor-pointer "
              :class="{
                'text-orange-500 text-gray-500': caseSelected === 'tested'
              }"
              viewBox="0 0 24 24"
            >
              <path d="M13 6.5a6.5 6.5 0 11-13 0 6.5 6.5 0 0113 0z" />
            </svg>
            Tested
          </div>
          <div class="text-base font-bold text-white text-center">
            N/A
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-between mt-6">
      <div class="flex flex-col text-base md:text-xl font-semibold">
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
          class="text-base md:text-lg font-semibold text-green-400 text-right"
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
