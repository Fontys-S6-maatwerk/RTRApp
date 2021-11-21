<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card elevation="1">
          <v-card-title class="justify-center">{{
            solution.solution.name
          }}</v-card-title>
          <v-row class="justify-center">
            <v-card-subtitle>
              <v-progress-linear
                color="#037CBC"
                height="15"
                :value="calculateImpactPercentage()"
                >{{ calculateImpactPercentage() }}%</v-progress-linear
              >
              {{ $t("common.current_impact") }}
              {{ solution.solution.currentImpact }} /
              {{ solution.solution.impactGoal }}
            </v-card-subtitle>
          </v-row>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
          </v-img>
          <v-row>
            <v-col cols="6">
              <v-card-title v-if="solution.solution.user">
                <Avatar :user="solution.solution.user" />
                <router-link
                  :to="{
                    name: 'Profile',
                    params: { userId: solution.solution.user.id },
                  }"
                >
                  {{
                    solution.solution.user.firstName +
                      " " +
                      solution.solution.user.lastName
                  }}
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
            >{{ solution.solution.weatherExtremeType }}
          </v-card-subtitle>
          <v-card-text>
            <v-row class="justify-space-between">
              <v-card-subtitle
                >{{ solution.solution.numberOfLikes }}
                {{ $t("common.likes") }}</v-card-subtitle
              >
              <v-card-subtitle>
                {{ $d(solution.solution.uploadDate, "long") }}
              </v-card-subtitle>
              <v-card-subtitle>
                {{ $t("common.view_count") }}
                {{ solution.solution.viewCount }}</v-card-subtitle
              >
            </v-row>
          </v-card-text>
          <impact-dialog v-on:impact="impact($event)"></impact-dialog>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card>
          <v-list>
            <v-subheader>{{ $t("common.materials") }}</v-subheader>
            <v-list-item
              v-for="(material, m) in solution.solution.materials"
              :key="m"
            >
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
        <v-card>
          <v-list>
            <v-subheader>{{ $t("common.steps") }}</v-subheader>
            <v-list-item v-for="(step, i) in solution.solution.steps" :key="i">
              <v-list-item-content>
                <v-img
                  max-width="500"
                  max-height="250"
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
                {{ step.description }}
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>

      <v-col cols="12">
        <CommentSection :solutionId="this.id" :userId="1" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ImpactDialog from "@/components/dialogs/ImpactDialog.vue";
import CommentSection from "../components/comments/CommentSection";
import Avatar from "../components/Avatar";
import { mapActions, mapState } from "vuex";

export default {
  props: {
    id: String,
  },
  created() {
    this.fetchSolution(this.id);
  },
  components: {
    Avatar,
    CommentSection,
    ImpactDialog,
  },
  computed: {
    ...mapState(["solution"]),
  },
  methods: {
    ...mapActions("solution", ["fetchSolution", "addImpact"]),
    ...mapActions("comment", ["fetchSolutionComments"]),
    calculateImpactPercentage() {
      return Math.floor(
        (this.solution.solution.currentImpact /
          this.solution.solution.impactGoal) *
          100
      );
    },
    impact(impactNumber) {
      this.addImpact(impactNumber).then(() => {
        this.calculateImpactPercentage();
      });
      // this.solution.currentImpact += Number(impactNumber);
      // // Stuur de solution & current user naar backend
      // // this.solutionContext.userImpact(this.solution, currentUser)
      // // .then(() => {
      // //  this.calculateImpactPercentage();
      // // });
      // this.solutionContext.userImpact(this.solution).then(() => {
      //   this.calculateImpactPercentage();
      // });
    },
  },
};
</script>
