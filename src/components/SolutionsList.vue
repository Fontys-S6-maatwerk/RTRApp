<template lang="html">
  <v-row no-gutters>
    <v-col v-if="solutions" cols="12">
      <v-card class="ma-1" min-width="250px" v-for="solution in solutions" :key="solution.id" >
        <solutions-list-item :onProfile="onProfile" :btnColor="solution.isLiked ? 'green' : 'white'" :solution="solution"
        v-on:likeSolution="likeSolution($event)"
        v-on:deleteSolution="deleteSolution($event)"
        v-on:editSolution="editSolution($event)"></solutions-list-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
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
    SolutionsListItem: () => import("@/components/SolutionsListItem.vue"),
 },
  data() {
    return {
      userContext: new UserContext(),
      dialog: false,
    };
  },
  methods: {
    ...mapActions("solution", ["deleteSolution"]),
    openSolution(solutionId) {
      this.$router.push({
        name: "Solution",
        params: { id: solutionId },
      });
    },
    editSolution(solutionId) {
      this.$router.push({
        name: "CreateSolution",
        params: { solutionId: solutionId },
      });
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>
