<template>
  <div class="navigation m-3">
    <div class="container-lg">
      <div class="row">
        <div class="navigation__logo col-5">
          <router-link to="/" class="border-0">
            <img
              :src="require('@/assets/img/logos/marvel-logo.png')"
              alt="Marvel Comics"
              class="w-100"
            />
          </router-link>
        </div>
        <nav class="navigation__nav col-7 d-flex align-items-center">
          <ul class="d-flex m-0 p-0">
            <li>
              <router-link to="/comics">Comics</router-link>
            </li>
            <li>
              <router-link to="/personajes">Personajes</router-link>
            </li>
            <li>
              <router-link to="/eventos">Eventos</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationApp",
  created() {
    console.log(this.$route.name);
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  background-color: var(--primary);
  &__logo {
    max-width: 150px;
  }
  &__nav {
    a {
      padding: 0.5rem 1rem;
      color: var(--white);
      text-transform: capitalize;
    }
  }
  .router-link-exact-active {
    border-bottom: 2px solid var(--white);
  }
}
</style>
