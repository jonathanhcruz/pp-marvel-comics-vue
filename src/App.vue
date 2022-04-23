<template>
  <div class="App">
    <!-- <SerchForm /> -->
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
// import SerchForm from "@/components/forms/SerchForm.vue";

export default {
  name: "App",
  components: {
    // SerchForm,
  },
  beforeMount() {
    this.getMarvelComics();
  },
  methods: {
    ...mapActions(["getMarvelComics"]),
  },
};
</script>
