<template>
  <div>
    <nav class=" text-gray-700 dark:text-white bg-gray-300 dark:bg-gray-900">
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between py-3">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
            >
              <svg
                v-if="open === false"
                class="fill-current text-gray-600 block h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                @click="open = !open"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                v-else
                class="fill-current text-gray-600 h-8 w-8"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
                @click="open = !open"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="flex items-center justify-center">
              <div class="flex-shrink-0">
                <svg
                  class="w-auto sm:justify-center"
                  width="38"
                  height="37"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill-rule="nonzero" fill="none">
                    <g fill="#E47E25">
                      <path
                        d="M26.689 3.7a.619.619 0 01-.621-.617V.617c0-.34.278-.617.62-.617.343 0 .621.276.621.617v2.466c0 .34-.278.617-.62.617zM22.965 4.691a.621.621 0 01-.538-.308l-1.242-2.136a.613.613 0 01-.003-.619.621.621 0 011.078.002l1.242 2.136c.11.19.11.426 0 .616a.621.621 0 01-.537.309zM20.237 7.4a.624.624 0 01-.31-.083l-2.15-1.233a.616.616 0 01-.002-1.07c.194-.111.431-.11.623.002l2.15 1.233a.615.615 0 01-.31 1.151zM19.24 11.1h-2.482a.619.619 0 01-.62-.617c0-.34.277-.616.62-.616h2.483c.342 0 .62.276.62.616 0 .34-.278.617-.62.617zM18.09 16.033a.615.615 0 01-.31-1.15l2.148-1.234a.624.624 0 01.623-.002.616.616 0 01-.002 1.07l-2.15 1.234a.624.624 0 01-.31.082zM21.723 19.645a.621.621 0 01-.537-.31.613.613 0 010-.615l1.242-2.136a.621.621 0 011.078-.002c.11.192.11.428-.003.619l-1.242 2.135a.621.621 0 01-.538.309zM26.689 20.967a.619.619 0 01-.621-.617v-2.467c0-.34.278-.616.62-.616.343 0 .621.276.621.616v2.467c0 .34-.278.617-.62.617zM31.654 19.645a.621.621 0 01-.538-.309l-1.241-2.135a.613.613 0 01-.003-.62.621.621 0 011.078.003l1.24 2.136c.112.19.112.425.001.616a.621.621 0 01-.537.309zM35.288 16.033a.624.624 0 01-.31-.082l-2.15-1.234a.616.616 0 01-.002-1.07c.193-.11.43-.11.623.002l2.15 1.234a.615.615 0 01-.311 1.15zM36.62 11.1h-2.483a.619.619 0 01-.621-.617c0-.34.278-.616.62-.616h2.483c.343 0 .621.276.621.616 0 .34-.278.617-.62.617zM33.14 7.4a.615.615 0 01-.31-1.15l2.149-1.234a.624.624 0 01.623-.003.616.616 0 01-.002 1.071l-2.15 1.233a.624.624 0 01-.31.083zM30.413 4.691a.621.621 0 01-.537-.309.613.613 0 010-.616l1.241-2.136a.621.621 0 011.078-.002c.11.192.11.428-.003.62l-1.241 2.135a.621.621 0 01-.538.308z"
                      />
                    </g>
                    <path
                      d="M10.551 16.033a.619.619 0 01-.62-.616V12.95c0-.34.278-.617.62-.617.343 0 .621.276.621.617v2.467c0 .34-.278.616-.62.616zM6.827 17.024a.621.621 0 01-.538-.308L5.048 14.58a.613.613 0 01-.003-.619.621.621 0 011.078.003l1.241 2.135c.111.191.111.426 0 .617a.621.621 0 01-.537.308zM4.1 19.733a.624.624 0 01-.31-.082l-2.15-1.234a.616.616 0 01-.002-1.07c.193-.11.43-.11.623.002l2.15 1.234a.615.615 0 01-.31 1.15zM3.103 23.433H.621A.619.619 0 010 22.817c0-.34.278-.617.62-.617h2.483c.343 0 .621.276.621.617 0 .34-.278.616-.62.616zM1.952 28.367a.615.615 0 01-.31-1.15l2.149-1.234a.624.624 0 01.623-.003.616.616 0 01-.002 1.07l-2.15 1.234a.624.624 0 01-.31.083zM5.586 31.978a.621.621 0 01-.537-.309.613.613 0 010-.616l1.241-2.136a.621.621 0 011.078-.002c.111.192.11.428-.003.619l-1.24 2.136a.621.621 0 01-.539.308zM10.551 33.3a.619.619 0 01-.62-.617v-2.466c0-.34.278-.617.62-.617.343 0 .621.276.621.617v2.466c0 .34-.278.617-.62.617zM15.517 31.978a.621.621 0 01-.538-.308l-1.242-2.136a.613.613 0 01-.003-.619.621.621 0 011.078.002l1.242 2.136c.11.19.11.426 0 .616a.621.621 0 01-.537.309zM19.15 28.367a.624.624 0 01-.31-.083l-2.149-1.233a.616.616 0 01-.002-1.071c.193-.11.43-.11.623.003l2.149 1.233a.615.615 0 01-.31 1.15zM20.482 23.433h-2.483a.619.619 0 01-.62-.616c0-.34.278-.617.62-.617h2.483c.343 0 .62.276.62.617 0 .34-.277.616-.62.616zM17.003 19.733a.615.615 0 01-.31-1.15l2.149-1.234a.624.624 0 01.623-.002.616.616 0 01-.003 1.07l-2.15 1.234a.624.624 0 01-.31.082zM14.275 17.024a.621.621 0 01-.537-.308.613.613 0 010-.617l1.242-2.135a.621.621 0 011.078-.003c.11.192.11.429-.003.62l-1.242 2.135a.621.621 0 01-.538.308z"
                      fill="#338F7C"
                    />
                    <ellipse
                      fill="#F19B1F"
                      cx="26.689"
                      cy="10.483"
                      rx="7.448"
                      ry="7.4"
                    />
                    <ellipse
                      fill="#149F84"
                      cx="10.551"
                      cy="22.817"
                      rx="7.448"
                      ry="7.4"
                    />
                    <ellipse
                      fill="#F4EEC9"
                      cx="8.069"
                      cy="20.967"
                      rx="1.241"
                      ry="1.233"
                    />
                    <ellipse
                      fill="#F4EEC9"
                      cx="13.034"
                      cy="24.667"
                      rx="1.862"
                      ry="1.85"
                    />
                    <path
                      d="M29.171 24.05a.619.619 0 01-.62-.617v-1.85c0-.34.278-.616.62-.616.343 0 .621.276.621.616v1.85c0 .34-.278.617-.62.617zM26.378 24.794a.621.621 0 01-.538-.309l-.93-1.603a.613.613 0 01-.004-.619.621.621 0 011.078.002l.931 1.604c.111.19.111.425 0 .616a.621.621 0 01-.537.309zM24.333 26.825a.619.619 0 01-.31-.083l-1.614-.925a.614.614 0 01-.223-.84.623.623 0 01.844-.228l1.614.925a.615.615 0 01-.31 1.151zM23.585 29.6h-1.862a.619.619 0 01-.62-.617c0-.34.278-.616.62-.616h1.862c.343 0 .621.276.621.616 0 .34-.278.617-.62.617zM22.721 33.3a.615.615 0 01-.31-1.15l1.614-.926a.623.623 0 01.844.228c.17.294.07.669-.224.84l-1.613.925a.619.619 0 01-.31.083zM25.447 36.009a.621.621 0 01-.537-.309.613.613 0 010-.616l.931-1.603a.621.621 0 011.078-.003c.111.192.11.428-.003.62l-.93 1.603a.621.621 0 01-.539.308zM29.171 37a.619.619 0 01-.62-.617v-1.85c0-.34.278-.616.62-.616.343 0 .621.276.621.616v1.85c0 .34-.278.617-.62.617zM32.895 36.009a.621.621 0 01-.538-.308l-.93-1.604a.613.613 0 01-.004-.619.621.621 0 011.078.003l.931 1.603c.111.19.111.426 0 .616a.621.621 0 01-.537.309zM35.621 33.3a.619.619 0 01-.31-.083l-1.614-.925a.616.616 0 01-.002-1.07c.193-.11.43-.11.623.002l1.614.925a.615.615 0 01-.31 1.151zM36.62 29.6h-1.863a.619.619 0 01-.62-.617c0-.34.278-.616.62-.616h1.862c.343 0 .621.276.621.616 0 .34-.278.617-.62.617zM34.013 26.825a.615.615 0 01-.31-1.15l1.613-.926a.623.623 0 01.844.228c.17.294.07.669-.223.84l-1.614.925a.619.619 0 01-.31.083zM31.964 24.794a.621.621 0 01-.537-.309.613.613 0 010-.616l.931-1.604a.623.623 0 01.846-.222c.296.17.398.544.23.839l-.932 1.603a.621.621 0 01-.538.309z"
                      fill="#DE4D60"
                    />
                    <ellipse
                      fill="#FF5364"
                      cx="29.171"
                      cy="28.983"
                      rx="5.586"
                      ry="5.55"
                    />
                    <circle fill="#F4EEC9" cx="29.792" cy="26.517" r="1" />
                    <circle fill="#F4EEC9" cx="26.689" cy="27.133" r="1" />
                    <circle fill="#F4EEC9" cx="31.654" cy="30.217" r="1" />
                    <circle fill="#F4EEC9" cx="27.309" cy="30.833" r="1" />
                    <circle fill="#F8E9AF" cx="27.93" cy="6.783" r="1" />
                    <circle fill="#F8E9AF" cx="24.206" cy="12.95" r="1" />
                    <ellipse
                      fill="#F8E9AF"
                      cx="24.206"
                      cy="8.633"
                      rx="1.241"
                      ry="1.233"
                    />
                    <ellipse
                      fill="#F8E9AF"
                      cx="29.171"
                      cy="12.333"
                      rx="1.862"
                      ry="1.85"
                    />
                    <circle fill="#F8E9AF" cx="11.793" cy="19.117" r="1" />
                    <circle fill="#F8E9AF" cx="8.069" cy="25.283" r="1" />
                  </g>
                </svg>
              </div>
              <span class="px-3">
                <h1
                  class="sm:justify-center sm:text-base md:block md:text-xl lg:text-xl font-semibold"
                >
                  Cases Tracker
                </h1>
              </span>
              <svg
                class="lg:ml-3 lg:mr-3 hidden lg:block"
                width="36"
                height="23"
              >
                <g fill-rule="nonzero" fill="none">
                  <path
                    d="M33.304.019H2.696C1.207.019 0 1.194 0 2.644v5.029h36v-5.03C36 1.195 34.793.02 33.304.02z"
                    fill="#FF4B55"
                  />
                  <path
                    d="M0 20.356c0 1.45 1.207 2.625 2.696 2.625h30.608c1.489 0 2.696-1.175 2.696-2.625v-5.029H0v5.03z"
                    fill="#73AF00"
                  />
                  <path fill="#FFE15A" d="M0 7.673h36v7.654H0z" />
                  <path
                    d="M18.262 8.619l.647 1.89 2.048.016c.265.002.375.331.162.485l-1.647 1.184.617 1.9c.08.246-.208.45-.423.3L18 13.234l-1.666 1.16c-.215.15-.503-.054-.423-.3l.617-1.9-1.647-1.184c-.213-.154-.103-.483.162-.485l2.048-.016.647-1.89c.084-.245.44-.245.524 0z"
                    fill="#464655"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <button v-if="mode === 'light'" @click="themeMode('dark')">
              <svg width="20" height="20">
                <path
                  d="M18.354 13.354l.928.373a1 1 0 00-1.3-1.3l.372.927zM6.646 1.646l.928.373A1 1 0 006.273.718l.373.928zm11.335 10.78c-.92.37-1.925.574-2.981.574v2a9.976 9.976 0 003.727-.718l-.746-1.856zM15 13a8 8 0 01-8-8H5c0 5.523 4.477 10 10 10v-2zM7 5c0-1.056.204-2.061.574-2.981l-1.856-.746A9.975 9.975 0 005 5h2zm-5 5a8.003 8.003 0 015.019-7.426L6.273.718A10.003 10.003 0 000 10h2zm8 8a8 8 0 01-8-8H0c0 5.523 4.477 10 10 10v-2zm7.426-5.019A8.003 8.003 0 0110 18.001v2c4.207 0 7.805-2.599 9.282-6.274l-1.856-.746z"
                  fill-rule="nonzero"
                  fill="#4A5568"
                />
              </svg>
            </button>
            <button v-else @click="themeMode('light')">
              <svg width="20" height="20">
                <path
                  d="M10 1v1-1zm0 17v1-1zm9-8h-1 1zM2 10H1h1zm14.364 6.364l-.707-.707.707.707zM4.344 4.344l-.708-.708.707.707zm12.02-.708l-.707.707.707-.707zm-12.02 12.02l-.708.708.707-.707zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  stroke="#F6AD55"
                  stroke-width="2"
                  fill="none"
                  fill-rule="evenodd"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <div class="hidden sm:block sm:ml-6">
              <div class="flex items-center">
                <nuxt-link
                  to="/"
                  class="px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none  transition hover:text-red-600 focus:text-red-600 focus:font-semibold duration-150 ease-in-out"
                  >Dashboard</nuxt-link
                >
                <nuxt-link
                  to="/prevention"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none  transition hover:text-red-600 focus:text-red-600 focus:font-semibold duration-150 ease-in-out"
                  >Wiki</nuxt-link
                >
                <nuxt-link
                  to="/about"
                  class="ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 focus:outline-none  transition hover:text-red-600 focus:text-red-600 focus:font-semibold duration-150 ease-in-out"
                  >About Us</nuxt-link
                >
                <a
                  href="https://dashboard.flutterwave.com/donate/ode7kguxvkkg"
                  target="_blank"
                >
                  <button
                    v-tooltip.bottom-center="{
                      content: msg,
                      placement: 'bottom-center',
                      classes: ['info'],
                      targetClasses: ['it-has-a-tooltip'],
                      offset: 20,
                      delay: {
                        show: 300,
                        hide: 100
                      }
                    }"
                    class="ml-4 px-3 py-2 rounded-md text-xs uppercase font-bold leading-5 text-orange-200 focus:outline-none transition  duration-150 ease-in-out bg-orange-600"
                  >
                    Support Us
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="open === true" class="sm:hidden">
        <div class="px-2 pt-2 pb-3">
          <nuxt-link
            to="/"
            class="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >Dashboard</nuxt-link
          >
          <nuxt-link
            to="/prevention"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >About Virus</nuxt-link
          >
          <nuxt-link
            to="/about"
            class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out"
            >About Us</nuxt-link
          >
        </div>
      </div>
    </nav>
    <!-- <online /> -->
    <nuxt />
    <!-- <div class="flex items-center justify-center text-gray-700">
      <div class="flex flex-col pb-4">
        <a href="https://twitter.com/OwireduBernard" target="_blank">
          <button
            class="flex items-center text-xs uppercase font-bold px-4 py-2 rounded-md text-blue-500 bg-gray-900"
          >
            <svg width="18" height="15">
              <path
                d="M18 1.776c-.67.3-1.383.5-2.126.597A3.748 3.748 0 0017.497.282c-.713.436-1.5.744-2.34.916A3.655 3.655 0 0012.462 0c-2.043 0-3.688 1.7-3.688 3.786 0 .3.025.588.085.863C5.792 4.495 3.077 2.987 1.253.69a3.885 3.885 0 00-.505 1.913c0 1.31.658 2.473 1.64 3.145A3.575 3.575 0 01.72 5.282v.042C.72 7.164 2 8.69 3.677 9.043c-.3.084-.628.124-.968.124-.236 0-.475-.014-.699-.064.479 1.499 1.835 2.6 3.449 2.636A7.298 7.298 0 010 13.302 10.201 10.201 0 005.661 15c6.79 0 10.503-5.77 10.503-10.77 0-.167-.006-.329-.014-.49A7.469 7.469 0 0018 1.777z"
                fill-rule="nonzero"
                fill="#03A9F4"
              />
            </svg>
            <span class="ml-2">Follow me on Twitter</span>
          </button>
        </a>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data: () => ({
    mode: 'light',
    open: false,
    msg:
      'We use funds to keep ghCovid19.live runing by paying our cloud hosting services '
  }),
  beforeMount() {
    this.$colorMode.preference = 'light'
  },
  methods: {
    themeMode(mode) {
      this.$colorMode.preference = mode
      this.mode = mode
    }
  }
}
</script>
<style></style>
