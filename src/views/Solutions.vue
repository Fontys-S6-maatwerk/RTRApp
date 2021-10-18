<template>
  <SolutionsList :solutions='solutions'></SolutionsList>
</template>

<script>
import axios from "axios";
import SolutionsList from "../components/SolutionsList.vue"
export default {
  data() {
    return {
      solutions: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:3001/Solutions")
      .then((response) => (this.solutions = response.data));
  },
  methods:{
  },
  components: {
    SolutionsList
  }
};
</script>

<style>
</style>