import Vue from "vue";
import App from "./App.vue";
import store from "./store";

// Firebase 8
import Firebase from "firebase";
import { firebaseConfig } from "../firebase-config";
Firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;
new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
