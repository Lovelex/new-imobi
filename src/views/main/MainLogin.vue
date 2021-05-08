<template>
  <div>
    <div v-if="!isItemEmpty">
      <main-login-phone v-if="item.mode === 'phone'"></main-login-phone>
      <main-login-email v-if="item.mode === 'email'"></main-login-email>
    </div>
    <div v-if="isItemEmpty" class="d-flex justify-center align-center my-8">
      <v-progress-circular size="64" color="primary" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
import MainLoginPhone from "@/components/MainLoginPhone.vue";
import MainLoginEmail from "../../components/MainLoginEmail.vue";
export default {
  components: { MainLoginPhone, MainLoginEmail },
  computed: {
    item() {
      return this.$store.getters["configSignin/getItem"];
    },
    isItemEmpty() {
      return this.$store.getters["configSignin/isItemEmpty"];
    },
  },
  methods: {
    bindItem() {
      this.$store.dispatch("configSignin/bindItem", {
        collection: "config",
        id: "signin",
      });
    },
  },
  created() {
    this.bindItem();
  },
};
</script>

<style>
</style>