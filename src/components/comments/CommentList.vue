<template lang="html">
  <v-list min-height="500px">
    <v-list-item v-for="comment in this.comments" v-bind:key="comment.id">
          <CommentView :comment="comment" />
    </v-list-item>
  </v-list>
</template>

<script lang="js">
import CommentView from "./CommentView";

  export default  {
    name: 'CommentList',
    components:{
      CommentView
    },
    props: ['comments'],
    data: ()=>({}),
}
</script>

<style scoped lang="scss">
</style>
