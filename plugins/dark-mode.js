import Vue from "vue";

let globalData = new Vue({
  data: { $isDark: false },
});
Vue.mixin({
  computed: {
    $isDark: {
      get: function () {
        return globalData.$data.$isDark;
      },
      set: function (newMode) {
        globalData.$data.$isDark = newMode;
      },
    },
  },
});
