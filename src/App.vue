<template>
  <div class="App">
    <NavigationApp />
    <router-view />
  </div>
</template>

<script>
import NavigationApp from "@/components/navigation/navigation.vue";
import "./scss/app.scss";

export default {
  name: "App",
  components: {
    NavigationApp,
  },
};
</script>
