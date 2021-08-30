<template>
  <v-dialog v-model="exit" width="170px">
    <v-col cols="12" md="12">
      <v-card class="about">
        really want to leave?
        <v-col cols="12" md="12">
          <v-spacer></v-spacer>
          <v-btn class="ma-2" color="red" dark @click="closeWindow()">
            EXIT
          </v-btn>
        </v-col>
      </v-card>
    </v-col>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalExit",
  data() {
    return {};
  },

  computed: {
    exit: {
      get() {
        return this.$store.state.modinfo.exit;
      },

      set(newExit) {
        this.$store.commit("SET_EXIT", newExit);
      },
    },
  },

  methods: {
    closeWindow() {
      window.opener = window;
      window.close();
    },
  },
};
</script>

<style></style>
