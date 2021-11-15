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

      <v-stepper-step :complete="step > 3" step="3">
        {{ $t("common.instructions") }}
      </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">
        {{ $t("common.impact") }}
      </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-card outlined color="transparent">
          <v-card-text class="px-0">
            <v-text-field
              :label="$t('common.name')"
              v-model="solution.name"
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

            <v-container fluid class="category-list pa-0">
              <span
                v-for="(weatherExtremeType, index) in weather.weatherExtremes"
                :key="index"
                v-on:click="solution.weatherExtremeType = weatherExtremeType"
                :set="
                  (isSelected =
                    solution.weatherExtremeType == weatherExtremeType)
                "
              >
                <v-img
                  width="75"
                  height="75"
                  class="rounded-lg ma-1"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                  <div
                    v-if="isSelected"
                    class="fill-height bottom-gradient"
                  ></div>
                </v-img>
                <div
                  :class="
                    isSelected ? 'font-weight-bold' : 'font-weight-medium'
                  "
                  v-text="weatherExtremeType"
                ></div>
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
            <indexed-text-field
              :items="solution.materials"
              itemKey="material"
              :label="$t('glossary.material')"
              append-icon="mdi-minus"
              @click:append="removeItem($event, 'materials')"
              styleClass="my-1"
            >
            </indexed-text-field>

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

            <indexed-text-field
              :items="solution.tools"
              itemKey="tool"
              :label="$t('glossary.tool')"
              append-icon="mdi-minus"
              @click:append="removeItem($event, 'tools')"
              styleClass="my-1"
            >
            </indexed-text-field>

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

            <indexed-text-field
              :items="solution.steps.map((x) => x.description)"
              itemKey="step"
              append-icon="mdi-minus"
              @click:append="removeItem($event, 'steps')"
              styleClass="my-1"
            >
            </indexed-text-field>

            <add-step-dialog
              v-on:submit="addItem($event, 'steps')"
            ></add-step-dialog>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="step++">
              {{ $t("common.continue") }}
            </v-btn>

            <v-btn text @click="step--"> {{ $t("common.cancel") }} </v-btn>
          </v-card-actions>
        </v-card>
      </v-stepper-content>
      <v-stepper-content step="4">
        <v-form ref="form" v-model="valid">
          <v-card outlined color="transparent">
            <v-card-text class="px-0">
              <v-card-title class="justify-center">{{
                $t("common.impact_question")
              }}</v-card-title>
              <v-text-field
                type="number"
                :rules="impactGoalRules"
                min="0"
                outlined
                required
                :label="$t('common.impact_goal')"
                v-model="impactGoal"
              ></v-text-field>
              <v-text-field
                type="number"
                :rules="currentImpactRules"
                min="0"
                outlined
                required
                :label="$t('common.current_impact')"
                v-model="solution.currentImpact"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="!valid" color="primary" @click="submit()">
                {{ pageState.submitText }}
              </v-btn>
              <v-btn text @click="step--">{{ $t("common.back") }}</v-btn>
            </v-card-actions>
          </v-card>
        </v-form>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  props: {
    solutionId: {
      type: String,
      required: false,
    },
  },
  components: {
    AddStepDialog: () => import("@/components/dialogs/AddStepDialog"),
    IndexedTextField: () => import("@/components/IndexedTextField"),
  },
  data() {
    return {
      valid: false,
      step: 1,
      impactGoalRules: [
        (value) => value >= 0 || this.$t("validation.minimum_value") + " 1",
        (value) => !!value || this.$t("validation.required"),
      ],
      currentImpactRules: [
        (v) => v >= 0 || this.$t("validation.minimum_value") + " 0",
        (v) => !!v || this.$t("validation.required"),
        (v) =>
          v < parseInt(this.impactGoal) ||
          this.$t("validation.impact_goal_greater_than_current_impact"),
      ],
      impactGoal: 0,
      solution: this.createFreshSolution(),
      pageState: {
        editable: !!this.solutionId,
        submitText: this.solutionId
          ? this.$t("common.update_solution")
          : this.$t("common.add_solution"),
      },
    };
  },
  computed: {
    ...mapState(["weather", "user"]),
  },
  mounted() {
    this.fetchWeatherExtremes();

    if (this.solutionId) {
      this.fetchSolution(this.solutionId).then((response) => {
        this.solution = response;
      });
    }
  },
  methods: {
    ...mapActions("weather", ["fetchWeatherExtremes"]),
    ...mapActions("solution", [
      "fetchSolution",
      "createSolution",
      "updateSolution",
    ]),
    createFreshSolution() {
      return {
        name: "",
        introduction: "",
        coverImage: "",
        weatherExtremeType: "",
        materials: [],
        tools: [],
        steps: [],
        uploadDate: +new Date(),
        viewCount: 0,
        impactGoal: 0,
        currentImpact: 0,
        //sample data
        numberOfLikes: 0,
        solutionType: "how-to",
        difficulty: "medium",
        SDGType: "Goal 13: Climate Action",
        userId: this.$store.state.user.currentUser.id,
      };
    },
    validate() {
      this.$refs.form.validate();
    },
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
    submit() {
      this.solution.impactGoal = this.impactGoal;

      if (this.pageState.editable) {
        this.updateSolution({
          id: this.solutionId,
          solution: this.solution,
        }).then((solution) => {
          this.$router.push({
            name: "Solution",
            params: { id: solution.id },
          });
        });
      } else {
        this.createSolution(this.solution).then((solution) => {
          this.$router.push({
            name: "Solution",
            params: { id: solution.id },
          });
        });
      }
    },
  },
  watch: {
    impactGoal: "validate",
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

.bottom-gradient {
  background-image: linear-gradient(
    to bottom,
    rgba(160, 160, 160, 0.4) 0%,
    transparent 72px
  );
}

::-webkit-scrollbar {
  display: none;
}
</style>
