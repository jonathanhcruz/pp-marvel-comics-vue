<template>
  <div class="detail">
    <h1>{{ $route.name }} {{ $route.params.id }}</h1>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { routesDetail } from "@/dictionaries/routeDetails";

export default {
  name: "DetailItem",
  components: {},
  created() {
    console.log({
      keyword: routesDetail?.[this.$route.name],
      id: this.$route.params.id,
    });
    this.getMarvelComicsById({
      keyword: routesDetail?.[this.$route.name],
      id: this.$route.params.id,
    });
  },
  methods: {
    ...mapActions(["getMarvelComicsById"]),
  },
};
</script>
