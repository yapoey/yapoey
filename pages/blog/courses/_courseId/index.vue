<template>
  <section class="main" v-if="courses != null">
    <div class="section-title">
      <h2>{{ courses.title }}</h2>
    </div>

    <ul>
      <nuxt-link
        :to="'/blog/courses/' + $route.params.courseId + '/' + key"
        tag="li"
        v-for="(i, key, index) in courses.list"
        :key="key"
      >
        <div class="card-intro">
          <span>#{{ index + 1 }} {{ i.title }}</span>
        </div>
        <div class="item-info">
          <p><i class="fa fa-language"></i> : {{ i.lang }}</p>
          <p><i class="fa fa-clock-o"></i> {{ i.time }}</p>
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
      courses: null,
    };
  },
  methods: {
    getCourses() {
      this.$axios
        .$get(
          "https://yapoey-blog-default-rtdb.firebaseio.com/courses/-MqtHi-8-KDwCZbKzxpj/items/" +
            this.$route.params.courseId +
            ".json"
        )
        .then((res) => {
          this.courses = res;
        });
    },
    getLength(obj) {
      if (obj) {
        return Object.keys(obj).length;
      }
    },
  },
  created() {
    this.getCourses();
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/CSS/blog";
@import "~assets/CSS/list";
</style>
