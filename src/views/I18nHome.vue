<template>
  <div class="home">
    <locale-switcher />
    <h1>following should be translated:</h1>
    <p>{{ $t('message.hello')}} </p>
  </div>
</template>

<script>
export default {
  name: "I18nHome",
  components: {
    LocaleSwitcher: () => import("@/components/LocaleSwitcher"),
  }
}

</script>
