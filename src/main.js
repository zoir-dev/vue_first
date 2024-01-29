import "./styles/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createStore } from "vuex";
import users from "./store/modules/users";

const app = createApp(App);

const store = createStore({
  modules: {
    users,
  },
});

app.use(router);
app.use(store);

app.mount("#app");
