import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const api = 'https://movie-database-imdb-alternative.p.rapidapi.com/';
const header = {
  'Access-Control-Allow-Origin': '*',
  'x-rapidapi-host': 'host',
  'x-rapidapi-key': 'key'
};

const SET_ID = "SET_ID";
const SET_INDX = "SET_INDX";
const SET_INFO = "SET_INFO";
const SET_PAGE = "SET_PAGE";
const SET_LANG = "SET_LANG";
const SET_EXIT = "SET_EXIT";
const SET_ABOUT = "SET_ABOUT";
const SET_RESULT = "SET_RESULT";
const SET_SEARCH = "SET_SEARCH";
const SET_MOVIES = "SET_MOVIES";
const SET_DIALOG = "SET_DIALOG";
const SET_LOADING = "SET_LOADING";

const moduleInfo = {
  state: {
    id: {},
    indx: {},
    info: [],
    page: 1,
    lang: null,
    exit: false,
    about: false,
    result: {},
    search: {},
    movies: [],
    dialog: false,
    loading: false,
  },
  getters: {
    id: (state) => {
      return state.id;
    },
    indx: (state) => {
      return state.indx;
    },
    info: (state) => {
      return state.info;
    },
    page: (state) => {
      return state.page;
    },
    lang: (state) => {
      return state.lang;
    },
    exit: (state) => {
      return state.exit;
    },
    about: (state) => {
      return state.about;
    },

    result: (state) => {
      return state.result;
    },
    search: (state) => {
      return state.search;
    },
    movies: (state) => {
      return state.movies;
    },
    dialog: (state) => {
      return state.dialog;
    },
    loading: (state) => {
      return state.loading;
    },
  },
  mutations: {
    [SET_ID](state, id) {
      state.id = id;
    },
    [SET_INDX](state, indx) {
      state.indx = indx;
    },
    [SET_INFO](state, info) {
      state.info = info;
    },
    [SET_PAGE](state, page) {
      state.page = page;
    },
    [SET_LANG](state, lang) {
      state.lang = lang;
    },
    [SET_EXIT](state, exit) {
      state.exit = exit;
    },
    [SET_ABOUT](state, about) {
      state.about = about;
    },
    [SET_RESULT](state, result) {
      state.result = result;
    },
    [SET_SEARCH](state, search) {
      state.search = search;
    },
    [SET_MOVIES](state, movies) {
      state.movies = movies;
    },
    [SET_DIALOG](state, dialog) {
      state.dialog = dialog;
    },
    [SET_LOADING](state, loading) {
      state.loading = loading;
    },
  },
  actions: {
    async listMovies({ commit, state }) {
      const options = {
        method: "GET",
        url: api,
        params: { s: state.search, page: state.page, r: "json" },
        headers: header,
      };

      await axios
        .request(options)
        .then((response) => (this.resp = response.data))
        .catch(() =>
          Vue.toasted.error(
            "InfoMovie has exceeded the maximum number of requests, please try again later!"
          ))

      this.result = this.resp.totalResults;
      this.movies = this.resp.Search;
      commit(SET_RESULT, this.result);
      commit(SET_MOVIES, this.movies);
    },

    async viewInfo({ commit, state }) {
      const options = {
        method: "GET",
        url: api,
        params: { i: state.id, r: "json" },
        headers: header,
      };
      state.loading = true;
      await axios
        .request(options)
        .then((response) => (this.info = response.data))
        .catch(() =>
        Vue.toasted.error(
          "InfoMovie has exceeded the maximum number of requests, please try again later!"
        ))
        
      commit(SET_INFO, this.info);
      state.loading = false;
    },
  },
};

const store = new Vuex.Store({
  modules: {
    modinfo: moduleInfo,
  },
});

export default store;