<template>
  <v-container>
    <v-app-bar flat app>
      <v-toolbar>
        <v-toolbar-title>{{$t("glossary.profile")}}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-toolbar>
    </v-app-bar>
    <v-row>
      <v-col cols="12">
        <v-card v-if="userProfile">
          <v-card-title class="justify-center">
            {{$t("glossary.details") }}
          </v-card-title>
          <p>{{userProfile.firstName}}</p> 
          <p>{{userProfile.lastName}}</p>
          <p>{{userProfile.email}}</p>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card-title class="justify-center">
          {{ $t("glossary.solutions") }}
        </v-card-title>
        <solutions-list
          v-on:deleteSolution="deleteSolution($event)"
          v-on:editSolution="editSolution($event)"
          :solutions="solutions"
          :onProfile="true"
        ></solutions-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";
import UserContext from "@/data/user-context";

export default {
  name: "src-views-profile",
  props: {
    author: {
      type: String,
      required: true,
    },
  },
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
  },
  data() {
    return {
      solutions: [],
      solutionContext: new SolutionContext(),
      userContext: new UserContext(),
      userProfile: {},
    };
  },
  mounted() {
    this.solutionContext
      .getByAuthor(this.author)
      .then((solutions) => (this.solutions = solutions));
    // De ID veranderen naar de userID van het geselecteerde profiel
    this.userContext
      .getById(1)
      .then((user) => this.userProfile = user[0]);
  },
  methods: {
    editSolution(solutionId) {
      this.$router.push({
        name: "CreateSolution",
        params: { id: solutionId },
      });
    },
    deleteSolution(solutionId) {
      this.solutionContext
        .delete(solutionId)
        .then(this.solutions.splice(this.solutions.indexOf(solutionId), 1));
    },
  },
};
</script>

<style>
</style>
