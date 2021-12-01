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
import Avatar from "@/components/Avatar.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "CommentCreate",
  components: { Avatar },
  props: ["solutionId"],
  data() {
    return {
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
        user: this.$store.state.user.currentUser,
      };
    },
    post() {
      this.createComment(this.comment);
      this.comment = this.createFreshComment();
    },
  },
};
</script>
