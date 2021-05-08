export default {
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xs
    },
  },
}