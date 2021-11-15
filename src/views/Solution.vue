<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- Solution -->
        <v-card elevation="1">
          <v-card-title class="justify-center">{{
            solution.name
          }}</v-card-title>
          <v-row class="justify-center">
            <v-card-subtitle>
              <v-progress-linear color="#037CBC" height="15" :value="percentage"
                >{{ percentage }}%</v-progress-linear
              >
              {{ $t("common.current_impact") }}
              {{ solution.currentImpact }} / {{ solution.impactGoal }}
            </v-card-subtitle>
          </v-row>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
          </v-img>
          <v-row>
            <v-col cols="6">
                <v-card-title>
                  <Avatar :user="author" />
                  <router-link
                      v-if="author.id"
                      :to="{
                        name: 'Profile',
                        params: { userId: author.id },
                      }">
                  {{ author.firstName + " " + author.lastName }}
                  </router-link>
                </v-card-title>
            </v-col>

            <v-col cols="6">
              <v-container fluid>
                <v-card-text>
                  <a href="https://sdgs.un.org/goals/goal13" target="_blank"
                    >Sustainable Development Goal 13</a
                  >
                </v-card-text>
              </v-container>
            </v-col>
          </v-row>

          <v-card-subtitle class="text-left"
            >{{ solution.weatherExtremeType }}
          </v-card-subtitle>
          <v-card-text>
            <v-row class="justify-space-between">
              <v-card-subtitle
                >{{ solution.numberOfLikes }}
                {{ $t("common.likes") }}</v-card-subtitle
              >
              <v-card-subtitle>
                {{ $d(solution.uploadDate, "long") }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ $t("common.view_count") }}
                {{ solution.viewCount }}</v-card-subtitle
              >
            </v-row>
          </v-card-text>
          <impact-dialog v-on:impact="impact($event)"></impact-dialog>
        </v-card>
      </v-col>
      <v-col cols="6">
        <!-- Materials -->
        <v-card>
          <v-list>
            <v-subheader>{{ $t("common.materials") }}</v-subheader>
            <v-list-item v-for="(material, m) in solution.materials" :key="m">
              <v-list-item-content>
                <v-list-item-icon>
                  <v-icon>mdi-toolbox</v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="material"></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="6">
        <!-- Steps -->
        <v-card>
          <v-list>
            <v-subheader>{{ $t("common.steps") }}</v-subheader>
            <v-list-item v-for="(step, i) in solution.steps" :key="i">
              <v-list-item-content>
                <v-img
                  max-width="500"
                  max-height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                <v-list-item-title
                  v-text="step.description"
                ></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12">
         <CommentSection :solutionId="solutionId" :userId="1"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";
import CommentSection from "../components/comments/CommentSection";
import UserContext from "../data/user-context";
import Avatar from "../components/Avatar";

export default {
  components: {Avatar, CommentSection,
  ImpactDialog: () => import("@/components/dialogs/ImpactDialog")},
  data() {
    return {
      solutionContext: new SolutionContext(),
      userContext: new UserContext(),
      solutionId: this.$route.params.solutionId,
      solution: {},
      author: {},
      percentage: 0,
    };
  },
  mounted() {
    this.solutionContext.getById(this.solutionId).then((solutions) => {
      this.solution = solutions[0];
      this.calculateImpactPercentage();
    });
    this.userContext.getById(this.solution.author).then((users) => {
      this.author = users[0];
    })
  },
  methods: {
    calculateImpactPercentage() {
      this.percentage = Math.floor(
        (this.solution.currentImpact / this.solution.impactGoal) * 100
      );
    },
    impact(impactNumber) {
      console.log(impactNumber);
      // this.solutionContext.userImpact(impactNumber);
    }
  },
};
</script>

<style></style>
