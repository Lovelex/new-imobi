<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="6"> </v-col>
      <v-col cols="12" sm="6">
        <base-card>
          <v-window v-model="announceWindow">
            <v-window-item>
              <main-announce-address-form1></main-announce-address-form1>
            </v-window-item>
            <v-window-item>
              <main-announce-address-form-2></main-announce-address-form-2>
            </v-window-item>
            <v-window-item>
              <main-announce-address-form-3></main-announce-address-form-3>
            </v-window-item>
          </v-window>
        </base-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MainAnnounceAddressForm1 from "../../components/MainAnnounceAddressForm1.vue";
import MainAnnounceAddressForm2 from "../../components/MainAnnounceAddressForm2.vue";
import MainAnnounceAddressForm3 from '../../components/MainAnnounceAddressForm3.vue';

export default {
  components: { MainAnnounceAddressForm1, MainAnnounceAddressForm2, MainAnnounceAddressForm3 },

  computed: {
    announceWindow() {
      return this.$store.getters["mainAnnounce/getAnnounceWindow"];
    },  
  },
};
</script>

<style>
.pac-container,
.pac-item {
  width: inherit !important;
}
</style>