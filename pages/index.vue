<template>
  <div
    class="text-gray-700 dark:text-gray-200 max-w-7xl rounded-md mt-4 lg:py-10 py-6 px-4 sm:px-8 lg:px-8 mx-auto"
  >
    <div class="grid grid-cols-1 gap-0 lg:grid-cols-4 lg:gap-12">
      <div class="col-span-1 lg:col-span-2">
        <div class="relative">
          <input
            v-model="search"
            class="p-4 px-16 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 rounded-md w-full shadow-xl 
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
      </div>
      <div
        class="col-span-1 lg:col-span-2 lg:border-none border-t border-gray-700 pt-4"
      >
        fsdsfdfds
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: ''
  })
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
