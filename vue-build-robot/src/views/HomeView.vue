<template>
  <div class="home">
    <img src="../assets/images/robot-home.png" alt="robot-home" />
    <a href="/build"><span>Get started</span> building your amazing robot </a>
  </div>
</template>

<script lang="js">
export default {
};
</script>

<style scoped lang="css">
a {
  font-size: 32px;
  color: var(--color-text);
}

span {
  color: var(--color-primary);
  padding: 5px;
  transition: all 0.1s ease-in;
}

span:hover {
  border-bottom: 2px solid var(--color-primary);
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.home > img {
  width: 450px;
  height: 450px;
}
</style>
