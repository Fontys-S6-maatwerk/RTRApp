<template>
  <div>
    <v-divider class="my-5"/>
    <CommentList />
    <div class="d-flex justify-center" v-if="!finished">
      <v-btn outlined small @click="loadContent">load more</v-btn>
    </div>
    </div>
</template>

<script>
import CommentList from "./CommentList";
export default {
  name: "CommentSection",
  components: {CommentList},
  data: () => ({}),
};
</script>
