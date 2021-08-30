<template>
  <v-row justify="center">
    <v-dialog v-model="about" width="345px">
      <v-col cols="12" md="12">
        <v-card class="about">
          Infomovie was created to help find information about media content on
          the Internet (movies, series, music and games);
          <p>Provided by the IMDb® API.</p>
          <v-col>
            <v-row>
              <v-col cols="12" md="7">
                <h6>Designed and Developed by</h6>

                <h4>Guilherme Beitum.</h4>
              </v-col>
              <v-col cols="12" md="5">
                <v-img
                  :src="require('../assets/author.jpg')"
                  class="author"
                ></v-img>
              </v-col>
            </v-row>
          </v-col>
        </v-card>
      </v-col>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "ModalAbout",
  data() {
    return {};
  },

  computed: {
    about: {
      get() {
        return this.$store.state.modinfo.about;
      },

      set(newAbout) {
        this.$store.commit("SET_ABOUT", newAbout);
      },
    },
  },
};
</script>

<style>
.author {
  margin: 0 auto;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  -ms-border-radius: 50%;
  border-radius: 50%;
}

.about {
  padding: 19px;
}
</style>
