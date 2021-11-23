<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-8">
                    <v-card-title>
                        <v-app-bar dark color="primary">                        
                            <v-app-bar-title>Solut {{ $t("common.login") }}</v-app-bar-title>
                            <v-spacer></v-spacer>
                            <v-icon>
                              mdi-earth
                            </v-icon>
                        </v-app-bar>
                    </v-card-title>
                    <v-card-text>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                    >
                        <v-text-field
                            prepend-icon="mdi-account"
                            name="name"
                            :label="$t('common.name')"
                            type="text"
                            :rules="nameRules"
                        ></v-text-field>
                        <v-text-field
                            prepend-icon="mdi-lock"
                            name="password"
                            :label="$t('common.password')"
                            type="password"
                            :rules="passwordRules"
                        ></v-text-field>
                    </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="px-6" color="primary" @click="submit()">{{ $t('common.login') }}</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

    data() {
        return {
            valid: true,
            name: '',
            nameRules: [
                v => !!v || this.$t('validation.required'),
                v => (v && v.length >= 6 && v.length <= 10) || this.$t('validation.must_be_between_characters', { min: 6, max: 10 } )
            ],
            password: '',
            passwordRules: [
                v => !!v || this.$t('validation.required'),
                v => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) || this.$t('validation.password_requirements', { min: 8 } )
            ],
        }
    },
    methods: {
        submit() {
            this.$refs.form.validate();
        },     
        reset () {
            this.$refs.form.reset();
        },
        resetValidation () {
            this.$refs.form.resetValidation();
        },
    }
}
</script>

<style>

</style>