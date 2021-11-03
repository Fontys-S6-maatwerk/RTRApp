<template>
  <solutions-list :solutions="solution.items"></solutions-list>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
  },
  created() {
    this.fetchFeedSolutions({
      id: 1,
      sortBy: "test",
      ascending: true,
      sectionNumber: 1,
    });
  },
  computed: {
    ...mapState(["solution"]),
  },
  methods: {
    ...mapActions("solution", ["fetchFeedSolutions"]),
  },
};
</script>
