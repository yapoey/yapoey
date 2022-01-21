<template>
  <!-- Start Footer -->
  <footer class="footer-area sky-blue">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer-top flex-column">
            <div class="footer-logo text-center">
              <a href="#">
                <img
                  v-if="$store.getters.isDark"
                  width="200"
                  src="/assets/img/logo.white.png"
                  alt="logo"
                />
                <img v-else width="200" src="/assets/img/logo.png" alt="logo" />
              </a>
              <h4>{{ $t("Common.follow") }}</h4>
            </div>
            <div class="footer-social text-center">
              <a href="https://www.facebook.com/myapoey/" target="_blank"
                ><i class="fa fa-facebook transition"></i
              ></a>
              <a href="https://www.linkedin.com/in/yapoey/" target="_blank"
                ><i class="fa fa-linkedin transition"></i
              ></a>
              <a href="https://github.com/yapoey" target="_blank"
                ><i class="fa fa-github transition"></i
              ></a>
              <!--              <a href="#"><i class="fa fa-youtube transition"></i></a>-->
            </div>
          </div>
        </div>
      </div>
      <div class="row footer-bottom text-center justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          Copyright ©All rights reserved | YapoeY is made with
          <i class="fa fa-heart-o" aria-hidden="true"></i> by
          <a href="https://yapoey.com" target="_blank">Mohamed Ibrahim</a>
        </p>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>
<script>
export default {
  name: "Footer",
};
</script>
