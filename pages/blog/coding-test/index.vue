<template>
  <section v-if="problems != null">
    <div class="section-title">
      <h2>Test Categories</h2>
    </div>

    <ul>
      <nuxt-link
        :to="{
          path: '/blog/coding-test/' + key,
        }"
        tag="li"
        v-for="(i, key, index) in problems.items"
        :key="key"
      >
        <div class="problem-card">
          {{ i.title }}
        </div>
        <div class="item-info">
          <p><i class="fa fa-language"></i> : javascript</p>
          <p><i class="fa fa-tachometer"></i> {{ getLength(i.list) }}</p>
        </div>
      </nuxt-link>
    </ul>
  </section>
</template>
<script>
export default {
  layout: "blog",
  data() {
    return {
      problems: null,
    };
  },
  methods: {
    getCategories() {
      this.$axios
        .$get(
          "https://yapoey-blog-default-rtdb.firebaseio.com/problems/-Mqsut49ddDUsM6MZCtk.json"
        )
        .then((res) => {
          console.log(res);
          this.problems = res;
        });
    },
    getLength(obj) {
      if (obj) {
        return Object.keys(obj).length;
      }
    },
  },
  created() {
    this.getCategories();
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/CSS/blog";
@import "~assets/CSS/list";

.problem-card {
  background-color: #8bc6ec;
  background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);

  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 600;
  font-family: monospace;
  border-radius: 10px 10px 0 0;
}
</style>
