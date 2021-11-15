<template lang="html">
  <v-container fluid>
    <v-row>
      <v-col
        cols="3"
      >
        <Avatar :user="author"/>
      </v-col>
      <v-col
          cols="6">
        <v-row no-gutters>
          <v-col>
            <v-container>
              <strong>{{this.author.firstName}} {{this.author.lastName}}</strong>
            </v-container>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-container>
            <v-layout>
            {{this.comment.content}}
            </v-layout>
          </v-container>
        </v-row>
      </v-col>
      <v-col
        cols="3">
        <span>{{this.comment.creationDate | formatDate("HH:MM")}}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
  import UserContext from "../../data/user-context";

  export default  {
    name: 'CommentView',
    props: {
      comment: {
        type: Object
      }
    },
    components: {
      Avatar: () => import("../Avatar")
    },
    data () {
      return {
        userContext: new UserContext(),
        author: {},
      }
    },
    mounted() {
      this.userContext.getById(this.comment.author).then((user) =>{
          this.author = user[0];
      });
    }
  }


</script>

<style scoped lang="scss">
</style>
