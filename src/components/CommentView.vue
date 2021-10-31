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
  <template>
    <div class="my-1">
      <div>
        <v-sheet class="d-flex align-center mb-1" rounded color="grey darken-3">
          <!--<user-header class="pa-2" :username="comment.user.username" :image-url="comment.user.image" size="28"/>-->
          <div v-html="comment.htmlContent"></div>
        </v-sheet>
        <v-btn small text v-if="!replying" @click="replying = true">reply</v-btn>
        <v-btn small text v-if="$listeners['load-replies']" @click="$emit('load-replies')">load replies</v-btn>
      </div>
    </div>
  </template>

</template>

<script lang="js">

  export default  {
    name: 'comment-view',
    props: ['comment'],
    mounted () {

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
