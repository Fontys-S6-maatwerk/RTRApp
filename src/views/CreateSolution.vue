<template>
  <v-stepper alt-labels v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> General </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Materials </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Instructions </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card outlined color="transparent">
          <v-card-text>
            <v-text-field
              :counter="40"
              label="Title"
              outlined
              required
            ></v-text-field>

            <v-textarea
              label="Introduction"
              :counter="250"
              height="100"
              hint="Type a quick introduction about the solution"
              outlined
              required
            ></v-textarea>

            <v-card class="category-list" tile>
              <span v-for="i in 20" :key="i">
                <v-img
                  width="50"
                  height="50"
                  class="rounded-lg ma-1"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                </v-img>
                <p>Blizzard</p>
              </span>
            </v-card>

            <v-btn height="50" class="my-2" block>
              <v-icon left>mdi-upload</v-icon>
              Upload Image
            </v-btn>

            <v-btn height="50" class="my-2" color="primary" block @click="e1++">
              Next step
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- <v-btn color="primary" @click="e1++"> Continue </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn> -->
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card class="mb-12" color="grey lighten-1" height="200px"
          >Step 2</v-card
        >

        <v-btn color="primary" @click="e1++"> Continue </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card class="mb-12" color="grey lighten-1" height="200px"
          >Step 3</v-card
        >

        <!-- @click="e1 = 1" -->
        <v-btn color="primary"> Continue </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  data() {
    return {
      e1: 1,
    };
  },
};
</script>

<style scoped>
::v-deep .v-stepper__label {
  display: unset !important;
}

.category-list {
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
}

::-webkit-scrollbar {
  display: none;
}
</style>