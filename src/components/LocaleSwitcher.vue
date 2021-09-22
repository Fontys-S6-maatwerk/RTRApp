<template>
<div class="locale-switcher">
  <select v-model="$i18n.locale">
    <option
        v-for="(lang, i) in languages"
        :key="`Lang${i}`"
        :value="lang"
    > {{ lang }}</option>
  </select>
</div>
</template>

<script>
export default {
  name: "locale-switcher",
  methods: {
    getAvailableLocales() {
      const locales = require.context('/src/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
      const availableLocales = {}
      locales.keys().forEach(key =>{
        const matched = key.match(/([A-Za-z0-9-_]+)\./i)
        if (matched && matched.length > 1) {
          const locale = matched[1]
          availableLocales[locale] = locale
        }
      })
      return availableLocales
    }
  },
  data() {
    return {
      languages: this.getAvailableLocales()
    }
  }
}
</script>

<style scoped>

</style>