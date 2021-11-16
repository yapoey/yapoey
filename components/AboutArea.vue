<template>
  <!-- About Area Start -->
  <section class="about-area section-padding sky-blue" id="about">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-6 d-none d-lg-block">
          <!-- Start About Area Image -->
          <div class="img-about">
            <img
              class="img-fluid"
              src="/assets/img/about/aboutMe.png"
              alt="abou me"
            />
          </div>
          <!-- End About Area Image -->
        </div>

        <div class="col-lg-6 col-md-12">
          <!-- Start About Detail -->
          <div class="about-details">
            <div class="section-title mb-50">
              <h2>{{$t('AboutArea.aboutMe')}}</h2>
            </div>
            <p>
            {{$t('AboutArea.summery')}}.
            </p>
            <ul class="about-info mt-4">
              <li><span>{{$t('AboutArea.name')}}</span> <span>{{$t('Common.vName')}}</span></li>
              <li>
                <span>{{$t('AboutArea.dob')}}</span> <span>{{$t('Common.vDob')}}</span>
              </li>
              <li>
                <span>{{$t('AboutArea.address')}}</span> <span>{{$t('Common.vAddress')}}</span>
              </li>
<!--          <li><span>{{$t('AboutArea.zipCode')}}</span> <span>{{$t('Common.vZipcode')}}</span></li>-->
              <li><span>{{$t('Common.email')}}</span> <span>{{$t('Common.vEmail')}}</span></li>
              <li><span>{{$t('Common.phone')}}</span> <span>{{$t('Common.vPhone')}}</span></li>
            </ul>
            <div class="download-btn mt-5">
              <a class="btn radius-btn"
                 @click="$ga.event('AboutArea', 'Download detailed CV')"
                 :href="$t('doc.docx')">{{$t('AboutArea.downloadCv')}}</a>
            </div>
          </div>
          <!-- End About Detail -->
        </div>
      </div>
    </div>
  </section>
  <!-- About Area End -->
</template>

<script>
export default {
  name: "AboutArea"
};
</script>
