<template>
    <v-dialog transition="dialog-bottom-transition" width="500" v-model="error" persistent>
      <template >
        <v-card>
          <div class="pa-6">
            <h1 style="font-size: 24px;">Something Went Wrong!!</h1>
            <p class="ma-1">Please try again</p>
          </div>
          <v-card-actions class="justify-end">
            <v-btn color="primary" @click="changeValue">ok</v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
   data: () => {
    return {
      value: false,
    }
  },
  methods:{
    changeValue(value){
      this.$emit('value', this.value);
    }
  },
}
</script>