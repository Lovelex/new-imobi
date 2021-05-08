<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getAuth/onAuthChange");
  },
};
</script>

<style>
</style>