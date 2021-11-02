<template lang="html">
  <v-list min-height="500px">
    <v-list-item v-for="comment in this.comments" v-bind:key="comment.id">
          <CommentView :comment="comment" />
    </v-list-item>
  </v-list>
</template>

<script lang="js">
import axios from "axios";
import CommentView from "./CommentView";

  export default  {
    name: 'CommentList',
    components:{
      CommentView
    },
    props: ['solutionId'],
    data(){
      return{
        comments: {}
      }
    },
    mounted(){
      axios.get(process.env.VUE_APP_BASE_URL + "/Comments?solution=" + this.solutionId)
          .then((response) => {
            console.log(response.data.length)
            this.comments = response.data;
          } );
    },
}


</script>

<style scoped lang="scss">
  .comment-list {

  }
</style>
