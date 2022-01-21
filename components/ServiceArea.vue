<template>
  <!-- Services Area Start -->
  <section
    class="service-area section-padding"
    :class="[$store.getters.isDark ? '' : 'before-space']"
    id="services"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-5 mb-5 mb-lg-0">
          <div class="process-block pl-4">
            <span class="text-uppercase text-sm letter-spacing">{{
              $t("ServiceArea.services")
            }}</span>
            <h2 class="service-title mb-4 mt-3">
              {{ $t("ServiceArea.mainTitle") }}
            </h2>
            <p>
              {{ $t("ServiceArea.subTitle") }}
            </p>
          </div>
        </div>

        <div class="col-lg-7 col-md-12">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4 mb-4 mb-lg-0">
                <i class="fa fa-rocket"></i>
                <h4>{{ $t("ServiceArea.secTitle") }}</h4>
                <p>{{ $t("ServiceArea.subSec") }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center">
                <i class="fa fa-window-restore"></i>
                <h4>{{ $t("ServiceArea.thrTitle") }}</h4>
                <p>{{ $t("ServiceArea.subThr") }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mt-4">
                <i class="fa fa-cogs"></i>
                <h4>{{ $t("ServiceArea.fourthTitle") }}</h4>
                <p>{{ $t("ServiceArea.subFourth") }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>

            <div class="col-lg-6 col-md-6 col-sm-6">
              <!-- Start Single Service Block -->
              <div class="service-block text-center mb-4 mb-lg-0">
                <i class="fa fa-sitemap"></i>
                <h4>{{ $t("ServiceArea.firstTitle") }}</h4>
                <p>{{ $t("ServiceArea.subFirst") }}</p>
              </div>
              <!-- End Single Service Block -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Services Area End -->
</template>

<script>
export default {
  name: "ServiceArea",
};
</script>
