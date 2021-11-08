<template>
  <v-card class="ma-1 px-2">
    <v-card-text class="px-2 d-flex justify-space-between">
      <v-btn
        v-for="sorter in sorters[0].items"
        :key="sorter.name"
        @click="filter(sorter)"
      >
        <v-icon>{{ sorter.icon }}</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      sorters: [
        {
          name: "Type",
          selected: -1,
          items: [
            {
              name: "Impact",
              icon: "mdi-earth",
            },
            {
              name: "Likes",
              icon: "mdi-thumb-up-outline",
            },

            {
              name: "UploadDate",
              icon: "mdi-sort-calendar-ascending",
            },
            {
              name: "Views",
              icon: "mdi-sort-numeric-ascending",
            },
          ],
        },
        
      ],
    };
  },
  methods: {
    filter(item) {
      let sorter = this.sorters.find((x) => x.items.includes(item));

      sorter.selected = sorter.items.indexOf(item);

      this.$emit("sort", item.name);
    },
  },
};
</script>

<style scoped>
</style>