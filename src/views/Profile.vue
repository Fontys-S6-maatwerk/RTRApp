<template>
  <v-container>
    <v-card-title class="justify-center"
      >{{ $t("glossary.my") }} {{ $t("glossary.solutions") }}</v-card-title
    >
    <solutions-list
      v-on:deleteSolution="deleteSolution($event)"
      v-on:editSolution="editSolution($event)"
      :solutions="solutions"
      :onProfile="true"
    ></solutions-list>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";

export default {
  name: "src-views-profile",
  props: {
    author: {
      type: String,
      required: true,
    },
  },
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
  },
  data() {
    return {
      solutions: [],
      solutionContext: new SolutionContext(),
    };
  },
  mounted() {
    this.solutionContext
      .getByAuthor(this.author)
      .then((solutions) => (this.solutions = solutions));
  },
  methods: {
    editSolution(solutionId) {
      this.$router.push({
        name: "CreateSolution",
        params: { id: solutionId },
      });
    },
    deleteSolution(solutionId) {
      this.solutionContext
        .delete(solutionId)
        .then(this.solutions.splice(this.solutions.indexOf(solutionId), 1));
    },
  },
};
</script>

<style>
</style>
