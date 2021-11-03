<template>
<v-container>
  <v-row>
    <v-col cols="12">
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
            <v-col cols="12">
              
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>

    <v-col cols="12">
      <solutions-list
      :solutions="solutions">

      </solutions-list>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import SolutionContext from "@/data/solution-context"
  export default  {
    name: 'src-views-search',
    props: [],
    components: {
      SolutionsList: () => import("@/components/SolutionsList.vue"),
    },
    mounted () {

    },
    data () {
      return {
        searchMessage: '',
        solutions: [],
        solutionContext: new SolutionContext()
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
