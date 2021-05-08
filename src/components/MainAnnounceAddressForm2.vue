<template>
  <v-form ref="form" @submit.stop.prevent autocomplete="nope">
    <v-text-field
      v-model="item.zip"
      validate-on-blur
      :rules="[inputRules.required, inputRules.cepLength]"
      v-mask="[mask.cep.mask]"
      label="CEP"
    ></v-text-field>
    <v-text-field
      v-model="item.road"
      validate-on-blur
      :rules="[inputRules.required]"
      label="Rua"
    ></v-text-field>
    <v-text-field
      v-model="item.district"
      validate-on-blur
      :rules="[inputRules.required]"
      label="Bairro"
    ></v-text-field>
    <v-text-field
      disabled
      v-model="item.city"
      validate-on-blur
      :rules="[inputRules.required]"
      label="Cidade"
    ></v-text-field>
    <v-text-field
      disabled
      v-model="item.state"
      validate-on-blur
      :rules="[inputRules.required]"
      label="Estado"
    ></v-text-field>
    <div class="d-flex justify-space-between">
      <div class="d-flex justify-end">
        <v-btn @click="prevWindow" color="primary"> Voltar </v-btn>
      </div>
      <div class="d-flex justify-end">
        <v-btn @click="nextWindow" color="primary"> Confirmar </v-btn>
      </div>
    </div>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    address: "",
  }),
  computed: {
    item() {
      return this.$store.getters["mainAnnounce/getItem"];
    },
  },
  methods: {
    nextWindow() {
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        return;
      }
      this.$store.commit("mainAnnounce/nextWindow");
    },
    prevWindow() {
      this.$store.commit("mainAnnounce/prevWindow");
    },
  },
};
</script>

<style>
</style>