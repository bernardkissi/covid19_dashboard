<template>
  <div
    class="max-w-7xl rounded-md mt-4 lg:py-10 py-6 px-4 sm:px-8 lg:px-8 mx-auto"
  >
    <div
      class="flex flex-col dark:bg-gray-900 bg-gray-200 dark:text-gray-200 text-gray-700 p-5 md:p-12 rounded-md"
    >
      <div class="flex flex-col md:flex-row items-center justify-start">
        <img
          class="rounded-full"
          width="150"
          height="150"
          src="~/assets/images/profile.jpg"
          loading="lazy"
          alt="coronavirus"
        />
        <div class="ml-8">
          <span class="text-2xl text-center md:text-left">@Social Media</span>
          <ul class="text-base md:text-xl list-none">
            <li>
              Twitter:
              <a
                href="https://twitter.com/OwireduBernard"
                class="text-blue-500"
                rel="noreferrer noopener"
                target="_blank"
                >Twitter Profile</a
              >
            </li>
            <li>
              Facebook:
              <a
                href="https://web.facebook.com/bernard.kissi.16"
                class="text-blue-500"
                rel="noreferrer noopener"
                target="_blank"
                >Facebook Profile</a
              >
            </li>
            <li>
              Email:
              <a
                href="https://web.facebook.com/bernard.kissi.16"
                class="text-blue-500"
                rel="noreferrer noopener"
                target="_blank"
                >Bernardkissi18@gmail.com</a
              >
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div class="text-3xl font-semibold mt-4">
          Who made this site?
        </div>
        <p class="text-lg">
          This site was created by Bernard Kissi, a software engineer holding a
          master degree in software engineering, Asia Pacific University, KL
          Malaysia
        </p>
        <div class="text-2xl font-semibold mt-8">
          Mission
        </div>
        <p class="text-lg">
          The mission of ghCovid19.live is to aid in the fight of coronavirus in
          ghana
        </p>
        <div class="text-2xl font-semibold mt-8">
          In collaboration with
        </div>
        <p class="text-lg">
          Nelly Sarpong (Data Collection Assistant) and support from Royal
          HealthCare Limited, Kumasi.
        </p>
        <div class="text-2xl font-semibold mt-8">
          Data Sources
        </div>
        <ul class="list-none text-xl py-2">
          <li>CDC (Center for Disease Control)</li>
          <li>WHO (World Health Organization)</li>
          <li>GHS (Ghana Health Service)</li>
          <li>MoFA (Minsitry of Information, Ghana)</li>
          <li>Ghana Statistical Service</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head: {
    title: 'About us',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Volunteers supporting the fight of coronavirus in ghana'
      }
    ]
  }
}
</script>
