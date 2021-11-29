<template>
  <v-container fluid class="pa-0">
    <solution-sorter v-on:sort="sort($event)"></solution-sorter>
    <solutions-list v-on:likeSolution="likeSolution($event)" :solutions="solutions"></solutions-list>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";

export default {
  components: {
    SolutionSorter: () => import("@/components/SolutionSorter"),
    SolutionsList: () => import("@/components/SolutionsList"),
  },
  data() {
    return {
      solutionContext: new SolutionContext(),
      solutions: [],
    };
  },
  mounted() {
    this.solutionContext
      .all()
      .then((solutions) => (this.solutions = solutions));
  },
  methods: {
    sort(sortBy) {
      this.solutionContext
        .sort(1, 0, 20, sortBy)
        .then((solutions) => (this.solutions = solutions));
    },
    likeSolution(solution) {
      if (solution.isLiked) {
          solution.isLiked = false;
      } 
      else if (!solution.isLiked) {
          solution.isLiked = true;
      }
      this.solutionContext
        .likeSolution(solution);
    }
  },
};
</script>

<style>
</style>