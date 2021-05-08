<template>
  <div>
    <v-menu :close-on-content-click="false" v-if="!isUserDbEmpty">
      <template v-slot:activator="{ on }">
        <div style="cursor: pointer" v-on="on">
          <div class="d-flex align-center">
            <v-icon color="primary" class="mr-1">mdi-chevron-down</v-icon>
            <span class="font-weight-bold">{{
              userDb.name || userDb.phone
            }}</span>
          </div>
        </div>
      </template>
      <v-list >
        <v-list-item
          exact
          v-for="(item, i) in userProfileNavigations"
          :key="i"
          :to="{ name: item.to }"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>{{ item.label }}</v-list-item-subtitle>
        </v-list-item>

        <v-list-item>
          <div class="d-flex">
            <div class="d-flex align-center">
              <div class="mr-2">
                <span class="text-caption">Escuro</span>
                <v-icon class="ml-1" small>mdi-moon-waning-crescent</v-icon>
              </div>
              <v-switch color="primary" v-model="isThemeLight"></v-switch>
              <div class="ml-2">
                <v-icon class="mr-1" small>mdi-white-balance-sunny</v-icon>
                <span class="text-caption">Claro</span>
              </div>
            </div>
          </div>
        </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-subtitle>Sair</v-list-item-subtitle>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-progress-circular
      v-if="isUserDbEmpty"
      color="primary"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
import mixinMainUserProfile from '@/mixins/mixinMainUserProfile'

export default {
  mixins: [mixinMainUserProfile],
  data: () => ({
    isThemeLight: true,
  }),
  methods: {
    logout() {
      this.$store.dispatch("useAuth/logout");
    },
  },
  watch: {
    isThemeLight() {
      this.$vuetify.theme.dark = !this.isThemeLight
    }
  }
};
</script>
