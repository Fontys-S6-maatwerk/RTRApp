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

      <!-- <v-select
        class="pa-1"
        prepend-inner-icon="mdi-magnify"
        :menu-props="{ bottom: true, offsetY: true }"
        :label="sorters[1].name"
        :items="sorters[1].items"
        item-text="name"
        return-object
        hide-details
        @change="filter"
      >
        <template v-slot:item="{ item }">
          <v-icon class="mr-2">{{ item.icon }}</v-icon>
          {{ item.name }}
      
        </template>

        <template v-slot:append-item @click="removeSelectedExtreme()">
          <v-divider></v-divider>
          <v-list-item>
              <v-icon class="mr-2"> mdi-minus </v-icon>
                Clear
          </v-list-item>
        </template>
      </v-select> -->
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
        // {
        //   name: "Weather extreme",
        //   selected: -1,
        //   items: [
        //     {
        //       name: "Tornado",
        //       icon: "mdi-weather-tornado",
        //     },
        //     {
        //       name: "Smog",
        //       icon: "mdi-smog",
        //     },
        //     {
        //       name: "Flood",
        //       icon: "mdi-home-flood",
        //     },
        //     {
        //       name: "Wildfire",
        //       icon: "mdi-fire",
        //     },
        //   ],
        // },
      ],
    };
  },
  methods: {
  //   removeSelectedExtreme() {
  //     this.sorters.find(x => x.name = "Weather extreme").selected = -1;
  // },
    filter(item) {
      let sorter = this.sorters.find((x) => x.items.includes(item));

      //search for icon instead of text because of duplicate asc and desc text
      // let sorter = this.sorters.find((x) =>
      //   x.items.find((x) => x.icon === item.icon)
      // );


     sorter.selected = sorter.items.indexOf(item);
      
      // let sorters = this.sorters.map((x) => {
      //   return {
      //     name: x.name,
      //     sort: x.items[x.selected].text,
      //   };
      // });

      // console.log(item.name);

      this.$emit("sort", item.name);
    },
  },
};
</script>

<style scoped>
</style>