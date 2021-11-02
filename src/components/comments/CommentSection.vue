<template>
    <v-card>
      <v-card-title class="justify-center">{{
          $t("common.comments")
        }}</v-card-title>
      <v-card-text>
        <CommentCreate />
        <v-divider class="my-5"/>
        <CommentList :solution-id="solutionId" />
      </v-card-text>
    </v-card>
</template>

<script>
import CommentList from "./CommentList";
import CommentCreate from "./CommentCreate";
export default {
  name: "CommentSection",
  props: ["solutionId"],
  components: {CommentCreate, CommentList},
  data: () => ({}),
};
</script>
