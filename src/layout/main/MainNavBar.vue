<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <main-nav-drawer></main-nav-drawer>
    </v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <main-nav-bar-list></main-nav-bar-list>
      <v-btn v-if="!user" :to="{name: 'MainLogin'}" color="primary">
        Entrar
      </v-btn>
      <main-nav-bar-user-menu v-if="user"></main-nav-bar-user-menu>
    </v-app-bar>
  </div>
</template>

<script>
import MainNavDrawer from './MainNavBarDrawer.vue';
import MainNavBarList from './MainNavBarList.vue';
import MainNavBarUserMenu from './MainNavBarUserMenu.vue';
export default {
  components: { MainNavDrawer, MainNavBarList, MainNavBarUserMenu },
  data: () => ({
    drawer: false
  }),
  computed: {
    isUserDbEmpty() {
      return this.$store.getters["user/isItemEmpty"]
    },
  }
};
</script>

<style>
</style>