<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Desafio 02" /> -->
    <h1>Desafio 02</h1>

    <button @click="$store.dispatch('traerTodosLosPacientes')">
      Actualizar pacientes
    </button>
    <ul>
      <li v-for="paciente in $store.state.pacientes" :key="paciente.id">
        {{ paciente.name }} {{ paciente.surname }} - {{ paciente.age }} |
        {{ paciente.prevision }}
      </li>
    </ul>
  </div>
</template>

<script>
// import Firebase from "firebase";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data: () => ({
    // pacientes: [],
  }),
  mounted() {
    // this.$store.dispatch("traerTodosLosPacientes");
    // Firebase.firestore()
    //   .collection("patients")
    //   .get()
    //   .then((collection) => {
    //     collection.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() }); // . . .  object spread operator
    //     });
    //   });
    // Firebase.firestore()
    //   .collection("patients")
    //   .onSnapshot((querySnapshot) => {
    //     this.pacientes = [];
    //     querySnapshot.forEach((document) => {
    //       this.pacientes.push({ id: document.id, ...document.data() });
    //     });
    //   });
  },

  components: {
    // HelloWorld,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
