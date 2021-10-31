<template>
  <solutions-list :solutions="solutions"></solutions-list>
</template>

<script>
import SolutionContext from "@/data/solution-context";

export default {
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue")
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