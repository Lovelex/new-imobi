<template>
  <div>
    <the-title-with-icon>
      <template #icon>mdi-cog</template>
      <template #title>Meu Perfil</template>
    </the-title-with-icon>
    <div class="mt-4">
      <v-row >
        <v-col cols="12" sm="6">
          <main-profile-user-info-data></main-profile-user-info-data>
        </v-col>
        <v-col cols="12" sm="6">
          <main-profile-user-info-bank></main-profile-user-info-bank>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import MainProfileUserInfoBank from '../../components/MainProfileUserInfoBank.vue';
import MainProfileUserInfoData from '../../components/MainProfileUserInfoData.vue';
export default {
  components: { MainProfileUserInfoData, MainProfileUserInfoBank },};
</script>

<style>
</style>