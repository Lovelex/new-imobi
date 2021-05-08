<template>
  <div
    style="min-height: 400px; max-width: 640px"
    class="d-flex flex-column text-center justify-space-between mx-auto"
  >
    <span class="font-weight-bold text-h5">Acessar sua conta</span>
    <span
      >Digite seu número para entrar. Seus dados estão seguros e você não
      precisa de senha.</span
    >
    <div id="recaptcha-container" />
    <v-form ref="form" @submit.stop.prevent>
      <v-text-field
        v-model="number"
        :rules="[inputRules.required, inputRules.phone]"
        @keypress.enter="execRecaptcha"
        v-mask="[mask.phone.mask, mask.cell.mask]"
        :placeholder="mask.cell.placeholder"
        validate-on-blur
        outlined
        label="Seu número"
      ></v-text-field>
      <v-btn @click="execRecaptcha" color="primary" block>Enviar sms</v-btn>
    </v-form>
    <span class="text-caption"
      >Você vai receber um código para confirmar seu telefone</span
    >
  </div>
</template>

<script>
import { auth } from "../plugins/firebase";

export default {
  data: () => ({
    number: "",
  }),
  methods: {
    async confirmation() {
      if (!this.$refs.form.validate()) {
        return;
      }
      try {
        const confirmation = await auth.signInWithPhoneNumber(
          `+55 ${this.number.replace(" ", "")}`,
          window.recaptchaVerifier
        );
        window.confirmation = confirmation;
        return true;
      } catch (e) {
        return false;
      }
    },
    async execRecaptcha() {
      if (!this.$refs.form.validate()) {
        return;
      }
      const resp = await this.confirmation();
      if (resp) {
        this.$emit("action-recaptcha");
        console.log(resp);
      }
      if (!resp) {
        console.log(resp);
        this.$store.dispatch("snackMain/setSnack", {
          mode: "error",
          text: "Algo deu errado, verifique o número informado.",
        });
        grecaptcha.reset(window.recaptchaId);
      }
    },
  },
};
</script>

<style>
</style>