<template>
  <v-dialog v-model="showDialog" width="400">
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
          <v-icon v-on:click="showDialog = false">mdi-close</v-icon>
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

        <v-container class="d-flex pa-0">
          <h4>Cover image</h4>
          <v-row v-if="step.coverImage" no-gutters justify="end">
            <v-icon v-on:click="removeImage()">mdi-close</v-icon>
          </v-row>
        </v-container>

        <v-container v-if="!step.coverImage" class="pa-0">
          <v-btn @click="$refs.file.click()" height="50" class="my-2" block>
            <v-icon left>mdi-upload</v-icon>
            Upload Image
          </v-btn>

          <input
            hidden
            v-on:change="setImage"
            ref="file"
            type="file"
            accept="image/*"
          />
        </v-container>
        <v-row v-else no-gutters>
          <v-img
            max-height="200"
            class="rounded-sm my-1"
            :src="step.coverImage"
          >
          </v-img>
        </v-row>

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
      showDialog: false,
      step: this.stepStateData(),
      imagePreviewSrc: {
        type: String,
        default: "",
      },
    };
  },
  methods: {
    setImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files) return;

      let file = files[0];
      if (!file.type.match("image/*")) {
        return;
      }
      this.step.coverImage = window.URL.createObjectURL(file);
    },
    removeImage() {
      this.step.coverImage = "";
    },
    submitStep() {
      this.showDialog = false;
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