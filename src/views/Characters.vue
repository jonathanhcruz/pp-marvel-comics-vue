<template>
  <div class="characters">
    <h1>Characters</h1>
    <ShowComics keyword="characters" :limit="30" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowComics from "@/components/shows/showComics";

export default {
  name: "CharactersView",
  components: {
    ShowComics,
  },
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
