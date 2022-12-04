<template>
  <div>
    <div class="header-collapse">
      <h3 v-once>Preview robot</h3>
      <button v-if="open" @click="handleClick()">Collapse</button>
      <button v-if="!open" @click="handleClick()" class="expand">Expand</button>
    </div>
    <Transition>
      <slot v-if="open"> </slot>
    </Transition>
  </div>
</template>

<script lang="js">
export default {
  name:"CollapsibleSection",
  data() {
    return {
      open : true,
    }
  },
  methods: {
    handleClick() {
      this.open = !this.open
    }
  }
};
</script>

<style scoped lang="css">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.header-collapse {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
}

.header-collapse h3 {
  color: var(--color-heading);
}

.expand {
  margin-bottom: 5px;
}
</style>
