<template>
  <v-dialog v-model="dialog" persistent width="300">
    <v-card
      style="
        padding: 25px;
        text-align: left;
        display: flex;
        align-items: center;
      "
    >
      <v-progress-circular indeterminate color="primary"></v-progress-circular>
      <p style="margin-left: 20px; margin-bottom: 0">Please Stand By</p>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
