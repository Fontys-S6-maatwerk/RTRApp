<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <!-- Solution -->
            <v-card elevation="1">
                <v-card-title class="justify-center">{{ this.solution.name }}</v-card-title>
                <v-row class="justify-center">
                    <v-card-subtitle>Current impact {{ this.solution.currentImpact }} / {{ this.solution.impactGoal }}</v-card-subtitle>
                </v-row>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                </v-img>
                <v-card-title>{{ this.solution.author }}</v-card-title>
                <v-card-subtitle class="text-left">{{ this.solution.weatherExtremeType }} </v-card-subtitle>
                <v-card-text>
                    <v-row class="justify-space-between">
                        <v-card-subtitle>{{ this.solution.numberOfLikes }} Likes</v-card-subtitle>
                        <v-card-subtitle>{{ this.solution.uploadDate }}</v-card-subtitle>
                        <v-card-subtitle> Viewcount {{this.solution.viewCount}}</v-card-subtitle>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6">
            <!-- Materials -->
            <v-card>
                <v-list>
                    <v-subheader>Materials</v-subheader>
                    <v-list-item 
                    v-for="(content, m) in this.solution.materials"
                    :key="m">
                        <v-list-item-content>
                            <v-list-item-icon>
                                <v-icon>mdi-toolbox</v-icon>
                            </v-list-item-icon>
                            <v-list-item-title v-text="content.content"></v-list-item-title>
                            <v-divider></v-divider>
                        </v-list-item-content>
                        
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="6">
            <!-- Steps -->
            <v-card>
                <v-list>
                    <v-subheader>Steps</v-subheader>
                    <v-list-item
                    v-for="(step, s) in this.solution.steps"
                    :key="s">
                        <v-list-item-content>                    
                            <v-img max-width="500" max-height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                            <v-list-item-title v-text="step.content"></v-list-item-title>
                        </v-list-item-content>
                        
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12">
            <!-- Reactions -->
            <v-card>
                <v-card-title class="justify-center">Reactions</v-card-title>
                <div v-for="reaction in this.solution.reactions" :key="reaction.id">
                    <div>{{reaction.id}}</div>
                </div>
                <!-- ?Laat hier elke reactie zien via een eigen view? -->
            </v-card>
        </v-col>
    </v-row>
</v-container>
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
        axios.get("http://localhost:3001/Solutions/" + this.solutionId)
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
