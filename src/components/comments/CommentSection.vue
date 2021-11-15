<template>
  <v-card>
    <v-card-title class="justify-center">
      {{ $t("common.comments") }} ({{ this.comments.length }})
    </v-card-title>
    <v-card-text>
      <comment-create :user="this.user" />
      <v-divider class="my-5" />
      <comment-list :comments="this.comments" />
    </v-card-text>
  </v-card>
</template>

<script>
import CommentContext from "../../data/comment-context";
import UserContext from "../../data/user-context";
export default {
  name: "CommentSection",
  props: {
    solutionId: {
      type: String
    },
    userId: {
      type: Number
    },
  },
  components: {
    CommentCreate: () => import("./CommentCreate.vue"),
    CommentList: () => import("./CommentList.vue"),
  },
  data() {
    return {
      commentContext: new CommentContext(),
      userContext: new UserContext(),
      comments: [],
      user: {}, //currentUser
    };
  },
  mounted() {
    /*should get the user from storage since this is the current authenticated user*/
    this.userContext.getById(this.userId).then((user) => {
      this.user = user[0];
    });

    this.commentContext.getBySolutionId(this.solutionId).then((comments) => {
      this.comments = comments;
    });
  },
};
</script>
