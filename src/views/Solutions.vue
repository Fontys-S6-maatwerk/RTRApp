<template>
  <SolutionsList :solutions="solutions"></SolutionsList>
</template>

<script>
import SolutionContext from "@/data/solution-context";

export default {
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
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
    openSolution(solutionId) {
      this.$router.push({
        name: "Solution",
        params: { solutionId: solutionId },
      });
    },
  },
};
</script>

<style>
</style>