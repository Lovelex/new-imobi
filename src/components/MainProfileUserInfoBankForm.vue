<template>
  <v-form @submit.prevent.stop="updateBank" ref="form">
    <v-autocomplete
      :items="newBanks"
      v-model="userDb.bankName"
      :rules="[inputRules.required]"
      validate-on-blur
      label="Banco"
    ></v-autocomplete>
    <v-text-field
      v-model="userDb.bankAgency"
      :rules="[inputRules.required]"
      v-mask="['####', '####-#', '####-##']"
      validate-on-blur
      label="Agência"
    ></v-text-field>
    <v-text-field
      v-model="userDb.bankAccount"
      :rules="[inputRules.required]"
      v-mask="[
        '#####-#',
        '######-#',
        '#######-#',
        '########-#',
        '#########-#',
        '###########-#',
      ]"
      validate-on-blur
      label="Conta"
    ></v-text-field>
    <div class="d-flex justify-end">
      <v-btn type="submit" color="primary">
        <v-icon left>mdi-bank</v-icon>
        <span>Atualizar Banco</span>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import mixinBanks from "@/mixins/mixinBanks";

export default {
  mixins: [mixinBanks],
  methods: {
    updateBank() {
      const isFormValid = this.$refs.form.validate();
      if (!isFormValid) {
        return;
      }
      this.$store.dispatch("useUpdate/update", {
        collection: "users",
        id: this.userDb.id,
        item: {
          bankName: this.userDb.bankName,
          bankAgency: this.userDb.bankAgency,
          bankAccount: this.userDb.bankAccount,
        },
      });
    },
  },
};
</script>

<style>
</style>