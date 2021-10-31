<template>
  <div>
    <comment-input label="comment"
                   @comment-created="(c) => content.unshift(c)"/>

    <v-divider class="my-5"/>

    <comment v-for="comment in content" :comment="comment" :key="comment.id"/>
    <div class="d-flex justify-center" v-if="!finished">
      <v-btn outlined small @click="loadContent">load more</v-btn>
    </div>
  </div>
</template>

<script>
import CommentInput from "./comment-input";
import Comment from "./comment";
import axios from "axios";
export default {
  name: "comment-section",
  components: {Comment, CommentInput},
  data(){
    return{
      content: {}
    }
  },
  created() {
    this.loadContent()
  },
  methods: {
    loadContent() {
      axios.get("http://localhost:3001/Reactions?solution=" + this.solutionId)
          .then((response) => {
            console.log('gotm')
            console.log(response.data)
            console.log(response.data.length)
            this.content = response.data;
          } );
      return `/`
    }
  }
}
</script>

<style scoped>
</style>