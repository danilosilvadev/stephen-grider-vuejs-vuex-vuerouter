<template>
  <div>
    <a href="#" @click="login">Login</a>
    <div v-if="isLoggedIn">Está logado</div>
    <div v-else>Está deslogado</div>
    <button @click="logout">Logout</button>
    <router-link to="/another_page">AnotherPage</router-link>
    <router-link to="/">Root</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: mapActions(["login", "logout"]),
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
