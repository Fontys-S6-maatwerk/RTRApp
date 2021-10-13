<template>
<div>
    <!-- Solution -->
    <v-card elevation="1">
        <v-card-title>{{ this.solution.title }}</v-card-title>
        <div>Impact goal {{this.solution.impactGoal}}</div>
        <div>{{this.solution.author}}</div>
        <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
        <v-card-text>
            <v-row align="center">
               <div> {{ this.solution.numberOfLikes }} Likes </div>
               <div> current impact {{ this.solution.currentImpact }} </div>
               <div> Viewcount {{this.solution.viewCount}}</div>
            </v-row>
            <v-divider></v-divider>
        </v-card-text>
        <v-card-subtitle>{{this.solution.uploadDate}}</v-card-subtitle>
        <v-card-title> {{this.solution.weatherExtreme}} </v-card-title>
    </v-card>
    <!-- Reactions -->
    <v-card elevation="1">
        <v-card-title>Reactions</v-card-title>
        <!-- <div v-for="reaction in this.solution.reactions" :key="reaction.id">
            <div>{{reaction.id}}</div>
        </div> -->
        <!-- ?Laat hier elke reactie zien via een eigen view? -->
    </v-card>
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
        axios.get(process.env.VUE_APP_BASE_URL + "/Solutions/" + this.solutionId)
            .then((response) => { 
                this.solution = response.data;
            } );
    },
    methods:{

    }
}
</script>

<style>

</style>
