<template>
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
            </span>
          </v-img>
        </v-card-text>
        <v-card-actions class="px-5 py-2">
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
          </v-avatar>
          <v-spacer></v-spacer>
          <p>impacted {{ solution.currentImpact }} users</p>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      solutions: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/Solutions")
      .then((response) => (this.solutions = response.data));
  },
  methods:{
    openSolution(solutionId){
      this.$router.push({name: 'Solution', params: {solutionId: solutionId}});
    }
  }
};
</script>

<style scoped>
.solution-overlay {
  text-align: left;
  color: white;
  letter-spacing: 0.5px;
  position: absolute;
  bottom: 0;
}
</style>