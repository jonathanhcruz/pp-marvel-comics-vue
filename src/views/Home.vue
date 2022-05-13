<template>
  <div class="home">
    <ShowComics :limit="100" page="home" />
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
