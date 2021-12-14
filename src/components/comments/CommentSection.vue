<template>
  <v-card>
    <v-card-title class="justify-center">
      {{ $t("common.comments") }} ({{ pageResponse.totalElements }})
    </v-card-title>
    <v-card-text>
      <comment-create :solutionId="this.solutionId" />
      <v-divider class="my-5" />
      <comment-list />
    </v-card-text>
    <v-card-actions>
      <page-navigator
        v-if="pageResponse"
        :totalPages="this.pageResponse.totalPages"
        @switch-page="switchPage"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CommentSection",
  props: ["solutionId", "userId"],
  components: {
    CommentCreate: () => import("./CommentCreate"),
    CommentList: () => import("./CommentList"),
    PageNavigator: () => import("@/components/PageNavigator"),
  },
  computed: {
    ...mapState(["user"]),
  },
  data() {
    return {
      pageResponse: {},
    };
  },
  created() {
    this.fetchSolutionComments({
      solutionId: this.solutionId,
      pageNumber: 1,
    }).then((response) => (this.pageResponse = response));
  },
  methods: {
    switchPage(page) {
      this.fetchSolutionComments({
        solutionId: this.solutionId,
        pageNumber: page,
      }).then((response) => (this.pageResponse = response));
    },
    ...mapActions("comment", ["fetchSolutionComments"]),
  },
};
</script>
