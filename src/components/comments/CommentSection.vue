<template>
  <v-card>
    <v-card-title class="justify-center">
      {{ $t("common.comments") }} ({{ pageResponse.totalElements }})
    </v-card-title>
    <v-card-text>
      <CommentCreate :solutionId="this.solutionId" />
      <v-divider class="my-5" />
      <CommentList />
    </v-card-text>
    <v-card-actions>
      <PageNavigator
        v-if="pageResponse"
        :totalPages="this.pageResponse.totalPages"
        @switch-page="switchPage"
      />
    </v-card-actions>
  </v-card>
</template>

<script>
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import PageNavigator from "@/components/PageNavigator.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "CommentSection",
  props: ["solutionId", "userId"],
  components: { CommentCreate, CommentList, PageNavigator },
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
    }).then((response) => {
      console.log(response);
      this.pageResponse = response;
    });
  },
  methods: {
    switchPage(page) {
      this.fetchSolutionComments({
        solutionId: this.solutionId,
        pageNumber: page,
      }).then((response) => {
        console.log(response);
        this.pageResponse = response;
      });
    },
    ...mapActions("comment", ["fetchSolutionComments"]),
  },
};
</script>
