<template>
  <v-container fluid class="pa-0">
    <v-text-field
      v-for="(item, index) in items"
      :key="generateKey(itemKey, index)"
      v-model="items[index]"
      :label="label"
      :hide-details="hideDetails"
      :prepend-icon="prependIcon"
      :append-icon="appendIcon"
      @click:append="clickAppend(index)"
      outlined
      :class="styleClass"
    ></v-text-field>
  </v-container>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemKey: {
      type: String,
      default: "item",
    },
    label: {
      type: String,
      default: "",
    },
    hideDetails: {
      type: String,
      default: "auto",
    },
    prependIcon: {
      type: String,
      default: "",
    },
    appendIcon: {
      type: String,
      default: "",
    },
    styleClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    generateKey(item, index) {
      return `${item}-${index}`;
    },
    clickAppend(index) {
      this.$emit("click:append", index);
    },
  },
};
</script>

<style>
</style>