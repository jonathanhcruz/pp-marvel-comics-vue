<template>
  <div class="App">
    <NavigationApp />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <router-view />
        </div>
      </div>
    </div>
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
