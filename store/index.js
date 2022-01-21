import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      mode: "light",
    },
    mutations: {
      setMode(state, envMode) {
        console.log(envMode);
        Cookie.set("mode", envMode);
        state.mode = envMode;
      },
    },
    actions: {
      initColorMode(vuexContext, req) {
        let mode;
        if (req) {
          if (!req.headers.cookie) {
            mode = "light";
          } else {
            let cookieColorMode = req.headers.cookie
              .split(";")
              .find((c) => c.trim().startsWith("mode=", ""));
            console.log("yapoeyt", cookieColorMode);
            if (!cookieColorMode) {
              cookieColorMode = "light";
            }
            mode = cookieColorMode;
          }
        } else {
          mode = Cookie.get("mode");
        }
        console.log("hey hey I am oiuuuiuuuuu", mode);
        vuexContext.commit("setMode", mode);
      },
      setColorMode(vuexContext, mode) {
        vuexContext.commit("setMode", mode);
      },
    },
    getters: {
      isDark(state) {
        return state.mode === "dark";
      },
    },
  });
};

export default createStore;
