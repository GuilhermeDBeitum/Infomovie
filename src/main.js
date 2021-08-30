import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "./scss/style.scss";
import VueMeta from "vue-meta";
import Toasted from "vue-toasted";
Vue.use(Toasted);

Vue.use(VueMeta, {
  keyName: "metaInfo",
  attribute: "data-vue-meta",
  ssrAttribute: "data-vue-meta-server-rendered",
  tagIDKeyName: "vmid",
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = true;

new Vue({
  store,
  vuetify,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
