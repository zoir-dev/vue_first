<template>
  <div class="flex justify-center items-center h-[90vh]">
    <div
      class="p-5 rounded-md shadow-lg flex flex-col gap-5 min-w-[300px] items-center relative text-center"
      v-if="!loading"
    >
      <span class="absolute top-5 left-5">{{ user.id }}</span>
      <img :src="user.image" class="w-[100px]" alt="" />
      <div>
        <p>{{ user.firstName + " " + user.lastName }}</p>
        <p class="text-xs opacity-75">{{ user.email }}</p>
      </div>
      <p>{{ user.university }}</p>
    </div>
    <h2 class="text-2xl font-bold" v-else>Loading...</h2>
  </div>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    const user = computed(() => store.getters.getUser);
    const loading = computed(() => store.getters.isLoading);
    return {
      user,
      loading,
    };
    console.log(user);
  },
  mounted() {
    this.$store.dispatch("fetchUser", this.userId);
  },
};
</script>
