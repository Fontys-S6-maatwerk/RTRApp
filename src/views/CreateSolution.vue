<template>
  <v-stepper alt-labels v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1"> General </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2"> Materials </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3"> Instructions </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              label="Title"
              :counter="40"
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

            <v-container class="category-list pa-0">
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
            </v-container>

            <v-card outlined color="transparent">
              <v-container class="d-flex pa-0">
                <h4>Cover image</h4>
                <v-row v-if="solution.coverImage" no-gutters justify="end">
                  <v-icon v-on:click="removeCoverImage()">mdi-close</v-icon>
                </v-row>
              </v-container>

              <v-container class="pa-0 mx-0" v-if="!solution.coverImage">
                <v-btn
                  @click="$refs.file.click()"
                  height="50"
                  class="my-2"
                  block
                >
                  <v-icon left>mdi-upload</v-icon>
                  Upload Image
                </v-btn>
                <input
                  v-on:change="setCoverImage"
                  hidden
                  ref="file"
                  type="file"
                  accept="image/*"
                />
              </v-container>
              <v-row v-else no-gutters>
                <v-img
                  max-height="200"
                  class="rounded-sm my-1"
                  :src="solution.coverImage"
                >
                </v-img>
              </v-row>
            </v-card>

            <v-btn
              height="50"
              class="my-2"
              color="primary"
              block
              @click="step++"
            >
              Next step
            </v-btn>
          </v-card-text>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              v-for="(material, index) in solution.materials"
              :key="material"
              v-model="solution.materials[index]"
              label="Material name"
              hide-details="auto"
              append-icon="mdi-minus"
              @click:append="removeItem(index, 'materials')"
              class="my-1"
              outlined
              required
            ></v-text-field>
            <v-btn
              @click="addItem('', 'materials')"
              height="40"
              class="my-2"
              color="primary"
              block
            >
              <v-icon left>mdi-plus</v-icon>
              Add Material
            </v-btn>

            <v-text-field
              v-for="(tool, index) in solution.tools"
              :key="tool"
              v-model="solution.tools[index]"
              label="Tool name"
              hide-details="auto"
              append-icon="mdi-minus"
              @click:append="removeItem(index, 'tools')"
              class="my-1"
              outlined
              required
            ></v-text-field>
            <v-btn
              @click="addItem('', 'tools')"
              height="40"
              class="my-2"
              color="primary"
              block
            >
              <v-icon left>mdi-plus</v-icon>
              Add Tool
            </v-btn>
            <!-- {{ $data }} -->
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="step++"> Continue </v-btn>
            <v-btn text @click="step--"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <div v-if="!solution.steps.length">
              <h3>No instructions yet</h3>
              <p>Add instruction steps for others to recreate your solution</p>
            </div>

            <v-text-field
              v-for="(step, index) in solution.steps"
              :key="step"
              v-model="solution.steps[index].description"
              hide-details="auto"
              append-icon="mdi-minus"
              @click:append="removeItem(index, 'steps')"
              class="my-1"
              outlined
            ></v-text-field>

            <add-step-dialog
              v-on:submit="addItem($event, 'steps')"
            ></add-step-dialog>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="logDone()"> Add solution </v-btn>
            <v-btn text @click="step--"> Cancel </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
export default {
  components: {
    AddStepDialog: () => import("@/components/AddStepDialog"),
  },
  data() {
    return {
      step: 1,
      solution: {
        coverImage: "",
        materials: [],
        tools: [],
        steps: [],
      },
    };
  },
  methods: {
    addItem(item, name) {
      this.solution[name].push(item);
    },
    removeItem(index, name) {
      this.solution[name].splice(index, 1);
    },
    setCoverImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files) return;

      let file = files[0];
      if (!file.type.match("image/*")) {
        return;
      }
      this.solution.coverImage = window.URL.createObjectURL(file);
    },
    removeCoverImage() {
      this.solution.coverImage = "";
    },
    logDone() {
      console.log(this.solution);
    },
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

.v-card__actions {
  justify-content: space-between;
  padding: unset;
}

.v-card__actions > .v-btn {
  padding: 0 24px !important;
}

::-webkit-scrollbar {
  display: none;
}
</style>