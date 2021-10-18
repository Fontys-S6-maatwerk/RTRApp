<template>
  <v-stepper alt-labels v-model="step">
    <v-stepper-header>
      <v-stepper-step :complete="step > 1" step="1">
        {{ $t("common.general") }}
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="step > 2" step="2">
        {{ $t("common.materials") }}
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">
        {{ $t("common.instructions") }}
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              :label="$t('common.title')"
              v-model="solution.title"
              :counter="40"
              outlined
            ></v-text-field>

            <v-textarea
              :label="$t('common.introduction')"
              v-model="solution.introduction"
              :counter="250"
              height="100"
              :hint="$t('common.instructions_hint')"
              outlined
            ></v-textarea>

            <v-row v-if="solution.weatherExtreme" no-gutters justify="end">
              <v-icon v-on:click="solution.weatherExtreme = ''"
                >mdi-close</v-icon
              >
            </v-row>
            <v-container fluid class="category-list pa-0">
              <span
                v-for="(weatherExtreme, index) in computedWeatherExtremes"
                :key="index"
                v-on:click="setWeatherExtreme(weatherExtreme)"
              >
                <v-img
                  width="75"
                  height="75"
                  class="rounded-lg ma-1"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                </v-img>
                <p>{{ weatherExtreme }}</p>
              </span>
            </v-container>
            <v-card outlined color="transparent">
              <v-container fluid class="d-flex pa-0">
                <h4>{{ $t("common.cover_image") }}</h4>
                <v-row v-if="solution.coverImage" no-gutters justify="end">
                  <v-icon v-on:click="solution.coverImage = ''"
                    >mdi-close</v-icon
                  >
                </v-row>
              </v-container>

              <v-container class="pa-0" fluid v-if="!solution.coverImage">
                <v-btn
                  @click="$refs.file.click()"
                  height="50"
                  class="my-2"
                  block
                >
                  <v-icon left>mdi-upload</v-icon>
                  {{ $t("common.upload_image") }}
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
              {{ $t("common.next_step") }}
            </v-btn>
          </v-card-text>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              v-for="(material, index) in solution.materials"
              :key="generateKey(material, index)"
              v-model="solution.materials[index]"
              :label="$t('glossary.material')"
              hide-details="auto"
              append-icon="mdi-minus"
              @click:append="removeItem(index, 'materials')"
              class="my-1"
              outlined
            ></v-text-field>

            <v-btn
              @click="addItem('', 'materials')"
              height="40"
              class="my-2"
              color="primary"
              block
            >
              <v-icon left>mdi-plus</v-icon>
              {{ $t("common.add_material") }}
            </v-btn>

            <v-text-field
              v-for="(tool, index) in solution.tools"
              :key="generateKey(tool, index)"
              v-model="solution.tools[index]"
              :label="$t('glossary.tool')"
              hide-details="auto"
              append-icon="mdi-minus"
              @click:append="removeItem(index, 'tools')"
              class="my-1"
              outlined
            ></v-text-field>

            <v-btn
              @click="addItem('', 'tools')"
              height="40"
              class="my-2"
              color="primary"
              block
            >
              <v-icon left>mdi-plus</v-icon>
              {{ $t("common.add_tool") }}
            </v-btn>
            <!-- {{ $data }} -->
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="step++">
              {{ $t("common.continue") }}
            </v-btn>
            <v-btn text @click="step--"> {{ $t("common.cancel") }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <div v-if="!solution.steps.length">
              <h3>{{ $t("common.no_instructions_yet") }}</h3>
              <p>{{ $t("common.instructions_description") }}</p>
            </div>

            <v-text-field
              v-for="(step, index) in solution.steps"
              :key="generateKey(step, index)"
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
            <v-btn color="primary" @click="submit()">
              {{ pageState.submitText }}
            </v-btn>
            <v-btn text @click="step--"> {{ $t("common.cancel") }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import WeatherContext from "@/data/weather-context";
import SolutionContext from "@/data/solution-context";

export default {
  props: {
    solutionId: {
      type: Number,
      required: false,
    },
  },
  components: {
    AddStepDialog: () => import("@/components/AddStepDialog"),
  },
  data() {
    return {
      step: 1,
      weatherExtremes: [],
      solutionContext: new SolutionContext(),
      weatherContext: new WeatherContext(),
      solution: {
        title: "",
        introduction: "",
        coverImage: "",
        weatherExtreme: "",
        materials: [],
        tools: [],
        steps: [],
      },
      pageState: {
        editable: !isNaN(this.solutionId),
        submitText: this.solutionId
          ? this.$t("common.update_solution")
          : this.$t("common.add_solution"),
      },
    };
  },
  mounted() {
    this.weatherContext.getWeatherExtremes().then((extremes) => {
      this.weatherExtremes = extremes;
    });

    if (this.solutionId) {
      this.solutionContext.getById(this.solutionId).then((solutions) => {
        //mock returns array with solution
        this.solution = solutions[0];
      });
    }
  },
  methods: {
    addItem(item, name) {
      this.solution[name].push(item);
    },
    removeItem(index, name) {
      this.solution[name].splice(index, 1);
    },
    setWeatherExtreme(weatherExtreme) {
      this.solution.weatherExtreme = weatherExtreme;
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
    submit() {
      if (this.pageState.editable) {
        this.solutionContext.update(this.solution);
      } else {
        this.solutionContext.add(this.solution);
      }
    },
    generateKey(item, index) {
      return `${item}-${index}`;
    },
  },
  computed: {
    computedWeatherExtremes() {
      return this.solution.weatherExtreme
        ? [this.solution.weatherExtreme]
        : this.weatherExtremes;
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
  justify-content: center;
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