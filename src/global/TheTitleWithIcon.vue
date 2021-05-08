<template>
  <div class="d-flex align-center">
    <v-icon class="mr-2">
      <slot name="icon"></slot>
    </v-icon>
    <span class="font-weight-bold text-h5 text-uppercase">
      <slot name="title"></slot>
    </span>
  </div>
</template>