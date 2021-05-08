<template>
  <v-form @submit.stop.prevent="updateData" ref="form">
    <v-text-field
      :rules="[inputRules.required, inputRules.fullName]"
      v-model="userDb.name"
      validate-on-blur
      label="Nome Completo"
    ></v-text-field>
    <v-text-field
      :rules="[inputRules.required, inputRules.email]"
      v-model="userDb.email"
      validate-on-blur
      label="Email"
    ></v-text-field>
    <v-text-field
      :rules="[inputRules.required, inputRules.cpf]"
      v-mask="[mask.cpf.mask]"
      v-model="userDb.cpf"
      validate-on-blur
      label="CPF"
    ></v-text-field>
    <div class="d-flex justify-end">
      <v-btn type="submit" color="primary">
        <v-icon left>mdi-account</v-icon>
        <span>Atualizar Dados</span>
      </v-btn>
    </div>
  </v-form>
</template>

<script>
export default {
  methods: {
    async updateData() {
      const isFormValid = this.$refs.form.validate()
      if(!isFormValid) {
        return
      }
      const resp = await this.$store.dispatch("useUpdate/update", {
        collection: "users",
        id: this.userDb.id,
        item: {
          name: this.userDb.name,
          email: this.userDb.email,
          cpf: this.userDb.cpf,
        },
      });
      console.log(resp);
    },
  },
};
</script>

<style>
</style>