<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>following should be translated:</h1>
    <p>{{ $t('message.hello')}} </p>
  </div>
</template>

<script>
import HelloWorld from "/src/components/HelloWorld";

export default {
  name: "I18nHome",
  components: {
    HelloWorld
  }
}

</script>
