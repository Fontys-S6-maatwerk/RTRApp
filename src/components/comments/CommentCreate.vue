<template>
  <v-row>
    <v-col cols="3" sm="2">
      <Avatar :user="user.currentUser" />
    </v-col>
    <v-col class="mb-4 mr-4">
      <v-row>
        <v-text-field
          v-model="comment.content"
          :label="$t('common.comment')"
        ></v-text-field>
      </v-row>
      <v-row class="float-right">
        <v-btn v-on:click="post" elevation="2">{{ $t("common.post") }}</v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CommentContext from "../../data/comment-context";
import Avatar from "../Avatar";

export default {
  name: "CommentCreate",
  components: { Avatar },
  props: ["solutionId"],
  data() {
    return {
      commentContext: new CommentContext(),
      comment: this.createFreshComment(),
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions("comment", ["createComment"]),
    createFreshComment() {
      return {
        content: "",
        solutionId: this.solutionId,
        userId: this.$store.state.user.currentUser.id,
        creationTime: 0,
      };
    },
    post() {
      this.createComment(this.comment);
      this.createFreshComment();
    },
  },
};
</script>
