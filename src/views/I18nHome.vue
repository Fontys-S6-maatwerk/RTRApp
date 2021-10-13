<template>
  <div class="home">
    <locale-switcher />
    <h1>following should be translated:</h1>
    <p>{{ $t('message.hello')}} </p>
  </div>
</template>

<script>
import LocaleSwitcher from "../components/LocaleSwitcher";

export default {
  name: "I18nHome",
  components: {
    LocaleSwitcher
  }
}

</script>
