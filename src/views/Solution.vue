<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            solutionId: this.$route.params.solutionId,
            solution: {}
        }

    },
    mounted(){
        axios.get("http://localhost:3000/Solutions/" + this.solutionId)
            .then((response) => { 
                this.solution = response.data;
            } );
    }
}
</script>

<style>

</style>
