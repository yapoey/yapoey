import Vue from "vue";
// Vue.prototype.$isDark = true;

let globalData = new Vue({
  data: { $isDark: false },
});
Vue.mixin({
  computed: {
    $isDark: {
      get: function () {
        // let mode = localStorage.getItem("dark")
        //   ? localStorage.getItem("dark")
        //   : globalData.$data.$isDark;

        return globalData.$data.$isDark;
      },
      set: function (newMode) {
        // localStorage.setItem("dark", newMode);
        globalData.$data.$isDark = newMode;
      },
    },
  },
});
