<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-textarea
          v-model="searchMessage"
          label="Search"
          auto-grow
          rows="1"
          clearable
          filled
          :append-outer-icon="'mdi-send'"
          :prepend-icon="'mdi-magnify'"
          single-line
          @click:append-outer="sendMessage"
          @click:clear="clearMessage">

          </v-textarea>
        </v-col>
      </v-row>
    </v-container>
  </v-form>

</template>

<script>

  export default  {
    name: 'src-views-search',
    props: [],
    mounted () {

    },
    data () {
      return {
        searchMessage: ''
      }
    },
    methods: {
      sendMessage() {
        this.clearMessage();
      },
      clearMessage() {
        this.searchMessage = '';
      }
    },
    computed: {

    }
}


</script>

<style>
</style>
