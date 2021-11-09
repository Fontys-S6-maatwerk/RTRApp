<template>
  <v-container>
    <v-app-bar flat app>
      <v-toolbar-title>{{ $t("glossary.profile") }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="text-center">
        <v-menu offset-y :close-on-content-click="false">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-cog</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item>
              <locale-switcher></locale-switcher>
            </v-list-item>
            <v-list-item v-for="(item, index) in settings" :key="index" link>
              <v-list-item-title>{{
                $t("glossary." + item.title)
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row justify="space-around">
            <v-btn text>
              {{ $t("common.following") }}
            </v-btn>
            <v-btn text>
              {{ $t("common.followers") }}
            </v-btn>
            <v-btn text>
              {{ $t("common.comments") }}
            </v-btn>
            <v-btn text>
              {{ $t("common.likes") }}
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card-title class="justify-center">
          {{ $t("glossary.details") }}
        </v-card-title>
        <v-card>
          <v-card-text>
            <v-row class="justify-space-around">
              <v-card-subtitle
                >{{ user.user.firstName }}
                {{ user.user.lastName }}</v-card-subtitle
              >
              <v-card-subtitle>{{ user.user.email }}</v-card-subtitle>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card-title class="justify-center">
          {{ $t("glossary.solutions") }}
        </v-card-title>
        <solutions-list
          v-on:deleteSolution="deleteSolution($event)"
          v-on:editSolution="editSolution($event)"
          :solutions="solution.userSolutions"
          :onProfile="true"
        ></solutions-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";
import { mapActions, mapState } from "vuex";

export default {
  name: "src-views-profile",
  props: {
    id: String,
  },
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
    LocaleSwitcher: () => import("@/components/LocaleSwitcher.vue"),
  },
  data() {
    return {
      solutionContext: new SolutionContext(),
      settings: [
        {
          title: "delete_account",
        },
      ],
    };
  },
  mounted() {
    this.fetchUser(this.id);
    this.fetchUserSolutions({
      id: this.id,
      pageNumber: 1,
    });
  },
  computed: {
    ...mapState(["user", "solution"]),
  },
  methods: {
    ...mapActions("user", ["fetchUser"]),
    ...mapActions("solution", ["fetchUserSolutions"]),

    //TODO: Move to solution card, irrelevant for profile
    editSolution(solutionId) {
      this.$router.push({
        name: "CreateSolution",
        params: { id: solutionId },
      });
    },
    //TODO: Move to solution card, irrelevant for profile
    deleteSolution(solutionId) {
      this.solutionContext
        .delete(solutionId)
        .then(this.solutions.splice(this.solutions.indexOf(solutionId), 1));
    },
  },
};
</script>
