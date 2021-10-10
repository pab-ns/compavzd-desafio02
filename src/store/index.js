import Vue from "vue";
import Vuex from "vuex";
import Firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  mutations: {
    SET_PACIENTES(state, nuevoPacientes) {
      state.pacientes = nuevoPacientes;
    },
  },
  actions: {
    traerTodosLosPacientes(context) {
      Firebase.firestore()
        .collection("patients")
        .get()
        .then((collection) => {
          // Paso 1
          const pacientesAux = [];

          // Paso 2
          collection.forEach((document) => {
            pacientesAux.push({ id: document.id, ...document.data() }); // . . .  object spread operator
          });

          // Paso 3
          context.commit("SET_PACIENTES", pacientesAux);
        });
    },
  },
  modules: {},
});
