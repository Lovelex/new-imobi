<template>
  <div>
    <base-g-maps :location="location" :item="item"></base-g-maps>
    <div class="d-flex justify-space-between my-2">
      <v-btn outlined color="primary" @click="initialWindow">Voltar</v-btn>
      <v-btn color="primary" @click="createImobile">Cadastrar Imóvel</v-btn>
    </div>
  </div>
</template>

<script>
import { functions } from "../plugins/firebase";

export default {
  data: () => ({
    location: {
      lng: 0,
      lat: 0,
    },
  }),
  computed: {
    item() {
      return this.$store.getters["mainAnnounce/getItem"];
    },
  },
  methods: {
    initialWindow() {
      this.$store.commit("mainAnnounce/initialWindow");
    },
    async createImobile() {
      if (this.location.lat) this.item.lat = this.location.lat;
      if (this.location.lng) this.item.lng = this.location.lng;
      const createImobile = functions.httpsCallable("createImobile");
      try {
        await createImobile(this.item);
        this.$store.dispatch("snackMain/setSnack", {
          mode: "success",
          text: "Imóvel pre-cadastrado com sucesso.",
        });
      } catch (e) {
        console.log(e.message);
        this.$store.dispatch("snackMain/setSnack", {
          mode: "error",
          text: e.message,
        });
      }
    },
  },
};
</script>

<style>
</style>