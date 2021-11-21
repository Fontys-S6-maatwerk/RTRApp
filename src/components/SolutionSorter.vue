<template>
  <v-card class="ma-1 px-2" min-width="80px">
    <v-card-text class="px-2 justify-space-around d-flex flex-wrap">
      <v-tooltip v-for="(item, index) in items" :key="index" bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            :elevation="index == selected ? '6' : '1'"
            v-on="on"
            v-bind="attrs"
            @click="filter(item)"
          >
            <v-icon>{{ item.icon }}</v-icon>
          </v-btn>
        </template>
        {{ item.name }}
      </v-tooltip>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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
    };
  },
  methods: {
    filter(item) {
      this.selected = this.items.indexOf(item);

      this.$emit("sort", item.name);
    },
  },
};
</script>

<style scoped>
</style>