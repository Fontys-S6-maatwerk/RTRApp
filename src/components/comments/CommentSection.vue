<template>
  <v-card>
    <v-card-title class="justify-center">
      {{ $t("common.comments") }} ({{ 999999 }})
    </v-card-title>
    <v-card-text>
      <CommentCreate />
      <v-divider class="my-5" />
      <CommentList />
    </v-card-text>
  </v-card>
</template>

<script>
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
import { mapState } from "vuex";

export default {
  name: "CommentSection",
  props: ["solutionId", "userId"],
  components: { CommentCreate, CommentList },
  computed: {
    ...mapState(["user"]),
  },
};
</script>
