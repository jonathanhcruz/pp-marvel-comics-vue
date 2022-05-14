<template>
  <div class="showComics">
    <template v-if="loading">
      <LoadingComponent class="showComics__loading mt-5" />
    </template>
    <template v-else>
      <div class="showComics__container">
        <div v-for="(commic, index) in comics" :key="`comic-${index}`">
          <CardComic
            :id="commic.id"
            :title="commic.title || commic.name"
            :imgUrl="structureImgUrl(commic)"
            :detail="detail"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CardComic from "@/components/card/CardComic";
import LoadingComponent from "@/components/loading/Loading";

export default {
  name: "ShowComics",
  components: {
    CardComic,
    LoadingComponent,
  },
  props: {
    keyword: {
      type: String,
      required: true,
    },
    limit: {
      type: Number,
      default: 10,
    },
    detail: {
      type: String,
      default: "",
    },
    format: {
      type: String,
    },
  },
  computed: {
    ...mapState(["comics", "loading"]),
  },
  created() {
    const { keyword, limit, format } = this;
    this.getMarvelComics({ keyword, limit, format });
  },
  methods: {
    ...mapActions(["getMarvelComics"]),
    structureImgUrl({ thumbnail: { path, extension } }) {
      return `${path}.${extension}`;
    },
  },
};
</script>

<style scoped lang="scss">
.showComics {
  &__loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 1rem;
  }
}
</style>
