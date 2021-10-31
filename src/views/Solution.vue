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
              <router-link v-if="solution.author"
                :to="{
                  name: 'Profile',
                  params: { author: solution.author },
                }"
              >
                <v-card-title>
                  <v-avatar class="mr-2">
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>
                  </v-avatar>
                  {{ solution.author }}
                </v-card-title>
              </router-link>
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
        <!-- Reactions -->
        <v-card>
          <v-card-title class="justify-center">{{
            $t("common.comments")
          }}</v-card-title>

          <v-card-text>
            <v-row>
              <v-col cols="3" sm="2">
                <v-avatar>
                  <v-img
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col class="mb-4 mr-4">
                <v-row>
                  <v-text-field
                    v-model="comment.text"
                    :label="$t('common.comment')"
                  ></v-text-field>
                </v-row>
                <v-row class="float-right">
                  <v-btn v-on:click="post" elevation="2">{{
                    $t("common.post")
                  }}</v-btn>
                </v-row>
              </v-col>
            </v-row>
            <!-- ?Laat hier elke reactie zien via een eigen view? -->
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SolutionContext from "@/data/solution-context";
import CommentContext from "@/data/comment-context";

export default {
  data() {
    return {
      solutionContext: new SolutionContext(),
      commentContext: new CommentContext(),
      solutionId: this.$route.params.solutionId,
      solution: {},
      percentage: 0,
      comment: {
        id: "",
        text: "",
        solutionId: this.$route.params.solutionId,
        userId: "",
      },
    };
  },
  mounted() {
    this.solutionContext.getById(this.solutionId).then((solutions) => {
      this.solution = solutions[0];
      this.calculateImpactPercentage();
    });
  },
  methods: {
    calculateImpactPercentage() {
      this.percentage = Math.floor(
        (this.solution.currentImpact / this.solution.impactGoal) * 100
      );
    },
    post() {
      this.commentContext.postComment(this.comment);
    },
  },
};
</script>

<style></style>
