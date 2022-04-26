<template>
  <div class="home">
    <h1>Home</h1>
    <ShowComics />
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
