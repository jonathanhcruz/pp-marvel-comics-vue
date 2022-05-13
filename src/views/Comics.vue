<template>
  <div class="comics">
    <h1>Comics</h1>
    <showComics />
  </div>
</template>

<script>
import { mapState } from "vuex";
import showComics from "@/components/shows/showComics";

export default {
  name: "ComicsView",
  components: {
    showComics,
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
