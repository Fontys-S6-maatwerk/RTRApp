<template>
<v-container>
    <v-row>
        <v-col cols="12">
            <!-- Solution -->
            <v-card elevation="1">
                <v-card-title class="justify-center">{{ this.solution.name }}</v-card-title>
                <v-row class="justify-center">
                    <v-card-subtitle>
                        <v-progress-linear color="#037CBC" height="15" :value="this.percentage">{{this.percentage}}%</v-progress-linear>
                        {{ $t('common.current_impact') }} {{ this.solution.currentImpact }} / {{ this.solution.impactGoal }}
                    </v-card-subtitle>

                </v-row>
                <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                </v-img>
                <v-row>
                    <v-col cols="6">
                        <router-link :to="{ name: 'Profile', params: { author: this.solution.author}}">
                            <v-card-title>
                                <v-avatar class="mr-2">
                                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                                </v-avatar>
                                {{ this.solution.author }}
                            </v-card-title>
                        </router-link>
                    </v-col>
                        
                    <v-col cols="6">
                        <v-container fluid>
                            <v-card-text> 
                                <a href="https://sdgs.un.org/goals/goal13" target="_blank">Sustainable Development Goal 13</a>
                            </v-card-text>
                        </v-container>
                    </v-col>
                </v-row>
                
                <v-card-subtitle class="text-left">{{ this.solution.weatherExtremeType }} </v-card-subtitle>
                <v-card-text>
                    <v-row class="justify-space-between">
                        <v-card-subtitle>{{ this.solution.numberOfLikes }} {{ $t('common.likes') }}</v-card-subtitle>
                        <v-card-subtitle>{{ this.solution.uploadDate }}</v-card-subtitle>
                        <v-card-subtitle> {{ $t('common.view_count') }} {{this.solution.viewCount}}</v-card-subtitle>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="6">
            <!-- Materials -->
            <v-card>
                <v-list>
                    <v-subheader>{{ $t('common.materials') }}</v-subheader>
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
                    <v-subheader>{{ $t('common.steps') }}</v-subheader>
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
                <v-card-title class="justify-center">{{ $t('common.comments') }}</v-card-title>
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
            solution: {},
            percentage: 0
        }

    },
    mounted(){
        axios.get(process.env.VUE_APP_BASE_URL + "/Solutions/" + this.solutionId)
            .then((response) => { 
                this.solution = response.data;
                this.calculateImpactPercentage();
            } );
    },
    methods:{
        calculateImpactPercentage(){
            this.percentage = Math.floor((this.solution.currentImpact / this.solution.impactGoal) * 100);
        }
    }
}
</script>

<style>
</style>
