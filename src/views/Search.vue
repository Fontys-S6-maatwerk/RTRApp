<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-form>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12">
                <v-textarea
                  v-model="query"
                  label="Search"
                  auto-grow
                  rows="1"
                  style="min-width:210px"
                  clearable
                  filled
                  :append-outer-icon="'mdi-send'"
                  :prepend-icon="'mdi-magnify'"
                  single-line
                  @click:append-outer="search"
                  @click:clear="clearMessage"
                >
                </v-textarea>
              </v-col>
              <v-col>
                <v-card class="ma-1 px-2" min-width="210px">
                  <v-select
                    v-model="selectedWeatherExtreme"
                    :items="weather.weatherExtremes"
                    return-object
                    label="Weather extreme types"
                  >
                  </v-select>
                </v-card>
              </v-col>
              <v-col>
                <solution-sorter
                  v-on:sort="selectSortBy($event)"
                ></solution-sorter>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>

      <v-col cols="12">
        <solutions-list :solutions="solution.searchSolutions"> </solutions-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "src-views-search",
  components: {
    SolutionsList: () => import("@/components/SolutionsList.vue"),
    SolutionSorter: () => import("@/components/SolutionSorter.vue"),
  },
  mounted() {
    this.fetchWeatherExtremes();
  },
  computed: {
    ...mapState(["weather", "solution"]),
  },
  data() {
    return {
      query: "",
      solutions: [],
      pageNumber: 1,
      sectionSize: 20,
      selectedWeatherExtreme: "",
      selectedSortBy: "",
    };
  },
  methods: {
    ...mapActions("weather", ["fetchWeatherExtremes"]),
    ...mapActions("solution", ["fetchSearchSolutions"]),
    search() {
      this.fetchSearchSolutions({
        query: this.query,
        pageNumber: this.pageNumber,
        weatherExtreme: this.selectedWeatherExtreme,
        sortBy: this.selectedSortBy,
      });
      this.clearMessage();
    },
    clearMessage() {
      this.query = "";
      this.selectedWeatherExtreme = "";
      this.selectedSortBy = "";
    },
    selectSortBy(sort) {
      this.selectedSortBy = sort;
    },
  },
};
</script>
