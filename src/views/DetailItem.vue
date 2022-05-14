<template>
  <div class="detail my-4">
    <template v-if="loading">
      <LoadingComponent class="detail__loading mt-5" />
    </template>
    <template v-else>
      <section class="detail__container">
        <div class="detail__container__img">
          <img :src="urlImage(marvelDetailItem)" alt="" />
        </div>
        <article class="detail__container__desc">
          <h1>
            {{
              marvelDetailItem?.title
                ? marvelDetailItem?.title
                : marvelDetailItem?.name
            }}
          </h1>
          <p v-html="marvelDetailItem?.description" />
          <p v-if="marvelDetailItem.prices?.[0]?.price" class="h5">
            Price ${{ marvelDetailItem.prices?.[0]?.price }}
          </p>
          <a
            v-if="marvelDetailItem?.urls?.[0]?.url"
            :href="marvelDetailItem?.urls?.[0]?.url"
            target="_blank"
            class="btn btn-primary"
            >Ver más</a
          >
          <!-- <pre>{{ marvelDetailItem }}</pre> -->
        </article>
      </section>
    </template>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { routesDetail } from "@/dictionaries/routeDetails";
import LoadingComponent from "@/components/loading/Loading";

export default {
  name: "DetailItem",
  components: {
    LoadingComponent,
  },
  computed: {
    ...mapState(["marvelDetailItem", "loading"]),
  },
  created() {
    this.getMarvelComicsById({
      keyword: routesDetail?.[this.$route.name],
      id: this.$route.params.id,
    });
  },
  methods: {
    ...mapActions(["getMarvelComicsById"]),
    urlImage(data) {
      const {
        thumbnail: { path, extension },
      } = data;
      return path + "." + extension;
    },
  },
};
</script>

<style lang="scss" scoped>
.detail {
  &__loading {
    display: flex;
    justify-content: center;
  }
  &__container {
    display: grid;
    grid-template-columns: minmax(300px, 1fr) 1fr;
    gap: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    &__img {
      aspect-ratio: 9 / 16;
      margin: 0 auto;
      width: 100%;
      max-width: 400px;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    &__desc {
      justify-content: center;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
}
</style>
