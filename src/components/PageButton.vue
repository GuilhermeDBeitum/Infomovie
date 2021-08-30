<template>
  <div v-if="this.$store.state.modinfo.movies != 0" class="text-center">
    <v-col cols="12" md="12">
      <div @click="listPage()">
        <v-pagination
          class="pagination"
          v-model="$store.state.modinfo.lang"
          :length="vetorSize"
          :total-visible="5"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          color="black"
          @click="listPage()"
        >
        </v-pagination>
      </div>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapGetters(["page"]),

    vetorSize() {
      let vetorSize = Math.round(this.$store.state.modinfo.result / 10);
      return vetorSize;
    },

    page: {
      get() {
        return this.$store.state.page;
      },

      set(newPage) {
        this.$store.commit("SET_PAGE", newPage);
      },
    },
  },

  methods: {
    async listPage() {
      this.page = this.$store.state.modinfo.lang;
      this.movies = this.$store.state.modinfo.movies;
      await this.$store.dispatch("listMovies");
    },
  },
};
</script>

<style>
.pagination {
  width: 1px;
  height: 50px;
  margin: auto;
}
</style>
