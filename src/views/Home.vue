<template>
  <div class="home">
    <ShowComics
      :limit="100"
      detail="comic"
      keyword="comics"
      format="hardcover"
    />
  </div>
</template>

<script>
import ShowComics from "@/components/shows/showComics";

export default {
  name: "HomeView",
  components: {
    ShowComics,
  },
};
</script>
