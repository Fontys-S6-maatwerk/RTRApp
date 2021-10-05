<template>
  <v-row no-gutters>
    <v-col v-if="solutions" cols="12">
      <v-card v-for="solution in solutions" :key="solution.id">
        <v-card-title>
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" />
          </v-avatar>
          <p>
            {{ solution.author }}
          </p>
          <v-spacer></v-spacer>
          <p>
            {{ solution.uploadDate }}
          </p>
        </v-card-title>
        <v-card-text>
          <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
            <span class="solution-overlay" style="left: 0">
              <h3>{{ solution.name }}</h3>
              <p>{{ solution.weatherExtremeType }}</p>
            </span>
            <span class="solution-overlay" style="right: 0">
              <v-btn height="50" outlined>
                <v-icon size="30">mdi-bookmark-outline</v-icon>
              </v-btn>
            </span>
          </v-img>
        </v-card-text>
        <v-card-actions>
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
  }
};
</script>

<style scoped>
p {
  margin: 2px;
}

.v-card {
  margin: 4px;
}

.v-card__text > .v-image {
  border-radius: 6px;
}

.solution-overlay {
  text-align: left;
  color: white;
  letter-spacing: 0.5px;
  padding: 4px;
  position: absolute;
  bottom: 0;
}

.v-btn {
  color: white !important;
}

.v-card__text {
  padding-bottom: 4px;
}

.v-card__actions {
  padding: 8px 18px;
}
</style>