<template>
  <div class="showComics">
    <div v-for="(commic, index) in comics" :key="`comic-${index}`">
      <CardComic
        :id="commic.id"
        :title="commic.title"
        :imgUrl="structureImgUrl(commic)"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import CardComic from "@/components/card/CardComic";

export default {
  name: "ShowComics",
  components: {
    CardComic,
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

<style scoped lang="scss">
.showComics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 1rem;
}
</style>
