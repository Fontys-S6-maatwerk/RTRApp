<template>
  <v-card class="ma-1">
    <v-card-text
      :class="`pa-2 ${
        $vuetify.breakpoint.smAndUp ? 'd-flex justify-space-between' : ''
      }`"
    >
      <v-select
        class="pa-1"
        v-for="sorter in sorters"
        :key="sorter.name"
        :prepend-inner-icon="sorterIcon(sorter.name)"
        :menu-props="{ bottom: true, offsetY: true }"
        :label="sorter.name"
        :items="sorterItems(sorter.name)"
        item-text="text"
        hide-details
        return-object
        @change="filter"
      ></v-select>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      sorters: [
        {
          name: "Upload date",
          selected: 0,
          items: [
            {
              text: "Ascending",
              icon: "mdi-sort-calendar-ascending",
            },
            {
              text: "Descending",
              icon: "mdi-sort-calendar-descending",
            },
          ],
        },
        {
          name: "Relevance",
          selected: 0,
          items: [
            {
              text: "Likes",
              icon: "mdi-thumb-up-outline",
            },
            {
              text: "Impact",
              icon: "mdi-earth",
            },
          ],
        },
        {
          name: "Views",
          selected: 0,
          items: [
            {
              text: "Ascending",
              icon: "mdi-sort-numeric-ascending",
            },
            {
              text: "Descending",
              icon: "mdi-sort-numeric-descending",
            },
          ],
        },
        {
          name: "Weather extremes",
          selected: 0,
          items: [
            {
              text: "Tornado",
              icon: "mdi-weather-tornado",
            },
            {
              text: "Smog",
              icon: "mdi-smog",
            },
            {
              text: "Flood",
              icon: "mdi-home-flood",
            },
            {
              text: "Wildfire",
              icon: "mdi-fire",
            },
          ],
        },
      ],
    };
  },
  methods: {
    sorterItems(sort) {
      return this.sorters.find((x) => x.name === sort).items;
    },
    sorterIcon(sort) {
      let sorter = this.sorters.find((x) => x.name === sort);

      return sorter.items[sorter.selected].icon;
    },
    filter(item) {
      //search for icon instead of text because of duplicate asc and desc text
      let sorter = this.sorters.find((x) =>
        x.items.map((x) => x.icon).includes(item.icon)
      );

      sorter.selected = sorter.items.indexOf(item);

      let sorters = this.sorters.map((x) => {
        return {
          name: x.name,
          sort: x.items[x.selected].text,
        };
      });

      this.$emit("sort", sorters);
    },
  },
};
</script>

<style scoped>
</style>