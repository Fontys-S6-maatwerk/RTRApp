<template>
  <v-container>
    <v-form>
      <v-textarea
        v-model="searchTerms.name"
        label="Search"
        auto-grow
        rows="1"
        clearable
        filled
        append-outer-icon="mdi-send"
        prepend-icon="mdi-magnify"
        single-line
        @click:append-outer="search"
        @click:clear="freshSearchTerms"
      ></v-textarea>

      <v-row>
        <v-col lg="6" md="6" sm="12" cols="12">
          <v-card class="ma-1 px-2">
            <v-select
              v-model="searchTerms.weatherExtreme"
              :items="weather.weatherExtremes"
              return-object
              label="Weather extreme types"
            ></v-select>
          </v-card>
        </v-col>

        <v-col lg="6" md="6" sm="12" cols="12">
          <solution-sorter v-on:sort="selectSortBy($event)"></solution-sorter>
        </v-col>
      </v-row>
    </v-form>
    <solutions-list :solutions="solution.searchSolutions"> </solutions-list>
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
      solutions: [],
      pageNumber: 1,
      sectionSize: 20,
      searchTerms: this.freshSearchTerms(),
    };
  },
  methods: {
    ...mapActions("weather", ["fetchWeatherExtremes"]),
    ...mapActions("solution", ["fetchSearchSolutions"]),
    freshSearchTerms() {
      return {
        name: "",
        weatherExtreme: "",
        sortBy: "",
      };
    },
    search() {
      let terms = this.searchTerms;
      this.fetchSearchSolutions({
        query: terms.name,
        pageNumber: this.pageNumber,
        weatherExtreme: terms.weatherExtreme,
        sortBy: terms.sortBy,
      });
      this.searchTerms = this.freshSearchTerms();
    },
    selectSortBy(sort) {
      this.selectedSortBy = sort;
    },
  },
};
</script>
