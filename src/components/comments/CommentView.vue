<template lang="html">
  <v-container fluid>
    <v-row>
      <v-col
        cols="3"
      >
        <v-avatar
          @click="navigateToProfile(comment.author)"
          size="64"
        >
          <img
            v-if="this.comment.avatar"
            alt="Avatar"
            src="https://cdn.vuetifyjs.com/images/john.jpg">
          <v-icon
            v-else
            color="teal"
            v-text="comment.icon">
            ></v-icon>
        </v-avatar>
      </v-col>
      <v-col
          cols="6">
        <v-row no-gutters>
          <v-col>
            <v-container>
              <strong>{{this.comment.author}}</strong>
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

  export default  {
    name: 'CommentView',
    props: ['comment'],
    mounted () {
      console.log(this.comment)
    },
    data () {
      return {

      }
    },
    methods: {
      navigateToProfile: function(userId){
          return this.$router.push(`/profile/${userId}`)
      }
    },
}


</script>

<style scoped lang="scss">

</style>
