<template>
  <div class="locale-switcher">
    <v-select v-model="$i18n.locale" :items="languages()" :label="$t('common.select')">
    </v-select>
  </div>
</template>

<script>
import { locales } from "@/util/i18nconfiguration";
export default {
  // sort locale file entries by keys: https://codeshack.io/json-sorter/
  name: "locale-switcher",
  data() {
    return {
      languages: () => locales(),
    };
  },
};
</script>

<style scoped>
</style>