<template>
  <div
    style="min-height: 400px; max-width: 640px"
    class="d-flex flex-column text-center justify-space-between mx-auto"
  >
    <span class="font-weight-bold text-h5"
      >Digite abaixo o código enviado como sms para seu telefone</span
    >
    <v-form ref="form" @submit.stop.prevent>
      <v-text-field
        @keydown.enter="confirmRecaptcha"
        validate-on-blur
        v-mask="[mask.smsConfirm.mask]"
        :rules="[inputRules.required, inputRules.sms]"
        v-model="number"
        outlined
        label="Código SMS"
      ></v-text-field>
      <v-btn :loading="progress" @click="confirmRecaptcha" color="primary" block
        >ENTRAR</v-btn
      >
    </v-form>
    <span @click="backStep" class="text-caption"
      >Errou o número? clique aqui para voltar</span
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    number: "",
    progress: false,
  }),
  methods: {
    backStep() {
      grecaptcha.reset(window.recaptchaId);
      this.$emit("action-span:click");
    },
    async confirmRecaptcha() {
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        return;
      }
      this.progress = true;
      try {
        const user = await window.confirmation.confirm(
          this.number.replace(" ", "")
        );
        this.$router.push({ name: "MainHome" })
      } catch (e) {
        this.$store.dispatch("snackMain/setSnack", {
          mode: "error",
          text: "Algo deu errado na verificação, confirme o sms informado",
        });
      } finally {
        this.progress = false;
      }
    },
  },
};
</script>

<style>
</style>