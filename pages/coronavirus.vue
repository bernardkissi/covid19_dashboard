<template>
  <div
    class="max-w-7xl rounded-md mt-4 lg:py-10 py-6 px-4 sm:px-8 lg:px-8 mx-auto"
  >
    <div class="borber border-gray-700">
      <div
        class="p-4 lg:p-8 dark:bg-gray-900 bg-blue-600 rounded-t-md shadow-sm"
      >
        <h1 class="dark:text-gray-300 text-white text-3xl font-semibold">
          What is Coronavirus
        </h1>
        <p
          class="text-base md:text-xl dark:text-gray-500 text-gray-200 leading-normal"
        >
          Coronavirus are family of viruses that includes common cold, SARS and
          MERS. The most recent COVID-19 outbreak includes a strain that were
          not previously found in humans.
        </p>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center px-4 lg:px-10 dark:bg-gray-700 bg-blue-200 py-10 justify-between shadow-sm"
      >
        <div class="dark:text-gray-300 text-gray-800 max-w-md">
          <h1 class="text-3xl dark:text-gray-200 font-semibold mb-1">
            Watch for Symptoms
          </h1>
          <p class="text-base md:text-xl font-normal">
            Older adults and people who have severe underlying medical
            conditions like heart or lung disease or diabetes seem to be at
            higher risk for developing more serious complications from COVID-19
            illness.
          </p>
          <p class="text-base md:text-xl font-normal mt-4">
            People with COVID-19 have had a wide range of symptoms reported –
            ranging from mild symptoms to severe illness.
          </p>
          <p class="text-base md:text-xl mt-4">
            These symptoms may appear <b>2-14 days</b> after exposure to the
            virus:
          </p>
          <div
            class="flex flex-col md:flex-row items-center px-4 py-2 ustify-start"
          >
            <ul class="text-base md:text-xl list-disc -ml-24 md:ml-0">
              <li>Fever</li>
              <li>Cough</li>
              <li>Chills</li>
              <li>Repeated shaking chills</li>
            </ul>
            <ul class="text-base md:text-xl list-disc md:ml-8">
              <li>Muscle pain</li>
              <li>Headache</li>
              <li>Sore throat</li>
              <li>New loss of taste or small</li>
              <li>Shortness of breath and difficulty in breathing</li>
            </ul>
          </div>
        </div>
        <!--  <img
          class="rounded-md mt-1 lg:mt-0 h-32 w-32"
          src="~/assets/images/corona2.png"
          loading="lazy"
          alt="coronavirus"
        /> -->
      </div>
      <div
        class="flex flex-col lg:flex-row items-center px-4 lg:px-4 dark:bg-gray-300 bg-blue-100 py-8 justify-between shadow-sm"
      >
        <!-- <img
          class="rounded-md  mb-2 md:mb-0"
          width="800"
          height="800"
          src="~/assets/images/corona3.png"
          loading="lazy"
          alt="coronavirus"
        /> -->
        <div class="ml-3 lg:ml-12 text-gray-800">
          <h1
            class=" text-2xl md:text-3xl font-semibold leading-tight md:leading-normal"
          >
            Prevention Measures
          </h1>
          <ul
            class="flex flex-col ml-4 mt-1 md:mt-0 list-disc justify-between text-base md:text-xl leading-normal"
          >
            <li>Clean your hands often</li>
            <li>
              Maintain a safe distance from anyone who is coughing or sneezing
            </li>

            <li>Don’t touch your eyes, nose or mouth</li>

            <li>
              Cover your nose and mouth with your bent elbow or a tissue when
              you cough or sneeze
            </li>
            <li>Stay home if you feel unwell</li>
            <li>
              If you have a fever, a cough, and difficulty breathing, seek
              medical attention. Call in advance.
            </li>
            <li>Follow the directions of your local health authority.</li>
          </ul>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center px-5 border-t border-gray-400 lg:px-8 dark:bg-white bg-blue-100 py-8 justify-between shadow-sm"
      >
        <div class="ml-3 lg:ml-12 text-gray-800">
          <h1 class="text-3xl text-gray-800 font-semibold">
            How its Spread
          </h1>
          <div class="flex items-start">
            <svg class="mt-2 h-12 w-12 hidden md:inline-flex">
              <path
                d="M7 10l2 2 4-4-6 2zm12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#48BB78"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class=" ml-0 lg:ml-3 text-base md:text-xl leading-normal">
              The disease can spread from person to person through small
              droplets from the nose or mouth which are spread when a person
              with COVID-19 coughs or exhales.
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-start">
            <svg class="mt-6 hidden md:inline-flex" width="60" height="60">
              <path
                d="M7 10l2 2 4-4-6 2zm12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#48BB78"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p class="ml-0 md:ml-3 text-base md:text-xl leading-normal mt-4">
              These droplets land on objects and surfaces around the person.
              Other people then catch COVID-19 by touching these objects or
              surfaces, then touching their eyes, nose or mouth.
            </p>
          </div>
          <div class="flex items-start">
            <svg class="mt-6 hidden md:inline-flex" width="60" height="60">
              <path
                d="M7 10l2 2 4-4-6 2zm12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                stroke="#48BB78"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p
              class=" ml-0 mb-3 lg:mb-0 lg:ml-3 text-base md:text-xl  leading-normal mt-4"
            >
              People can also catch COVID-19 if they breathe in droplets from a
              person with COVID-19 who coughs out or exhales droplets.
            </p>
          </div>
        </div>
        <!--  <img
          class="rounded-md ml-0 lg:ml-10"
          width="1300"
          height="1300"
          src="~/assets/images/corona4.png"
          loading="lazy"
          alt="coronavirus"
        /> -->
      </div>
      <div
        class="flex flex-col lg:flex-row items-center px-4 lg:px-10 dark:bg-gray-900 bg-blue-900 border-b border-gray-700 py-8 justify-between shadow-sm"
      >
        <!-- <img
          class="rounded-md ml-0 lg:ml-10"
          width="1300"
          height="1300"
          src="~/assets/images/corona5.png"
          loading="lazy"
          alt="coronavirus"
        /> -->
        <div class="ml-0 md:ml-4 lg:ml-12 dark:text-gray-500 text-gray-200">
          <h1 class="mt-2 lg:mt-0 text-3xl text-gray-100 font-semibold">
            Treatment Myths
          </h1>
          <p class="text-base md:text-xl leading-normal">
            There is no known treatment for coronavirus at the moment nor has a
            vaccine been developed. While a cure has not been developed, not all
            measures are recommended and some can even be harmful. But there
            proposed methods to protect one self from getting the virus.
          </p>
        </div>
      </div>
      <div
        class="text-center rounded-b-md dark:text-gray-100 text-gray-900 p-3 dark:bg-gray-800"
      >
        Source WHO Africa,2020
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'component-fade',
  head: {
    title: 'About Coronavirus',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Information about coronavirus, spread and prevention'
      }
    ]
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
