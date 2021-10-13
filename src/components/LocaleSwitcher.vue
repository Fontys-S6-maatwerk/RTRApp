<template>
<div class="locale-switcher">
  <v-select
      v-model=$i18n.locale
      :items="languages()"
      label="Select"
  >
  </v-select>
</div>
</template>

<script>
export default {
  name: "locale-switcher",
  data () {
    return {
      languages: function () {
        const locales = require.context('/src/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
        const availableLocales = []
        locales.keys().forEach(key => {
          const matched = key.match(/([A-Za-z0-9-_]+)\./i)
          if (matched && matched.length > 1) {
            const locale = matched[1]
            availableLocales.push(locale)
          }
        })
        console.log(availableLocales)
        return availableLocales
      }
    }
  }
}
</script>

<style scoped>

</style>