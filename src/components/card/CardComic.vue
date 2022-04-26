<template>
  <router-link
    class="card-comics d-flex justify-content-center align-items-center p-0 w-100"
    :to="`/comic/${id}`"
  >
    <div class="card-comics__img w-100">
      <img
        :src="imgUrl"
        alt="{{ title }}"
        class="w-100 h-100 app__object-fit"
      />
    </div>
    <div class="card-comics__desc w-100">
      <h3 class="h4">{{ title }}</h3>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "CardComic",
  props: {
    id: {
      type: Number,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped lang="scss">
.card-comics {
  max-height: 300px;
  background-color: var(--gray);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid var(--gray);

  &__img {
    max-width: 200px;
    aspect-ratio: 9/15;
    box-shadow: 0 1rem 4rem rgba(0, 0, 0, 0.15);
    display: inline-block;
  }

  &__desc {
    padding: 1rem;
    display: inline-block;
  }
}
</style>
