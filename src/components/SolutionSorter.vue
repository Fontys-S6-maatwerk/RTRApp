<template>
  <v-card class="ma-1 px-2">
    <v-card-text class="px-2 d-flex justify-space-between">
      <v-btn v-for="(item, index) in items" :key="index" @click="filter(item)">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
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
      this.$emit("sort", item.name);
    },
  },
};
</script>

<style scoped>
</style>