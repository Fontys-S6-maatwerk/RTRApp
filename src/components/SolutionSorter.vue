<template>
  <v-card class="ma-1">
    <v-card-text class="px-2 d-flex justify-space-between">
      <!-- Card solution sorter -->

      <!-- filled -->
      <!-- mdi-sort-calendar-descending -->

      <!-- <v-select
        v-for="sorter in sorters"
        :key="sorter"
        :append-outer-icon="sorter.items['ascending'].icon"
        :label="sorter"
        :items="sorter.items['ascending'].map((x) => x.text)"
      ></v-select> -->

      <v-select
        v-for="sorter in sorters"
        :key="sorter"
        :menu-props="{ bottom: true, offsetY: true }"
        :append-outer-icon="iconByText(sorter.name)"
        :label="sorter.name"
        :items="sorterItems(sorter.name)"
        item-text="text"
        :v-model="sorterItems(sorter.name)[sorter.selected]"
      ></v-select>

      <!-- <v-select
        :menu-props="{ bottom: true, offsetY: true }"
        :append-outer-icon="iconByText('uploadDate')"
        :label="sorters.uploadDate.name"
        :items="sorterItems('uploadDate')"
        item-text="text"
        :v-model="sorterItems('uploadDate')[sorters.uploadDate.selected]"
      ></v-select> -->

      <!-- {{sorterItems('uploadDate')[0]}} -->

      <!-- {{sorterItems('uploadDate')[0]}} -->
      <!-- {{ sorters.uploadDate.selected }} -->
      <!-- {{ sorterItems("uploadDate") }} -->

      <!-- <v-select
        append-outer-icon="mdi-sort-calendar-ascending"
        label="Uploaddate"
        :items="['Ascending', 'Descending']"
        v-model="search"
      ></v-select> -->

      <v-select label="Relevance" :items="['Likes', 'Impact']"></v-select>

      <v-select label="Views" :items="['Ascending', 'Descending']"></v-select>

      <v-select
        label="WeatherExtreme"
        :items="['Tornado', 'Smog', 'Wildfire', 'Flood']"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      sorters: {
        uploadDate: {
          name: "UploadDate",
          selected: 0,
          items: [
            {
              type: "ascending",
              text: "Ascending",
              icon: "mdi-sort-calendar-ascending",
            },
            {
              type: "descending",
              text: "Descending",
              icon: "mdi-sort-calendar-descending",
            },
          ],
        },
        Relevance: {
          name: "Relevance",
          selected: 0,
          items: [
            {
              type: "likes",
              text: "Likes",
              icon: "mdi-thumb-up-outline",
            },
            {
              type: "impact",
              text: "Impact",
              icon: "mdi-earth",
            },
          ],
        },
        Views: {
          name: "Views",
          selected: 0,
          items: [
            {
              type: "ascending",
              text: "Ascending",
              icon: "mdi-sort-numeric-ascending",
            },
            {
              type: "descending",
              text: "Descending",
              icon: "mdi-sort-numeric-descending",
            },
          ],
        },
        WeatherExtreme: {
          name: "WeatherExtremes",
          selected: 0,
          items: [
            {
              type: "tornado",
              text: "Tornado",
              icon: "mdi-weather-tornado",
            },
            {
              type: "smog",
              text: "Smog",
              icon: "mdi-smog",
            },
            {
              type: "flood",
              text: "Flood",
              icon: "mdi-home-flood",
            },
            {
              type: "wildfire",
              text: "Wildfire",
              icon: "mdi-fire",
            },
          ],
        },
      },
    };
  },
  mounted() {
    console.log(this.sorters);
  },
  methods: {
    sorterItems(sorter) {
      return this.sorters[sorter].items;
      //.map((x) => x.text);

      //   x.entries.map(x => x);

      //   .map(x => x)
    },
    iconByText(sorter) {
      let selected = this.sorters[sorter].selected;
      // console.log(this.sorters[sorter].items
      // .filter((x) => x.type === selected).icon
      // );
      return this.sorters[sorter].items.filter((x) => x == selected).icon;
    },
  },
  //sort by uploadldate, relevance(likes), views, by extreme
};
</script>

<style scoped>
.v-select {
  max-width: 24%;
}
</style>