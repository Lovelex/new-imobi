<template>
  <div class="pa-4">
    <div>
      <router-link :to="{ name: 'MainHome' }">
        <div class="d-flex flex-column align-center">
          <v-img contain width="178" src="https://via.placeholder.com/178" />
        </div>
      </router-link>
    </div>
    <v-divider class="my-2" />
    <v-list-item-group>
      <v-list-group v-for="(drop, i) in drops" :key="i">
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>{{ drop.name }}</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          class="ml-2"
          :to="{ name: menu.to }"
          v-for="(menu, i) in drop.menus"
          :key="i"
        >
          <v-list-item-subtitle>{{ menu.name }}</v-list-item-subtitle>
        </v-list-item>
      </v-list-group>
      <v-list>
        <v-list-item
          exact
          :to="{ name: item.to }"
          v-for="item in items"
          :key="item.name"
        >
          <span>{{ item.name }}</span>
        </v-list-item>
      </v-list>
    </v-list-item-group>
  </div>
</template>

<script>
import mixinMainNavBarList from '@/mixins/mixinMainNavBarList'
export default {
  mixins: [mixinMainNavBarList]
}
</script>

<style>
</style>