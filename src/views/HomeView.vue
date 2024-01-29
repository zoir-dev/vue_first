<template>
  <div class="h-[calc(100vh-70px)] overflow-auto pb-5">
    <Users />
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Navbar from "../components/navbar/Navbar.vue";
import Users from "../components/users/Users.vue";
export default {
  components: {
    Navbar,
    Users,
  },
};
</script>
