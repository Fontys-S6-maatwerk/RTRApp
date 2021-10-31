<template>
  <v-dialog v-model="dialog" max-width="500" v-if="onProfile">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-bind="attrs" v-on="on" outlined color="white" height="50">
        <v-icon size="30">mdi-trash-can-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        {{ $t("common.delete") }} {{ $t("common.solution") }}
        {{ solution.name }}
      </v-card-title>
      <v-card-text class="text-left">
        {{ $t("validation.delete_solution") }} '{{ solution.name }}' ?
      </v-card-text>
      <v-card-actions>
        <v-btn @click="confirm()" color="primary">{{ $t("common.yes")}} </v-btn>
        <v-btn @click="dialog = false" color="error">{{ $t("common.no") }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    solution: {
      type: Object,
      required: true,
    },
    showDialog: {
      type: Boolean,
      default: false,
    },
    onProfile: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dialog: this.showDialog,
    };
  },
  methods: {
    confirm() {
      this.$emit("confirm", this.solution.id);
    },
  },
};
</script>

<style>
</style>