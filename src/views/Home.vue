<template>
  <div class="home">
    <h1>Home</h1>
    <div v-for="(commic, index) in comics" :key="`comic-${index}`">
      <h3>{{ commic.title }}</h3>
      <img :src="structureImgUrl(commic)" alt="" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  components: {},
  computed: {
    ...mapState(["comics"]),
  },
  methods: {
    structureImgUrl({ thumbnail: { path, extension } }) {
      return `${path}.${extension}`;
    },
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
