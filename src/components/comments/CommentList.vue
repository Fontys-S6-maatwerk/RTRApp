<template lang="html">
  <v-list min-height="500px">
    <v-list-item v-for="comment in comment.items" v-bind:key="comment.id">
      <CommentView :comment="comment" />
    </v-list-item>
  </v-list>
</template>

<script lang="js">
import { mapState } from "vuex";

  export default  {
    name: 'CommentList',
    props: ['comments'],
    components:{
      CommentView: () => import("./CommentView")
    },
    computed: {
      ...mapState(["comment"])
    }
}
</script>
