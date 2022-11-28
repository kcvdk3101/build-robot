<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/icons/logo.svg" />

    <nav>
      <div v-for="(link, index) in routerLinks" :key="index">
        <RouterLink :to="{ path: link.path }">{{ link.label }}</RouterLink>
      </div>
    </nav>

    <UISetting />
  </header>
</template>
<script lang="js">
import routerLinks from '../../constants/routerLinks';
import UISetting from '../UISetting/UISetting.vue';

export default {
  name: "HeaderComponent",
  data(){
    return {
      routerLinks
    }
  },
  components: {
    UISetting
  }
};
</script>
<style scoped lang="css">
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 5rem;
  height: 5rem;
}

nav div {
  display: inline-block;
  padding: 0 1rem;
  font-size: 18px;
}

nav div a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav div a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>
