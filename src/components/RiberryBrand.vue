<template>
  <!-- To change the size of the brand, use font-size (default: 1rem). -->
  <div class="d-flex align-items-center riberry-brand-default">
    <img src="/static/riberry-logo.svg" class="riberry-logo" />
    <img v-if="!hideText" src="/static/riberry-text.svg" class="riberry-text" :class="textClass" />
  </div>
</template>

<script>
export default {
  props: {
    hideText: {
      type: Boolean,
      default: false,
    },

    logoClass: {
      type: [String, Object],
      default: undefined,
    },

    textClass: {
      type: [String, Object],
      default: undefined,
    },
  },

  computed: {},
}
</script>

<style lang="scss" scoped>
.riberry-brand-default {
  font-size: 1rem;
}

.riberry-logo {
  width: 1.8em;
  height: 1.8em;
}

.riberry-text {
  // set width explicitly to fix scaling issue on IE
  width: 11.847em;
  height: 1.4em;
  margin-left: 1.4em;
}
</style>
