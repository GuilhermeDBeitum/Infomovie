<template>
  <v-app>
    <v-img
      v-if="this.$store.state.modinfo.movies == 0"
      :src="require('../assets/film.jpg')"
      class="film"
    >
    </v-img>

    <v-container fluid>
      <div v-if="this.$store.state.modinfo.dialog == true">
        <ModalMovie />
      </div>

      <v-row>
        <v-col v-if="this.$store.state.modinfo.movies != 0" cols="6" md="4">
          <embed
            allowfullscreen="false"
            id="ytplayer"
            type="text/html"
            class="movie"
            src="https://www.youtube.com/embed/tc1xKIn5Hp8?autoplay=1&mute=1"
            frameborder="0"
          />
        </v-col>
        <v-col cols="3" md="2" v-for="(sub, index) in movies" :key="index">
          <div class="box">
            <h1 v-if="sub.Poster != 'N/A'">
              <v-img
                :src="sub.Poster"
                aspect-ratio="1"
                @click.stop="
                  id = sub.imdbID;
                  dialog = true;
                  viewInfo();
                  indx = index;
                "
              >
                <div class="middle">
                  <span class="ctr">{{ sub.Title }}</span>
                  <span class="ctr2">{{ sub.Type }}</span>
                  <span class="ctr1">{{ sub.Year }}</span>
                </div>
              </v-img>
            </h1>
            <h1 v-else>
              <v-img :src="require('../assets/stock.svg')">
                <v-img
                  :src="sub.Poster"
                  aspect-ratio="1"
                  @click.stop="
                    id = sub.imdbID;
                    dialog = true;
                    viewInfo();
                    indx = index;
                  "
                >
                  <div class="middle">
                    <span class="ctr">{{ sub.Title }}</span>
                    <span class="ctr2">{{ sub.Type }}</span>
                    <span class="ctr1">{{ sub.Year }}</span>
                  </div>
                </v-img></v-img
              >
            </h1>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div v-if="this.$store.state.modinfo.movies != 0" class="text-center">
      <strong>
        <div class="results">
          Approximately
          {{ this.$store.state.modinfo.result || 0 }} results.
        </div>
      </strong>
    </div>
  </v-app>
</template>

<script>
import ModalMovie from "./ModalMovie";
import { mapGetters } from "vuex";
export default {
  name: "MovieList",
  components: {
    ModalMovie,
  },
  data() {
    return {
      index: {},
    };
  },

  computed: {
    ...mapGetters(["indx", "id", "dialog"]),

    movies() {
      let movies = this.$store.state.modinfo.movies;
      return movies;
    },

    indx: {
      get() {
        return this.$store.state.indx;
      },

      set(newIndx) {
        this.$store.commit("SET_INDX", newIndx);
      },
    },

    id: {
      get() {
        return this.$store.state.id;
      },

      set(newId) {
        this.$store.commit("SET_ID", newId);
      },
    },

    dialog: {
      get() {
        return this.$store.state.dialog;
      },

      set(newDialog) {
        this.$store.commit("SET_DIALOG", newDialog);
      },
    },
  },

  methods: {
    async viewInfo() {
      await this.$store.dispatch("viewInfo");
    },
  },
};
</script>

<style>
.results {
  margin: auto;
  font-size: 11px;
  width: 150px;
}

.movie {
  height: 275px;
  width: 400px;
}

.film {
  width: 500px;
  margin: auto;
}

.ctr {
  margin: 50px;
  color: white;
  font-weight: 1120px;
  display: inline-block;
  border-radius: 11px;
  box-shadow: 0 35px 25px rgba(0, 0, 0, 0.2);
}

.ctr1 {
  margin: 50px;
  color: white;
  font-weight: 1120px;
  border-radius: 11px;
  box-shadow: 0 35px 25px rgba(0, 0, 0, 0.2);
}

.ctr2 {
  margin: 50px;
  color: white;
  font-weight: 1120px;
  border-radius: 11px;
  box-shadow: 0 35px 25px rgba(0, 0, 0, 0.2);
}

.box:hover .image {
  opacity: 0.3;
}

.box:hover .middle {
  opacity: 1;
}
</style>
