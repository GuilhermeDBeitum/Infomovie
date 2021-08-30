<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="500px">
      <v-card class="mx-auto" max-width="500">
        <v-overlay :value="loading">
          <v-card-text>
            Carregando...
            <v-progress-circular
              indeterminate
              color="white"
              class="mb-0"
            ></v-progress-circular>
          </v-card-text>
        </v-overlay>
        <v-card-title>
          <span class="headline2">{{ info.Title }}</span>
          <v-spacer></v-spacer>
          <span>{{ info.Runtime }}</span>
        </v-card-title>
        <v-row no-gutters>
          <v-col cols="9" md="6">
            <div v-if="movies[indx].Poster != 'N/A'">
              <v-img
                class="aranged"
                :src="movies[indx].Poster"
                aspect-ratio="0.6"
                width="220"
              >
                <v-row no-gutters>
                  <v-col cols="6" sm="6" md="6">
                    <li class="info2">Votes: {{ info.imdbVotes }}</li>
                  </v-col>
                  <v-col cols="6" md="6">
                    <li class="info2">Rating: {{ info.imdbRating }}</li>
                  </v-col>
                </v-row>
              </v-img>
            </div>
            <div v-else>
              <v-img class="aranged" :src="require('../assets/stock.svg')">
                <v-row no-gutters>
                  <v-col cols="6" sm="6" md="6">
                    <li class="info2">Votes: {{ info.imdbVotes }}</li>
                  </v-col>
                  <v-col cols="6" md="6">
                    <li class="info2">Rating: {{ info.imdbRating }}</li>
                  </v-col>
                </v-row></v-img
              >
            </div>
          </v-col>
          <v-col cols="10" md="6">
            <v-card class="pa-8" outlined tile width="420">
              <ul>
                <li class="infos">
                  <strong>Released:</strong> {{ info.Released }}
                </li>
                <li class="infos">
                  <strong>Diretors: </strong> {{ info.Director }}
                </li>
                <li class="infos">
                  <strong>Writers: </strong> {{ info.Writer }}
                </li>
                <li class="infos">
                  <strong>Actors: </strong> {{ info.Actors }}
                </li>
              </ul>
            </v-card>
          </v-col>
          <v-card>
            <span class="info1"> <strong>Plot: </strong> {{ info.Plot }}</span>
          </v-card>
        </v-row>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "Moviecard",
  data() {
    return {};
  },

  computed: {
    info() {
      let info = this.$store.state.modinfo.info;

      return info;
    },

    movies() {
      let movies = this.$store.state.modinfo.movies;
      return movies;
    },

    indx() {
      let indx = this.$store.state.modinfo.indx;
      return indx;
    },

    loading: {
      get() {
        return this.$store.state.modinfo.loading;
      },

      set(newLoading) {
        this.$store.commit("SET_LOADING", newLoading);
      },
    },

    dialog: {
      get() {
        return this.$store.state.modinfo.dialog;
      },

      set(newDialog) {
        this.$store.commit("SET_DIALOG", newDialog);
      },
    },
  },
};
</script>

<style>
ul {
  list-style-image: url("http://i.stack.imgur.com/5kI3v.png");
}

.media-post {
  display: block;
  padding: 2px;
  border-radius: 11px;
  box-shadow: 0 25px 1px rgba(0, 0, 0, 0.2);
  background: black;
  text-align: center;
  text-align-last: center;
}

.middle {
  transition: 0.5s ease;
  opacity: 0;
  background-color: rgba(0, 8, 0, 0.7);
  font-size: 14px;
  text-align: center;
  text-align-last: center;
  height: 275px;
  cursor: pointer;
}

.infos {
  margin: 3px;
  display: inline-block;
  font-size: 13px;
  padding: 3px;
}

.info1 {
  margin: 10px;
  display: inline-block;
  font-size: 13px;
  padding: 10px;
}

.info2 {
  margin: auto;
  border-radius: 11px;
  list-style-image: url("http://i.stack.imgur.com/5kI3v.png");
  background-color: black;
  color: white;
  font-size: 10px;
  height: 30px;
  width: 95px;
}

.aranged {
  margin-left: 17px;
  height: 320px;
}
</style>
