<template>
  <div>
    <base-snack></base-snack>
    <main-nav-bar></main-nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import MainNavBar from '../../layout/main/MainNavBar.vue'
export default {
  components: { MainNavBar },

}
</script>

<style>

</style>