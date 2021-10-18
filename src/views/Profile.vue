<template>
<v-container>
  <v-card-title class="justify-center">My Solutions</v-card-title>
  <v-row no-gutters>
    <v-col v-if="solutions" cols="12">
      <v-card class="ma-1" v-for="solution in solutions" :key="solution.id" v-on:click=openSolution(solution.id)>
        <v-card-title>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
          </v-avatar>
          <p class="ma-1">
            {{ solution.author }}
          </p>
          <v-spacer></v-spacer>
          <p class="ma-1">
            {{ solution.uploadDate }}
          </p>
        </v-card-title>
        <v-card-text class="pb-1">
          <v-img class="rounded-lg" src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            <span class="solution-overlay pa-1 my-1" style="left: 0">
              <h3 class="mx-1">{{ solution.name }}</h3>
              <p class="mx-1 my-0">{{ solution.weatherExtremeType }}</p>
            </span>
            <span class="solution-overlay pa-1" style="right: 0">
              <v-btn height="50" color="white" outlined>
                <v-icon size="30">mdi-bookmark-outline</v-icon>
              </v-btn>
              <v-dialog v-model="dialog" v-if="enabled">
                <template v-slot:activator="{on, attrs}">
                  <v-btn v-bind="attrs" v-on="on" outlined color="white" height="50">
                    <v-icon size="30">mdi-trash-can-outline</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Delete Solution {{solution.name}}</v-card-title>
                  <v-card-text>Are you sure you want to delete the solution {{solution.name}}?</v-card-text>
                  <v-card-actions>
                    <v-btn @click="deleteSolutionById(solution.id)" color="green">Yes</v-btn>
                    <v-btn @click="dialog = false" color="red">No</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </span>
          </v-img>
        </v-card-text>
        <v-card-actions class="px-5 py-2">
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
          </v-avatar>
          <v-spacer></v-spacer>
          <p>{{ $t('glossary.impacted') }} {{ solution.currentImpact }} {{ $t('glossary.users') }}</p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script lang="js">
  import axios from 'axios';

  export default  {
    name: 'src-views-profile',
    props: [],
    mounted () {
      axios
        .get("http://localhost:3001/Solutions?author=" + this.$route.params.author)
        .then((response) => (this.solutions = response.data));
    },
    data () {
      return {
          solutions: [],
          dialog: false,
          enabled: true,
      }
    },
    methods: {
        deleteSolutionById(solutionId) {
          axios
            .delete('http://localhost:3001/Solutions/' + solutionId)
            .then(this.dialog = false, this.solutions.splice(this.solutions.indexOf(solutionId), 1));
        },
        openSolution(solutionId) {
          this.$router.push({name: 'Solution', params: {solutionId: solutionId}});
        }
    },
    computed: {

    }
}


</script>

<style>
.solution-overlay {
  text-align: left;
  color: white;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 0;
}
</style>
