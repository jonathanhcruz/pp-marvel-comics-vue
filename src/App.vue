<template>
  <div class="App">
    <NavigationApp />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import NavigationApp from "@/components/navigation/navigation.vue";
import "./scss/app.scss";

export default {
  name: "App",
  components: {
    NavigationApp,
  },
  beforeMount() {
    this.getMarvelComics();
  },
  methods: {
    ...mapActions(["getMarvelComics"]),
  },
};
</script>
