<template>
  <v-container>
    <v-card-title class="justify-center"
      >{{ $t("glossary.my") }} {{ $t("glossary.solutions") }}</v-card-title
    >
    <solutions-list :solutions="solutions" :onProfile="true"></solutions-list>
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
    this.solutionContext.getByAuthor(this.author)
      .then((solutions) => (this.solutions = solutions));
  },
};
</script>

<style>
</style>
