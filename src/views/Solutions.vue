<template>
  <SolutionsList :solutions='solutions'></SolutionsList>
</template>

<script>
import SolutionContext from "@/data/solution-context";

import SolutionsList from "../components/SolutionsList.vue";

export default {
  data() {
    return {
      solutionContext: new SolutionContext(),
      solutions: [],
    };
  },
  mounted() {
    this.solutionContext.all().then((solutions) => this.solutions = solutions);
  },
  methods: {
    openSolution(solutionId) {
      this.$router.push({
        name: "Solution",
        params: { solutionId: solutionId },
      });
    },
  },
  components: {
    SolutionsList
  }
};
</script>

<style>
</style>