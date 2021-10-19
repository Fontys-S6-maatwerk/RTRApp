<template>
<v-container>
  <v-card-title class="justify-center">{{ $t('glossary.my') }} {{ $t('glossary.solutions') }}</v-card-title>
  <SolutionsList @deleteSolutionById='deleteSolutionById' :solutions='solutions' :onProfile='true'></SolutionsList>
</v-container>
</template>

<script lang="js">
  import axios from 'axios';
  import SolutionsList from '../components/SolutionsList.vue'

  export default  {
    name: 'src-views-profile',
    mounted () {
      axios
        .get("http://localhost:3001/Solutions?author=" + this.$route.params.author)
        .then((response) => (this.solutions = response.data));
    },
    data () {
      return {
          solutions: [],
      }
    },
    methods: {
        deleteSolutionById(solutionId) {
          console.log('delete ' + solutionId);
          axios
            .delete('http://localhost:3001/Solutions/' + solutionId)
            .then(this.solutions.splice(this.solutions.indexOf(solutionId), 1));
        }
    },
    computed: {

    },
    components: {
      SolutionsList
    }
}


</script>

<style>
</style>
