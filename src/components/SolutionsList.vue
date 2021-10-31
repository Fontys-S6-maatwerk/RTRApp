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
              <v-btn height="50" color="white" outlined>
                <v-icon size="30">mdi-bookmark-outline</v-icon>
              </v-btn>

              <delete-solution-dialog :solution="solution" :showDialog="dialog" :onProfile="onProfile"
                  v-on:confirm="deleteSolutionById($event)">
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
import SolutionContext from "@/data/solution-context";

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
    DeleteSolutionDialog: () => import("@/components/dialogs/DeleteSolutionDialog"),
  },
  data() {
    return {
      solutionContext: new SolutionContext(),
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
    deleteSolutionById(solutionId) {
      this.solutionContext.delete(solutionId).then(() => {
        this.dialog = false;
        this.solutions.splice(this.solutions.indexOf(solutionId), 1);
      });
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
