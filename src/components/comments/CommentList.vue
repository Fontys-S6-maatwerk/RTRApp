<template lang="html">
  <v-list min-height="500px">
    <v-list-item class="px-0" v-for="comment in comments" :key="comment.id">
      <comment-view :comment="comment" v-on:delete="remove($event)" />
    </v-list-item>
  </v-list>
</template>

<script lang="js">

  export default  {
    name: 'CommentList',
    props: ['comments'],
    components:{
      CommentView: () => import("./CommentView")
    },
    methods: {
      remove(comment) {
        this.comments.splice(this.comments.indexOf(comment), 1);
      }
    }
}
</script>

<style scoped lang="scss">
</style>
