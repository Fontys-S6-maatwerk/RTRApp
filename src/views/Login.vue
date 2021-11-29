<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-8">
          <v-card-title>
            <v-app-bar dark color="primary">
              <v-app-bar-title>Solut {{ $t("common.login") }}</v-app-bar-title>
              <v-spacer></v-spacer>
              <v-icon> mdi-earth </v-icon>
            </v-app-bar>
          </v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                prepend-icon="mdi-email"
                name="email"
                v-model="login.email"
                :label="$t('common.email')"
                type="email"
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                prepend-icon="mdi-lock"
                name="password"
                v-model="login.password"
                :label="$t('common.password')"
                type="password"
                :rules="passwordRules"
              ></v-text-field>
            </v-form>
            <v-alert type="error" color="red" v-if="error">
              {{ error }}
            </v-alert>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="px-6" color="primary" @click="validate()">{{
              $t("common.login")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import AuthenticationContext from "@/data/authentication-context";

export default {
  data() {
    return {
      authenticationContext: new AuthenticationContext(),
      valid: true,
      error: "",
      login: {
        email: "",
        password: "",
      },
      emailRules: [
        (v) => !!v || this.$t("validation.required"),
        (v) => /.+@.+\..+/.test(v) || this.$t("validation.email_valid"),
      ],
      passwordRules: [
        (v) => !!v || this.$t("validation.required"),
        (v) =>
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(v) ||
          this.$t("validation.password_requirements", { min: 8 }),
      ],
    };
  },
  mounted() {},
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.authenticationContext.login(this.login).then((user) => {
          //todo: save user in store
          if (user && user.id) {
            this.$router.push({ name: "Home" });
          } 
          else this.error = this.$t('validation.invalid_credentials');
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>