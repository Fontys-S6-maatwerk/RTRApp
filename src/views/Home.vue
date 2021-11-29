<template>
  <v-container fluid class="pa-0">
    <solution-sorter v-on:sort="sort($event)"></solution-sorter>
    <solutions-list v-on:likeSolution="likeSolution($event)" :solutions="solution.feedSolutions"></solutions-list>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SolutionSorter: () => import("@/components/SolutionSorter"),
    SolutionsList: () => import("@/components/SolutionsList.vue"),
  },
  created() {
    this.fetchFeedSolutions({
      userId: this.user.currentUser.id,
      sortBy: null,
      pageNumber: 1,
    });
  },
  methods: {
    sort(sortBy) {
      this.fetchFeedSolutions({
        userId: this.user.currentUser.id,
        sortBy: sortBy,
        pageNumber: 1,
      });
    },
    ...mapActions("solution", ["fetchFeedSolutions"]),
  },
  computed: {
    ...mapState(["solution", "user"]),
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
