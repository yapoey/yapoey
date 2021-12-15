<template>
  <section v-if="item != null">
    <div class="contents">
      <div class="body sky-blue">
        <article>
          <h3># problem</h3>
          <p>
            {{ item.problem }}
          </p>
        </article>
        <article>
          <h3># Examples</h3>
          <div
            class="example-holder"
            v-for="(ex, index) in item.examples"
            :key="index"
          >
            <pre
              >{{ ex }}
          </pre
            >
          </div>
        </article>
        <article>
          <h3># Solutions</h3>
          <div
            class="code-holder"
            v-for="(solution, index) in item.solutions"
            :key="index"
          >
            <pre><code>{{ solution }}</code>
          </pre>
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
    getSpecificItem() {
      this.$axios
        .$get(
          "https://yapoey-blog-default-rtdb.firebaseio.com/problems/-Mqsut49ddDUsM6MZCtk/items/-MqswWreApzD7R9btPV2/list/" +
            this.$route.params.problemId +
            ".json"
        )
        .then((res) => {
          this.item = res;
          console.log(res);
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
section {
  padding: 20px;
}
.code-holder {
  background: #000;
  border-radius: 10px;
  padding: 16px;
  pre {
    color: #fff;
  }
  margin-bottom: 20px;
}
.example-holder {
  background: #f4f4f4;
  border-radius: 10px;
  padding: 16px;
  margin-bottom: 20px;
}
</style>
