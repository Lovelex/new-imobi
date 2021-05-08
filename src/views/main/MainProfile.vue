<template>
  <v-container>
    <v-card class="pa-2">
      <v-tabs>
        <v-tab exact :to="{name: item.to}" v-for="(item,i) in userProfileNavigations" :key="i">{{ item.label }}</v-tab>
      </v-tabs>
      <div class="pa-4">
        <div v-if="isUserDbEmpty" class="d-flex justify-center align-center">
          <v-progress-circular size="64" color="primary" indeterminate></v-progress-circular>
        </div>
        <router-view v-if="!isUserDbEmpty"></router-view>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import mixinMainUserProfile from '@/mixins/mixinMainUserProfile'

export default {
  mixins: [mixinMainUserProfile],
  
};
</script>

<style>

</style>