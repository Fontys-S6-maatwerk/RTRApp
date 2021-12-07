<template>
  <div id="app">
    <v-app>
      <v-main>
        <router-view />
      </v-main>
      <navigation />
    </v-app>
  </div>
</template>
<script>
export default {
  components: {
    Navigation: () => import("@/components/Navigation"),
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

$body-font-family: "Open Sans";
$heading-font-family: "Montserrat";
#app {
  font-family: $body-font-family, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-card__title {
  font-family: $heading-font-family;
}
.v-card {
  font-family: $body-font-family;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
