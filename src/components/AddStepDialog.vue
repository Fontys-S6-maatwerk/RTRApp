<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn height="40" v-bind="attrs" v-on="on" color="primary" block>
        <v-icon left>mdi-plus</v-icon>
        Add Step
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="text-h5 text-center">
        <v-row no-gutters justify="end">Add step</v-row>
        <v-row no-gutters justify="end">
          <v-icon v-on:click="dialog = false">mdi-close</v-icon>
        </v-row>
      </v-card-title>

      <v-card-text class="px-2 pb-2">
        <h4 class="text-left">Description</h4>
        <v-textarea
          v-model="step.description"
          :counter="250"
          height="100"
          hint="Type a quick introduction about the solution"
          outlined
          required
        ></v-textarea>

        <h4 class="text-left">Cover image</h4>
        <v-btn @click="$refs.file.click()" height="50" class="my-2" block>
          <v-icon left>mdi-upload</v-icon>
          Upload Image
        </v-btn>
        <input hidden ref="file" type="file" accept=".png,.jpg" />

        <v-btn height="50" color="primary" class="" block @click="submitStep()">
          Add step
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      step: this.stepStateData(),
    };
  },
  methods: {
    submitStep() {
      this.dialog = false;
      this.$emit("submit", this.step);
      this.step = this.stepStateData();
    },
    stepStateData() {
      return {
        description: "",
        coverImage: "",
      };
    },
  },
};
</script>