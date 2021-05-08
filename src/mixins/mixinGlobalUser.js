export default {
  computed: {
    user() {
      return this.$store.getters["getAuth/getUser"]
    },
    userDb() {
      return this.$store.getters["user/getItem"]
    },
    isUserDbEmpty() {
      return this.$store.getters["user/isItemEmpty"]
    }
  }
}