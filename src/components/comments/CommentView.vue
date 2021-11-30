<template lang="html">
  <v-container fluid fill-height class='px-0'>
    <v-row>
      <v-col cols="3">
        <Avatar :user="this.comment.user" />
      </v-col>
      <v-col cols="6">
        <v-row no-gutters>
          <v-col>
            <v-container>
              <strong>
                {{ this.comment.user.firstName }}
                {{ this.comment.user.lastName }}
              </strong>
            </v-container>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-container>
            <v-layout>
              {{ this.comment.content }}
            </v-layout>
          </v-container>
        </v-row>
      </v-col>
      <v-col cols="3">
        <span>{{ $d(this.comment.creationDate, "comment") }}</span>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="js">
import Avatar from "../Avatar";

export default  {
  name: 'CommentView',
  components: {Avatar},
  props: ['comment'],
}
</script>
