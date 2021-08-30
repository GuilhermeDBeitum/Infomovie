<template>
  <v-app id="inspire">
    <v-card color="grey">
      <v-toolbar dark height="65px">
        <!-- <v-btn">
          <v-icon>mdi-globe-model</v-icon>
        </v-btn> -->
        <v-tooltip v-model="show" right>
          <template v-slot:activator="{ on }">
            <div v-on="on">
              <v-checkbox
                class="sun"
                color="white"
                v-model="$vuetify.theme.dark"
                :src="require('./assets/dark.png')"
                off-icon="mdi-weather-sunny"
                on-icon="mdi-weather-sunny-off"
              />
            </div>
          </template>
          <span>Mode</span>
        </v-tooltip>

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-col cols="7" md="5">
          <v-text-field
            class="search"
            color="black"
            clearable
            hide-details
            prepend-inner-icon="mdi-magnify"
            solo-inverted
            v-model="vsearch"
            v-on:keyup.enter="listMovies()"
          ></v-text-field>
        </v-col>

        <v-spacer></v-spacer>

        <v-card class="px-1 v-indexMenu">
          <v-navigation-drawer
            dark
            mini-variant
            mini-variant-width="50"
            permanent
          >
            <v-list>
              <v-list-item>
                <v-tooltip v-model="show1" left>
                  <template v-slot:activator="{ on }">
                    <v-btn v-on="on" @click.stop="about = true">
                      <v-img
                        :src="require('./assets/info.png')"
                        aspect-ratio="1"
                        width="30"
                      ></v-img>
                    </v-btn>
                  </template>
                  <span>About</span>
                </v-tooltip>
              </v-list-item>
              <v-tooltip v-model="show2" left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    v-on="on"
                    width="50"
                    height="3px"
                    icon
                    color="white"
                    @click.stop="exit = true"
                    >X</v-btn
                  >
                </template>
                <span>Exit</span>
              </v-tooltip>
            </v-list>
          </v-navigation-drawer>
        </v-card>
      </v-toolbar>

      <div v-if="this.$store.state.modinfo.movies == 0" class="intro">
        <span style="color: white"
          >Search for movies, series, music and games.</span
        >
      </div>

      <MovieList />

      <PageButton />

      <ModalAbout />

      <ModalExit />

      <v-col></v-col>
      <v-footer app height="28" color="black">
        <span style="color: white">&copy; InfoMovie 2020.</span>
      </v-footer>
    </v-card>
  </v-app>
</template>

<script>
import MovieList from "./components/MovieList";
import PageButton from "./components/PageButton";
import ModalAbout from "./components/ModalAbout.vue";
import ModalExit from "./components/ModalExit.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    MovieList,
    PageButton,
    ModalAbout,
    ModalExit,
  },

  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      vsearch: null,
    };
  },

  computed: {
    ...mapGetters(["search", "about", "lang", "exit"]),

    search: {
      get() {
        return this.$store.state.search;
      },

      set(newSearch) {
        this.$store.commit("SET_SEARCH", newSearch);
      },
    },

    about: {
      get() {
        return this.$store.state.about;
      },

      set(newAbout) {
        this.$store.commit("SET_ABOUT", newAbout);
      },
    },

    lang: {
      get() {
        return this.$store.state.lang;
      },

      set(newLang) {
        this.$store.commit("SET_LANG", newLang);
      },
    },

    exit: {
      get() {
        return this.$store.state.exit;
      },

      set(newExit) {
        this.$store.commit("SET_EXIT", newExit);
      },
    },
  },
  methods: {
    async listMovies() {
      this.lang = 1;
      this.$store.state.modinfo.page = 1;
      this.search = this.vsearch;
      this.movies = this.$store.state.modinfo.movies;
      await this.$store.dispatch("listMovies");
    },
  },

  metaInfo: {
    title: "InfoMovie",
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "Meu portfólio profissional com meus trabalho de web design",
        vmid: "desc1",
      },
      {
        name: "keywords",
        content: "Design, Portfólio",
        vmid: "key1",
      },
      {
        name: "author",
        content: "Guilherme Douglas Beitum",
        vmid: "author1",
      },

      {
        property: "og:title",
        content: "website",
      },

      {
        property: "og:image",
        content: "./assets/movie.png",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:url",
        content: "https://infomovie.web.app/",
      },
      {
        property: "og:site_name",
        content: "InfoMovie",
      },
      {
        property: "og:description",
        content: "Search for movies, series, music and games.",
      },
      { property: "fb:app_id", content: "123456789" },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:url",
        content: "https://infomovie.web.app/",
      },
      {
        name: "twitter:title",
        content: "InfoMovie",
      },
      {
        name: "twitter:description",
        content: "Search for movies, series, music and games",
      },
      {
        name: "twitter:image",
        content: "./assets/movie.png",
      },
      {
        name: "twitter:creator",
        content: "@guilherme_beitum",
      },
      { itemprop: "name", content: "InfoMovie", id: "name1" },
      {
        itemprop: "description",
        content: "Search for movies, series, music and games",
        vmid: "desc2",
      },
    ],
  },
};
</script>

<style>
.search {
  width: 300px;
}

.sun {
  margin: -20px;
  margin-left: 4px;
}

.intro {
  margin: auto;
  font-size: 12px;
  width: 250px;
}
</style>
