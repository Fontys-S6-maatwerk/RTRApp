<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-8">
          <v-card-text>
            <v-flex>
              <v-avatar size="100">
                <img :src="user.profileImage" alt="Avatar" />
              </v-avatar>

              <v-container>
                <v-btn
                  @click="$refs.file.click()"
                  height="50"
                  class="my-2"
                  block
                >
                  <v-icon left>mdi-upload</v-icon>
                  {{ $t("common.upload_image") }}
                </v-btn>
                <input
                  v-on:change="setProfileImage"
                  hidden
                  ref="file"
                  type="file"
                  accept="image/*"
                />
              </v-container>
            </v-flex>
            <v-text-field
              v-model="user.firstName"
              :label="$t('glossary.firstname')"
            ></v-text-field>
            <v-text-field
              v-model="user.lastName"
              :label="$t('glossary.lastname')"
            ></v-text-field>
            <v-text-field
              v-model="user.email"
              :label="$t('common.email')"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="update()">
              <v-icon left dark>mdi-check</v-icon>
              {{ $t("glossary.save_changes") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      user: this.$store.state.user.currentUser,
    };
  },
  methods: {
    ...mapActions("user", ["updateUser"]),
    setProfileImage(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files) return;

      let file = files[0];
      if (!file.type.match("image/*")) {
        return;
      }
      this.user.profileImage = window.URL.createObjectURL(file);
    },
    update() {
      this.updateUser(this.user);
    },
  },
};
</script>

<style>
</style>