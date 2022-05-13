<template>
  <div class="events">
    <h1>Events</h1>
    <ShowComics keyword="events" :limit="15" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ShowComics from "@/components/shows/showComics";

export default {
  name: "EventsView",
  components: {
    ShowComics,
  },
  computed: {
    ...mapState(["comics"]),
  },
};
</script>

<style scoped>
img {
  max-width: 300px;
}
</style>
