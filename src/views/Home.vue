<template>
  <v-container fluid class="pa-0">
    <solution-sorter></solution-sorter>
  <solutions-list :solutions="solutions"></solutions-list>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";

export default {
  components: {
    SolutionSorter: () => import("@/components/SolutionSorter"),
    SolutionsList: () => import("@/components/SolutionsList")
  },
  data() {
    return {
      solutionContext: new SolutionContext(),
      solutions: [],
    };
  },
  mounted() {
    this.solutionContext.all()
      .then((solutions) => this.solutions = solutions);
  }
};
</script>

<style>
</style>