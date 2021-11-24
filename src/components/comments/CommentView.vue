<template lang="html">
  <v-container fluid fill-height class='px-0'>
    <v-row>
      <v-col
        cols="3"
      >
        <avatar :user="author"/>
      </v-col>
      <v-col
          cols="6"
      >
        <v-row no-gutters class="text-left">
          <v-col>
              <strong>{{author.firstName}} {{author.lastName}}</strong>
             <span>
              {{ $d(comment.creationDate, 'comment') }}
            </span>
          </v-col>
        </v-row>
        <v-row no-gutters class="text-left">
            {{comment.content}}
        </v-row>
      </v-col>
      <v-col
        cols="3"
      >
     
            <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
              icon
              v-bind="attrs"
              v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="deleteComment(comment)">
                <v-list-item-title>Delete</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
  import UserContext from "@/data/user-context";
  import CommentContext from "@/data/comment-context";

  export default  {
    name: 'CommentView',
    props: ['comment'],
    components: {
      Avatar: () => import("../Avatar")
    },
    data () {
      return {
        userContext: new UserContext(),
        commentContext: new CommentContext(),
        author: {},
      }
    },
    mounted() {
      this.userContext.getById(this.comment.author)
        .then((user) => this.author = user[0]);
    },
    methods: {
      deleteComment(comment) {
        this.commentContext.delete(comment.id)
          .then(() => this.$emit('delete', comment));
      }
    }
  }


</script>

<style scoped lang="scss">
.col {
  padding: 10px 0;
}
</style>
