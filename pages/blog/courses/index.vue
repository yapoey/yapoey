<template>
  <section v-if="courses != null">
    <div class="section-title">
      <h2>Courses</h2>
    </div>
    <ul>
      <nuxt-link
        :to="{
          path: '/blog/courses/' + key,
        }"
        tag="li"
        v-for="(i, key, index) in courses.items"
        :key="i.id"
      >
        <div class="card-intro">{{ i.title }}</div>
        <div class="card-footer">
          <p>
            {{ i.des }}
          </p>
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
          "https://yapoey-blog-default-rtdb.firebaseio.com/courses/-MqtHi-8-KDwCZbKzxpj.json"
        )
        .then((res) => {
          this.courses = res;
        });
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
.card-intro {
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  height: 250px;
  font-family: monospace;
  font-size: 30px;
  color: var(--white-color);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px 10px 0 0;
}
</style>
