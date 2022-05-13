<template>
  <div class="loading">
    <div class="spinner"></div>
  </div>
</template>

<script>
export default {
  name: "LoadingComponent",
};
</script>

<style>
.spinner {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 9px solid;
  border-color: var(--primary-dark);
  border-right-color: var(--gray-dark);
  animation: spinner-d3wgkg 1s infinite linear;
}

@keyframes spinner-d3wgkg {
  to {
    transform: rotate(1turn);
  }
}
</style>
