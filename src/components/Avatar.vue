<template>
  <router-link
    v-if="user.id"
    :to="{
      name: 'Profile',
      params: { id: user.id },
    }"
  >
    <v-avatar size="64">
      <v-img alt="Avatar" :src="this.profileImage" />
    </v-avatar>
  </router-link>
</template>

<script>
export default {
  name: "Avatar",
  props: ["user"],
  data() {
    return {
      profileImage: "https://cdn.vuetifyjs.com/images/john.jpg",
    };
  },
  methods: {
    getInitials() {
      return this.user.firstName
        ? this.user.firstName.first + this.user.lastName.first
        : "";
    },
  },
};
</script>

<style scoped></style>
