<template>
  <v-row>
    <v-col cols="3" sm="2">
      <avatar :user="user"/>
    </v-col>
    <v-col class="mb-4 mr-4">
      <v-row>
        <v-text-field
            v-model="comment.content"
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
  components: {
    Avatar: () => import('../Avatar')
  },
  props: ["user"], //current user
  data() {
    return {
      commentContext: new CommentContext(),
      comment: {
        id: "",
        content: "",
        solution: this.$route.params.solutionId,
        author: "",
      },
    }
  },
  methods: {
    post() {
      this.comment.author = this.user.id;
      this.commentContext.postComment(this.comment)
      .then(this.$emit('add', this.comment))
    },
  }
}
</script>

<style scoped>

</style>