<template>
  <v-row>
    <v-col cols="3" sm="2">
      <v-avatar>
        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>
      </v-avatar>
    </v-col>
    <v-col class="mb-4 mr-4">
      <v-row>
        <v-text-field
            v-model="comment.text"
            :label="$t('common.comment')"
        ></v-text-field>
      </v-row>
      <v-row class="float-right">
        <v-btn v-on:click="post" elevation="2">{{
            $t("common.post")
          }}</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CommentContext from "../../data/comment-context";

export default {
  name: "CommentCreate",
  data() {
    return {
      commentContext: new CommentContext(),
      comment: {
        id: "",
        text: "",
        solutionId: this.$route.params.solutionId,
        userId: "",
      },
    }
  },
  methods: {
    post() {
      this.commentContext.postComment(this.comment);
    },
  }
}
</script>

<style scoped>

</style>