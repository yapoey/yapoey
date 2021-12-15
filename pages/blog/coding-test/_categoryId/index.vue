<template>
  <section class="main" v-if="section != null">
    <div class="section-title">
      <h2>{{ section.title }}</h2>
    </div>

    <ul>
      <nuxt-link
        :to="'/blog/coding-test/' + $route.params.categoryId + '/' + key"
        tag="li"
        v-for="(i, key, index) in section.list"
        :key="key"
        class="problem-card"
      >
        <span>
          <span>#{{ index + 1 }}</span>
          <br />
          <span>{{ i.title }}</span>
        </span>
      </nuxt-link>
    </ul>
  </section>
</template>
<script>
export default {
  layout: "blog",
  data() {
    return {
      section: null,
    };
  },
  methods: {
    getSpecificItem() {
      this.$axios
        .$get(
          "https://yapoey-blog-default-rtdb.firebaseio.com/problems/-Mqsut49ddDUsM6MZCtk/items/" +
            this.$route.params.categoryId +
            ".json"
        )
        .then((res) => {
          this.section = res;
        });
    },
  },
  created() {
    this.getSpecificItem();
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/CSS/blog";
@import "~assets/CSS/list";
</style>
