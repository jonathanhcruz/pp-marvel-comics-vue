<template>
  <form @submit.prevent="onSubmit">
    <input type="text" name="search" placeholder="Search..." v-model="search" />
    <button type="submit">Search</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SerchForm",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapActions(["getMarvelComics"]),
    onSubmit() {
      this.getMarvelComics();
    },
  },
};
</script>
