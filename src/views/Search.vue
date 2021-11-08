<template>
<v-container>
  <v-row>
    <v-col cols="12">
      <v-form>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-textarea
              v-model="searchMessage"
              label="Search"
              auto-grow
              rows="1"
              clearable
              filled
              :append-outer-icon="'mdi-send'"
              :prepend-icon="'mdi-magnify'"
              single-line
              @click:append-outer="sendMessage"
              @click:clear="clearMessage">

              </v-textarea>
            </v-col>
            <v-col cols="6">
              <v-card class="ma-1 px-2">
                <v-card-text class="justify-space-between">
                  <v-btn
                    v-for="extreme in weatherExtremeTypes"
                    :key="extreme"
                    @click="selectWeatherExtreme(extreme)">
                    {{ extreme }}
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="6">
              <solution-sorter 
              v-on:sort="selectSortBy($event)"></solution-sorter>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-col>

    <v-col cols="12">
      <solutions-list
      :solutions="solutions">

      </solutions-list>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
  import SolutionContext from "@/data/solution-context";
  import WeatherContext from "@/data/weather-context";
  export default  {
    name: 'src-views-search',
    props: [],
    components: {
      SolutionsList: () => import("@/components/SolutionsList.vue"),
      SolutionSorter: () => import("@/components/SolutionSorter.vue"),
    },
    mounted () {
      this.weatherContext.getWeatherExtremes().then((extremes) => {
        this.weatherExtremeTypes = extremes;
      });
    },
    data () {
      return {
        searchMessage: '',
        solutions: [],
        sectionNumber: 1,
        sectionSize: 20,
        weatherExtremeTypes: [],
        selectedWeatherExtreme: '',
        selectedSortBy: '',
        solutionContext: new SolutionContext(),
        weatherContext: new WeatherContext()
      }
    },
    methods: {
      sendMessage() {
        // this.solutionContext.search(
        // this.searchMessage,
        // this.sectionNumber,
        // this.sectionSize,
        // this.selectedWeatherExtreme,
        // this.solutionType,
        // this.selectedSortBy).then((solutions) => {
        //   this.solutions = solutions;
        // });
        this.solutionContext.search(
          this.searchMessage,
          this.selectedWeatherExtreme
        ).then((solutions) => {
          this.solutions = solutions;
        });
        this.clearMessage();
      },
      clearMessage() {
        this.searchMessage = '';
        this.selectedWeatherExtreme = '';
        this.selectedSortBy = '';
      },
      selectSortBy(sort) {
        this.selectedSortBy = sort;
        console.log('select sort: ' + this.selectedSortBy);
      },
      selectWeatherExtreme(extreme) {
        this.selectedWeatherExtreme = extreme;
        console.log('select extreme: ' + this.selectedWeatherExtreme);
      }
    },
    computed: {

    }
}


</script>

<style>
</style>
