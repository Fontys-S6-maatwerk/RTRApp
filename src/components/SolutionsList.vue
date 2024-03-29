<template lang="html">
  <v-row no-gutters>
    <v-col v-if="solutions" cols="12">
      <v-card class="ma-1" v-for="solution in solutions" :key="solution.id" v-on:click="openSolution(solution.id)">
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
          <v-img class="rounded-lg" src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            <span class="solution-overlay pa-1 my-1" style="left: 0">
              <h3 class="mx-1">{{ solution.name }}</h3>
              <p class="mx-1 my-0">{{ solution.weatherExtremeType }}</p>
            </span>
            <span class="solution-overlay pa-1" style="right: 0">
              <v-btn class="mx-1" height="50" color="white" outlined>
                <v-icon size="30">mdi-bookmark-outline</v-icon>
              </v-btn>

              <v-btn class="mx-1" v-on:click="editSolution(solution.id)" v-if="onProfile" height="50" color="white" outlined>
                <v-icon size="30">mdi-pencil</v-icon>
              </v-btn>

              <delete-solution-dialog class="mx-1" :solution="solution" :showDialog="dialog" :onProfile="onProfile"
                  v-on:confirm="deleteSolution($event)">
              </delete-solution-dialog>

            </span>
          </v-img>
        </v-card-text>
        <v-card-actions class="px-5 py-2">
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
          </v-avatar>
          <v-spacer></v-spacer>
          <p>{{ $t('glossary.impacted') }} {{ solution.currentImpact }} {{ $t('glossary.users') }}</p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import UserContext from "../data/user-context";

export default {
  name: "src-components-solutions-list",
  props: {
    solutions: {
      type: Array,
      required: true,
    },
    onProfile: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    DeleteSolutionDialog: () =>
      import("@/components/dialogs/DeleteSolutionDialog"),
  },
  data() {
    return {
      userContext: new UserContext(),
      dialog: false,
    };
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
  },
};
</script>

<style scoped>
.solution-overlay {
  text-align: left;
  color: white;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 0;
}
</style>
