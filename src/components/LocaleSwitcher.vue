<template>
<div class="locale-switcher">
  <select v-model="$i18n.locale">
    <option
        v-for="(lang, i) in languages"
        :key="`Lang${i}`"
        :value="lang">{{ lang }}</option>
  </select>
</div>
</template>

<script>
export default {
  name: "locale-switcher",
  data(){
    return { languages:['en', 'nl']}
  }
}
</script>

<style scoped>

</style>