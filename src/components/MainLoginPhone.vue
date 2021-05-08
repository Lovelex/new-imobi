<template>
  <v-container>
    <v-stepper v-model="step">
      <v-stepper-header>
        <v-stepper-step :complete="step > 1" step="1"
          >Informe seu número</v-stepper-step
        >
        <v-stepper-step step="2">Preencha com seu código</v-stepper-step>
      </v-stepper-header>
      <v-stepper-items>
        <v-stepper-content step="1">
          <main-login-signin @action-recaptcha="step++" ></main-login-signin>
        </v-stepper-content>
        <v-stepper-content step="2">
          <main-login-sms @action-span:click="step--"></main-login-sms>
        </v-stepper-content>
        <div class="d-flex flex-column align-center text-center">
          <span class="d-block">Ao continuar você concorda com os </span>
          <router-link to="/termos"
            ><span>Termos de Uso e Política de Privacidade</span></router-link
          >
        </div>
      </v-stepper-items>
    </v-stepper>
  </v-container>
</template>

<script>
import MainLoginSignin from '@/components/MainLoginPhoneSignin.vue';
import MainLoginSms from '@/components/MainLoginPhoneSms.vue';
import { authClass } from '@/plugins/firebase';

export default {
  components: { MainLoginSignin, MainLoginSms },
  data: () => ({
    step: 1,
  }),
  methods: {
    recaptchaConfig() {
      window.recaptchaVerifier = new authClass.RecaptchaVerifier("recaptcha-container", {
        size: "invisible",
        callback: (response) => {
          console.log("Ok")
        },
        "expired-callback": () => {
          console.log("Expired");
        },
      });
    },
    preRenderRecaptcha() {
      this.recaptchaConfig()
      recaptchaVerifier.render().then((widgetId) => {
        window.recaptchaId = widgetId;
      });
    },
  },
    mounted() {
    this.preRenderRecaptcha();
  },
};
</script>

<style>
</style>