<template>
  <div class="dark:bg-slate-700 dark:text-white min-h-screen">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Navbar from "./components/navbar/Navbar.vue";
import Users from "./components/users/Users.vue";
export default {
  components: {
    Navbar,
    Users,
  },
};
</script>
