<template>
  <router-link
      v-if="user.id"
      :to="{
        name: 'Profile',
        params: { id: user.id },
      }">
  <v-avatar
      size="64">
    <v-img
        v-if="user.profileImage"
        alt="Avatar"
        :src="user.profileImage" />
    <v-icon
        v-else
        color="teal"
        v-text="' '">
      </v-icon>
  </v-avatar>
  </router-link>
</template>

<script>

export default {
  name: "Avatar",
  props: ["user"],
  data() {
    return {
    }
  },
  methods:{
    getInitials(){
      return this.user.firstName ? this.user.firstName.first + this.user.lastName.first : ''
    }
  }
}
</script>

<style scoped>

</style>