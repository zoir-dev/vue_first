<template>
  <div>
    <h1 class="text-3xl text-center pt-8">Users</h1>
    <div class="w-[80%] mx-auto pt-8">
      <div v-if="!loading && users.length !== 0">
        <table
          class="min-w-full divide-y divide-gray-200 border-b-[1px] border-gray-200"
        >
          <thead>
            <tr>
              <th
                scope="col"
                class="px-6 py-3 text-left text-md font-medium text-gray-500 capitalize tracking-wider"
                v-for="(r, index) in ['Id', 'Email', 'Name', 'Image']"
                :key="index"
              >
                {{ r }}
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200">
            <tr v-for="user in users" :key="user.id">
              <td class="px-6 py-4 whitespace-nowrap">
                <p class="text-md">{{ user.id }}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <p class="text-md">{{ user.email }}</p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <p class="text-md">
                  {{ user.firstName + " " + user.lastName }}
                </p>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <router-link :to="'/users/' + user.id">
                  <div class="relative w-[40px] flex">
                    <span
                      class="animate-ping absolute inline-flex h-[80%] top-[10%] left-[10%] w-[80%] rounded-full bg-primary opacity-75"
                    ></span>
                    <img
                      :src="user.image"
                      loading="lazy"
                      alt="Avatar"
                      width="40"
                      height="40"
                      class="rounded-full cursor-pointer relative"
                    />
                  </div>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          class="flex items-center justify-center pt-[40px] smd:pt-[20px] gap-[10px]"
        >
          <span
            v-for="(p, index) in totalPage"
            :key="index"
            class="rounded-full border-primary border-[1px] !bg-[transparent] cursor-pointer select-none w-[30px] h-[30px] smd:w-[25px] smd:h-[25px] smd:text-[14px] flex items-center justify-center duration-500"
            :class="{ '!bg-primary text-white': page === p }"
            @click="$store.dispatch('setPage', p)"
            >{{ p }}</span
          >
        </div>
      </div>
      <h2
        v-else-if="!loading && users.length === 0"
        class="text-2xl text-center"
      >
        No data
      </h2>
      <h2 v-else class="text-2xl text-center">Loading...</h2>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { computed } from "vue";
import Navbar from "@/components/navbar/Navbar.vue";
export default {
  setup() {
    const store = useStore();
    const users = computed(() => store.getters.getUsers);
    const loading = computed(() => store.getters.isLoading);
    const page = computed(() => store.getters.getCurrentPage);
    const totalPage = computed(() => store.getters.getTotalPage);

    return {
      users,
      loading,
      page,
      totalPage,
      store,
    };
  },
  methods: {
    changePage(page) {
      store.dispatch("setPage", page);
    },
  },
  mounted() {
    this.$store.dispatch("fetchUsers");
  },

  watch: {
    async page() {
      await this.$store.dispatch("fetchUsers");
    },
  },
};
</script>
