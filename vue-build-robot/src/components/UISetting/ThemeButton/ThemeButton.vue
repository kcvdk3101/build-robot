<template>
  <div>
    <input
      @change="toggleTheme"
      id="checkbox"
      type="checkbox"
      class="switch-checkbox"
    />
    <label for="checkbox" class="switch-label">
      <span>🌙</span>
      <span>☀️</span>
      <div
        class="switch-toggle"
        :class="{ 'switch-toggle-checked': userTheme === 'dark-theme' }"
      ></div>
    </label>
  </div>
</template>
<script lang="js">
export default {
  mounted() {
    const initUserTheme = this.getTheme() || this.getMediaPreference();
    this.setTheme(initUserTheme);
  },

  data() {
    return {
      userTheme: "light-theme",
    };
  },

  methods: {
    toggleTheme() {
      const activeTheme = localStorage.getItem("user-theme");
      if (activeTheme === "light-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },

    getTheme() {
      return localStorage.getItem("user-theme");
    },

    setTheme(theme) {
      localStorage.setItem("user-theme", theme);
      this.userTheme = theme;
      document.documentElement.className = theme;
    },

    getMediaPreference() {
      const hasDarkPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (hasDarkPreference) {
        return "dark-theme";
      } else {
        return "light-theme";
      }
    },
  },
};
</script>
<style scoped lang="css">
.switch-checkbox {
  display: none;
}

.switch-label {
  z-index: 1;
  position: relative;
  min-width: 65px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  background: var(--color-heading);
  border: 1px solid var(--color-heading);
  border-radius: 20px;
  transition: background 0.5s ease;
}

.switch-toggle {
  position: absolute;
  background-color: var(--color-background);
  border-radius: 50%;
  top: 4px;
  left: 5px;
  height: 24px;
  width: 24px;
  transform: translateX(0);
  transition: all 0.3s ease;
}

.switch-toggle-checked {
  background-color: var(--color-background);
  transform: translateX(32px) !important;
}
</style>
