import { createStore } from "vuex";

import robotModule from "./modules/robot";
import userModule from "./modules/user";

const store = createStore({
  modules: {
    user: userModule,
    robot: robotModule,
  },
});

export default store;
