import Vue from "vue";
// Vue.prototype.$isDark = true;

let globalData = new Vue({
  data: { $isDark: true },
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
