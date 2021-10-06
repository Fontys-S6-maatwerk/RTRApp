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

            <v-btn @click="$refs.file.click()" height="50" class="my-2" block>
              <v-icon left>mdi-upload</v-icon>
              Upload Image
            </v-btn>
            <input hidden ref="file" type="file" accept=".png,.jpg" />
            <!-- (change)="readURL($event)" -->

            <v-btn height="50" class="my-2" color="primary" block @click="e1++">
              Next step
            </v-btn>
          </v-card-text>
        </v-card>

        <!-- <v-btn color="primary" @click="e1++"> Continue </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn> -->
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              v-for="(material, index) in solution.materials"
              :key="index"
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
              :key="index"
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

            {{ $data }}
          </v-card-text>
        </v-card>

        <v-btn color="primary" @click="e1++"> Continue </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn>
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
              :key="index"
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
        </v-card>

        <!-- @click="e1 = 1" -->
        <v-btn color="primary" @click="logDone()"> Done </v-btn>
        <v-btn text @click="e1--"> Cancel </v-btn>
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
      e1: 1,
      solution: {
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

::-webkit-scrollbar {
  display: none;
}
</style>