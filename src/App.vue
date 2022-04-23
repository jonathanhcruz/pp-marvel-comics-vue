<template>
  <div class="App">
    <SerchForm />
    <router-view />
  </div>
</template>

<script>
import SerchForm from "@/components/forms/SerchForm.vue";

export default {
  name: "App",
  components: {
    SerchForm,
  },
};
</script>
