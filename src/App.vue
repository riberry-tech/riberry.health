<template>
  <header class="shadow-sm p-4">
    <RiberryBrand text-class="d-none d-sm-block" />
  </header>

  <main class="container d-flex flex-column flex-grow-1 overflow-hidden">
    <div class="text-center my-5" style="font-size: 1.5rem">Please select your region</div>

    <div class="text-center row">
      <div v-for="region in regions" :key="region.name" class="col-12 col-md-4">
        <a class="btn flag" :href="region.url" role="button">
          <img :src="region.flag" class="flag-icon" />
          <div class="flag-name">{{ region.name }}</div>
        </a>
      </div>
    </div>
  </main>

  <footer class="mt-auto">
    <div class="py-4 d-flex flex-column align-items-center">
      <div>
        <RiberryBrand style="font-size: 0.65rem" />
      </div>
      <div class="text-muted small mt-2">
        © Riberry Technologies {{ year }}. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script>
import RiberryBrand from '@/components/RiberryBrand.vue'
import FlagImageAU from '@/assets/flags/au.svg'
import FlagImageGB from '@/assets/flags/gb.svg'
import FlagImageUS from '@/assets/flags/us.svg'

export default {
  components: {
    RiberryBrand,
  },

  data() {
    return {
      // see https://flagicons.lipis.dev/ for more flags
      regions: [
        {
          name: 'United States',
          flag: FlagImageUS,
          url: 'https://us.riberry.health',
        },
        {
          name: 'Australia',
          flag: FlagImageAU,
          url: 'https://au.riberry.health',
        },
        {
          name: 'United Kingdoms',
          flag: FlagImageGB,
          url: 'https://uk.riberry.health',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'bootstrap/scss/functions';
@import 'bootstrap/scss/variables';
@import 'bootstrap/scss/mixins';

footer {
  background-color: #d6fbf2;
}

a:hover {
  color: #ed3260 !important;
}

.flag {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 0.2rem;

  .flag-icon {
    max-width: 4rem;
  }

  .flag-name {
    padding-left: 0.5rem;
  }

  @include media-breakpoint-down(md) {
    flex-direction: column;
    padding: 1rem 0;

    .flag-name {
      padding-left: 0;
      padding-top: 0.5rem;
    }
  }
}
</style>
