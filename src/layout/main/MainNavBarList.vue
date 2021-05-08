<template>
  <div>
    <div class="d-flex align-center">
      <div class="d-none d-md-flex align-center">
        <v-list dense class="d-flex">
          <v-list-item exact v-for="drop in drops" :key="drop.name">
            <v-menu>
              <template v-slot:activator="{ on }">
                <div
                  v-on="on"
                  style="cursor: pointer"
                  class="d-flex align-center"
                >
                  <span>{{ drop.name }}</span>
                  <v-list-item-icon>
                    <v-icon>mdi-chevron-down</v-icon>
                  </v-list-item-icon>
                </div>
              </template>
              <v-list>
                <v-list-item
                  :to="{ name: menu.to }"
                  color="primary"
                  v-for="menu in drop.menus"
                  :key="menu.name"
                >
                  <span>{{ menu.name }}</span>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item>
        </v-list>

        <v-list dense class="d-flex">
          <v-list-item
            exact
            :to="{ name: item.to }"
            v-for="item in items"
            :key="item.name"
          >
            <span>{{ item.name }}</span>
          </v-list-item>
        </v-list>
        <v-divider class="mx-6" vertical />
      </div>
    </div>
  </div>
</template>

<script>
import mixinMainNavBarList from "@/mixins/mixinMainNavBarList";
export default {
  mixins: [mixinMainNavBarList],
};
</script>

<style>
</style>