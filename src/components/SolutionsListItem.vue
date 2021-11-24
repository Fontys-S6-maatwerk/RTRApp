<template>
<div>
  <v-card-title>
    <v-avatar>
      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
    </v-avatar>
    <p class="ma-1">
      {{ solution.author }}
    </p>
    <v-spacer></v-spacer>
    <p class="ma-1">
      {{ $d(solution.uploadDate, "short") }}
    </p>
  </v-card-title>
  <v-card-text class="pb-1">
    <v-img
      class="rounded-lg"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      v-on:click="openSolution(solution.id)"
    >
      <v-col align="right">
        <v-btn
          color="white"
          v-on:click="editSolution(solution.id)"
          v-if="onProfile"
          height="50"
        >
          <v-icon size="30">mdi-pencil</v-icon>
        </v-btn>
      </v-col>
      <v-col align="right">
        <delete-solution-dialog
          :solution="solution"
          :showDialog="dialog"
          :onProfile="onProfile"
          v-on:confirm="deleteSolution($event)"
        >
        </delete-solution-dialog>
      </v-col>
    </v-img>
    <v-card flat>
      <v-card-text class="pa-1 justify-space-between">
        <v-row>
          <v-col align="left">
            <span>
              <h3 class="mx-1">{{ solution.name }}</h3>
              <p class="mx-1 my-0">{{ solution.weatherExtremeType }}</p>
            </span>
          </v-col>
          <v-col align="right">
            <v-btn
              :color="btnColor"
              height="50"
              v-on:click="likeSolution(solution)"
            >
              <v-icon size="30">mdi-bookmark-outline</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-card-text>
  <v-card-actions class="px-5 py-2">
    <v-avatar size="40">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
    </v-avatar>
    <v-spacer></v-spacer>
    <p>
      {{ $t("glossary.impacted") }} {{ solution.currentImpact }}
      {{ $t("glossary.users") }}
    </p>
  </v-card-actions>
</div>
</template>

<script>
export default {
  name: "src-components-solutions-list-item",
  props: {
    solution: {},
    btnColor: String,
    onProfile: Boolean
  },
  components: {
    DeleteSolutionDialog: () =>
      import("@/components/dialogs/DeleteSolutionDialog"),
  },
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    openSolution(solutionId) {
      this.$router.push({
        name: "Solution",
        params: { solutionId: solutionId },
      });
    },
    editSolution(solutionId) {
      this.$emit("editSolution", solutionId);
    },
    deleteSolution(solutionId) {
      this.$emit("deleteSolution", solutionId);
    },
    likeSolution(solutionId) {
      this.$emit("likeSolution", solutionId);
    },
  },
};
</script>