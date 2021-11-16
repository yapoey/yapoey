<template>
  <!-- Start Hire Me Area -->
  <section class="hire-me-area section-padding">
    <div class="container">
      <div class="row mb-50">
        <div class="col-lg-12">
          <div class="section-title">
            <h2>{{$t('Common.hireme')}}</h2>
            <p>
              {{$t('HireArea.des')}}
            </p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-4 col-md-4">
          <div class="hire-box">
            <h4>{{$t('Common.vPhone')}}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="hire-box">
            <h4>{{$t('Common.vEmail')}}</h4>
          </div>
        </div>
        <div class="col-lg-4 col-md-4">
          <div class="hire-box">
            <h4>{{$t('Common.website')}}</h4>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12 text-center">
          <a href="#" class="btn radius-btn  mt-50" data-text="Hire Me">
            {{$t('Common.hireme')}}
          </a>
        </div>
      </div>
    </div>
  </section>
  <!-- End Hire Me Area -->
</template>

<script>
export default {
  name: "HireArea"
};
</script>
