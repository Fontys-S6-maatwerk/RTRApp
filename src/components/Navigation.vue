<template>
  <v-app-bar flat app bottom>
    <v-bottom-navigation grow fixed>
      <v-btn v-for="item in navItems" :key="item.title" :to="item.path">
        <v-icon>{{ item.icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app-bar>
</template>

<script>

  export default  {
    name: "Navigation",
    props: [],
    mounted () {

    },
    data () {
      return {
        navItems: [
          { title: 'Home', path: '/home', icon: 'mdi-home' },
          { title: 'Create solution', path: '/create-solution', icon: 'mdi-plus-circle' },
          { title: 'Search', path: '/search', icon: 'mdi-magnify' },
          { title: 'Profile', path: { name: 'Profile', params: { userId: 1 } }, icon: 'mdi-account-circle'}
        ]
      }
    },
}
</script>

<style>
</style>
