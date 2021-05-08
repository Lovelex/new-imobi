<template>
  <v-snackbar :color="snackMode.color" v-model="snack.isActive">
    <div class="d-flex justify-space-between">
      <span>{{ snack.text }}</span>
      <div>
        <v-icon>{{ snackMode.icon }}</v-icon>
      </div>
    </div>
  </v-snackbar>
</template>

<script>
export default {
  props: {
    admin: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    snack() {
      const mode = !this.admin ? "snackMain" : "snackAdmin"
      return this.$store.getters[`${mode}/getSnack`];
    },

    snackMode() {
      const snacks = {
        success: {
          color: "success",
          icon: "mdi-checkbox-marked-circle",
        },
        error: {
          color: "error",
          icon: "mdi-close-circle",
        },
        info: {
          color: "info",
          icon: "mdi-alert-circle",
        },
        warning: {
          color: "warning",
          icon: "mdi-alert",
        },
      };

      return snacks[this.snack.mode];
    },
  },
};
</script>
