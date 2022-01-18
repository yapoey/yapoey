<template>
  <section v-if="item != null">
    <div class="contents">
      <div class="intro">
        <article class="lecture">
          <a :href="item.youtube" target="_blank">
            <i class="play-btn fa fa-play-circle-o"></i>
            {{ item.title }}
          </a>
        </article>

        <div>
          <h3>{{ item.title }}</h3>
          <p>
            {{ item.des }}
          </p>
          <p><i class="fa fa-user"></i> Created by yapoey</p>
          <p><i class="fa fa-language"></i> {{ item.lang }}</p>
          <p><i class="fa fa-clock-o"></i> {{ item.created_at }}</p>
        </div>
      </div>
      <div class="body sky-blue">
        <article v-if="item.contents">
          <h3># lecture contents</h3>
          <ul>
            <li v-for="(p, index) in item.contents" :key="index">{{ p }}</li>
          </ul>
        </article>
        <article v-if="item.detalis">
          <h3># Lecture Details</h3>
          <p>
            {{ item.detalis }}
          </p>
        </article>

        <article v-if="item.links">
          <h3># Important Links</h3>
          <div v-for="(l, key, index) in item.links" :key="index">
            <h4>{{ key }}</h4>
            <p>
              <a style="word-break: break-all" :href="l" target="_blank">{{
                l
              }}</a>
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  layout: "blog",
  data() {
    return {
      item: null,
    };
  },
  methods: {
    getCourse() {
      this.$axios
        .$get(
          "https://yapoey-blog-default-rtdb.firebaseio.com/courses/-MqtHi-8-KDwCZbKzxpj/items/" +
            this.$route.params.courseId +
            "/list/" +
            this.$route.params.lecture +
            ".json"
        )
        .then((res) => {
          this.item = res;
        });
    },
  },
  created() {
    this.getCourse();
  },
};
</script>
<style lang="scss" scoped>
@import "~assets/CSS/blog";
section {
  padding: 20px;
}
.lecture {
  padding: 0 20px;
  background-color: #5de6de;
  background-image: linear-gradient(315deg, #5de6de 0%, #b58ecc 74%);
  margin: 0 auto;
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 30px;
  color: var(--white-color);
  font-family: monospace;
  position: relative;
  min-height: 230px;
}
.play-btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  opacity: 0.7;
}
a {
  color: unset;
  flex: 1;
  text-align: center;
}
</style>
