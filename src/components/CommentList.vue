<template lang="html">
<!--  <v-list min-height="500px">-->
<!--    <v-list-item v-for="comment in this.comments" v-bind:key="comment.id">-->
<!--          <comment-view v-bind:comment="comment" />-->
<!--    </v-list-item>-->
<!--  </v-list>-->

</template>

<script lang="js">
import axios from "axios";
  export default  {
    name: 'comment-list',
    components:{
    },
    props: ['solutionId'],
    data(){
      return{
        comments: {}
      }
    },
    mounted(){
      axios.get("http://localhost:3001/Reactions?solution=" + this.solutionId)
          .then((response) => {
            console.log('gotm')
            console.log(response.data)
            console.log(response.data.length)
            this.comments = response.data;
          } );
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .comment-list {

  }
</style>
