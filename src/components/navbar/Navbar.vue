<template>
  <header
    class="px-7 py-4 flex items-center justify-between shadow-md bg-gray-100 dark:bg-slate-800 dark:text-white"
  >
    <div class="flex items-center gap-2">
      <img class="w-10" src="../../assets/logo.svg" alt="" />
      <p class="text-lg font-bold">
        First try with <span class="text-primary">Vue</span>
      </p>
    </div>
    <div class="checkbox-wrapper-54">
      <label class="switch">
        <input
          type="checkbox"
          :checked="darkMode"
          @input="changeTheme($event.target.checked)"
        />
        <span class="slider"></span>
      </label>
    </div>
  </header>
</template>
<script>
import Icon from "@/components/icons/IconCommunity.vue";
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  components: {
    Icon,
  },
  methods: {
    changeTheme(e) {
      localStorage.setItem("theme", `${e}`);
      if (
        localStorage.theme === "true" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
  mounted() {
    this.darkMode = JSON.parse(localStorage.getItem("theme") || "false");
    this.changeTheme(this.darkMode);
  },
};
</script>
<style></style>
